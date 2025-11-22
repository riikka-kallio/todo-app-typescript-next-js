# 📝 Todo App — Full-Stack Next.js + MongoDB (CRUD)

A modern full-stack **Todo application** built using **Next.js App Router**, **TypeScript**, **MongoDB Atlas**, and **Tailwind CSS**.
This project demonstrates full CRUD functionality, persistent storage, and clean UI components — ideal for showcasing real-world full-stack skills.

---

## 🚀 Features

### ✅ Full CRUD (Create, Read, Update, Delete)

* Add new tasks
* Mark tasks as complete / incomplete
* Delete tasks
* Real-time UI updates using fetch API

### 🧩 Full-Stack Architecture

* **Next.js App Router**
* **API Route Handlers** using `route.ts`
* **MongoDB Atlas database**
* **Mongoose models** for typed schema validation
* Separate `lib/` and `models/` directories for clean project structure

### 🎨 Modern UI

* Built with **Tailwind CSS**
* Responsive, clean, card-based layout
* Smooth hover states and visual feedback
* Accessible and keyboard-friendly

### 🔐 Environment Variables

* Secure database connection via `.env.local`

---

## 🛠️ Tech Stack

### **Frontend**

* Next.js (App Router)
* TypeScript
* React (Client + Server Components)
* Tailwind CSS

### **Backend**

* Next.js Route Handlers (`app/api/*`)
* MongoDB Atlas (Cloud Database)
* Mongoose ODM

### **Tools**

* Vercel-ready deployment
* Environment variable support
* Modern folder structure

---

## ⚙️ Environment Setup

Create a `.env.local` file in the project root:

```
MONGODB_URI=your-mongodb-connection-string
```

---

## ▶️ Running the Project

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Your app will be available at:

```
http://localhost:3000/
```

---

## 🧪 API Routes

| Method | Endpoint         | Description            |
| ------ | ---------------- | ---------------------- |
| GET    | `/api/todos`     | Get all tasks          |
| POST   | `/api/todos`     | Create a new task      |
| PATCH  | `/api/todos/:id` | Toggle completed state |
| DELETE | `/api/todos/:id` | Delete a task          |

---

## 🎯 Learning Objectives

This project was built to strengthen full-stack development skills:

* Building with **Next.js App Router**
* Understanding **Server vs Client Components**
* Creating **API Routes with TypeScript**
* Managing data with **MongoDB Atlas**
* Designing UI with **Tailwind CSS**
* Connecting frontend → backend → database
* Clean and scalable project structure
