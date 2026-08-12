

// import { useEffect } from "react";
// import {
//   Box,
//   Typography,
//   CircularProgress,
//   Button
// } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getProductById } from "../../features/products/ProductsThunk";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   const {
//     selectedProduct,
//     loading,
//     error
//   } = useSelector((state) => state.products);

//   useEffect(() => {
//     if (id) {
//       dispatch(getProductById(id));
//     }
//   }, [dispatch, id]);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" mt={5}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Typography color="error" textAlign="center" mt={5}>
//         {error}
//       </Typography>
//     );
//   }

//   if (!selectedProduct) {
//     console.log("No product selected or found:", selectedProduct);
//     return (
//       <Typography textAlign="center" mt={5}>
//         Product not found
//       </Typography>
//     );
//   }

//   return (
//     <Box
//       sx={{
//         py: 8,
//         px: {
//           xs: 2,
//           md: 6
//         }
//       }}
//     >
//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: {
//             xs: "1fr",
//             md: "1fr 1fr"
//           },
//           gap: 5
//         }}
//       >
//         {/* PRODUCT IMAGE */}
//         <Box>
//           <Box
//             component="img"
//             src={
//               selectedProduct.images?.[0]?.url ||
//               "/default-product.jpg"
//             }
//             alt={selectedProduct.productName || "Product"}
//             sx={{
//               width: "100%",
//               height: 500,
//               objectFit: "cover"
//             }}
//           />
//         </Box>

//         {/* PRODUCT INFO */}
//         <Box>
//           <Typography
//             variant="h3"
//             sx={{
//               fontWeight: 500
//             }}
//           >
//             {selectedProduct.productName}
//           </Typography>

//           {/* <Typography
//             sx={{
//               mt: 2,
//               color: "#7A7A7A",
//               fontSize: "18px"
//             }}
//           >
//             {selectedProduct.description}
//           </Typography>

//           <Typography
//             sx={{
//               mt: 3,
//               fontSize: "28px",
//               fontWeight: 600,
//               color: "#C9A227"
//             }}
//           >
//             ₹ {selectedProduct.sellingPrice}
//           </Typography>

//           <Button
//             variant="contained"
//             sx={{
//               mt: 4,
//               background: "#C9A227",
//               color: "#fff",
//               px: 5,
//               py: 1.5,
//               borderRadius: 0,
//               "&:hover": {
//                 background: "#a8851f"
//               }
//             }}
//           >
//             Add To Cart
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ProductDetails;
//  */}
//  <Typography
//   sx={{
//     mt: 4,
//     mb: 1,
//     fontWeight: 600,
//   }}
// >
//   Size
// </Typography>

// <Box
//   sx={{
//     display: "flex",
//     gap: 1,
//     flexWrap: "wrap",
//   }}
// >
//   {selectedProduct.productVariants?.length > 0 ? (
//     selectedProduct.productVariants.map((variant, index) => (
//       <Button
//         key={index}
//         variant="outlined"
//         sx={{
//           minWidth: 60,
//           borderColor: "#C9A227",
//           color: "#000",
//           "&:hover": {
//             borderColor: "#C9A227",
//             backgroundColor: "#f8f4e8",
//           },
//         }}
//       >
//         {variant.value}
//       </Button>
//     ))
//   ) : (
//     <Typography color="text.secondary">
//       No sizes available
//     </Typography>
//   )}
// </Box>
//-------------------------------------------------

// import { useEffect } from "react";
// import {
//   Box,
//   Typography,
//   CircularProgress,
//   Button,
// } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getProductById } from "../../features/products/ProductsThunk";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   const { selectedProduct, loading, error } = useSelector(
//     (state) => state.products
//   );

//   useEffect(() => {
//     if (id) {
//       dispatch(getProductById(id));
//     }
//   }, [dispatch, id]);

//   console.log(selectedProduct);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" mt={5}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Typography color="error" textAlign="center" mt={5}>
//         {error}
//       </Typography>
//     );
//   }

//   if (!selectedProduct) {
//     return (
//       <Typography textAlign="center" mt={5}>
//         Product not found
//       </Typography>
//     );
//   }

//   return (
//     <Box sx={{ py: 8, px: { xs: 2, md: 6 } }}>
//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
//           gap: 5,
//         }}
//       >
//         {/* Image */}
//         <Box>
//           <Box
//             component="img"
//             src={
//               selectedProduct.images?.[0]?.url ||
//               "/default-product.jpg"
//             }
//             alt={selectedProduct.productName}
//             sx={{
//               width: "100%",
//               height: 500,
//               objectFit: "cover",
//             }}
//           />
//         </Box>

//         {/* Details */}
//         <Box>
//           <Typography variant="h3">
//             {selectedProduct.productName}
//           </Typography>

//           <Typography sx={{ mt: 2 }}>
//             {selectedProduct.description}
//           </Typography>

//           <Typography
//             sx={{
//               mt: 3,
//               fontSize: 28,
//               fontWeight: 600,
//               color: "#C9A227",
//             }}
//           >
//             ₹ {selectedProduct.sellingPrice}
//           </Typography>

//           <Typography sx={{ mt: 4, mb: 1, fontWeight: 600 }}>
//             Size
//           </Typography>

//           <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
//             {selectedProduct.productVariants?.length > 0 ? (
//               selectedProduct.productVariants.map((variant, index) => (
//                 <Button key={index} variant="outlined">
//                   {variant.value}
//                 </Button>
//               ))
//             ) : (
//               <Typography>No sizes available</Typography>
//             )}
//           </Box>

//           <Button
//             variant="contained"
//             sx={{
//               mt: 4,
//               background: "#C9A227",
//             }}
//           >
//             Add To Cart
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ProductDetails;
//-----------------------------------------------------------

// import { useEffect, useState } from "react";

// import {
//   Box,
//   Typography,
//   CircularProgress,
//   Button,
//   IconButton,
// } from "@mui/material";

// import {
//   Add,
//   Remove,
// } from "@mui/icons-material";

// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// import { getProductById } from "../../features/products/ProductsThunk";

// const ProductDetails = () => {

//   const { id } = useParams();

//   const dispatch = useDispatch();

//   const {
//     selectedProduct,
//     loading,
//     error,
//   } = useSelector((state) => state.products);

//   const [selectedImage, setSelectedImage] = useState("");

//   const [selectedVariant, setSelectedVariant] = useState(null);

//   const [quantity, setQuantity] = useState(1);
//   const selectedVariantData =
//     selectedVariant !== null
//       ? selectedProduct.productVariants[selectedVariant]
//       : null;

