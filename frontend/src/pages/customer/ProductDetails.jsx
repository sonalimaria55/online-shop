

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

import { useEffect } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../features/products/ProductsThunk";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedProduct, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    }
  }, [dispatch, id]);

  console.log(selectedProduct);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" textAlign="center" mt={5}>
        {error}
      </Typography>
    );
  }

  if (!selectedProduct) {
    return (
      <Typography textAlign="center" mt={5}>
        Product not found
      </Typography>
    );
  }

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 5,
        }}
      >
        {/* Image */}
        <Box>
          <Box
            component="img"
            src={
              selectedProduct.images?.[0]?.url ||
              "/default-product.jpg"
            }
            alt={selectedProduct.productName}
            sx={{
              width: "100%",
              height: 500,
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Details */}
        <Box>
          <Typography variant="h3">
            {selectedProduct.productName}
          </Typography>

          <Typography sx={{ mt: 2 }}>
            {selectedProduct.description}
          </Typography>

          <Typography
            sx={{
              mt: 3,
              fontSize: 28,
              fontWeight: 600,
              color: "#C9A227",
            }}
          >
            ₹ {selectedProduct.sellingPrice}
          </Typography>

          <Typography sx={{ mt: 4, mb: 1, fontWeight: 600 }}>
            Size
          </Typography>

          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {selectedProduct.productVariants?.length > 0 ? (
              selectedProduct.productVariants.map((variant, index) => (
                <Button key={index} variant="outlined">
                  {variant.value}
                </Button>
              ))
            ) : (
              <Typography>No sizes available</Typography>
            )}
          </Box>

          <Button
            variant="contained"
            sx={{
              mt: 4,
              background: "#C9A227",
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