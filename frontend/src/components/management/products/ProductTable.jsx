// import { useDispatch, useSelector } from "react-redux";

// import {
//     Box,
//     Avatar,
//     Chip,
//     IconButton,
// } from "@mui/material";

// import {
//     DataGrid,
// } from "@mui/x-data-grid";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// import { deleteProduct } from "../../../features/products/ProductsThunk";

// const ProductTable = ({ onEdit }) => {

//     const dispatch = useDispatch();

//     const {
//         products,
//         loading,
//     } = useSelector((state) => state.products);


//     const handleDelete = (id) => {

//         if (window.confirm("Delete this product?")) {

//             dispatch(deleteProduct(id));

//         }

//     };


//     const columns = [

//         {
//             field: "image",
//             headerName: "Image",
//             width: 90,

//             renderCell: (params) => (

//                 <Avatar
//                     src={params.row.images?.[0]?.url}
//                     variant="rounded"
//                     sx={{
//                         width: 55,
//                         height: 55,
//                     }}
//                 />

//             ),

//         },

//         {
//             field: "productCode",
//             headerName: "Code",
//             width: 120,
//         },

//         {
//             field: "productName",
//             headerName: "Product",
//             flex: 1,
//             minWidth: 220,
//         },

//         {
//             field: "category",
//             headerName: "Category",
//             width: 170,

//             valueGetter: (_, row) =>
//                 row.category?.categoryName || "-",

//         },

//         {
//             field: "sellingPrice",
//             headerName: "Price",
//             width: 120,

//             renderCell: (params) =>
//                 `₹ ${params.value}`,

//         },

//         {
//             field: "stock",
//             headerName: "Stock",
//             width: 120,

//             valueGetter: (_, row) =>

//                 row.productVariants?.reduce(

//                     (total, item) => total + item.stock,

//                     0

//                 ) || 0,

//         },

//         {
//             field: "isFeatured",
//             headerName: "Featured",
//             width: 120,

//             renderCell: (params) => (

//                 <Chip

//                     label={
//                         params.value
//                             ? "Yes"
//                             : "No"
//                     }

//                     color={
//                         params.value
//                             ? "success"
//                             : "default"
//                     }

//                     size="small"

//                 />

//             ),

//         },

//         {
//             field: "isActive",
//             headerName: "Status",
//             width: 120,

//             renderCell: (params) => (

//                 <Chip

//                     label={
//                         params.value
//                             ? "Active"
//                             : "Inactive"
//                     }

//                     color={
//                         params.value
//                             ? "primary"
//                             : "error"
//                     }

//                     size="small"

//                 />

//             ),

//         },

//         {
//             field: "actions",
//             headerName: "Actions",
//             width: 120,

//             sortable: false,

//             renderCell: (params) => (

//                 <>

//                     <IconButton
//                         color="primary"
//                         onClick={() => onEdit(params.row)}
//                     >
//                         <EditIcon />
//                     </IconButton>

//                     <IconButton
//                         color="error"
//                         onClick={() => handleDelete(params.row._id)}
//                     >
//                         <DeleteIcon />
//                     </IconButton>

//                 </>

//             ),

//         },

//     ];


//     return (

//         <Box
//             sx={{
//                 height: 650,
//                 width: "100%",
//             }}
//         >

//             <DataGrid

//                 rows={products}

//                 columns={columns}

//                 loading={loading}

//                 getRowId={(row) => row._id}

//                 pageSizeOptions={[5, 10, 20]}

//                 initialState={{

//                     pagination: {

//                         paginationModel: {

//                             page: 0,

//                             pageSize: 10,

//                         },

//                     },

//                 }}

//             />

//         </Box>

//     );

// };

// export default ProductTable;
//---------------------------------------------------------


// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Paper,
//     IconButton,
//     Avatar,
//     Chip,
//     Box,
//     Typography,
//     CircularProgress,
// } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";


// const ProductTable = ({
//     products,
//     loading,
//     onEdit,
//     onDelete,
// }) => {


//     if (loading) {

//         return (

//             <Box
//                 display="flex"
//                 justifyContent="center"
//                 py={5}
//             >

//                 <CircularProgress />

