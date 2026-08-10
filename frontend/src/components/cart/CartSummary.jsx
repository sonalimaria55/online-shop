// import { Box, Typography, Button, Divider } from "@mui/material";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const CartSummary = () => {
//   const navigate = useNavigate();

//   const { items } = useSelector((state) => state.cart);

//   const subtotal = items.reduce((total, item) => {
//     return total + (item.product?.sellingPrice || 0) * item.quantity;
//   }, 0);

//   return (
//     <Box
//       sx={{
//         p: 2,
//         background: "#fff",
//         borderTop: "1px solid #ddd",
//       }}
//     >
//       <Divider sx={{ mb: 2 }} />

//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           mb: 1,
//         }}
//       >
//         <Typography>Subtotal</Typography>

//         <Typography fontWeight={600}>
//           ₹{subtotal}
//         </Typography>
//       </Box>

//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           mb: 3,
//         }}
//       >
//         <Typography>Estimated Total</Typography>

//         <Typography fontWeight={700}>
//           ₹{subtotal}
//         </Typography>
//       </Box>

//       <Button
//         fullWidth
//         variant="contained"
//         onClick={() => navigate("/boutique/checkout")}
//         sx={{
//           background: "#B08D57",
//           color: "#fff",
//           py: 1.5,
//           mb: 2,
//           "&:hover": {
//             background: "#967344",
//           },
//         }}
//       >
//         CHECKOUT
//       </Button>

//       <Button
//         fullWidth
//         variant="outlined"
//         onClick={() => navigate("/collections")}
//       >
//         Continue Shopping
//       </Button>
//     </Box>
//   );
// };

// export default CartSummary;
//------------------------------------
import {
    Box,
    Typography,
    Button,
    Divider,
} from "@mui/material";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartSummary = () => {

    const navigate = useNavigate();

    const {
        items = [],
    } = useSelector(
        (state) => state.cart
    );


    const subtotal = items.reduce(
        (total, item) => {

            const price =
                Number(
                    item.product?.sellingPrice
                ) || 0;

            const quantity =
                Number(
                    item.quantity
                ) || 0;

            return total + price * quantity;

        },
        0
    );


    return (

        <Box
            sx={{
                p: 2,
                background: "#fff",
                borderTop: "1px solid #ddd",
            }}
        >

            <Divider
                sx={{
                    mb: 2,
                }}
            />


            {/* SUBTOTAL */}

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                }}
            >

                <Typography>
                    Subtotal
                </Typography>

                <Typography
                    fontWeight={600}
                >
                    ₹{subtotal}
                </Typography>

            </Box>


            {/* TOTAL */}

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 3,
                }}
            >

                <Typography>
                    Estimated Total
                </Typography>

                <Typography
                    fontWeight={700}
                >
                    ₹{subtotal}
                </Typography>

            </Box>


            {/* CHECKOUT */}

            <Button
                fullWidth
                variant="contained"

                onClick={() =>
                    navigate(
                        "/boutique/checkout"
                    )
                }

                sx={{
                    background: "#B08D57",

                    color: "#fff",

                    py: 1.5,

                    mb: 2,

                    "&:hover": {
                        background: "#967344",
                    },
                }}
            >
                CHECKOUT
            </Button>


            {/* CONTINUE SHOPPING */}

            <Button
                fullWidth
                variant="outlined"

                onClick={() =>
                    navigate(
                        "/collections"
                    )
                }
            >
                CONTINUE SHOPPING
            </Button>

        </Box>
    );
};

export default CartSummary;