//   const colorAttribute =
//     selectedVariantData?.attributes?.find(
//       (attr) => attr.colorCode
//     );
//   useEffect(() => {

//     if (id) {
//       dispatch(getProductById(id));
//     }

//   }, [dispatch, id]);

//   useEffect(() => {

//     if (selectedProduct?.images?.length) {

//       setSelectedImage(selectedProduct.images[0].url);

//     }

//   }, [selectedProduct]);

//   if (loading) {
//     return (
//       <Box
//         display="flex"
//         justifyContent="center"
//         mt={5}
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Typography
//         color="error"
//         textAlign="center"
//         mt={5}
//       >
//         {error}
//       </Typography>
//     );
//   }

//   if (!selectedProduct) {

//     console.log(
//     "Selected Product",
//     JSON.stringify(selectedProduct, null, 2)
// );
//     return (
//       <Typography
//         textAlign="center"
//         mt={5}
//       >
//         Product not found
//       </Typography>
//     );
//   }

//   return (
//     <Box
//       sx={{
//         py: 8,
//         px: {
//           xs: 2,
//           md: 6,
//         },
//       }}
//     >
//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: {
//             xs: "1fr",
//             md: "1fr 1fr",
//           },
//           gap: 6,
//         }}
//       >
//         {/* Images */}

//         <Box>

//           <Box
//             component="img"
//             src={selectedImage}
//             alt={selectedProduct.productName}
//             sx={{
//               width: "100%",
//               height: 550,
//               objectFit: "cover",
//               borderRadius: 2,
//             }}
//           />

//           <Box
//             mt={2}
//             display="flex"
//             gap={2}
//             flexWrap="wrap"
//           >
//             {selectedProduct.images?.map(
//               (image, index) => (

//                 <Box
//                   key={index}
//                   component="img"
//                   src={image.url}
//                   onClick={() =>
//                     setSelectedImage(image.url)
//                   }
//                   sx={{
//                     width: 90,
//                     height: 90,
//                     objectFit: "cover",
//                     border:
//                       selectedImage === image.url
//                         ? "2px solid #C9A227"
//                         : "1px solid #ddd",
//                     cursor: "pointer",
//                     borderRadius: 1,
//                   }}
//                 />

//               )
//             )}
//           </Box>

//         </Box>

//         {/* Details */}

//         <Box>

//           <Typography variant="h3">
//             {selectedProduct.productName}
//           </Typography>

//           <Typography
//             color="text.secondary"
//             mt={2}
//           >
//             {selectedProduct.description}
//           </Typography>

//           <Typography
//             sx={{
//               mt: 3,
//               fontSize: 34,
//               fontWeight: 700,
//               color: "#C9A227",
//             }}
//           >
//             ₹ {selectedProduct.sellingPrice}
//           </Typography>

//           {/* Variants */}

//           <Typography
//             mt={5}
//             mb={2}
//             fontWeight="bold"
//           >
//             Size
//           </Typography>

//           <Box
//             display="flex"
//             gap={1}
//             flexWrap="wrap"
//           >
//             {selectedProduct.productVariants?.length ? (

//               selectedProduct.productVariants.map(
//                 (variant, index) => (

//                   <Button
//                     key={index}
//                     variant={
//                       selectedVariant === index
//                         ? "contained"
//                         : "outlined"
//                     }
//                     onClick={() =>
//                       setSelectedVariant(index)
//                     }
//                     sx={{
//                       minWidth: 60,
//                     }}
//                   >
//                     {variant.attributes
//                       ?.map(
//                         (attribute) =>
//                           attribute.value
//                       )
//                       .join(" / ")}
//                   </Button>

//                 )
//               )

//             ) : (

//               <Typography>
//                 No variants available
//               </Typography>

//             )}
//           </Box>

//           {/* Selected Variant Details */}

//           {selectedVariant !== null && (

//             <Box mt={3}>

//               {/* <Typography>
//                 <b>Color:</b>{" "}
//                 {selectedProduct.productVariants[
//                   selectedVariant
//                 ].color || "-"}
//               </Typography> */}





//               <Box
//                 display="flex"
//                 alignItems="center"
//                 gap={1}
//                 mb={2}
//               >
//                 <Typography fontWeight="bold">
//                   Color:
//                 </Typography>

//                 {colorAttribute ? (
//                   <>
//                     <Box
//                       sx={{
//                         width: 22,
//                         height: 22,
//                         borderRadius: "50%",
//                         bgcolor: colorAttribute.colorCode,
//                         border: "1px solid #ccc",
//                       }}
//                     />

//                     <Typography>
//                       {colorAttribute.value}
//                     </Typography>
//                   </>
//                 ) : (
//                   <Typography>-</Typography>
//                 )}
//               </Box>


//               {/* <Typography>
//                 <b>Stock:</b>{" "}
//                 {selectedProduct.productVariants[
//                   selectedVariant
//                 ].stock}
//               </Typography>

//               <Typography>
//                 <b>SKU:</b>{" "}
//                 {selectedProduct.productVariants[
//                   selectedVariant
//                 ].sku}
//               </Typography> */}
//               <Typography>
//                 <b>Stock:</b> {selectedVariantData.stock}
//               </Typography>

//               <Typography>
//                 <b>SKU:</b> {selectedVariantData.sku}
//               </Typography>
//             </Box>

//           )}

//           {/* Quantity */}

//           <Typography
//             mt={5}
//             mb={2}
//             fontWeight="bold"
//           >
//             Quantity
//           </Typography>

//           <Box
//             display="flex"
//             alignItems="center"
//             gap={2}
//           >

//             <IconButton
//               onClick={() =>
//                 setQuantity((prev) =>
//                   Math.max(1, prev - 1)
//                 )
//               }
//             >
//               <Remove />
//             </IconButton>

//             <Typography
//               fontSize={22}
//             >
//               {quantity}
//             </Typography>

//             <IconButton
//               onClick={() =>
//                 setQuantity((prev) => prev + 1)
//               }
//             >
//               <Add />
//             </IconButton>

//           </Box>

//           {/* Add To Cart */}

//           <Button
//             variant="contained"
//             sx={{
//               mt: 5,
//               backgroundColor: "#C9A227",
//               px: 5,
//               py: 1.5,

//               "&:hover": {
//                 backgroundColor: "#b28f1f",
//               },
//             }}
//           >
//             ADD TO CART
//           </Button>

//         </Box>

//       </Box>
//     </Box>
//   );
// };

// export default ProductDetails;
//----------------------------------------------