//             </Box>

//         );

//     }


//     return (

//         <TableContainer
//             component={Paper}
//         >

//             <Table>


//                 <TableHead>

//                     <TableRow>

//                         <TableCell>
//                             Image
//                         </TableCell>


//                         <TableCell>
//                             Product Name
//                         </TableCell>


//                         <TableCell>
//                             Category
//                         </TableCell>


//                         <TableCell>
//                             Price
//                         </TableCell>


//                         <TableCell>
//                             Variants
//                         </TableCell>


//                         <TableCell>
//                             Status
//                         </TableCell>


//                         <TableCell align="center">
//                             Actions
//                         </TableCell>

//                     </TableRow>

//                 </TableHead>



//                 <TableBody>


//                     {
//                         products.length === 0 ?

//                         (

//                             <TableRow>

//                                 <TableCell
//                                     colSpan={7}
//                                     align="center"
//                                 >

//                                     <Typography>
//                                         No Products Found
//                                     </Typography>

//                                 </TableCell>


//                             </TableRow>

//                         )

//                         :

//                         products.map((product)=>(


//                             <TableRow
//                                 key={product._id}
//                             >


//                                 <TableCell>


//                                     <Avatar
//                                         variant="square"
//                                         src={
//                                             product.images?.[0]?.url
//                                         }
//                                     />


//                                 </TableCell>



//                                 <TableCell>

//                                     {product.productName}

//                                 </TableCell>



//                                 <TableCell>

//                                     {
//                                         product.category?.categoryName
//                                         ||
//                                         "-"
//                                     }

//                                 </TableCell>



//                                 <TableCell>

//                                     ₹ {product.sellingPrice}

//                                 </TableCell>



//                                 <TableCell>


//                                     <Chip

//                                         label={
//                                             product.productVariants
//                                             ?.length || 0
//                                         }

//                                         size="small"

//                                         variant="outlined"

//                                     />


//                                 </TableCell>



//                                 <TableCell>


//                                     <Chip

//                                         label={
//                                             product.isActive
//                                             ? "Active"
//                                             : "Inactive"
//                                         }


//                                         color={
//                                             product.isActive
//                                             ? "success"
//                                             : "default"
//                                         }


//                                         size="small"

//                                     />


//                                 </TableCell>



//                                 <TableCell align="center">


//                                     <IconButton

//                                         color="primary"

//                                         onClick={() =>
//                                             onEdit(product)
//                                         }

//                                     >

//                                         <EditIcon />

//                                     </IconButton>



//                                     <IconButton

//                                         color="error"

//                                         onClick={() =>
//                                             onDelete(product._id)
//                                         }

//                                     >

//                                         <DeleteIcon />

//                                     </IconButton>


//                                 </TableCell>



//                             </TableRow>


//                         ))

//                     }


//                 </TableBody>


//             </Table>


//         </TableContainer>

//     );

// };


// export default ProductTable;
//--------------------------------------------------------------------------------------------------------------
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Paper,
//     Button,
//     CircularProgress,
//     Box,
//     Typography,
// } from "@mui/material";


// const ProductTable = ({
//     products = [],
//     loading = false,
//     onEdit,
// }) => {


//     if (loading) {
//         return (
//             <Box
//                 display="flex"
//                 justifyContent="center"
//                 p={5}
//             >
//                 <CircularProgress />
//             </Box>
//         );
//     }



//     if (!products.length) {
//         return (
//             <Typography
//                 textAlign="center"
//                 p={4}
//             >
//                 No Products Found
//             </Typography>
//         );
//     }



//     return (

//         <TableContainer component={Paper}>


//             <Table>


//                 <TableHead>

//                     <TableRow>

//                         <TableCell>
//                             Image
//                         </TableCell>

//                         <TableCell>
//                             Product Code
//                         </TableCell>

//                         <TableCell>
//                             Product Name
//                         </TableCell>

//                         <TableCell>
//                             Category
//                         </TableCell>

//                         <TableCell>
//                             Price
//                         </TableCell>

//                         <TableCell>
//                             Status
//                         </TableCell>

//                         <TableCell>
//                             Action
//                         </TableCell>

//                     </TableRow>

