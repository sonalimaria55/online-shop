// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";

// import {
//     Box,
//     Button,
//     IconButton,
//     Stack,
//     TextField,
// } from "@mui/material";

// import AddIcon from "@mui/icons-material/Add";
// import DeleteIcon from "@mui/icons-material/Delete";

// import {
//     createVariant,
//     updateVariant,
// } from "../../../features/variants/VariantThunk";

// const VariantForm = ({ variant, onClose }) => {

//     const dispatch = useDispatch();

//     const [name, setName] = useState("");

//     const [values, setValues] = useState([""]);

//     useEffect(() => {

//         if (variant) {

//             setName(variant.name);

//             setValues(
//                 variant.values.length
//                     ? variant.values
//                     : [""]
//             );

//         }

//     }, [variant]);



//     const handleValueChange = (index, value) => {

//         const updated = [...values];

//         updated[index] = value;

//         setValues(updated);

//     };



//     const addValue = () => {

//         setValues([...values, ""]);

//     };



//     const removeValue = (index) => {

//         const updated = values.filter(
//             (_, i) => i !== index
//         );

//         setValues(
//             updated.length ? updated : [""]
//         );

//     };



//     const handleSubmit = async (e) => {

//         e.preventDefault();

//         const data = {

//             name,

//             values: values.filter(
//                 item => item.trim() !== ""
//             ),

//         };



//         if (variant) {

//             await dispatch(

//                 updateVariant({

//                     id: variant._id,

//                     data,

//                 })

//             );

//         } else {

//             await dispatch(

//                 createVariant(data)

//             );

//         }

//         onClose();

//     };



//     return (

//         <Box
//             component="form"
//             onSubmit={handleSubmit}
//             mt={2}
//         >

//             <TextField
//                 fullWidth
//                 label="Variant Name"
//                 value={name}
//                 onChange={(e) =>
//                     setName(e.target.value)
//                 }
//                 margin="normal"
//                 required
//             />


//             <Stack spacing={2} mt={2}>

//                 {values.map((value, index) => (

//                     <Box
//                         key={index}
//                         display="flex"
//                         gap={1}
//                     >

//                         <TextField
//                             fullWidth
//                             label={`Value ${index + 1}`}
//                             value={value}
//                             onChange={(e) =>
//                                 handleValueChange(
//                                     index,
//                                     e.target.value
//                                 )
//                             }
//                         />

//                         <IconButton
//                             color="error"
//                             onClick={() =>
//                                 removeValue(index)
//                             }
//                         >
//                             <DeleteIcon />
//                         </IconButton>

//                     </Box>

//                 ))}

//             </Stack>


//             <Button
//                 startIcon={<AddIcon />}
//                 onClick={addValue}
//                 sx={{ mt: 2 }}
//             >
//                 Add Value
//             </Button>


//             <Box
//                 mt={3}
//                 display="flex"
//                 justifyContent="flex-end"
//             >

//                 <Button
//                     type="submit"
//                     variant="contained"
//                 >
//                     {variant
//                         ? "Update"
//                         : "Create"}
//                 </Button>

//             </Box>

//         </Box>

//     );

// };

// export default VariantForm;


import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button
} from "@mui/material";


import { useState } from "react";

import { useDispatch } from "react-redux";


import {
    createVariant
} from "../../../features/variants/VariantThunk";



const VariantForm = ({
    open,
    setOpen
})=>{


    const dispatch = useDispatch();



    const [name,setName] = useState("");

    const [values,setValues] = useState("");




    const handleSubmit = ()=>{


        const data={

            name,

            values:
            values
            .split(",")
            .map(item=>item.trim())

        };



        dispatch(createVariant(data));



        setName("");

        setValues("");

        setOpen(false);


    };




    return (

        <Dialog
            open={open}
            onClose={()=>setOpen(false)}
        >


            <DialogTitle>

                Create Variant

            </DialogTitle>



            <DialogContent>


                <TextField

                    fullWidth

                    label="Variant Name"

                    value={name}

                    onChange={
                        e=>setName(e.target.value)
                    }

                    margin="normal"

                />



                <TextField

                    fullWidth

                    label="Values (comma separated)"

                    placeholder="S,M,L,XL"

                    value={values}

                    onChange={
                        e=>setValues(e.target.value)
                    }

                    margin="normal"

                />


            </DialogContent>




            <DialogActions>


                <Button
                    onClick={()=>setOpen(false)}
                >

                    Cancel

                </Button>



                <Button

                    variant="contained"

                    onClick={handleSubmit}

                >

                    Save

                </Button>



            </DialogActions>


        </Dialog>

    );


};



export default VariantForm;