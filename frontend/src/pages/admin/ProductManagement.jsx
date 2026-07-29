// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import {
//     Container,
//     Box,
//     Typography,
//     Button,
// } from "@mui/material";

// import AddIcon from "@mui/icons-material/Add";

// import {
//     getProducts,
//     deleteProduct,
// } from "../../features/products/ProductsThunk";

// import ProductTable from "../../components/management/products/ProductTable";
// import ProductDialog from "../../components/management/products/ProductDialog";

// const ProductManagement = () => {

//     const dispatch = useDispatch();

//     const {
//         products,
//         loading,
//     } = useSelector((state) => state.products);

//     const [open, setOpen] = useState(false);

//     const [selectedProduct, setSelectedProduct] = useState(null);

//     useEffect(() => {

//         dispatch(getProducts());

//     }, [dispatch]);

//     const handleAdd = () => {

//         setSelectedProduct(null);

//         setOpen(true);

//     };

//     const handleEdit = (product) => {

//         setSelectedProduct(product);

//         setOpen(true);

//     };

//     const handleDelete = async (id) => {

//         if (window.confirm("Are you sure you want to delete this product?")) {

//             await dispatch(deleteProduct(id));

//             dispatch(getProducts());

//         }

//     };

//     return (

//         <Container maxWidth="xl">

//             <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 my={4}
//             >

//                 <Typography variant="h4">

//                     Product Management

//                 </Typography>

//                 <Button
//                     variant="contained"
//                     startIcon={<AddIcon />}
//                     onClick={handleAdd}
//                 >

//                     Add Product

//                 </Button>

//             </Box>

//             <ProductTable
//                 products={products}
//                 loading={loading}
//                 onEdit={handleEdit}
//                 onDelete={handleDelete}
//             />

//             <ProductDialog
//                 open={open}
//                 product={selectedProduct}
//                 onClose={() => setOpen(false)}
//                 refreshProducts={() => dispatch(getProducts())}
//             />

//         </Container>

//     );

// };

// export default ProductManagement;
//--------------------------------------------

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    Container,
    Box,
    Typography,
    Button,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import {
    getProducts,
    deleteProduct,
} from "../../features/products/ProductsThunk";

import ProductTable from "../../components/management/products/ProductTable";
import ProductDialog from "../../components/management/products/ProductDialog";


const ProductManagement = () => {

    const dispatch = useDispatch();


    const {
        products,
        loading,
    } = useSelector(
        (state) => state.products
    );


    const [open,setOpen] = useState(false);

    const [selectedProduct,setSelectedProduct] = useState(null);



    useEffect(()=>{

        dispatch(getProducts());

    },[dispatch]);




    const handleAdd = ()=>{

        setSelectedProduct(null);

        setOpen(true);

    };




    const handleEdit = (product)=>{

        setSelectedProduct(product);

        setOpen(true);

    };




    const handleDelete = async(id)=>{


        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete this product?"
            );


        if(confirmDelete){

            await dispatch(
                deleteProduct(id)
            );


            dispatch(
                getProducts()
            );

        }

    };




    return (

        <Container maxWidth="xl">


            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                my={4}
            >

                <Typography variant="h4">
                    Product Management
                </Typography>


                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleAdd}
                >

                    Add Product

                </Button>


            </Box>




            <ProductTable

                products={products}

                loading={loading}

                onEdit={handleEdit}

                onDelete={handleDelete}

            />





            <ProductDialog

                open={open}

                product={selectedProduct}

                onClose={() => setOpen(false)}

                refreshProducts={() =>
                    dispatch(getProducts())
                }

            />


        </Container>

    );

};


export default ProductManagement;