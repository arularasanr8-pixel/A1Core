# A1 Core Database Blueprint

Version: 1.0

Status: Draft

Last Updated: 01-Aug-2026

---

# Overview

This document defines the Firestore database structure for A1 Core.

The architecture is designed to support multiple branches while keeping a single product master and branch-wise stock management.

---

# Branches

| Branch | Code |
|--------|------|
| Valavanur | VAL |
| Koliyanur | KOL |

---

# User Roles

- Admin
- Staff

---

# Collections

## Core

- branches
- users
- customers
- products
- productVariants
- stock

---

## Purchase

- suppliers
- purchases
- purchaseItems

---

## Sales

- sales
- saleItems

---

## Service

- serviceJobs

---

## HR

- attendance
- leaveRequests

---

## Finance

- expenses

---

## System

- notifications
- activityLogs
- counters
- settings

---

# Product Types

- Touch Mobile
- Keypad Mobile
- Accessory

---

# Stock Management

- One Product Master
- Branch Wise Stock
- Admin can transfer stock between branches

---

# Auto Numbering

Customer

CUV001

CUK001

Purchase

PUV001

PUK001

Invoice

INVV000001

INVK000001

Service

SRVV000001

SRVK000001

Product

PR000001

---

# Audit System

Every important action must be stored inside activityLogs.

Examples

- Login
- Logout
- Customer Created
- Product Updated
- Sale Completed
- Service Delivered
- Stock Transfer

---

# Database Status

Version 1.0

Draft
