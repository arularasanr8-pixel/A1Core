import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AppLayout from "../../components/layout/AppLayout";
import {
  getCustomer,
  updateCustomer,
} from "../../services/customerService";

export default function CustomerEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    loadCustomer();
  }, []);

  const loadCustomer = async () => {
    if (!id) return;

    const data = await getCustomer(id);

    if (data) {
      setName(data.name);
      setMobile(data.mobile);
      setEmail(data.email);
      setAddress(data.address);
    }

    setLoading(false);
  };

  const handleUpdate = async () => {
    if (!id) return;

    if (!name || !mobile) {
      alert("Name and Mobile are required.");
      return;
    }

    await updateCustomer(id, {
      name,
      mobile,
      email,
      address,
    });

    alert("Customer updated successfully");

    navigate("/customers");
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
      <div className="max-w-2xl rounded-xl bg-white p-6 shadow">

        <h1 className="mb-6 text-3xl font-bold">
          Edit Customer
        </h1>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Customer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border p-3"
          />

          <input
            type="text"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full rounded-lg border p-3"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border p-3"
          />

          <textarea
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full rounded-lg border p-3"
            rows={4}
          />

          <button
            onClick={handleUpdate}
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Update Customer
          </button>

        </div>

      </div>
    </AppLayout>
  );
}