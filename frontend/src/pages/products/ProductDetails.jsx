
//--------------------------------------

// import { useEffect, useState } from "react";

// import RemoveIcon from "@mui/icons-material/Remove";
// import AddIcon from "@mui/icons-material/Add";

// import {
//     Box,
//     Typography,
//     CircularProgress,
//     Button,
//     ToggleButton,
//     ToggleButtonGroup,
//     IconButton,
// } from "@mui/material";

// import {
//     useDispatch,
//     useSelector,
// } from "react-redux";

// import {
//     useParams,
// } from "react-router-dom";

// import {
//     getProductById,
// } from "../../features/products/ProductsThunk";

// import {
//     addToCart,
//     getCart,
// } from "../../features/cart/CartThunk";

// import VisitorNavbar from "../../components/navbar/VisitorNavbar";
// import CustomerNavbar from "../../components/navbar/CustomerNavbar";
// import CartDrawer from "../../components/cart/CartDrawer";


// const ProductDetails = () => {

//     // ============================================
//     // URL
//     // ============================================

//     const { id } = useParams();


//     // ============================================
//     // REDUX
//     // ============================================

//     const dispatch = useDispatch();


//     // ============================================
//     // AUTH
//     // ============================================

//     const token = localStorage.getItem("token");


//     // ============================================
//     // NAVBAR
//     // ============================================

//     const Navbar = token
//         ? CustomerNavbar
//         : VisitorNavbar;


//     // ============================================
//     // CART DRAWER STATE
//     // ============================================

//     const [
//         cartOpen,
//         setCartOpen,
//     ] = useState(false);


//     // ============================================
//     // PRODUCT STATE
//     // ============================================

//     const {
//         selectedProduct,
//         loading,
//         error,
//     } = useSelector(
//         (state) => state.products
//     );


//     // ============================================
//     // CART STATE
//     // ============================================

//     const {
//         loading: cartLoading,
//     } = useSelector(
//         (state) => state.cart
//     );


//     // ============================================
//     // VARIANT STATE
//     // ============================================

//     const [
//         selectedVariant,
//         setSelectedVariant,
//     ] = useState(null);


//     // ============================================
//     // QUANTITY STATE
//     // ============================================

//     const [
//         quantity,
//         setQuantity,
//     ] = useState(1);


//     // ============================================
//     // GET PRODUCT
//     // ============================================

//     useEffect(() => {

//         if (!id) {
//             return;
//         }

//         // Reset previous selection
//         setSelectedVariant(null);
//         setQuantity(1);

//         dispatch(
//             getProductById(id)
//         );

//     }, [
//         dispatch,
//         id,
//     ]);


//     // ============================================
//     // LOADING
//     // ============================================

//     if (loading) {

//         return (

//             <>
//                 <Navbar
//                     onCartClick={() =>
//                         setCartOpen(true)
//                     }
//                 />

//                 <Box
//                     display="flex"
//                     justifyContent="center"
//                     alignItems="center"
//                     minHeight="70vh"
//                 >

//                     <CircularProgress />

//                 </Box>


//                 <CartDrawer
//                     open={cartOpen}
//                     onClose={() =>
//                         setCartOpen(false)
//                     }
//                 />

//             </>

//         );

//     }


//     // ============================================
//     // ERROR
//     // ============================================

//     if (error) {

//         return (

//             <>
//                 <Navbar
//                     onCartClick={() =>
//                         setCartOpen(true)
//                     }
//                 />


//                 <Box
//                     sx={{
//                         py: 15,
//                         textAlign: "center",
//                     }}
//                 >

//                     <Typography
//                         color="error"
//                     >
//                         {error}
//                     </Typography>

//                 </Box>


//                 <CartDrawer
//                     open={cartOpen}
//                     onClose={() =>
//                         setCartOpen(false)
//                     }
//                 />

//             </>

//         );

//     }


//     // ============================================
//     // PRODUCT NOT FOUND
//     // ============================================

//     if (!selectedProduct) {

//         return (

//             <>
//                 <Navbar
//                     onCartClick={() =>
//                         setCartOpen(true)
//                     }
//                 />


//                 <Box
//                     sx={{
//                         py: 15,
//                         textAlign: "center",
//                     }}
//                 >

//                     <Typography
//                         variant="h6"
//                     >
//                         Product not found
//                     </Typography>

//                 </Box>


//                 <CartDrawer
//                     open={cartOpen}
//                     onClose={() =>
//                         setCartOpen(false)
//                     }
//                 />

