import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AppLayout from "../../components/layout/AppLayout";
import { addBrand } from "../../services/brandService";

export default function BrandFormPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const handleSave = async () => {
    if (!name.trim()) {
      alert("Brand name is required");
      return;
    }

    await addBrand({
      code: "",
      name,
      active: true,
      createdAt: new Date(),
    });

    alert("Brand Added Successfully");

    navigate("/brands");
  };

  return (
    <AppLayout>
      <div className="max-w-xl rounded-xl bg-white p-6 shadow">

        <h1 className="mb-6 text-3xl font-bold">
          Add Brand
        </h1>

        <input
          type="text"
          placeholder="Brand Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-6 w-full rounded-lg border p-3"
        />

        <button
          onClick={handleSave}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Save Brand
        </button>

      </div>
    </AppLayout>
  );
}