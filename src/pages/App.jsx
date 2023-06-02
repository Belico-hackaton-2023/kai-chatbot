import React, { useEffect, useContext } from 'react'
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import SearchGlosary from '../components/SearchGlosary/SearchGlosary';
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import headKaiImg from '../content/images/kai-head.svg'


// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};


const steps = [
  {
    id: '1',
    message: 'Cuentame que quieres saber hoy?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 1, label: 'Glosario', trigger: '3' },
      // { value: 2, label: 'Beneficios', trigger: '4' },
      // { value: 3, label: 'Areas', trigger: '5' },
    ],
  },
  {
    id: '3',
    message: 'Escribe alguna palabra que no sepas de kushki',
    trigger: 'word',
  },
  {
    id: 'word',
    user: true,
    trigger: 'definition',
  },
  {
    id: 'definition',
    component: <SearchGlosary />,
    asMessage: true,
  },
];


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
        <ChatBot steps={steps} botAvatar={headKaiImg} />
      </ThemeProvider>
    </>
  )
}

export default App
