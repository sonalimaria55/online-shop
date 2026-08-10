

// import RemoveIcon from "@mui/icons-material/Remove";
// import AddIcon from "@mui/icons-material/Add";
// import {
//     getProductById
// } from "../../features/products/ProductsThunk";


// import {
//     addToCart,
//     getCart
// } from "../../features/cart/CartThunk";


// import { useEffect, useState } from "react";
// import {

//     ToggleButton,
//     ToggleButtonGroup,
//     IconButton,
//     Box,
//     Typography,
//     CircularProgress,
//     Button
// } from "@mui/material";

// import {
//     useDispatch,
//     useSelector
// } from "react-redux";

// import {
//     useParams
// } from "react-router-dom";




// //console.log("Image URL:", selectedProduct?.images?.[0]?.url);

// const ProductDetails = () => {
//     console.log("Products ProductDetails Loaded");


//     const { id } = useParams();

//     console.log("Route ID:", id);
//     const dispatch = useDispatch();



//     const {
//         selectedProduct,
//         loading,
//         error
//     } = useSelector(
//         state => state.products
//     );

//     // console.log("Selected Product:", selectedProduct);
//     // console.log("Images:", selectedProduct?.images);
//     // console.log("Image URL:", selectedProduct?.images?.[0]?.url);

// const [selectedVariant,setSelectedVariant]=useState(null);
//     const [quantity, setQuantity] = useState(1);

//     useEffect(() => {

//         console.log("Dispatching getProductById:", id);
//         if (id) {

//             dispatch(
//                 getProductById(id)
//             );

//         }

//     }, [dispatch, id]);
// // const handleAddToCart = () => {

// //     if (!selectedSize) {
// //         alert("Please select a size");
// //         return;
// //     }

// //     const cartItem = {
// //         product: selectedProduct._id,
// //         size: selectedSize,
// //         quantity,
// //     };

// //     console.log(cartItem);

// //     // Next step
// //     // dispatch(addToCart(cartItem));
// // };

// const handleAddToCart = async () => {

//     if (!selectedSize) {
//         alert("Please select a size");
//         return;
//     }

//     const cartItem = {
//         product: selectedProduct._id,
//         size: selectedSize,
//         quantity,
//     };

//     console.log("Sending:", cartItem);

//     await dispatch(addToCart(cartItem));

//     dispatch(getCart());

//     alert("Added to cart");
// };


//     if (loading) {

//         return <CircularProgress />;

//     }



//     if (error) {

//         return (
//             <Typography>
//                 {error}
//             </Typography>
//         );

//     }



//     if (!selectedProduct) {

//         return (
//             <Typography>
//                 Product not found
//             </Typography>
//         );

//     }


//     return (
//         <Box
//             sx={{
//                 py: 8,
//                 px: { xs: 2, md: 6 },
//             }}
//         >
//             <Box
//                 sx={{
//                     display: "grid",
//                     gridTemplateColumns: {
//                         xs: "1fr",
//                         md: "1fr 1fr",
//                     },
//                     gap: 5,
//                 }}
//             >
//                 {/* Product Image */}
//                 <Box>
//                     {/* Product Image */}


//                     {/* <Box
//                         component="img"
//                         src={selectedProduct.images?.[0]?.url}
//                         alt={selectedProduct.productName}
//                         sx={{
//                             width: "100%",
//                             maxWidth: 500,
//                             height: "auto",
//                             display: "block",
//                         }}
//                     /> */}


//                     <Box
//                         component="img"
//                         src={selectedProduct.images?.[0]?.url}
//                         alt={selectedProduct.productName}
//                         sx={{
//                             width: "100%",
//                             maxWidth: 500,
//                             height: "auto",
//                             display: "block",
//                             borderRadius: 1,
//                             boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
//                         }}
//                     />


//                 </Box>

//                 {/* Product Info */}
//                 <Box>
//                     <Typography variant="h3">
//                         {selectedProduct.productName}
//                     </Typography>

//                     <Typography mt={2}>
//                         {selectedProduct.description}
//                     </Typography>

//                     <Typography
//                         mt={3}
//                         sx={{
//                             fontSize: 28,
//                             fontWeight: 600,
//                             color: "#C9A227",
//                         }}
//                     >
//                         ₹ {selectedProduct.sellingPrice}
//                     </Typography>


//                     <Typography
//                         sx={{
//                             mt: 4,
//                             mb: 1,
//                             fontWeight: 600,
//                         }}
//                     >
//                         Size
//                     </Typography>

