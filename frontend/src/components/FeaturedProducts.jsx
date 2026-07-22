// // import {
// //   Box,
// //   Container,
// //   Typography,
// //   Grid,
// //   Card,
// //   CardMedia,
// //   CardContent
// // } from "@mui/material";

// // const products = [
// //   {
// //     name: "Silk Saree",
// //     category: "Traditional Wear",
// //     price: "₹2,499",
// //     image: "/images/saree.jpg"
// //   },
// //   {
// //     name: "Designer Dress",
// //     category: "Women Wear",
// //     price: "₹1,999",
// //     image: "/images/dresses.jpg"
// //   },
// //   {
// //     name: "Bridal Lehenga",
// //     category: "Bridal Collection",
// //     price: "₹8,999",
// //     image: "/images/bridal.jpg"
// //   },
// //   {
// //     name: "Elegant Jewellery",
// //     category: "Jewellery",
// //     price: "₹3,999",
// //     image: "/images/jewellery.jpg"
// //   },
// //   {
// //     name: "Fashion Accessories",
// //     category: "Accessories",
// //     price: "₹999",
// //     image: "/images/accessories.jpg"
// //   },
// //   {
// //     name: "Festive Collection",
// //     category: "Festive Wear",
// //     price: "₹2,999",
// //     image: "/images/festive.jpg"
// //   }
// // ];

// // const FeaturedProducts = () => {
// //   return (
// //     <Box sx={{ py: 10, background: "#FAF8F3" }}>
// //       <Container maxWidth="lg">
// //         <Typography
// //           variant="h4"
// //           textAlign="center"
// //           sx={{ mb: 6, fontWeight: 500 }}
// //         >
// //           Featured Products
// //         </Typography>

// //         <Grid container spacing={4}>
// //           {products.map((product) => (
// //             <Grid item xs={12} sm={6} md={4} key={product.name}>
// //               <Card>
// //                 <CardMedia
// //                   component="img"
// //                   height="300"
// //                   image={product.image}
// //                   alt={product.name}
// //                 />
// //                 <CardContent>
// //                   <Typography variant="h6">{product.name}</Typography>
// //                   <Typography color="text.secondary">
// //                     {product.category}
// //                   </Typography>
// //                   <Typography sx={{ mt: 1, fontWeight: 600 }}>
// //                     {product.price}
// //                   </Typography>
// //                 </CardContent>
// //               </Card>
// //             </Grid>
// //           ))}
// //         </Grid>
// //       </Container>
// //     </Box>
// //   );
// // };

