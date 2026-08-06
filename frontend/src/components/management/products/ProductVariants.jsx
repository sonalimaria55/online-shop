// // // import { useMemo, useState } from "react";
// // // import { useSelector } from "react-redux";

// // // import {
// // //     Box,
// // //     Typography,
// // //     FormControl,
// // //     InputLabel,
// // //     Select,
// // //     MenuItem,
// // //     Chip,
// // //     OutlinedInput,
// // //     Stack,
// // //     Button,
// // // } from "@mui/material";

// // // const ProductVariants = ({ onChange }) => {
// // //     const { variants = [] } = useSelector(
// // //         (state) => state.variants
// // //     );

// // //     const [selectedValues, setSelectedValues] = useState({});

// // //     const handleSelectChange = (variantId, values) => {
// // //         setSelectedValues((prev) => ({
// // //             ...prev,
// // //             [variantId]: values,
// // //         }));
// // //     };

// // //     const generatedVariants = useMemo(() => {
// // //         const activeVariants = variants.filter(
// // //             (variant) =>
// // //                 selectedValues[variant._id] &&
// // //                 selectedValues[variant._id].length > 0
// // //         );

// // //         if (!activeVariants.length) return [];

// // //         const combine = (index, current) => {
// // //             if (index === activeVariants.length) {
// // //                 return [current];
// // //             }

// // //             const variant = activeVariants[index];
// // //             const values = selectedValues[variant._id];

// // //             let result = [];

// // //             values.forEach((value) => {
// // //                 result = result.concat(
// // //                     combine(index + 1, [
// // //                         ...current,
// // //                         {
// // //                             variantType: variant._id,
// // //                             variantName:
// // //                                 variant.displayName ||
// // //                                 variant.name,
// // //                             value,
// // //                         },
// // //                     ])
// // //                 );
// // //             });

// // //             return result;
// // //         };

// // //         return combine(0, []);
// // //     }, [selectedValues, variants]);

// // //     const handleGenerate = () => {
// // //         const rows = generatedVariants.map(
// // //             (attributes) => ({
// // //                 attributes,
// // //                 sku: "",
// // //                 barcode: "",
// // //                 stock: 0,
// // //                 sellingPrice: 0,
// // //             })
// // //         );

// // //         onChange(rows);
// // //     };

// // //     return (
// // //         <Box mt={2}>
// // //             <Typography
// // //                 variant="h6"
// // //                 gutterBottom
// // //             >
// // //                 Generate Product Variants
// // //             </Typography>

// // //             <Stack spacing={3}>
// // //                 {variants.map((variant) => (
// // //                     <FormControl
// // //                         key={variant._id}
// // //                         fullWidth
// // //                     >
// // //                         <InputLabel>
// // //                             {variant.displayName ||
// // //                                 variant.name}
// // //                         </InputLabel>

// // //                         <Select
// // //                             multiple
// // //                             value={
// // //                                 selectedValues[
// // //                                     variant._id
// // //                                 ] || []
// // //                             }
// // //                             onChange={(e) =>
// // //                                 handleSelectChange(
// // //                                     variant._id,
// // //                                     e.target.value
// // //                                 )
// // //                             }
// // //                             input={
// // //                                 <OutlinedInput
// // //                                     label={
// // //                                         variant.displayName ||
// // //                                         variant.name
// // //                                     }
// // //                                 />
// // //                             }
// // //                             renderValue={(selected) => (
// // //                                 <Box
// // //                                     sx={{
// // //                                         display: "flex",
// // //                                         flexWrap: "wrap",
// // //                                         gap: 0.5,
// // //                                     }}
// // //                                 >
// // //                                     {selected.map(
// // //                                         (value) => (
// // //                                             <Chip
// // //                                                 key={value}
// // //                                                 label={
// // //                                                     value
// // //                                                 }
// // //                                             />
// // //                                         )
// // //                                     )}
// // //                                 </Box>
// // //                             )}
// // //                         >
// // //                             {(variant.values || []).map(
// // //                                 (value) => (
// // //                                     <MenuItem
// // //                                         key={value}
// // //                                         value={value}
// // //                                     >
// // //                                         {value}
// // //                                     </MenuItem>
// // //                                 )
// // //                             )}
// // //                         </Select>
// // //                     </FormControl>
// // //                 ))}

// // //                 <Button
// // //                     variant="contained"
// // //                     onClick={handleGenerate}
// // //                 >
// // //                     Generate Variants
// // //                 </Button>
// // //             </Stack>
// // //         </Box>
// // //     );
// // // };

