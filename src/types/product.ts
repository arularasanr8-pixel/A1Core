export interface Product {
  id?: string;
  productCode: string;
  name: string;
  brand: string;
  category: string;
  purchasePrice: number;
  sellingPrice: number;
  stock: number;
  gst: number;
  active: boolean;
  createdAt: Date;
}