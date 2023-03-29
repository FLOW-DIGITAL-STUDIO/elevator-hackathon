// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk8ofki6IE-sHB6ypZFPwkiJeogHByH18",
  authDomain: "elevator-3d746.firebaseapp.com",
  projectId: "elevator-3d746",
  storageBucket: "elevator-3d746.appspot.com",
  messagingSenderId: "110247167237",
  appId: "1:110247167237:web:4391b586c0b4e48706e36c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);