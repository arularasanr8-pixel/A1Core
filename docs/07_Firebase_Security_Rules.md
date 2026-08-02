# A1 Core Firebase Security Rules

Version: 1.0

Status: Draft

Last Updated: 01-Aug-2026

---

# Security Principles

- Authentication is mandatory.
- Every user must belong to a branch.
- Every user must have a role.
- Firestore access is controlled using Firebase Security Rules.

---

# Roles

## Admin

Permissions

- Read all collections
- Create
- Update
- Delete
- View all branches
- Transfer stock
- Manage users
- View reports

---

## Staff

Permissions

- View own branch only
- Create customers
- Create sales
- Create services
- Update assigned services
- View own attendance

Restrictions

- Cannot delete records
- Cannot manage users
- Cannot transfer stock
- Cannot access other branches

---

# Branch Security

Valavanur users can access only VAL branch data.

Koliyanur users can access only KOL branch data.

Admin can access all branches.

---

# Collection Access

| Collection | Admin | Staff |
|------------|-------|-------|
| branches | Read/Write | Read |
| users | Read/Write | Read Own |
| customers | Read/Write | Read/Write (Own Branch) |
| products | Read/Write | Read |
| stock | Read/Write | Read |
| purchases | Read/Write | Read |
| sales | Read/Write | Read/Write (Own Branch) |
| serviceJobs | Read/Write | Read/Write (Own Branch) |
| attendance | Read/Write | Read/Write (Own) |
| expenses | Read/Write | Create/Read (Own Branch) |
| activityLogs | Read | Create |

---

# Audit Rules

Every Create, Update and Delete operation must generate an activity log.

---

# Validation

- Customer mobile must be unique.
- Invoice numbers are auto-generated.
- Service IDs are auto-generated.
- Stock cannot become negative.
- Required fields cannot be empty.

---

# Future

Security Rules will be implemented after database development is complete.