// import { useEffect, useMemo, useState } from "react";

// import {
//     Box,
//     Typography,
//     CircularProgress,
//     Button,
//     IconButton,
// } from "@mui/material";

// import {
//     Add,
//     Remove,
// } from "@mui/icons-material";

// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// import {
//     getProductById,
// } from "../../features/products/ProductsThunk";

// import {
//     addToCart,
//     getCart,
// } from "../../features/cart/CartThunk";

// import CartDrawer from "../../components/cart/CartDrawer";

// const ProductDetails = () => {

//     const { id } = useParams();

//     const dispatch = useDispatch();

//     const {
//         selectedProduct,
//         loading,
//         error,
//     } = useSelector((state) => state.products);

//     const [selectedImage, setSelectedImage] = useState("");

//     const [selectedVariant, setSelectedVariant] = useState(0);

//     const [quantity, setQuantity] = useState(1);
//     const [cartOpen, setCartOpen] = useState(false);

//     useEffect(() => {

//         if (id) {
//             dispatch(getProductById(id));
//         }

//     }, [dispatch, id]);

//     useEffect(() => {

//         if (selectedProduct?.images?.length) {

//             setSelectedImage(
//                 selectedProduct.images[0].url
//             );

//         }

//         if (selectedProduct?.productVariants?.length) {

//             setSelectedVariant(0);

//         }

//     }, [selectedProduct]);

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
//             <Typography
//                 color="error"
//                 textAlign="center"
//                 mt={5}
//             >
//                 {error}
//             </Typography>
//         );

//     }

//     if (!selectedProduct) {

//         return (
//             <Typography
//                 textAlign="center"
//                 mt={5}
//             >
//                 Product not found
//             </Typography>
//         );

//     }

//     const selectedVariantData =
//         selectedProduct.productVariants?.[
//             selectedVariant
//         ];

//     const colorAttribute =
//         selectedVariantData?.attributes?.find(
//             (attribute) =>
//                 attribute.colorCode &&
//                 attribute.colorCode.trim() !== ""
//         );

//     const colorValue =
//         colorAttribute?.colorCode || "";

//     const isHexColor =
//         /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(
//             colorValue
//         );

//     const displayColor = useMemo(() => {

//         if (!colorValue) return "";

//         return isHexColor
//             ? colorValue
//             : colorValue.toLowerCase();

//     }, [colorValue, isHexColor]);
//     return (
//     <Box
//         sx={{
//             py: 8,
//             px: {
//                 xs: 2,
//                 md: 6,
//             },
//         }}
//     >
//         <Box
//             sx={{
//                 display: "grid",
//                 gridTemplateColumns: {
//                     xs: "1fr",
//                     md: "1fr 1fr",
//                 },
//                 gap: 6,
//             }}
//         >
//             {/* LEFT SIDE */}

//             <Box>

//                 <Box
//                     component="img"
//                     src={selectedImage}
//                     alt={selectedProduct.productName}
//                     sx={{
//                         width: "100%",
//                         height: 550,
//                         objectFit: "cover",
//                         borderRadius: 2,
//                     }}
//                 />

//                 <Box
//                     mt={2}
//                     display="flex"
//                     gap={2}
//                     flexWrap="wrap"
//                 >
//                     {selectedProduct.images?.map((image, index) => (

//                         <Box
//                             key={index}
//                             component="img"
//                             src={image.url}
//                             onClick={() => setSelectedImage(image.url)}
//                             sx={{
//                                 width: 90,
//                                 height: 90,
//                                 objectFit: "cover",
//                                 cursor: "pointer",
//                                 borderRadius: 1,
//                                 border:
//                                     selectedImage === image.url
//                                         ? "2px solid #C9A227"
//                                         : "1px solid #ddd",
//                             }}
//                         />

//                     ))}
//                 </Box>

//             </Box>

//             {/* RIGHT SIDE */}

//             <Box>

//                 <Typography variant="h3">
//                     {selectedProduct.productName}
//                 </Typography>

//                 <Typography
//                     mt={2}
//                     color="text.secondary"
//                 >
//                     {selectedProduct.description}
//                 </Typography>

//                 <Typography
//                     sx={{
//                         mt: 3,
//                         fontSize: 34,
//                         fontWeight: 700,
//                         color: "#C9A227",
//                     }}
//                 >
//                     ₹ {selectedVariantData?.sellingPrice ??
//                         selectedProduct.sellingPrice}
//                 </Typography>

//                 {/* SIZE */}

//                 <Typography
//                     mt={5}
//                     mb={2}
//                     fontWeight="bold"
//                 >
//                     Size
//                 </Typography>

//                 <Box
//                     display="flex"
//                     gap={1}
//                     flexWrap="wrap"
//                 >
//                     {selectedProduct.productVariants?.map(
//                         (variant, index) => (

//                             <Button
//                                 key={index}
//                                 variant={
//                                     selectedVariant === index
//                                         ? "contained"
//                                         : "outlined"
//                                 }
//                                 onClick={() =>
//                                     setSelectedVariant(index)
//                                 }
//                                 sx={{
//                                     minWidth: 70,
//                                 }}
//                             >
//                                 {variant.attributes
//                                     ?.map(
//                                         (attr) =>
//                                             attr.value
//                                     )
//                                     .join(" / ")}
//                             </Button>

//                         )
//                     )}
//                 </Box>

//                 {/* COLOR */}

//                           {/* COLOR */}

//             <Box
//                 mt={4}
//                 display="flex"
//                 alignItems="center"
//                 gap={2}
//             >
//                 <Typography fontWeight="bold">
//                     Color :
//                 </Typography>

//                 {colorValue ? (
//                     <>
//                         <Box
//                             sx={{
//                                 width: 24,
//                                 height: 24,
//                                 borderRadius: "50%",
//                                 border: "1px solid #999",
//                                 backgroundColor: displayColor,
//                             }}
//                         />

//                         <Typography>
//                             {colorValue}
//                         </Typography>
//                     </>
//                 ) : (
//                     <Typography>No Color</Typography>
//                 )}
//             </Box>

//             {/* STOCK */}

//             {/* STOCK */}

//             <Typography mt={3}>
//                 <b>Stock :</b>{" "}
//                 {selectedVariantData?.stock ?? 0}
//             </Typography>

//             {/* SKU */}

//             <Typography mt={1}>
//                 <b>SKU :</b>{" "}
//                 {selectedVariantData?.sku || "-"}
//             </Typography>

//             {/* BARCODE */}

