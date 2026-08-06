// import { 
//     useMemo,
//     useState,
//         useEffect,
// } from "react";


// import {
//     Box,
//     Typography,
//     FormControl,
//     InputLabel,
//     Select,
//     MenuItem,
//     Chip,
//     OutlinedInput,
//     Stack,
//     Button,
//     Checkbox,
//     FormControlLabel,
//     TextField,
//     IconButton,
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableRow,
//     Paper
// } from "@mui/material";


// import DeleteIcon from "@mui/icons-material/Delete";


// import { useSelector } from "react-redux";



// const ProductVariants = ({
//     formData,
//     setFormData
// }) => {


// const {
//     variants=[]
// }=useSelector(
//     state=>state.variants
// );



// const [selectedValues,setSelectedValues]=useState({});



// const [customValues,setCustomValues]=useState({});

// useEffect(() => {

//     if (!formData.productVariants?.length) {

//         setSelectedValues({});
//         setCustomValues({});

//     }

// }, [formData.productVariants]);

// const handleChange=(variantId,values)=>{


// setSelectedValues(prev=>({

//     ...prev,

//     [variantId]:values

// }));

// };





// const addCustomValue=(variantId)=>{


// const value =
// customValues[variantId];


// if(!value)
// return;



// setSelectedValues(prev=>({


// ...prev,


// [variantId]:

// [
// ...(prev[variantId] || []),
// value
// ]


// }));



// setCustomValues(prev=>({

// ...prev,

// [variantId]:""

// }));


// };






// const generatedVariants = useMemo(()=>{


// const activeVariants =
// variants.filter(
// variant=>
// selectedValues[variant._id]?.length
// );



// if(activeVariants.length===0)
// return [];




// const combine=(index,current)=>{


// if(index===activeVariants.length)
// {


// return [

// {
// attributes:[
// ...current
// ]
// }

// ];

// }



// let result=[];


// const variant =
// activeVariants[index];



// selectedValues[
// variant._id
// ]
// .forEach(value=>{


// result.push(

// ...combine(

// index+1,

// [

// ...current,

// {

// variantType:
// variant._id,


// displayName:
// variant.displayName,


// value

// }

// ]

// )

// );


// });


// return result;


// };



// return combine(0,[]);



// },[
// selectedValues,
// variants
// ]);







// // const handleGenerate=()=>{


// // const rows =
// // generatedVariants.map(item=>({

// // attributes:item.attributes,

// // sku:"",

// // barcode:"",

// // stock:0,

// // sellingPrice:""

// // }));



// // setFormData(prev=>({

// // ...prev,

// // productVariants:rows

// // }));



// // };

// const handleGenerate = ()=>{


// const rows =
// generatedVariants.map(item=>({


// attributes:

// item.attributes.map(attr=>({

//     variantType:attr.variantType,

//     value:attr.value

// })),


// sku:"",

// barcode:"",

// stock:0,

// sellingPrice:""


// }));



// console.log(
//     "GENERATED",
//     rows
// );



// setFormData(prev=>({

//     ...prev,

//     productVariants:rows

// }));


// };





// const deleteVariant=(index)=>{


// setFormData(prev=>({

// ...prev,


// productVariants:
// prev.productVariants.filter(
// (_,i)=>i!==index
// )


// }));


// };





// return (

// <Box mt={3}>


// <Typography variant="h6">

// Product Variants

// </Typography>



// <Stack spacing={3} mt={2}>


// {
// variants.map(variant=>(


// <FormControl fullWidth key={variant._id}>


// <InputLabel>

// {variant.displayName}

// </InputLabel>



// <Select


// multiple


// value={
// selectedValues[variant._id] || []
// }



// onChange={
// (e)=>
// handleChange(
// variant._id,
// e.target.value
// )
// }


// input={
// <OutlinedInput
// label={variant.displayName}
// />
// }



// renderValue={
// (selected)=>(

// <Box
// sx={{
// display:"flex",
// gap:1,
// flexWrap:"wrap"
// }}
// >

// {
// selected.map(value=>(

// <Chip
// key={value}
// label={value}
// />

// ))
// }

// </Box>

// )

// }



// >



// {
// variant.values?.map(value=>(

// <MenuItem
// key={value}
// value={value}
// >


// <Checkbox

// checked={
// selectedValues[
// variant._id
// ]?.includes(value)
// }

// />


// {value}


// </MenuItem>

// ))
// }


// </Select>



// <Box mt={1} display="flex" gap={1}>


// <TextField

// size="small"

// placeholder="Custom value"

// value={
// customValues[variant._id] || ""
// }


// onChange={
// (e)=>
// setCustomValues(prev=>({

// ...prev,

// [variant._id]:
// e.target.value

// }))
// }


// />



// <Button

// variant="outlined"

// onClick={()=>
// addCustomValue(
// variant._id
// )
// }

// >

// Add

// </Button>


// </Box>



// </FormControl>


// ))

// }



// <Button

// variant="contained"

// onClick={handleGenerate}

// >

// Generate Variants

