// import { useState } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   Paper,
//   TextField,
//   Typography,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import { useLocation, useNavigate } from "react-router-dom";
// import { verifyOTP } from "../../api/authApi";
// import { resendOTP } from "../../api/authApi";


// const VerifyOTP = () => {

//   const navigate = useNavigate();
//   const location = useLocation();

//   const email = location.state?.email || "";

//   const [otp, setOtp] = useState("");

//   const [loading, setLoading] = useState(false);

//   const [successOpen, setSuccessOpen] = useState(false);
//   const [seconds, setSeconds] = useState(60);

//   const handleVerify = async (e) => {

//     e.preventDefault();

//     try {

//       setLoading(true);

//       const response = await verifyOTP({
//         email,
//         otp,
//       });

//       if (response.data.success) {
//         setSuccessOpen(true);
//       }

//     } catch (error) {

//       alert(
//         error.response?.data?.message ||
//         "Invalid OTP"
//       );

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

//           <Typography
//             variant="h4"
//             align="center"
//             fontWeight={600}
//             mb={1}
//           >
//             Verify OTP
//           </Typography>

//           <Typography
//             align="center"
//             color="text.secondary"
//             mb={4}
//           >
//             Enter the OTP sent to
//             <br />
//             <strong>{email}</strong>
//           </Typography>

//           <Box
//             component="form"
//             onSubmit={handleVerify}
//           >

//             <TextField
//               fullWidth
//               label="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               inputProps={{
//                 maxLength: 6,
//               }}
//             />

//             <Button
//               fullWidth
//               type="submit"
//               variant="contained"
//               disabled={loading}
//               sx={{
//                 mt: 3,
//                 py: 1.5,
//                 background: "#222",
//                 color: "#fff",
//                 textTransform: "none",
//                 "&:hover": {
//                   background: "#000",
//                 },
//               }}
//             >
//               {loading ? "Verifying..." : "Verify OTP"}
//             </Button>

//           </Box>

//         </Paper>

//       </Container>

//       {/* Success Dialog */}

//       <Dialog open={successOpen}>

//         <DialogTitle
//           sx={{
//             textAlign: "center",
//             fontWeight: 600,
//           }}
//         >
//           🎉 Registration Successful
//         </DialogTitle>

//         <DialogContent>

//           <Typography
//             textAlign="center"
//             sx={{
//               mt: 1,
//             }}
//           >
//             Your email has been verified successfully.
//             <br />
//             You can now login to SERINA Boutique.
//           </Typography>

//         </DialogContent>

//         <DialogActions
//           sx={{
//             justifyContent: "center",
//             pb: 3,
//           }}
//         >

//           <Button
//             variant="contained"
//             sx={{
//               background: "#222",
//               color: "#fff",
//               px: 5,
//               textTransform: "none",
//               "&:hover": {
//                 background: "#000",
//               },
//             }}
//             onClick={() => {

//               setSuccessOpen(false);

//               navigate("/login");

//             }}
//           >
//             Continue to Login
//           </Button>

//         </DialogActions>

//       </Dialog>

//     </Box>

//   );

// };

// export default VerifyOTP;

import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";
import { verifyOTP, resendOTP } from "../../api/authApi";

const VerifyOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const [successOpen, setSuccessOpen] = useState(false);

  const [seconds, setSeconds] = useState(60);

  // Protect route if email missing

  useEffect(() => {
    if (!email) {
      navigate("/register");
    }
  }, [email, navigate]);

  // OTP countdown timer

  useEffect(() => {
    if (seconds === 0) return;

    const timer = setTimeout(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  // Verify OTP

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    try {
      setLoading(true);

      const response = await verifyOTP({
        email,
        otp,
      });

      if (response.data.success) {
        setSuccessOpen(true);
      }
    } catch (error) {
      alert(error.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP

  const handleResend = async () => {
    try {
      await resendOTP({
        email,
      });

      alert("A new OTP has been sent to your email.");

      setSeconds(300);
      setOtp("");
    } catch (error) {
      alert(error.response?.data?.message || "Unable to resend OTP");
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
          <Typography
            variant="h4"

            align="center"

            fontWeight={600}

            mb={1}
          >
            Verify OTP
          </Typography>

          <Typography
            align="center"

            color="text.secondary"

            mb={4}
          >
            Enter the OTP sent to
            <br />
            <strong>{email}</strong>
          </Typography>

          <Box
            component="form"

            onSubmit={handleVerify}
          >
            <TextField
              fullWidth

              label="Enter OTP"

              value={otp}

              onChange={(e) => setOtp(e.target.value)}

              autoFocus

              type="tel"

              inputProps={{
                maxLength: 6,

                inputMode: "numeric",
              }}
            />

            <Button
              fullWidth

              type="submit"

              variant="contained"

              disabled={loading}

              sx={{
                mt: 3,

                py: 1.5,

                background: "#222",

                color: "#fff",

                textTransform: "none",

                "&:hover": {
                  background: "#000",
                },
              }}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </Button>

            <Box
              textAlign="center"

              mt={3}
            >
              {seconds > 0 ? (
                <Typography color="text.secondary">
                  Resend OTP in {seconds}s
                </Typography>
              ) : (
                <Button
                  onClick={handleResend}

                  sx={{
                    textTransform: "none",

                    fontWeight: 600,
                  }}
                >
                  Resend OTP
                </Button>
              )}
            </Box>
          </Box>
        </Paper>
      </Container>

      {/* Success Dialog */}

      <Dialog open={successOpen}>
        <DialogTitle
          sx={{
            textAlign: "center",

            fontWeight: 600,
          }}
        >
          🎉 Registration Successful
        </DialogTitle>

        <DialogContent>
          <Typography
            textAlign="center"

            sx={{ mt: 1 }}
          >
            Your email has been verified successfully.
            <br />
            You can now login to SERINA Boutique.
          </Typography>
        </DialogContent>

        <DialogActions
          sx={{
            justifyContent: "center",

            pb: 3,
          }}
        >
          <Button
            variant="contained"

            onClick={() => {
              setSuccessOpen(false);

              navigate("/login");
            }}

            sx={{
              background: "#222",

              color: "#fff",

              px: 5,

              textTransform: "none",

              "&:hover": {
                background: "#000",
              },
            }}
          >
            Continue to Login
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default VerifyOTP;
