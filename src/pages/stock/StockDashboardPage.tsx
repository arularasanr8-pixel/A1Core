import { useEffect, useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import { getProducts } from "../../services/productService";
import type { Product } from "../../types/product";

export default function StockDashboardPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Stock Dashboard</h1>
        <p className="text-gray-500">
          Monitor product stock levels
        </p>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">Code</th>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Stock</th>
              <th className="p-3 text-left">Minimum</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="p-3">{product.productCode}</td>
                <td className="p-3">{product.name}</td>
                <td className="p-3">{product.stock}</td>
                <td className="p-3">{product.minimumStock}</td>

                <td className="p-3">
                  {product.stock === 0 ? (
                    <span className="rounded bg-red-100 px-2 py-1 text-red-600">
                      🔴 Out of Stock
                    </span>
                  ) : product.stock <= product.minimumStock ? (
                    <span className="rounded bg-yellow-100 px-2 py-1 text-yellow-700">
                      🟡 Low Stock
                    </span>
                  ) : (
                    <span className="rounded bg-green-100 px-2 py-1 text-green-700">
                      🟢 In Stock
                    </span>
                  )}
                </td>
              </tr>
            ))}

            {filteredProducts.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="p-6 text-center text-gray-500"
                >
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AppLayout>
  );
}