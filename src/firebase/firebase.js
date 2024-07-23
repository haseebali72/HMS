import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage"



const firebaseConfig = {
  apiKey: "AIzaSyDgIbPuGFq6Agk3x5jzs8itLtmXkJPi3ts",
  authDomain: "hospital-management-syst-36f76.firebaseapp.com",
  projectId: "hospital-management-syst-36f76",
  storageBucket: "hospital-management-syst-36f76.appspot.com",
  messagingSenderId: "879766135301",
  appId: "1:879766135301:web:92245d331e2f671edf726c",
  measurementId: "G-TMYCE87PSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export {app, auth, db, storage}