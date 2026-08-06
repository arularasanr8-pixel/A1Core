import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AppLayout from "../../components/layout/AppLayout";
import { addProduct } from "../../services/productService";

export default function ProductFormPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [stock, setStock] = useState("");
  const [gst, setGst] = useState("");

  const handleSave = async () => {
    if (!name || !brand || !category) {
      alert("Please fill all required fields");
      return;
    }

    await addProduct({
      productCode: "",
      name,
      brand,
      category,
      purchasePrice: Number(purchasePrice),
      sellingPrice: Number(sellingPrice),
      stock: Number(stock),
      gst: Number(gst),
      active: true,
      createdAt: new Date(),
    });

    alert("Product Added Successfully");

    navigate("/products");
  };

  return (
    <AppLayout>
      <div className="max-w-3xl rounded-xl bg-white p-6 shadow">
        <h1 className="mb-6 text-3xl font-bold">
          Add Product
        </h1>

        <div className="grid grid-cols-2 gap-4">

          <input
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border p-3"
          />

          <input
            placeholder="Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="rounded-lg border p-3"
          />

          <input
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg border p-3"
          />

          <input
            type="number"
            placeholder="GST %"
            value={gst}
            onChange={(e) => setGst(e.target.value)}
            className="rounded-lg border p-3"
          />

          <input
            type="number"
            placeholder="Purchase Price"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
            className="rounded-lg border p-3"
          />

          <input
            type="number"
            placeholder="Selling Price"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            className="rounded-lg border p-3"
          />

          <input
            type="number"
            placeholder="Opening Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="rounded-lg border p-3"
          />

        </div>

        <button
          onClick={handleSave}
          className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Save Product
        </button>

      </div>
    </AppLayout>
  );
}