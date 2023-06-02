import React, { useEffect, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import ChatBotBox from '../pages/ChatBotBox'


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
      <ChatBotBox />
    </>
  )
}

export default App
