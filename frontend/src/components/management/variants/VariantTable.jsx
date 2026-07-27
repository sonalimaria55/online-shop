// import { useDispatch } from "react-redux";

// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Paper,
//     IconButton,
//     Chip,
//     CircularProgress,
//     Box,
//     Typography,
// } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// import { deleteVariant } from "../../../features/variants/VariantThunk";

// const VariantTable = ({
//     variants,
//     loading,
//     onEdit,
// }) => {

//     const dispatch = useDispatch();

//     const handleDelete = (id) => {

//         if (
//             window.confirm(
//                 "Are you sure you want to delete this variant?"
//             )
//         ) {

//             dispatch(deleteVariant(id));

//         }

//     };

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

//         <TableContainer component={Paper}>

//             <Table>

//                 <TableHead>

//                     <TableRow>

//                         <TableCell>
//                             <strong>Name</strong>
//                         </TableCell>

//                         <TableCell>
//                             <strong>Values</strong>
//                         </TableCell>

//                         <TableCell align="center">
//                             <strong>Status</strong>
//                         </TableCell>

//                         <TableCell align="center">
//                             <strong>Actions</strong>
//                         </TableCell>

//                     </TableRow>

//                 </TableHead>

//                 <TableBody>

//                     {variants.length === 0 ? (

//                         <TableRow>

//                             <TableCell
//                                 colSpan={4}
//                                 align="center"
//                             >

//                                 <Typography>

//                                     No Variants Found

//                                 </Typography>

//                             </TableCell>

//                         </TableRow>

//                     ) : (

//                         variants.map((variant) => (

//                             <TableRow key={variant._id}>

//                                 <TableCell>

//                                     {variant.name}

//                                 </TableCell>

//                                 <TableCell>

//                                     <Box
//                                         display="flex"
//                                         gap={1}
//                                         flexWrap="wrap"
//                                     >

//                                         {variant.values.map((value, index) => (

//                                             <Chip
//                                                 key={index}
//                                                 label={value}
//                                                 size="small"
//                                             />

//                                         ))}

//                                     </Box>

//                                 </TableCell>

//                                 <TableCell align="center">

//                                     <Chip
//                                         label={
//                                             variant.isActive
//                                                 ? "Active"
//                                                 : "Inactive"
//                                         }
//                                         color={
//                                             variant.isActive
//                                                 ? "success"
//                                                 : "default"
//                                         }
//                                         size="small"
//                                     />

//                                 </TableCell>

//                                 <TableCell align="center">

//                                     <IconButton
//                                         color="primary"
//                                         onClick={() =>
//                                             onEdit(variant)
//                                         }
//                                     >

//                                         <EditIcon />

//                                     </IconButton>

//                                     <IconButton
//                                         color="error"
//                                         onClick={() =>
//                                             handleDelete(
//                                                 variant._id
//                                             )
//                                         }
//                                     >

//                                         <DeleteIcon />

//                                     </IconButton>

//                                 </TableCell>

//                             </TableRow>

//                         ))

//                     )}

//                 </TableBody>

//             </Table>

//         </TableContainer>

//     );

// };

// export default VariantTable;
//-------------------------------------------------------------------------------------------------------

// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Paper
// } from "@mui/material";


// import { useSelector } from "react-redux";



// const VariantTable = ()=>{


//     const {
//         variants
//     } = useSelector(
//         state=>state.variants
//     );



//     return (

//         <TableContainer component={Paper}>


//             <Table>


//                 <TableHead>

//                     <TableRow>

//                         <TableCell>
//                             Name
//                         </TableCell>


//                         <TableCell>
//                             Values
//                         </TableCell>


//                     </TableRow>

//                 </TableHead>



//                 <TableBody>


//                 {
//                     variants.map((variant)=>(


//                         <TableRow key={variant._id}>


//                             <TableCell>

//                                 {variant.name}

//                             </TableCell>



//                             <TableCell>

//                                 {
//                                     variant.values.join(", ")
//                                 }

//                             </TableCell>



//                         </TableRow>


//                     ))
//                 }


//                 </TableBody>


//             </Table>


//         </TableContainer>

//     );

// };


// export default VariantTable;
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";


const VariantTable = ({
    variants,
    loading,
    onEdit
}) => {


    if (loading) {

        return (
            <p>
                Loading variants...
            </p>
        );

    }


    return (

        <TableContainer component={Paper}>


            <Table>


                <TableHead>

                    <TableRow>


                        <TableCell>
                            Name
                        </TableCell>


                        <TableCell>
                            Values
                        </TableCell>


                        <TableCell>
                            Action
                        </TableCell>


                    </TableRow>

                </TableHead>



                <TableBody>


                    {
                        variants && variants.length > 0 ? (

                            variants.map((variant) => (

                                <TableRow
                                    key={variant._id}
                                >


                                    <TableCell>

                                        {variant.name}

                                    </TableCell>



                                    <TableCell>

                                        {
                                            variant.values?.join(", ")
                                        }

                                    </TableCell>



                                    <TableCell>


                                        <IconButton
                                            onClick={() => onEdit(variant)}
                                        >

                                            <EditIcon />

                                        </IconButton>


                                    </TableCell>


                                </TableRow>

                            ))

                        ) : (

                            <TableRow>

                                <TableCell
                                    colSpan={3}
                                    align="center"
                                >

                                    No variants found

                                </TableCell>

                            </TableRow>

                        )
                    }


                </TableBody>


            </Table>


        </TableContainer>

    );

};


export default VariantTable;