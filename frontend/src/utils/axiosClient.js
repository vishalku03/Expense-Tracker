// import axios from "axios";


// export const axiosClient = axios.create({
//     baseURL : 'https://expensify-tracker.onrender.com'
// })
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:5000/api", // backend URL
});

// Automatically include JWT token from localStorage
axiosClient.interceptors.request.use(config => {
  const user = JSON.parse(localStorage.getItem("User")); // user object
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`; // use the token property
  }
  return config;
});


