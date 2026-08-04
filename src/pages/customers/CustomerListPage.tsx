import { useEffect, useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import { getCustomers } from "../../services/customerService";
import type { Customer } from "../../types/customer";

export default function CustomerListPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const data = await getCustomers();
    setCustomers(data);
  };

  return (
    <AppLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Customers</h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          + Add Customer
        </button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">Code</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Mobile</th>
              <th className="p-3 text-left">Branch</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-t">
                <td className="p-3">{customer.customerCode}</td>
                <td className="p-3">{customer.name}</td>
                <td className="p-3">{customer.mobile}</td>
                <td className="p-3">{customer.branchId}</td>
              </tr>
            ))}

            {customers.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-center p-6 text-gray-500"
                >
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