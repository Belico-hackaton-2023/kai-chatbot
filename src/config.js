import { createChatBotMessage } from 'react-chatbot-kit'
// import DogPicture from './DogPicture';

const config = {
  botName: "KAI",
  initialMessages: [createChatBotMessage(`Holi crayoli`)],
  // widgets: [
  //   {
  //     widgetName: 'dogPicture',
  //     widgetFunc: () => (<DogPicture />)
  //   },
  // ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#377e7c",
    },
    chatButton: {
      backgroundColor: "#377e7c",
    },
  },
};

export default config;