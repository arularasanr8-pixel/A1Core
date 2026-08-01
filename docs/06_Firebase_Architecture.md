# A1 Core Firebase Architecture

Version: 1.0

Status: Draft

Last Updated: 01-Aug-2026

---

# Overview

A1 Core uses Firebase as the backend platform.

Services Used

- Firebase Authentication
- Cloud Firestore
- Firebase Storage
- Firebase Cloud Messaging (FCM)

---

# Authentication

Authentication Method

- Mobile Number (Future)
- Email & Password (Current)

Roles

- Admin
- Staff

---

# Firestore Collections

branches

users

customers

products

productVariants

stock

suppliers

purchases

purchaseItems

sales

saleItems

serviceJobs

attendance

leaveRequests

expenses

notifications

activityLogs

counters

settings

---

# Database Strategy

- Single Product Master
- Branch Wise Stock
- Shared Customer Database
- Branch Wise Service
- Branch Wise Sales

---

# Branch Codes

VAL = Valavanur

KOL = Koliyanur

---

# Storage

Store

- Product Images
- Customer Photos
- Service Photos
- Invoice PDFs

---

# Notifications

Firebase Cloud Messaging

- Admin
- Staff
- Branch Notifications

---

# Security

Every request must pass Firebase Security Rules.

---

# Offline Support

Firestore Offline Cache Enabled

---

# Future Integrations

- WhatsApp
- SMS
- Email
- Payment Gateway
- Barcode Scanner
