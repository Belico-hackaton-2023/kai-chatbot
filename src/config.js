import { createChatBotMessage } from 'react-chatbot-kit'
// import LearningOptions from './components/LearningOptons/LearningOptions';
import DogPicture from './components/DogPicture';

const config = {
  botName: "KAI",
  initialMessages: [createChatBotMessage(`Holi crayoli`)],
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ]
};

export default config;