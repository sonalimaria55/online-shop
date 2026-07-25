// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const token = localStorage.getItem("token");

//   const user = JSON.parse(localStorage.getItem("user"));

//   // Not logged in
//   if (!token || !user) {
//     return <Navigate to="/login" replace />;
//   }

//   // Role not allowed
//   if (!allowedRoles.includes(user.role)) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;

//----------------------------------------------------------------------------

// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children, allowedRoles = [] }) => {
//   const token = localStorage.getItem("token");
//   const user = JSON.parse(localStorage.getItem("user"));

//   // Not logged in
//   if (!token || !user) {
//     return <Navigate to="/login" replace />;
//   }

//   // Role not allowed
//   if (
//     allowedRoles.length > 0 &&
//     !allowedRoles.includes(user.role)
//   ) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";


const ProtectedRoute = ({
    children,
    allowedRoles = []
}) => {


    const token =
        localStorage.getItem("token");


    const user =
        JSON.parse(
            localStorage.getItem("user")
        ) || null;



    if(!token || !user){

        return (
            <Navigate
                to="/login"
                replace
            />
        );

    }



    if(
        allowedRoles.length > 0 &&
        !allowedRoles.includes(user.role)
    ){

        return (
            <Navigate
                to="/"
                replace
            />
        );

    }



    return children;


};


export default ProtectedRoute;