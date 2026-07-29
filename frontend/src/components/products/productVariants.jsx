// import { useMemo, useState } from "react";
// import { useSelector } from "react-redux";

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
// } from "@mui/material";

// const ProductVariants = ({ onChange }) => {

//     const { variants } = useSelector(
//         (state) => state.variants
//     );

//     const [selectedValues, setSelectedValues] = useState({});

//     const handleChange = (variantId, values) => {

//         setSelectedValues((prev) => ({

//             ...prev,

//             [variantId]: values,

//         }));

//     };

//     const generatedVariants = useMemo(() => {

//         const activeVariants = variants.filter(

//             (variant) =>
//                 selectedValues[variant._id]?.length

//         );

//         if (!activeVariants.length) return [];

//         const combine = (index, current) => {

//             if (index === activeVariants.length) {

//                 return [current];

//             }

//             const variant = activeVariants[index];

//             const values =
//                 selectedValues[variant._id];

//             let result = [];

//             values.forEach((value) => {

//                 result = result.concat(

//                     combine(index + 1, [

//                         ...current,

//                         {

//                             variantType: variant._id,

//                             variantName: variant.name,

//                             value,

//                         },

//                     ])

//                 );

//             });

//             return result;

//         };

//         return combine(0, []);

//     }, [selectedValues, variants]);

//     const handleGenerate = () => {

//         const rows = generatedVariants.map(
//             (attributes) => ({

//                 sku: "",

//                 barcode: "",

//                 stock: 0,

//                 sellingPrice: "",

//                 attributes,

//             })
//         );

//         onChange(rows);

//     };

//     return (

//         <Box mt={3}>

//             <Typography
//                 variant="h6"
//                 gutterBottom
//             >

//                 Product Variants

//             </Typography>

//             <Stack spacing={3}>

//                 {variants.map((variant) => (

//                     <FormControl
//                         key={variant._id}
//                         fullWidth
//                     >

//                         <InputLabel>

//                             {variant.name}

//                         </InputLabel>

//                         <Select
//                             multiple
//                             value={
//                                 selectedValues[
//                                     variant._id
//                                 ] || []
//                             }
//                             onChange={(e) =>
//                                 handleChange(
//                                     variant._id,
//                                     e.target.value
//                                 )
//                             }
//                             input={
//                                 <OutlinedInput
//                                     label={variant.name}
//                                 />
//                             }
//                             renderValue={(selected) => (

//                                 <Box
//                                     sx={{
//                                         display: "flex",
//                                         flexWrap: "wrap",
//                                         gap: 0.5,
//                                     }}
//                                 >

//                                     {selected.map((value) => (

//                                         <Chip
//                                             key={value}
//                                             label={value}
//                                         />

//                                     ))}

//                                 </Box>

//                             )}
//                         >

//                             {variant.values.map((value) => (

//                                 <MenuItem
//                                     key={value}
//                                     value={value}
//                                 >

//                                     {value}

//                                 </MenuItem>

//                             ))}

//                         </Select>

//                     </FormControl>

//                 ))}

//                 <Button
//                     variant="contained"
//                     onClick={handleGenerate}
//                 >

//                     Generate Variants

//                 </Button>

//             </Stack>

//         </Box>

//     );

// };

// export default ProductVariants;
//----------------------------------------------------------------------------------

// import { useMemo, useState } from "react";
// import { useSelector } from "react-redux";

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
// } from "@mui/material";


// const ProductVariants = ({
//     formData,
//     setFormData
// }) => {


//     const {
//         variants = []
//     } = useSelector(
//         (state)=>state.variants
//     );



//     const [selectedValues,setSelectedValues] =
//         useState({});




//     const handleChange = (
//         variantId,
//         values
//     )=>{


//         setSelectedValues(prev=>({

//             ...prev,

//             [variantId]:values

//         }));

//     };





//     const generatedVariants = useMemo(()=>{


//         const activeVariants =
//             variants.filter(
//                 variant =>
//                 selectedValues[variant._id]?.length
//             );



//         if(activeVariants.length===0)
//             return [];




//         const combine = (
//             index,
//             current
//         )=>{


//             if(index === activeVariants.length){


//                 return [
//                     current
//                 ];

//             }




//             const variant =
//                 activeVariants[index];



//             const values =
//                 selectedValues[
//                     variant._id
//                 ];



//             let result=[];



//             values.forEach(value=>{


//                 result.push(
//                     ...combine(
//                         index+1,

//                         [
//                             ...current,

//                             {
//                                 variantType:
//                                 variant._id,

//                                 value:value
//                             }

//                         ]
//                     )
//                 );


//             });



//             return result;


//         };




//         return combine(
//             0,
//             []
//         );


//     },[
//         selectedValues,
//         variants
//     ]);







//     const handleGenerate = ()=>{


//         const rows =
//             generatedVariants.map(
//                 (attributes)=>({


//                     attributes,


