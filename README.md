
# 🚀 AI-Powered MERN Stack Website Builder

An intelligent developer platform that allows users to **generate, edit, preview, and download full-stack web applications** using natural language prompts. Built using the MERN stack and powered by OpenRouter for AI-driven code generation and editing.

![Alt Text](Screenshots/1.png)

---

## 📌 Overview

This project is a **full-stack AI-assisted development environment** that enables developers to:

* Generate complete websites using prompts
* Edit code visually and in real-time
* Preview applications instantly
* Download or export full project code
* Manage and iterate projects efficiently

It combines the power of **AI + full-stack development tools** into a single unified platform.

---

## 🧠 Key Features

### ⚡ AI Code Generation

* Generate full-stack applications using prompts like:

  * “Create a React dashboard with authentication”
  * “Build a MERN blog app with CRUD APIs”
* Powered by OpenRouter (supports multiple LLMs)

---

### 🖥️ Visual Code Editor

* Built-in code editor with:

  * Syntax highlighting
  * File navigation
  * Multi-file editing
* Real-time updates and seamless editing experience

---

### 🎨 Live Preview

* Instant preview of frontend applications
* Hot-reload support for faster development
* Simulates real browser environment

---

### 📦 Project Export & Download

* Download complete project as ZIP
* Structured folders:

  * `/frontend`
  * `/backend`
* Ready-to-run code

---

### 💾 Project Management

* Save multiple projects
* Resume editing anytime
* Version-like workflow for iterations

---

### 🔌 API & Backend Generation

* Automatically generates:

  * Express.js APIs
  * MongoDB schemas
  * Authentication logic

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Monaco Editor (VS Code-like editor)

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### AI Integration

* OpenRouter API (multi-model support)

---

## 🧩 Architecture

```id="arch1"
User Prompt → OpenRouter API → AI Code Generation → File System Builder → Editor + Preview → Export
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/ai-mern-builder.git
cd ai-mern-builder
```

---

### 2️⃣ Install dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
npm install
```

---

### 3️⃣ Setup Environment Variables

Create `.env` file in backend:

```env
OPENROUTER_API_KEY=your_api_key_here
MONGO_URI=your_mongodb_connection
PORT=5000
```

---

### 4️⃣ Run the application

#### Start backend

```bash
cd backend
npm run dev
```

#### Start frontend

```bash
cd frontend
npm start
```

---

## 🚀 Usage

1. Open the application in browser
2. Enter a prompt like:

   * “Build a full-stack e-commerce app”
3. AI generates project structure and code
4. Edit using built-in editor
5. Preview changes live
6. Download project when ready

---

## 📂 Project Structure

```id="struct1"
root/
│── frontend/
│   ├── src/
│   ├── components/
│   └── pages/
│
│── backend/
│   ├── routes/
│   ├── controllers/
│   └── models/
│
│── README.md
```

---

## 🔐 Future Improvements

* Authentication & user accounts
* Cloud project storage
* Deployment integration (Vercel, Docker)
* Multi-language support
* Advanced AI debugging assistant

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Commit your changes
4. Open a pull request

---

## 📄 License

This project is licensed under the MIT License.





