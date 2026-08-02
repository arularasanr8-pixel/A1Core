# A1 Core Business Rules

Version: 1.0

Status: Official

Last Updated: 01-Aug-2026

---

# General Rules

- Every user belongs to one branch.
- Every action must be recorded in activityLogs.
- Auto-generated IDs cannot be edited.
- Soft Delete is preferred over permanent delete.

---

# Branch Rules

- Branch Code: VAL = Valavanur
- Branch Code: KOL = Koliyanur
- Admin can access all branches.
- Staff can access only their assigned branch.

---

# Customer Rules

- Customer mobile number must be unique.
- Customer ID is auto-generated.
- Customer branch cannot be changed after creation without Admin approval.

---

# Product Rules

- One Product Master for all branches.
- Touch Mobile supports variants (RAM, Storage, Color).
- Keypad Mobile does not require variants.
- Accessories do not require variants.
- Product ID is auto-generated.

---

# Stock Rules

- Stock is maintained branch-wise.
- Stock cannot become negative.
- Only Admin can transfer stock between branches.
- Every stock change must create an activity log.

---

# Purchase Rules

- Purchase ID is auto-generated.
- Purchase cannot be deleted.
- Purchase items increase stock automatically.

---

# Sales Rules

- Invoice number is auto-generated.
- Sale cannot be completed if stock is insufficient.
- Sale automatically reduces stock.
- Completed invoice cannot be deleted.

---

# Service Rules

- Service ID is auto-generated.
- Service belongs to the branch where it was created.
- Staff can view only services of their branch.
- Admin can view all services.
- Delivered service cannot be edited without Admin permission.

---

# Attendance Rules

- One check-in per day.
- Check-out is mandatory.
- Attendance cannot be edited by Staff.

---

# Notification Rules

- Notifications can target:
  - All Users
  - Branch
  - Individual User
- Read status must be tracked.

---

# Audit Rules

The following actions must be logged:

- Login
- Logout
- Customer Create
- Customer Update
- Product Update
- Purchase
- Sale
- Service Create
- Service Update
- Stock Transfer
- Attendance
