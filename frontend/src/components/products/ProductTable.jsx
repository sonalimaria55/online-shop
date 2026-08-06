

// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   IconButton,
//   Avatar,
// } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// const ProductTable = ({
//   products = [],
//   onEdit,
//   onDelete,
// }) => {

//   return (

//     <TableContainer
//       component={Paper}
//       elevation={0}
//     >

//       <Table>

//         <TableHead>

//           <TableRow>

//             <TableCell>Image</TableCell>

//             <TableCell>Product</TableCell>

//             <TableCell>Category</TableCell>

//             <TableCell>Brand</TableCell>

//             <TableCell>Purchase Price</TableCell>

//             <TableCell>Selling Price</TableCell>

//             <TableCell>Stock</TableCell>

//             <TableCell align="center">
//               Actions
//             </TableCell>

//           </TableRow>

//         </TableHead>

//         <TableBody>

//           {products.length === 0 ? (

//             <TableRow>

//               <TableCell
//                 colSpan={8}
//                 align="center"
//               >
//                 No Products Available
//               </TableCell>

//             </TableRow>

//           ) : (

//             products.map((product) => (

//               <TableRow key={product._id}>
//                 <TableCell>

//                   <Avatar
//                     src={product.images?.[0]?.url || ""}
//                     variant="rounded"
//                     sx={{
//                       width: 50,
//                       height: 50,
//                     }}
//                   />

//                 </TableCell>

//                 <TableCell>
//                   {product.productName}
//                 </TableCell>

//                 <TableCell>
//                   {product.category?.categoryName || "-"}
//                 </TableCell>

//                 <TableCell>
//                   {product.brand || "-"}
//                 </TableCell>

//                 <TableCell>
//                   ₹ {product.purchasePrice || 0}
//                 </TableCell>

//                 <TableCell>
//                   ₹ {product.sellingPrice || 0}
//                 </TableCell>

//                 <TableCell>
//                   {product.initialStock || 0}
//                 </TableCell>

//                 <TableCell align="center">

//                   <IconButton
//                     color="primary"
//                     onClick={() => onEdit(product)}
//                   >
//                     <EditIcon />
//                   </IconButton>

//                   <IconButton
//                     color="error"
//                     onClick={() => onDelete(product)}
//                   >
//                     <DeleteIcon />
//                   </IconButton>

//                 </TableCell>

//               </TableRow>

//             ))

//           )}

//         </TableBody>

//       </Table>

//     </TableContainer>

//   );

// };

// export default ProductTable;

//---------------------------------------------------------------------

// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   IconButton,
//   Avatar,
// } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// const ProductTable = ({
//   products = [],
//   onEdit,
//   onDelete,
// }) => {
//   console.log("PRODUCT TABLE:", products);

//   return (
//     <TableContainer
//       component={Paper}
//       elevation={0}
//     >
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Image</TableCell>
//             <TableCell>Product</TableCell>
//             <TableCell>Category</TableCell>
//             <TableCell>Brand</TableCell>
//             <TableCell>Purchase Price</TableCell>
//             <TableCell>Selling Price</TableCell>
//             <TableCell>Stock</TableCell>
//             <TableCell align="center">
//               Actions
//             </TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {products.length === 0 ? (
//             <TableRow>
//               <TableCell
//                 colSpan={8}
//                 align="center"
//               >
//                 No Products Available
//               </TableCell>
//             </TableRow>
//           ) : (
//             products.map((product) => {
//               console.log("Product:", product.productName);
//               console.log("Images:", product.images);

//               return (
//                 <TableRow key={product._id}>
//                   <TableCell sx={{ minWidth: 280 }}>
//                     <div
//                       style={{
//                         display: "flex",
//                         gap: "8px",
//                         flexWrap: "wrap",
//                         alignItems: "center",
//                       }}
//                     >
//                       {product.images?.length > 0 ? (
//                         product.images.map((image, index) => (
//                           <img
//                             key={image._id || index}
//                             src={image.url}
//                             alt={`${product.productName}-${index + 1}`}
//                             loading="lazy"
//                             style={{
//                               width: "55px",
//                               height: "55px",
//                               objectFit: "cover",
//                               borderRadius: "8px",
//                               border: "1px solid #ddd",
//                               cursor: "pointer",
//                               transition: "0.2s ease",
//                             }}
//                             onMouseOver={(e) => {
//                               e.target.style.transform = "scale(1.1)";
//                             }}
//                             onMouseOut={(e) => {
//                               e.target.style.transform = "scale(1)";
//                             }}
//                           />
//                         ))
//                       ) : (
//                         <Avatar
//                           variant="rounded"
//                           sx={{
//                             width: 55,
//                             height: 55,
//                           }}
//                         />
//                       )}
//                     </div>
//                   </TableCell>

//                   <TableCell>
//                     {product.productName}
//                   </TableCell>

//                   <TableCell>
//                     {product.category?.categoryName || "-"}
//                   </TableCell>

//                   <TableCell>
//                     {product.brand || "-"}
//                   </TableCell>

//                   <TableCell>
//                     ₹ {product.purchasePrice || 0}
//                   </TableCell>

//                   <TableCell>
//                     ₹ {product.sellingPrice || 0}
//                   </TableCell>

//                   <TableCell>
//                     {product.initialStock || 0}
//                   </TableCell>

//                   <TableCell align="center">
//                     <IconButton
//                       color="primary"
//                       onClick={() => onEdit(product)}
//                     >
//                       <EditIcon />
//                     </IconButton>

//                     <IconButton
//                       color="error"
//                       onClick={() => onDelete(product)}
//                     >
//                       <DeleteIcon />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               );
//             })
//           )}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default ProductTable;



import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Avatar,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductTable = ({
  products = [],
  onEdit,
  onDelete,
}) => {

  return (

    <TableContainer component={Paper}>

      <Table>

        <TableHead>

          <TableRow>

            <TableCell>Image</TableCell>

            <TableCell>Name</TableCell>

            <TableCell>Category</TableCell>

            <TableCell>Brand</TableCell>

            <TableCell>Price</TableCell>

            <TableCell>Variants</TableCell>

            <TableCell>Stock</TableCell>

            <TableCell>Action</TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {products.map((product) => {

            const totalStock =
              product.productVariants?.reduce(
                (sum, v) => sum + Number(v.stock || 0),
                0
              ) || 0;

            return (

              <TableRow key={product._id}>

                <TableCell>

                  <Avatar
                    src={product.images?.[0]?.url}
                    variant="rounded"
                  />

                </TableCell>

                <TableCell>
                  {product.productName}
                </TableCell>

                <TableCell>
                  {product.category?.categoryName}
                </TableCell>

                <TableCell>
                  {product.brand}
                </TableCell>

                <TableCell>
                  ₹{product.sellingPrice}
                </TableCell>

                <TableCell>
                  {product.productVariants?.length || 0}
                </TableCell>

                <TableCell>
                  {totalStock}
                </TableCell>

                <TableCell>

                  <IconButton
                    onClick={() => onEdit(product)}
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() => onDelete(product)}
                  >
                    <DeleteIcon />
                  </IconButton>

                </TableCell>

              </TableRow>

            );

          })}

        </TableBody>

      </Table>

    </TableContainer>

  );

};

export default ProductTable;