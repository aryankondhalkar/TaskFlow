# TaskFlow

A full-stack task management application built with the MERN stack. TaskFlow helps users securely create, organize, update, and manage personal tasks through an intuitive and responsive interface.

## Live Demo

**Application:** https://taskflow-1-s383.onrender.com

## Features

- Secure authentication with Clerk
- Create, update, and delete tasks
- Track task status (To Do, In Progress, Done)
- Assign task priorities
- Set due dates
- Search and filter tasks
- Protected routes for authenticated users
- Responsive user interface
- Cloud database using MongoDB Atlas

## Tech Stack

### Frontend

- React
- Vite
- PrimeReact
- PrimeFlex
- React Router
- Axios
- React Hot Toast
- Clerk Authentication

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Zod
- Clerk Express SDK
- Helmet
- CORS
- Express Rate Limit

### Deployment

- Render
- MongoDB Atlas
- GitHub

## Screenshots

> Screenshots will be added soon.

## Getting Started

### Clone the repository

```bash
git clone https://github.com/aryankondhalkar/TaskFlow.git
cd TaskFlow
```

### Install frontend dependencies

```bash
cd frontend
npm install
```

### Install backend dependencies

```bash
cd ../backend
npm install
```

## Environment Variables

### Backend (`backend/.env`)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173
CLERK_SECRET_KEY=your_clerk_secret_key
```

### Frontend (`frontend/.env`)

```env
VITE_BACKEND_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

## Run Locally

### Start the backend server

```bash
cd backend
npm run dev
```

### Start the frontend

Open another terminal and run:

```bash
cd frontend
npm run dev
```

The application will be available at:

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Future Improvements

- Dark mode
- Task categories
- Drag-and-drop task organization
- Email reminders
- Task sharing and collaboration
- Analytics dashboard
- Task attachments

## Author

**Aryan Kondhalkar**

GitHub: https://github.com/aryankondhalkar
