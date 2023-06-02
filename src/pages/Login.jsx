import React, { useEffect, useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { auth, googleProvider } from '../api/firebase.config';
import { signInWithPopup, signOut } from "firebase/auth";
import { UserContext } from '../context/UserContext';

import { Container } from '@mui/material'

const Login = () => {
  console.log(auth)
  const navigate = useNavigate()
  const { userData, setData } = useContext(UserContext)
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log(signInWithPopup(auth, googleProvider))
      setData(auth.currentUser)
      navigate('/')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <div>
        <button className="button" onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with google</button>
      </div>
    </Container>
  )
}

export default Login