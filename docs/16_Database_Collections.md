# A1 Core Database Collections

Version: 1.0

Status: Official

Last Updated: 01-Aug-2026

---

# Collection: branches

Purpose

Stores all branches.

Fields

branchId
Type: string
Example: VAL

branchName
Type: string

status
Type: boolean

createdAt
Type: timestamp

updatedAt
Type: timestamp

---

# Collection: users

Purpose

Stores all users.

Fields

staffId

name

mobile

email

role

branchId

status

deviceName

fcmToken

lastLogin

createdAt

updatedAt

---

# Collection: customers

Purpose

Stores customer information.

Fields

customerId

name

mobile

alternateMobile

address

branchId

notes

createdBy

createdAt

updatedAt

---

(To be continued...)
