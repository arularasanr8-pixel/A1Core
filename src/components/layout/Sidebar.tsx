import {
  LayoutDashboard,
  Users,
  Package,
  Boxes,
  ShoppingCart,
  Truck,
  Wrench,
  FileBarChart,
  Settings,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Customers", icon: Users },
  { name: "Products", icon: Package },
  { name: "Stock", icon: Boxes },
  { name: "Sales", icon: ShoppingCart },
  { name: "Purchase", icon: Truck },
  { name: "Service", icon: Wrench },
  { name: "Reports", icon: FileBarChart },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white">

      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">
          A1 Core
        </h1>
        <p className="text-sm text-slate-400">
          ERP System
        </p>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="flex items-center gap-3 w-full rounded-lg px-4 py-3 hover:bg-slate-800 transition"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

    </aside>
  );
}