// </Button>






// {
// formData.productVariants?.length>0 &&


// <Paper>


// <Table>


// <TableHead>

// <TableRow>

// <TableCell>
// Attributes
// </TableCell>


// <TableCell>
// SKU
// </TableCell>


// <TableCell>
// Barcode
// </TableCell>


// <TableCell>
// Stock
// </TableCell>


// <TableCell>
// Price
// </TableCell>


// <TableCell>
// Action
// </TableCell>


// </TableRow>

// </TableHead>



// <TableBody>


// {
// formData.productVariants.map(
// (row,index)=>(


// <TableRow key={index}>


// <TableCell>

// {
// row.attributes.map(
// (a)=>

// <Chip
// sx={{mr:1}}
// key={a.value}
// label={
// `${a.displayName}: ${a.value}`
// }
// />

// )
// }

// </TableCell>



// <TableCell>

// <TextField
// size="small"
// value={row.sku}

// onChange={
// e=>{

// let copy=[
// ...formData.productVariants
// ];

// copy[index].sku=
// e.target.value;


// setFormData(prev=>({

// ...prev,

// productVariants:copy

// }));

// }

// }

// />

// </TableCell>



// <TableCell>

// <TextField
// size="small"
// value={row.barcode}
// />

// </TableCell>




// <TableCell>

// <TextField
// size="small"
// type="number"
// value={row.stock}
// />

// </TableCell>




// <TableCell>

// <TextField
// size="small"
// value={row.sellingPrice}
// />

// </TableCell>




// <TableCell>

// <IconButton
// color="error"
// onClick={()=>
// deleteVariant(index)
// }
// >

// <DeleteIcon/>

// </IconButton>


// </TableCell>



// </TableRow>


// )

// )

// }


// </TableBody>


// </Table>


// </Paper>


// }



// </Stack>


// </Box>

// );


// };


// export default ProductVariants;

//-----------------------------------------------------

// import {
//     Box,
//     Grid,
//     Typography,
//     TextField,
//     Paper,
//     IconButton,
// } from "@mui/material";

// import DeleteIcon from "@mui/icons-material/Delete";

// import { useSelector } from "react-redux";



// const ProductVariants = ({
//     formData,
//     setFormData,
// }) => {


//     const variants =
//         formData.productVariants || [];



//     const {
//         variants: variantTypes=[]
//     } = useSelector(
//         state=>state.variants
//     );




//     const updateField = (
//         index,
//         field,
//         value
//     )=>{


//         const updated =
//             [...variants];


//         updated[index][field]=value;



//         setFormData(prev=>({

//             ...prev,

//             productVariants:updated

//         }));

//     };





//     const deleteVariant = (index)=>{


//         const updated =
//             variants.filter(
//                 (_,i)=>i!==index
//             );



//         setFormData(prev=>({

//             ...prev,

//             productVariants:updated

//         }));

//     };






//     const getVariantTitle = (variant)=>{


//         return variant.attributes
//         ?.map(attribute=>{


//             const type =
//                 variantTypes.find(
//                     item=>
//                     String(item._id)
//                     ===
//                     String(
//                         attribute.variantType
//                     )
//                 );



//             return type

//             ?

//             `${type.displayName}: ${attribute.value}`

//             :

//             attribute.value;



//         })
//         .join(" / ");


//     };






//     if(variants.length===0)
//     {

//         return (

//             <Box mt={3}>

//                 <Typography
//                 color="text.secondary"
//                 >

//                     No variants generated.

//                 </Typography>

//             </Box>

//         );

//     }






// return (

// <Box mt={4}>


// <Typography
// variant="h6"
// mb={2}
// >

// Variant Inventory

// </Typography>





// {
// variants.map((variant,index)=>(


// <Paper

// key={index}

// sx={{
// p:2,
// mb:2
// }}

// >


// <Typography

// fontWeight="bold"

// mb={2}

// >

// {
// getVariantTitle(variant)
// }


// </Typography>





// <Grid
// container
// spacing={2}
// >




// {/* SKU */}

// <Grid
// item
// xs={12}
// md={4}
// >


// <TextField

// fullWidth

// label="SKU"

// value={
// variant.sku || ""
// }

// onChange={(e)=>

// updateField(
// index,
// "sku",
// e.target.value.toUpperCase()
// )

// }

// />


// </Grid>







// {/* Barcode */}

// <Grid
// item
// xs={12}
// md={4}
// >


// <TextField

// fullWidth

// label="Barcode"

// value={
// variant.barcode || ""
// }

// onChange={(e)=>

// updateField(
// index,
// "barcode",
// e.target.value
// )

// }

// />


// </Grid>







// {/* Stock */}

// <Grid
// item
// xs={12}
// md={4}
// >


// <TextField

// fullWidth

// label="Stock"

// type="number"

// value={
// variant.stock ?? 0
// }

// onChange={(e)=>

// updateField(
// index,
// "stock",
// Math.max(
// 0,
// Number(e.target.value)
// )
// )

// }

// />


// </Grid>