// // // export default ProductVariants;
// // //-------------------------------------------------------------------------------------------
// // // import {
// // //     Box,
// // //     Button,
// // //     Grid,
// // //     TextField,
// // //     Typography,
// // //     IconButton,
// // //     MenuItem,
// // // } from "@mui/material";

// // // import DeleteIcon from "@mui/icons-material/Delete";



// // // const ProductVariants = ({
// // //     formData,
// // //     setFormData,
// // // }) => {



// // //     const variants =
// // //         formData.productVariants || [];





// // //     const addVariant = () => {


// // //         setFormData((prev)=>({

// // //             ...prev,

// // //             productVariants:[

// // //                 ...prev.productVariants,

// // //                 {
// // //                     variantType:"",
// // //                     value:"",
// // //                     color:"",
// // //                     sku:"",
// // //                     barcode:"",
// // //                     stock:0,
// // //                     sellingPrice:"",
// // //                 }

// // //             ]

// // //         }));


// // //     };







// // //     const updateVariant = (
// // //         index,
// // //         field,
// // //         value
// // //     )=>{


// // //         const updated =
// // //             [...variants];



// // //         updated[index][field] = value;



// // //         setFormData((prev)=>({

// // //             ...prev,

// // //             productVariants:updated,

// // //         }));


// // //     };








// // //     const removeVariant = (index)=>{


// // //         const updated =
// // //             variants.filter(
// // //                 (_,i)=>i!==index
// // //             );



// // //         setFormData((prev)=>({

// // //             ...prev,

// // //             productVariants:updated,

// // //         }));


// // //     };









// // //     return (

// // //         <Box mt={3}>


// // //             <Typography
// // //                 variant="h6"
// // //                 mb={2}
// // //             >

// // //                 Product Variants

// // //             </Typography>





// // //             {
// // //                 variants.map(
// // //                     (variant,index)=>(


// // //                     <Box

// // //                         key={index}

// // //                         sx={{

// // //                             border:"1px solid #ddd",

// // //                             borderRadius:2,

// // //                             padding:2,

// // //                             mb:2,

// // //                         }}

// // //                     >



// // //                         <Grid
// // //                             container
// // //                             spacing={2}
// // //                         >





// // //                             {/* Variant Type */}

// // //                             <Grid
// // //                                 item
// // //                                 xs={12}
// // //                                 sm={4}
// // //                             >

// // //                                 <TextField

// // //                                     fullWidth

// // //                                     select

// // //                                     label="Variant Type"

// // //                                     value={
// // //                                         variant.variantType
// // //                                     }

// // //                                     onChange={(e)=>
// // //                                         updateVariant(
// // //                                             index,
// // //                                             "variantType",
// // //                                             e.target.value
// // //                                         )
// // //                                     }

// // //                                 >

// // //                                     <MenuItem value="Size">

// // //                                         Size

// // //                                     </MenuItem>


// // //                                     <MenuItem value="Color">

// // //                                         Color

// // //                                     </MenuItem>


// // //                                     <MenuItem value="Material">

// // //                                         Material

// // //                                     </MenuItem>


// // //                                     <MenuItem value="Custom">

// // //                                         Custom

// // //                                     </MenuItem>


// // //                                 </TextField>


// // //                             </Grid>









// // //                             {/* Value */}

// // //                             <Grid
// // //                                 item
// // //                                 xs={12}
// // //                                 sm={4}
// // //                             >

// // //                                 <TextField

// // //                                     fullWidth

// // //                                     label="Value"

// // //                                     placeholder="M / Red / 32"

// // //                                     value={
// // //                                         variant.value
// // //                                     }

// // //                                     onChange={(e)=>
// // //                                         updateVariant(
// // //                                             index,
// // //                                             "value",
// // //                                             e.target.value
// // //                                         )
// // //                                     }

// // //                                 />


// // //                             </Grid>









// // //                             {/* Color */}

// // //                             <Grid
// // //                                 item
// // //                                 xs={12}
// // //                                 sm={4}
// // //                             >

// // //                                 <TextField

// // //                                     fullWidth

// // //                                     label="Color"

// // //                                     value={
// // //                                         variant.color
// // //                                     }

// // //                                     onChange={(e)=>
// // //                                         updateVariant(
// // //                                             index,
// // //                                             "color",
// // //                                             e.target.value
// // //                                         )
// // //                                     }

// // //                                 />


// // //                             </Grid>









// // //                             {/* SKU */}

// // //                             <Grid
// // //                                 item
// // //                                 xs={12}
// // //                                 sm={4}
// // //                             >

// // //                                 <TextField

// // //                                     fullWidth

