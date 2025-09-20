Expense-Tracker-MERN :-

A fully-featured Expense Tracker WebApp built with the MERN stack, allowing users to manage daily expenses, categorize them, and visualize spending habits in a responsive interface.

Tech Stack:-

Backend
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" />

Frontend
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>

Database:-
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>

Live Demo:

Frontend: Vercel - expense-tracker-web-opal.vercel.app/

Backend: Render

Features

Add, edit, and delete transactions

Track monthly expenses and income

Categorize expenses (Food, Rent, Utilities, etc.)

Responsive UI with React & Tailwind CSS

RESTful API built with Node.js and Express

MongoDB Atlas for secure, cloud-hosted database

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

Navigate to the GitHub repository:

https://github.com/vishalku03/Expense-Tracker.git


Copy the repository URL.

Open a terminal and run:

git clone https://github.com/vishalku03/Expense-Tracker.git
cd Expense-Tracker

2. Installing Dependencies:-

Backend
cd bc
npm install

Frontend
cd ../frontend
npm install

3. Configuring Environment Variables :-

Backend (backend/.env)
MONGO_URI=<YOUR_MONGO_URI>
PORT=5000


Get MONGO_URI from MongoDB Atlas
.

Atlas securely stores all your app data.

Frontend (frontend/.env) – optional for local development
REACT_APP_API_URL=http://localhost:5000


In production, replace with your Render backend URL:

REACT_APP_API_URL=https://expense-tracker-backend.onrender.com

4. Running Locally : -

Backend
cd bc
npm run server/npm start


Runs server at http://localhost:5000.

Frontend
cd ../frontend
npm start


React app runs at http://localhost:3000.

5. Deployment : -

Backend on Render

Push backend code to GitHub.

Create a Web Service on Render → connect your repo → select backend folder.

Add Environment Variables: 

MONGO_URI=<MongoDB Atlas URI>
PORT=5000


Start Command:
 npm start

Render provides a public backend URL, e.g.:

https://expense-tracker-backend.onrender.com


This URL can be accessed publicly and is used as the API base URL for your frontend.

Frontend on Vercel

Push frontend code to GitHub.

Create a project on Vercel → select frontend repo/folder.

Add Environment Variable:

REACT_APP_API_URL=https://expense-tracker-backend.onrender.com


Vercel builds and deploys automatically → provides a public frontend URL, e.g.:

https://track-yur-expense.vercel.app

6. MongoDB Atlas : - 

Fully cloud-hosted, secure database.

Stores all your expenses and user data.

Even if backend or frontend is redeployed, your data remains intact.

Access is controlled via database users and IP whitelists.

7. CORS Setup  : -

Ensure the backend allows requests from your frontend domain:

app.use(cors({
  origin: 'https://track-yur-expense.vercel.app'
}));

8. Professional Data Flow:-

[React Frontend on Vercel] → [Express Backend on Render] → [MongoDB Atlas]


Frontend fetches data from backend → backend communicates securely with MongoDB Atlas → response sent back to frontend.

9. Contributing:- 

Fork the repository

Create a branch: git checkout -b feature/YourFeature

Commit your changes: git commit -m "Add feature"

Push branch: git push origin feature/YourFeature

Open a Pull Request

10. License

This project is licensed under MIT License.