// {/* Selling Price */}

// <Grid
// item
// xs={12}
// md={6}
// >


// <TextField

// fullWidth

// label="Selling Price"

// type="number"

// value={
// variant.sellingPrice ?? ""
// }

// onChange={(e)=>

// updateField(
// index,
// "sellingPrice",
// Number(e.target.value)
// )

// }

// />


// </Grid>









// {/* Delete */}

// <Grid
// item
// xs={12}
// md={6}
// >


// <IconButton

// color="error"

// onClick={()=>deleteVariant(index)}

// >

// <DeleteIcon/>

// </IconButton>


// </Grid>




// </Grid>



// </Paper>



// ))

// }



// </Box>

// );


// };



// export default ProductVariants;
//--------------------------------------------

import {
    Box,
    Grid,
    Typography,
    TextField,
    Paper,
    IconButton,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import { useSelector } from "react-redux";


const ProductVariants = ({
    formData,
    setFormData,
}) => {


    const variants =
        formData.productVariants || [];



    const {
        variants: variantTypes = []
    } = useSelector(
        state => state.variants
    );




    const updateField = (
        index,
        field,
        value
    ) => {


        const updated = [
            ...variants
        ];


        updated[index] = {
            ...updated[index],
            [field]: value
        };


        setFormData(prev => ({

            ...prev,

            productVariants: updated

        }));

    };





    const deleteVariant = (index) => {


        const updated =
            variants.filter(
                (_, i) =>
                    i !== index
            );


        setFormData(prev => ({

            ...prev,

            productVariants: updated

        }));

    };






    const getVariantTitle = (variant) => {


        return variant.attributes
            ?.map(attribute => {



                const type =
                    variantTypes.find(item => {


                        const attributeId =
                            typeof attribute.variantType === "object"
                            ?
                            attribute.variantType._id
                            :
                            attribute.variantType;



                        return (
                            String(item._id)
                            ===
                            String(attributeId)
                        );

                    });





                return type

                    ?

                    `${type.displayName || type.name}: ${attribute.value}`

                    :

                    attribute.value;



            })
            .join(" / ");

    };






    if (variants.length === 0) {

        return (

            <Box mt={3}>

                <Typography
                    color="text.secondary"
                >

                    No variants generated.

                </Typography>

            </Box>

        );

    }







    return (

        <Box mt={4}>


            <Typography
                variant="h6"
                mb={2}
            >

                Variant Inventory

            </Typography>





            {
                variants.map((variant, index) => (



                    <Paper

                        key={index}

                        sx={{
                            p: 2,
                            mb: 2
                        }}

                    >



                        <Typography

                            fontWeight="bold"

                            mb={2}

                        >

                            {
                                getVariantTitle(variant)
                            }

                        </Typography>






                        <Grid
                            container
                            spacing={2}
                        >





                            {/* SKU */}

                            <Grid
                                item
                                xs={12}
                                md={4}
                            >


                                <TextField

                                    fullWidth

                                    label="SKU"

                                    value={
                                        variant.sku || ""
                                    }


                                    onChange={(e) =>

                                        updateField(
                                            index,
                                            "sku",
                                            e.target.value.toUpperCase()
                                        )

                                    }

                                />


                            </Grid>







                            {/* BARCODE */}

                            <Grid
                                item
                                xs={12}
                                md={4}
                            >


                                <TextField

                                    fullWidth

                                    label="Barcode"

                                    value={
                                        variant.barcode || ""
                                    }


                                    onChange={(e) =>

                                        updateField(
                                            index,
                                            "barcode",
                                            e.target.value
                                        )

                                    }

                                />


                            </Grid>







                            {/* STOCK */}

                            <Grid
                                item
                                xs={12}
                                md={4}
                            >


                                <TextField

                                    fullWidth

                                    label="Stock"

                                    type="number"

                                    value={
                                        variant.stock ?? 0
                                    }


                                    onChange={(e) =>

                                        updateField(
                                            index,
                                            "stock",
                                            Math.max(
                                                0,
                                                Number(e.target.value)
                                            )
                                        )

                                    }

                                />


                            </Grid>







                            {/* SELLING PRICE */}

                            <Grid
                                item
                                xs={12}
                                md={6}
                            >


                                <TextField

                                    fullWidth

                                    label="Selling Price"

                                    type="number"

                                    value={
                                        variant.sellingPrice ?? ""
                                    }


                                    onChange={(e) =>

                                        updateField(
                                            index,
                                            "sellingPrice",
                                            Number(e.target.value)
                                        )

                                    }

                                />


                            </Grid>








                            {/* DELETE */}

                            <Grid
                                item
                                xs={12}
                                md={6}
                                display="flex"
                                alignItems="center"
                            >


                                <IconButton

                                    color="error"

                                    onClick={() =>
                                        deleteVariant(index)
                                    }

                                >

                                    <DeleteIcon />

                                </IconButton>


                            </Grid>





                        </Grid>



                    </Paper>



                ))
            }





        </Box>

    );


};


export default ProductVariants;