//             <Typography mt={1}>
//                 <b>Barcode :</b>{" "}
//                 {selectedVariantData?.barcode || "-"}
//             </Typography>

//             {/* QUANTITY */}

//             <Typography
//                 mt={5}
//                 mb={2}
//                 fontWeight="bold"
//             >
//                 Quantity
//             </Typography>

//             <Box
//                 display="flex"
//                 alignItems="center"
//                 gap={2}
//             >
//                 <IconButton
//                     onClick={() =>
//                         setQuantity((prev) =>
//                             Math.max(1, prev - 1)
//                         )
//                     }
//                 >
//                     <Remove />
//                 </IconButton>

//                 <Typography fontSize={22}>
//                     {quantity}
//                 </Typography>

//                 <IconButton
//                     disabled={
//                         quantity >=
//                         (selectedVariantData?.stock || 0)
//                     }
//                     onClick={() =>
//                         setQuantity((prev) => prev + 1)
//                     }
//                 >
//                     <Add />
//                 </IconButton>
//             </Box>

//             {/* ADD TO CART */}

//             <Button
//                 variant="contained"
//                 fullWidth
//                 disabled={
//                     !selectedVariantData ||
//                     selectedVariantData.stock <= 0
//                 }
//                 sx={{
//                     mt: 5,
//                     py: 1.5,
//                     fontSize: 16,
//                     backgroundColor: "#C9A227",
//                     "&:hover": {
//                         backgroundColor: "#b28f1f",
//                     },
//                     "&.Mui-disabled": {
//                         backgroundColor: "#ddd",
//                         color: "#777",
//                     },
//                 }}
//                 onClick={() => {
//                     console.log({
//                         productId: selectedProduct._id,
//                         variantId: selectedVariantData._id,
//                         quantity,
//                     });
//                 }}
//             >
//                 {selectedVariantData?.stock > 0
//                     ? "ADD TO CART"
//                     : "OUT OF STOCK"}
//             </Button>

//         </Box>
//     </Box>
// </Box>
// );
// };

// export default ProductDetails;

//---------------------------------------------------------

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
//     useOutletContext,
// } from "react-router-dom";

// import {
//     getProductById,
// } from "../../features/products/ProductsThunk";

// import {
//     addToCart,
//     getCart,
// } from "../../features/cart/CartThunk";


// // const ProductDetails = () => {

// //     const { id } = useParams();

// //     // =====================================================
// //     // CART FUNCTIONS FROM CUSTOMER LAYOUT
// //     // =====================================================

// //     const {
// //         openCart,
// //     } = useOutletContext();


// //     const dispatch = useDispatch();


// //     // =====================================================
// //     // PRODUCT STATE
// //     // =====================================================

// //     const {
// //         selectedProduct,
// //         loading,
// //         error,
// //     } = useSelector(
// //         (state) => state.products
// //     );


// //     // =====================================================
// //     // CART STATE
// //     // =====================================================

// //     const {
// //         loading: cartLoading,
// //     } = useSelector(
// //         (state) => state.cart
// //     );


// //     // =====================================================
// //     // LOCAL STATE
// //     // =====================================================

// //     const [
// //         selectedVariant,
// //         setSelectedVariant,
// //     ] = useState(null);


// //     const [
// //         quantity,
// //         setQuantity,
// //     ] = useState(1);


// //     // =====================================================
// //     // GET PRODUCT
// //     // =====================================================

// //     useEffect(() => {

// //         if (!id) {
// //             return;
// //         }

// //         dispatch(
// //             getProductById(id)
// //         );

// //     }, [
// //         dispatch,
// //         id,
// //     ]);


// //     // =====================================================
// //     // LOADING
// //     // =====================================================

// //     if (loading) {

// //         return (

// //             <Box
// //                 sx={{
// //                     minHeight: "70vh",
// //                     display: "flex",
// //                     justifyContent: "center",
// //                     alignItems: "center",
// //                 }}
// //             >

// //                 <CircularProgress />

// //             </Box>

// //         );

// //     }


// //     // =====================================================
// //     // ERROR
// //     // =====================================================

// //     if (error) {

// //         return (

// //             <Box
// //                 sx={{
// //                     py: 15,
// //                     textAlign: "center",
// //                 }}
// //             >

// //                 <Typography
// //                     color="error"
// //                 >
// //                     {error}
// //                 </Typography>

// //             </Box>

// //         );

// //     }


// //     // =====================================================
// //     // PRODUCT NOT FOUND
// //     // =====================================================

// //     if (!selectedProduct) {

// //         return (

// //             <Box
// //                 sx={{
// //                     py: 15,
// //                     textAlign: "center",
// //                 }}
// //             >

// //                 <Typography>
// //                     Product not found
// //                 </Typography>

// //             </Box>

// //         );

// //     }


// //     // =====================================================
// //     // VARIANTS
// //     // =====================================================

// //     const variants =
// //         selectedProduct.productVariants || [];


// //     // =====================================================
// //     // ADD TO CART
// //     // =====================================================

// //     // const handleAddToCart = async () => {

// //     //     // -------------------------------------------------
// //     //     // VARIANT REQUIRED
// //     //     // -------------------------------------------------

// //     //     if (!selectedVariant) {

// //     //         alert(
// //     //             "Please select size"
// //     //         );

// //     //         return;

// //     //     }


// //     //     // -------------------------------------------------
// //     //     // STOCK CHECK
// //     //     // -------------------------------------------------

// //     //     const stock =
// //     //         Number(
// //     //             selectedVariant.stock || 0
// //     //         );


// //     //     if (stock <= 0) {

// //     //         alert(
// //     //             "This variant is out of stock"
// //     //         );

// //     //         return;

// //     //     }


// //     //     // -------------------------------------------------
// //     //     // QUANTITY CHECK
// //     //     // -------------------------------------------------

// //     //     if (quantity > stock) {

// //     //         alert(
// //     //             `Only ${stock} items available`
// //     //         );

// //     //         return;

// //     //     }


// //     //     // -------------------------------------------------
// //     //     // CART DATA
// //     //     // -------------------------------------------------

// //     //     const cartItem = {

// //     //         product:
// //     //             selectedProduct._id,

// //     //         variant:
// //     //             selectedVariant._id,

// //     //         quantity:
// //     //             Number(quantity),

// //     //     };


// //     //     console.log(
// //     //         "PRODUCT DETAILS: ADD TO CART",
// //     //         cartItem
// //     //     );


// //     //     try {

// //     //         // =============================================
// //     //         // ADD PRODUCT TO CART
// //     //         // =============================================

