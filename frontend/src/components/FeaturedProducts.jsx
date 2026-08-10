
// import {
//     Box,
//     Typography,
//     Container,
//     Card,
//     CardMedia,
//     CardContent,
//     Button,
// } from "@mui/material";

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import {
//     getFeaturedProducts
// } from "../features/products/ProductsThunk";

// import { useNavigate } from "react-router-dom";

// const FeaturedProducts = () => {


//     const dispatch = useDispatch();


//     const navigate = useNavigate();

//     const {
//         featuredProducts
//     } = useSelector(
//         (state) => state.products
//     );
//     console.log("Featured Products:", featuredProducts);


//     useEffect(() => {

//         dispatch(
//             getFeaturedProducts()
//         );

//     }, [dispatch]);



//     return (

//         <Box
//             sx={{
//                 py: 10,
//                 background: "#fff"
//             }}
//         >


//             <Container maxWidth="lg">


//                 <Typography
//                     textAlign="center"
//                     sx={{
//                         fontSize: {
//                             xs: "32px",
//                             md: "45px"
//                         },
//                         letterSpacing: 5,
//                         fontWeight: 500,
//                         mb: 6
//                     }}
//                 >
//                     FEATURED PRODUCTS
//                 </Typography>




//                 <Box
//                     sx={{
//                         display: "grid",

//                         gridTemplateColumns: {
//                             xs: "1fr",
//                             sm: "repeat(2,1fr)",
//                             md: "repeat(3,1fr)"
//                         },

//                         gap: 4
//                     }}
//                 >



//                     {
//                         featuredProducts.map(
//                             (product) => (


//                                 <Card

//                                     key={product._id}

//                                     sx={{
//                                         borderRadius: 0,
//                                         boxShadow: "none"
//                                     }}

//                                 >



//                                     <CardMedia

//                                         component="img"

//                                         image={
//                                             product.images?.[0]?.url ||
//                                             "/default-product.jpg"
//                                         }

//                                         alt={product.productName}

//                                         sx={{
//                                             height: 350,
//                                             objectFit: "cover"
//                                         }}

//                                     />




//                                     <CardContent>


//                                         <Typography

//                                             sx={{
//                                                 fontSize: "20px",
//                                                 fontWeight: 500
//                                             }}

//                                         >

//                                             {product.productName}

//                                         </Typography>




//                                         <Typography

//                                             sx={{
//                                                 mt: 1,
//                                                 color: "#B08D57"
//                                             }}

//                                         >

//                                             ₹ {product.sellingPrice}

//                                         </Typography>





//                                         <Button
//                                             variant="outlined"
//                                             onClick={() => {
//                                                 navigate(`/product/${product._id}`);
//                                             }}
//                                             sx={{
//                                                 mt: 2,
//                                                 borderColor: "#B08D57",
//                                                 color: "#B08D57",
//                                                 borderRadius: "25px",
//                                             }}
//                                         >
//                                             View Details
//                                         </Button>

//                                     </CardContent>



//                                 </Card>


//                             )

//                         )
//                     }



//                 </Box>



//             </Container>



//         </Box>

//     );

// };



// export default FeaturedProducts;

///-------------------------------------------------------------------

// import {
//     Box,
//     Typography,
//     Container,
//     Card,
//     CardMedia,
//     CardContent,
//     Button,
// } from "@mui/material";

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { getFeaturedProducts } from "../features/products/ProductsThunk";
// import { useNavigate } from "react-router-dom";

// const FeaturedProducts = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const {
//         featuredProducts
//     } = useSelector(
//         (state) => state.products
//     );
//     console.log("Featured Products:", featuredProducts);
//     useEffect(() => {
//         dispatch(
//             getFeaturedProducts()
//         );

//     }, [dispatch]);
//     return (

//         <Box
//             sx={{
//                 py: 10,
//                 background: "#fff"
//             }}
//         >


//             <Container maxWidth="lg">
//                 <Typography
//                     textAlign="center"
//                     sx={{
//                         fontSize: {
//                             xs: "32px",
//                             md: "45px"
//                         },
//                         letterSpacing: 5,
//                         fontWeight: 500,
//                         mb: 6
//                     }}
//                 >
//                     FEATURED PRODUCTS
//                 </Typography>
//                 <Box
//                     sx={{
//                         display: "grid",

//                         gridTemplateColumns: {
//                             xs: "1fr",
//                             sm: "repeat(2,1fr)",
//                             md: "repeat(3,1fr)"
//                         },

//                         gap: 4
//                     }}
//                 >
//                     {
//                         featuredProducts.map((product) => {

//                             console.log("Product:", product);
//                             console.log("Images:", product.images);
//                             console.log("First Image:", product.images?.[0]);

//                             return (
//                                 // <Card
//                                 //     key={product._id}
//                                 //     sx={{
//                                 //         borderRadius: 0,
//                                 //         boxShadow: "none"
//                                 //     }}
//                                 // >

//                                 <Card
//                                     key={product._id}
//                                     onClick={() => {
//                                         // console.log("Navigating to:", `/product/${product._id}`);
//                                         // navigate(`/product/${product._id}`);

//                                         navigate(`/boutique/product/${product._id}`);
//                                     }}
//                                     sx={{
//                                         borderRadius: 0,
//                                         boxShadow: "none",
//                                         cursor: "pointer"
//                                     }}
//                                 >
//                                     <CardMedia
//                                         component="img"
//                                         image={
//                                             product.images?.[0]?.url ||
//                                             "/default-product.jpg"
//                                         }
//                                         alt={product.productName}
//                                         sx={{
//                                             height: 350,
//                                             objectFit: "cover"
//                                         }}
//                                     />

//                                     {/* Rest of your code */}

//                                 </Card>
//                             );
//                         })
//                     }
//                 </Box>
//             </Container>
//         </Box>
//     );
// };
// export default FeaturedProducts;
//-----------------------------------

// import {
//     Box,
//     Typography,
//     Container,
//     Card,
//     CardMedia,
//     CardContent,
// } from "@mui/material";

// import { useEffect } from "react";

// import {
//     useDispatch,
//     useSelector,
// } from "react-redux";

// import {
//     getFeaturedProducts,
// } from "../features/products/ProductsThunk";

// import {
//     useNavigate,
// } from "react-router-dom";


// // =====================================================
// // IMAGE URL HELPER
// // =====================================================

// const getImageUrl = (image) => {

//     if (!image) {
//         return "/default-product.jpg";
//     }

//     // If backend already gives complete URL
//     if (
//         typeof image === "string" &&
//         (
//             image.startsWith("http://") ||
//             image.startsWith("https://")
//         )
//     ) {
//         return image;
//     }

//     // If image is an object
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

//     // If image itself is a relative path
//     if (
//         typeof image === "string"
//     ) {

//         return `http://localhost:3000${image}`;
//     }

//     return "/default-product.jpg";
// };


// // =====================================================
// // COMPONENT
// // =====================================================

// const FeaturedProducts = () => {

//     const dispatch = useDispatch();

//     const navigate = useNavigate();

//     const {
//         featuredProducts = [],
//     } = useSelector(
//         (state) => state.products
//     );


//     // =================================================
//     // GET FEATURED PRODUCTS
//     // =================================================

//     useEffect(() => {

//         dispatch(
//             getFeaturedProducts()
//         );

//     }, [dispatch]);


//     // =================================================
//     // DEBUG
//     // =================================================

//     console.log(
//         "FEATURED PRODUCTS:",
//         featuredProducts
//     );


//     // =================================================
//     // UI
//     // =================================================

//     return (

//         <Box
//             sx={{
//                 py: 10,
//                 background: "#fff",
//             }}
//         >

//             <Container maxWidth="lg">

//                 {/* ===================================== */}
//                 {/* TITLE */}
//                 {/* ===================================== */}

//                 <Typography
//                     textAlign="center"
//                     sx={{
//                         fontSize: {
//                             xs: "32px",
//                             md: "45px",
//                         },

//                         letterSpacing: 5,

//                         fontWeight: 500,

//                         mb: 6,
//                     }}
//                 >
//                     FEATURED PRODUCTS
//                 </Typography>


//                 {/* ===================================== */}
//                 {/* PRODUCTS */}
//                 {/* ===================================== */}

//                 <Box
//                     sx={{
//                         display: "grid",

//                         gridTemplateColumns: {
//                             xs: "1fr",
//                             sm: "repeat(2, 1fr)",
//                             md: "repeat(3, 1fr)",
//                         },

//                         gap: 4,
//                     }}
//                 >

//                     {featuredProducts.map(
//                         (product) => {

//                             const imageUrl =
//                                 getImageUrl(
//                                     product.images?.[0]
//                                 );


//                             console.log(
//                                 "PRODUCT:",
//                                 product.productName
//                             );

//                             console.log(
//                                 "IMAGE OBJECT:",
//                                 product.images?.[0]
//                             );

//                             console.log(
//                                 "FINAL IMAGE URL:",
//                                 imageUrl
//                             );


//                             return (

//                                 <Card
//                                     key={
//                                         product._id
//                                     }

//                                     onClick={() =>
//                                         navigate(
//                                             `/boutique/product/${product._id}`
//                                         )
//                                     }

//                                     sx={{
//                                         borderRadius: 0,

//                                         boxShadow: "none",

//                                         cursor: "pointer",

//                                         background: "#fff",

//                                         transition:
//                                             "transform 0.2s ease",

//                                         "&:hover": {
//                                             transform:
//                                                 "translateY(-4px)",
//                                         },
//                                     }}
//                                 >

//                                     {/* ================================= */}
//                                     {/* IMAGE */}
//                                     {/* ================================= */}

//                                     <CardMedia
//                                         component="img"

//                                         src={imageUrl}

//                                         alt={
//                                             product.productName
//                                         }

//                                         onError={(event) => {

//                                             console.error(
//                                                 "IMAGE FAILED:",
//                                                 imageUrl
//                                             );

//                                             event.currentTarget.onerror =
//                                                 null;

//                                             event.currentTarget.src =
//                                                 "/default-product.jpg";
//                                         }}

//                                         sx={{
//                                             width: "100%",

//                                             height: 350,

//                                             objectFit:
//                                                 "cover",

//                                             display:
//                                                 "block",

//                                             backgroundColor:
//                                                 "#f5f5f5",
//                                         }}
//                                     />


//                                     {/* ================================= */}
//                                     {/* PRODUCT INFO */}
//                                     {/* ================================= */}

//                                     <CardContent
//                                         sx={{
//                                             px: 2,

//                                             py: 2,
//                                         }}
//                                     >

//                                         <Typography
//                                             sx={{
//                                                 fontSize: 16,

//                                                 fontWeight: 500,
//                                             }}
//                                         >
//                                             {
//                                                 product.productName
//                                             }
//                                         </Typography>


//                                         <Typography
//                                             sx={{
//                                                 mt: 0.5,

//                                                 fontSize: 15,
//                                             }}
//                                         >
//                                             ₹{" "}
//                                             {
//                                                 product.sellingPrice
//                                             }
//                                         </Typography>

//                                     </CardContent>

//                                 </Card>

//                             );

//                         }
//                     )}

//                 </Box>

//             </Container>

//         </Box>

//     );

// };

// export default FeaturedProducts;
//--------------------------------------------------
import { useEffect } from "react";

import {
    Box,
    Typography,
    Container,
    Card,
} from "@mui/material";

import {
    useDispatch,
    useSelector,
} from "react-redux";

import { useNavigate } from "react-router-dom";

import {
    getFeaturedProducts,
} from "../features/products/ProductsThunk";


const FeaturedProducts = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();


    // ============================================
    // FEATURED PRODUCTS STATE
    // ============================================

    const {
        featuredProducts = [],
    } = useSelector(
        (state) => state.products
    );


    // ============================================
    // GET FEATURED PRODUCTS
    // ============================================

    useEffect(() => {

        dispatch(
            getFeaturedProducts()
        );

    }, [dispatch]);


    // ============================================
    // OPEN PRODUCT DETAILS
    // ============================================

    const handleProductClick = (productId) => {

        if (!productId) {
            return;
        }

        navigate(
            `/product/${productId}`
        );

    };


    // ============================================
    // RENDER
    // ============================================

    return (

        <Box
            sx={{
                py: 10,
                background: "#fff",
            }}
        >

            <Container maxWidth="lg">

                {/* ===================================== */}
                {/* TITLE */}
                {/* ===================================== */}

                <Typography
                    textAlign="center"
                    sx={{
                        fontSize: {
                            xs: "32px",
                            md: "45px",
                        },

                        letterSpacing: 5,

                        fontWeight: 500,

                        mb: 6,
                    }}
                >
                    FEATURED PRODUCTS
                </Typography>


                {/* ===================================== */}
                {/* PRODUCTS GRID */}
                {/* ===================================== */}

                <Box
                    sx={{
                        display: "grid",

                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                        },

                        gap: 4,
                    }}
                >

                    {featuredProducts.map(
                        (product) => {

                            // =====================================
                            // PRODUCT IMAGE
                            // =====================================

                            const imageUrl =
                                product.images?.[0]?.url;


                            console.log(
                                "PRODUCT:",
                                product.productName
                            );

                            console.log(
                                "IMAGE URL:",
                                imageUrl
                            );


                            // =====================================
                            // PRODUCT CARD
                            // =====================================

                            return (

                                <Card
                                    key={product._id}

                                    onClick={() =>
                                        handleProductClick(
                                            product._id
                                        )
                                    }

                                    sx={{
                                        borderRadius: 0,

                                        boxShadow: "none",

                                        cursor: "pointer",

                                        overflow: "hidden",

                                        backgroundColor:
                                            "#f5f5f5",

                                        "&:hover img": {
                                            transform:
                                                "scale(1.03)",
                                        },
                                    }}
                                >

                                    {/* ================================= */}
                                    {/* PRODUCT IMAGE */}
                                    {/* ================================= */}

                                    <Box
                                        component="img"

                                        src={
                                            imageUrl ||
                                            "/no-image.png"
                                        }

                                        alt={
                                            product.productName ||
                                            "Product"
                                        }

                                        onError={(event) => {

                                            console.error(
                                                "IMAGE ERROR:",
                                                imageUrl
                                            );

                                            event.currentTarget.src =
                                                "/no-image.png";

                                        }}

                                        sx={{
                                            width: "100%",

                                            height: {
                                                xs: 400,
                                                sm: 400,
                                                md: 450,
                                            },

                                            objectFit:
                                                "contain",

                                            display:
                                                "block",

                                            transition:
                                                "transform 0.4s",

                                            backgroundColor:
                                                "#f5f5f5",
                                        }}
                                    />


                                    {/* ================================= */}
                                    {/* PRODUCT INFORMATION */}
                                    {/* ================================= */}

                                    <Box
                                        sx={{
                                            p: 2,

                                            backgroundColor:
                                                "#fff",
                                        }}
                                    >

                                        {/* PRODUCT NAME */}

                                        <Typography
                                            sx={{
                                                fontSize: 17,

                                                fontWeight: 500,

                                                mb: 1,
                                            }}
                                        >
                                            {
                                                product.productName
                                            }
                                        </Typography>


                                        {/* PRODUCT PRICE */}

                                        <Typography
                                            sx={{
                                                fontSize: 16,

                                                fontWeight: 600,

                                                color:
                                                    "#C9A227",
                                            }}
                                        >
                                            ₹{" "}
                                            {
                                                product.sellingPrice
                                            }
                                        </Typography>

                                    </Box>

                                </Card>

                            );

                        }
                    )}

                </Box>

            </Container>

        </Box>

    );
};


export default FeaturedProducts;