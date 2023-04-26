// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUueiiGndVLtnvFoA-VtZOrYTkKCyeOt4",
  authDomain: "ema-jone-with-firebase.firebaseapp.com",
  projectId: "ema-jone-with-firebase",
  storageBucket: "ema-jone-with-firebase.appspot.com",
  messagingSenderId: "298658084065",
  appId: "1:298658084065:web:4e19291a8632aed28933a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;