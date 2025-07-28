# mental-health-app
Mental Health App
A full-stack JavaScript application for mental health support, featuring user authentication, a dashboard, and journal management. The frontend is built with Next.js (React), and the backend uses Node.js with Express and MongoDB.
Features

Authentication: Register and log in with secure JWT-based authentication.
Dashboard: Personalized welcome page for users.
Journal: Create, view, and edit journal entries.
Responsive Design: Built with Tailwind CSS for a modern, mobile-friendly UI.

Project Structure
mental-health-app/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   └── Journal.js
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   └── journal.js
│   │   └── middleware/
│   │       └── auth.js
│   ├── app.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Nav.js
│   │   ├── pages/
│   │   │   ├── _app.js
│   │   │   ├── index.js
│   │   │   ├── auth/
│   │   │   │   ├── login.js
│   │   │   │   └── register.js
│   │   │   ├── dashboard.js
│   │   │   └── journal/
│   │   │       ├── index.js
│   │   │       └── [id].js
│   │   └── styles/
│   │       └── globals.css
│   ├── next.config.js
│   └── package.json
└── README.md

Setup Instructions
Prerequisites

Node.js (v14 or higher)
MongoDB (running locally or via MongoDB Atlas)
npm

Backend Setup

Navigate to backend/.
Install dependencies: npm install.
Ensure MongoDB is running (mongod).4
