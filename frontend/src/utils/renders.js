// // import axios from "axios"
// import { axiosClient } from "./axiosClient";
// import {toast} from 'react-hot-toast'
// // amount , category , date , usersid
// export const getUserExpenses = async (userId)=>{
//     try {
        
//         const response = await axiosClient.post('/expenses/allExpenses',{
//             userId
//         });
//         // records.sort((a, b) => {
//         //     return new Date(a.order_date) - new Date(b.order_date); // descending
//         //   })
//         const exp = response.data.message.sort((a,b)=>{
//             return new Date(b.date) - new Date(a.date);
//         });
//         // console.log(exp)
//         return exp;
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export const createExpense = async (expInfo)=>{
//     try {
//         console.log(expInfo)
//         const response = await axiosClient.post('/expenses/addExpense',
//             expInfo
//         )
//         console.log(response.data)
//         if(response.data.statusCode !== 200)
//         {
//             toast.error(`${response.data.message}`);
//             return;
//         }
//         window.location.reload();

//         return;

//     } catch (e) {
//         console.log(e.message);
//     }
// }

// export const deleteExpense = async (data)=>{
//     try {
//         // console.log(data)
//         const {expenseId,userId} = data ;
//         const response = await axiosClient.post('/expenses/deleteExpense',{
//             expenseId ,
//             userId 
//         });
//         if(response.data.statusCode !== 201)
//         {
//             toast.error(`${response.data.message}`);
//             return;
//         }
//         window.location.reload();

//         console.log(response.data)
//         return;
//     } catch (error) {
//         console.log(error.message)   
//     }
// }

// export const sendEmail = async (sender , data)=>{
//         try {
//             const response = await axiosClient.post('/expenses/sendEmail',{
//                 recipient : sender , 
//                 body : data
//             })
//             toast.success("Email Sent");
//             return response;
//         } catch (e) {
//             console.log(e.message)
//             return e.message ;
//         }
// }

import { axiosClient } from "./axiosClient";
import { toast } from "react-hot-toast";

// GET all expenses for the logged-in user
export const getUserExpenses = async () => {
  try {
    const response = await axiosClient.get("/expense/all");
    // Sort by date descending
    return response.data.data?.sort((a, b) => new Date(b.date) - new Date(a.date)) || [];
  } catch (error) {
    console.error("Failed to fetch expenses:", error.message);
    toast.error("Could not fetch expenses");
    return [];
  }
};

// POST create a new expense
export const createExpense = async (expInfo) => {
  try {
    const response = await axiosClient.post("/expense/create", expInfo);
    if (response.data.statusCode !== 201) {
      toast.error(response.data.message || "Failed to add expense");
      return false;
    }
    toast.success("Expense added successfully!");
    return true;
  } catch (error) {
    console.error("Error creating expense:", error.message);
    toast.error("Error adding expense");
    return false;
  }
};

// DELETE an expense by ID
export const deleteExpense = async (id) => {
  try {
    const response = await axiosClient.delete(`/expense/${id}`);
    if (response.data.statusCode !== 200) {
      toast.error(response.data.message || "Failed to delete expense");
      return false;
    }
    toast.success("Expense deleted successfully!");
    return true;
  } catch (error) {
    console.error("Error deleting expense:", error.message);
    toast.error("Error deleting expense");
    return false;
  }
};

// Optional: send email
export const sendEmail = async (recipient, body) => {
  try {
    const response = await axiosClient.post("/expense/sendEmail", { recipient, body });
    toast.success("Email sent successfully!");
    return response.data;
  } catch (error) {
    console.error("Error sending email:", error.message);
    toast.error("Error sending email");
    return null;
  }
};
