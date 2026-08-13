// import { useEffect, useState } from "react";

// import {
//     Box,
//     Container,
//     Typography,
//     TextField,
//     Button,
//     Paper,
//     Divider,
//     Alert,
//     CircularProgress,
// } from "@mui/material";

// import { useDispatch, useSelector } from "react-redux";

// import { useNavigate } from "react-router-dom";

// import { createOrder } from "../../features/orders/OrderThunk";

// import {
//     createPaymentOrder,
//     verifyPayment,
// } from "../../features/payment/PaymentThunk";


// const Checkout = () => {

//     const dispatch = useDispatch();

//     const navigate = useNavigate();


//     // ==================================================
//     // CART
//     // ==================================================

//     const {
//         items = [],
//     } = useSelector(
//         (state) => state.cart
//     );


//     // ==================================================
//     // USER
//     // ==================================================

//     const user = useSelector(
//         (state) => state.auth?.user
//     );


//     // ==================================================
//     // RAZORPAY SDK
//     // ==================================================

//     const [razorpayLoaded, setRazorpayLoaded] =
//         useState(false);


//     // ==================================================
//     // FORM
//     // ==================================================

//     const [formData, setFormData] = useState({

//         name:
//             `${user?.firstName || ""} ${user?.lastName || ""}`.trim(),

//         phone:
//             user?.phone || "",

//         addressLine: "",

//         city: "",

//         state: "",

//         pincode: "",

//     });


//     // ==================================================
//     // STATE
//     // ==================================================

//     const [loading, setLoading] =
//         useState(false);

//     const [error, setError] =
//         useState("");


//     // ==================================================
//     // LOAD RAZORPAY SDK
//     // ==================================================

//     useEffect(() => {

//         // Already available
//         if (window.Razorpay) {

//             console.log(
//                 "RAZORPAY SDK ALREADY LOADED"
//             );

//             setRazorpayLoaded(true);

//             return;
//         }


//         const existingScript =
//             document.querySelector(
//                 'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
//             );


//         // Script already exists
//         if (existingScript) {

//             const handleLoad = () => {

//                 console.log(
//                     "RAZORPAY SDK LOADED"
//                 );

//                 setRazorpayLoaded(true);

//             };


//             const handleError = () => {

//                 console.error(
//                     "FAILED TO LOAD RAZORPAY SDK"
//                 );

//                 setRazorpayLoaded(false);

//                 setError(
//                     "Unable to load payment gateway. Please refresh and try again."
//                 );

//             };


//             existingScript.addEventListener(
//                 "load",
//                 handleLoad
//             );

//             existingScript.addEventListener(
//                 "error",
//                 handleError
//             );


//             return () => {

//                 existingScript.removeEventListener(
//                     "load",
//                     handleLoad
//                 );

//                 existingScript.removeEventListener(
//                     "error",
//                     handleError
//                 );

//             };
//         }


//         // Create Razorpay script
//         const script =
//             document.createElement("script");


//         script.src =
//             "https://checkout.razorpay.com/v1/checkout.js";


//         script.async = true;


//         script.onload = () => {

//             console.log(
//                 "RAZORPAY SDK LOADED"
//             );

//             setRazorpayLoaded(true);

//         };


//         script.onerror = () => {

//             console.error(
//                 "FAILED TO LOAD RAZORPAY SDK"
//             );

//             setRazorpayLoaded(false);

//             setError(
//                 "Unable to load payment gateway. Please refresh and try again."
//             );

//         };


//         document.body.appendChild(script);


//         // Do not remove Razorpay script
//         return () => {};

//     }, []);


//     // ==================================================
//     // UPDATE USER DATA
//     // ==================================================

//     useEffect(() => {

//         if (!user) {
//             return;
//         }


//         setFormData((previous) => ({

//             ...previous,

//             name:
//                 previous.name ||
//                 `${user.firstName || ""} ${user.lastName || ""}`.trim(),

//             phone:
//                 previous.phone ||
//                 user.phone ||
//                 "",

//         }));

//     }, [user]);


//     // ==================================================
//     // HANDLE INPUT
//     // ==================================================

//     const handleChange = (event) => {

//         const {
//             name,
//             value,
//         } = event.target;


//         setFormData((previous) => ({

//             ...previous,

//             [name]: value,

//         }));


//         setError("");

//     };


//     // ==================================================
//     // TOTAL AMOUNT
//     // ==================================================

//     const totalAmount =
//         items.reduce(
//             (
//                 total,
//                 item
//             ) => {

//                 if (!item?.product) {
//                     return total;
//                 }


//                 const product =
//                     item.product;


//                 const variant =
//                     item.selectedVariant ||
//                     product?.productVariants?.find(
//                         (variant) =>
//                             variant._id?.toString() ===
//                             item.variant?.toString()
//                     );


//                 const price =
//                     Number(
//                         variant?.sellingPrice ??
//                         product?.sellingPrice ??
//                         0
//                     );


//                 const quantity =
//                     Number(
//                         item.quantity || 0
//                     );


//                 return (
//                     total +
//                     price * quantity
//                 );

//             },
//             0
//         );


//     // ==================================================
//     // VALIDATE FORM
//     // ==================================================

//     const validateForm = () => {

//         if (!formData.name.trim()) {

//             return "Please enter your name.";

//         }


//         if (!formData.phone.trim()) {

//             return "Please enter your phone number.";

//         }


//         if (
//             !/^\d{10}$/.test(
//                 formData.phone.trim()
//             )
//         ) {

//             return "Please enter a valid 10-digit phone number.";

//         }


//         if (!formData.addressLine.trim()) {

//             return "Please enter your delivery address.";

//         }


//         if (!formData.city.trim()) {

//             return "Please enter your city.";

//         }


//         if (!formData.state.trim()) {

//             return "Please enter your state.";

//         }


//         if (!formData.pincode.trim()) {

//             return "Please enter your pincode.";

//         }


