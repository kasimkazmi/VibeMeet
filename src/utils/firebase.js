// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {firebase} from "@react-native-firebase/auth"
import { getAuth, FacebookAuthProvider } from "firebase/auth";

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh_UbxELQkUwWrTBRTAqqGXGvqnzPiAzs",
  authDomain: "vb-meet.firebaseapp.com",
  projectId: "vb-meet",
  storageBucket: "vb-meet.appspot.com",
  messagingSenderId: "427149026502",
  appId: "1:427149026502:web:e5476ab9b7b88a79d0a3c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth =firebase.auth()
export const authentication = getAuth( app)

const db = getFirestore(app);
const provider = new FacebookAuthProvider();


// export {auth}