// //     //         await dispatch(
// //     //             addToCart(cartItem)
// //     //         ).unwrap();


// //     //         console.log(
// //     //             "PRODUCT DETAILS: PRODUCT ADDED"
// //     //         );


// //     //         // =============================================
// //     //         // REFRESH CART
// //     //         // =============================================

// //     //         await dispatch(
// //     //             getCart()
// //     //         ).unwrap();


// //     //         console.log(
// //     //             "PRODUCT DETAILS: CART UPDATED"
// //     //         );


// //     //         // =============================================
// //     //         // OPEN CART DRAWER
// //     //         // =============================================

// //     //         console.log(
// //     //             "PRODUCT DETAILS: OPENING CART DRAWER"
// //     //         );


// //     //         openCart();


// //     //         console.log(
// //     //             "PRODUCT DETAILS: CART DRAWER OPENED"
// //     //         );


// //     //     } catch (err) {

// //     //         console.error(
// //     //             "PRODUCT DETAILS: ADD TO CART FAILED",
// //     //             err
// //     //         );

// //     //     }

// //     // };
// // const handleAddToCart = async () => {
// //     try {
// //         // =========================================
// //         // CHECK VARIANT
// //         // =========================================

// //         if (!selectedVariant) {
// //             alert("Please select size");
// //             return;
// //         }

// //         // =========================================
// //         // CHECK STOCK
// //         // =========================================

// //         if (Number(selectedVariant.stock) <= 0) {
// //             alert("Product is out of stock");
// //             return;
// //         }

// //         // =========================================
// //         // CHECK QUANTITY
// //         // =========================================

// //         if (quantity > Number(selectedVariant.stock)) {
// //             alert("Quantity exceeds available stock");
// //             return;
// //         }

// //         // =========================================
// //         // CART DATA
// //         // =========================================

// //         const cartItem = {
// //             product: selectedProduct._id,
// //             variant: selectedVariant._id,
// //             quantity: Number(quantity),
// //         };

// //         console.log(
// //             "PRODUCT DETAILS: ADD TO CART",
// //             cartItem
// //         );

// //         // =========================================
// //         // ADD TO CART
// //         // =========================================

// //         await dispatch(
// //             addToCart(cartItem)
// //         ).unwrap();

// //         // =========================================
// //         // REFRESH CART
// //         // =========================================

// //         await dispatch(
// //             getCart()
// //         ).unwrap();

// //         // =========================================
// //         // OPEN SAME CART DRAWER
// //         // =========================================

// //         console.log(
// //             "PRODUCT DETAILS: OPENING CART DRAWER"
// //         );

// //         openCart();

// //     } catch (error) {
// //         console.error(
// //             "ADD TO CART FAILED:",
// //             error
// //         );
// //     }
// // };

// //     // =====================================================
// //     // VARIANT CHANGE
// //     // =====================================================

// //     const handleVariantChange = (
// //         event,
// //         value
// //     ) => {

// //         if (!value) {
// //             return;
// //         }


// //         const variant =
// //             variants.find(
// //                 (item) =>
// //                     item._id === value
// //             );


// //         if (!variant) {
// //             return;
// //         }


// //         setSelectedVariant(
// //             variant
// //         );


// //         setQuantity(1);

// //     };


// //     // =====================================================
// //     // DECREASE QUANTITY
// //     // =====================================================

// //     const decreaseQuantity = () => {

// //         setQuantity(
// //             (previous) =>
// //                 Math.max(
// //                     1,
// //                     previous - 1
// //                 )
// //         );

// //     };


// //     // =====================================================
// //     // INCREASE QUANTITY
// //     // =====================================================

// //     const increaseQuantity = () => {

// //         const stock =
// //             Number(
// //                 selectedVariant?.stock || 0
// //             );


// //         setQuantity(
// //             (previous) =>
// //                 Math.min(
// //                     stock,
// //                     previous + 1
// //                 )
// //         );

// //     };


// //     // =====================================================
// //     // PRICE
// //     // =====================================================

// //     const price =
// //         selectedVariant?.sellingPrice ??
// //         selectedProduct.sellingPrice ??
// //         0;


// //     // =====================================================
// //     // UI
// //     // =====================================================

// //     return (

// //         <Box
// //             sx={{
// //                 py: 8,

// //                 px: {
// //                     xs: 2,
// //                     sm: 3,
// //                     md: 6,
// //                 },
// //             }}
// //         >

// //             <Box
// //                 sx={{
// //                     display: "grid",

// //                     gridTemplateColumns: {
// //                         xs: "1fr",
// //                         md: "1fr 1fr",
// //                     },

// //                     gap: {
// //                         xs: 4,
// //                         md: 6,
// //                     },

// //                     maxWidth: 1400,

// //                     mx: "auto",
// //                 }}
// //             >

// //                 {/* ================================================= */}
// //                 {/* LEFT - IMAGE */}
// //                 {/* ================================================= */}

// //                 <Box>

// //                     <Box
// //                         component="img"

// //                         src={
// //                             selectedProduct
// //                                 .images?.[0]?.url
// //                         }

// //                         alt={
// //                             selectedProduct.productName
// //                         }

// //                         sx={{
// //                             width: "100%",

// //                             maxWidth: 600,

// //                             height: {
// //                                 xs: 400,
// //                                 sm: 500,
// //                                 md: 600,
// //                             },

// //                             objectFit: "cover",

// //                             borderRadius: 2,

// //                             display: "block",
// //                         }}
// //                     />


// //                     {/* THUMBNAILS */}

// //                     <Box
// //                         sx={{
// //                             display: "flex",
// //                             gap: 2,
// //                             mt: 2,
// //                             flexWrap: "wrap",
// //                         }}
// //                     >

// //                         {selectedProduct.images?.map(
// //                             (
// //                                 image,
// //                                 index
// //                             ) => (

// //                                 <Box
// //                                     key={
// //                                         image._id ||
// //                                         index
// //                                     }

// //                                     component="img"

// //                                     src={
// //                                         image.url
// //                                     }

// //                                     alt={
// //                                         selectedProduct.productName
// //                                     }

// //                                     sx={{
// //                                         width: 80,
// //                                         height: 80,
// //                                         objectFit: "cover",
// //                                         borderRadius: 1,
// //                                         cursor: "pointer",
// //                                     }}
// //                                 />

// //                             )
// //                         )}

// //                     </Box>

// //                 </Box>


// //                 {/* ================================================= */}
// //                 {/* RIGHT - DETAILS */}
// //                 {/* ================================================= */}