// // //                                     label="SKU"

// // //                                     value={
// // //                                         variant.sku
// // //                                     }

// // //                                     onChange={(e)=>
// // //                                         updateVariant(
// // //                                             index,
// // //                                             "sku",
// // //                                             e.target.value.toUpperCase()
// // //                                         )
// // //                                     }

// // //                                 />


// // //                             </Grid>









// // //                             {/* Barcode */}

// // //                             <Grid
// // //                                 item
// // //                                 xs={12}
// // //                                 sm={4}
// // //                             >

// // //                                 <TextField

// // //                                     fullWidth

// // //                                     label="Barcode"

// // //                                     value={
// // //                                         variant.barcode
// // //                                     }

// // //                                     onChange={(e)=>
// // //                                         updateVariant(
// // //                                             index,
// // //                                             "barcode",
// // //                                             e.target.value
// // //                                         )
// // //                                     }

// // //                                 />


// // //                             </Grid>









// // //                             {/* Stock */}

// // //                             <Grid
// // //                                 item
// // //                                 xs={12}
// // //                                 sm={4}
// // //                             >

// // //                                 <TextField

// // //                                     fullWidth

// // //                                     type="number"

// // //                                     label="Stock"

// // //                                     value={
// // //                                         variant.stock
// // //                                     }

// // //                                     onChange={(e)=>
// // //                                         updateVariant(
// // //                                             index,
// // //                                             "stock",
// // //                                             e.target.value
// // //                                         )
// // //                                     }

// // //                                 />


// // //                             </Grid>









// // //                             {/* Selling Price */}

// // //                             <Grid
// // //                                 item
// // //                                 xs={12}
// // //                                 sm={4}
// // //                             >

// // //                                 <TextField

// // //                                     fullWidth

// // //                                     type="number"

// // //                                     label="Selling Price"

// // //                                     value={
// // //                                         variant.sellingPrice
// // //                                     }

// // //                                     onChange={(e)=>
// // //                                         updateVariant(
// // //                                             index,
// // //                                             "sellingPrice",
// // //                                             e.target.value
// // //                                         )
// // //                                     }

// // //                                 />


// // //                             </Grid>









// // //                             {/* Delete */}

// // //                             <Grid
// // //                                 item
// // //                                 xs={12}
// // //                             >

// // //                                 <IconButton

// // //                                     color="error"

// // //                                     onClick={()=>
// // //                                         removeVariant(index)
// // //                                     }

// // //                                 >

// // //                                     <DeleteIcon/>

// // //                                 </IconButton>


// // //                             </Grid>



// // //                         </Grid>



// // //                     </Box>


// // //                     )
// // //                 )
// // //             }







// // //             <Button

// // //                 variant="outlined"

// // //                 onClick={addVariant}

// // //             >

// // //                 Add Variant

// // //             </Button>




// // //         </Box>

// // //     );

// // // };


// // // export default ProductVariants;

// // //-------------------------------------------------------------------------------------------
// // // import {
// // //     Box,
// // //     Button,
// // //     Grid,
// // //     TextField,
// // //     Typography,
// // //     IconButton,
// // //     MenuItem,
// // // } from "@mui/material";

// // // import DeleteIcon from "@mui/icons-material/Delete";

// // // import { useSelector } from "react-redux";


// // // const ProductVariants = ({
// // //     formData,
// // //     setFormData,
// // // }) => {


// // //     const { variants=[] } = useSelector(
// // //         (state)=>state.variants
// // //     );



// // //     const productVariants =
// // //         formData.productVariants || [];




// // //     const addVariant = ()=>{


// // //         setFormData((prev)=>({

// // //             ...prev,

// // //             productVariants:[

// // //                 ...prev.productVariants,

// // //                 {

// // //                     variantType:"",

// // //                     value:"",

// // //                     color:"",

// // //                     sku:"",

// // //                     barcode:"",

// // //                     stock:0,

// // //                     sellingPrice:0,

// // //                 }

// // //             ]

// // //         }));

// // //     };






// // //     const updateVariant = (
// // //         index,
// // //         field,
// // //         value
// // //     )=>{


// // //         const updated =
// // //             [...productVariants];


// // //         updated[index][field]=value;


// // //         setFormData((prev)=>({

// // //             ...prev,

// // //             productVariants:updated

// // //         }));


// // //     };





// // //     const removeVariant=(index)=>{


// // //         const updated =
// // //             productVariants.filter(
// // //                 (_,i)=>i!==index
// // //             );


// // //         setFormData((prev)=>({

// // //             ...prev,

// // //             productVariants:updated

// // //         }));

