// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@mui/material";


// const ProductTable = ({ products }) => {


// return (

// <TableContainer component={Paper} elevation={0}>

// <Table>


// <TableHead>

// <TableRow>

// <TableCell>Product</TableCell>
// <TableCell>Brand</TableCell>
// <TableCell>Purchase Price</TableCell>
// <TableCell>Selling Price</TableCell>
// <TableCell>Stock</TableCell>

// </TableRow>

// </TableHead>



// <TableBody>


// {
// products.length === 0 ?

// (
// <TableRow>

// <TableCell colSpan={5}>
// No Products Available
// </TableCell>

// </TableRow>
// )

// :

// products.map((product)=>(


// <TableRow key={product._id}>


// <TableCell>
// {product.productName}
// </TableCell>


// <TableCell>
// {product.brand}
// </TableCell>


// <TableCell>
// ₹ {product.purchasePrice}
// </TableCell>


// <TableCell>
// ₹ {product.sellingPrice}
// </TableCell>


// <TableCell>
// {product.initialStock}
// </TableCell>


// </TableRow>


// ))


// }


// </TableBody>


// </Table>

// </TableContainer>


// );

// };


// export default ProductTable;
//-----------------------------------

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
//   products,
//   onEdit,
//   onDelete
// }) => {


// return (

// <TableContainer
// component={Paper}
// elevation={0}
// >


// <Table>


// <TableHead>

// <TableRow>

// <TableCell>Image</TableCell>

// <TableCell>Product</TableCell>

// <TableCell>Brand</TableCell>

// <TableCell>Purchase Price</TableCell>

// <TableCell>Selling Price</TableCell>

// <TableCell>Stock</TableCell>

// <TableCell align="center">
// Actions
// </TableCell>


// </TableRow>

// </TableHead>



// <TableBody>


// {
// products.length === 0 ?

// (
// <TableRow>

// <TableCell colSpan={7} align="center">

// No Products Available

// </TableCell>

// </TableRow>
// )


// :


// products.map((product)=>(


// <TableRow
// key={product._id}
// >


// <TableCell>

// <Avatar
// src={product.image}
// variant="rounded"
// sx={{
// width:50,
// height:50
// }}
// />

// </TableCell>



// <TableCell>

// {product.productName}

// </TableCell>



// <TableCell>

// {product.brand}

// </TableCell>



// <TableCell>

// ₹ {product.purchasePrice}

// </TableCell>



// <TableCell>

// ₹ {product.sellingPrice}

// </TableCell>



// <TableCell>

// {product.initialStock}

// </TableCell>



// <TableCell align="center">


// <IconButton
// color="primary"
// onClick={() =>
// onEdit(product)
// }
// >

// <EditIcon />

// </IconButton>



// <IconButton
// color="error"
// onClick={() =>
// onDelete(product)
// }
// >

// <DeleteIcon />

// </IconButton>


// </TableCell>


// </TableRow>


// ))


// }


// </TableBody>


// </Table>


// </TableContainer>


// );

// };


// export default ProductTable;
//-----------------------------------------------

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
//   onDelete
// }) => {


//   console.log("TABLE PRODUCTS:", products);


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


//           {
//             products.length === 0 ?


//             (
//               <TableRow>

//                 <TableCell
//                   colSpan={7}
//                   align="center"
//                 >
//                   No Products Available
//                 </TableCell>

//               </TableRow>
//             )


//             :


//             products.map((product)=>(


//               <TableRow
//                 key={product._id}
//               >


//                 <TableCell>

//                   <Avatar
//                     src={product.image}
//                     variant="rounded"
//                     sx={{
//                       width:50,
//                       height:50
//                     }}
//                   />

//                 </TableCell>



//                 <TableCell>
//                   {product.productName || product.name}
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
//                   {product.initialStock || product.stock || 0}
//                 </TableCell>



//                 <TableCell align="center">


//                   <IconButton
//                     color="primary"
//                     onClick={() =>
//                       onEdit(product)
//                     }
//                   >

//                     <EditIcon />

//                   </IconButton>



//                   <IconButton
//                     color="error"
//                     onClick={() =>
//                       onDelete(product)
//                     }
//                   >

//                     <DeleteIcon />

//                   </IconButton>


//                 </TableCell>


//               </TableRow>


//             ))


//           }


//         </TableBody>


//       </Table>

//     </TableContainer>

//   );

// };


// export default ProductTable;

//-------------------------------------------------
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

    <TableContainer
      component={Paper}
      elevation={0}
    >

      <Table>

        <TableHead>

          <TableRow>

            <TableCell>Image</TableCell>

            <TableCell>Product</TableCell>

            <TableCell>Category</TableCell>

            <TableCell>Brand</TableCell>

            <TableCell>Purchase Price</TableCell>

            <TableCell>Selling Price</TableCell>

            <TableCell>Stock</TableCell>

            <TableCell align="center">
              Actions
            </TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {products.length === 0 ? (

            <TableRow>

              <TableCell
                colSpan={8}
                align="center"
              >
                No Products Available
              </TableCell>

            </TableRow>

          ) : (

            products.map((product) => (

              <TableRow key={product._id}>

                <TableCell>

                  <Avatar
                    src={product.image}
                    variant="rounded"
                    sx={{
                      width: 50,
                      height: 50,
                    }}
                  />

                </TableCell>

                <TableCell>
                  {product.productName}
                </TableCell>

                <TableCell>
                  {product.category?.categoryName || "-"}
                </TableCell>

                <TableCell>
                  {product.brand || "-"}
                </TableCell>

                <TableCell>
                  ₹ {product.purchasePrice || 0}
                </TableCell>

                <TableCell>
                  ₹ {product.sellingPrice || 0}
                </TableCell>

                <TableCell>
                  {product.initialStock || 0}
                </TableCell>

                <TableCell align="center">

                  <IconButton
                    color="primary"
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

            ))

          )}

        </TableBody>

      </Table>

    </TableContainer>

  );

};

export default ProductTable;