// //                 <Box>

// //                     <Typography
// //                         variant="h3"
// //                         sx={{
// //                             fontSize: {
// //                                 xs: 32,
// //                                 md: 44,
// //                             },

// //                             fontWeight: 500,
// //                         }}
// //                     >
// //                         {
// //                             selectedProduct.productName
// //                         }
// //                     </Typography>


// //                     {/* DESCRIPTION */}

// //                     {selectedProduct.description && (

// //                         <Typography
// //                             mt={2}
// //                             color="text.secondary"
// //                             sx={{
// //                                 lineHeight: 1.8,
// //                             }}
// //                         >
// //                             {
// //                                 selectedProduct.description
// //                             }
// //                         </Typography>

// //                     )}


// //                     {/* PRICE */}

// //                     <Typography
// //                         sx={{
// //                             mt: 3,

// //                             fontSize: 30,

// //                             fontWeight: 700,

// //                             color: "#C9A227",
// //                         }}
// //                     >
// //                         ₹ {price}
// //                     </Typography>


// //                     {/* ================================================= */}
// //                     {/* SIZE */}
// //                     {/* ================================================= */}

// //                     {variants.length > 0 && (

// //                         <>

// //                             <Typography
// //                                 sx={{
// //                                     mt: 5,
// //                                     mb: 2,
// //                                     fontWeight: 600,
// //                                 }}
// //                             >
// //                                 Size
// //                             </Typography>


// //                             <ToggleButtonGroup
// //                                 exclusive

// //                                 value={
// //                                     selectedVariant?._id ||
// //                                     ""
// //                                 }

// //                                 onChange={
// //                                     handleVariantChange
// //                                 }

// //                                 sx={{
// //                                     flexWrap: "wrap",
// //                                     gap: 1,
// //                                 }}
// //                             >

// //                                 {variants.map(
// //                                     (
// //                                         variant
// //                                     ) => (

// //                                         <ToggleButton
// //                                             key={
// //                                                 variant._id
// //                                             }

// //                                             value={
// //                                                 variant._id
// //                                             }

// //                                             sx={{
// //                                                 minWidth: 70,
// //                                             }}
// //                                         >

// //                                             {
// //                                                 variant.attributes
// //                                                     ?.map(
// //                                                         (
// //                                                             attr
// //                                                         ) =>
// //                                                             attr.value
// //                                                     )
// //                                                     .filter(
// //                                                         Boolean
// //                                                     )
// //                                                     .join(
// //                                                         " / "
// //                                                     ) ||
// //                                                 "Variant"
// //                                             }

// //                                         </ToggleButton>

// //                                     )
// //                                 )}

// //                             </ToggleButtonGroup>

// //                         </>

// //                     )}


// //                     {/* ================================================= */}
// //                     {/* SELECTED VARIANT */}
// //                     {/* ================================================= */}

// //                     {selectedVariant && (

// //                         <Box
// //                             mt={3}
// //                         >

// //                             <Typography>
// //                                 <b>Color:</b>{" "}
// //                                 {
// //                                     selectedVariant.color ||
// //                                     "-"
// //                                 }
// //                             </Typography>


// //                             <Typography>
// //                                 <b>Stock:</b>{" "}
// //                                 {
// //                                     selectedVariant.stock
// //                                 }
// //                             </Typography>


// //                             <Typography>
// //                                 <b>SKU:</b>{" "}
// //                                 {
// //                                     selectedVariant.sku ||
// //                                     "-"
// //                                 }
// //                             </Typography>


// //                             <Typography>
// //                                 <b>Barcode:</b>{" "}
// //                                 {
// //                                     selectedVariant.barcode ||
// //                                     "-"
// //                                 }
// //                             </Typography>

// //                         </Box>

// //                     )}


// //                     {/* ================================================= */}
// //                     {/* QUANTITY */}
// //                     {/* ================================================= */}

// //                     <Typography
// //                         sx={{
// //                             mt: 5,
// //                             mb: 2,
// //                             fontWeight: 600,
// //                         }}
// //                     >
// //                         Quantity
// //                     </Typography>


// //                     <Box
// //                         sx={{
// //                             display: "flex",
// //                             alignItems: "center",
// //                             gap: 2,
// //                         }}
// //                     >

// //                         <IconButton
// //                             onClick={
// //                                 decreaseQuantity
// //                             }

// //                             disabled={
// //                                 quantity <= 1
// //                             }
// //                         >

// //                             <RemoveIcon />

// //                         </IconButton>


// //                         <Typography
// //                             sx={{
// //                                 fontSize: 20,
// //                                 minWidth: 30,
// //                                 textAlign: "center",
// //                             }}
// //                         >
// //                             {quantity}
// //                         </Typography>


// //                         <IconButton
// //                             onClick={
// //                                 increaseQuantity
// //                             }

// //                             disabled={
// //                                 !selectedVariant ||
// //                                 quantity >=
// //                                     Number(
// //                                         selectedVariant.stock ||
// //                                         0
// //                                     )
// //                             }
// //                         >

// //                             <AddIcon />

// //                         </IconButton>

// //                     </Box>


// //                     {/* ================================================= */}
// //                     {/* ADD TO CART */}
// //                     {/* ================================================= */}

// //                     <Button
// //                         variant="contained"

// //                         disabled={
// //                             cartLoading ||
// //                             !selectedVariant ||
// //                             Number(
// //                                 selectedVariant.stock ||
// //                                 0
// //                             ) <= 0
// //                         }

// //                         onClick={
// //                             handleAddToCart
// //                         }

// //                         sx={{
// //                             mt: 5,

// //                             background:
// //                                 "#C9A227",

// //                             color: "#fff",

// //                             px: 5,

// //                             py: 1.5,

// //                             fontSize: 16,

// //                             fontWeight: 600,

// //                             "&:hover": {
// //                                 background:
// //                                     "#B08D57",
// //                             },
// //                         }}
// //                     >

// //                         {cartLoading
// //                             ? "ADDING..."
// //                             : "ADD TO CART"}

// //                     </Button>

// //                 </Box>

// //             </Box>

// //         </Box>

// //     );

// // };
// const ProductDetails = () => {

//     const { id } = useParams();

//     // SAME CART DRAWER USED BY CUSTOMER LAYOUT
//     const { openCart } = useOutletContext();

//     const dispatch = useDispatch();

//     const {
//         selectedProduct,
//         loading,
//         error,
//     } = useSelector(
//         (state) => state.products
//     );

//     const [selectedVariant, setSelectedVariant] =
//         useState(null);

