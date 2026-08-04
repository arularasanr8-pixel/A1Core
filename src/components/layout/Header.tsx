import { Bell, LogOut, User } from "lucide-react";

interface HeaderProps {
  onLogout: () => void;
}

export default function Header({ onLogout }: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-white border-b px-6 py-4 shadow-sm">

      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h2>

        <p className="text-sm text-slate-500">
          Welcome to A1 Core ERP
        </p>
      </div>

      <div className="flex items-center gap-4">

        <button className="relative p-2 rounded-lg hover:bg-slate-100">
          <Bell size={22} />
        </button>

        <div className="flex items-center gap-2">
          <User size={20} />
          <span className="font-medium">Admin</span>
        </div>

        <button
          onClick={onLogout}
          className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </header>
  );
}