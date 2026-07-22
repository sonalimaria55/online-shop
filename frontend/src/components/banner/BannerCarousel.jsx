

// import { useEffect } from "react";

// import {
//   Box,
//   Typography,
//   Button,
//   Container,
//   CircularProgress,
// } from "@mui/material";

// import { useDispatch, useSelector } from "react-redux";

// import { getCustomerBanners } from "../../features/banners/BannerThunk";

// const BannerCarousel = () => {
//   const dispatch = useDispatch();

//   const {
//     customerBanners = [],
//     loading = false,
//   } = useSelector((state) => state.banner || {});

//   useEffect(() => {
//     dispatch(getCustomerBanners());
//   }, [dispatch]);

//   if (loading) {
//     return (
//       <Box
//         sx={{
//           height: "300px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (!customerBanners.length) {
//     return (
//       <Box
//         sx={{
//           height: "250px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Typography>No Banner Available</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box>
//       {customerBanners.map((banner) => (
//         <Box
//           key={banner._id}
//           sx={{
//             minHeight: "250px",
//             backgroundImage: `
//               linear-gradient(
//                 rgba(250,248,243,0.65),
//                 rgba(250,248,243,0.65)
//               ),
//               url(${banner.image})
//             `,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             display: "flex",
//             alignItems: "center",
//             mb: 3,
//           }}
//         >
//           <Container maxWidth="lg">
//             <Box textAlign="center">
//               <Typography
//                 sx={{
//                   fontSize: {
//                     xs: "28px",
//                     md: "48px",
//                   },
//                   fontWeight: 600,
//                   letterSpacing: 3,
//                   color: "#222",
//                 }}
//               >
//                 {banner.title}
//               </Typography>

//               {banner.subtitle && (
//                 <Typography
//                   sx={{
//                     mt: 2,
//                     fontSize: {
//                       xs: "18px",
//                       md: "24px",
//                     },
//                     color: "#B08D57",
//                   }}
//                 >
//                   {banner.subtitle}
//                 </Typography>
//               )}

//               {banner.description && (
//                 <Typography
//                   sx={{
//                     mt: 2,
//                     maxWidth: 700,
//                     mx: "auto",
//                     color: "#666",
//                   }}
//                 >
//                   {banner.description}
//                 </Typography>
//               )}

//               {banner.buttonText && (
//                 <Button
//                   variant="contained"
//                   sx={{
//                     mt: 4,
//                     background: "#B08D57",
//                     borderRadius: "30px",
//                     px: 5,
//                     "&:hover": {
//                       background: "#967344",
//                     },
//                   }}
//                 >
//                   {banner.buttonText}
//                 </Button>
//               )}
//             </Box>
//           </Container>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default BannerCarousel;

//---------------------------------------------------------------
// import { useEffect, useState } from "react";

// import {
//     Box,
//     Typography,
//     Button,
//     Container,
//     CircularProgress,
// } from "@mui/material";

// import { useDispatch, useSelector } from "react-redux";

// import { getCustomerBanners } from "../../features/banners/BannerThunk";

// const BannerCarousel = ({ placement }) => {
//     const dispatch = useDispatch();

//     const {
//         customerBanners = [],
//         loading = false,
//     } = useSelector((state) => state.banner);

//     const [currentBanner, setCurrentBanner] = useState(0);

//     useEffect(() => {
//         dispatch(getCustomerBanners());
//     }, [dispatch]);

//     // Filter banners based on placement
//     const banners = customerBanners.filter(
//         (banner) => banner.placement === placement
//     );
//     console.log("Filtered banners:",


//         banners);


//     useEffect(() => {
//         console.log("Placement:", placement);
//         console.log("Customer Banners:", customerBanners);
//     }, [placement, customerBanners]);
//     // Auto Slide
// // Reset slide when banners change
// useEffect(() => {
//     setCurrentBanner(0);
// }, [placement, banners.length]);

// // Auto Slide
// useEffect(() => {
//     if (banners.length <= 1) return;

//     const timer = setInterval(() => {
//         setCurrentBanner((prev) => (prev + 1) % banners.length);
//     }, 5000);

//     return () => clearInterval(timer);
// }, [banners.length]);
//     if (loading) {
//         return (
//             <Box
//                 sx={{
//                     height: 250,
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                 }}
//             >
//                 <CircularProgress />
//             </Box>
//         );
//     }

//     if (banners.length === 0) {
//         return null;
//     }

//     const banner = banners[currentBanner];

//     return (
//         <Box
//             sx={{
//                 position: "relative",
//                 overflow: "hidden",
//                 mb: 5,
//             }}
//         >
//             <Box
//                 sx={{
//                     height: {
//                         xs: 220,
//                         md: 320,
//                     },
//                     backgroundImage: `
//             linear-gradient(
//               rgba(250,248,243,.65),
//               rgba(250,248,243,.65)
//             ),
//             url(${banner.image})
//           `,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     display: "flex",
//                     alignItems: "center",
//                 }}
//             >
//                 <Container maxWidth="lg">
//                     <Box textAlign="center">
//                         <Typography
//                             sx={{
//                                 fontSize: {
//                                     xs: "30px",
//                                     md: "52px",
//                                 },
//                                 fontWeight: 600,
//                                 letterSpacing: 3,
//                                 color: "#222",
//                             }}
//                         >
//                             {banner.title}
//                         </Typography>

//                         {banner.subtitle && (
//                             <Typography
//                                 sx={{
//                                     mt: 2,
//                                     fontSize: {
//                                         xs: "18px",
//                                         md: "26px",
//                                     },
//                                     color: "#B08D57",
//                                 }}
//                             >
//                                 {banner.subtitle}
//                             </Typography>
//                         )}

//                         {banner.description && (
//                             <Typography
//                                 sx={{
//                                     mt: 2,
//                                     maxWidth: 700,
//                                     mx: "auto",
//                                     color: "#555",
//                                 }}
//                             >
//                                 {banner.description}
//                             </Typography>
//                         )}

//                         {banner.buttonText && (
//                             <Button
//                                 variant="contained"
//                                 sx={{
//                                     mt: 4,
//                                     background: "#B08D57",
//                                     borderRadius: "30px",
//                                     px: 5,
//                                     py: 1.3,
//                                     textTransform: "none",
//                                     "&:hover": {
//                                         background: "#967344",
//                                     },
//                                 }}
//                             >
//                                 {banner.buttonText}
//                             </Button>
//                         )}
//                     </Box>
//                 </Container>
//             </Box>

//             {/* Dots */}
//             {banners.length > 1 && (
//                 <Box
//                     sx={{
//                         display: "flex",
//                         justifyContent: "center",
//                         gap: 1,
//                         mt: 2,
//                     }}
//                 >
//                     {banners.map((_, index) => (
//                         <Box
//                             key={index}
//                             onClick={() => setCurrentBanner(index)}
//                             sx={{
//                                 width: 10,
//                                 height: 10,
//                                 borderRadius: "50%",
//                                 cursor: "pointer",
//                                 background:
//                                     currentBanner === index
//                                         ? "#B08D57"
//                                         : "#d9d9d9",
//                             }}
//                         />
//                     ))}
//                 </Box>
//             )}
//         </Box>
//     );
// };

// export default BannerCarousel;
//-------------------------------------------------
import {
  Box,
  Typography,
  Button,
  Container,
  CircularProgress,
} from "@mui/material";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCustomerBanners } from "../../features/banners/BannerThunk";

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