//        <Typography
//     sx={{
//         mt:4,
//         mb:1,
//         fontWeight:600
//     }}
// >
//     Size
// </Typography>


// <ToggleButtonGroup
//     value={selectedSize}
//     exclusive
//     onChange={(e,value)=>{

//         if(value){
//             setSelectedSize(value);
//         }

//     }}
// >


// {
// selectedProduct.productVariants
// ?.filter(
//     item => item.variantType?.name === "Size"
// )
// .map((variant)=>(

// <ToggleButton
//     key={variant.value}
//     value={variant.value}
// >

// {variant.value}

// </ToggleButton>

// ))

// }


// </ToggleButtonGroup>

//                     <Typography
//                         sx={{
//                             mt: 4,
//                             mb: 1,
//                             fontWeight: 600,
//                         }}
//                     >
//                         Quantity
//                     </Typography>

//                     <Box
//                         sx={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: 2,
//                         }}
//                     >
//                         <IconButton
//                             onClick={() =>
//                                 setQuantity((prev) => Math.max(1, prev - 1))
//                             }
//                         >
//                             <RemoveIcon />
//                         </IconButton>

//                         <Typography>{quantity}</Typography>

//                         <IconButton
//                             onClick={() =>
//                                 setQuantity((prev) => prev + 1)
//                             }
//                         >
//                             <AddIcon />
//                         </IconButton>
//                     </Box>
//                     {/* 
//                     <Button
//                         variant="contained"
//                         sx={{
//                             mt: 4,
//                             background: "#C9A227",

//                             product: selectedProduct._id,
//                             size: selectedSize,
//                             quantity: quantity

//                         }}
//                     >
//                         Add To Cart
//                     </Button> */}

//                     <Button
//                         variant="contained"
//                         onClick={handleAddToCart}
//                         sx={{
//                             mt: 4,
//                             background: "#C9A227",
//                             color: "#fff",
//                             px: 5,
//                             py: 1.5,
//                             borderRadius: 0,
//                             "&:hover": {
//                                 background: "#B08D57",
//                             },
//                         }}
//                     >
//                         Add To Cart
//                     </Button>
//                 </Box>
//             </Box>
//         </Box>
//     );


// };


// export default ProductDetails;



//---------------------------------------


// import RemoveIcon from "@mui/icons-material/Remove";
// import AddIcon from "@mui/icons-material/Add";

// import {
//     getProductById
// } from "../../features/products/ProductsThunk";


// import {
//     addToCart,
//     getCart
// } from "../../features/cart/CartThunk";


// import { 
//     useEffect,
//     useState
// } from "react";


// import {
//     ToggleButton,
//     ToggleButtonGroup,
//     IconButton,
//     Box,
//     Typography,
//     CircularProgress,
//     Button
// } from "@mui/material";


// import {
//     useDispatch,
//     useSelector
// } from "react-redux";


// import {
//     useParams
// } from "react-router-dom";





// const ProductDetails = () => {


//     const { id } = useParams();

//     const dispatch = useDispatch();



//     const {
//         selectedProduct,
//         loading,
//         error
//     } = useSelector(
//         state => state.products
//     );




//     const [selectedVariant,setSelectedVariant] = useState(null);

//     const [quantity,setQuantity] = useState(1);





//     useEffect(()=>{


//         if(id){

//             dispatch(
//                 getProductById(id)
//             );

//         }


//     },[dispatch,id]);








//     const handleAddToCart = async()=>{


//         if(!selectedVariant){


//             alert(
//                 "Please select size"
//             );


//             return;

//         }



//         const cartItem = {


//             product:selectedProduct._id,


//             variant:selectedVariant,


//             quantity


//         };



//         console.log(
//             "Sending:",
//             cartItem
//         );



//         await dispatch(
//             addToCart(cartItem)
//         );


//         dispatch(
//             getCart()
//         );


//         alert(
//             "Added to cart"
//         );


//     };








//     if(loading){

//         return <CircularProgress />;

//     }





//     if(error){

//         return (

//             <Typography>

//                 {error}

//             </Typography>

//         );

//     }







//     if(!selectedProduct){


//         return (

//             <Typography>

//                 Product not found

//             </Typography>

//         );

//     }








//     console.log("Product Variants:", selectedProduct.productVariants);

// const sizes = selectedProduct.productVariants || [];








//     return (


//         <Box

//             sx={{

//                 py:8,

//                 px:{
//                     xs:2,
//                     md:6
//                 }

//             }}

//         >



//             <Box

//                 sx={{

//                     display:"grid",

//                     gridTemplateColumns:{

