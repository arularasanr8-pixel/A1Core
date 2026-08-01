# A1 Core Folder Structure

Version: 1.0

Status: Draft

---

# Project Structure

A1Core/

docs/

public/

android/

src/

assets/

components/

features/

dashboard/

customers/

products/

sales/

services/

attendance/

reports/

settings/

hooks/

layouts/

lib/

firebase/

types/

utils/

App.tsx

main.tsx

---

# Feature Structure

Each feature contains

components/

pages/

hooks/

services/

types/

---

# Naming Convention

Components

PascalCase

Example

CustomerCard.tsx

ProductList.tsx

Pages

PascalCase

DashboardPage.tsx

ServicePage.tsx

Hooks

camelCase

useCustomer.ts

useStock.ts

Services

camelCase

customerService.ts

salesService.ts

Types

camelCase

customer.ts

product.ts

---

# Rule

Every feature should be isolated.

No business logic inside UI components.

Reusable components only.
