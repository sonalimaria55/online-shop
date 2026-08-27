// import { useState } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   Paper,
//   TextField,
//   Typography,
// } from "@mui/material";

// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../../api/authApi";
// import redirectByRole from "../../utils/roleRedirect";

// const Login = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);

//   // Store token for display
//   const [token, setToken] = useState(localStorage.getItem("token") || "");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       const response = await loginUser(formData);

//       if (response.data.success) {
//         const { token, user } = response.data;

//         // Console logs

//         // Display token on page
//         setToken(token);

//         // Save authentication
//         localStorage.setItem("token", token);

//         localStorage.setItem("user", JSON.stringify(user));

//         // Redirect
//         redirectByRole(user.role, navigate);
//       }
//     } catch (error) {
//       alert(error.response?.data?.message || "Invalid email or password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "#FAF8F3",
//         display: "flex",
//         alignItems: "center",
//       }}
//     >
//       <Container maxWidth="sm">
//         <Paper
//           elevation={0}
//           sx={{
//             p: 5,
//             borderRadius: 4,
//             border: "1px solid #E5E5E5",
//           }}
//         >
//           <Typography variant="h4" textAlign="center" fontWeight={600} mb={1}>
//             Welcome Back
//           </Typography>

//           <Typography textAlign="center" color="text.secondary" mb={4}>
//             Login to SERINA Boutique
//           </Typography>

//           <Box component="form" onSubmit={handleLogin}>
//             <TextField
//               fullWidth
//               label="Email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               sx={{
//                 mb: 3,
//               }}
//             />

//             <TextField
//               fullWidth
//               label="Password"
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//             />

//             <Button
//               fullWidth
//               type="submit"
//               variant="contained"
//               disabled={loading}
//               sx={{
//                 mt: 4,
//                 py: 1.5,
//                 background: "#222",
//                 color: "#fff",
//                 textTransform: "none",

//                 "&:hover": {
//                   background: "#000",
//                 },
//               }}
//             >
//               {loading ? "Logging in..." : "Login"}
//             </Button>

//             {/* TOKEN DISPLAY */}

//             {token && (
//               <Typography
//                 sx={{
//                   mt: 3,
//                   color: "red",
//                   fontSize: "12px",
//                   wordBreak: "break-all",
//                 }}
//               >
//                 SERINA TOKEN:
//                 <br />
//                 {token}
//               </Typography>
//             )}

//             <Typography textAlign="center" mt={3} color="text.secondary">
//               Don't have an account?
//               <Button
//                 onClick={() => navigate("/register")}
//                 sx={{
//                   textTransform: "none",
//                   fontWeight: 600,
//                 }}
//               >
//                 Register
//               </Button>
//             </Typography>
//           </Box>
//         </Paper>
//       </Container>
//     </Box>
//   );
// };

// export default Login;
//------------------------------------------------------------------------------
// import { useState } from "react";

// import {
//   Box,
//   Button,
//   Container,
//   Paper,
//   TextField,
//   Typography,
// } from "@mui/material";

// import { useNavigate } from "react-router-dom";

// import { useDispatch } from "react-redux";

// import { loginUser } from "../../api/authApi";

// import {
//   mergeGuestCart,
//   getCart,
// } from "../../features/cart/CartThunk";

// import redirectByRole from "../../utils/roleRedirect";





// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);

//   // Store token for display
//   const [token, setToken] = useState(localStorage.getItem("token") || "");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       const response = await loginUser(formData);

//       if (response.data.success) {
//         const { token, user } = response.data;

//         // Console logs

//         // Display token on page
//         setToken(token);

//         // Save authentication
//         localStorage.setItem("token", token);

//         localStorage.setItem("user", JSON.stringify(user));

//         // Merge guest cart
//         await dispatch(mergeGuestCart());




//         // Refresh cart
//         await dispatch(getCart());

//         // Redirect
//         redirectByRole(user.role, navigate);
//       }
//     } catch (error) {
//       alert(error.response?.data?.message || "Invalid email or password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "#FAF8F3",
//         display: "flex",
//         alignItems: "center",
//       }}
//     >
//       <Container maxWidth="sm">
//         <Paper
//           elevation={0}
//           sx={{
//             p: 5,
//             borderRadius: 4,
//             border: "1px solid #E5E5E5",
//           }}
//         >
//           <Typography variant="h4" textAlign="center" fontWeight={600} mb={1}>
//             Welcome Back
//           </Typography>

//           <Typography textAlign="center" color="text.secondary" mb={4}>
//             Login to SERINA Boutique
//           </Typography>

//           <Box component="form" onSubmit={handleLogin}>
//             <TextField
//               fullWidth
//               label="Email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               sx={{
//                 mb: 3,
//               }}
//             />

//             <TextField
//               fullWidth
//               label="Password"
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//             />

//             <Button
//               fullWidth
//               type="submit"
//               variant="contained"
//               disabled={loading}
//               sx={{
//                 mt: 4,
//                 py: 1.5,
//                 background: "#222",
//                 color: "#fff",
//                 textTransform: "none",