//                         xs:"1fr",

//                         md:"1fr 1fr"

//                     },

//                     gap:5

//                 }}

//             >





//                 {/* IMAGE */}

//                 <Box>


//                     <Box

//                         component="img"

//                         src={
//                             selectedProduct
//                             .images?.[0]?.url
//                         }


//                         alt={
//                             selectedProduct.productName
//                         }


//                         sx={{

//                             width:"100%",

//                             maxWidth:500,

//                             height:"auto",

//                             display:"block",

//                             borderRadius:1,

//                             boxShadow:
//                             "0 8px 24px rgba(0,0,0,0.08)"

//                         }}

//                     />


//                 </Box>







//                 {/* DETAILS */}


//                 <Box>



//                     <Typography variant="h3">


//                         {
//                             selectedProduct.productName
//                         }


//                     </Typography>





//                     <Typography mt={2}>


//                         {
//                             selectedProduct.description
//                         }


//                     </Typography>







//                     <Typography


//                         mt={3}


//                         sx={{

//                             fontSize:28,

//                             fontWeight:600,

//                             color:"#C9A227"

//                         }}


//                     >

//                         ₹ {selectedProduct.sellingPrice}


//                     </Typography>









//                     {/* SIZE */}


//                     <Typography

//                         sx={{

//                             mt:4,

//                             mb:1,

//                             fontWeight:600

//                         }}

//                     >

//                         Size


//                     </Typography>







//                     <ToggleButtonGroup


//                         value={
//                             selectedVariant?.value || ""
//                         }


//                         exclusive


//                         onChange={(e,value)=>{


//                             if(value){


//                                 const variant =

//                                 selectedProduct
//                                 .productVariants
//                                 .find(

//                                     item =>
//                                     item.value === value

//                                 );



//                                 setSelectedVariant(
//                                     variant
//                                 );


//                             }


//                         }}


//                     >



//                     {

//                     sizes?.map(
//                         variant=>(


//                             <ToggleButton


//                                 key={
//                                     variant.value
//                                 }


//                                 value={
//                                     variant.value
//                                 }


//                             >

//                                 {
//                                     variant.value
//                                 }


//                             </ToggleButton>


//                         )

//                     )


//                     }



//                     </ToggleButtonGroup>









//                     {/* COLOR */}


//                     {
//                         selectedVariant?.color &&

//                         <Typography

//                             sx={{

//                                 mt:3,

//                                 fontWeight:600

//                             }}

//                         >

//                             Color:
//                             {" "}
//                             {
//                                 selectedVariant.color
//                             }

//                         </Typography>

//                     }









//                     {/* QUANTITY */}


//                     <Typography

//                         sx={{

//                             mt:4,

//                             mb:1,

//                             fontWeight:600

//                         }}

//                     >

//                         Quantity


//                     </Typography>





//                     <Box

//                         sx={{

//                             display:"flex",

//                             alignItems:"center",

//                             gap:2

//                         }}

//                     >


//                         <IconButton


//                             onClick={()=>


//                                 setQuantity(
//                                     prev =>
//                                     Math.max(
//                                         1,
//                                         prev-1
//                                     )
//                                 )


//                             }


//                         >

//                             <RemoveIcon/>


//                         </IconButton>





//                         <Typography>

//                             {
//                                 quantity
//                             }

//                         </Typography>





//                         <IconButton


//                             onClick={()=>


//                                 setQuantity(
//                                     prev =>
//                                     prev+1
//                                 )


//                             }


//                         >

//                             <AddIcon/>


//                         </IconButton>


//                     </Box>









//                     {/* ADD CART */}


//                     <Button


//                         variant="contained"


//                         onClick={
//                             handleAddToCart
//                         }


//                         sx={{


//                             mt:4,

//                             background:"#C9A227",

//                             color:"#fff",

//                             px:5,

//                             py:1.5,

//                             borderRadius:0,


//                             "&:hover":{

//                                 background:"#B08D57"

//                             }


//                         }}


//                     >

//                         Add To Cart


//                     </Button>





//                 </Box>



//             </Box>



//         </Box>


//     );


// };



// export default ProductDetails;
//----------------------------------------------------------

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

// const ProductDetails = () => {

//     const { id } = useParams();
// //const { openCart } = useOutletContext();
//     const dispatch = useDispatch();

//     const {
//         selectedProduct,
//         loading,
//         error,
//     } = useSelector(
//         (state) => state.products
//     );

//     const [selectedVariant, setSelectedVariant] = useState(null);