//             </>

//         );

//     }


//     // ============================================
//     // VARIANTS
//     // ============================================

//     const variants =
//         selectedProduct.productVariants || [];


//     // ============================================
//     // SELECT VARIANT
//     // ============================================

//     const handleVariantChange = (
//         event,
//         value
//     ) => {

//         if (!value) {
//             return;
//         }


//         const variant =
//             variants.find(
//                 (item) =>
//                     item._id === value
//             );


//         setSelectedVariant(
//             variant
//         );


//         // Reset quantity
//         setQuantity(1);

//     };


//     // ============================================
//     // DECREASE QUANTITY
//     // ============================================

//     const decreaseQuantity = () => {

//         setQuantity(
//             (previous) =>
//                 Math.max(
//                     1,
//                     previous - 1
//                 )
//         );

//     };


//     // ============================================
//     // INCREASE QUANTITY
//     // ============================================

//     const increaseQuantity = () => {

//         const stock =
//             Number(
//                 selectedVariant?.stock || 0
//             );


//         setQuantity(
//             (previous) =>
//                 Math.min(
//                     stock,
//                     previous + 1
//                 )
//         );

//     };


//     // ============================================
//     // ADD TO CART
//     // ============================================

//     const handleAddToCart = async () => {

//         // ----------------------------------------
//         // REQUIRE VARIANT
//         // ----------------------------------------

//         if (!selectedVariant) {

//             alert(
//                 "Please select a size"
//             );

//             return;

//         }


//         // ----------------------------------------
//         // STOCK
//         // ----------------------------------------

//         const stock =
//             Number(
//                 selectedVariant.stock || 0
//             );


//         if (stock <= 0) {

//             alert(
//                 "This variant is out of stock"
//             );

//             return;

//         }


//         // ----------------------------------------
//         // QUANTITY
//         // ----------------------------------------

//         if (
//             quantity < 1 ||
//             quantity > stock
//         ) {

//             alert(
//                 "Invalid quantity"
//             );

//             return;

//         }


//         // ----------------------------------------
//         // CART ITEM
//         // ----------------------------------------

//         const cartItem = {

//             product:
//                 selectedProduct._id,

//             variant:
//                 selectedVariant._id,

//             quantity:
//                 Number(quantity),

//         };


//         console.log(
//             "PRODUCT DETAILS: ADD TO CART",
//             cartItem
//         );


//         try {

//             // ------------------------------------
//             // ADD TO CART
//             // ------------------------------------

//             await dispatch(
//                 addToCart(cartItem)
//             ).unwrap();


//             // ------------------------------------
//             // REFRESH CART
//             // ------------------------------------

//             await dispatch(
//                 getCart()
//             ).unwrap();


//             // ------------------------------------
//             // OPEN CART
//             // ------------------------------------

//             setCartOpen(true);

//         } catch (err) {

//             console.error(
//                 "ADD TO CART FAILED:",
//                 err
//             );


//             alert(
//                 typeof err === "string"
//                     ? err
//                     : "Unable to add product to cart"
//             );

//         }

//     };


//     // ============================================
//     // CURRENT STOCK
//     // ============================================

//     const currentStock =
//         Number(
//             selectedVariant?.stock || 0
//         );


//     // ============================================
//     // RENDER
//     // ============================================

//     return (

//         <>

//             {/* =====================================
//                 NAVBAR
//             ===================================== */}

//             <Navbar
//                 onCartClick={() =>
//                     setCartOpen(true)
//                 }
//             />


//             {/* =====================================
//                 PRODUCT DETAILS
//             ===================================== */}

//             <Box
//                 sx={{
//                     pt: 14,
//                     pb: 8,
//                     px: {
//                         xs: 2,
//                         md: 6,
//                     },
//                 }}
//             >

//                 <Box
//                     sx={{
//                         display: "grid",

//                         gridTemplateColumns: {
//                             xs: "1fr",
//                             md: "1fr 1fr",
//                         },

//                         gap: 5,

//                         maxWidth: 1400,

//                         mx: "auto",
//                     }}
//                 >


//                     {/* =================================
//                         IMAGE
//                     ================================= */}

//                     <Box>

//                         <Box
//                             sx={{
//                                 width: "100%",

//                                 maxWidth: 650,

//                                 height: {
//                                     xs: 500,
//                                     md: 700,
//                                 },

//                                 display: "flex",

