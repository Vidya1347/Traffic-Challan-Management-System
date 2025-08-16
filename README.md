# 🚦 Traffic Challan Management System

A web-based application to digitize issuing and managing traffic challans, enhancing transparency and efficiency for both police officers and drivers.

---

## 📖 Project Overview
Traffic challans are often managed manually, which can lead to delays, errors, and lack of transparency. This system provides:
- **Police login** to issue and manage challans.
- **Driver login** to view pending challans.
- A **centralized database** to securely store challan data.

---

## 🏗 System Workflow
1. **Police** log in, issue, and update challan status.
2. **Drivers** log in to view challans and check payment status.
3. **SQLite database** (`traffic.db`) handles storage of all records.

---

## ✨ Features
- **Police Dashboard:** Issue challans with driver and vehicle details.
- **Driver Dashboard:** View active and past challans.
- **Database Integration:** Lightweight, secure record keeping via SQLite.
- **User Authentication:** Secure logins for police and drivers.
- **Responsive UI:** Accessible on both desktop and mobile.

---

## 🚀 Installation Guide
### 1️⃣ Clone
```bash
git clone https://github.com/Vidya1347/Traffic-Challan-Management-System.git
cd Traffic-Challan-Management-System
2️⃣ Install Dependencies
npm install

3️⃣ Launch the Server
node server.js

4️⃣ Access the App

Open your browser at:

http://localhost:3000


⚙️ Usage Instructions

Police: Log in using credentials to issue or modify challans.

Drivers: Log in to view your challans and their statuses.

Database: All challans are saved in traffic.db.
📸 Screenshot Gallery
1. Main Login Page
<img width="842" height="469" alt="image" src="https://github.com/user-attachments/assets/fbd50926-8dbc-43d8-8c06-497228ec9820" />


2. Driver Login

3. Police Login

4. Driver Dashboard

5. Police Dashboard
