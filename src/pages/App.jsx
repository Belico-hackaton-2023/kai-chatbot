import React, { useEffect, useContext } from 'react'
import { ThemeProvider } from 'styled-components';
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import ChatBotBox from '../pages/ChatBotBox'
import theme from '../styles/thememui'


const App = () => {
  const navigate = useNavigate()
  const { userData } = useContext(UserContext)
  const validateSignin = () => {
    userData === null && navigate('/')
  }
  useEffect(() => {
    validateSignin()
  }, [userData]);
  return (
    <>
      <ThemeProvider theme={theme}>
      <ChatBotBox />
      </ThemeProvider>
    </>
  )
}

export default App