//         if (
//             !/^\d{6}$/.test(
//                 formData.pincode.trim()
//             )
//         ) {

//             return "Please enter a valid 6-digit pincode.";

//         }


//         return null;

//     };


//     // ==================================================
//     // HANDLE CHECKOUT
//     // ==================================================

//     const handleSubmit = async (
//         event
//     ) => {

//         event.preventDefault();


//         setError("");


//         // ==================================================
//         // EMPTY CART
//         // ==================================================

//         if (!items.length) {

//             setError(
//                 "Your cart is empty."
//             );

//             return;

//         }


//         // ==================================================
//         // VALIDATE FORM
//         // ==================================================

//         const validationError =
//             validateForm();


//         if (validationError) {

//             setError(
//                 validationError
//             );

//             return;

//         }


//         // ==================================================
//         // CHECK RAZORPAY SDK
//         // ==================================================

//         if (
//             !razorpayLoaded ||
//             !window.Razorpay
//         ) {

//             setError(
//                 "Payment gateway is still loading. Please wait a moment and try again."
//             );

//             return;

//         }


//         try {

//             setLoading(true);


//             // ==================================================
//             // STEP 1
//             // CREATE SERINA ORDER
//             // ==================================================

//             console.log(
//                 "CREATING SERINA ORDER..."
//             );


//             const order =
//                 await dispatch(
//                     createOrder(
//                         formData
//                     )
//                 ).unwrap();


//             console.log(
//                 "ORDER CREATED:",
//                 order
//             );


//             if (!order?._id) {

//                 throw new Error(
//                     "Order was created but order ID is missing."
//                 );

//             }


//             // ==================================================
//             // STEP 2
//             // CREATE RAZORPAY ORDER
//             // ==================================================

//             console.log(
//                 "CREATING RAZORPAY ORDER..."
//             );


//             const payment =
//                 await dispatch(
//                     createPaymentOrder(
//                         order._id
//                     )
//                 ).unwrap();


//             console.log(
//                 "RAZORPAY ORDER RESPONSE:",
//                 payment
//             );


//             // ==================================================
//             // STEP 3
//             // GET RAZORPAY ORDER
//             // ==================================================

//             const razorpayOrder =
//                 payment?.razorpayOrder;


//             console.log(
//                 "RAZORPAY ORDER:",
//                 razorpayOrder
//             );


//             // ==================================================
//             // STEP 4
//             // GET PUBLIC RAZORPAY KEY
//             // FROM BACKEND
//             // ==================================================

//             const razorpayKey =
//                 payment?.razorpayKeyId;


//             console.log(
//                 "RAZORPAY KEY FROM BACKEND:",
//                 razorpayKey
//             );


//             // ==================================================
//             // VALIDATE RAZORPAY KEY
//             // ==================================================

//             if (!razorpayKey) {

//                 throw new Error(
//                     "Razorpay public Key ID was not returned by the server."
//                 );

//             }


//             // ==================================================
//             // VALIDATE RAZORPAY ORDER
//             // ==================================================

//             if (!razorpayOrder?.id) {

//                 throw new Error(
//                     "Razorpay order ID was not returned by the server."
//                 );

//             }


//             if (!razorpayOrder?.amount) {

//                 throw new Error(
//                     "Razorpay order amount was not returned by the server."
//                 );

//             }


//             console.log(
//                 "RAZORPAY AMOUNT:",
//                 razorpayOrder.amount
//             );


//             console.log(
//                 "SERINA TOTAL:",
//                 totalAmount
//             );


//             // ==================================================
//             // STEP 5
//             // FINAL SDK CHECK
//             // ==================================================

//             if (!window.Razorpay) {

//                 throw new Error(
//                     "Razorpay SDK is not available."
//                 );

//             }


//             // ==================================================
//             // STEP 6
//             // RAZORPAY OPTIONS
//             // ==================================================

//             const options = {

//                 // IMPORTANT:
//                 // This comes from backend.
//                 // NOT from VITE env.
//                 key:
//                     razorpayKey,


//                 amount:
//                     razorpayOrder.amount,


//                 currency:
//                     razorpayOrder.currency ||
//                     "INR",


//                 name:
//                     "SERINA",


//                 description:
//                     `Order ${order.orderNumber}`,


//                 order_id:
//                     razorpayOrder.id,


//                 // ==================================================
//                 // PAYMENT SUCCESS
//                 // ==================================================

//                 handler:
//                     async (
//                         response
//                     ) => {

//                         console.log(
//                             "RAZORPAY PAYMENT SUCCESS:",
//                             response
//                         );


//                         try {

//                             setLoading(true);


//                             // ==================================================
//                             // VERIFY PAYMENT
//                             // ==================================================

//                             console.log(
//                                 "VERIFYING PAYMENT..."
//                             );


//                             const result =
//                                 await dispatch(
//                                     verifyPayment({

//                                         orderId:
//                                             order._id,

//                                         razorpayOrderId:
//                                             response.razorpay_order_id,

//                                         razorpayPaymentId:
//                                             response.razorpay_payment_id,

//                                         razorpaySignature:
//                                             response.razorpay_signature,

//                                     })
//                                 ).unwrap();


//                             console.log(
//                                 "PAYMENT VERIFIED:",
//                                 result
//                             );


//                             // ==================================================
//                             // SUCCESS
//                             // ==================================================

//                             navigate(
//                                 "/boutique/orders"
//                             );

//                         } catch (
//                             verificationError
//                         ) {

//                             console.error(
//                                 "PAYMENT VERIFICATION ERROR:",
//                                 verificationError
//                             );


//                             const message =
//                                 typeof verificationError ===
//                                 "string"

//                                     ? verificationError

//                                     : verificationError?.message ||
//                                       "Payment verification failed. Please contact support.";


//                             setError(
//                                 message
//                             );

//                         } finally {

//                             setLoading(false);

//                         }

//                     },


//                 // ==================================================
//                 // PREFILL
//                 // ==================================================