// // //     };






// // // return (

// // // <Box mt={3}>


// // // <Typography
// // // variant="h6"
// // // mb={2}
// // // >
// // // Product Variants
// // // </Typography>




// // // {
// // // productVariants.map(
// // // (variant,index)=>(


// // // <Box

// // // key={index}

// // // sx={{

// // // border:"1px solid #ddd",

// // // borderRadius:2,

// // // p:2,

// // // mb:2

// // // }}

// // // >


// // // <Grid container spacing={2}>


// // // {/* Variant Type */}

// // // <Grid item xs={12} md={4}>


// // // <TextField

// // // select

// // // fullWidth

// // // label="Variant Type"

// // // value={
// // // variant.variantType || ""
// // // }


// // // onChange={(e)=>

// // // updateVariant(

// // // index,

// // // "variantType",

// // // e.target.value

// // // )

// // // }

// // // >


// // // {

// // // variants.map((item)=>(


// // // <MenuItem

// // // key={item._id}

// // // value={item._id}

// // // >

// // // {

// // // item.name ||
// // // item.displayName

// // // }


// // // </MenuItem>


// // // ))

// // // }


// // // </TextField>


// // // </Grid>






// // // {/* Value */}

// // // <Grid item xs={12} md={4}>


// // // <TextField

// // // fullWidth

// // // label="Value"

// // // placeholder="XL / Red / 32"

// // // value={
// // // variant.value || ""
// // // }


// // // onChange={(e)=>

// // // updateVariant(

// // // index,

// // // "value",

// // // e.target.value

// // // )

// // // }


// // // />


// // // </Grid>







// // // {/* Color */}

// // // <Grid item xs={12} md={4}>


// // // <TextField

// // // fullWidth

// // // label="Color"

// // // value={
// // // variant.color || ""
// // // }


// // // onChange={(e)=>

// // // updateVariant(

// // // index,

// // // "color",

// // // e.target.value

// // // )

// // // }


// // // />


// // // </Grid>






// // // {/* SKU */}

// // // <Grid item xs={12} md={4}>


// // // <TextField

// // // fullWidth

// // // label="SKU"

// // // value={
// // // variant.sku || ""
// // // }


// // // onChange={(e)=>

// // // updateVariant(

// // // index,

// // // "sku",

// // // e.target.value.toUpperCase()

// // // )

// // // }


// // // />


// // // </Grid>







// // // {/* Barcode */}

// // // <Grid item xs={12} md={4}>


// // // <TextField

// // // fullWidth

// // // label="Barcode"

// // // value={
// // // variant.barcode || ""
// // // }


// // // onChange={(e)=>

// // // updateVariant(

// // // index,

// // // "barcode",

// // // e.target.value

// // // )

// // // }


// // // />


// // // </Grid>







// // // {/* Stock */}

// // // <Grid item xs={12} md={2}>


// // // <TextField

// // // fullWidth

// // // type="number"

// // // label="Stock"

// // // value={
// // // variant.stock || 0
// // // }


// // // onChange={(e)=>

// // // updateVariant(

// // // index,

// // // "stock",

// // // Number(e.target.value)

// // // )

// // // }


// // // />


// // // </Grid>








// // // {/* Price */}

// // // <Grid item xs={12} md={2}>


// // // <TextField

// // // fullWidth

// // // type="number"

// // // label="Price"

// // // value={
// // // variant.sellingPrice || 0
// // // }


// // // onChange={(e)=>

// // // updateVariant(

// // // index,

// // // "sellingPrice",

// // // Number(e.target.value)

// // // )

// // // }


// // // />


// // // </Grid>






// // // <Grid item xs={12}>


// // // <IconButton

// // // color="error"

// // // onClick={()=>removeVariant(index)}

// // // >

// // // <DeleteIcon/>

// // // </IconButton>


// // // </Grid>




// // // </Grid>


// // // </Box>


// // // )

// // // )

// // // }





// // // <Button

// // // variant="outlined"

// // // onClick={addVariant}

// // // >

// // // Add Variant

// // // </Button>



// // // </Box>


// // // );


// // // };


// // // export default ProductVariants;
// // //--------------------------------------------------------------------------------------

// // import {
// //     Box,
// //     Button,
// //     Grid,
// //     TextField,
// //     Typography,
// //     IconButton,
// //     MenuItem,
// // } from "@mui/material";

// // import DeleteIcon from "@mui/icons-material/Delete";

// // import { useSelector } from "react-redux";


// // const ProductVariants = ({
// //     formData,
// //     setFormData,
// // }) => {


