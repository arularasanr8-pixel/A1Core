import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBy0U8LgLZVW7g7-ZvnaetA1Fwm8wVzuxY",
  authDomain: "a1mobiles-e3565.firebaseapp.com",
  databaseURL: "https://a1mobiles-e3565-default-rtdb.firebaseio.com",
  projectId: "a1mobiles-e3565",
  storageBucket: "a1mobiles-e3565.firebasestorage.app",
  messagingSenderId: "580145709367",
  appId: "1:580145709367:web:8f7907e6764eaab76d5ab2",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);