//                     sku:"",

//                     barcode:"",

//                     stock:0,

//                     sellingPrice:""


//                 })
//             );



//         setFormData(prev=>({

//             ...prev,

//             productVariants:rows

//         }));


//     };







//     return (

//         <Box mt={3}>


//             <Typography
//                 variant="h6"
//             >

//                 Product Variants

//             </Typography>




//             <Stack spacing={3} mt={2}>


//                 {
//                     variants.map(
//                         (variant)=>(


//                         <FormControl
//                             key={variant._id}
//                             fullWidth
//                         >


//                             <InputLabel>

//                                 {
//                                     variant.displayName
//                                 }

//                             </InputLabel>




//                             <Select

//                                 multiple


//                                 value={
//                                     selectedValues[
//                                         variant._id
//                                     ] || []
//                                 }


//                                 onChange={
//                                     (e)=>
//                                     handleChange(
//                                         variant._id,
//                                         e.target.value
//                                     )
//                                 }


//                                 input={
//                                     <OutlinedInput
//                                         label={
//                                             variant.displayName
//                                         }
//                                     />
//                                 }



//                                 renderValue={
//                                     (selected)=>(


//                                     <Box
//                                     sx={{
//                                         display:"flex",
//                                         gap:1,
//                                         flexWrap:"wrap"
//                                     }}
//                                     >


//                                     {
//                                         selected.map(
//                                             item=>(

//                                             <Chip
//                                             key={item}
//                                             label={item}
//                                             />

//                                             )
//                                         )
//                                     }


//                                     </Box>

//                                 )}


//                             >


//                             {
//                                 variant.values?.map(
//                                     value=>(

//                                     <MenuItem
//                                     key={value}
//                                     value={value}
//                                     >

//                                     {value}

//                                     </MenuItem>

//                                     )
//                                 )
//                             }


//                             </Select>


//                         </FormControl>


//                     ))
//                 }






//                 <Button
//                     variant="contained"
//                     onClick={handleGenerate}
//                 >

//                     Generate Variants

//                 </Button>




//             </Stack>


//         </Box>

//     );

// };


// export default ProductVariants;
//----------------------------------------------------------
import { useMemo, useState } from "react";

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
    Button
} from "@mui/material";


import { useSelector } from "react-redux";



const ProductVariants = ({
    formData,
    setFormData
}) => {


    const {
        variants = []
    } = useSelector(
        state => state.variants
    );



    const [selectedValues,setSelectedValues] =
        useState({});




    const handleChange = (
        variantId,
        values
    )=>{

        setSelectedValues(prev=>({

            ...prev,

            [variantId]:values

        }));

    };





    const generatedVariants = useMemo(()=>{


        const activeVariants =
            variants.filter(
                variant =>
                selectedValues[
                    variant._id
                ]?.length
            );



        if(activeVariants.length===0)
        {
            return [];
        }



        const combine=(index,current)=>{


            if(index === activeVariants.length)
            {
                return [
                    {
                        attributes:[
                            ...current
                        ]
                    }
                ];
            }



            const variant =
                activeVariants[index];



            let result=[];



            selectedValues[
                variant._id
            ]
            .forEach(value=>{


                result.push(

                    ...combine(

                        index+1,

                        [

                            ...current,

                            {

                              variantType:
                              variant._id,


                              value:value

                            }

                        ]

                    )

                );


            });



            return result;


        };



        return combine(
            0,
            []
        );



    },[
        selectedValues,
        variants
    ]);






    const handleGenerate = ()=>{


        const rows =
            generatedVariants.map(
                item=>({

                    attributes:
                    item.attributes,


                    sku:"",

                    barcode:"",


                    stock:0,


                    sellingPrice:""


                })
            );



        setFormData(prev=>({

            ...prev,

            productVariants:rows

        }));


    };





return (

<Box mt={3}>


<Typography
variant="h6"
>
Product Variants
</Typography>



<Stack spacing={3}
mt={2}
>


{
variants.map(variant=>(


<FormControl
fullWidth
key={variant._id}
>


<InputLabel>

{variant.displayName}

</InputLabel>



<Select


multiple


value={
selectedValues[
variant._id
] || []
}



onChange={
(e)=>
handleChange(
variant._id,
e.target.value
)
}



input={
<OutlinedInput
label={
variant.displayName
}
/>
}



renderValue={
(selected)=>(

<Box
sx={{
display:"flex",
gap:1,
flexWrap:"wrap"
}}
>


{
selected.map(value=>(

<Chip
key={value}
label={value}
/>

))
}


</Box>

)

}




>


{

(variant.values || [])
.map(value=>(


<MenuItem

key={value}

value={value}

>

{value}

</MenuItem>


))

}


</Select>



</FormControl>


))

}



<Button

variant="contained"

onClick={handleGenerate}

>

Generate Variants

</Button>




</Stack>



</Box>


);


};


export default ProductVariants;