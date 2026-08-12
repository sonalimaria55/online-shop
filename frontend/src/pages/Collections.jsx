

// // import {
// //   Box,
// //   Typography,
// //   Container,
// //   Card,
// //   CardMedia,
// // } from "@mui/material";

// // import VisitorNavbar from "../components/navbar/VisitorNavbar";
// // import Footer from "../components/Footer";


// // const collections = [
// //   {
// //     name: "Sarees",
// //     image: "/collections/saree.jpg",
// //   },
// //   {
// //     name: "Dresses",
// //     image: "/collections/dress.jpg",
// //   },
// //   {
// //     name: "Bridal Collection",
// //     image: "/collections/bridal.jpg",
// //   },
// //   {
// //     name: "Jewellery",
// //     image: "/collections/jewellery.jpg",
// //   },
// //   {
// //     name: "Accessories",
// //     image: "/collections/accessories.jpg",
// //   },
// //   {
// //     name: "Festive Wear",
// //     image: "/collections/festive.jpg",
// //   },
// // ];


// // const Collections = () => {


// //   return (
// //     <>
// //   <VisitorNavbar />

// //       <Box
// //         sx={{
// //           py: 10,
// //           background: "#faf8f3"
// //         }}
// //       >

// //         <Container maxWidth="lg">

// //           <Typography
// //             textAlign="center"
// //             sx={{
// //               fontSize: {
// //                 xs: "32px",
// //                 md: "45px"
// //               },
// //               letterSpacing: 5,
// //               fontWeight: 500,
// //               mb: 6
// //             }}
// //           >
// //             OUR COLLECTIONS
// //           </Typography>


// //           <Box
// //             sx={{
// //               display: "grid",
// //               gridTemplateColumns: {
// //                 xs: "1fr",
// //                 sm: "repeat(2,1fr)",
// //                 md: "repeat(3,1fr)"
// //               },
// //               gap: 4
// //             }}
// //           >

// //             {
// //               collections.map((item) => (

// //                 <Card
// //                   key={item.name}
// //                   sx={{
// //                     borderRadius: 0,
// //                     boxShadow: "none",
// //                     position: "relative",
// //                     overflow: "hidden",
// //                     cursor: "pointer",

// //                     "&:hover img": {
// //                       transform: "scale(1.05)"
// //                     }
// //                   }}
// //                 >

// //                   <CardMedia
// //                     component="img"
// //                     image={item.image}
// //                     alt={item.name}
// //                     sx={{
// //                       height: 320,
// //                       transition: "0.5s"
// //                     }}
// //                   />


// //                   <Box
// //                     sx={{
// //                       position: "absolute",
// //                       bottom: 0,
// //                       left: 0,
// //                       right: 0,
// //                       background:
// //                         "linear-gradient(transparent,rgba(0,0,0,0.6))",
// //                       color: "#fff",
// //                       p: 3
// //                     }}
// //                   >

// //                     <Typography
// //                       sx={{
// //                         fontSize: "22px",
// //                         letterSpacing: 2
// //                       }}
// //                     >
// //                       {item.name}
// //                     </Typography>

// //                   </Box>


// //                 </Card>

// //               ))
// //             }

// //           </Box>


// //         </Container>


// //       </Box>


// //       <Footer />

// //     </>
// //   );

// // };


// // export default Collections;


// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import {
//   Box,
//   Typography,
//   Container,
//   Card,
//   CardMedia,
// } from "@mui/material";

// import VisitorNavbar from "../components/navbar/VisitorNavbar";
// import Footer from "../components/Footer";

// import { getCategories } from "../features/categories/CategoriesThunk";

// const Collections = () => {

//   const dispatch = useDispatch();

//   const { categories } = useSelector(
//     (state) => state.categories
//   );

//   useEffect(() => {
//     dispatch(getCategories());
//   }, [dispatch]);

//   return (
//     <>
//       <VisitorNavbar />

//       <Box
//         sx={{
//           py: 10,
//           background: "#faf8f3",
//         }}
//       >
//         <Container maxWidth="lg">

