// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu09pDHrX6USkPT0jGFpNPn2A1BQ6V7gE",
  authDomain: "auth-development-cedf6.firebaseapp.com",
  projectId: "auth-development-cedf6",
  storageBucket: "auth-development-cedf6.appspot.com",
  messagingSenderId: "1000794681717",
  appId: "1:1000794681717:web:67325e16ba98750682233c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export const auth = getAuth();
export default storage;
