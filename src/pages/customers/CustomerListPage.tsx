import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2, Search } from "lucide-react";

import AppLayout from "../../components/layout/AppLayout";
import {
  getCustomers,
  deleteCustomer,
} from "../../services/customerService";
import type { Customer } from "../../types/customer";

export default function CustomerListPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const data = await getCustomers();
    setCustomers(data);
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );

    if (!confirmDelete) return;

    await deleteCustomer(id);

    loadCustomers();
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase()) ||
    customer.mobile.includes(search) ||
    customer.customerCode.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppLayout>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Customers</h1>

        <button
          onClick={() => navigate("/customers/new")}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          + Add Customer
        </button>
      </div>

      {/* Search */}
      <div className="mb-4 flex items-center rounded-lg border bg-white px-3">
        <Search size={18} className="text-gray-400" />

        <input
          type="text"
          placeholder="Search customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 outline-none"
        />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl bg-white shadow">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">Code</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Mobile</th>
              <th className="p-3 text-left">Branch</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.id} className="border-t">
                <td className="p-3">{customer.customerCode}</td>
                <td className="p-3">{customer.name}</td>
                <td className="p-3">{customer.mobile}</td>
                <td className="p-3">{customer.branchId}</td>

                <td className="p-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        navigate(`/customers/edit/${customer.id}`)
                      }
                      className="rounded bg-yellow-500 p-2 text-white hover:bg-yellow-600"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      onClick={() => handleDelete(customer.id!)}
                      className="rounded bg-red-500 p-2 text-white hover:bg-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredCustomers.length === 0 && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-gray-500">
                  No customers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AppLayout>
  );
}