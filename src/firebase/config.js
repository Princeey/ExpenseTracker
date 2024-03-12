
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5zQQhKR4p9P-yupyEQ93Nb2qdW2Qajuo",
  authDomain: "todos-30d42.firebaseapp.com",
  projectId: "todos-30d42",
  storageBucket: "todos-30d42.appspot.com",
  messagingSenderId: "141478201071",
  appId: "1:141478201071:web:0e5ed1b9e4faf4f503fd1a"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 const db = getFirestore();

 export default db;``