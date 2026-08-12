import { useEffect } from "react";

import {
    Box,
    Container,
    Typography,
    Paper,
    Divider,
    CircularProgress,
    Alert,
    Chip,
} from "@mui/material";

import {
    useDispatch,
    useSelector,
} from "react-redux";

import {
    getMyOrders,
} from "../../features/orders/OrderThunk";


const Orders = () => {

    const dispatch = useDispatch();


    const {
        orders = [],
        loading,
        error,
    } = useSelector(
        (state) => state.orders
    );


    useEffect(() => {

        dispatch(
            getMyOrders()
        );

    }, [dispatch]);


    // ==================================================
    // LOADING
    // ==================================================

    if (loading) {

        return (

            <Box
                sx={{
                    minHeight: "70vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >

                <CircularProgress />

            </Box>

        );

    }


    return (

        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "#FAF8F3",
                py: 6,
            }}
        >

            <Container
                maxWidth="lg"
            >

                <Typography
                    variant="h4"
                    fontWeight={600}
                    mb={4}
                >
                    MY ORDERS
                </Typography>


                {error && (

                    <Alert
                        severity="error"
                        sx={{ mb: 3 }}
                    >
                        {error}
                    </Alert>

                )}


                {!orders.length ? (

                    <Paper
                        elevation={0}
                        sx={{
                            p: 5,
                            textAlign: "center",
                        }}
                    >

                        <Typography
                            variant="h6"
                        >
                            No orders yet
                        </Typography>


                        <Typography
                            color="text.secondary"
                            sx={{ mt: 1 }}
                        >
                            Your orders will appear
                            here after checkout.
                        </Typography>

                    </Paper>

                ) : (

                    orders.map(
                        (order) => (

                            <Paper
                                key={order._id}
                                elevation={0}
                                sx={{
                                    p: 3,
                                    mb: 3,
                                    backgroundColor:
                                        "#fff",
                                }}
                            >

                                {/* ================================= */}
                                {/* ORDER HEADER */}
                                {/* ================================= */}

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent:
                                            "space-between",
                                        alignItems:
                                            "center",
                                        gap: 2,
                                        flexWrap:
                                            "wrap",
                                    }}
                                >

                                    <Box>

                                        <Typography
                                            fontWeight={600}
                                        >
                                            {
                                                order.orderNumber
                                            }
                                        </Typography>


                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {
                                                new Date(
                                                    order.createdAt
                                                ).toLocaleDateString()
                                            }
                                        </Typography>

                                    </Box>


                                    <Box
                                        sx={{
                                            display:
                                                "flex",
                                            gap: 1,
                                        }}
                                    >

                                        <Chip
                                            label={
                                                order.paymentStatus
                                            }
                                            size="small"
                                        />

                                        <Chip
                                            label={
                                                order.orderStatus
                                            }
                                            size="small"
                                        />

                                    </Box>

                                </Box>


                                <Divider
                                    sx={{ my: 2 }}
                                />


                                {/* ================================= */}
                                {/* ITEMS */}
                                {/* ================================= */}

                                {order.items.map(
                                    (item, index) => (

                                        <Box
                                            key={
                                                `${order._id}-${index}`
                                            }
                                            sx={{
                                                display:
                                                    "flex",
                                                gap: 2,
                                                mb: 2,
                                            }}
                                        >

                                            <Box
                                                component="img"
                                                src={
                                                    item.image ||
                                                    "/no-image.png"
                                                }
                                                alt={
                                                    item.productName
                                                }
                                                sx={{
                                                    width: 70,
                                                    height: 85,
                                                    objectFit:
                                                        "cover",
                                                    backgroundColor:
                                                        "#f5f5f5",
                                                }}
                                            />


                                            <Box
                                                sx={{
                                                    flex: 1,
                                                }}
                                            >

                                                <Typography
                                                    fontWeight={500}
                                                >
                                                    {
                                                        item.productName
                                                    }
                                                </Typography>


                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    Qty: {
                                                        item.quantity
                                                    }
                                                </Typography>


                                                <Typography
                                                    sx={{
                                                        mt: 0.5,
                                                    }}
                                                >
                                                    ₹
                                                    {
                                                        Number(
                                                            item.price
                                                        ).toFixed(2)
                                                    }
                                                </Typography>

                                            </Box>

                                        </Box>

                                    )
                                )}


                                <Divider
                                    sx={{ my: 2 }}
                                />


                                {/* ================================= */}
                                {/* SHIPPING */}
                                {/* ================================= */}

                                <Typography
                                    fontWeight={600}
                                    mb={1}
                                >
                                    DELIVERY ADDRESS
                                </Typography>


                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {
                                        order.shippingAddress?.name
                                    }
                                    <br />

                                    {
                                        order.shippingAddress?.addressLine
                                    }
                                    <br />

                                    {
                                        order.shippingAddress?.city
                                    }
                                    ,{" "}
                                    {
                                        order.shippingAddress?.state
                                    }{" "}

                                    {
                                        order.shippingAddress?.pincode
                                    }
                                    <br />

                                    Phone:{" "}
                                    {
                                        order.shippingAddress?.phone
                                    }
                                </Typography>


                                <Box
                                    sx={{
                                        display:
                                            "flex",
                                        justifyContent:
                                            "flex-end",
                                        mt: 3,
                                    }}
                                >

                                    <Typography
                                        variant="h6"
                                        fontWeight={600}
                                    >
                                        Total: ₹
                                        {
                                            Number(
                                                order.totalAmount
                                            ).toFixed(2)
                                        }
                                    </Typography>

                                </Box>

                            </Paper>

                        )
                    )

                )}

            </Container>

        </Box>

    );

};


export default Orders;