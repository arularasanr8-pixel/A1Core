import {
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { auth, db } from "../config/firebase";

// Login using Staff ID + Password
export async function login(staffId: string, password: string) {
  const q = query(
    collection(db, "users"),
    where("staffId", "==", staffId)
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    throw new Error("Staff ID not found");
  }

  const user = snapshot.docs[0].data();

  const credential = await signInWithEmailAndPassword(
    auth,
    user.email,
    password
  );

  return credential.user;
}

// Logout
export async function logout() {
  await signOut(auth);
}