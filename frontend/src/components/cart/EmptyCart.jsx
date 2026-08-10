import {
    Box,
    Typography,
    Button,
} from "@mui/material";

import ShoppingBagOutlinedIcon
    from "@mui/icons-material/ShoppingBagOutlined";

const EmptyCart = ({
    onContinueShopping,
}) => {

    return (

        <Box
            sx={{
                minHeight: 350,

                display: "flex",

                flexDirection: "column",

                alignItems: "center",

                justifyContent: "center",

                textAlign: "center",

                px: 3,
            }}
        >

            <ShoppingBagOutlinedIcon
                sx={{
                    fontSize: 60,
                    color: "#B08D57",
                    mb: 2,
                }}
            />


            <Typography
                variant="h6"
                fontWeight={600}
                mb={1}
            >
                Your cart is empty
            </Typography>


            <Typography
                color="text.secondary"
                mb={3}
            >
                Looks like you haven't added
                anything to your cart yet.
            </Typography>


            <Button
                variant="contained"
                onClick={onContinueShopping}
                sx={{
                    background: "#B08D57",

                    "&:hover": {
                        background: "#967344",
                    },
                }}
            >
                CONTINUE SHOPPING
            </Button>

        </Box>
    );
};

export default EmptyCart;