// import {
//   Box,
//   Typography,
//   IconButton,
//   Button,
// } from "@mui/material";

// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import DeleteIcon from "@mui/icons-material/Delete";

// import { useDispatch } from "react-redux";

// import {
//   getCart,
//   updateCart,
//   removeCartItem,
// } from "../../features/cart/CartThunk";

// const CartItem = ({ item }) => {
//   const dispatch = useDispatch();
  

//   const increase = async () => {
//     await dispatch(
//       updateCart({
//         productId: item.product._id,
//         quantity: item.quantity + 1,
//       })
//     );

//     dispatch(getCart());
//   };

//   const decrease = async () => {
//     if (item.quantity === 1) return;

//     await dispatch(
//       updateCart({
//         productId: item.product._id,
//         quantity: item.quantity - 1,
//       })
//     );

//     dispatch(getCart());
//   };

//   const remove = async () => {
//     await dispatch(removeCartItem(item.product._id));

//     dispatch(getCart());
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         gap: 2,
//         p: 2,
//         mb: 2,
//         bgcolor: "#fff",
//         borderRadius: 2,
//       }}
//     >
//       {/* Product Image */}
//       <Box
//         component="img"
//         src={item.product.image}
//         alt={item.product.productName}
//         sx={{
//           width: 90,
//           height: 110,
//           objectFit: "cover",
//           borderRadius: 2,
//         }}
//       />

//       {/* Product Details */}
//       <Box sx={{ flex: 1 }}>
//         <Typography fontWeight={600}>
//           {item.product.productName}
//         </Typography>

//         <Typography color="text.secondary">
//         ₹{item.product.sellingPrice}
//         </Typography>

//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             mt: 1,
//           }}
//         >
//           <IconButton onClick={decrease}>
//             <RemoveIcon />
//           </IconButton>

//           <Typography mx={1}>
//             {item.quantity}
//           </Typography>

//           <IconButton onClick={increase}>
//             <AddIcon />
//           </IconButton>
//         </Box>

//         <Button
//           color="error"
//           startIcon={<DeleteIcon />}
//           onClick={remove}
//           sx={{ mt: 1 }}
//         >
//           Remove
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default CartItem;
//------------------------------------------------------------------

// import {
//     Box,
//     Typography,
//     IconButton,
//     Button,
// } from "@mui/material";

// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import DeleteIcon from "@mui/icons-material/Delete";

// import { useDispatch } from "react-redux";

// import {
//     getCart,
//     updateCart,
//     removeCartItem,
// } from "../../features/cart/CartThunk";

// const CartItem = ({ item }) => {

//     const dispatch = useDispatch();


//     // ============================================
//     // PRODUCT IMAGE
//     // ============================================

//     const imageUrl =
//         item.product?.images?.[0]?.url ||
//         "/no-image.png";


//     // ============================================
//     // INCREASE QUANTITY
//     // ============================================

//     const increase = async () => {

//         await dispatch(
//             updateCart({
//                 productId: item.product._id,
//                 quantity: item.quantity + 1,
//             })
//         );

//         dispatch(getCart());
//     };


//     // ============================================
//     // DECREASE QUANTITY
//     // ============================================

//     const decrease = async () => {

//         if (item.quantity === 1) {
//             return;
//         }

//         await dispatch(
//             updateCart({
//                 productId: item.product._id,
//                 quantity: item.quantity - 1,
//             })
//         );

//         dispatch(getCart());
//     };


//     // ============================================
//     // REMOVE
//     // ============================================

//     const remove = async () => {

//         await dispatch(
//             removeCartItem(
//                 item.product._id
//             )
//         );

//         dispatch(getCart());
//     };


//     return (

//         <Box
//             sx={{
//                 display: "flex",

//                 gap: 2,

//                 p: 2,

//                 mb: 2,

//                 bgcolor: "#fff",

//                 borderRadius: 2,
//             }}
//         >

//             {/* ================================= */}
//             {/* PRODUCT IMAGE */}
//             {/* ================================= */}

//             <Box
//                 component="img"

//                 src={imageUrl}

//                 alt={
//                     item.product?.productName ||
//                     "Product"
//                 }

//                 onError={(event) => {

//                     console.error(
//                         "CART IMAGE ERROR:",
//                         imageUrl
//                     );

//                     event.currentTarget.src =
//                         "/no-image.png";
//                 }}

//                 sx={{
//                     width: 90,

//                     height: 110,

//                     objectFit: "cover",

//                     borderRadius: 2,

//                     display: "block",

//                     backgroundColor: "#f5f5f5",
//                 }}
//             />


//             {/* ================================= */}
//             {/* PRODUCT DETAILS */}
//             {/* ================================= */}

//             <Box
//                 sx={{
//                     flex: 1,
//                 }}
//             >

//                 <Typography
//                     fontWeight={600}
//                 >
//                     {
//                         item.product?.productName
//                     }
//                 </Typography>


//                 <Typography
//                     color="text.secondary"
//                 >
//                     ₹
//                     {
//                         item.product?.sellingPrice
//                     }
//                 </Typography>


//                 {/* ============================= */}
//                 {/* QUANTITY */}
//                 {/* ============================= */}

//                 <Box
//                     sx={{
//                         display: "flex",

//                         alignItems: "center",

//                         mt: 1,
//                     }}
//                 >

