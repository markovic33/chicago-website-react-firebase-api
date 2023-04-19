import React from 'react'
import { auth, provider } from '../../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './login.css';


const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/");
  };

  return (
    <div className='login__'>
        <p>Sign in With Google To Continue</p>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
}

export default Login