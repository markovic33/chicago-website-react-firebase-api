import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import ElementPost from './ElementPost';

export interface PostL {
    id: string,
    userId: string,
    title: string,
    username: string,
    description: string,
}

const Post = () => {

    const postsRef = collection(db, "posts");
    const [postsList, setPostsList] = useState<PostL[] | null>(null);

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostsList(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as PostL[]
        );
    };

    useEffect(() => {
        getPosts();
    }, [])

  return (
    <div className='post__'>
        <h1 className='post__hh'>Posts</h1>
        {
            postsList?.map((post) =>
             <ElementPost post={post} /> 
            )
        }
    </div>
  )
}

export default Post