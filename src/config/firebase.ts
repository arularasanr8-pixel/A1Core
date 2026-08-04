import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCEnPgOBs3NNdy87d4jkk30MtuXLqMzTrI",
  authDomain: "a1core.firebaseapp.com",
  projectId: "a1core",
  storageBucket: "a1core.firebasestorage.app",
  messagingSenderId: "677794069002",
  appId: "1:677794069002:web:6c197f308c0c9c6a4f7df3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;