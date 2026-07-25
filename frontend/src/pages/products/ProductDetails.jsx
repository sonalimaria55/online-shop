

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
    getProductById
} from "../../features/products/ProductsThunk";


import {
    addToCart,
    getCart
} from "../../features/cart/CartThunk";


import { useEffect, useState } from "react";
import {

    ToggleButton,
    ToggleButtonGroup,
    IconButton,
    Box,
    Typography,
    CircularProgress,
    Button
} from "@mui/material";

import {
    useDispatch,
    useSelector
} from "react-redux";

import {
    useParams
} from "react-router-dom";




//console.log("Image URL:", selectedProduct?.images?.[0]?.url);

const ProductDetails = () => {
    console.log("Products ProductDetails Loaded");


    const { id } = useParams();

    console.log("Route ID:", id);
    const dispatch = useDispatch();



    const {
        selectedProduct,
        loading,
        error
    } = useSelector(
        state => state.products
    );

    // console.log("Selected Product:", selectedProduct);
    // console.log("Images:", selectedProduct?.images);
    // console.log("Image URL:", selectedProduct?.images?.[0]?.url);

    const [selectedSize, setSelectedSize] = useState("");
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {

        console.log("Dispatching getProductById:", id);
        if (id) {

            dispatch(
                getProductById(id)
            );

        }

    }, [dispatch, id]);
// const handleAddToCart = () => {

//     if (!selectedSize) {
//         alert("Please select a size");
//         return;
//     }

//     const cartItem = {
//         product: selectedProduct._id,
//         size: selectedSize,
//         quantity,
//     };

//     console.log(cartItem);

//     // Next step
//     // dispatch(addToCart(cartItem));
// };

const handleAddToCart = async () => {

    if (!selectedSize) {
        alert("Please select a size");
        return;
    }

    const cartItem = {
        product: selectedProduct._id,
        size: selectedSize,
        quantity,
    };

    console.log("Sending:", cartItem);

    await dispatch(addToCart(cartItem));

    dispatch(getCart());

    alert("Added to cart");
};


    if (loading) {

        return <CircularProgress />;

    }



    if (error) {

        return (
            <Typography>
                {error}
            </Typography>
        );

    }



    if (!selectedProduct) {

        return (
            <Typography>
                Product not found
            </Typography>
        );

    }


    return (
        <Box
            sx={{
                py: 8,
                px: { xs: 2, md: 6 },
            }}
        >
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "1fr 1fr",
                    },
                    gap: 5,
                }}
            >
                {/* Product Image */}
                <Box>
                    {/* Product Image */}


                    {/* <Box
                        component="img"
                        src={selectedProduct.images?.[0]?.url}
                        alt={selectedProduct.productName}
                        sx={{
                            width: "100%",
                            maxWidth: 500,
                            height: "auto",
                            display: "block",
                        }}
                    /> */}


                    <Box
                        component="img"
                        src={selectedProduct.images?.[0]?.url}
                        alt={selectedProduct.productName}
                        sx={{
                            width: "100%",
                            maxWidth: 500,
                            height: "auto",
                            display: "block",
                            borderRadius: 1,
                            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                        }}
                    />


                </Box>

                {/* Product Info */}
                <Box>
                    <Typography variant="h3">
                        {selectedProduct.productName}
                    </Typography>

                    <Typography mt={2}>
                        {selectedProduct.description}
                    </Typography>

                    <Typography
                        mt={3}
                        sx={{
                            fontSize: 28,
                            fontWeight: 600,
                            color: "#C9A227",
                        }}
                    >
                        ₹ {selectedProduct.sellingPrice}
                    </Typography>


                    <Typography
                        sx={{
                            mt: 4,
                            mb: 1,
                            fontWeight: 600,
                        }}
                    >
                        Size
                    </Typography>

                    <ToggleButtonGroup
                        value={selectedSize}
                        exclusive
                        onChange={(e, value) => {
                            if (value) setSelectedSize(value);
                        }}
                    >
                        {["XS", "S", "M", "L", "XL"].map((size) => (
                            <ToggleButton
                                key={size}
                                value={size}
                            >
                                {size}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>

                    <Typography
                        sx={{
                            mt: 4,
                            mb: 1,
                            fontWeight: 600,
                        }}
                    >
                        Quantity
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                        }}
                    >
                        <IconButton
                            onClick={() =>
                                setQuantity((prev) => Math.max(1, prev - 1))
                            }
                        >
                            <RemoveIcon />
                        </IconButton>

                        <Typography>{quantity}</Typography>

                        <IconButton
                            onClick={() =>
                                setQuantity((prev) => prev + 1)
                            }
                        >
                            <AddIcon />
                        </IconButton>
                    </Box>
                    {/* 
                    <Button
                        variant="contained"
                        sx={{
                            mt: 4,
                            background: "#C9A227",

                            product: selectedProduct._id,
                            size: selectedSize,
                            quantity: quantity

                        }}
                    >
                        Add To Cart
                    </Button> */}

                    <Button
                        variant="contained"
                        onClick={handleAddToCart}
                        sx={{
                            mt: 4,
                            background: "#C9A227",
                            color: "#fff",
                            px: 5,
                            py: 1.5,
                            borderRadius: 0,
                            "&:hover": {
                                background: "#B08D57",
                            },
                        }}
                    >
                        Add To Cart
                    </Button>
                </Box>
            </Box>
        </Box>
    );


};


export default ProductDetails;