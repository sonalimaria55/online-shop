

// import {
//   Box,
//   Typography,
//   Container,
// } from "@mui/material";

// import VisitorNavbar from "../components/navbar/VisitorNavbar";
// import Footer from "../components/Footer";


// const About = () => {

//   return (
//     <>
//       <VisitorNavbar/>


//       <Box
//         sx={{
//           py: 10,
//           background: "#faf8f3"
//         }}
//       >

//         <Container>

//           <Typography
//             textAlign="center"
//             sx={{
//               fontSize: "45px",
//               letterSpacing: 5
//             }}
//           >
//             ABOUT SERINA
//           </Typography>


//           <Typography
//             sx={{
//               mt: 4,
//               lineHeight: 2
//             }}
//           >
//             SERINA brings together contemporary fashion
//             and timeless elegance. Every collection is
//             crafted with attention to detail and style.
//           </Typography>


//         </Container>

//       </Box>


//       <Footer />

//     </>
//   )

// }


// export default About;
//--------------------------------
// import {
//     Box,
//     Typography,
//     Container,
// } from "@mui/material";

// const About = () => {

//     return (
//         <Box
//             sx={{
//                 py: 10,
//                 background: "#faf8f3",
//                 minHeight: "70vh",
//             }}
//         >

//             <Container>

//                 <Typography
//                     textAlign="center"
//                     sx={{
//                         fontSize: "45px",
//                         letterSpacing: 5,
//                     }}
//                 >
//                     ABOUT SERINA
//                 </Typography>

//                 <Typography
//                     sx={{
//                         mt: 4,
//                         lineHeight: 2,
//                     }}
//                 >
//                     SERINA brings together contemporary fashion
//                     and timeless elegance. Every collection is
//                     crafted with attention to detail and style.
//                 </Typography>

//             </Container>

//         </Box>
//     );
// };

// export default About;
import React from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Paper,
    Grid,
    Rating,
    Avatar,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import aboutImage from "../assets/hero.jpg";

// Mock data: Replace or hook up with API response
const reviewsData = {
    rating: 4.9,
    totalReviews: 128,
    reviews: [
        {
            name: "Ananya Sharma",
            rating: 5,
            date: "2 weeks ago",
            comment:
                "Absolutely love the quality of clothes from SERINA! The stitching, fabric, and fit are perfect. Will definitely buy again.",
            avatar: "",
        },
        {
            name: "Priya Reddy",
            rating: 5,
            date: "1 month ago",
            comment:
                "Timeless elegance indeed. Beautiful collection and super quick delivery. Their customer support is extremely helpful!",
            avatar: "",
        },
        {
            name: "Sneha Kapur",
            rating: 5,
            date: "2 months ago",
            comment:
                "High quality luxury feel at very reasonable pricing. Got so many compliments on the outfit!",
            avatar: "",
        },
    ],
};

const About = () => {
    return (
        <Box
            sx={{
                background: "#FAF8F3",
                py: 12,
            }}
        >
            <Container maxWidth="lg">
                {/* HEADER */}
                <Typography
                    textAlign="center"
                    sx={{
                        fontSize: {
                            xs: "32px",
                            md: "42px",
                        },
                        fontWeight: 500,
                        letterSpacing: 2,
                        mb: 8,
                    }}
                >
                    About SERINA
                </Typography>

                {/* ABOUT SECTION */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "1fr 1fr",
                        },
                        gap: 6,
                        alignItems: "center",
                        mb: 12,
                    }}
                >
                    {/* Image */}
                    <Box
                        component="img"
                        src={aboutImage}
                        alt="SERINA Boutique"
                        sx={{
                            width: "100%",
                            height: "500px",
                            objectFit: "cover",
                            borderRadius: 3,
                        }}
                    />

                    {/* Content */}
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "28px",
                                fontWeight: 500,
                                mb: 3,
                                letterSpacing: 1,
                            }}
                        >
                            Crafted for Every Style Story
                        </Typography>

                        <Typography
                            color="text.secondary"
                            sx={{
                                lineHeight: 2,
                                fontSize: "17px",
                                mb: 2,
                            }}
                        >
                            SERINA brings together contemporary fashion and
                            timeless elegance through thoughtfully selected
                            collections designed for everyday confidence.
                        </Typography>

                        <Typography
                            color="text.secondary"
                            sx={{
                                lineHeight: 2,
                                fontSize: "17px",
                            }}
                        >
                            Every collection is carefully curated to bring together
                            elegance, confidence, and individuality for those who
                            appreciate refined craftsmanship.
                        </Typography>

                        <Button
                            variant="outlined"
                            sx={{
                                mt: 4,
                                borderColor: "#B08D57",
                                color: "#B08D57",
                                borderRadius: "30px",
                                px: 5,
                                py: 1.2,
                                letterSpacing: 1,
                                "&:hover": {
                                    borderColor: "#8C6A3D",
                                    background: "#B08D57",
                                    color: "#fff",
                                },
                            }}
                        >
                            Explore Collection
                        </Button>
                    </Box>
                </Box>

                {/* ================================================== */}
                {/* GOOGLE REVIEWS INTEGRATION                          */}
                {/* ================================================== */}
                <Box sx={{ mt: 8 }}>
                    {/* OVERALL RATING HEADER */}
                    <Box
                        textAlign="center"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mb={6}
                    >
                        <Box display="flex" alignItems="center" gap={1} mb={1}>
                            <GoogleIcon sx={{ color: "#4285F4", fontSize: 28 }} />
                            <Typography variant="h5" fontWeight={600} color="#222">
                                Customer Reviews
                            </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" gap={1.5}>
                            <Typography variant="h4" fontWeight={700} color="#222">
                                {reviewsData.rating}
                            </Typography>
                            <Box textAlign="left">
                                <Rating
                                    value={reviewsData.rating}
                                    precision={0.1}
                                    readOnly
                                    sx={{ color: "#B08D57" }}
                                />
                                <Typography variant="body2" color="text.secondary">
                                    Based on {reviewsData.totalReviews} Google reviews
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* REVIEWS CARDS GRID */}
                    <Grid container spacing={3}>
                        {reviewsData.reviews.map((rev, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        height: "100%",
                                        borderRadius: 3,
                                        background: "#fff",
                                        border: "1px solid #eee",
                                        display: "flex",
                                        flexDirection: "column",
                                        justify: "space-between",
                                    }}
                                >
                                    <Box>
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="space-between"
                                            mb={2}
                                        >
                                            <Box display="flex" alignItems="center" gap={1.5}>
                                                <Avatar
                                                    src={rev.avatar}
                                                    alt={rev.name}
                                                    sx={{ bgcolor: "#B08D57" }}
                                                >
                                                    {rev.name.charAt(0)}
                                                </Avatar>
                                                <Box>
                                                    <Typography variant="subtitle2" fontWeight={600}>
                                                        {rev.name}
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        color="text.secondary"
                                                    >
                                                        {rev.date}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <GoogleIcon
                                                sx={{ color: "#ea4335", fontSize: 18 }}
                                            />
                                        </Box>

                                        <Rating
                                            value={rev.rating}
                                            size="small"
                                            readOnly
                                            sx={{ mb: 1.5, color: "#B08D57" }}
                                        />

                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ lineHeight: 1.7 }}
                                        >
                                            "{rev.comment}"
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default About;