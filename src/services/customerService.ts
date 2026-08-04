import {
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";

import { db } from "../config/firebase";
import type { Customer } from "../types/customer";

const customerRef = collection(db, "customers");

export async function getCustomers() {
  const snapshot = await getDocs(customerRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Customer[];
}

export async function addCustomer(customer: Customer) {
  await addDoc(customerRef, customer);
}