// //     const { variants=[] } = useSelector(
// //         (state)=>state.variants
// //     );



// //     const productVariants =
// //         formData.productVariants || [];




// //     const addVariant = ()=>{


// //         setFormData((prev)=>({

// //             ...prev,

// //             productVariants:[

// //                 ...prev.productVariants,

// //                 {

// //                     variantType:"",

// //                     value:"",

// //                     color:"",

// //                     sku:"",

// //                     barcode:"",

// //                     stock:0,

// //                     sellingPrice:0,

// //                 }

// //             ]

// //         }));

// //     };






// //     const updateVariant = (
// //         index,
// //         field,
// //         value
// //     )=>{


// //         const updated =
// //             [...productVariants];


// //         updated[index][field]=value;


// //         setFormData((prev)=>({

// //             ...prev,

// //             productVariants:updated

// //         }));


// //     };





// //     const removeVariant=(index)=>{


// //         const updated =
// //             productVariants.filter(
// //                 (_,i)=>i!==index
// //             );


// //         setFormData((prev)=>({

// //             ...prev,

// //             productVariants:updated

// //         }));

// //     };






// // return (

// // <Box mt={3}>


// // <Typography
// // variant="h6"
// // mb={2}
// // >
// // Product Variants
// // </Typography>




// // {
// // productVariants.map(
// // (variant,index)=>(


// // <Box

// // key={index}

// // sx={{

// // border:"1px solid #ddd",

// // borderRadius:2,

// // p:2,

// // mb:2

// // }}

// // >


// // <Grid container spacing={2}>


// // {/* Variant Type */}

// // <Grid item xs={12} md={4}>


// // <TextField

// // select

// // fullWidth

// // label="Variant Type"

// // value={
// // variant.variantType || ""
// // }


// // onChange={(e)=>

// // updateVariant(

// // index,

// // "variantType",

// // e.target.value

// // )

// // }

// // >


// // {

// // variants.map((item)=>(


// // <MenuItem

// // key={item._id}

// // value={item._id}

// // >

// // {

// // item.name ||
// // item.displayName

// // }


// // </MenuItem>


// // ))

// // }


// // </TextField>


// // </Grid>






// // {/* Value */}

// // <Grid item xs={12} md={4}>


// // <TextField

// // fullWidth

// // label="Value"

// // placeholder="XL / Red / 32"

// // value={
// // variant.value || ""
// // }


// // onChange={(e)=>

// // updateVariant(

// // index,

// // "value",

// // e.target.value

// // )

// // }


// // />


// // </Grid>







// // {/* Color */}

// // <Grid item xs={12} md={4}>


// // <TextField

// // fullWidth

// // label="Color"

// // value={
// // variant.color || ""
// // }


// // onChange={(e)=>

// // updateVariant(

// // index,

// // "color",

// // e.target.value

// // )

// // }


// // />


// // </Grid>






// // {/* SKU */}

// // <Grid item xs={12} md={4}>


// // <TextField

// // fullWidth

// // label="SKU"

// // value={
// // variant.sku || ""
// // }


// // onChange={(e)=>

// // updateVariant(

// // index,

// // "sku",

// // e.target.value.toUpperCase()

// // )

// // }


// // />


// // </Grid>







// // {/* Barcode */}

// // <Grid item xs={12} md={4}>


// // <TextField

// // fullWidth

// // label="Barcode"

// // value={
// // variant.barcode || ""
// // }


// // onChange={(e)=>

// // updateVariant(

// // index,

// // "barcode",

// // e.target.value

// // )

// // }


// // />


// // </Grid>







// // {/* Stock */}

// // <Grid item xs={12} md={2}>


// // <TextField

// // fullWidth

// // type="number"

// // label="Stock"

// // value={
// // variant.stock || 0
// // }


// // onChange={(e)=>

// // updateVariant(

// // index,

// // "stock",

// // Number(e.target.value)

// // )

// // }


// // />


// // </Grid>








// // {/* Price */}

// // <Grid item xs={12} md={2}>


// // <TextField

// // fullWidth

// // type="number"

// // label="Price"

// // value={
// // variant.sellingPrice || 0
// // }


// // onChange={(e)=>

// // updateVariant(

// // index,

// // "sellingPrice",

// // Number(e.target.value)

// // )

// // }


// // />


// // </Grid>






// // <Grid item xs={12}>


// // <IconButton

// // color="error"

// // onClick={()=>removeVariant(index)}

// // >

// // <DeleteIcon/>

// // </IconButton>


// // </Grid>




// // </Grid>


// // </Box>


// // )

// // )

// // }





// // <Button

// // variant="outlined"

