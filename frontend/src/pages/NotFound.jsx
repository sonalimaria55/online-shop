import {
    Box,
    Button,
    Typography,
} from "@mui/material";

import {
    useNavigate,
} from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                px: 3,
                backgroundColor: "#FAF8F3",
            }}
        >

            <Typography
                sx={{
                    fontSize: {
                        xs: 80,
                        md: 140,
                    },
                    fontWeight: 600,
                    lineHeight: 1,
                    color: "#C9A227",
                    letterSpacing: 4,
                }}
            >
                404
            </Typography>

            <Typography
                sx={{
                    mt: 3,
                    fontSize: {
                        xs: 28,
                        md: 40,
                    },
                    fontWeight: 500,
                    color: "#1C1C1C",
                }}
            >
                Page Not Found
            </Typography>

            <Typography
                sx={{
                    mt: 2,
                    maxWidth: 500,
                    color: "#7A7A7A",
                    lineHeight: 1.7,
                }}
            >
                Sorry, the page you are looking for
                doesn't exist or may have been moved.
            </Typography>

            <Button
                variant="contained"
                onClick={() => navigate("/")}
                sx={{
                    mt: 4,
                    px: 5,
                    py: 1.5,
                    backgroundColor: "#C9A227",
                    color: "#fff",
                    borderRadius: 0,

                    "&:hover": {
                        backgroundColor: "#B08D57",
                    },
                }}
            >
                BACK TO HOME
            </Button>

        </Box>
    );
};

export default NotFound;