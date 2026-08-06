import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AppLayout from "../../components/layout/AppLayout";
import {
  getProduct,
  updateProduct,
} from "../../services/productService";

export default function ProductEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [stock, setStock] = useState("");
  const [gst, setGst] = useState("");

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    if (!id) return;

    const data = await getProduct(id);

    if (data) {
      setName(data.name);
      setBrand(data.brand);
      setCategory(data.category);
      setPurchasePrice(data.purchasePrice.toString());
      setSellingPrice(data.sellingPrice.toString());
      setStock(data.stock.toString());
      setGst(data.gst.toString());
    }

    setLoading(false);
  };

  const handleUpdate = async () => {
    if (!id) return;

    if (!name || !brand || !category) {
      alert("Please fill all required fields");
      return;
    }

    await updateProduct(id, {
      name,
      brand,
      category,
      purchasePrice: Number(purchasePrice),
      sellingPrice: Number(sellingPrice),
      stock: Number(stock),
      gst: Number(gst),
    });

    alert("Product Updated Successfully");

    navigate("/products");
  };

  if (loading) {
    return (
      <AppLayout>
        <p>Loading...</p>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="max-w-3xl rounded-xl bg-white p-6 shadow">

        <h1 className="mb-6 text-3xl font-bold">
          Edit Product
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
          onClick={handleUpdate}
          className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Update Product
        </button>

      </div>
    </AppLayout>
  );
}