// // onClick={addVariant}

// // >

// // Add Variant

// // </Button>



// // </Box>


// // );


// // };


// // export default ProductVariants;

// import {
//   Box,
//   Button,
//   Grid,
//   TextField,
//   Typography,
//   IconButton,
//   MenuItem,
// } from "@mui/material";

// import DeleteIcon from "@mui/icons-material/Delete";

// import { useSelector } from "react-redux";


// const ProductVariants = ({
//     formData,
//     setFormData
// }) => {


//     const {
//         variants = []
//     } = useSelector(
//         (state)=>state.variants
//     );



//     const productVariants =
//         formData.productVariants || [];




//     const addVariant = ()=>{


//         setFormData(prev=>({

//             ...prev,

//             productVariants:[

//                 ...prev.productVariants,

//                 {

//                     attributes:[

//                         {

//                             variantType:"",

//                             value:""

//                         }

//                     ],


//                     sku:"",

//                     barcode:"",

//                     stock:0,

//                     sellingPrice:0

//                 }

//             ]

//         }));

//     };





//     const updateAttribute = (
//         variantIndex,
//         field,
//         value
//     )=>{


//         const updated =
//             [...productVariants];


//         updated[
//             variantIndex
//         ]
//         .attributes[0][field] = value;



//         setFormData(prev=>({

//             ...prev,

//             productVariants:updated

//         }));


//     };






//     const updateVariant = (
//         index,
//         field,
//         value
//     )=>{


//         const updated =
//             [...productVariants];


//         updated[index][field] =
//             value;



//         setFormData(prev=>({

//             ...prev,

//             productVariants:updated

//         }));


//     };






//     const removeVariant=(index)=>{


//         setFormData(prev=>({

//             ...prev,

//             productVariants:
//             prev.productVariants.filter(
//                 (_,i)=>i!==index
//             )

//         }));


//     };







// return (

// <Box mt={3}>


// <Typography variant="h6">

// Product Variants

// </Typography>




// {
// productVariants.map(
// (variant,index)=>(


// <Box

// key={index}

// sx={{

// border:"1px solid #ddd",

// p:2,

// mt:2,

// borderRadius:2

// }}

// >



// <Grid container spacing={2}>


// <Grid item xs={12} md={4}>

// <TextField

// select

// fullWidth

// label="Variant Type"


// value={
// variant.attributes?.[0]?.variantType || ""
// }


// onChange={
// (e)=>
// updateAttribute(
// index,
// "variantType",
// e.target.value
// )
// }

// >


// {

// variants.map(item=>(

// <MenuItem

// key={item._id}

// value={item._id}

// >

// {item.displayName}

// </MenuItem>


// ))

// }


// </TextField>


// </Grid>





// <Grid item xs={12} md={4}>


// <TextField

// fullWidth

// label="Value"

// placeholder="XL / Red / 32"


// value={
// variant.attributes?.[0]?.value || ""
// }


// onChange={
// (e)=>
// updateAttribute(
// index,
// "value",
// e.target.value
// )
// }


// />


// </Grid>






// <Grid item xs={12} md={4}>


// <TextField

// fullWidth

// label="SKU"


// value={
// variant.sku || ""
// }


// onChange={
// (e)=>
// updateVariant(
// index,
// "sku",
// e.target.value.toUpperCase()
// )
// }


// />


// </Grid>





// <Grid item xs={12} md={4}>


// <TextField

// fullWidth

// label="Barcode"


// value={
// variant.barcode || ""
// }


// onChange={
// (e)=>
// updateVariant(
// index,
// "barcode",
// e.target.value
// )
// }


// />


// </Grid>





// <Grid item xs={12} md={2}>


// <TextField

// type="number"

// fullWidth

// label="Stock"


// value={
// variant.stock || 0
// }


// onChange={
// (e)=>
// updateVariant(
// index,
// "stock",
// Number(e.target.value)
// )
// }


// />


// </Grid>





// <Grid item xs={12} md={2}>


// <TextField

// type="number"

// fullWidth

// label="Selling Price"


// value={
// variant.sellingPrice || 0
// }


// onChange={
// (e)=>
// updateVariant(
// index,
// "sellingPrice",
// Number(e.target.value)
// )
// }


// />


// </Grid>





// <Grid item xs={12}>


// <IconButton

// color="error"

// onClick={()=>
// removeVariant(index)
// }

// >

// <DeleteIcon/>

// </IconButton>


// </Grid>





// </Grid>



// </Box>


// ))

// }






// <Button

// variant="outlined"

// sx={{
// mt:2
// }}

// onClick={addVariant}