//     const [quantity, setQuantity] = useState(1);

//     useEffect(() => {

//         if (id) {
//             dispatch(getProductById(id));
//         }

//     }, [dispatch, id]);

//     if (loading) {

//         return (
//             <Box
//                 display="flex"
//                 justifyContent="center"
//                 mt={5}
//             >
//                 <CircularProgress />
//             </Box>
//         );

//     }

//     if (error) {

//         return (
//             <Typography color="error">
//                 {error}
//             </Typography>
//         );

//     }

//     if (!selectedProduct) {

//         return (
//             <Typography>
//                 Product not found
//             </Typography>
//         );

//     }

//     const handleAddToCart = async () => {

//         if (!selectedVariant) {

//             alert("Please select size");
//             return;

//         }

//         const cartItem = {

//             product: selectedProduct._id,

//             variant: selectedVariant._id,

//             quantity,

//         };

//         console.log(cartItem);

//         await dispatch(addToCart(cartItem));

//         dispatch(getCart());

//         alert("Added to cart");

//     };

//     return (

//         <Box
//             sx={{
//                 py: 8,
//                 px: {
//                     xs: 2,
//                     md: 6,
//                 },
//             }}
//         >

//             <Box
//                 sx={{
//                     display: "grid",
//                     gridTemplateColumns: {
//                         xs: "1fr",
//                         md: "1fr 1fr",
//                     },
//                     gap: 5,
//                 }}
//             >

//                 {/* IMAGE */}

//                 <Box>

//                     <Box
//                         component="img"
//                         src={selectedProduct.images?.[0]?.url}
//                         alt={selectedProduct.productName}
//                         sx={{
//                             width: "100%",
//                             maxWidth: 500,
//                             borderRadius: 2,
//                         }}
//                     />

//                 </Box>

//                 {/* DETAILS */}

//                 <Box>

//                     <Typography variant="h3">
//                         {selectedProduct.productName}
//                     </Typography>

//                     <Typography mt={2}>
//                         {selectedProduct.description}
//                     </Typography>

//                     <Typography
//                         sx={{
//                             mt: 3,
//                             fontSize: 30,
//                             fontWeight: 700,
//                             color: "#C9A227",
//                         }}
//                     >
//                         ₹ {selectedProduct.sellingPrice}
//                     </Typography>

//                     {/* SIZE */}

//                     <Typography
//                         sx={{
//                             mt: 5,
//                             mb: 2,
//                             fontWeight: 600,
//                         }}
//                     >
//                         Size
//                     </Typography>

//                     <ToggleButtonGroup
//                         exclusive
//                         value={selectedVariant?._id || ""}
//                         onChange={(e, value) => {

//                             if (!value) return;

//                             const variant =
//                                 selectedProduct.productVariants.find(
//                                     (item) => item._id === value
//                                 );

//                             setSelectedVariant(variant);

//                         }}
//                     >

//                         {selectedProduct.productVariants.map((variant) => (

//                             <ToggleButton
//                                 key={variant._id}
//                                 value={variant._id}
//                             >

//                                 {
//                                     variant.attributes
//                                         ?.map(attr => attr.value)
//                                         .join(" / ")
//                                 }

//                             </ToggleButton>

//                         ))}

//                     </ToggleButtonGroup>

//                     {/* VARIANT DETAILS */}

//                     {selectedVariant && (

//                         <Box mt={3}>

//                             <Typography>
//                                 <b>Color :</b>{" "}
//                                 {selectedVariant.color || "-"}
//                             </Typography>

//                             <Typography>
//                                 <b>Stock :</b>{" "}
//                                 {selectedVariant.stock}
//                             </Typography>

//                             <Typography>
//                                 <b>SKU :</b>{" "}
//                                 {selectedVariant.sku}
//                             </Typography>

//                         </Box>

//                     )}

//                     {/* QUANTITY */}

//                     <Typography
//                         sx={{
//                             mt: 5,
//                             mb: 2,
//                             fontWeight: 600,
//                         }}
//                     >
//                         Quantity
//                     </Typography>

//                     <Box
//                         display="flex"
//                         alignItems="center"
//                         gap={2}
//                     >

//                         <IconButton
//                             onClick={() =>
//                                 setQuantity((q) =>
//                                     Math.max(1, q - 1)
//                                 )
//                             }
//                         >
//                             <RemoveIcon />
//                         </IconButton>

//                         <Typography>
//                             {quantity}
//                         </Typography>

//                         <IconButton
//                             onClick={() =>
//                                 setQuantity((q) => q + 1)
//                             }
//                         >
//                             <AddIcon />
//                         </IconButton>

