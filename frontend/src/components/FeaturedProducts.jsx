
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

import {
    Box,
    Typography,
    Container,
    Card,
    CardMedia,
    CardContent,
    Button,
} from "@mui/material";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFeaturedProducts } from "../features/products/ProductsThunk";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        featuredProducts
    } = useSelector(
        (state) => state.products
    );
    console.log("Featured Products:", featuredProducts);
    useEffect(() => {
        dispatch(
            getFeaturedProducts()
        );

    }, [dispatch]);
    return (

        <Box
            sx={{
                py: 10,
                background: "#fff"
            }}
        >


            <Container maxWidth="lg">
                <Typography
                    textAlign="center"
                    sx={{
                        fontSize: {
                            xs: "32px",
                            md: "45px"
                        },
                        letterSpacing: 5,
                        fontWeight: 500,
                        mb: 6
                    }}
                >
                    FEATURED PRODUCTS
                </Typography>
                <Box
                    sx={{
                        display: "grid",

                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2,1fr)",
                            md: "repeat(3,1fr)"
                        },

                        gap: 4
                    }}
                >
                    {
                        featuredProducts.map((product) => {

                            console.log("Product:", product);
                            console.log("Images:", product.images);
                            console.log("First Image:", product.images?.[0]);

                            return (
                                // <Card
                                //     key={product._id}
                                //     sx={{
                                //         borderRadius: 0,
                                //         boxShadow: "none"
                                //     }}
                                // >

                                <Card
                                    key={product._id}
                                    onClick={() => {
                                        console.log("Navigating to:", `/product/${product._id}`);
                                        navigate(`/product/${product._id}`);
                                    }}
                                    sx={{
                                        borderRadius: 0,
                                        boxShadow: "none",
                                        cursor: "pointer"
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={
                                            product.images?.[0]?.url ||
                                            "/default-product.jpg"
                                        }
                                        alt={product.productName}
                                        sx={{
                                            height: 350,
                                            objectFit: "cover"
                                        }}
                                    />

                                    {/* Rest of your code */}

                                </Card>
                            );
                        })
                    }
                </Box>
            </Container>
        </Box>
    );
};
export default FeaturedProducts;