// >

// Add Variant

// </Button>





// </Box>


// );


// };


// export default ProductVariants;
//------------------------------------------------------------------------------------------
// import {
//     Box,
//     Grid,
//     Typography,
//     TextField,
//     Paper,
// } from "@mui/material";

// const ProductVariants = ({
//     formData,
//     setFormData,
// }) => {

//     const variants =
//         formData.productVariants || [];

//     const updateField = (
//         index,
//         field,
//         value
//     ) => {

//         const updated = [...variants];

//         updated[index][field] = value;

//         setFormData(prev => ({

//             ...prev,

//             productVariants: updated,

//         }));

//     };

//     if (variants.length === 0) {

//         return (

//             <Box mt={3}>

//                 <Typography
//                     color="text.secondary"
//                 >
//                     No variants generated.
//                 </Typography>

//             </Box>

//         );

//     }

//     return (

//         <Box mt={4}>

//             <Typography
//                 variant="h6"
//                 mb={2}
//             >
//                 Inventory
//             </Typography>

//             {

//                 variants.map((variant,index)=>{

//                     const title =

//                         variant.attributes
//                         ?.map(item=>item.value)
//                         .join(" / ");

//                     return(

//                         <Paper
//                             key={index}
//                             sx={{
//                                 p:2,
//                                 mb:2,
//                             }}
//                         >

//                             <Typography
//                                 fontWeight="bold"
//                                 mb={2}
//                             >
//                                 {title}
//                             </Typography>

//                             <Grid
//                                 container
//                                 spacing={2}
//                             >

//                                 <Grid
//                                     item
//                                     xs={12}
//                                     md={6}
//                                 >

//                                     <TextField
//                                         fullWidth
//                                         label="Stock"
//                                         type="number"
//                                         value={
//                                             variant.stock
//                                         }
//                                         onChange={(e)=>

//                                             updateField(
//                                                 index,
//                                                 "stock",
//                                                 Number(
//                                                     e.target.value
//                                                 )
//                                             )

//                                         }
//                                     />

//                                 </Grid>

//                                 <Grid
//                                     item
//                                     xs={12}
//                                     md={6}
//                                 >

//                                     <TextField
//                                         fullWidth
//                                         label="Selling Price"
//                                         type="number"
//                                         value={
//                                             variant.sellingPrice
//                                         }
//                                         onChange={(e)=>

//                                             updateField(
//                                                 index,
//                                                 "sellingPrice",
//                                                 Number(
//                                                     e.target.value
//                                                 )
//                                             )

//                                         }
//                                     />

//                                 </Grid>

//                             </Grid>

//                         </Paper>

//                     );

//                 })

//             }

//         </Box>

//     );

// };

// export default ProductVariants;
//----------------------------------------------------------------------------------------

// import {
//     Box,
//     Grid,
//     Typography,
//     TextField,
//     Paper,
// } from "@mui/material";

// import { useSelector } from "react-redux";

// const ProductVariants = ({
//     formData,
//     setFormData,
// }) => {

//     const variants = formData.productVariants || [];

//     const { variants: variantTypes = [] } = useSelector(
//         (state) => state.variants
//     );

//     const updateField = (
//         index,
//         field,
//         value
//     ) => {

//         const updated = [...variants];

//         updated[index][field] = value;

//         setFormData(prev => ({

//             ...prev,

//             productVariants: updated,

//         }));

//     };

//     if (variants.length === 0) {

//         return (

//             <Box mt={3}>

//                 <Typography color="text.secondary">
//                     No variants generated.
//                 </Typography>

//             </Box>

//         );

//     }

//     return (

//         <Box mt={4}>

//             <Typography
//                 variant="h6"
//                 mb={2}
//             >
//                 Inventory
//             </Typography>

//             {

//                 variants.map((variant, index) => {

//                     const title =

//                         variant.attributes
//                             ?.map(attribute => {

//                                 const variantType =
//                                     variantTypes.find(
//                                         item =>
//                                             String(item._id) ===
//                                             String(attribute.variantType)
//                                     );

//                                 return variantType
//                                     ? `${variantType.displayName}: ${attribute.value}`
//                                     : attribute.value;

//                             })
//                             .join(" / ");

//                     return (

//                         <Paper
//                             key={index}
//                             sx={{
//                                 p: 2,
//                                 mb: 2,
//                             }}
//                         >

//                             <Typography
//                                 fontWeight="bold"
//                                 mb={2}
//                             >
//                                 {title}
//                             </Typography>

//                             <Grid
//                                 container
//                                 spacing={2}
//                             >

