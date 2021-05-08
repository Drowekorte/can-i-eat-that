import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyDbmkv3v6WdlJ5OdHuBvLLRLFROcrVth-k",
  authDomain: "can-i-eat-that-d11ed.firebaseapp.com",
  projectId: "can-i-eat-that-d11ed",
  storageBucket: "can-i-eat-that-d11ed.appspot.com",
  messagingSenderId: "477223806458",
  appId: "1:477223806458:web:4fdf2320faa132f7e73043",
  measurementId: "G-V1PSVTC1JE",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