//                 prefill: {

//                     name:
//                         formData.name,

//                     email:
//                         user?.email || "",

//                     contact:
//                         formData.phone,

//                 },


//                 // ==================================================
//                 // NOTES
//                 // ==================================================

//                 notes: {

//                     orderId:
//                         order._id,

//                     orderNumber:
//                         order.orderNumber,

//                 },


//                 // ==================================================
//                 // THEME
//                 // ==================================================

//                 theme: {

//                     color:
//                         "#C9A227",

//                 },


//                 // ==================================================
//                 // MODAL
//                 // ==================================================

//                 modal: {

//                     ondismiss: () => {

//                         console.log(
//                             "RAZORPAY CHECKOUT CLOSED"
//                         );

//                         setLoading(false);

//                     },

//                 },

//             };


//             // ==================================================
//             // STEP 7
//             // OPEN RAZORPAY
//             // ==================================================

//             console.log(
//                 "OPENING RAZORPAY..."
//             );


//             const razorpay =
//                 new window.Razorpay(
//                     options
//                 );


//             // ==================================================
//             // PAYMENT FAILED
//             // ==================================================

//             razorpay.on(
//                 "payment.failed",
//                 (response) => {

//                     console.error(
//                         "RAZORPAY PAYMENT FAILED:",
//                         response
//                     );


//                     const paymentError =
//                         response?.error;


//                     console.error(
//                         "RAZORPAY ERROR CODE:",
//                         paymentError?.code
//                     );


//                     console.error(
//                         "RAZORPAY ERROR DESCRIPTION:",
//                         paymentError?.description
//                     );


//                     console.error(
//                         "RAZORPAY ERROR REASON:",
//                         paymentError?.reason
//                     );


//                     console.error(
//                         "RAZORPAY ERROR STEP:",
//                         paymentError?.step
//                     );


//                     setError(
//                         paymentError?.description ||
//                         "Payment failed. Please try again."
//                     );


//                     setLoading(false);

//                 }
//             );


//             razorpay.open();


//         } catch (error) {

//             console.error(
//                 "CHECKOUT ERROR:",
//                 error
//             );


//             // ==================================================
//             // EXTRACT ERROR MESSAGE
//             // ==================================================

//             const message =

//                 error?.response?.data?.message ||

//                 error?.message ||

//                 (
//                     typeof error === "string"
//                         ? error
//                         : "Unable to process checkout."
//                 );


//             setError(
//                 message
//             );


//             setLoading(false);

//         }

//     };


//     // ==================================================
//     // UI
//     // ==================================================

//     return (

//         <Box
//             sx={{
//                 minHeight: "100vh",

//                 backgroundColor:
//                     "#FAF8F3",

//                 py: 6,
//             }}
//         >

//             <Container
//                 maxWidth="lg"
//             >

//                 {/* ==========================================
//                     TITLE
//                 ========================================== */}

//                 <Typography
//                     variant="h4"
//                     fontWeight={600}
//                     mb={4}
//                 >
//                     CHECKOUT
//                 </Typography>


//                 {/* ==========================================
//                     ERROR
//                 ========================================== */}

//                 {error && (

//                     <Alert
//                         severity="error"
//                         sx={{
//                             mb: 3,
//                         }}
//                         onClose={() =>
//                             setError("")
//                         }
//                     >

//                         {typeof error === "string"
//                             ? error
//                             : error?.message ||
//                               "Checkout failed"}

//                     </Alert>

//                 )}


//                 {/* ==========================================
//                     RAZORPAY STATUS
//                 ========================================== */}

//                 {!razorpayLoaded && (

//                     <Alert
//                         severity="info"
//                         sx={{
//                             mb: 3,
//                         }}
//                     >
//                         Loading secure payment gateway...
//                     </Alert>

//                 )}


//                 {/* ==========================================
//                     MAIN GRID
//                 ========================================== */}

//                 <Box
//                     sx={{
//                         display: "grid",

//                         gridTemplateColumns: {
//                             xs: "1fr",

//                             md: "1.5fr 1fr",
//                         },

//                         gap: 4,
//                     }}
//                 >


//                     {/* ======================================
//                         SHIPPING ADDRESS
//                     ====================================== */}

//                     <Paper
//                         elevation={0}
//                         sx={{
//                             p: 4,

//                             backgroundColor:
//                                 "#fff",
//                         }}
//                     >

//                         <Typography
//                             variant="h6"
//                             fontWeight={600}
//                             mb={3}
//                         >
//                             SHIPPING ADDRESS
//                         </Typography>


//                         <Box
//                             component="form"
//                             onSubmit={
//                                 handleSubmit
//                             }
//                         >


//                             {/* NAME */}

//                             <TextField
//                                 fullWidth

//                                 label="Full Name"

//                                 name="name"

//                                 value={
//                                     formData.name
//                                 }

//                                 onChange={
//                                     handleChange
//                                 }

//                                 required

//                                 sx={{
//                                     mb: 2,
//                                 }}
//                             />


//                             {/* PHONE */}

//                             <TextField
//                                 fullWidth

//                                 label="Phone Number"

//                                 name="phone"

//                                 value={
//                                     formData.phone
//                                 }

//                                 onChange={
//                                     handleChange
//                                 }

//                                 required

//                                 inputProps={{
//                                     maxLength: 10,
//                                     inputMode: "numeric",
//                                 }}

//                                 sx={{
//                                     mb: 2,
//                                 }}
//                             />


//                             {/* ADDRESS */}

//                             <TextField
//                                 fullWidth

//                                 label="Address"

//                                 name="addressLine"

//                                 value={
//                                     formData.addressLine
//                                 }

//                                 onChange={
//                                     handleChange
//                                 }

//                                 required

//                                 multiline

//                                 rows={3}

//                                 sx={{
//                                     mb: 2,
//                                 }}
//                             />


//                             {/* CITY */}

//                             <TextField
//                                 fullWidth

