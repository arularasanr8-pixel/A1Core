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
import { NavLink } from "react-router-dom";


const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Customers", path: "/customers", icon: Users },
  { name: "Products", path: "/products", icon: Package },
  { name: "Stock", path: "/stock", icon: Boxes },
  { name: "Sales", path: "/sales", icon: ShoppingCart },
  { name: "Purchase", path: "/purchase", icon: Truck },
  { name: "Service", path: "/service", icon: Wrench },
  { name: "Reports", path: "/reports", icon: FileBarChart },
  { name: "Settings", path: "/settings", icon: Settings },
  { name: "Brands", path: "/brands", icon: Package },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">A1 Core</h1>
        <p className="text-sm text-slate-400">ERP System</p>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}