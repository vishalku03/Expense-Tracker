Expense Tracker - Using  MERN Stack :- 

Expense Tracker is a full-stack web application built with the MERN (MongoDB, Express, React, Node.js) stack that allows users to efficiently manage and track their personal expenses. Users can add, update, and delete transactions, view monthly expense summaries, and gain insights into their spending habits.

<<<<<<< HEAD
Key Features:-
=======
Tech Stack : - 
>>>>>>> 1d2bd598f69714c58fd6777c9219ebb94be8ab5f

Add Transactions: Easily record income and expenses with categories, amounts, and dates.

View Summary: Get a clear monthly overview of total expenses and income.

Edit & Delete: Modify or remove transactions anytime.

Send Monthly Report via Email: Automatically receive a summary of your expenses.

Responsive Design: Works seamlessly on desktop, tablet, and mobile devices.

Secure & Scalable: Backend hosted on Render, frontend on Vercel, and all data stored securely in MongoDB Atlas.

Tech Stack

Frontend: React, HTML, CSS, JavaScript

Backend: Node.js, Express.js

Database: MongoDB Atlas

Deployment: Frontend on Vercel, Backend on Render

Other Tools: CORS, dotenv for environment variables

Project Highlights:-

<<<<<<< HEAD
Full-stack implementation with React frontend and Node.js/Express backend

Efficient state management using React hooks (useState, useEffect)
=======
1. Cloning the Project : - 
>>>>>>> 1d2bd598f69714c58fd6777c9219ebb94be8ab5f

Modular and reusable components for UI scalability

<<<<<<< HEAD
RESTful API design for smooth client-server communication

Deployed with live links for instant access and testing

Live Demo  

Frontend  - Vercel

Backend (Render): [Backend Link]

Getting Started (Clone & Run Locally)

Clone the repository:

git clone https://github.com/vishalku03/Expense-Tracker.git
=======
https://github.com/vishalku03/Expense-Tracker.git
>>>>>>> 1d2bd598f69714c58fd6777c9219ebb94be8ab5f


Copy the repository URL.

<<<<<<< HEAD
=======
Open a terminal and run:

git clone https://github.com/vishalku03/Expense-Tracker.git

cd Expense-Tracker

2. Installing Dependencies
Backend : - 
>>>>>>> 1d2bd598f69714c58fd6777c9219ebb94be8ab5f
cd bc
npm install

Frontend
cd ../frontend
npm install


Set up your .env file for MongoDB Atlas connection and other environment variables.

Run backend and frontend servers:

<<<<<<< HEAD
npm start   # backend
npm start   # frontend
=======
Frontend (frontend/.env) – optional for local development
REACT_APP_API_URL=http://localhost:5000


In production, replace with your Render backend URL:

REACT_APP_API_URL=https://expense-tracker-backend.onrender.com

4. Running Locally
Backend
cd bc
npm run server


Server runs at http://localhost:5000.

Frontend
cd ../frontend
npm start


React app runs at http://localhost:3000.

5. Deployment
Backend on Render

Push backend code to GitHub.

Create a Web Service on Render → select your backend repo.

Set Environment Variables:

MONGO_URI=<MongoDB Atlas URI>
PORT=5000


Start Command: npm start

Render provides a live backend URL (e.g., https://expense-tracker-backend.onrender.com).

Frontend on Vercel :-

Push frontend code to GitHub.

Create a new project on Vercel → select frontend repo/folder.

Set Environment Variable:

REACT_APP_API_URL=https://expense-tracker-backend.onrender.com


Vercel automatically builds and deploys → provides a live frontend URL (e.g., https://track-yur-expense.vercel.app).

6. MongoDB Atlas :-

Cloud-hosted database; all your expense data is stored here.

Backend communicates with Atlas via MONGO_URI.

Secure access with users, passwords, and IP whitelisting.

Data is safe even if frontend or backend is redeployed.

7. CORS Setup:-

Ensure backend allows requests from your frontend domain:

app.use(cors({
  origin: 'https://track-yur-expense.vercel.app'
}));

8. Contributing:-

Fork the repository

Create a branch (git checkout -b feature/YourFeature)

Commit changes (git commit -m 'Add feature')

Push branch (git push origin feature/YourFeature)

Open a Pull Request

9. License

This project is licensed under MIT License.

✅ Data Flow in Production:


[React Frontend on Vercel] → [Express Backend on Render] → [MongoDB Atlas]

>>>>>>> 1d2bd598f69714c58fd6777c9219ebb94be8ab5f