//                 </TableHead>



//                 <TableBody>


//                     {products.map((product)=>(

//                         <TableRow
//                             key={product._id}
//                         >


//                             <TableCell>

//                                 <Box
//                                     component="img"
//                                     src={
//                                         product.images?.[0]?.url ||
//                                         "/default-product.jpg"
//                                     }
//                                     sx={{
//                                         width:60,
//                                         height:60,
//                                         objectFit:"cover",
//                                     }}
//                                 />

//                             </TableCell>



//                             <TableCell>
//                                 {product.productCode}
//                             </TableCell>



//                             <TableCell>
//                                 {product.productName}
//                             </TableCell>



//                             <TableCell>
//                                 {
//                                     product.category?.categoryName ||
//                                     "-"
//                                 }
//                             </TableCell>



//                             <TableCell>
//                                 ₹ {product.sellingPrice}
//                             </TableCell>



//                             <TableCell>
//                                 {
//                                     product.isActive
//                                     ?
//                                     "Active"
//                                     :
//                                     "Inactive"
//                                 }
//                             </TableCell>



//                             <TableCell>

//                                 <Button
//                                     variant="outlined"
//                                     onClick={()=>
//                                         onEdit(product)
//                                     }
//                                 >
//                                     Edit
//                                 </Button>

//                             </TableCell>



//                         </TableRow>

//                     ))}



//                 </TableBody>



//             </Table>


//         </TableContainer>

//     );

// };


// export default ProductTable;
//----------------------------------------
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    CircularProgress,
    Box,
    Typography,
    Avatar,
} from "@mui/material";

const ProductTable = ({
    products = [],
    loading = false,
    onEdit,
    onDelete,
}) => {

    if (loading) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                p={5}
            >
                <CircularProgress />
            </Box>
        );
    }

    if (!products.length) {
        return (
            <Typography
                textAlign="center"
                p={4}
            >
                No Products Found
            </Typography>
        );
    }

    return (
        <TableContainer component={Paper}>

            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell>Images</TableCell>

                        <TableCell>Product Code</TableCell>

                        <TableCell>Product Name</TableCell>

                        <TableCell>Category</TableCell>

                        <TableCell>Brand</TableCell>

                        <TableCell>Price</TableCell>

                        <TableCell>Stock</TableCell>

                        <TableCell>Featured</TableCell>

                        <TableCell>Status</TableCell>

                        <TableCell align="center">
                            Action
                        </TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {products.map((product) => {

                        const totalStock =
                            product.productVariants?.reduce(
                                (sum, variant) =>
                                    sum + (variant.stock || 0),
                                0
                            ) || 0;

                        return (

                            <TableRow key={product._id}>

                                <TableCell>

                                    <Box
                                        display="flex"
                                        gap={1}
                                        flexWrap="wrap"
                                    >

                                        {product.images?.length > 0 ? (

                                            product.images.map((image, index) => (

                                                <Avatar
                                                    key={index}
                                                    src={image.url}
                                                    variant="rounded"
                                                    sx={{
                                                        width: 50,
                                                        height: 50,
                                                    }}
                                                />

                                            ))

                                        ) : (

                                            <Avatar
                                                variant="rounded"
                                                sx={{
                                                    width: 50,
                                                    height: 50,
                                                }}
                                            />

                                        )}

                                    </Box>

                                </TableCell>

                                <TableCell>
                                    {product.productCode}
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
                                    ₹ {product.sellingPrice}
                                </TableCell>

                                <TableCell>
                                    {totalStock}
                                </TableCell>

                                <TableCell>
                                    {product.isFeatured ? "Yes" : "No"}
                                </TableCell>

                                <TableCell>
                                    {product.isActive ? "Active" : "Inactive"}
                                </TableCell>

                                <TableCell align="center">

                                    <Button
                                        variant="outlined"
                                        size="small"
                                        onClick={() => onEdit(product)}
                                        sx={{ mr: 1 }}
                                    >
                                        Edit
                                    </Button>

                                    <Button
                                        variant="contained"
                                        color="error"
                                        size="small"
                                        onClick={() => onDelete(product._id)}
                                    >
                                        Delete
                                    </Button>

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