// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT_vegHszqTckVdkWKOy_sd0uDBMcpBUU",
  authDomain: "todo-app-786eb.firebaseapp.com",
  projectId: "todo-app-786eb",
  storageBucket: "todo-app-786eb.appspot.com",
  messagingSenderId: "508191634030",
  appId: "1:508191634030:web:7212d7c6987babda86ac7f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
