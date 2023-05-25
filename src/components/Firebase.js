// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeaTr2fzLXOeF10piAPTOfiWzjHbk0Smw",
  authDomain: "react-chat-fb43a.firebaseapp.com",
  projectId: "react-chat-fb43a",
  storageBucket: "react-chat-fb43a.appspot.com",
  messagingSenderId: "512534578526",
  appId: "1:512534578526:web:305b8039328eff26d73bcf",
  measurementId: "G-J7WTK24MZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);