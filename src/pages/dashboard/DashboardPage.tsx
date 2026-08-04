import AppLayout from "../../components/layout/AppLayout";

export default function DashboardPage() {
  return (
    <AppLayout>
      <h1 className="text-3xl font-bold text-slate-800">
        Dashboard
      </h1>

      <p className="mt-2 text-slate-500">
        Welcome to A1 Core ERP 🚀
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

        <div className="rounded-xl bg-white shadow p-6">
          <h2 className="text-lg font-semibold">Today's Sales</h2>
          <p className="mt-3 text-3xl font-bold">₹0</p>
        </div>

        <div className="rounded-xl bg-white shadow p-6">
          <h2 className="text-lg font-semibold">Customers</h2>
          <p className="mt-3 text-3xl font-bold">0</p>
        </div>

        <div className="rounded-xl bg-white shadow p-6">
          <h2 className="text-lg font-semibold">Products</h2>
          <p className="mt-3 text-3xl font-bold">0</p>
        </div>

        <div className="rounded-xl bg-white shadow p-6">
          <h2 className="text-lg font-semibold">Service Jobs</h2>
          <p className="mt-3 text-3xl font-bold">0</p>
        </div>

      </div>
    </AppLayout>
  );
}