//                                 <Grid
//                                     item
//                                     xs={12}
//                                     md={6}
//                                 >

//                                     <TextField
//                                         fullWidth
//                                         label="Stock"
//                                         type="number"
//                                         value={variant.stock}
//                                         onChange={(e) =>

//                                             updateField(
//                                                 index,
//                                                 "stock",
//                                                 Math.max(
//                                                     0,
//                                                     Number(e.target.value)
//                                                 )
//                                             )

//                                         }
//                                     />

//                                 </Grid>

//                                 <Grid
//                                     item
//                                     xs={12}
//                                     md={6}
//                                 >

//                                     <TextField
//                                         fullWidth
//                                         label="Selling Price"
//                                         type="number"
//                                         // value={variant.sellingPrice}
//                                         value={variant.sellingPrice ?? ""}
//                                         onChange={(e) =>

//                                             updateField(
//                                                 index,
//                                                 "sellingPrice",
//                                                 Number(e.target.value)
//                                             )

//                                         }
//                                     />

//                                 </Grid>

//                             </Grid>

//                         </Paper>

//                     );

//                 })

//             }

//         </Box>

//     );

// };

// export default ProductVariants;

//----------------------------------------

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


    const variants = formData.productVariants || [];
    console.log("Inventory Variants:", variants);


    const { variants: variantTypes = [] } = useSelector(
        (state) => state.variants
    );



    // const updateField = (
    //     index,
    //     field,
    //     value
    // ) => {


    //     const updated = [...variants];


    //     updated[index][field] = value;


    //     setFormData(prev => ({

    //         ...prev,

    //         productVariants: updated,

    //     }));

    // };

const updateField = (
    index,
    field,
    value
) => {

    setFormData(prev => ({

        ...prev,

        productVariants: prev.productVariants.map(
            (variant, i) => {

                if (i === index) {

                    return {
                        ...variant,
                        [field]: value
                    };

                }


                return {
                    ...variant
                };

            }
        )

    }));

};


    const deleteVariant = (index)=>{


        const updated = variants.filter(
            (_,i)=>i !== index
        );


        setFormData(prev=>({

            ...prev,

            productVariants:updated,

        }));

    };



    if (variants.length === 0) {

        return (

            <Box mt={3}>

                <Typography color="text.secondary">

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
                variants.map((variant,index)=>{


                    const title =
                        variant.attributes
                        ?.map(attribute=>{


                            const variantType =
                                variantTypes.find(
                                    item =>
                                    String(item._id) ===
                                    String(attribute.variantType)
                                );


                            return variantType
                            ?
                          //  `${variantType.displayName}: ${attribute.value}`
                          `${variantType.displayName || variantType.name}: ${attribute.value}`
                            :
                            attribute.value;


                        })
                        .join(" / ");



                    return (


                    <Paper
                        key={index}
                        sx={{
                            p:2,
                            mb:2
                        }}
                    >



                    <Typography
                        fontWeight="bold"
                        mb={2}
                    >
                        {title}
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

                        onChange={(e)=>
                            updateField(
                                index,
                                "sku",
                                e.target.value.toUpperCase()
                            )
                        }

                    />

                    </Grid>





                    {/* Barcode */}

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

                        onChange={(e)=>
                            updateField(
                                index,
                                "barcode",
                                e.target.value
                            )
                        }

                    />

                    </Grid>






                    {/* Color */}

                    <Grid
                        item
                        xs={12}
                        md={4}
                    >

                    <TextField

                        fullWidth

                        label="Color"

                        placeholder="Lavender / Blue"

                        value={
                            variant.color || ""
                        }

                        onChange={(e)=>
                            updateField(
                                index,
                                "color",
                                e.target.value
                            )
                        }

                    />

                    </Grid>







                    {/* Stock */}

                    <Grid
                        item
                        xs={12}
                        md={6}
                    >

                    <TextField

                        fullWidth

                        label="Stock"

                        type="number"

                        value={
                            variant.stock ?? 0
                        }

                        onChange={(e)=>
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






                    {/* Selling Price */}

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

                        onChange={(e)=>
                            updateField(
                                index,
                                "sellingPrice",
                                Number(e.target.value)
                            )
                        }

                    />

                    </Grid>






                    {/* Delete */}

                    <Grid
                        item
                        xs={12}
                    >

                    <IconButton
                        color="error"
                        onClick={()=>
                            deleteVariant(index)
                        }
                    >

                        <DeleteIcon/>

                    </IconButton>

                    </Grid>



                    </Grid>


                    </Paper>


                    );


                })

            }


        </Box>

    );

};


export default ProductVariants;