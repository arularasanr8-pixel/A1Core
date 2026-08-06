import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import CustomerListPage from "../pages/customers/CustomerListPage";
import CustomerFormPage from "../pages/customers/CustomerFormPage";
import ProtectedRoute from "./ProtectedRoute";
import CustomerEditPage from "../pages/customers/CustomerEditPage";
import ProductListPage from "../pages/products/ProductListPage";
import ProductFormPage from "../pages/products/ProductFormPage";
import BrandListPage from "../pages/brands/BrandListPage";
import BrandFormPage from "../pages/brands/BrandFormPage";
import ProductEditPage from "../pages/products/ProductEditPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LoginPage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
            <ProductListPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/products/new"
          element={
            <ProtectedRoute>
            <ProductFormPage />
            </ProtectedRoute>
          }
        />
        <Route
  path="/products/edit/:id"
  element={
    <ProtectedRoute>
      <ProductEditPage />
    </ProtectedRoute>
  }
/>

        <Route
          path="/customers"
          element={
            <ProtectedRoute>
              <CustomerListPage />
            </ProtectedRoute>
          }
        />
        <Route
  path="/brands"
  element={
    <ProtectedRoute>
      <BrandListPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/brands/new"
  element={
    <ProtectedRoute>
      <BrandFormPage />
    </ProtectedRoute>
  }
/>

        <Route
          path="/customers/new"
          element={
            <ProtectedRoute>
              <CustomerFormPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customers/edit/:id"
          element={
            <ProtectedRoute>
                <CustomerEditPage />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}