//           <Typography
//             textAlign="center"
//             sx={{
//               fontSize: {
//                 xs: "32px",
//                 md: "45px",
//               },
//               letterSpacing: 5,
//               fontWeight: 500,
//               mb: 6,
//             }}
//           >
//             OUR COLLECTIONS
//           </Typography>

//           <Box
//             sx={{
//               display: "grid",
//               gridTemplateColumns: {
//                 xs: "1fr",
//                 sm: "repeat(2,1fr)",
//                 md: "repeat(3,1fr)",
//               },
//               gap: 4,
//             }}
//           >
//             {categories.map((item) => (
//               <Card
//                 key={item._id}
//                 sx={{
//                   borderRadius: 0,
//                   boxShadow: "none",
//                   position: "relative",
//                   overflow: "hidden",
//                   cursor: "pointer",

//                   "&:hover img": {
//                     transform: "scale(1.05)",
//                   },
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   image={item.image}
//                   alt={item.categoryName}
//                   sx={{
//                     height: 320,
//                     transition: "0.5s",
//                   }}
//                 />

//                 <Box
//                   sx={{
//                     position: "absolute",
//                     bottom: 0,
//                     left: 0,
//                     right: 0,
//                     background:
//                       "linear-gradient(transparent,rgba(0,0,0,0.6))",
//                     color: "#fff",
//                     p: 3,
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       fontSize: "22px",
//                       letterSpacing: 2,
//                     }}
//                   >
//                     {item.categoryName}
//                   </Typography>
//                 </Box>
//               </Card>
//             ))}
//           </Box>

//         </Container>
//       </Box>

//       <Footer />
//     </>
//   );
// };

// export default Collections;
//-----------------------------------------------------------------------


// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import {
//   Box,
//   Typography,
//   Container,
//   Card,
//   CardMedia,
// } from "@mui/material";

// import VisitorNavbar from "../components/navbar/VisitorNavbar";
// import Footer from "../components/Footer";

// import { getCategories } from "../features/categories/CategoriesThunk";

// const Collections = () => {
//   const dispatch = useDispatch();

//   const { categories = [] } = useSelector(
//     (state) => state.categories
//   );

//   useEffect(() => {
//     dispatch(getCategories());
//   }, [dispatch]);

//   return (
//     <>
//       <VisitorNavbar />

//       <Box
//         sx={{
//           py: 10,
//           background: "#faf8f3",
//         }}
//       >
//         <Container maxWidth="lg">
//           <Typography
//             textAlign="center"
//             sx={{
//               fontSize: {
//                 xs: "32px",
//                 md: "45px",
//               },
//               letterSpacing: 5,
//               fontWeight: 500,
//               mb: 6,
//             }}
//           >
//             OUR COLLECTIONS
//           </Typography>

//           <Box
//             sx={{
//               display: "grid",
//               gridTemplateColumns: {
//                 xs: "1fr",
//                 sm: "repeat(2,1fr)",
//                 md: "repeat(3,1fr)",
//               },
//               gap: 4,
//             }}
//           >
//             {categories.map((item) => (

//               <Card
//                 key={item._id}
//                 sx={{
//                   borderRadius: 0,
//                   boxShadow: "none",
//                   position: "relative",
//                   overflow: "hidden",
//                   cursor: "pointer",

//                   "&:hover img": {
//                     transform: "scale(1.05)",
//                   },
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   image={item.image || "/no-image.png"}
//                   alt={item.categoryName}
//                   sx={{
//                     height: 320,
//                     transition: "0.5s",
//                     objectFit: "cover",
//                   }}
//                 />

//                 <Box
//                   sx={{
//                     position: "absolute",
//                     bottom: 0,
//                     left: 0,
//                     right: 0,
//                     background:
//                       "linear-gradient(transparent, rgba(0,0,0,0.7))",
//                     color: "#fff",
//                     p: 3,
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       fontSize: "22px",
//                       letterSpacing: 2,
//                     }}
//                   >
//                     {item.categoryName}
//                   </Typography>
//                 </Box>
//               </Card>
//             ))}
//           </Box>
//         </Container>
//       </Box>

//       <Footer />
//     </>
//   );
// };

// export default Collections;
//----------------------------------------------

// import { useEffect } from "react";

