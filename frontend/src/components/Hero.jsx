// import {
//   Box,
//   Typography,
//   Button,
//   Container,
//   CircularProgress,
// } from "@mui/material";

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { getCustomerBanners } from "../features/banners/BannerThunk";

// const Hero = () => {
//   const dispatch = useDispatch();

//   const { customerBanners, loading } = useSelector(
//     (state) => state.banner
//   );

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     dispatch(getCustomerBanners());
//   }, [dispatch]);

//   // Only Hero banners
//   const heroBanners = customerBanners.filter(
//     (banner) => banner.placement === "hero"
//   );

//   // Auto Slide
//   useEffect(() => {
//     if (heroBanners.length <= 1) return;

//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
//     }, 4000);

//     return () => clearInterval(timer);
//   }, [heroBanners.length]);

//   if (loading) {
//     return (
//       <Box
//         sx={{
//           height: "550px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (heroBanners.length === 0) {
//     return (
//       <Box
//         sx={{
//           minHeight: "550px",
//           display: "flex",
//           alignItems: "center",
//           background: "#faf8f3",
//         }}
//       >
//         <Container>
//           <Box textAlign="center">
//             <Typography
//               sx={{
//                 fontSize: { xs: "45px", md: "75px" },
//                 letterSpacing: 10,
//                 fontWeight: 600,
//               }}
//             >
//               SERINA
//             </Typography>

//             <Typography
//               sx={{
//                 mt: 2,
//                 color: "#B08D57",
//                 fontSize: "28px",
//               }}
//             >
//               Where Style Meets Everyday Life
//             </Typography>

//             <Button
//               variant="contained"
//               sx={{
//                 mt: 4,
//                 background: "#B08D57",
//                 borderRadius: "30px",
//                 px: 5,
//               }}
//             >
//               Explore Collection
//             </Button>
//           </Box>
//         </Container>
//       </Box>
//     );
//   }

//   const banner = heroBanners[currentSlide];

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         height: { xs: 350, md: 550 },
//         overflow: "hidden",
//       }}
//     >
//       <Box
//         component="img"
//         src={banner.image}
//         alt={banner.title}
//         sx={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//         }}
//       />

//       <Box
//         sx={{
//           position: "absolute",
//           inset: 0,
//           background: "rgba(250,248,243,.55)",
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         <Container>
//           <Box textAlign="center">
//             <Typography
//               sx={{
//                 fontSize: { xs: "40px", md: "70px" },
//                 fontWeight: 600,
//                 letterSpacing: 6,
//                 color: "#222",
//               }}
//             >
//               {banner.title}
//             </Typography>

//             {banner.subtitle && (
//               <Typography
//                 sx={{
//                   mt: 2,
//                   fontSize: { xs: "20px", md: "30px" },
//                   color: "#B08D57",
//                 }}
//               >
//                 {banner.subtitle}
//               </Typography>
//             )}

//             {banner.description && (
//               <Typography
//                 sx={{
//                   mt: 2,
//                   maxWidth: 700,
//                   mx: "auto",
//                   color: "#555",
//                 }}
//               >
//                 {banner.description}
//               </Typography>
//             )}

//             <Button
//               variant="contained"
//               sx={{
//                 mt: 4,
//                 background: "#B08D57",
//                 px: 5,
//                 py: 1.5,
//                 borderRadius: "30px",
//                 "&:hover": {
//                   background: "#967344",
//                 },
//               }}
//             >
//               {banner.buttonText || "Explore Collection"}
//             </Button>
//           </Box>
//         </Container>
//       </Box>

//       {heroBanners.length > 1 && (
//         <Box
//           sx={{
//             position: "absolute",
//             bottom: 20,
//             width: "100%",
//             display: "flex",
//             justifyContent: "center",
//             gap: 1,
//           }}
//         >
//           {heroBanners.map((_, index) => (
//             <Box
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               sx={{
//                 width: 10,
//                 height: 10,
//                 borderRadius: "50%",
//                 cursor: "pointer",
//                 background:
//                   currentSlide === index ? "#B08D57" : "#d9d9d9",
//               }}
//             />
//           ))}
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default Hero;


import {
  Box,
  Typography,
  Button,
  Container,
  CircularProgress,
} from "@mui/material";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCustomerBanners } from "../features/banners/BannerThunk";

const Hero = () => {
  const dispatch = useDispatch();

  const {
    customerBanners = [],
    loading,
  } = useSelector((state) => state.banner);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    dispatch(getCustomerBanners());
  }, [dispatch]);

  const heroBanners = customerBanners.filter(
    (banner) => banner.placement === "hero"
  );

  useEffect(() => {
    if (heroBanners.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [heroBanners.length]);

  if (loading) {
    return (
      <Box
        sx={{
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (heroBanners.length === 0) {
    return (
      <Box
        sx={{
          minHeight: "550px",
          background: "#faf8f3",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Box textAlign="center">
            <Typography
              sx={{
                fontSize: {
                  xs: "45px",
                  md: "75px",
                },
                letterSpacing: 10,
                fontWeight: 500,
              }}
            >
              SERINA
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "#B08D57",
                fontSize: {
                  xs: "22px",
                  md: "30px",
                },
              }}
            >
              Where Style Meets Everyday Life
            </Typography>

            <Button
              variant="contained"
              sx={{
                mt: 5,
                background: "#B08D57",
                borderRadius: "30px",
                px: 5,
                "&:hover": {
                  background: "#967344",
                },
              }}
            >
              Explore Collection
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  const banner = heroBanners[currentSlide];

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: {
          xs: 350,
          md: 550,
        },
      }}
    >
      <Box
        component="img"
        src={banner.image}
        alt={banner.title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(250,248,243,.55)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Box textAlign="center">
            <Typography
              sx={{
                fontSize: {
                  xs: "38px",
                  md: "70px",
                },
                fontWeight: 600,
                letterSpacing: 6,
                color: "#222",
              }}
            >
              {banner.title}
            </Typography>

            {banner.subtitle && (
              <Typography
                sx={{
                  mt: 2,
                  color: "#B08D57",
                  fontSize: {
                    xs: "20px",
                    md: "30px",
                  },
                }}
              >
                {banner.subtitle}
              </Typography>
            )}

            {banner.description && (
              <Typography
                sx={{
                  mt: 2,
                  maxWidth: 700,
                  mx: "auto",
                  color: "#555",
                }}
              >
                {banner.description}
              </Typography>
            )}

            <Button
              variant="contained"
              sx={{
                mt: 4,
                background: "#B08D57",
                px: 5,
                py: 1.5,
                borderRadius: "30px",
                "&:hover": {
                  background: "#967344",
                },
              }}
            >
              {banner.buttonText || "Explore Collection"}
            </Button>
          </Box>
        </Container>
      </Box>

      {heroBanners.length > 1 && (
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: 1,
          }}
        >
          {heroBanners.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                cursor: "pointer",
                background:
                  currentSlide === index ? "#B08D57" : "#ddd",
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Hero;