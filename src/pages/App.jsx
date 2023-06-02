import React, { useEffect, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import ChatBotBox from '../pages/ChatBotBox'
import Login from '../pages/Login'
import { Route, Routes } from "react-router-dom"

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
      <Routes>
        <Route path="/" element={<ChatBotBox />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