// import {
//   useDispatch,
//   useSelector,
// } from "react-redux";

// import {
//   Box,
//   Typography,
//   Container,
//   Card,
//   CardMedia,
// } from "@mui/material";

// import Footer from "../components/Footer";

// import {
//   getCategories,
// } from "../features/categories/CategoriesThunk";


// // =====================================================
// // GET CATEGORY IMAGE URL
// // =====================================================

// const getCategoryImageUrl = (image) => {

//   // No image
//   if (!image) {
//     return "/no-image.png";
//   }


//   // -------------------------------------------------
//   // IMAGE IS A STRING
//   // -------------------------------------------------

//   if (typeof image === "string") {

//     // Full URL
//     if (
//       image.startsWith("http://") ||
//       image.startsWith("https://")
//     ) {
//       return image;
//     }

//     // Relative backend path
//     return `http://localhost:3000${image}`;
//   }


//   // -------------------------------------------------
//   // IMAGE IS AN OBJECT
//   // Example:
//   // {
//   //     url: "...",
//   //     publicId: "..."
//   // }
//   // -------------------------------------------------

//   if (
//     typeof image === "object" &&
//     image.url
//   ) {

//     if (
//       image.url.startsWith("http://") ||
//       image.url.startsWith("https://")
//     ) {
//       return image.url;
//     }

//     return `http://localhost:3000${image.url}`;
//   }


//   // -------------------------------------------------
//   // FALLBACK
//   // -------------------------------------------------

//   return "/no-image.png";
// };


// // =====================================================
// // COLLECTIONS
// // =====================================================

// const Collections = () => {

//   const dispatch = useDispatch();


//   // =================================================
//   // REDUX
//   // =================================================

//   const {
//     categories = [],
//   } = useSelector(
//     (state) => state.categories
//   );


//   // =================================================
//   // GET CATEGORIES
//   // =================================================

//   useEffect(() => {

//     dispatch(
//       getCategories()
//     );

//   }, [dispatch]);


//   // =================================================
//   // DEBUG
//   // =================================================

//   console.log(
//     "COLLECTIONS:",
//     categories
//   );


//   // =================================================
//   // UI
//   // =================================================

//   return (
//     <>

//       <Box
//         sx={{
//           py: 10,

//           background:
//             "#faf8f3",
//         }}
//       >

//         <Container
//           maxWidth="lg"
//         >

//           {/* ================================= */}
//           {/* TITLE */}
//           {/* ================================= */}

//           <Typography
//             textAlign="center"

//             sx={{
//               fontSize: {
//                 xs: "32px",
//                 md: "45px",
//               },

//               letterSpacing: 5,

//               fontWeight: 500,

//               mb: 6,
//             }}
//           >
//             OUR COLLECTIONS
//           </Typography>


//           {/* ================================= */}
//           {/* COLLECTION GRID */}
//           {/* ================================= */}

//           <Box
//             sx={{
//               display: "grid",

//               gridTemplateColumns: {
//                 xs: "1fr",
//                 sm: "repeat(2, 1fr)",
//                 md: "repeat(3, 1fr)",
//               },

//               gap: 4,
//             }}
//           >

//             {categories.map(
//               (item) => {

//                 const imageUrl =
//                   getCategoryImageUrl(
//                     item.image
//                   );


//                 console.log(
//                   "CATEGORY:",
//                   item.categoryName
//                 );

//                 console.log(
//                   "CATEGORY IMAGE:",
//                   item.image
//                 );

//                 console.log(
//                   "FINAL CATEGORY IMAGE URL:",
//                   imageUrl
//                 );


//                 return (

//                   <Card
//                     key={
//                       item._id
//                     }

//                     sx={{
//                       borderRadius: 0,

//                       boxShadow:
//                         "none",

//                       position:
//                         "relative",

//                       overflow:
//                         "hidden",

//                       cursor:
//                         "pointer",

//                       background:
//                         "#fff",

//                       "&:hover img": {
//                         transform:
//                           "scale(1.05)",
//                       },
//                     }}
//                   >

//                     {/* ============================= */}
//                     {/* CATEGORY IMAGE */}
//                     {/* ============================= */}

//                     <CardMedia
//                       component="img"

