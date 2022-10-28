import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-538a4.firebaseapp.com",
  projectId: "tutorial-538a4",
  storageBucket: "tutorial-538a4.appspot.com",
  messagingSenderId: "453631372977",
  appId: "1:453631372977:web:87e5815fb4762737737c90"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