//                     <IconButton
//                         onClick={decrease}
//                         size="small"
//                     >
//                         <RemoveIcon />
//                     </IconButton>


//                     <Typography
//                         mx={1}
//                     >
//                         {
//                             item.quantity
//                         }
//                     </Typography>


//                     <IconButton
//                         onClick={increase}
//                         size="small"
//                     >
//                         <AddIcon />
//                     </IconButton>

//                 </Box>


//                 {/* ============================= */}
//                 {/* REMOVE */}
//                 {/* ============================= */}

//                 <Button
//                     color="error"

//                     startIcon={
//                         <DeleteIcon />
//                     }

//                     onClick={remove}

//                     sx={{
//                         mt: 1,
//                     }}
//                 >
//                     Remove
//                 </Button>

//             </Box>

//         </Box>
//     );
// };

// export default CartItem;

import {
    Box,
    Typography,
    IconButton,
    Button,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDispatch } from "react-redux";

import {
    getCart,
    updateCart,
    removeCartItem,
} from "../../features/cart/CartThunk";

const CartItem = ({ item }) => {

    const dispatch = useDispatch();

    // ============================================
    // PRODUCT
    // ============================================

    const product = item.product;

    // ============================================
    // IMAGE
    // ============================================

    const imageUrl =
        product?.images?.[0]?.url ||
        "/no-image.png";

    // ============================================
    // SELECTED VARIANT
    // ============================================

    const variant =
        item.selectedVariant ||
        product?.productVariants?.find(
            (v) =>
                v._id?.toString() ===
                item.variant?.toString()
        );

    // ============================================
    // VARIANT DISPLAY
    // ============================================

    const variantText =
        variant?.attributes
            ?.map((attribute) => attribute.value)
            .filter(Boolean)
            .join(" / ") || null;

    // ============================================
    // INCREASE
    // ============================================

    const increase = async () => {

        try {

            await dispatch(
                updateCart({
                    itemId: item._id,
                    quantity: item.quantity + 1,
                })
            ).unwrap();

            await dispatch(
                getCart()
            ).unwrap();

        } catch (error) {

            console.error(
                "INCREASE CART ERROR:",
                error
            );
        }
    };

    // ============================================
    // DECREASE
    // ============================================

    const decrease = async () => {

        if (item.quantity <= 1) {
            return;
        }

        try {

            await dispatch(
                updateCart({
                    itemId: item._id,
                    quantity: item.quantity - 1,
                })
            ).unwrap();

            await dispatch(
                getCart()
            ).unwrap();

        } catch (error) {

            console.error(
                "DECREASE CART ERROR:",
                error
            );
        }
    };

    // ============================================
    // REMOVE
    // ============================================

    const remove = async () => {

        try {

            await dispatch(
                removeCartItem(item._id)
            ).unwrap();

            await dispatch(
                getCart()
            ).unwrap();

        } catch (error) {

            console.error(
                "REMOVE CART ERROR:",
                error
            );
        }
    };

    // ============================================
    // UI
    // ============================================

    return (

        <Box
            sx={{
                display: "flex",
                gap: 2,
                p: 2,
                mb: 2,
                bgcolor: "#fff",
                borderRadius: 2,
            }}
        >

            {/* IMAGE */}

            <Box
                component="img"
                src={imageUrl}
                alt={
                    product?.productName ||
                    "Product"
                }
                onError={(event) => {

                    event.currentTarget.src =
                        "/no-image.png";
                }}
                sx={{
                    width: 90,
                    height: 110,
                    objectFit: "cover",
                    borderRadius: 2,
                    display: "block",
                    backgroundColor: "#f5f5f5",
                    flexShrink: 0,
                }}
            />

            {/* DETAILS */}

            <Box
                sx={{
                    flex: 1,
                    minWidth: 0,
                }}
            >

                {/* PRODUCT NAME */}

                <Typography
                    fontWeight={600}
                >
                    {product?.productName}
                </Typography>

                {/* PRICE */}

                <Typography
                    color="text.secondary"
                >
                    ₹
                    {variant?.sellingPrice ??
                        product?.sellingPrice}
                </Typography>

                {/* VARIANT */}

                {variantText && (

                    <Typography
                        sx={{
                            mt: 0.5,
                            fontSize: 13,
                            color: "#666",
                        }}
                    >
                        {variantText}
                    </Typography>

                )}

                {/* SKU */}

                {variant?.sku && (

                    <Typography
                        sx={{
                            fontSize: 12,
                            color: "#888",
                        }}
                    >
                        SKU: {variant.sku}
                    </Typography>

                )}

                {/* QUANTITY */}

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: 1,
                    }}
                >

                    <IconButton
                        onClick={decrease}
                        size="small"
                        disabled={
                            item.quantity <= 1
                        }
                    >
                        <RemoveIcon />
                    </IconButton>

                    <Typography
                        mx={1}
                    >
                        {item.quantity}
                    </Typography>

                    <IconButton
                        onClick={increase}
                        size="small"
                    >
                        <AddIcon />
                    </IconButton>

                </Box>

                {/* REMOVE */}

                <Button
                    color="error"
                    startIcon={
                        <DeleteIcon />
                    }
                    onClick={remove}
                    sx={{
                        mt: 1,
                    }}
                >
                    Remove
                </Button>

            </Box>

        </Box>
    );
};

export default CartItem;