//                       src={
//                         imageUrl
//                       }

//                       alt={
//                         item.categoryName
//                       }

//                       onError={(
//                         event
//                       ) => {

//                         console.error(
//                           "CATEGORY IMAGE FAILED:",
//                           imageUrl
//                         );

//                         event.currentTarget.onerror =
//                           null;

//                         event.currentTarget.src =
//                           "/no-image.png";
//                       }}

//                       sx={{
//                         width:
//                           "100%",

//                         height:
//                           320,

//                         display:
//                           "block",

//                         objectFit:
//                           "cover",

//                         backgroundColor:
//                           "#f5f5f5",

//                         transition:
//                           "0.5s",
//                       }}
//                     />


//                     {/* ============================= */}
//                     {/* CATEGORY NAME */}
//                     {/* ============================= */}

//                     <Box
//                       sx={{
//                         position:
//                           "absolute",

//                         bottom: 0,

//                         left: 0,

//                         right: 0,

//                         background:
//                           "linear-gradient(transparent, rgba(0,0,0,0.7))",

//                         color:
//                           "#fff",

//                         p: 3,
//                       }}
//                     >

//                       <Typography
//                         sx={{
//                           fontSize:
//                             "22px",

//                           letterSpacing:
//                             2,
//                         }}
//                       >
//                         {
//                           item.categoryName
//                         }
//                       </Typography>

//                     </Box>

//                   </Card>

//                 );

//               }
//             )}

//           </Box>

//         </Container>

//       </Box>


//       <Footer />

//     </>
//   );
// };


// export default Collections;
//---------------------------------------------


// import VisitorNavbar from "../components/navbar/VisitorNavbar";
// import Footer from "../components/Footer";
// import CollectionsSection from "../components/Collections";

// const Collections = () => {
//     return (
//         <>
//             <VisitorNavbar />

//             <CollectionsSection />

//             <Footer />
//         </>
//     );
// };