// // export default FeaturedProducts;
// import {
//   Box,
//   Typography,
//   Container,
//   Card,
//   CardMedia,
//   CardContent,
//   Button,
// } from "@mui/material";

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import {
//   getFeaturedProducts
// } from "../../features/products/ProductsThunk";


// const FeaturedProducts = () => {


//   const dispatch = useDispatch();


//   const { featuredProducts } = useSelector(
//     (state) => state.products
//   );



//   useEffect(() => {

//     dispatch(
//       getFeaturedProducts()
//     );

//   }, [dispatch]);





//   return (

//     <Box
//       sx={{
//         py:10,
//         background:"#fff"
//       }}
//     >


//       <Container maxWidth="lg">


//         <Typography
//           textAlign="center"
//           sx={{
//             fontSize:{
//               xs:"32px",
//               md:"45px"
//             },
//             letterSpacing:5,
//             fontWeight:500,
//             mb:6
//           }}
//         >
//           FEATURED PRODUCTS
//         </Typography>





//         <Box

//           sx={{

//             display:"grid",

//             gridTemplateColumns:{

//               xs:"1fr",

//               sm:"repeat(2,1fr)",

//               md:"repeat(3,1fr)"

//             },

//             gap:4

//           }}

//         >



//         {
//           featuredProducts.map((product)=>(



//             <Card

//               key={product._id}

//               sx={{

//                 borderRadius:0,

//                 boxShadow:"none"

//               }}

//             >



//               <CardMedia

//                 component="img"

//                 image={product.image}

//                 alt={product.productName}

//                 sx={{

//                   height:350,

//                   objectFit:"cover"

//                 }}

//               />





//               <CardContent>



//                 <Typography

//                   sx={{

//                     fontSize:"20px",

//                     fontWeight:500

//                   }}

//                 >

//                   {product.productName}

//                 </Typography>





//                 <Typography

//                   sx={{

//                     mt:1,

//                     color:"#B08D57"

//                   }}

//                 >

//                   ₹ {product.sellingPrice}

//                 </Typography>





//                 <Button

//                   variant="outlined"

//                   sx={{

//                     mt:2,

//                     borderColor:"#B08D57",

//                     color:"#B08D57",

//                     borderRadius:"25px"

//                   }}

//                 >

//                   View Details

//                 </Button>



//               </CardContent>



//             </Card>



//           ))

//         }



//         </Box>



//       </Container>



//     </Box>

//   );

// };



// export default FeaturedProducts;

//----------------------------------------------

// import {
//   Box,
//   Typography,
//   Container,
//   Card,
//   CardMedia,
//   CardContent,
//   Button,
// } from "@mui/material";

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import {
//   getFeaturedProducts
// } from "../features/products/ProductsThunk";


// const FeaturedProducts = () => {


//   const dispatch = useDispatch();


//   const { featuredProducts } = useSelector(
//     (state) => state.products
//   );



//   useEffect(() => {

//     dispatch(
//       getFeaturedProducts()
//     );

//   }, [dispatch]);





//   return (

//     <Box
//       sx={{
//         py: 10,
//         background: "#fff"
//       }}
//     >


//       <Container maxWidth="lg">


//         <Typography
//           textAlign="center"
//           sx={{
//             fontSize: {
//               xs: "32px",
//               md: "45px"
//             },
//             letterSpacing: 5,
//             fontWeight: 500,
//             mb: 6
//           }}
//         >
//           FEATURED PRODUCTS
//         </Typography>





//         <Box

//           sx={{

//             display: "grid",

//             gridTemplateColumns: {

//               xs: "1fr",

//               sm: "repeat(2,1fr)",

//               md: "repeat(3,1fr)"

//             },

//             gap: 4

//           }}

//         >



//           {
//             featuredProducts.map((product) => (



//               <Card

//                 key={product._id}

//                 sx={{

//                   borderRadius: 0,

//                   boxShadow: "none"

//                 }}

//               >



//                 <CardMedia

//                   component="img"

//                   image={product.image}

//                   alt={product.productName}

//                   sx={{

//                     height: 350,

//                     objectFit: "cover"

//                   }}

//                 />





//                 <CardContent>



//                   <Typography

//                     sx={{

//                       fontSize: "20px",

//                       fontWeight: 500

//                     }}

//                   >

//                     {product.productName}

//                   </Typography>





//                   <Typography

//                     sx={{

//                       mt: 1,

//                       color: "#B08D57"

//                     }}

//                   >

//                     ₹ {product.sellingPrice}

//                   </Typography>




//                   <Button
//                     variant="outlined"
//                     onClick={() => {
//                       console.log("Button Clicked");
//                       console.log(product);
//                       console.log(product._id);

//                       navigate(`/product/${product._id}`);
//                     }}
//                     sx={{
//                       mt: 2,
//                       borderColor: "#B08D57",
//                       color: "#B08D57",
//                       borderRadius: "25px",
//                     }}
//                   >
//                     View Details
//                   </Button>



//                 </CardContent>



//               </Card>



//             ))

//           }



//         </Box>



//       </Container>



//     </Box>

//   );

// };



// export default FeaturedProducts;
//------------------------------------------------
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

import {
    getFeaturedProducts
} from "../features/products/ProductsThunk";

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
                        featuredProducts.map(
                            (product) => (


                                <Card

                                    key={product._id}

                                    sx={{
                                        borderRadius: 0,
                                        boxShadow: "none"
                                    }}

                                >



                                    <CardMedia

                                        component="img"

                                        image={product.image}

                                        alt={product.productName}

                                        sx={{
                                            height: 350,
                                            objectFit: "cover"
                                        }}

                                    />




                                    <CardContent>


                                        <Typography

                                            sx={{
                                                fontSize: "20px",
                                                fontWeight: 500
                                            }}

                                        >

                                            {product.productName}

                                        </Typography>




                                        <Typography

                                            sx={{
                                                mt: 1,
                                                color: "#B08D57"
                                            }}

                                        >

                                            ₹ {product.sellingPrice}

                                        </Typography>





                                        <Button
                                            variant="outlined"
                                            onClick={() => {
                                                navigate(`/product/${product._id}`);
                                            }}
                                            sx={{
                                                mt: 2,
                                                borderColor: "#B08D57",
                                                color: "#B08D57",
                                                borderRadius: "25px",
                                            }}
                                        >
                                            View Details
                                        </Button>

                                    </CardContent>



                                </Card>


                            )

                        )
                    }



                </Box>



            </Container>



        </Box>

    );

};



export default FeaturedProducts;