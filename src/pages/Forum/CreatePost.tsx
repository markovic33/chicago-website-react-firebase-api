import React from 'react';
import {useForm} from 'react-hook-form';
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import { addDoc, collection } from 'firebase/firestore';
import {db} from '../../config/firebase';
import { auth } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';


interface CreatePostData {
    title: string;
    description: string;
}


const CreatePost = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("You must add title"),
        description: yup.string().required("You must add descprition"),

    });

    const {register, handleSubmit, formState: { errors },} = useForm<CreatePostData>({
        resolver: yupResolver(schema),
    })

    const postsRef = collection(db, "posts");

    const onCreatePost = async (data: CreatePostData) => {
       await addDoc(postsRef, {
        ...data,
        username: user?.displayName,
        userId: user?.uid,
       });
       navigate("/forum");
    };

  return (
    
    <form className='create_form' onSubmit={handleSubmit(onCreatePost)}>
        <h1>Create Post</h1>
        <input className='create_input' placeholder='Title...' {...register("title")} />
        <p style={{color: "red"}}>{errors.title?.message}</p>
        <textarea className='create_text' placeholder='Description...'{...register("description")} />
        <p style={{color: "red"}}>{errors.description?.message}</p>
        <input className='create_button' type="submit" />
    </form>
  )
}

export default CreatePost