// export default Collections;
//-------------------------------------------------------

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import {
//     Box,
//     Typography,
//     Container,
//     Card,
//     CardMedia,
// } from "@mui/material";

// import { getCategories } from "../features/categories/CategoriesThunk";


// // =====================================================
// // GET CATEGORY IMAGE URL
// // =====================================================

// const getCategoryImageUrl = (image) => {

//     // No image
//     if (!image) {
//         return "/no-image.png";
//     }

//     // Image is string
//     if (typeof image === "string") {

//         if (
//             image.startsWith("http://") ||
//             image.startsWith("https://")
//         ) {
//             return image;
//         }

//         return `http://localhost:3000${image}`;
//     }

//     // Image is object
//     if (
//         typeof image === "object" &&
//         image.url
//     ) {

//         if (
//             image.url.startsWith("http://") ||
//             image.url.startsWith("https://")
//         ) {
//             return image.url;
//         }

//         return `http://localhost:3000${image.url}`;
//     }

//     return "/no-image.png";
// };


// // =====================================================
// // COLLECTIONS PAGE
// // =====================================================

// const Collections = () => {

//     const dispatch = useDispatch();


//     // =================================================
//     // REDUX
//     // =================================================

//     const {
//         categories = [],
//     } = useSelector(
//         (state) => state.categories
//     );


//     // =================================================
//     // LOAD CATEGORIES
//     // =================================================

//     useEffect(() => {

//         dispatch(
//             getCategories()
//         );

//     }, [dispatch]);


//     // =================================================
//     // UI
//     // =================================================

//     return (

//         <Box
//             sx={{
//                 py: {
//                     xs: 6,
//                     md: 10,
//                 },

//                 background: "#faf8f3",

//                 minHeight: "100vh",
//             }}
//         >

//             <Container
//                 maxWidth="lg"
//             >

//                 {/* =====================================
//                     TITLE
//                 ===================================== */}

//                 <Typography
//                     textAlign="center"

//                     sx={{
//                         fontSize: {
//                             xs: "32px",
//                             md: "45px",
//                         },

//                         letterSpacing: 5,

//                         fontWeight: 500,

//                         mb: {
//                             xs: 4,
//                             md: 6,
//                         },
//                     }}
//                 >
//                     OUR COLLECTIONS
//                 </Typography>


//                 {/* =====================================
//                     COLLECTION GRID
//                 ===================================== */}

//                 <Box
//                     sx={{
//                         display: "grid",

//                         gridTemplateColumns: {
//                             xs: "1fr",
//                             sm: "repeat(2, 1fr)",
//                             md: "repeat(3, 1fr)",
//                         },

//                         gap: {
//                             xs: 2,
//                             md: 3,
//                         },
//                     }}
//                 >

//                     {
//                         categories.map(
//                             (item) => {

//                                 // IMPORTANT:
//                                 // Get image URL for THIS category
//                                 const imageUrl =
//                                     getCategoryImageUrl(
//                                         item.image
//                                     );


//                                 return (

//                                     <Card
//                                         key={
//                                             item._id
//                                         }

//                                         sx={{
//                                             borderRadius: 0,

//                                             boxShadow:
//                                                 "none",

//                                             overflow:
//                                                 "hidden",

//                                             cursor:
//                                                 "pointer",

//                                             background:
//                                                 "#fff",

//                                             "&:hover img": {
//                                                 transform:
//                                                     "scale(1.03)",
//                                             },
//                                         }}
//                                     >

//                                         {/* =================================
//                                             IMAGE
//                                         ================================= */}

//                                         <Box
//                                             sx={{
//                                                 width: "100%",

//                                                 height: {
//                                                     xs: 350,
//                                                     sm: 400,
//                                                     md: 450,
//                                                 },

//                                                 display: "flex",

//                                                 alignItems:
//                                                     "center",

//                                                 justifyContent:
//                                                     "center",

//                                                 backgroundColor:
//                                                     "#f5f5f5",

//                                                 overflow:
//                                                     "hidden",
//                                             }}
//                                         >

//                                             <CardMedia
//                                                 component="img"

//                                                 src={
//                                                     imageUrl
//                                                 }

//                                                 alt={
//                                                     item.categoryName ||
//                                                     "Collection"
//                                                 }

//                                                 onError={(
//                                                     event
//                                                 ) => {

//                                                     console.error(
//                                                         "CATEGORY IMAGE FAILED:",
//                                                         imageUrl
//                                                     );

//                                                     event.currentTarget.onerror =
//                                                         null;

//                                                     event.currentTarget.src =
//                                                         "/no-image.png";
//                                                 }}

//                                                 sx={{
//                                                     width:
//                                                         "100%",

//                                                     height:
//                                                         "100%",

//                                                     display:
//                                                         "block",

//                                                     /*
//                                                      * IMPORTANT
//                                                      *
//                                                      * contain = FULL IMAGE
//                                                      * visible.
//                                                      *
//                                                      * It will NOT cut the
//                                                      * top/bottom/sides.
//                                                      */
//                                                     objectFit:
//                                                         "contain",

//                                                     transition:
//                                                         "transform 0.5s",
//                                                 }}
//                                             />

//                                         </Box>


//                                         {/* =================================
//                                             CATEGORY NAME
//                                         ================================= */}

//                                         <Box
//                                             sx={{
//                                                 background:
//                                                     "#fff",

//                                                 px: 2,

//                                                 py: 2,
//                                             }}
//                                         >

//                                             <Typography
//                                                 textAlign="center"

//                                                 sx={{
//                                                     fontSize: {
//                                                         xs: 18,
//                                                         md: 20,
//                                                     },

//                                                     letterSpacing:
//                                                         2,

//                                                     fontWeight:
//                                                         400,
//                                                 }}
//                                             >
//                                                 {
//                                                     item.categoryName
//                                                 }
//                                             </Typography>

//                                         </Box>

//                                     </Card>

//                                 );

//                             }
//                         )
//                     }

//                 </Box>

//             </Container>

//         </Box>

//     );
// };

// export default Collections;
//--------------------------------------------
import VisitorNavbar from "../components/navbar/VisitorNavbar";
import Footer from "../components/Footer";
import CollectionsSection from "../components/Collections";

const Collections = () => {
    return (
        <>
            <VisitorNavbar />

            <CollectionsSection />

            <Footer />
        </>
    );
};

export default Collections;