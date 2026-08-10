import {
    Box,
    Typography,
    Container,
    Card,
    CardMedia,
} from "@mui/material";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getFeaturedProducts } from "../../features/products/ProductsThunk";


const Dashboard = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const {
        featuredProducts = [],
        loading
    } = useSelector(
        (state) => state.products
    );



    useEffect(() => {

        dispatch(getFeaturedProducts());

    }, [dispatch]);



    return (

        <Box
            sx={{
                background:"#FAF8F3",
                minHeight:"100vh",
                pt:12,
                pb:8
            }}
        >

            <Container maxWidth="lg">


                <Typography
                    textAlign="center"
                    sx={{
                        fontSize:{
                            xs:"30px",
                            md:"42px"
                        },
                        letterSpacing:4,
                        mb:6,
                        fontWeight:500
                    }}
                >
                    SHOP COLLECTION
                </Typography>



                {
                    loading && (

                        <Typography
                            textAlign="center"
                        >
                            Loading products...
                        </Typography>

                    )
                }



                <Box
                    sx={{
                        display:"grid",
                        gridTemplateColumns:{
                            xs:"1fr",
                            sm:"repeat(2,1fr)",
                            md:"repeat(4,1fr)"
                        },
                        gap:4
                    }}
                >


                    {
                        featuredProducts.map((product)=>(


                            <Card

                                key={product._id}

                                onClick={() =>
                                    navigate(
                                        `/boutique/product/${product._id}`
                                    )
                                }

                                sx={{

                                    borderRadius:0,

                                    boxShadow:"none",

                                    background:"#fff",

                                    cursor:"pointer",

                                    transition:"0.3s",

                                    "&:hover":{
                                        transform:"translateY(-5px)"
                                    }

                                }}

                            >



                                {/* <CardMedia

                                    component="img"

                                    image={
                                        product.image ||
                                        "/placeholder.jpg"
                                    }

                                    alt={
                                        product.productName
                                    }


                                    sx={{

                                        height:320,

                                        objectFit:"cover"

                                    }}

                                /> */}


                                <CardMedia
    component="img"
    image={
        product.images?.[0]?.url ||
        "/placeholder.jpg"
    }
    alt={product.productName}
    onError={(e) => {
        e.currentTarget.src = "/placeholder.jpg";
    }}
    sx={{
        width: "100%",
        height: 320,
        objectFit: "cover",
        display: "block",
    }}
/>




                                <Box
                                    sx={{
                                        p:2
                                    }}
                                >


                                    <Typography
                                        fontWeight={600}
                                    >

                                        {
                                            product.productName
                                        }

                                    </Typography>



                                    <Typography
                                        color="text.secondary"
                                        mt={1}
                                    >

                                        ₹ {product.sellingPrice}

                                    </Typography>



                                </Box>



                            </Card>


                        ))

                    }


                </Box>



            </Container>


        </Box>

    );

};


export default Dashboard;