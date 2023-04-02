import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyD_wgbzpm2duL_lxq8sBHRGOPDfhbICOIc",
  authDomain: "clone-do-tiktok---jornada-dev.firebaseapp.com",
  projectId: "clone-do-tiktok---jornada-dev",
  storageBucket: "clone-do-tiktok---jornada-dev.appspot.com",
  messagingSenderId: "525635653874",
  appId: "1:525635653874:web:1a42d669abcdec77f9806b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;