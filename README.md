# Notes API

## Description
A simple Express + TypeScript backend API for managing notes with in-memory storage.

## Prerequisites
- Node.js (v14 or later)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/aboodswiti/note-expressJS.git
cd note-expressJS
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Mode
To run the application in development mode with hot reloading:
```bash
npm run dev
```

### Production Mode
First, compile TypeScript to JavaScript:
```bash
npx tsc
```
Then start the server:
```bash
npm start
```

## API Endpoints

### Get All Notes
- **URL:** `/api/notes`
- **Method:** `GET`
- **Response:** Array of notes

### Get Note by ID
- **URL:** `/api/notes/:id`
- **Method:** `GET`
- **Response:** Single note object

### Create a New Note
- **URL:** `/api/notes`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "title": "Note Title",
    "content": "Note Content"
  }
  ```

## Project Structure
- `src/`
  - `app.ts`: Express application configuration
  - `server.ts`: Server startup
  - `controllers/`: Route handlers
  - `models/`: Data models
  - `routes/`: API route definitions
  - `services/`: Business logic and data management

## Technologies
- Express.js
- TypeScript
- CORS
- UUID for unique ID generation

## Notes
- This implementation uses in-memory storage
- Notes are reset when the server restarts