//                                 label="City"

//                                 name="city"

//                                 value={
//                                     formData.city
//                                 }

//                                 onChange={
//                                     handleChange
//                                 }

//                                 required

//                                 sx={{
//                                     mb: 2,
//                                 }}
//                             />


//                             {/* STATE */}

//                             <TextField
//                                 fullWidth

//                                 label="State"

//                                 name="state"

//                                 value={
//                                     formData.state
//                                 }

//                                 onChange={
//                                     handleChange
//                                 }

//                                 required

//                                 sx={{
//                                     mb: 2,
//                                 }}
//                             />


//                             {/* PINCODE */}

//                             <TextField
//                                 fullWidth

//                                 label="Pincode"

//                                 name="pincode"

//                                 value={
//                                     formData.pincode
//                                 }

//                                 onChange={
//                                     handleChange
//                                 }

//                                 required

//                                 inputProps={{
//                                     maxLength: 6,
//                                     inputMode: "numeric",
//                                 }}

//                                 sx={{
//                                     mb: 3,
//                                 }}
//                             />


//                             {/* ==================================
//                                 PAYMENT BUTTON
//                             ================================== */}

//                             <Button
//                                 type="submit"

//                                 fullWidth

//                                 variant="contained"

//                                 disabled={
//                                     loading ||
//                                     !items.length ||
//                                     !razorpayLoaded
//                                 }

//                                 sx={{
//                                     py: 1.5,

//                                     backgroundColor:
//                                         "#C9A227",

//                                     color:
//                                         "#fff",

//                                     "&:hover": {
//                                         backgroundColor:
//                                             "#b18d20",
//                                     },

//                                     "&:disabled": {
//                                         backgroundColor:
//                                             "#d8c47b",
//                                     },
//                                 }}
//                             >

//                                 {loading ? (

//                                     <Box
//                                         sx={{
//                                             display:
//                                                 "flex",

//                                             alignItems:
//                                                 "center",

//                                             gap: 1,
//                                         }}
//                                     >

//                                         <CircularProgress
//                                             size={20}
//                                             sx={{
//                                                 color:
//                                                     "#fff",
//                                             }}
//                                         />

//                                         PROCESSING...

//                                     </Box>

//                                 ) : !razorpayLoaded ? (

//                                     "LOADING PAYMENT..."

//                                 ) : (

//                                     "PROCEED TO PAYMENT"

//                                 )}

//                             </Button>

//                         </Box>

//                     </Paper>


//                     {/* ======================================
//                         ORDER SUMMARY
//                     ====================================== */}

//                     <Paper
//                         elevation={0}
//                         sx={{
//                             p: 4,

//                             backgroundColor:
//                                 "#fff",

//                             height:
//                                 "fit-content",
//                         }}
//                     >

//                         <Typography
//                             variant="h6"
//                             fontWeight={600}
//                             mb={3}
//                         >
//                             ORDER SUMMARY
//                         </Typography>


//                         {/* ==================================
//                             EMPTY CART
//                         ================================== */}

//                         {!items.length && (

//                             <Typography
//                                 color="text.secondary"
//                             >
//                                 Your cart is empty.
//                             </Typography>

//                         )}


//                         {/* ==================================
//                             CART ITEMS
//                         ================================== */}

//                         {items.map(
//                             (
//                                 item
//                             ) => {

//                                 if (
//                                     !item?.product
//                                 ) {

//                                     return null;

//                                 }


//                                 const product =
//                                     item.product;


//                                 const variant =
//                                     item.selectedVariant ||
//                                     product?.productVariants?.find(
//                                         (
//                                             variant
//                                         ) =>
//                                             variant._id?.toString() ===
//                                             item.variant?.toString()
//                                     );


//                                 const price =
//                                     Number(
//                                         variant?.sellingPrice ??
//                                         product?.sellingPrice ??
//                                         0
//                                     );


//                                 const quantity =
//                                     Number(
//                                         item.quantity || 0
//                                     );


//                                 return (

//                                     <Box
//                                         key={
//                                             item._id
//                                         }

//                                         sx={{
//                                             mb: 2,
//                                         }}
//                                     >

//                                         <Box
//                                             sx={{
//                                                 display:
//                                                     "flex",

//                                                 justifyContent:
//                                                     "space-between",

//                                                 gap: 2,
//                                             }}
//                                         >

//                                             <Typography>

//                                                 {
//                                                     product.productName
//                                                 }

//                                             </Typography>


//                                             <Typography
//                                                 sx={{
//                                                     whiteSpace:
//                                                         "nowrap",
//                                                 }}
//                                             >

//                                                 ₹
//                                                 {
//                                                     (
//                                                         price *
//                                                         quantity
//                                                     ).toFixed(2)
//                                                 }

//                                             </Typography>

//                                         </Box>


//                                         <Typography
//                                             sx={{
//                                                 fontSize: 13,

//                                                 color:
//                                                     "#777",

//                                                 mt: 0.5,
//                                             }}
//                                         >

//                                             Qty:{" "}
//                                             {
//                                                 quantity
//                                             }

//                                         </Typography>


//                                         {variant?.attributes?.length > 0 && (

//                                             <Typography
//                                                 sx={{
//                                                     fontSize: 13,

//                                                     color:
//                                                         "#777",

//                                                     mt: 0.5,
//                                                 }}
//                                             >

//                                                 {variant.attributes
//                                                     .map(
//                                                         (
//                                                             attribute
//                                                         ) =>
//                                                             attribute.value
//                                                     )
//                                                     .join(", ")}

//                                             </Typography>

//                                         )}

//                                     </Box>

//                                 );

//                             }
//                         )}


//                         <Divider
//                             sx={{
//                                 my: 2,
//                             }}
//                         />


//                         {/* ==================================
//                             TOTAL
//                         ================================== */}

//                         <Box
//                             sx={{
//                                 display:
//                                     "flex",

