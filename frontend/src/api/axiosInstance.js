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

//--------------------------------------------------

// import axios from "axios";

// const axiosInstance = axios.create({

//   //baseURL: "http://localhost:3000/api",
//   baseURL: import.meta.env.VITE_API_URL,

//   withCredentials: true,

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

//-------------------------------------
// import axios from "axios";

// const axiosInstance = axios.create({
//     baseURL: import.meta.env.VITE_API_URL,
//     withCredentials: true,

//     headers: {
//         "Content-Type": "application/json",
//     },
// });

// axiosInstance.interceptors.request.use((config) => {
//     const token = localStorage.getItem("token");

//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
// });

// export default axiosInstance;
//---------------------------------------------
// import axios from "axios";

// const axiosInstance = axios.create({
//     baseURL: import.meta.env.VITE_API_URL,

//     withCredentials: true,

//     headers: {
//         "Content-Type": "application/json",
//     },
// });

// axiosInstance.interceptors.request.use(
//     (config) => {

//         // --------------------------------------------------
//         // Logged-in customer token
//         // --------------------------------------------------

//         const token =
//             localStorage.getItem("token");

//         if (token) {
//             config.headers.Authorization =
//                 `Bearer ${token}`;
//         }

//         // --------------------------------------------------
//         // Guest cart identity
//         // --------------------------------------------------

//         const guestId =
//             localStorage.getItem("serinaGuestId");

//         if (guestId) {
//             config.headers["X-Guest-Id"] =
//                 guestId;
//         }

//         return config;
//     },

//     (error) => {
//         return Promise.reject(error);
//     }
// );

// export default axiosInstance;
//------------------------------------------
import axios from "axios";


// ======================================================
// CREATE AXIOS INSTANCE
// ======================================================

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,

    withCredentials: true,

    headers: {
        "Content-Type": "application/json",
    },
});


// ======================================================
// GET / CREATE GUEST ID
// ======================================================

const getGuestId = () => {

    let guestId =
        localStorage.getItem("serinaGuestId");

    if (!guestId) {

        guestId =
            "serina_guest_" +
            crypto.randomUUID();

        localStorage.setItem(
            "serinaGuestId",
            guestId
        );

        console.log(
            "NEW FRONTEND GUEST ID:",
            guestId
        );
    }

    return guestId;
};


// ======================================================
// REQUEST INTERCEPTOR
// ======================================================

axiosInstance.interceptors.request.use(
    (config) => {

        // ==================================================
        // CUSTOMER TOKEN
        // ==================================================

        const token =
            localStorage.getItem("token");

        if (token) {

            config.headers.Authorization =
                `Bearer ${token}`;

        }


        // ==================================================
        // GUEST ID
        // ==================================================

        const guestId =
            getGuestId();

        if (guestId) {

            config.headers["X-Guest-Id"] =
                guestId;

            console.log(
                "AXIOS X-GUEST-ID:",
                guestId
            );
        }


        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);


export default axiosInstance;