//                     </Box>

//                     {/* ADD TO CART */}

//                     <Button
//                         variant="contained"
//                         onClick={handleAddToCart}
//                         sx={{
//                             mt: 5,
//                             background: "#C9A227",
//                             px: 5,
//                             py: 1.5,

//                             "&:hover": {
//                                 background: "#B08D57",
//                             },
//                         }}
//                     >
//                         Add To Cart
//                     </Button>

//                 </Box>

//             </Box>

//         </Box>

//     );

// };

// export default ProductDetails;
//------------------------------------------------
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

import CartDrawer from "../../components/cart/CartDrawer";


const ProductDetails = () => {

    const { id } = useParams();

    const dispatch = useDispatch();


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
    // LOCAL STATE
    // ============================================

    const [
        selectedVariant,
        setSelectedVariant,
    ] = useState(null);


    const [
        quantity,
        setQuantity,
    ] = useState(1);


    const [
        cartOpen,
        setCartOpen,
    ] = useState(false);


    // ============================================
    // GET PRODUCT
    // ============================================

    useEffect(() => {

        if (!id) {
            return;
        }

        setSelectedVariant(null);
        setQuantity(1);

        dispatch(
            getProductById(id)
        );

    }, [
        dispatch,
        id,
    ]);


    // ============================================
    // LOADING
    // ============================================

    if (loading) {

        return (
            <>
                <VisitorNavbar
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
                <VisitorNavbar
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
                    <Typography color="error">
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
                <VisitorNavbar
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
                    <Typography variant="h6">
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

        setQuantity(1);

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

        if (!selectedVariant) {

            alert(
                "Please select a size"
            );

            return;

        }


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


        if (
            quantity < 1 ||
            quantity > stock
        ) {

            alert(
                "Invalid quantity"
            );

            return;

        }


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

            await dispatch(
                addToCart(cartItem)
            ).unwrap();


            await dispatch(
                getCart()
            ).unwrap();


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
            <VisitorNavbar
                onCartClick={() =>
                    setCartOpen(true)
                }
            />


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
                        IMAGE
                    ================================= */}

                    <Box>

                   <Box
    sx={{
        width: "100%",
        maxWidth: 650,
        height: {
            xs: 500,
            md: 700,
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: 2,
        overflow: "hidden",
    }}
>
    <Box
        component="img"
        src={
            selectedProduct.images?.[0]?.url ||
            "/no-image.png"
        }
        alt={
            selectedProduct.productName ||
            "Product"
        }
        onError={(event) => {
            event.currentTarget.src =
                "/no-image.png";
        }}
        sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
        }}
    />
</Box>

                    </Box>


                    {/* =================================
                        DETAILS
                    ================================= */}

                    <Box>

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
                                selectedProduct.productName
                            }
                        </Typography>


                        {selectedProduct.description && (

                            <Typography
                                mt={2}
                                color="text.secondary"
                                sx={{
                                    lineHeight: 1.8,
                                }}
                            >
                                {
                                    selectedProduct.description
                                }
                            </Typography>

                        )}


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

                        {variants.length > 0 && (

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
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 1,
                                    }}
                                >

                                    {variants.map(
                                        (variant) => (

                                            <ToggleButton
                                                key={
                                                    variant._id
                                                }

                                                value={
                                                    variant._id
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
                                                            (attr) =>
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
                                    )}

                                </ToggleButtonGroup>

                            </>

                        )}


                        {/* =================================
                            SELECTED VARIANT
                        ================================= */}

                        {selectedVariant && (

                            <Box mt={3}>

                                <Typography>
                                    <b>Color:</b>{" "}

                                    {
                                        selectedVariant
                                            .color ||
                                        selectedVariant
                                            .attributes
                                            ?.find(
                                                (attr) =>
                                                    attr.colorCode
                                            )
                                            ?.colorCode ||
                                        "-"
                                    }
                                </Typography>


                                <Typography mt={1}>
                                    <b>Stock:</b>{" "}

                                    {
                                        selectedVariant.stock
                                    }
                                </Typography>


                                <Typography mt={1}>
                                    <b>SKU:</b>{" "}

                                    {
                                        selectedVariant.sku ||
                                        "-"
                                    }
                                </Typography>


                                <Typography mt={1}>
                                    <b>Barcode:</b>{" "}

                                    {
                                        selectedVariant.barcode ||
                                        "-"
                                    }
                                </Typography>

                            </Box>

                        )}


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
                                    textAlign: "center",
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