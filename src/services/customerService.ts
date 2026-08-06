import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../config/firebase";
import type { Customer } from "../types/customer";

const customerRef = collection(db, "customers");

// Get All Customers
export async function getCustomers() {
  const snapshot = await getDocs(customerRef);

  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  })) as Customer[];
}

// Get Single Customer
export async function getCustomer(id: string) {
  const snapshot = await getDoc(doc(db, "customers", id));

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as Customer;
}

// Generate Customer Code
async function generateCustomerCode() {
  const snapshot = await getDocs(customerRef);

  const count = snapshot.size + 1;

  return `CUS${count.toString().padStart(5, "0")}`;
}

// Add Customer
export async function addCustomer(customer: Customer) {
  const customerCode = await generateCustomerCode();

  await addDoc(customerRef, {
    ...customer,
    customerCode,
  });
}

// Update Customer
export async function updateCustomer(
  id: string,
  customer: Partial<Customer>
) {
  await updateDoc(doc(db, "customers", id), customer);
}

// Delete Customer
export async function deleteCustomer(id: string) {
  await deleteDoc(doc(db, "customers", id));
}