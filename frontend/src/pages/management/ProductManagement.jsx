// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";

// import {
//     Box,
//     Button,
//     Typography,
//     Paper,
// } from "@mui/material";

// import AddIcon from "@mui/icons-material/Add";

// import { getProducts } from "../../features/products/ProductsThunk";

// import ProductTable from "../../components/management/products/ProductTable";
// import ProductDialog from "../../components/management/products/ProductDialog";

// const ProductManagement = () => {

//     const dispatch = useDispatch();

//     const [openDialog, setOpenDialog] = useState(false);

//     const [selectedProduct, setSelectedProduct] = useState(null);


//     useEffect(() => {

//         dispatch(getProducts());

//     }, [dispatch]);


//     const handleAddProduct = () => {

//         setSelectedProduct(null);

//         setOpenDialog(true);

//     };


//     const handleEditProduct = (product) => {

//         setSelectedProduct(product);

//         setOpenDialog(true);

//     };


//     const handleCloseDialog = () => {

//         setOpenDialog(false);

//         setSelectedProduct(null);

//     };


//     return (

//         <Box p={3}>

//             <Paper sx={{ p: 3 }}>

//                 <Box
//                     display="flex"
//                     justifyContent="space-between"
//                     alignItems="center"
//                     mb={3}
//                 >

//                     <Typography
//                         variant="h5"
//                         fontWeight={600}
//                     >
//                         Product Management
//                     </Typography>

//                     <Button
//                         variant="contained"
//                         startIcon={<AddIcon />}
//                         onClick={handleAddProduct}
//                     >
//                         Add Product
//                     </Button>

//                 </Box>

//                 {/* <ProductTable
//                     onEdit={handleEditProduct}
//                 /> */}

//                 <ProductTable
//                     products={products}
//                     loading={loading}
//                     onEdit={handleEditProduct}
//                 />

//             </Paper>

//             <ProductDialog
//                 open={openDialog}
//                 onClose={handleCloseDialog}
//                 product={selectedProduct}
//             />

//         </Box>

//     );

// };

// export default ProductManagement;
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    Box,
    Button,
    Typography,
    Paper,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import { getProducts } from "../../features/products/ProductsThunk";

import ProductTable from "../../components/management/products/ProductTable";
import ProductDialog from "../../components/management/products/ProductDialog";


const ProductManagement = () => {


    const dispatch = useDispatch();


    const {
        products = [],
        loading = false,

    } = useSelector(
        (state)=>state.products
    );



    const [openDialog,setOpenDialog] = useState(false);

    const [selectedProduct,setSelectedProduct] = useState(null);




    useEffect(()=>{

        dispatch(getProducts());

    },[dispatch]);





    const handleAddProduct = ()=>{

        setSelectedProduct(null);

        setOpenDialog(true);

    };





    const handleEditProduct = (product)=>{

        setSelectedProduct(product);

        setOpenDialog(true);

    };





    const handleCloseDialog = ()=>{

        setOpenDialog(false);

        setSelectedProduct(null);

    };





    const refreshProducts = ()=>{

        dispatch(getProducts());

    };





    return (

        <Box p={3}>


            <Paper sx={{p:3}}>


                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={3}
                >


                    <Typography
                        variant="h5"
                        fontWeight={600}
                    >
                        Product Management
                    </Typography>




                    <Button

                        variant="contained"

                        startIcon={<AddIcon />}

                        onClick={handleAddProduct}

                    >

                        Add Product

                    </Button>


                </Box>




                <ProductTable

                    products={products}

                    loading={loading}

                    onEdit={handleEditProduct}

                />



            </Paper>






            <ProductDialog

                open={openDialog}

                onClose={handleCloseDialog}

                product={selectedProduct}

                refreshProducts={refreshProducts}

            />



        </Box>

    );

};


export default ProductManagement;