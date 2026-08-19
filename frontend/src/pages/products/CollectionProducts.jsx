import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Button,
} from "@mui/material";

import VisitorNavbar from "../../components/navbar/VisitorNavbar";
import Footer from "../../components/Footer";
import { getProducts } from "../../features/products/ProductsThunk";

const CollectionProducts = () => {

    const { categoryId } = useParams();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {
        products = [],
        loading,
    } = useSelector(
        (state) => state.products
    );

    const {
        categories = [],
    } = useSelector(
        (state) => state.categories
    );


    // ============================================
    // LOAD PRODUCTS
    // ============================================

    useEffect(() => {

        dispatch(getProducts());

    }, [dispatch]);


    // ============================================
    // FIND CATEGORY
    // ============================================

    const category = categories.find(
        (item) => item._id === categoryId
    );


    // ============================================
    // FILTER PRODUCTS
    // ============================================

    const categoryProducts = products.filter(
        (product) => {

            const productCategory =
                product.category;

            if (!productCategory) {
                return false;
            }

            const productCategoryId =
                typeof productCategory === "object"
                    ? productCategory._id
                    : productCategory;

            return (
                productCategoryId === categoryId
            );
        }
    );


    // ============================================
    // IMAGE
    // ============================================

    const getImageUrl = (image) => {

        if (!image) {
            return "/no-image.png";
        }

        if (typeof image === "string") {

            if (
                image.startsWith("http://") ||
                image.startsWith("https://")
            ) {
                return image;
            }

            return `http://localhost:3000${image}`;
        }

        if (
            typeof image === "object" &&
            image.url
        ) {

            return image.url;
        }

        return "/no-image.png";
    };


    // ============================================
    // LOADING
    // ============================================

    if (loading) {

        return (
            <>
                <VisitorNavbar />

                <Box
                    sx={{
                        minHeight: "70vh",
                        pt: 15,
                        textAlign: "center",
                    }}
                >
                    <Typography>
                        Loading products...
                    </Typography>
                </Box>

                <Footer />
            </>
        );
    }


    // ============================================
    // UI
    // ============================================

    return (
        <>
            <VisitorNavbar />

            <Box
                sx={{
                    background: "#FAF8F3",
                    minHeight: "100vh",
                    pt: 15,
                    pb: 10,
                }}
            >

                <Container maxWidth="lg">

                    {/* HEADER */}

                    <Typography
                        textAlign="center"
                        sx={{
                            fontSize: {
                                xs: 32,
                                md: 45,
                            },
                            letterSpacing: 5,
                            fontWeight: 500,
                            mb: 2,
                        }}
                    >
                        {category?.categoryName ||
                            "COLLECTION"}
                    </Typography>


                    <Typography
                        textAlign="center"
                        sx={{
                            color: "#777",
                            mb: 6,
                        }}
                    >
                        Explore our collection
                    </Typography>


                    {/* PRODUCTS */}

                    {categoryProducts.length === 0 ? (

                        <Box
                            sx={{
                                textAlign: "center",
                                py: 10,
                            }}
                        >
                            <Typography>
                                No products found in
                                this collection.
                            </Typography>
                        </Box>

                    ) : (

                        <Grid
                            container
                            spacing={3}
                        >

                            {categoryProducts.map(
                                (product) => {

                                    const image =
                                        product.images?.[0];

                                    return (

                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={4}
                                            key={
                                                product._id
                                            }
                                        >

                                            <Card
                                                onClick={() =>
                                                    navigate(
                                                        `/product/${product._id}`
                                                    )
                                                }
                                                sx={{
                                                    borderRadius: 0,
                                                    boxShadow:
                                                        "none",
                                                    cursor:
                                                        "pointer",

                                                    "&:hover img": {
                                                        transform:
                                                            "scale(1.03)",
                                                    },
                                                }}
                                            >

                                                <Box
                                                    sx={{
                                                        aspectRatio:
                                                            "4 / 5",
                                                        overflow:
                                                            "hidden",
                                                        background:
                                                            "#f5f5f5",
                                                    }}
                                                >

                                                    <CardMedia
                                                        component="img"
                                                        src={getImageUrl(
                                                            image
                                                        )}
                                                        alt={
                                                            product.productName
                                                        }
                                                        sx={{
                                                            width:
                                                                "100%",
                                                            height:
                                                                "100%",
                                                            objectFit:
                                                                "contain",
                                                            transition:
                                                                "0.4s",
                                                        }}
                                                    />

                                                </Box>


                                                <CardContent>

                                                    <Typography
                                                        sx={{
                                                            fontSize: 17,
                                                            letterSpacing:
                                                                1,
                                                        }}
                                                    >
                                                        {
                                                            product.productName
                                                        }
                                                    </Typography>


                                                    <Typography
                                                        sx={{
                                                            mt: 1,
                                                            color:
                                                                "#B08D57",
                                                            fontWeight:
                                                                500,
                                                        }}
                                                    >
                                                        ₹{" "}
                                                        {
                                                            product.sellingPrice
                                                        }
                                                    </Typography>

                                                </CardContent>

                                            </Card>

                                        </Grid>

                                    );

                                }
                            )}

                        </Grid>

                    )}

                </Container>

            </Box>

            <Footer />
        </>
    );
};

export default CollectionProducts;