//                 "&:hover": {
//                   background: "#000",
//                 },
//               }}
//             >
//               {loading ? "Logging in..." : "Login"}
//             </Button>

//             {/* TOKEN DISPLAY */}

//             {token && (
//               <Typography
//                 sx={{
//                   mt: 3,
//                   color: "red",
//                   fontSize: "12px",
//                   wordBreak: "break-all",
//                 }}
//               >
              
//               </Typography>
//             )}

//             <Typography textAlign="center" mt={3} color="text.secondary">
//               Don't have an account?
//               <Button
//                 onClick={() => navigate("/register")}
//                 sx={{
//                   textTransform: "none",
//                   fontWeight: 600,
//                 }}
//               >
//                 Register
//               </Button>
//             </Typography>
//           </Box>
//         </Paper>
//       </Container>
//     </Box>
//   );
// };

// export default Login;
//-----------------------------------------------------------------
// import { useState } from "react";

// import {
//     Box,
//     Button,
//     Container,
//     Paper,
//     TextField,
//     Typography,
// } from "@mui/material";

// import { useNavigate } from "react-router-dom";

// import { useDispatch } from "react-redux";

// import { loginUser } from "../../api/authApi";

// import {
//     mergeGuestCart,
//     getCart,
// } from "../../features/cart/CartThunk";

// import redirectByRole from "../../utils/roleRedirect";


// const Login = () => {

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//     });

//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleLogin = async (e) => {

//         e.preventDefault();

//         try {

//             setLoading(true);

//             const response =
//                 await loginUser(formData);

//             if (response.data.success) {

//                 const {
//                     token,
//                     user,
//                 } = response.data;

//                 // Save authentication
//                 localStorage.setItem(
//                     "token",
//                     token
//                 );

//                 localStorage.setItem(
//                     "user",
//                     JSON.stringify(user)
//                 );

//                 // ---------------------------------
//                 // MERGE GUEST CART
//                 // ---------------------------------

//                 await dispatch(
//                     mergeGuestCart()
//                 );

//                 // ---------------------------------
//                 // REFRESH CART
//                 // ---------------------------------

//                 await dispatch(
//                     getCart()
//                 );

//                 // ---------------------------------
//                 // REDIRECT
//                 // ---------------------------------

//                 redirectByRole(
//                     user.role,
//                     navigate
//                 );
//             }

//         } catch (error) {

//             console.error(
//                 "LOGIN ERROR:",
//                 error.response?.data ||
//                 error.message
//             );

//             alert(
//                 error.response?.data?.message ||
//                 "Invalid email or password"
//             );

//         } finally {

//             setLoading(false);
//         }
//     };


//     return (
//         <Box
//             sx={{
//                 minHeight: "100vh",
//                 background: "#FAF8F3",
//                 display: "flex",
//                 alignItems: "center",
//             }}
//         >

//             <Container maxWidth="sm">

//                 <Paper
//                     elevation={0}
//                     sx={{
//                         p: 5,
//                         borderRadius: 4,
//                         border: "1px solid #E5E5E5",
//                     }}
//                 >

//                     <Typography
//                         variant="h4"
//                         textAlign="center"
//                         fontWeight={600}
//                         mb={1}
//                     >
//                         Welcome Back
//                     </Typography>

//                     <Typography
//                         textAlign="center"
//                         color="text.secondary"
//                         mb={4}
//                     >
//                         Login to SERINA Boutique
//                     </Typography>

//                     <Box
//                         component="form"
//                         onSubmit={handleLogin}
//                     >

//                         <TextField
//                             fullWidth
//                             label="Email"
//                             name="email"
//                             type="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             sx={{
//                                 mb: 3,
//                             }}
//                         />

//                         <TextField
//                             fullWidth
//                             label="Password"
//                             name="password"
//                             type="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                         />

//                         <Button
//                             fullWidth
//                             type="submit"
//                             variant="contained"
//                             disabled={loading}
//                             sx={{
//                                 mt: 4,
//                                 py: 1.5,
//                                 background: "#222",
//                                 color: "#fff",
//                                 textTransform: "none",

//                                 "&:hover": {
//                                     background: "#000",
//                                 },
//                             }}
//                         >
//                             {loading
//                                 ? "Logging in..."
//                                 : "Login"}
//                         </Button>

//                         <Typography
//                             textAlign="center"
//                             mt={3}
//                             color="text.secondary"
//                         >
//                             Don't have an account?

//                             <Button
//                                 onClick={() =>
//                                     navigate("/register")
//                                 }
//                                 sx={{
//                                     textTransform: "none",
//                                     fontWeight: 600,
//                                 }}
//                             >
//                                 Register
//                             </Button>

//                         </Typography>

//                     </Box>

//                 </Paper>

//             </Container>

//         </Box>
//     );
// };

// export default Login;
//-------------------------------------
import { useState } from "react";

import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginUser } from "../../api/authApi";

import {
  mergeGuestCart,
  getCart,
} from "../../features/cart/CartThunk";

