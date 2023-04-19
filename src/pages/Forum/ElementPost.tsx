import React, { useEffect, useState } from 'react'
import { PostL } from './Post';
import { auth, db } from '../../config/firebase';
import { collection, addDoc, query, where, getDocs , deleteDoc, doc} from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

interface Props {
    post: PostL;
}

interface Like {
    likeId: string,
    userId: string,
}

const ElementPost = (props: Props) => {

    const { post } = props;
    const [user] = useAuthState(auth);

    const [likes, setLikes] = useState<Like[] | null>(null);

    const likesRef = collection(db, "likes");
    const likesDoc = query(likesRef, where("postId", "==", post.id));

    const getLikes = async () => {
        const data = await getDocs(likesDoc);
        setLikes(data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id})));
    };

    const addLike = async () => {
        try { 
            const newDoc = await addDoc(likesRef, {
                userId: user?.uid ,
                postId: post.id ,
            });

            if (user) {
                setLikes((prev) => prev ? [...prev, { userId: user?.uid, likeId: newDoc.id  }] : [{ userId: user?.uid, likeId: newDoc.id }]);
            } 
        } catch (err) {
            console.log(err);
        }
       
    };
    const removeLike = async () => {
        try { 
            const likeToDeleteQuery = query(likesRef, where("postId", "==", post.id), where("userId", "==", user?.uid));
            const likeToDeleteData = await getDocs(likeToDeleteQuery);
            const likeId = likeToDeleteData.docs[0].id
            const likeToDelete = doc(db, "likes", likeId);
            
            await deleteDoc(likeToDelete);

            if (user) {
                setLikes((prev) => prev && prev.filter((like) => like.likeId !== likeId));
            }
        } catch (err) {
            console.log(err);
        }
       
    };
   

    const userLiked = likes?.find((like) => like.userId === user?.uid);

    useEffect(() => {
        getLikes();
    }, []);

  return (
        <div className='element_post'>
            <div className='element_post_title'>
                <h1>{post.title}</h1>
            </div>
            <div className='element_post_des'>
                <p>{post.description}</p>
            </div>
            <div className='element_post_author'>
                <p>@{post.username}</p>
                <button onClick={userLiked ? removeLike : addLike}> {userLiked ? <>&#128078;</> : <>&#128077;</>} </button>
                {likes?.length && <p>Likes: {likes.length}</p>}
            </div>
        </div> 
  )
}

export default ElementPost