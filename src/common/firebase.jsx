import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBVjJmfPUNQQJv67dViPIUYfXcRWX8DtBw",
    authDomain: "react-pro-blog-per.firebaseapp.com",
    projectId: "react-pro-blog-per",
    storageBucket: "react-pro-blog-per.firebasestorage.app",
    messagingSenderId: "310814494912",
    appId: "1:310814494912:web:dadd02477ded3500fa9d25"
  };
  

const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}