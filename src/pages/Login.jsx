import React, { useEffect, useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { auth, googleProvider } from '../api/firebase.config';
import { signInWithPopup, signOut } from "firebase/auth";
import { UserContext } from '../context/UserContext';

import { Container } from '@mui/material'

import Grid from '@mui/material/Grid';

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
      <Grid container className="loginCss" spacing={2}>
        <Grid item xs={12}>
         <img className="welcomeText" src="https://raw.githubusercontent.com/Belico-hackaton-2023/kai-chatbot/de5c8560726010873dc0705199aae30c1d2c7b23/src/content/images/Text%20Welcome.svg" />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
         <img className="textoBlanco" src="https://raw.githubusercontent.com/Belico-hackaton-2023/kai-chatbot/de5c8560726010873dc0705199aae30c1d2c7b23/src/content/images/Text.svg" />
        </Grid>
        
        <Grid item display="flex" flexDirection="column">
          <img className="bubbleOne" src="https://raw.githubusercontent.com/Belico-hackaton-2023/kai-chatbot/de5c8560726010873dc0705199aae30c1d2c7b23/src/content/images/Bubble%20%2B%20message.svg" />
          <button className="imageButton button" onClick={signInWithGoogle}><i className="fab fa-google"></i>
            <img src="https://raw.githubusercontent.com/Belico-hackaton-2023/kai-chatbot/bfba712e8759118fbf3efd115bd2eab1b5ecf970/src/content/images/Login%20Button.svg"/>
          </button>
        </Grid>
        <Grid item>
        <img className="hushkyPet" src="https://raw.githubusercontent.com/Belico-hackaton-2023/kai-chatbot/de5c8560726010873dc0705199aae30c1d2c7b23/src/content/images/Hushky.svg" />
        </Grid>
      </Grid>
      </div>
    </Container>
  )
}

export default Login
