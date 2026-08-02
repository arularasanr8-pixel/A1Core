# A1 Core API Design

Version: 1.0

Status: Official

---

# Purpose

This document defines all service layer functions used to communicate with Firebase.

---

# Customer APIs

- createCustomer()
- updateCustomer()
- deleteCustomer()
- getCustomer()
- searchCustomers()

---

# Product APIs

- createProduct()
- updateProduct()
- getProducts()
- searchProducts()

---

# Stock APIs

- updateStock()
- transferStock()
- getBranchStock()

---

# Purchase APIs

- createPurchase()
- getPurchases()

---

# Sales APIs

- createInvoice()
- getInvoices()
- printInvoice()

---

# Service APIs

- createService()
- assignTechnician()
- updateServiceStatus()
- deliverService()

---

# Attendance APIs

- checkIn()
- checkOut()
- getAttendance()

---

# Notification APIs

- sendNotification()
- markAsRead()

---

# Rules

- Every API returns a Promise.
- All errors must be handled.
- No Firestore calls directly inside UI components.
