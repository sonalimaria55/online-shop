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

import { useState } from "react";

import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

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

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Store token for display
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await loginUser(formData);

      if (response.data.success) {
        const { token, user } = response.data;

        // Console logs

        // Display token on page
        setToken(token);

        // Save authentication
        localStorage.setItem("token", token);

        localStorage.setItem("user", JSON.stringify(user));

        // Merge guest cart
        await dispatch(mergeGuestCart());




        // Refresh cart
        await dispatch(getCart());

        // Redirect
        redirectByRole(user.role, navigate);
      }
    } catch (error) {
      alert(error.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

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
          <Typography variant="h4" textAlign="center" fontWeight={600} mb={1}>
            Welcome Back
          </Typography>

          <Typography textAlign="center" color="text.secondary" mb={4}>
            Login to SERINA Boutique
          </Typography>

          <Box component="form" onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              sx={{
                mb: 3,
              }}
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />

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

                "&:hover": {
                  background: "#000",
                },
              }}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>

            {/* TOKEN DISPLAY */}

            {token && (
              <Typography
                sx={{
                  mt: 3,
                  color: "red",
                  fontSize: "12px",
                  wordBreak: "break-all",
                }}
              >
              
              </Typography>
            )}

            <Typography textAlign="center" mt={3} color="text.secondary">
              Don't have an account?
              <Button
                onClick={() => navigate("/register")}
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
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

