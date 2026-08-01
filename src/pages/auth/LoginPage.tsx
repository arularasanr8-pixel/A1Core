import { Smartphone } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-8">

        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white">
            <Smartphone size={30} />
          </div>

          <h1 className="mt-4 text-3xl font-bold">A1 Core</h1>

          <p className="mt-2 text-gray-500">
            Manage Everything. Anywhere.
          </p>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Staff ID"
            className="w-full rounded-xl border p-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border p-3"
          />

          <button className="w-full rounded-xl bg-blue-600 py-3 text-white font-semibold">
            Login
          </button>
        </div>

      </div>
    </div>
  );
}