//     const [quantity, setQuantity] =
//         useState(1);

//     // ...
// };

// export default ProductDetails;
//-------------------------------------------------------------------------

// import {
//     useEffect,
//     useState,
// } from "react";

// import RemoveIcon
//     from "@mui/icons-material/Remove";

// import AddIcon
//     from "@mui/icons-material/Add";

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
//     useOutletContext,
// } from "react-router-dom";

// import {
//     getProductById,
// } from "../../features/products/ProductsThunk";

// import {
//     addToCart,
//     getCart,
// } from "../../features/cart/CartThunk";


// const ProductDetails = () => {

//     const {
//         id,
//     } = useParams();


//     // ============================================
//     // IMPORTANT
//     // ============================================

//     const {
//         openCart,
//     } = useOutletContext();


//     const dispatch = useDispatch();


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
//     // LOCAL STATE
//     // ============================================

//     const [
//         selectedVariant,
//         setSelectedVariant,
//     ] = useState(null);


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

//             <Box
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//                 minHeight="70vh"
//             >

//                 <CircularProgress />

//             </Box>

//         );

//     }


//     // ============================================
//     // ERROR
//     // ============================================

//     if (error) {

//         return (

//             <Box
//                 sx={{
//                     py: 10,
//                     textAlign: "center",
//                 }}
//             >

//                 <Typography
//                     color="error"
//                 >
//                     {error}
//                 </Typography>

//             </Box>

//         );

//     }


//     // ============================================
//     // PRODUCT NOT FOUND
//     // ============================================

//     if (!selectedProduct) {

//         return (

//             <Box
//                 sx={{
//                     py: 10,
//                     textAlign: "center",
//                 }}
//             >

//                 <Typography>
//                     Product not found
//                 </Typography>

//             </Box>

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

//         setQuantity(1);

//     };


//     // ============================================
//     // QUANTITY DECREASE
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
//     // QUANTITY INCREASE
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
//         // VARIANT REQUIRED
//         // ----------------------------------------

//         if (!selectedVariant) {

//             alert(
//                 "Please select size"
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
//         // CART DATA
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

//             // ====================================
//             // ADD PRODUCT
//             // ====================================

//             await dispatch(
//                 addToCart(cartItem)
//             ).unwrap();


//             console.log(
//                 "PRODUCT DETAILS: CART UPDATED"
//             );


//             // ====================================
//             // GET LATEST CART
//             // ====================================

//             await dispatch(
//                 getCart()
//             ).unwrap();


//             console.log(
//                 "PRODUCT DETAILS: OPENING CART"
//             );


//             // ====================================
//             // OPEN CART DRAWER
//             // ====================================

//             openCart();


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

//                     maxWidth: 1400,

//                     mx: "auto",
//                 }}
//             >

//                 {/* ================================= */}
//                 {/* IMAGE */}
//                 {/* ================================= */}

//                 <Box>

//                     <Box
//                         component="img"

//                         src={
//                             selectedProduct.images
//                                 ?. [0]
//                                 ?.url
//                         }

//                         alt={
//                             selectedProduct.productName
//                         }

//                         sx={{
//                             width: "100%",

//                             maxWidth: 600,

//                             height: {
//                                 xs: 450,
//                                 md: 650,
//                             },

//                             objectFit: "cover",

//                             borderRadius: 2,

//                             display: "block",
//                         }}
//                     />

//                 </Box>


//                 {/* ================================= */}
//                 {/* DETAILS */}
//                 {/* ================================= */}

//                 <Box>

//                     {/* PRODUCT NAME */}

//                     <Typography
//                         variant="h3"
//                         sx={{
//                             fontSize: {
//                                 xs: 32,
//                                 md: 48,
//                             },

//                             fontWeight: 500,
//                         }}
//                     >
//                         {
//                             selectedProduct.productName
//                         }
//                     </Typography>


//                     {/* DESCRIPTION */}

//                     {selectedProduct.description && (

//                         <Typography
//                             mt={2}
//                             color="text.secondary"
//                             sx={{
//                                 lineHeight: 1.8,
//                             }}
//                         >
//                             {
//                                 selectedProduct.description
//                             }
//                         </Typography>

//                     )}


//                     {/* PRICE */}

//                     <Typography
//                         sx={{
//                             mt: 3,

//                             fontSize: 30,

//                             fontWeight: 700,

//                             color: "#C9A227",
//                         }}
//                     >
//                         ₹{" "}
//                         {
//                             selectedVariant?.sellingPrice ??
//                             selectedProduct.sellingPrice
//                         }
//                     </Typography>


//                     {/* ================================= */}
//                     {/* SIZE / VARIANT */}
//                     {/* ================================= */}

//                     {variants.length > 0 && (

//                         <>

//                             <Typography
//                                 sx={{
//                                     mt: 5,
//                                     mb: 2,
//                                     fontWeight: 600,
//                                 }}
//                             >
//                                 Size
//                             </Typography>


//                             <ToggleButtonGroup
//                                 exclusive

//                                 value={
//                                     selectedVariant?._id ||
//                                     ""
//                                 }

//                                 onChange={
//                                     handleVariantChange
//                                 }

//                                 sx={{
//                                     flexWrap:
//                                         "wrap",
//                                 }}
//                             >

//                                 {variants.map(
//                                     (variant) => (

//                                         <ToggleButton
//                                             key={
//                                                 variant._id
//                                             }

//                                             value={
//                                                 variant._id
//                                             }

//                                             sx={{
//                                                 minWidth: 60,

//                                                 "&.Mui-selected":
//                                                     {
//                                                         backgroundColor:
//                                                             "#C9A227",

//                                                         color:
//                                                             "#fff",

//                                                         "&:hover":
//                                                             {
//                                                                 backgroundColor:
//                                                                     "#B08D57",
//                                                             },
//                                                     },
//                                             }}
//                                         >

//                                             {
//                                                 variant
//                                                     .attributes
//                                                     ?.map(
//                                                         (
//                                                             attr
//                                                         ) =>
//                                                             attr.value
//                                                     )
//                                                     .filter(
//                                                         Boolean
//                                                     )
//                                                     .join(
//                                                         " / "
//                                                     )
//                                             }

//                                         </ToggleButton>

//                                     )
//                                 )}

//                             </ToggleButtonGroup>

//                         </>

//                     )}


//                     {/* ================================= */}
//                     {/* SELECTED VARIANT DETAILS */}
//                     {/* ================================= */}

//                     {selectedVariant && (

//                         <Box
//                             mt={3}
//                         >

