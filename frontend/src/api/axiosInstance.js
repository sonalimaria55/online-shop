// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:3000/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// export default axiosInstance;


import axios from "axios";

const axiosInstance = axios.create({

  baseURL: "http://localhost:3000/api",
  baseURL: import.meta.env.VITE_API_URL,

  withCredentials: true,

  headers: {
    "Content-Type": "application/json",
  },

});


axiosInstance.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  if (token) {

    config.headers.Authorization = `Bearer ${token}`;

  }

  return config;

});


export default axiosInstance;