import redirectByRole from "../../utils/roleRedirect";


const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ======================================================
  // FORM DATA
  // ======================================================

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  // ======================================================
  // STATES
  // ======================================================

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);


  // ======================================================
  // HANDLE INPUT CHANGE
  // ======================================================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  // ======================================================
  // TOGGLE PASSWORD
  // ======================================================

  const handleTogglePassword = () => {

    setShowPassword((prev) => !prev);

  };


  // ======================================================
  // HANDLE LOGIN
  // ======================================================

  const handleLogin = async (e) => {

    e.preventDefault();


    // ----------------------------------------------------
    // Basic validation
    // ----------------------------------------------------

    if (!formData.email || !formData.password) {

      alert("Please enter email and password");

      return;
    }


    try {

      setLoading(true);


      // ==================================================
      // LOGIN API
      // ==================================================

      const response = await loginUser(formData);


      if (response.data.success) {

        const {
          token,
          user,
        } = response.data;


        // ==================================================
        // SAVE AUTHENTICATION
        // ==================================================

        localStorage.setItem(
          "token",
          token
        );

        localStorage.setItem(
          "user",
          JSON.stringify(user)
        );


        // ==================================================
        // MERGE GUEST CART
        // ==================================================

        try {

          await dispatch(
            mergeGuestCart()
          ).unwrap();

        } catch (cartError) {

          console.error(
            "GUEST CART MERGE ERROR:",
            cartError
          );

        }


        // ==================================================
        // REFRESH CART
        // ==================================================

        try {

          await dispatch(
            getCart()
          ).unwrap();

        } catch (cartError) {

          console.error(
            "GET CART ERROR:",
            cartError
          );

        }


        // ==================================================
        // REDIRECT BY ROLE
        // ==================================================

        redirectByRole(
          user.role,
          navigate
        );

      }

    } catch (error) {

      console.error(
        "LOGIN ERROR:",
        error.response?.data ||
        error.message
      );


      alert(
        error.response?.data?.message ||
        "Invalid email or password"
      );

    } finally {

      setLoading(false);

    }

  };


  // ======================================================
  // UI
  // ======================================================

  return (

    <Box
      sx={{
        minHeight: "100vh",
        background: "#FAF8F3",
        display: "flex",
        alignItems: "center",
      }}
    >

      <Container maxWidth="sm">

        <Paper
          elevation={0}
          sx={{
            p: 5,
            borderRadius: 4,
            border: "1px solid #E5E5E5",
          }}
        >

          {/* ==================================================
              TITLE
          ================================================== */}

          <Typography
            variant="h4"
            textAlign="center"
            fontWeight={600}
            mb={1}
          >
            Welcome Back
          </Typography>


          <Typography
            textAlign="center"
            color="text.secondary"
            mb={4}
          >
            Login to SERINA Boutique
          </Typography>


          {/* ==================================================
              LOGIN FORM
          ================================================== */}

          <Box
            component="form"
            onSubmit={handleLogin}
          >

            {/* ==================================================
                EMAIL
            ================================================== */}

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              sx={{
                mb: 3,
              }}
            />


            {/* ==================================================
                PASSWORD
            ================================================== */}

            <TextField
              fullWidth
              label="Password"
              name="password"
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"

              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">

                      <IconButton
                        onClick={handleTogglePassword}
                        edge="end"
                        aria-label={
                          showPassword
                            ? "Hide password"
                            : "Show password"
                        }
                      >

                        {showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}

                      </IconButton>

                    </InputAdornment>
                  ),
                },
              }}
            />


            {/* ==================================================
                FORGOT PASSWORD
            ================================================== */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mt: 1,
              }}
            >

              <Button
                type="button"
                onClick={() =>
                  navigate("/forgot-password")
                }
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  color: "#C9A227",
                  p: 0,
                  minWidth: "auto",

                  "&:hover": {
                    background: "transparent",
                    textDecoration: "underline",
                  },
                }}
              >
                Forgot Password?
              </Button>

            </Box>


            {/* ==================================================
                LOGIN BUTTON
            ================================================== */}

            <Button
              fullWidth
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                mt: 4,
                py: 1.5,
                background: "#222",
                color: "#fff",
                textTransform: "none",
                fontSize: 16,
                fontWeight: 600,

                "&:hover": {
                  background: "#000",
                },
              }}
            >

              {loading
                ? "Logging in..."
                : "Login"}

            </Button>


            {/* ==================================================
                REGISTER
            ================================================== */}

            <Typography
              textAlign="center"
              mt={3}
              color="text.secondary"
            >

              Don't have an account?

              <Button
                type="button"
                onClick={() =>
                  navigate("/register")
                }
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  color: "#C9A227",
                  ml: 0.5,
                  p: 0,
                  minWidth: "auto",

                  "&:hover": {
                    background: "transparent",
                    textDecoration: "underline",
                  },
                }}
              >
                Register
              </Button>

            </Typography>

          </Box>

        </Paper>

      </Container>

    </Box>

  );

};


export default Login;