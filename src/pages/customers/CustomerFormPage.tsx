import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../../components/layout/AppLayout";
import { addCustomer } from "../../services/customerService";

export default function CustomerFormPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSave = async () => {
    if (!name || !mobile) {
      alert("Name and Mobile are required");
      return;
    }

    await addCustomer({
      customerCode: `CUS${Date.now()}`,
      name,
      mobile,
      email,
      address,
      branchId: "BR001",
      active: true,
      createdAt: new Date(),
    });

    alert("Customer Added Successfully");

    navigate("/customers");
  };

  return (
    <AppLayout>
      <div className="max-w-2xl bg-white rounded-xl shadow p-6">

        <h1 className="text-3xl font-bold mb-6">
          Add Customer
        </h1>

        <div className="space-y-4">

          <input
            placeholder="Customer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <input
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <textarea
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Save Customer
          </button>

        </div>

      </div>
    </AppLayout>
  );
}