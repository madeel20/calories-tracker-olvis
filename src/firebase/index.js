import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyC4z-GnymORYvud_kiV5h9rd00TN1_LGTc",
    authDomain: "calories-app-aebea.firebaseapp.com",
    projectId: "calories-app-aebea",
    storageBucket: "calories-app-aebea.appspot.com",
    messagingSenderId: "1008496467681",
    appId: "1:1008496467681:web:4d0673535264fdd7e1a1a0"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const database = firebase.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
