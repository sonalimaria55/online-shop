// import {
//   Box
// } from "@mui/material";

// import {
//   Outlet
// } from "react-router-dom";

// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";


// const MainLayout = () => {

//   return (

//     <Box
//       sx={{
//         display:"flex",
//         minHeight:"100vh",
//         background:"#FAF8F3"
//       }}
//     >

//       <Sidebar />


//       <Box
//         sx={{
//           flexGrow:1
//         }}
//       >

//         <Navbar />


//         <Box
//           sx={{
//             p:4
//           }}
//         >

//           <Outlet />

//         </Box>


//       </Box>


//     </Box>

//   );

// };


// export default MainLayout;
//---------------------------------------------------------------
// import {
//   Box
// } from "@mui/material";

// import {
//   Outlet
// } from "react-router-dom";

// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";


// const MainLayout = () => {

//   return (

//     <Box
//       sx={{
//         display:"flex",
//         minHeight:"100vh",
//         background:"#FAF8F3"
//       }}
//     >

//       <Sidebar />


//       <Box
//         sx={{
//           flexGrow:1
//         }}
//       >

//         <Navbar />


//         <Box
//           sx={{
//             p:4
//           }}
//         >

//           <Outlet />

//         </Box>


//       </Box>


//     </Box>

//   );

// };


// export default MainLayout;
//----------------------------------------------------------

// import { useState } from "react";
// import {
// Box,
// Toolbar
// } from "@mui/material";

// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";


// const MainLayout = ({children}) => {


// const [open,setOpen]=useState(true);


// return (

// <Box>


// <Navbar
// openSidebar={()=>setOpen(!open)}
// />


// <Sidebar
// open={open}
// />


// <Box
// component="main"
// sx={{

// marginLeft:open?240:0,

// padding:3,

// background:"#F9F5EE",

// minHeight:"100vh",

// transition:"0.3s"

// }}
// >


// <Toolbar/>


// {children}


// </Box>


// </Box>

// )

// }


// export default MainLayout;
//---------------------------------------------------------------

import { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  const [open, setOpen] = useState(true);

  return (
    <Box>
      <Navbar
        openSidebar={() => setOpen(!open)}
      />

      <Sidebar
        open={open}
      />

      <Box
        component="main"
        sx={{
          marginLeft: open ? "240px" : 0,
          p: 3,
          background: "#F9F5EE",
          minHeight: "100vh",
          transition: "0.3s",
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;