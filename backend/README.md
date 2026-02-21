# Fitness Moves — Full‑Stack App

A full‑stack fitness app with a modern React UI and a Node/Express API backed by MongoDB Atlas. Users can sign up and log in from the frontend, which communicates with the backend via REST endpoints.

## Tech Stack
**Frontend:** React, TypeScript, Vite, React Router  
**Backend:** Node.js, Express, Mongoose  
**Database:** MongoDB Atlas  
**Tooling:** Nodemon, dotenv

## Features
- Signup and login UI
- REST API for user registration and login
- MongoDB Atlas integration via Mongoose
- Clean, responsive UI layout

## Project Structure
```
intro-to-backend/
	backend/        # Express + MongoDB API
	dev-setup/      # React + Vite frontend
```

## Getting Started

### 1) Backend
```bash
cd backend
npm install
```

Create `backend/.env`:
```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

Run:
```bash
npm run dev
```

### 2) Frontend
```bash
cd dev-setup
npm install
npm run dev
```

Frontend runs on: http://localhost:5173  
Backend runs on: http://localhost:3000

## API Endpoints
- `POST /api/v1/users/register`
- `POST /api/v1/users/login`

## Notes
- Ensure your MongoDB Atlas IP is whitelisted.
- Don’t commit `.env` files.