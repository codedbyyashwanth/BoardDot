import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
      apiKey: "AIzaSyD3g54HrlTb9ipbcexgfw_uiBFEu9PnpXw",
      authDomain: "dashboard-30351.firebaseapp.com",
      projectId: "dashboard-30351",
      storageBucket: "dashboard-30351.appspot.com",
      messagingSenderId: "649886467879",
      appId: "1:649886467879:web:769d5f4096511c40a00b02"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export const signIn = () => signInWithPopup(auth, provider)