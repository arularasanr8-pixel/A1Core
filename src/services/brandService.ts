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
import type { Brand } from "../types/brand";

const brandRef = collection(db, "brands");

// Get All Brands
export async function getBrands() {
  const snapshot = await getDocs(brandRef);

  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  })) as Brand[];
}

// Get Single Brand
export async function getBrand(id: string) {
  const snapshot = await getDoc(doc(db, "brands", id));

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as Brand;
}

// Generate Brand Code
async function generateBrandCode() {
  const snapshot = await getDocs(brandRef);

  const count = snapshot.size + 1;

  return `BRD${count.toString().padStart(5, "0")}`;
}

// Add Brand
export async function addBrand(brand: Brand) {
  const code = await generateBrandCode();

  await addDoc(brandRef, {
    ...brand,
    code,
  });
}

// Update Brand
export async function updateBrand(
  id: string,
  brand: Partial<Brand>
) {
  await updateDoc(doc(db, "brands", id), brand);
}

// Delete Brand
export async function deleteBrand(id: string) {
  await deleteDoc(doc(db, "brands", id));
}