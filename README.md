# Real-Time Voting System

A simple app where users can vote and see results update in real-time across all connected clients.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript, Socket.IO Client
- **Backend**: Node.js, Express.js, Socket.IO Server
- **Storage**: In-memory (for demo purposes)

## Setup Instructions
1. Clone the repo: `git clone <repo-url>`
2. Navigate to the folder: `cd real-time-voting`
3. Install dependencies: `npm install`
4. Start the server: `node server.js`
5. Open `http://localhost:3000/` in a browser.

## How to Use
- Open the app in multiple browser tabs.
- Cast a vote in one tab and watch the results update live in all tabs.

## Demo
Try it live: [Real-Time Voting Demo](https://voting-system-i84n.onrender.com/)

## Notes
- This is a demo project with in-memory storage (data resets on restart). For production, use a database like MongoDB.
