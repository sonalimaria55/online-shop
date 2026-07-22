import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";


const Navbar = ({openSidebar}) => {


return (

<AppBar
position="fixed"
sx={{
background:"#F9F5EE",
color:"#4A4036",
boxShadow:"none",
borderBottom:"1px solid #E8DED2",
zIndex:1201
}}
>


<Toolbar>


<IconButton
onClick={openSidebar}
sx={{
color:"#8A6F52"
}}
>

<MenuIcon/>

</IconButton>



<Typography
sx={{
fontSize:"24px",
fontWeight:600,
letterSpacing:2,
flexGrow:1
}}
>
SERINA
</Typography>



<Box>

<IconButton
sx={{
color:"#8A6F52"
}}
>

<LogoutIcon/>

</IconButton>

</Box>


</Toolbar>


</AppBar>

)

}


export default Navbar;
//----------------------------------------------------------------------
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Box
// } from "@mui/material";

// import MenuIcon from "@mui/icons-material/Menu";
// import LogoutIcon from "@mui/icons-material/Logout";

// import { useNavigate } from "react-router-dom";

// const Navbar = ({ openSidebar }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Remove authentication data
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");

//     // If you store anything else related to login,
//     // remove it here as well.

//     // Redirect to login page
//     navigate("/login", { replace: true });
//   };

//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         background: "#F9F5EE",
//         color: "#4A4036",
//         boxShadow: "none",
//         borderBottom: "1px solid #E8DED2",
//         zIndex: 1201,
//       }}
//     >
//       <Toolbar>
//         <IconButton
//           onClick={openSidebar}
//           sx={{
//             color: "#8A6F52",
//           }}
//         >
//           <MenuIcon />
//         </IconButton>

//         <Typography
//           sx={{
//             fontSize: "24px",
//             fontWeight: 600,
//             letterSpacing: 2,
//             flexGrow: 1,
//           }}
//         >
//           SERINA
//         </Typography>

//         <Box>
//           <IconButton
//             onClick={handleLogout}
//             sx={{
//               color: "#8A6F52",
//             }}
//           >
//             <LogoutIcon />
//           </IconButton>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;