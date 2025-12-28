## 🩸 CTG Blood Connect

CTG Blood Connect is a web-based blood donor platform designed to help people in **Chittagong (CTG)** quickly find blood donors based on blood group and area.  
The mission is simple: **connect donors and seekers to save lives**.

## 🌐 Live Project
https://ctg-blood-connect.web.app/

## 📦 Repositories
- Client: https://github.com/sahkil12/CTG-Blood-Connect-client
- Server: https://github.com/sahkil12/CTG-Blood-Connect-server

---

## 🚀 Features

### 👥 User & Donor System
- Email & Google authentication using Firebase
- Default role: `user`
- Users can register as blood donors
- Automatic role update from `user` to `user + isDonor`

### 🩸 Donor Management
- Create donor profile with some details and image
- Update donor information
- Delete donor profile (role reverts to user)
- Donor availability status tracking

### 🔍 Donor Search
- Search donors by blood group
- Filter donors by area (CTG upazilas)
- Homepage displays top 9 donors
- Full donors list page with advanced filtering

### 🧑‍💼 Admin Dashboard
- Role-based protected admin routes
- Dashboard statistics:
  - Total users
  - Total donors
  - Available donors
  - View donor availability in real-time  
  - Total admins
  - New users & donors (last 7 days)
- Manage users:
  - Search any users by email
  - Make or remove admin role
  - View user details in modal

### 🔐 Security & Access Control
- JWT-based authentication
- Role-based authorization (User / isDonor / Admin)
- Admin-only dashboard access
- Forbidden (403) page for unauthorized routes

---

## 🧩 Pages
- Home
- Donors
- Be a Donor
- Profile
- About
- Admin Dashboard
- Manage Users
- Forbidden Page (403)
- Error 404 page
---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Tailwind CSS
- DaisyUI
- TanStack Query (React Query)
- Firebase Authentication
- Firebase deploy
- React Hook Form
- Recharts
- SweetAlert2
- React Hot Toast
- dayjs

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- REST API
- Role-based access control
- nodemailer
- Firebase admin

### Hosting & Tools
- Client Hosting: Firebase
- Server Hosting: Vercel
- Database: MongoDB Atlas

---

## Installation

1. Clone the repositories:

```bash
# Client
git clone https://github.com/sahkil12/CTG-Blood-Connect-client.git
cd CTG-Blood-Connect-client
npm install

# Server
git clone https://github.com/sahkil12/CTG-Blood-Connect-server.git
cd CTG-Blood-Connect-server
npm install

# Client
cd CTG-Blood-Connect-client
npm run dev

# Server
cd CTG-Blood-Connect-server
npm run start

```
