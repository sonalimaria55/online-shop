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
import {
    useMemo,
    useState,
    useEffect,
} from "react";

import {
    Box,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Chip,
    OutlinedInput,
    Stack,
    Button,
    Checkbox,
    TextField,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import { useSelector } from "react-redux";

const ProductVariants = ({
    formData,
    setFormData,
}) => {

    const { variants = [] } = useSelector(
        state => state.variants
    );

    const [selectedValues, setSelectedValues] = useState({});
    const [customValues, setCustomValues] = useState({});

    // Clear selections when adding a new product
    useEffect(() => {

        if (!formData.productVariants?.length) {

            setSelectedValues({});
            setCustomValues({});

            return;
        }

        // Populate selections while editing
        const selected = {};

        formData.productVariants.forEach(row => {

            row.attributes?.forEach(attr => {

                const id =
                    typeof attr.variantType === "object"
                        ? attr.variantType._id
                        : attr.variantType;

                if (!selected[id]) {
                    selected[id] = [];
                }

                if (!selected[id].includes(attr.value)) {
                    selected[id].push(attr.value);
                }

            });

        });

        setSelectedValues(selected);

    }, [formData.productVariants]);

    const handleChange = (variantId, values) => {

        setSelectedValues(prev => ({
            ...prev,
            [variantId]: values,
        }));

    };

    const addCustomValue = (variantId) => {

        const value = customValues[variantId]?.trim();

        if (!value) return;

        setSelectedValues(prev => ({

            ...prev,

            [variantId]: [
                ...(prev[variantId] || []),
                value,
            ],

        }));

        setCustomValues(prev => ({
            ...prev,
            [variantId]: "",
        }));

    };

    const generatedVariants = useMemo(() => {

        const activeVariants = variants.filter(
            variant => selectedValues[variant._id]?.length
        );

        if (!activeVariants.length) return [];

        const combine = (index, current) => {

            if (index === activeVariants.length) {

                return [
                    {
                        attributes: [...current],
                    },
                ];

            }

            let result = [];

            const variant = activeVariants[index];

            selectedValues[variant._id].forEach(value => {

                result.push(

                    ...combine(index + 1, [

                        ...current,

                        {
                            variantType: variant._id,
                            displayName: variant.displayName,
                            value,
                        },

                    ])

                );

            });

            return result;

        };

        return combine(0, []);

    }, [selectedValues, variants]);

    const handleGenerate = () => {

        const rows = generatedVariants.map(item => ({

            attributes: item.attributes.map(attr => ({

                variantType: attr.variantType,

                displayName: attr.displayName,

                value: attr.value,

            })),

            sku: "",

            barcode: "",

            stock: 0,

            sellingPrice: "",

        }));

        console.log("ROWS", rows);

        setFormData(prev => ({

            ...prev,

            productVariants: rows,

        }));

    };

    const updateRow = (index, field, value) => {

        const copy = [...formData.productVariants];

        copy[index][field] = value;

        setFormData(prev => ({

            ...prev,

            productVariants: copy,

        }));

    };

    const deleteVariant = (index) => {

        setFormData(prev => ({

            ...prev,

            productVariants: prev.productVariants.filter(
                (_, i) => i !== index
            ),

        }));

    };
    return (

    <Box mt={3}>

        <Typography variant="h6">
            Product Variants
        </Typography>

        <Stack spacing={3} mt={2}>

            {variants.map((variant) => (

                <FormControl
                    fullWidth
                    key={variant._id}
                >

                    <InputLabel>
                        {variant.displayName}
                    </InputLabel>

                    <Select
                        multiple
                        value={selectedValues[variant._id] || []}
                        onChange={(e) =>
                            handleChange(
                                variant._id,
                                e.target.value
                            )
                        }
                        input={
                            <OutlinedInput
                                label={variant.displayName}
                            />
                        }
                        renderValue={(selected) => (

                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 1,
                                    flexWrap: "wrap",
                                }}
                            >

                                {selected.map((value) => (

                                    <Chip
                                        key={value}
                                        label={value}
                                    />

                                ))}

                            </Box>

                        )}
                    >

                        {variant.values?.map((value) => (

                            <MenuItem
                                key={value}
                                value={value}
                            >

                                <Checkbox
                                    checked={
                                        selectedValues[
                                            variant._id
                                        ]?.includes(value) || false
                                    }
                                />

                                {value}

                            </MenuItem>

                        ))}

                    </Select>

                    <Box
                        mt={1}
                        display="flex"
                        gap={1}
                    >

                        <TextField
                            size="small"
                            placeholder="Custom value"
                            value={
                                customValues[
                                    variant._id
                                ] || ""
                            }
                            onChange={(e) =>
                                setCustomValues(prev => ({
                                    ...prev,
                                    [variant._id]:
                                        e.target.value,
                                }))
                            }
                        />

                        <Button
                            variant="outlined"
                            onClick={() =>
                                addCustomValue(
                                    variant._id
                                )
                            }
                        >
                            Add
                        </Button>

                    </Box>

                </FormControl>

            ))}

            <Button
                variant="contained"
                onClick={handleGenerate}
            >
                Generate Variants
            </Button>

            {formData.productVariants?.length > 0 && (

                <Paper>

                    <Table>

                        <TableHead>

                            <TableRow>

                                <TableCell>
                                    Attributes
                                </TableCell>

                                <TableCell>
                                    SKU
                                </TableCell>

                                <TableCell>
                                    Barcode
                                </TableCell>

                                <TableCell>
                                    Stock
                                </TableCell>

                                <TableCell>
                                    Selling Price
                                </TableCell>

                                <TableCell>
                                    Action
                                </TableCell>

                            </TableRow>

                        </TableHead>

                        <TableBody>

                            {formData.productVariants.map(
                                (row, index) => (

                                    <TableRow key={index}>

                                        <TableCell>

                                            {row.attributes?.map(
                                                (a, i) => (

                                                    <Chip
                                                        key={i}
                                                        sx={{ mr: 1, mb: 1 }}
                                                        label={
                                                            a.displayName
                                                                ? `${a.displayName}: ${a.value}`
                                                                : a.value
                                                        }
                                                    />

                                                )
                                            )}

                                        </TableCell>

                                        <TableCell>

                                            <TextField
                                                size="small"
                                                value={row.sku}
                                                onChange={(e) =>
                                                    updateRow(
                                                        index,
                                                        "sku",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                        </TableCell>

                                        <TableCell>

                                            <TextField
                                                size="small"
                                                value={row.barcode}
                                                onChange={(e) =>
                                                    updateRow(
                                                        index,
                                                        "barcode",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                        </TableCell>

                                        <TableCell>

                                            <TextField
                                                size="small"
                                                type="number"
                                                value={row.stock}
                                                onChange={(e) =>
                                                    updateRow(
                                                        index,
                                                        "stock",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                        </TableCell>

                                        <TableCell>

                                            <TextField
                                                size="small"
                                                type="number"
                                                value={row.sellingPrice}
                                                onChange={(e) =>
                                                    updateRow(
                                                        index,
                                                        "sellingPrice",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                        </TableCell>

                                        <TableCell>

                                            <IconButton
                                                color="error"
                                                onClick={() =>
                                                    deleteVariant(index)
                                                }
                                            >
                                                <DeleteIcon />
                                            </IconButton>

                                        </TableCell>

                                    </TableRow>

                                )
                            )}

                        </TableBody>

                    </Table>

                </Paper>

            )}

        </Stack>

    </Box>

);

};

export default ProductVariants;