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
import type { Product } from "../types/product";

const productRef = collection(db, "products");

// Get All Products
export async function getProducts() {
  const snapshot = await getDocs(productRef);

  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  })) as Product[];
}

// Get Single Product
export async function getProduct(id: string) {
  const snapshot = await getDoc(doc(db, "products", id));

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as Product;
}

// Generate Product Code
async function generateProductCode() {
  const snapshot = await getDocs(productRef);

  const count = snapshot.size + 1;

  return `PRO${count.toString().padStart(5, "0")}`;
}

// Add Product
export async function addProduct(product: Product) {
  const productCode = await generateProductCode();

  await addDoc(productRef, {
    ...product,
    productCode,
  });
}

// Update Product
export async function updateProduct(
  id: string,
  product: Partial<Product>
) {
  await updateDoc(doc(db, "products", id), product);
}

// Delete Product
export async function deleteProduct(id: string) {
  await deleteDoc(doc(db, "products", id));
}