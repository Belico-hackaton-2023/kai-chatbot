import React from 'react'
import Chatbot from 'react-chatbot-kit'
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

import './App.css'

const App = () => {

  return (
    <>
      <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
    </>
  )
}

export default App