//                                 justifyContent:
//                                     "space-between",
//                             }}
//                         >

//                             <Typography
//                                 fontWeight={600}
//                             >
//                                 TOTAL
//                             </Typography>


//                             <Typography
//                                 fontWeight={600}
//                             >

//                                 ₹
//                                 {
//                                     totalAmount.toFixed(
//                                         2
//                                     )
//                                 }

//                             </Typography>

//                         </Box>

//                     </Paper>

//                 </Box>

//             </Container>

//         </Box>

//     );

// };


// export default Checkout;
//------------------------------------
import { useEffect, useState } from "react";

import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Paper,
    Divider,
    Alert,
    CircularProgress,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createOrder } from "../../features/orders/OrderThunk";

import {
    createPaymentOrder,
    verifyPayment,
} from "../../features/payment/PaymentThunk";


const Checkout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    // ==================================================
    // CART
    // ==================================================

    const {
        items = [],
    } = useSelector(
        (state) => state.cart
    );


    // ==================================================
    // USER
    // ==================================================

    const user = useSelector(
        (state) => state.auth?.user
    );


    // ==================================================
    // RAZORPAY SDK
    // ==================================================

    const [
        razorpayLoaded,
        setRazorpayLoaded,
    ] = useState(false);


    // ==================================================
    // FORM
    // ==================================================

    const [
        formData,
        setFormData,
    ] = useState({
        name: "",
        phone: "",
        addressLine: "",
        city: "",
        state: "",
        pincode: "",
    });


    // ==================================================
    // STATE
    // ==================================================

    const [
        loading,
        setLoading,
    ] = useState(false);

    const [
        error,
        setError,
    ] = useState("");


    // ==================================================
    // LOAD USER DATA
    // ==================================================

    useEffect(() => {

        if (!user) {
            return;
        }

        setFormData(
            (previous) => ({
                ...previous,

                name:
                    previous.name ||
                    `${user.firstName || ""} ${user.lastName || ""}`.trim(),

                phone:
                    previous.phone ||
                    user.phone ||
                    "",
            })
        );

    }, [user]);


    // ==================================================
    // LOAD RAZORPAY SDK
    // ==================================================

    useEffect(() => {

        console.log(
            "CHECKING RAZORPAY SDK..."
        );


        // Already loaded
        if (window.Razorpay) {

            console.log(
                "RAZORPAY SDK ALREADY LOADED"
            );

            setRazorpayLoaded(true);

            return;
        }


        // Check if script already exists
        const existingScript =
            document.querySelector(
                'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
            );


        if (existingScript) {

            const handleLoad = () => {

                console.log(
                    "RAZORPAY SDK LOADED"
                );

                setRazorpayLoaded(true);
            };


            const handleError = () => {

                console.error(
                    "FAILED TO LOAD RAZORPAY SDK"
                );

                setRazorpayLoaded(false);

                setError(
                    "Unable to load Razorpay payment gateway."
                );
            };


            existingScript.addEventListener(
                "load",
                handleLoad
            );

            existingScript.addEventListener(
                "error",
                handleError
            );


            return () => {

                existingScript.removeEventListener(
                    "load",
                    handleLoad
                );

                existingScript.removeEventListener(
                    "error",
                    handleError
                );
            };
        }


        // Create Razorpay script
        const script =
            document.createElement("script");

        script.src =
            "https://checkout.razorpay.com/v1/checkout.js";

        script.async = true;


        script.onload = () => {

            console.log(
                "RAZORPAY SDK LOADED"
            );

            setRazorpayLoaded(true);
        };


        script.onerror = () => {

            console.error(
                "FAILED TO LOAD RAZORPAY SDK"
            );

            setRazorpayLoaded(false);

            setError(
                "Unable to load Razorpay payment gateway. Please refresh and try again."
            );
        };


        document.body.appendChild(
            script
        );


        return () => {

            // Do not remove the script.
            // Other components may use Razorpay.
        };

    }, []);


    // ==================================================
    // HANDLE INPUT
    // ==================================================

    const handleChange = (
        event
    ) => {

        const {
            name,
            value,
        } = event.target;


        setFormData(
            (previous) => ({
                ...previous,
                [name]: value,
            })
        );


        setError("");
    };


    // ==================================================
    // FIND VARIANT
    // ==================================================

    const getVariant = (
        item
    ) => {

        const product =
            item?.product;

        if (!product) {
            return null;
        }


        // If selectedVariant already exists
        if (
            item?.selectedVariant
        ) {
            return item.selectedVariant;
        }


        // Otherwise find variant using cart variant ID
        if (
            item?.variant &&
            product?.productVariants?.length
        ) {

            return product.productVariants.find(
                (variant) =>
                    variant?._id?.toString() ===
                    item.variant?.toString()
            );
        }


        return null;
    };


    // ==================================================
    // TOTAL
    // ==================================================

    const totalAmount =
        items.reduce(
            (
                total,
                item
            ) => {

                if (!item?.product) {
                    return total;
                }


                const product =
                    item.product;

                const variant =
                    getVariant(item);


                const price =
                    Number(
                        variant?.sellingPrice ??
                        product?.sellingPrice ??
                        0
                    );


                const quantity =
                    Number(
                        item.quantity || 0
                    );


                return (
                    total +
                    price * quantity
                );
            },
            0
        );


    // ==================================================
    // VALIDATE FORM
    // ==================================================

    const validateForm = () => {

        if (
            !formData.name.trim()
        ) {

            return "Please enter your name.";
        }


        if (
            !formData.phone.trim()
        ) {

            return "Please enter your phone number.";
        }


        if (
            !/^\d{10}$/.test(
                formData.phone.trim()
            )
        ) {

            return "Please enter a valid 10-digit phone number.";
        }


        if (
            !formData.addressLine.trim()
        ) {

            return "Please enter your delivery address.";
        }


        if (
            !formData.city.trim()
        ) {

            return "Please enter your city.";
        }


        if (
            !formData.state.trim()
        ) {

            return "Please enter your state.";
        }


        if (
            !formData.pincode.trim()
        ) {

            return "Please enter your pincode.";
        }


        if (
            !/^\d{6}$/.test(
                formData.pincode.trim()
            )
        ) {

            return "Please enter a valid 6-digit pincode.";
        }


        return null;
    };


    // ==================================================
    // GET ERROR MESSAGE
    // ==================================================

    const getErrorMessage = (
        error
    ) => {

        if (!error) {
            return "Unable to process checkout.";
        }


        if (
            typeof error ===
            "string"
        ) {

            return error;
        }


        if (
            error?.response?.data?.message
        ) {

            return error.response.data.message;
        }


        if (
            error?.message
        ) {

            return error.message;
        }


        if (
            error?.payload?.message
        ) {

            return error.payload.message;
        }


        if (
            error?.error?.message
        ) {

            return error.error.message;
        }


        return "Unable to process checkout.";
    };


    // ==================================================
    // HANDLE SUBMIT
    // ==================================================

    const handleSubmit = async (
        event
    ) => {

        event.preventDefault();


        setError("");


        // ------------------------------------------------
        // EMPTY CART
        // ------------------------------------------------

        if (
            !items.length
        ) {

            setError(
                "Your cart is empty."
            );

            return;
        }


        // ------------------------------------------------
        // VALIDATE FORM
        // ------------------------------------------------

        const validationError =
            validateForm();


        if (
            validationError
        ) {

            setError(
                validationError
            );

            return;
        }


        // ------------------------------------------------
        // CHECK RAZORPAY
        // ------------------------------------------------

        if (
            !razorpayLoaded ||
            !window.Razorpay
        ) {

            setError(
                "Payment gateway is still loading. Please wait a moment and try again."
            );

            return;
        }


        try {

            setLoading(true);


            // ==================================================
            // STEP 1
            // CREATE SERINA ORDER
            // ==================================================

            console.log(
                "======================================"
            );

            console.log(
                "STEP 1: CREATING SERINA ORDER..."
            );


            const order =
                await dispatch(
                    createOrder(
                        formData
                    )
                ).unwrap();


            console.log(
                "ORDER CREATED:",
                order
            );


            if (
                !order?._id
            ) {

                throw new Error(
                    "Order was created but order ID is missing."
                );
            }


            console.log(
                "SERINA ORDER ID:",
                order._id
            );


            // ==================================================
            // STEP 2
            // CREATE RAZORPAY ORDER
            // ==================================================

            console.log(
                "STEP 2: CREATING RAZORPAY ORDER..."
            );


            const payment =
                await dispatch(
                    createPaymentOrder(
                        order._id
                    )
                ).unwrap();


            console.log(
                "RAZORPAY ORDER RESPONSE:",
                payment
            );


            // ==================================================
            // GET RAZORPAY ORDER
            // ==================================================

            const razorpayOrder =
                payment?.razorpayOrder;


            if (
                !razorpayOrder?.id
            ) {

                console.error(
                    "INVALID RAZORPAY ORDER:",
                    payment
                );

                throw new Error(
                    "Razorpay order ID was not returned by server."
                );
            }


            console.log(
                "RAZORPAY ORDER ID:",
                razorpayOrder.id
            );


            console.log(
                "RAZORPAY AMOUNT:",
                razorpayOrder.amount
            );


            console.log(
                "SERINA TOTAL:",
                totalAmount
            );


            // ==================================================
            // GET PUBLIC RAZORPAY KEY
            // ==================================================

            const razorpayKey =
                payment?.razorpayKeyId ||
                payment?.keyId ||
                payment?.razorpayKey;


            console.log(
                "RAZORPAY PUBLIC KEY:",
                razorpayKey
            );


            if (
                !razorpayKey
            ) {

                throw new Error(
                    "Razorpay public Key ID was not returned by the server."
                );
            }


            // ==================================================
            // SDK CHECK
            // ==================================================

            if (
                !window.Razorpay
            ) {

                throw new Error(
                    "Razorpay SDK is not available."
                );
            }


            // ==================================================
            // STEP 3
            // RAZORPAY OPTIONS
            // ==================================================

            console.log(
                "STEP 3: PREPARING RAZORPAY CHECKOUT..."
            );


            const options = {

                key:
                    razorpayKey,


                amount:
                    razorpayOrder.amount,


                currency:
                    razorpayOrder.currency ||
                    "INR",


                name:
                    "SERINA",


                description:
                    `Order ${order.orderNumber}`,


                order_id:
                    razorpayOrder.id,


                // ==================================================
                // PAYMENT SUCCESS
                // ==================================================

                handler:
                    async (
                        response
                    ) => {

                        console.log(
                            "======================================"
                        );

                        console.log(
                            "RAZORPAY PAYMENT SUCCESS:",
                            response
                        );


                        try {

                            setLoading(
                                true
                            );


                            // ==================================================
                            // VALIDATE RAZORPAY RESPONSE
                            // ==================================================

                            if (
                                !response?.razorpay_order_id
                            ) {

                                throw new Error(
                                    "Razorpay order ID is missing from payment response."
                                );
                            }


                            if (
                                !response?.razorpay_payment_id
                            ) {

                                throw new Error(
                                    "Razorpay payment ID is missing from payment response."
                                );
                            }


                            if (
                                !response?.razorpay_signature
                            ) {

                                throw new Error(
                                    "Razorpay payment signature is missing from payment response."
                                );
                            }


                            console.log(
                                "VERIFYING PAYMENT..."
                            );


                            // ==================================================
                            // STEP 4
                            // VERIFY PAYMENT
                            // ==================================================

                            const result =
                                await dispatch(
                                    verifyPayment({
                                        orderId:
                                            order._id,

                                        razorpayOrderId:
                                            response.razorpay_order_id,

                                        razorpayPaymentId:
                                            response.razorpay_payment_id,

                                        razorpaySignature:
                                            response.razorpay_signature,
                                    })
                                ).unwrap();


                            console.log(
                                "PAYMENT VERIFIED:",
                                result
                            );


                            // ==================================================
                            // STEP 5
                            // SUCCESS
                            // ==================================================

                            console.log(
                                "PAYMENT SUCCESSFULLY VERIFIED"
                            );


                            navigate(
                                "/boutique/orders"
                            );

                        } catch (
                            verificationError
                        ) {

                            console.error(
                                "======================================"
                            );

                            console.error(
                                "PAYMENT VERIFICATION ERROR:"
                            );

                            console.error(
                                "RAW:",
                                verificationError
                            );

                            console.error(
                                "MESSAGE:",
                                verificationError?.message
                            );

                            console.error(
                                "RESPONSE:",
                                verificationError?.response
                            );

                            console.error(
                                "RESPONSE DATA:",
                                verificationError?.response?.data
                            );


                            const message =
                                getErrorMessage(
                                    verificationError
                                );


                            setError(
                                message
                            );

                        } finally {

                            setLoading(
                                false
                            );
                        }
                    },


                // ==================================================
                // PREFILL
                // ==================================================

                prefill: {

                    name:
                        formData.name,

                    email:
                        user?.email || "",

                    contact:
                        formData.phone,
                },


                // ==================================================
                // NOTES
                // ==================================================

                notes: {

                    orderId:
                        order._id,

                    orderNumber:
                        order.orderNumber,
                },


                // ==================================================
                // THEME
                // ==================================================

                theme: {

                    color:
                        "#C9A227",
                },


                // ==================================================
                // MODAL
                // ==================================================

                modal: {

                    ondismiss:
                        () => {

                            console.log(
                                "RAZORPAY CHECKOUT CLOSED"
                            );

                            setLoading(
                                false
                            );
                        },
                },
            };


            // ==================================================
            // STEP 4
            // OPEN RAZORPAY
            // ==================================================

            console.log(
                "OPENING RAZORPAY..."
            );


            const razorpay =
                new window.Razorpay(
                    options
                );


            // ==================================================
            // PAYMENT FAILED
            // ==================================================

            razorpay.on(
                "payment.failed",
                (
                    response
                ) => {

                    console.error(
                        "======================================"
                    );

                    console.error(
                        "RAZORPAY PAYMENT FAILED:"
                    );

                    console.error(
                        "FULL RESPONSE:",
                        response
                    );

                    console.error(
                        "CODE:",
                        response?.error?.code
                    );

                    console.error(
                        "DESCRIPTION:",
                        response?.error?.description
                    );

                    console.error(
                        "REASON:",
                        response?.error?.reason
                    );

                    console.error(
                        "STEP:",
                        response?.error?.step
                    );


                    setError(
                        response?.error?.description ||
                        "Payment failed. Please try again."
                    );


                    setLoading(
                        false
                    );
                }
            );


            razorpay.open();


            // Razorpay is now handling the payment.
            // Do not show PROCESSING forever.
            setLoading(
                false
            );

        } catch (
            checkoutError
        ) {

            // ==================================================
            // MAIN CHECKOUT ERROR
            // ==================================================

            console.error(
                "======================================"
            );

            console.error(
                "CHECKOUT ERROR:"
            );

            console.error(
                "RAW ERROR:",
                checkoutError
            );

            console.error(
                "ERROR MESSAGE:",
                checkoutError?.message
            );

            console.error(
                "ERROR RESPONSE:",
                checkoutError?.response
            );

            console.error(
                "ERROR RESPONSE DATA:",
                checkoutError?.response?.data
            );

            console.error(
                "ERROR STATUS:",
                checkoutError?.response?.status
            );

            console.error(
                "ERROR PAYLOAD:",
                checkoutError?.payload
            );

            console.error(
                "ERROR STACK:",
                checkoutError?.stack
            );


            const message =
                getErrorMessage(
                    checkoutError
                );


            setError(
                message
            );


            setLoading(
                false
            );
        }
    };


    // ==================================================
    // UI
    // ==================================================

    return (

        <Box
            sx={{
                minHeight:
                    "100vh",

                backgroundColor:
                    "#FAF8F3",

                py: 6,
            }}
        >

            <Container
                maxWidth="lg"
            >

                {/* ================================= */}
                {/* TITLE */}
                {/* ================================= */}

                <Typography
                    variant="h4"
                    fontWeight={600}
                    mb={4}
                >
                    CHECKOUT
                </Typography>


                {/* ================================= */}
                {/* ERROR */}
                {/* ================================= */}

                {error && (

                    <Alert
                        severity="error"
                        sx={{
                            mb: 3,
                        }}
                        onClose={() =>
                            setError("")
                        }
                    >
                        {error}
                    </Alert>
                )}


                {/* ================================= */}
                {/* RAZORPAY STATUS */}
                {/* ================================= */}

                {!razorpayLoaded && (

                    <Alert
                        severity="info"
                        sx={{
                            mb: 3,
                        }}
                    >
                        Loading secure payment gateway...
                    </Alert>
                )}


                {/* ================================= */}
                {/* MAIN GRID */}
                {/* ================================= */}

                <Box
                    sx={{
                        display:
                            "grid",

                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "1.5fr 1fr",
                        },

                        gap: 4,
                    }}
                >

                    {/* ================================= */}
                    {/* SHIPPING */}
                    {/* ================================= */}

                    <Paper
                        elevation={0}
                        sx={{
                            p: 4,
                            backgroundColor:
                                "#FFFFFF",
                        }}
                    >

                        <Typography
                            variant="h6"
                            fontWeight={600}
                            mb={3}
                        >
                            SHIPPING ADDRESS
                        </Typography>


                        <Box
                            component="form"
                            onSubmit={
                                handleSubmit
                            }
                        >

                            {/* NAME */}

                            <TextField
                                fullWidth
                                label="Full Name"
                                name="name"
                                value={
                                    formData.name
                                }
                                onChange={
                                    handleChange
                                }
                                required
                                sx={{
                                    mb: 2,
                                }}
                            />


                            {/* PHONE */}

                            <TextField
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                value={
                                    formData.phone
                                }
                                onChange={
                                    handleChange
                                }
                                required
                                inputProps={{
                                    maxLength: 10,
                                    inputMode: "numeric",
                                }}
                                sx={{
                                    mb: 2,
                                }}
                            />


                            {/* ADDRESS */}

                            <TextField
                                fullWidth
                                label="Address"
                                name="addressLine"
                                value={
                                    formData.addressLine
                                }
                                onChange={
                                    handleChange
                                }
                                required
                                multiline
                                rows={3}
                                sx={{
                                    mb: 2,
                                }}
                            />


                            {/* CITY */}

                            <TextField
                                fullWidth
                                label="City"
                                name="city"
                                value={
                                    formData.city
                                }
                                onChange={
                                    handleChange
                                }
                                required
                                sx={{
                                    mb: 2,
                                }}
                            />


                            {/* STATE */}

                            <TextField
                                fullWidth
                                label="State"
                                name="state"
                                value={
                                    formData.state
                                }
                                onChange={
                                    handleChange
                                }
                                required
                                sx={{
                                    mb: 2,
                                }}
                            />


                            {/* PINCODE */}

                            <TextField
                                fullWidth
                                label="Pincode"
                                name="pincode"
                                value={
                                    formData.pincode
                                }
                                onChange={
                                    handleChange
                                }
                                required
                                inputProps={{
                                    maxLength: 6,
                                    inputMode: "numeric",
                                }}
                                sx={{
                                    mb: 3,
                                }}
                            />


                            {/* PAYMENT BUTTON */}

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={
                                    loading ||
                                    !items.length ||
                                    !razorpayLoaded
                                }
                                sx={{
                                    py: 1.5,

                                    backgroundColor:
                                        "#C9A227",

                                    color:
                                        "#FFFFFF",

                                    "&:hover": {
                                        backgroundColor:
                                            "#B18D20",
                                    },
                                }}
                            >

                                {loading ? (

                                    <Box
                                        sx={{
                                            display:
                                                "flex",

                                            alignItems:
                                                "center",

                                            gap: 1,
                                        }}
                                    >

                                        <CircularProgress
                                            size={20}
                                            sx={{
                                                color:
                                                    "#FFFFFF",
                                            }}
                                        />

                                        PROCESSING...

                                    </Box>

                                ) : !razorpayLoaded ? (

                                    "LOADING PAYMENT..."

                                ) : (

                                    "PROCEED TO PAYMENT"

                                )}

                            </Button>

                        </Box>

                    </Paper>


                    {/* ================================= */}
                    {/* ORDER SUMMARY */}
                    {/* ================================= */}

                    <Paper
                        elevation={0}
                        sx={{
                            p: 4,

                            backgroundColor:
                                "#FFFFFF",

                            height:
                                "fit-content",
                        }}
                    >

                        <Typography
                            variant="h6"
                            fontWeight={600}
                            mb={3}
                        >
                            ORDER SUMMARY
                        </Typography>


                        {items.map(
                            (
                                item
                            ) => {

                                if (
                                    !item?.product
                                ) {
                                    return null;
                                }


                                const product =
                                    item.product;


                                const variant =
                                    getVariant(
                                        item
                                    );


                                const price =
                                    Number(
                                        variant?.sellingPrice ??
                                        product?.sellingPrice ??
                                        0
                                    );


                                const quantity =
                                    Number(
                                        item.quantity ||
                                        0
                                    );


                                const itemTotal =
                                    price *
                                    quantity;


                                return (

                                    <Box
                                        key={
                                            item._id ||
                                            `${product._id}-${item.variant}`
                                        }
                                        sx={{
                                            mb: 2,
                                        }}
                                    >

                                        <Box
                                            sx={{
                                                display:
                                                    "flex",

                                                justifyContent:
                                                    "space-between",

                                                gap: 2,
                                            }}
                                        >

                                            <Typography>
                                                {
                                                    product.productName
                                                }
                                            </Typography>


                                            <Typography
                                                sx={{
                                                    whiteSpace:
                                                        "nowrap",
                                                }}
                                            >
                                                ₹
                                                {
                                                    itemTotal.toFixed(
                                                        2
                                                    )
                                                }
                                            </Typography>

                                        </Box>


                                        {/* VARIANT */}

                                        {variant && (
                                            <Typography
                                                sx={{
                                                    fontSize:
                                                        13,

                                                    color:
                                                        "#777",

                                                    mt:
                                                        0.5,
                                                }}
                                            >
                                                {variant.attributes
                                                    ?.map(
                                                        (
                                                            attribute
                                                        ) =>
                                                            attribute.value
                                                    )
                                                    .filter(Boolean)
                                                    .join(
                                                        " / "
                                                    )}
                                            </Typography>
                                        )}


                                        <Typography
                                            sx={{
                                                fontSize:
                                                    13,

                                                color:
                                                    "#777",

                                                mt:
                                                    0.5,
                                            }}
                                        >
                                            Qty:{" "}
                                            {
                                                quantity
                                            }
                                        </Typography>

                                    </Box>
                                );
                            }
                        )}


                        <Divider
                            sx={{
                                my: 2,
                            }}
                        />


                        <Box
                            sx={{
                                display:
                                    "flex",

                                justifyContent:
                                    "space-between",
                            }}
                        >

                            <Typography
                                fontWeight={600}
                            >
                                TOTAL
                            </Typography>


                            <Typography
                                fontWeight={600}
                            >
                                ₹
                                {
                                    totalAmount.toFixed(
                                        2
                                    )
                                }
                            </Typography>

                        </Box>

                    </Paper>

                </Box>

            </Container>

        </Box>
    );
};


export default Checkout;