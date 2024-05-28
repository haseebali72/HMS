import { createContext } from "react";
import  {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyANvQdcOhT1eMQq-YH2C1R3U2x_Z1iHUxM",
  authDomain: "hospital-management-syst-fbe0c.firebaseapp.com",
  projectId: "hospital-management-syst-fbe0c",
  storageBucket: "hospital-management-syst-fbe0c.appspot.com",
  messagingSenderId: "610887386335",
  appId: "1:610887386335:web:2cc8c738cfab459f4c956a",
  databaseURL : "https://hospital-management-syst-fbe0c-default-rtdb.firebaseio.com"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp)



export const FirebaseContext = createContext(null)