//                                 justifyContent:
//                                     "center",

//                                 alignItems:
//                                     "center",

//                                 backgroundColor:
//                                     "#f5f5f5",

//                                 borderRadius: 2,

//                                 overflow:
//                                     "hidden",
//                             }}
//                         >

//                             <Box
//                                 component="img"

//                                 src={
//                                     selectedProduct
//                                         .images
//                                         ?. [0]
//                                         ?.url ||
//                                     "/no-image.png"
//                                 }

//                                 alt={
//                                     selectedProduct
//                                         .productName ||
//                                     "Product"
//                                 }

//                                 onError={(
//                                     event
//                                 ) => {

//                                     event.currentTarget.src =
//                                         "/no-image.png";

//                                 }}

//                                 sx={{
//                                     width:
//                                         "100%",

//                                     height:
//                                         "100%",

//                                     objectFit:
//                                         "contain",

//                                     display:
//                                         "block",
//                                 }}
//                             />

//                         </Box>

//                     </Box>


//                     {/* =================================
//                         PRODUCT INFORMATION
//                     ================================= */}

//                     <Box>

//                         {/* PRODUCT NAME */}

//                         <Typography
//                             variant="h3"
//                             sx={{
//                                 fontSize: {
//                                     xs: 32,
//                                     md: 48,
//                                 },

//                                 fontWeight: 500,
//                             }}
//                         >

//                             {
//                                 selectedProduct
//                                     .productName
//                             }

//                         </Typography>


//                         {/* DESCRIPTION */}

//                         {
//                             selectedProduct
//                                 .description && (

//                                 <Typography
//                                     mt={2}
//                                     color="text.secondary"
//                                     sx={{
//                                         lineHeight: 1.8,
//                                     }}
//                                 >

//                                     {
//                                         selectedProduct
//                                             .description
//                                     }

//                                 </Typography>

//                             )
//                         }


//                         {/* PRICE */}

//                         <Typography
//                             sx={{
//                                 mt: 3,

//                                 fontSize: 30,

//                                 fontWeight: 700,

//                                 color: "#C9A227",
//                             }}
//                         >

//                             ₹{" "}

//                             {
//                                 selectedVariant
//                                     ?.sellingPrice ??
//                                 selectedProduct
//                                     .sellingPrice
//                             }

//                         </Typography>


//                         {/* =================================
//                             VARIANTS
//                         ================================= */}

//                         {
//                             variants.length > 0 && (

//                                 <>

//                                     <Typography
//                                         sx={{
//                                             mt: 5,
//                                             mb: 2,
//                                             fontWeight: 600,
//                                         }}
//                                     >
//                                         Select Size
//                                     </Typography>


//                                     <ToggleButtonGroup
//                                         exclusive

//                                         value={
//                                             selectedVariant
//                                                 ?._id || ""
//                                         }

//                                         onChange={
//                                             handleVariantChange
//                                         }

//                                         sx={{
//                                             display:
//                                                 "flex",

//                                             flexWrap:
//                                                 "wrap",

//                                             gap: 1,
//                                         }}
//                                     >

//                                         {
//                                             variants.map(
//                                                 (
//                                                     variant
//                                                 ) => (

//                                                     <ToggleButton
//                                                         key={
//                                                             variant._id
//                                                         }

//                                                         value={
//                                                             variant._id
//                                                         }

//                                                         disabled={
//                                                             Number(
//                                                                 variant.stock ||
//                                                                 0
//                                                             ) <= 0
//                                                         }

//                                                         sx={{
//                                                             minWidth: 60,

//                                                             border:
//                                                                 "1px solid #ddd",

//                                                             "&.Mui-selected":
//                                                                 {
//                                                                     backgroundColor:
//                                                                         "#C9A227",

//                                                                     color:
//                                                                         "#fff",

//                                                                     "&:hover":
//                                                                         {
//                                                                             backgroundColor:
//                                                                                 "#B08D57",
//                                                                         },
//                                                                 },
//                                                         }}
//                                                     >

//                                                         {
//                                                             variant
//                                                                 .attributes
//                                                                 ?.map(
//                                                                     (
//                                                                         attr
//                                                                     ) =>
//                                                                         attr.value
//                                                                 )
//                                                                 .filter(
//                                                                     Boolean
//                                                                 )
//                                                                 .join(
//                                                                     " / "
//                                                                 )
//                                                         }

//                                                     </ToggleButton>

