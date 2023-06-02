import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCrIytsWe_hmOGsf42g5rRvc1DfIv6EbFQ",
  authDomain: "kai-bot-2ea3f.firebaseapp.com",
  projectId: "kai-bot-2ea3f",
  storageBucket: "kai-bot-2ea3f.appspot.com",
  messagingSenderId: "349141999373",
  appId: "1:349141999373:web:a2ef9aa9d67fea2ca81a44"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);