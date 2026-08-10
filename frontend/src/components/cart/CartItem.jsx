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
    // PRODUCT IMAGE
    // ============================================

    const imageUrl =
        item.product?.images?.[0]?.url ||
        "/no-image.png";


    // ============================================
    // INCREASE QUANTITY
    // ============================================

    const increase = async () => {

        await dispatch(
            updateCart({
                productId: item.product._id,
                quantity: item.quantity + 1,
            })
        );

        dispatch(getCart());
    };


    // ============================================
    // DECREASE QUANTITY
    // ============================================

    const decrease = async () => {

        if (item.quantity === 1) {
            return;
        }

        await dispatch(
            updateCart({
                productId: item.product._id,
                quantity: item.quantity - 1,
            })
        );

        dispatch(getCart());
    };


    // ============================================
    // REMOVE
    // ============================================

    const remove = async () => {

        await dispatch(
            removeCartItem(
                item.product._id
            )
        );

        dispatch(getCart());
    };


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

            {/* ================================= */}
            {/* PRODUCT IMAGE */}
            {/* ================================= */}

            <Box
                component="img"

                src={imageUrl}

                alt={
                    item.product?.productName ||
                    "Product"
                }

                onError={(event) => {

                    console.error(
                        "CART IMAGE ERROR:",
                        imageUrl
                    );

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
                }}
            />


            {/* ================================= */}
            {/* PRODUCT DETAILS */}
            {/* ================================= */}

            <Box
                sx={{
                    flex: 1,
                }}
            >

                <Typography
                    fontWeight={600}
                >
                    {
                        item.product?.productName
                    }
                </Typography>


                <Typography
                    color="text.secondary"
                >
                    ₹
                    {
                        item.product?.sellingPrice
                    }
                </Typography>


                {/* ============================= */}
                {/* QUANTITY */}
                {/* ============================= */}

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
                    >
                        <RemoveIcon />
                    </IconButton>


                    <Typography
                        mx={1}
                    >
                        {
                            item.quantity
                        }
                    </Typography>


                    <IconButton
                        onClick={increase}
                        size="small"
                    >
                        <AddIcon />
                    </IconButton>

                </Box>


                {/* ============================= */}
                {/* REMOVE */}
                {/* ============================= */}

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