//                                                 )
//                                             )
//                                         }

//                                     </ToggleButtonGroup>

//                                 </>

//                             )
//                         }


//                         {/* =================================
//                             SELECTED VARIANT
//                         ================================= */}

//                         {
//                             selectedVariant && (

//                                 <Box mt={3}>

//                                     <Typography>
//                                         <b>
//                                             Color:
//                                         </b>{" "}

//                                         {
//                                             selectedVariant
//                                                 .color ||
//                                             selectedVariant
//                                                 .attributes
//                                                 ?.find(
//                                                     (
//                                                         attr
//                                                     ) =>
//                                                         attr.colorCode
//                                                 )
//                                                 ?.colorCode ||
//                                             "-"
//                                         }

//                                     </Typography>


//                                     <Typography mt={1}>
//                                         <b>
//                                             Stock:
//                                         </b>{" "}

//                                         {
//                                             selectedVariant
//                                                 .stock
//                                         }

//                                     </Typography>


//                                     <Typography mt={1}>
//                                         <b>
//                                             SKU:
//                                         </b>{" "}

//                                         {
//                                             selectedVariant
//                                                 .sku ||
//                                             "-"
//                                         }

//                                     </Typography>


//                                     <Typography mt={1}>
//                                         <b>
//                                             Barcode:
//                                         </b>{" "}

//                                         {
//                                             selectedVariant
//                                                 .barcode ||
//                                             "-"
//                                         }

//                                     </Typography>

//                                 </Box>

//                             )
//                         }


//                         {/* =================================
//                             QUANTITY
//                         ================================= */}

//                         <Typography
//                             sx={{
//                                 mt: 5,
//                                 mb: 2,
//                                 fontWeight: 600,
//                             }}
//                         >
//                             Quantity
//                         </Typography>


//                         <Box
//                             display="flex"
//                             alignItems="center"
//                             gap={2}
//                         >

//                             <IconButton
//                                 onClick={
//                                     decreaseQuantity
//                                 }

//                                 disabled={
//                                     quantity <= 1
//                                 }
//                             >

//                                 <RemoveIcon />

//                             </IconButton>


//                             <Typography
//                                 sx={{
//                                     fontSize: 20,

//                                     minWidth: 30,

//                                     textAlign:
//                                         "center",
//                                 }}
//                             >

//                                 {quantity}

//                             </Typography>


//                             <IconButton
//                                 onClick={
//                                     increaseQuantity
//                                 }

//                                 disabled={
//                                     !selectedVariant ||
//                                     quantity >=
//                                         currentStock
//                                 }
//                             >

//                                 <AddIcon />

//                             </IconButton>

//                         </Box>


//                         {/* =================================
//                             ADD TO CART
//                         ================================= */}

//                         <Button
//                             variant="contained"

//                             disabled={
//                                 cartLoading ||
//                                 !selectedVariant ||
//                                 currentStock <= 0
//                             }

//                             onClick={
//                                 handleAddToCart
//                             }

//                             sx={{
//                                 mt: 5,

//                                 backgroundColor:
//                                     "#C9A227",

//                                 color: "#fff",

//                                 px: 5,

//                                 py: 1.5,

//                                 fontSize: 16,

//                                 "&:hover": {
//                                     backgroundColor:
//                                         "#B08D57",
//                                 },

//                                 "&.Mui-disabled": {
//                                     backgroundColor:
//                                         "#ddd",

//                                     color:
//                                         "#777",
//                                 },
//                             }}
//                         >

//                             {
//                                 cartLoading
//                                     ? "ADDING..."
//                                     : currentStock <= 0 &&
//                                       selectedVariant
//                                     ? "OUT OF STOCK"
//                                     : "ADD TO CART"
//                             }

//                         </Button>

//                     </Box>

//                 </Box>

//             </Box>


//             {/* =====================================
//                 CART DRAWER
//             ===================================== */}

//             <CartDrawer
//                 open={cartOpen}

//                 onClose={() =>
//                     setCartOpen(false)
//                 }
//             />

//         </>

//     );

// };


// export default ProductDetails;
//-----------------------------------------------

import { useEffect, useState } from "react";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import {
    Box,
    Typography,
    CircularProgress,
    Button,
    ToggleButton,
    ToggleButtonGroup,
    IconButton,
} from "@mui/material";

import {
    useDispatch,
    useSelector,
} from "react-redux";

import {
    useParams,
} from "react-router-dom";

