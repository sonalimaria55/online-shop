import React from "react";
import { useSelector } from "react-redux";
import {
    Container,
    Paper,
    Typography,
    Box,
    Avatar,
    Divider,
    Grid,
} from "@mui/material";
import { PersonOutlined as PersonOutlineIcon } from "@mui/icons-material";

const Profile = () => {
    // Access user data from Redux store
    const { user } = useSelector((state) => state.auth || {});

    // Fallbacks if user details are nested or missing
    const firstName = user?.firstName || user?.name?.split(" ")[0] || "N/A";
    const lastName = user?.lastName || user?.name?.split(" ")[1] || "N/A";
    const email = user?.email || "N/A";
    const phone = user?.phone || user?.phoneNumber || "N/A";

    return (
        <Container maxWidth="md" sx={{ py: 5, mt: 8 }}>
            <Paper elevation={2} sx={{ p: 4, borderRadius: 3 }}>
                <Box display="flex" alignItems="center" gap={2} mb={3}>
                    <Avatar sx={{ bgcolor: "#B08D57", width: 64, height: 64 }}>
                        <PersonOutlineIcon sx={{ fontSize: 36, color: "#fff" }} />
                    </Avatar>
                    <Box>
                        <Typography variant="h5" fontWeight={600}>
                            My Profile
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Manage your personal details
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ mb: 4 }} />

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="caption" color="text.secondary" display="block">
                            First Name
                        </Typography>
                        <Typography variant="body1" fontWeight={500}>
                            {firstName}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography variant="caption" color="text.secondary" display="block">
                            Last Name
                        </Typography>
                        <Typography variant="body1" fontWeight={500}>
                            {lastName}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography variant="caption" color="text.secondary" display="block">
                            Email Address
                        </Typography>
                        <Typography variant="body1" fontWeight={500}>
                            {email}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography variant="caption" color="text.secondary" display="block">
                            Phone Number
                        </Typography>
                        <Typography variant="body1" fontWeight={500}>
                            {phone}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default Profile;