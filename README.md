Expense-Tracker:-

A fully-featured Expense Tracker WebApp built with the MERN stack. Track your daily expenses, categorize them, and visualize your spending habits in a sleek and responsive interface.

Tech Stack : - 

Backend
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" />

Frontend
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>

Database
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>

Live Demo:

Frontend: Vercel Link - expense-tracker-web-opal.vercel.app/

Backend: Render Link

Features : - 

Add, edit, and delete transactions

Track monthly expenses and income

Categorize expenses (Food, Rent, Utilities, etc.)

Responsive UI with React & Tailwind CSS

RESTful API with Node.js and Express

MongoDB Atlas for secure cloud storage

Folder Structure
Expense-Tracker-MERN/
├── backend/           # Node.js & Express server
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── .env
├── frontend/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md

1. Cloning the Project : - 

Go to the GitHub repository:

https://github.com/vishalku03/Expense-Tracker.git


Copy the repository URL.

Open a terminal and run:

git clone https://github.com/vishalku03/Expense-Tracker.git

cd Expense-Tracker

2. Installing Dependencies
Backend : - 
cd bc
npm install

Frontend
cd ../frontend
npm install

3. Configuring Environment Variables
Backend (bc/.env)
MONGO_URI=<YOUR_MONGO_URI>
PORT=5000


Get MONGO_URI by creating a free cluster on MongoDB Atlas.

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