//                             <Typography>
//                                 <b>Color:</b>{" "}
//                                 {
//                                     selectedVariant
//                                         .color ||
//                                     selectedVariant
//                                         .attributes
//                                         ?.find(
//                                             (
//                                                 attr
//                                             ) =>
//                                                 attr.colorCode
//                                         )
//                                         ?.colorCode ||
//                                     "-"
//                                 }
//                             </Typography>


//                             <Typography
//                                 mt={1}
//                             >
//                                 <b>Stock:</b>{" "}
//                                 {
//                                     selectedVariant.stock
//                                 }
//                             </Typography>


//                             <Typography
//                                 mt={1}
//                             >
//                                 <b>SKU:</b>{" "}
//                                 {
//                                     selectedVariant.sku ||
//                                     "-"
//                                 }
//                             </Typography>


//                             <Typography
//                                 mt={1}
//                             >
//                                 <b>Barcode:</b>{" "}
//                                 {
//                                     selectedVariant.barcode ||
//                                     "-"
//                                 }
//                             </Typography>

//                         </Box>

//                     )}


//                     {/* ================================= */}
//                     {/* QUANTITY */}
//                     {/* ================================= */}

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
//                             onClick={
//                                 decreaseQuantity
//                             }

//                             disabled={
//                                 quantity <= 1
//                             }
//                         >

//                             <RemoveIcon />

//                         </IconButton>


//                         <Typography
//                             sx={{
//                                 fontSize: 20,
//                                 minWidth: 30,
//                                 textAlign: "center",
//                             }}
//                         >
//                             {quantity}
//                         </Typography>


//                         <IconButton
//                             onClick={
//                                 increaseQuantity
//                             }

//                             disabled={
//                                 !selectedVariant ||
//                                 quantity >= currentStock
//                             }
//                         >

//                             <AddIcon />

//                         </IconButton>

//                     </Box>


//                     {/* ================================= */}
//                     {/* ADD TO CART */}
//                     {/* ================================= */}

//                     <Button
//                         variant="contained"

//                         disabled={
//                             cartLoading ||
//                             !selectedVariant ||
//                             currentStock <= 0
//                         }

//                         onClick={
//                             handleAddToCart
//                         }

//                         sx={{
//                             mt: 5,

//                             backgroundColor:
//                                 "#C9A227",

//                             color: "#fff",

//                             px: 5,

//                             py: 1.5,

//                             fontSize: 16,

//                             "&:hover": {
//                                 backgroundColor:
//                                     "#B08D57",
//                             },

//                             "&.Mui-disabled": {
//                                 backgroundColor:
//                                     "#ddd",

//                                 color:
//                                     "#777",
//                             },
//                         }}
//                     >

//                         {cartLoading
//                             ? "ADDING..."
//                             : currentStock <= 0 &&
//                               selectedVariant
//                                 ? "OUT OF STOCK"
//                                 : "ADD TO CART"}

//                     </Button>

//                 </Box>

//             </Box>

//         </Box>

//     );

// };


// export default ProductDetails;
//------------------------------------------------

// import {
//     useEffect,
//     useState,
// } from "react";

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

// import CartDrawer from "../../components/cart/CartDrawer";


// const ProductDetails = () => {

//     const { id } = useParams();

//     const dispatch = useDispatch();


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
//     // LOCAL STATE
//     // ============================================

//     const [
//         selectedVariant,
//         setSelectedVariant,
//     ] = useState(null);


//     const [
//         quantity,
//         setQuantity,
//     ] = useState(1);


//     const [
//         cartOpen,
//         setCartOpen,
//     ] = useState(false);


//     // ============================================
//     // GET PRODUCT
//     // ============================================

//     useEffect(() => {

//         if (!id) {
//             return;
//         }

//         // Clear previous product visually
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
//                 <VisitorNavbar
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
//                 <VisitorNavbar
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
//                 <VisitorNavbar
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

//         setQuantity(1);

//     };


//     // ============================================
//     // DECREASE
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
//     // INCREASE
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
//         // CART DATA
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

//             // ====================================
//             // ADD
//             // ====================================

//             await dispatch(
//                 addToCart(cartItem)
//             ).unwrap();


//             // ====================================
//             // REFRESH CART
//             // ====================================

//             await dispatch(
//                 getCart()
//             ).unwrap();


//             // ====================================
//             // OPEN CART
//             // ====================================

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
//                 VISITOR NAVBAR
//             ===================================== */}

//             <VisitorNavbar
//                 onCartClick={() =>
//                     setCartOpen(true)
//                 }
//             />


//             {/* =====================================
//                 PRODUCT
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
//                             component="img"

//                             src={
//                                 selectedProduct
//                                     .images
//                                     ?. [0]
//                                     ?.url ||
//                                 "/no-image.png"
//                             }

//                             alt={
//                                 selectedProduct
//                                     .productName ||
//                                 "Product"
//                             }

//                             onError={(event) => {

//                                 event.currentTarget.src =
//                                     "/no-image.png";

//                             }}

//                             sx={{
//                                 width: "100%",

//                                 maxWidth: 600,

//                                 height: {
//                                     xs: 450,
//                                     md: 650,
//                                 },

//                                 objectFit: "cover",

//                                 borderRadius: 2,

//                                 display: "block",

//                                 backgroundColor:
//                                     "#f5f5f5",
//                             }}
//                         />

//                     </Box>


//                     {/* =================================
//                         DETAILS
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
//                             selectedProduct.description && (

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
//                                             display: "flex",
//                                             flexWrap: "wrap",
//                                             gap: 1,
//                                         }}
//                                     >

//                                         {
//                                             variants.map(
//                                                 (variant) => (

//                                                     <ToggleButton
//                                                         key={
//                                                             variant._id
//                                                         }

//                                                         value={
//                                                             variant._id
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

//                                 <Box
//                                     mt={3}
//                                 >

//                                     <Typography>
//                                         <b>Color:</b>{" "}

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


//                                     <Typography
//                                         mt={1}
//                                     >
//                                         <b>Stock:</b>{" "}

//                                         {
//                                             selectedVariant
//                                                 .stock
//                                         }

//                                     </Typography>


//                                     <Typography
//                                         mt={1}
//                                     >
//                                         <b>SKU:</b>{" "}

//                                         {
//                                             selectedVariant
//                                                 .sku ||
//                                             "-"
//                                         }

//                                     </Typography>


//                                     <Typography
//                                         mt={1}
//                                     >
//                                         <b>Barcode:</b>{" "}

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
//                                     textAlign: "center",
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