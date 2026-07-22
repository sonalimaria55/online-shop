import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/authApi";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      await registerUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      setOpenDialog(true);

    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
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
          <Typography
            variant="h4"
            align="center"
            fontWeight={600}
            mb={1}
          >
            SERINA
          </Typography>

          <Typography
            align="center"
            color="text.secondary"
            mb={4}
          >
            Create Your Account
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={12}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  sx={{
                    mt: 1,
                    py: 1.6,
                    background: "#222",
                    color: "#fff",
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: 16,
                    "&:hover": {
                      background: "#000",
                    },
                  }}
                >
                  {loading ? "Creating Account..." : "Register"}
                </Button>
              </Grid>

            </Grid>

            <Typography
              align="center"
              mt={3}
            >
              Already have an account?{" "}
              <Link
                component={RouterLink}
                to="/login"
                underline="hover"
              >
                Login
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>

      {/* Success Dialog */}

      <Dialog
        open={openDialog}
        disableEscapeKeyDown
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          🎉 OTP Sent Successfully
        </DialogTitle>

        <DialogContent>
          <Typography
            textAlign="center"
            sx={{
              mt: 1,
              lineHeight: 1.8,
            }}
          >
            An OTP has been sent to
            <br />
            <strong>{formData.email}</strong>
            <br />
            Kindly verify your account to
            complete your registration.
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
            sx={{
              background: "#222",
              color: "#fff",
              px: 5,
              textTransform: "none",
              "&:hover": {
                background: "#000",
              },
            }}
            onClick={() => {
              setOpenDialog(false);

              navigate("/verify-otp", {
                state: {
                  email: formData.email,
                },
              });
            }}
          >
            Verify OTP
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Register;