import {
    getProductById,
} from "../../features/products/ProductsThunk";

import {
    addToCart,
    getCart,
} from "../../features/cart/CartThunk";

import VisitorNavbar from "../../components/navbar/VisitorNavbar";
import CustomerNavbar from "../../components/navbar/CustomerNavbar";
import CartDrawer from "../../components/cart/CartDrawer";

const ProductDetails = () => {

    // ============================================
    // URL
    // ============================================

    const { id } = useParams();


    // ============================================
    // REDUX
    // ============================================

    const dispatch = useDispatch();


    // ============================================
    // AUTH
    // ============================================

    const token = localStorage.getItem("token");


    // ============================================
    // NAVBAR
    // ============================================

    const Navbar = token
        ? CustomerNavbar
        : VisitorNavbar;


    // ============================================
    // CART DRAWER STATE
    // ============================================

    const [
        cartOpen,
        setCartOpen,
    ] = useState(false);


    // ============================================
    // PRODUCT STATE
    // ============================================

    const {
        selectedProduct,
        loading,
        error,
    } = useSelector(
        (state) => state.products
    );


    // ============================================
    // CART STATE
    // ============================================

    const {
        loading: cartLoading,
    } = useSelector(
        (state) => state.cart
    );


    // ============================================
    // VARIANT STATE
    // ============================================

    const [
        selectedVariant,
        setSelectedVariant,
    ] = useState(null);


    // ============================================
    // QUANTITY STATE
    // ============================================

    const [
        quantity,
        setQuantity,
    ] = useState(1);


    // ============================================
    // IMAGE STATE
    // ============================================

    const [
        selectedImageIndex,
        setSelectedImageIndex,
    ] = useState(0);


    // ============================================
    // GET PRODUCT
    // ============================================

    useEffect(() => {

        if (!id) {
            return;
        }

        // Reset previous product selections
        setSelectedVariant(null);
        setQuantity(1);
        setSelectedImageIndex(0);

        dispatch(
            getProductById(id)
        );

    }, [
        dispatch,
        id,
    ]);


    // ============================================
    // RESET IMAGE WHEN PRODUCT CHANGES
    // ============================================

    useEffect(() => {

        setSelectedImageIndex(0);

    }, [
        selectedProduct?._id,
    ]);


    // ============================================
    // LOADING
    // ============================================

    if (loading) {

        return (

            <>
                <Navbar
                    onCartClick={() =>
                        setCartOpen(true)
                    }
                />

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="70vh"
                >

                    <CircularProgress />

                </Box>

                <CartDrawer
                    open={cartOpen}
                    onClose={() =>
                        setCartOpen(false)
                    }
                />

            </>

        );

    }


    // ============================================
    // ERROR
    // ============================================

    if (error) {

        return (

            <>
                <Navbar
                    onCartClick={() =>
                        setCartOpen(true)
                    }
                />

                <Box
                    sx={{
                        py: 15,
                        textAlign: "center",
                    }}
                >

                    <Typography
                        color="error"
                    >
                        {error}
                    </Typography>

                </Box>

                <CartDrawer
                    open={cartOpen}
                    onClose={() =>
                        setCartOpen(false)
                    }
                />

            </>

        );

    }


    // ============================================
    // PRODUCT NOT FOUND
    // ============================================

    if (!selectedProduct) {

        return (

            <>
                <Navbar
                    onCartClick={() =>
                        setCartOpen(true)
                    }
                />

                <Box
                    sx={{
                        py: 15,
                        textAlign: "center",
                    }}
                >

                    <Typography
                        variant="h6"
                    >
                        Product not found
                    </Typography>

                </Box>

                <CartDrawer
                    open={cartOpen}
                    onClose={() =>
                        setCartOpen(false)
                    }
                />

            </>

        );

    }


    // ============================================
    // PRODUCT IMAGES
    // ============================================

    const images =
        Array.isArray(selectedProduct.images)
            ? selectedProduct.images
            : [];


    // ============================================
    // CURRENT IMAGE
    // ============================================

    const currentImage =
        images[selectedImageIndex]?.url ||
        images[0]?.url ||
        "/no-image.png";


    // ============================================
    // VARIANTS
    // ============================================

    const variants =
        selectedProduct.productVariants || [];


    // ============================================
    // SELECT VARIANT
    // ============================================

    const handleVariantChange = (
        event,
        value
    ) => {

        if (!value) {
            return;
        }

        const variant =
            variants.find(
                (item) =>
                    item._id === value
            );

        setSelectedVariant(
            variant
        );

        // Reset quantity
        setQuantity(1);

    };


    // ============================================
    // SELECT IMAGE
    // ============================================

    const handleImageChange = (
        index
    ) => {

        setSelectedImageIndex(index);

    };


    // ============================================
    // DECREASE QUANTITY
    // ============================================

    const decreaseQuantity = () => {

        setQuantity(
            (previous) =>
                Math.max(
                    1,
                    previous - 1
                )
        );

    };


    // ============================================
    // INCREASE QUANTITY
    // ============================================

    const increaseQuantity = () => {

        const stock =
            Number(
                selectedVariant?.stock || 0
            );

        setQuantity(
            (previous) =>
                Math.min(
                    stock,
                    previous + 1
                )
        );

    };


    // ============================================
    // ADD TO CART
    // ============================================

    const handleAddToCart = async () => {

        // ----------------------------------------
        // REQUIRE VARIANT
        // ----------------------------------------

        if (!selectedVariant) {

            alert(
                "Please select a size"
            );

            return;

        }


        // ----------------------------------------
        // STOCK
        // ----------------------------------------

        const stock =
            Number(
                selectedVariant.stock || 0
            );


        if (stock <= 0) {

            alert(
                "This variant is out of stock"
            );

            return;

        }


        // ----------------------------------------
        // QUANTITY
        // ----------------------------------------

        if (
            quantity < 1 ||
            quantity > stock
        ) {

            alert(
                "Invalid quantity"
            );

            return;

        }


        // ----------------------------------------
        // CART ITEM
        // ----------------------------------------

        const cartItem = {

            product:
                selectedProduct._id,

            variant:
                selectedVariant._id,

            quantity:
                Number(quantity),

        };


        console.log(
            "PRODUCT DETAILS: ADD TO CART",
            cartItem
        );


        try {

            // ------------------------------------
            // ADD TO CART
            // ------------------------------------

            await dispatch(
                addToCart(cartItem)
            ).unwrap();


            // ------------------------------------
            // REFRESH CART
            // ------------------------------------

            await dispatch(
                getCart()
            ).unwrap();


            // ------------------------------------
            // OPEN CART
            // ------------------------------------

            setCartOpen(true);

        } catch (err) {

            console.error(
                "ADD TO CART FAILED:",
                err
            );


            alert(
                typeof err === "string"
                    ? err
                    : "Unable to add product to cart"
            );

        }

    };


    // ============================================
    // CURRENT STOCK
    // ============================================

    const currentStock =
        Number(
            selectedVariant?.stock || 0
        );


    // ============================================
    // RENDER
    // ============================================

    return (

        <>

            {/* =====================================
                NAVBAR
            ===================================== */}

            <Navbar
                onCartClick={() =>
                    setCartOpen(true)
                }
            />


            {/* =====================================
                PRODUCT DETAILS
            ===================================== */}

            <Box
                sx={{
                    pt: 14,
                    pb: 8,
                    px: {
                        xs: 2,
                        md: 6,
                    },
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

                        maxWidth: 1400,

                        mx: "auto",
                    }}
                >


                    {/* =================================
                        IMAGE GALLERY
                    ================================= */}

                    <Box>

                        {/* =================================
                            MAIN IMAGE
                        ================================= */}

                        <Box
                            sx={{
                                width: "100%",

                                maxWidth: 650,

                                height: {
                                    xs: 500,
                                    md: 700,
                                },

                                display: "flex",

                                justifyContent:
                                    "center",

                                alignItems:
                                    "center",

                                backgroundColor:
                                    "#f5f5f5",

                                borderRadius: 2,

                                overflow:
                                    "hidden",
                            }}
                        >

                            <Box
                                component="img"

                                src={
                                    currentImage
                                }

                                alt={
                                    selectedProduct
                                        .productName ||
                                    "Product"
                                }

                                onError={(
                                    event
                                ) => {

                                    event.currentTarget.src =
                                        "/no-image.png";

                                }}

                                sx={{
                                    width:
                                        "100%",

                                    height:
                                        "100%",

                                    objectFit:
                                        "contain",

                                    display:
                                        "block",
                                }}
                            />

                        </Box>


                        {/* =================================
                            IMAGE THUMBNAILS
                        ================================= */}

                        {
                            images.length > 0 && (

                                <Box
                                    sx={{
                                        display:
                                            "flex",

                                        gap: 1.5,

                                        mt: 2,

                                        maxWidth: 650,

                                        overflowX:
                                            "auto",

                                        pb: 1,

                                        "&::-webkit-scrollbar":
                                            {
                                                height: 6,
                                            },

                                        "&::-webkit-scrollbar-thumb":
                                            {
                                                backgroundColor:
                                                    "#ccc",

                                                borderRadius:
                                                    10,
                                            },
                                    }}
                                >

                                    {
                                        images.map(
                                            (
                                                image,
                                                index
                                            ) => (

                                                <Box
                                                    key={
                                                        image._id ||
                                                        image.publicId ||
                                                        index
                                                    }

                                                    onClick={() =>
                                                        handleImageChange(
                                                            index
                                                        )
                                                    }

                                                    sx={{
                                                        width: {
                                                            xs: 70,
                                                            md: 90,
                                                        },

                                                        height: {
                                                            xs: 90,
                                                            md: 110,
                                                        },

                                                        minWidth: {
                                                            xs: 70,
                                                            md: 90,
                                                        },

                                                        borderRadius: 1,

                                                        overflow:
                                                            "hidden",

                                                        cursor:
                                                            "pointer",

                                                        border:
                                                            selectedImageIndex ===
                                                            index
                                                                ? "2px solid #C9A227"
                                                                : "1px solid #ddd",

                                                        opacity:
                                                            selectedImageIndex ===
                                                            index
                                                                ? 1
                                                                : 0.75,

                                                        transition:
                                                            "all 0.2s ease",

                                                        "&:hover":
                                                            {
                                                                opacity:
                                                                    1,
                                                            },
                                                    }}
                                                >

                                                    <Box
                                                        component="img"

                                                        src={
                                                            image?.url ||
                                                            "/no-image.png"
                                                        }

                                                        alt={
                                                            `${selectedProduct.productName || "Product"} ${index + 1}`
                                                        }

                                                        onError={(
                                                            event
                                                        ) => {

                                                            event.currentTarget.src =
                                                                "/no-image.png";

                                                        }}

                                                        sx={{
                                                            width:
                                                                "100%",

                                                            height:
                                                                "100%",

                                                            objectFit:
                                                                "cover",

                                                            display:
                                                                "block",
                                                        }}
                                                    />

                                                </Box>

                                            )
                                        )
                                    }

                                </Box>

                            )
                        }

                    </Box>


                    {/* =================================
                        PRODUCT INFORMATION
                    ================================= */}

                    <Box>

                        {/* PRODUCT NAME */}

                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: {
                                    xs: 32,
                                    md: 48,
                                },

                                fontWeight: 500,
                            }}
                        >

                            {
                                selectedProduct
                                    .productName
                            }

                        </Typography>


                        {/* DESCRIPTION */}

                        {
                            selectedProduct
                                .description && (

                                <Typography
                                    mt={2}
                                    color="text.secondary"
                                    sx={{
                                        lineHeight: 1.8,
                                    }}
                                >

                                    {
                                        selectedProduct
                                            .description
                                    }

                                </Typography>

                            )
                        }


                        {/* PRICE */}

                        <Typography
                            sx={{
                                mt: 3,

                                fontSize: 30,

                                fontWeight: 700,

                                color: "#C9A227",
                            }}
                        >

                            ₹{" "}

                            {
                                selectedVariant
                                    ?.sellingPrice ??
                                selectedProduct
                                    .sellingPrice
                            }

                        </Typography>


                        {/* =================================
                            VARIANTS
                        ================================= */}

                        {
                            variants.length > 0 && (

                                <>

                                    <Typography
                                        sx={{
                                            mt: 5,
                                            mb: 2,
                                            fontWeight: 600,
                                        }}
                                    >
                                        Select Size
                                    </Typography>


                                    <ToggleButtonGroup
                                        exclusive

                                        value={
                                            selectedVariant
                                                ?._id || ""
                                        }

                                        onChange={
                                            handleVariantChange
                                        }

                                        sx={{
                                            display:
                                                "flex",

                                            flexWrap:
                                                "wrap",

                                            gap: 1,
                                        }}
                                    >

                                        {
                                            variants.map(
                                                (
                                                    variant
                                                ) => (

                                                    <ToggleButton
                                                        key={
                                                            variant._id
                                                        }

                                                        value={
                                                            variant._id
                                                        }

                                                        disabled={
                                                            Number(
                                                                variant.stock ||
                                                                0
                                                            ) <= 0
                                                        }

                                                        sx={{
                                                            minWidth: 60,

                                                            border:
                                                                "1px solid #ddd",

                                                            "&.Mui-selected":
                                                                {
                                                                    backgroundColor:
                                                                        "#C9A227",

                                                                    color:
                                                                        "#fff",

                                                                    "&:hover":
                                                                        {
                                                                            backgroundColor:
                                                                                "#B08D57",
                                                                        },
                                                                },
                                                        }}
                                                    >

                                                        {
                                                            variant
                                                                .attributes
                                                                ?.map(
                                                                    (
                                                                        attr
                                                                    ) =>
                                                                        attr.value
                                                                )
                                                                .filter(
                                                                    Boolean
                                                                )
                                                                .join(
                                                                    " / "
                                                                )
                                                        }

                                                    </ToggleButton>

                                                )
                                            )
                                        }

                                    </ToggleButtonGroup>

                                </>

                            )
                        }


                        {/* =================================
                            SELECTED VARIANT
                        ================================= */}

                        {
                            selectedVariant && (

                                <Box mt={3}>

                                    <Typography>
                                        <b>
                                            Color:
                                        </b>{" "}

                                        {
                                            selectedVariant
                                                .color ||
                                            selectedVariant
                                                .attributes
                                                ?.find(
                                                    (
                                                        attr
                                                    ) =>
                                                        attr.colorCode
                                                )
                                                ?.colorCode ||
                                            "-"
                                        }

                                    </Typography>


                                    <Typography mt={1}>
                                        <b>
                                            Stock:
                                        </b>{" "}

                                        {
                                            selectedVariant
                                                .stock
                                        }

                                    </Typography>


                                    <Typography mt={1}>
                                        <b>
                                            SKU:
                                        </b>{" "}

                                        {
                                            selectedVariant
                                                .sku ||
                                            "-"
                                        }

                                    </Typography>


                                    <Typography mt={1}>
                                        <b>
                                            Barcode:
                                        </b>{" "}

                                        {
                                            selectedVariant
                                                .barcode ||
                                            "-"
                                        }

                                    </Typography>

                                </Box>

                            )
                        }


                        {/* =================================
                            QUANTITY
                        ================================= */}

                        <Typography
                            sx={{
                                mt: 5,
                                mb: 2,
                                fontWeight: 600,
                            }}
                        >
                            Quantity
                        </Typography>


                        <Box
                            display="flex"
                            alignItems="center"
                            gap={2}
                        >

                            <IconButton
                                onClick={
                                    decreaseQuantity
                                }

                                disabled={
                                    quantity <= 1
                                }
                            >

                                <RemoveIcon />

                            </IconButton>


                            <Typography
                                sx={{
                                    fontSize: 20,

                                    minWidth: 30,

                                    textAlign:
                                        "center",
                                }}
                            >

                                {quantity}

                            </Typography>


                            <IconButton
                                onClick={
                                    increaseQuantity
                                }

                                disabled={
                                    !selectedVariant ||
                                    quantity >=
                                        currentStock
                                }
                            >

                                <AddIcon />

                            </IconButton>

                        </Box>


                        {/* =================================
                            ADD TO CART
                        ================================= */}

                        <Button
                            variant="contained"

                            disabled={
                                cartLoading ||
                                !selectedVariant ||
                                currentStock <= 0
                            }

                            onClick={
                                handleAddToCart
                            }

                            sx={{
                                mt: 5,

                                backgroundColor:
                                    "#C9A227",

                                color: "#fff",

                                px: 5,

                                py: 1.5,

                                fontSize: 16,

                                "&:hover": {
                                    backgroundColor:
                                        "#B08D57",
                                },

                                "&.Mui-disabled": {
                                    backgroundColor:
                                        "#ddd",

                                    color:
                                        "#777",
                                },
                            }}
                        >

                            {
                                cartLoading
                                    ? "ADDING..."
                                    : currentStock <= 0 &&
                                      selectedVariant
                                    ? "OUT OF STOCK"
                                    : "ADD TO CART"
                            }

                        </Button>

                    </Box>

                </Box>

            </Box>


            {/* =====================================
                CART DRAWER
            ===================================== */}

            <CartDrawer
                open={cartOpen}

                onClose={() =>
                    setCartOpen(false)
                }
            />

        </>

    );
};

export default ProductDetails;