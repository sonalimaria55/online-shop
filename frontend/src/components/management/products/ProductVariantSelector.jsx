// import {
//     Box,
//     Typography,
//     Checkbox,
//     FormControlLabel,
//     Button,
//     TextField,
//     Paper,
//     Grid,
// } from "@mui/material";

// import { useState } from "react";

// import { useSelector } from "react-redux";

// const ProductVariantSelector = ({
//     formData,
//     setFormData,
// }) => {

//     const {
//         variants: variantTypes = []
//     } = useSelector(
//         (state) => state.variants
//     );

//     const [selectedValues, setSelectedValues] =
//         useState({});

//     const [manualValues, setManualValues] =
//         useState({});

//     const toggleValue = (
//         variantId,
//         value
//     ) => {

//         setSelectedValues(prev => {

//             const current =
//                 prev[variantId] || [];

//             return {

//                 ...prev,

//                 [variantId]:

//                     current.includes(value)

//                         ?

//                         current.filter(
//                             item => item !== value
//                         )

//                         :

//                         [
//                             ...current,
//                             value
//                         ]

//             };

//         });

//     };

//     const addManualValue = (
//         variantId
//     ) => {

//         const value =
//             manualValues[variantId];

//         if (!value)
//             return;

//         setSelectedValues(prev => ({

//             ...prev,

//             [variantId]: [
//                 ...(prev[variantId] || []),
//                 value
//             ]

//         }));

//         setManualValues(prev => ({

//             ...prev,

//             [variantId]: ""

//         }));

//     };

//     const createCombinations = (
//         groups,
//         index = 0
//     ) => {

//         if (index === groups.length) {

//             return [
//                 []
//             ];

//         }

//         const current =
//             groups[index];

//         const rest =
//             createCombinations(
//                 groups,
//                 index + 1
//             );

//         let result = [];

//         current.values.forEach(value => {

//             rest.forEach(item => {

//                 result.push([

//                     {
//                         variantType:
//                             current.variantType,

//                         value

//                     },

//                     ...item

//                 ]);

//             });

//         });

//         return result;

//     };

//     const generateVariants = () => {

//         const groups =
//             Object.keys(selectedValues)
//                 .map(id => ({

//                     variantType: id,

//                     values:
//                         selectedValues[id]

//                 }))
//                 .filter(
//                     item =>
//                         item.values.length > 0
//                 );

//         if (groups.length === 0)
//             return;

//         const combinations =
//             createCombinations(groups);

//         const productVariants =
//             combinations.map(attributes => ({

//                 attributes,

//                 sku: "",

//                 barcode: "",

//                 stock: 0,

//                 sellingPrice:
//                     formData.sellingPrice || null

//             }));

//         setFormData(prev => ({

//             ...prev,

//             productVariants

//         }));

//     };

//     return (

//         <Box mt={3}>

//             <Typography
//                 variant="h6"
//                 mb={2}
//             >

//                 Select Product Variants

//             </Typography>

//             {
//                 variantTypes.map(type => (

//                     <Paper

//                         key={type._id}

//                         sx={{
//                             p:2,
//                             mb:2
//                         }}

//                     >

//                         <Typography
//                             fontWeight="bold"
//                             mb={1}
//                         >
//                             {type.displayName}
//                         </Typography>

//                         {
//                             type.inputType === "checkbox" && (

//                                 <Grid container>

//                                     {
//                                         type.values.map(value => (

//                                             <Grid
//                                                 item
//                                                 xs={6}
//                                                 md={3}
//                                                 key={value}
//                                             >

//                                                 <FormControlLabel

//                                                     control={

//                                                         <Checkbox

//                                                             checked={
//                                                                 selectedValues[type._id]
//                                                                     ?.includes(value)
//                                                                 ||
//                                                                 false
//                                                             }

//                                                             onChange={() =>
//                                                                 toggleValue(
//                                                                     type._id,
//                                                                     value
//                                                                 )
//                                                             }

//                                                         />

//                                                     }

//                                                     label={value}

//                                                 />

//                                             </Grid>

//                                         ))
//                                     }

//                                 </Grid>

//                             )
//                         }

//                         {
//                             type.inputType === "manual" && (

//                                 <Box>

//                                     <TextField

//                                         fullWidth

//                                         label={
//                                             `Enter ${type.displayName}`
//                                         }

//                                         value={
//                                             manualValues[type._id]
//                                             ||
//                                             ""
//                                         }

//                                         onChange={(e) =>

//                                             setManualValues(prev => ({

//                                                 ...prev,

//                                                 [type._id]:
//                                                     e.target.value

//                                             }))

//                                         }

//                                     />

//                                     <Button

//                                         sx={{
//                                             mt:1
//                                         }}

//                                         variant="outlined"

//                                         onClick={() =>
//                                             addManualValue(
//                                                 type._id
//                                             )
//                                         }

//                                     >

//                                         Add

//                                     </Button>

//                                 </Box>

//                             )
//                         }

//                     </Paper>

//                 ))
//             }

//             <Button

//                 variant="contained"

//                 onClick={generateVariants}

//             >

//                 Generate Variants

//             </Button>

//         </Box>

//     );

// };

// export default ProductVariantSelector;

import {
    Box,
    Typography,
    Checkbox,
    FormControlLabel,
    Button,
    TextField,
    Paper,
    Grid,
} from "@mui/material";

// import { useState } from "react";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

const ProductVariantSelector = ({ formData, setFormData }) => {
    const { variants: variantTypes = [] } = useSelector(
        (state) => state.variants,
    );

    const [selectedValues, setSelectedValues] = useState({});

    const [manualValues, setManualValues] = useState({});




    //   useEffect(() => {

    //     if (!formData.productVariants?.length) {
    //         return;
    //     }


    //     const selected = {};


    //     formData.productVariants.forEach((productVariant)=>{


    //         productVariant.attributes?.forEach((attribute)=>{


    //             if(!selected[attribute.variantType]){

    //                 selected[attribute.variantType] = [];

    //             }


    //             if(
    //                 !selected[attribute.variantType]
    //                 .includes(attribute.value)
    //             ){

    //                 selected[attribute.variantType]
    //                 .push(attribute.value);

    //             }


    //         });


    //     });



    //     setSelectedValues(selected);


    // },[
    //     formData.productVariants
    // ]);







    useEffect(() => {

        if (!formData.productVariants?.length)
            return;


        const selected = {};


        formData.productVariants.forEach((productVariant) => {


            productVariant.attributes?.forEach((attribute) => {


                let variantId = attribute.variantType;

                const variant =
                    variantTypes.find((item) => {

                        const attrId =
                            typeof attribute.variantType === "object"
                                ?
                                attribute.variantType._id
                                :
                                attribute.variantType;


                        return (
                            String(item._id)
                            ===
                            String(attrId)
                        );

                    });


                if (variant) {

                    variantId = variant._id;

                }



                if (!selected[variantId]) {

                    selected[variantId] = [];

                }



                if (
                    !selected[variantId]
                        .includes(attribute.value)
                ) {

                    selected[variantId]
                        .push(attribute.value);

                }


            });


        });


        console.log(
            "LOADED SELECTED VALUES",
            selected
        );


        setSelectedValues(selected);



    }, [
        formData.productVariants,
        variantTypes
    ]);




    // const toggleValue = (variantId, value) => {
    //     setSelectedValues((prev) => {
    //         const current = prev[variantId] || [];

    //         return {
    //             ...prev,

    //             [variantId]: current.includes(value)
    //                 ? current.filter((item) => item !== value)
    //                 : [...current, value],
    //         };
    //     });
    // };


    const toggleValue = (
        variantId,
        value
    ) => {


        setSelectedValues(prev => {


            const current =
                prev[variantId] || [];



            let updated;



            if (current.includes(value)) {

                updated =
                    current.filter(
                        item => item !== value
                    );

            }
            else {

                updated = [
                    ...current,
                    value
                ];

            }



            const result = {

                ...prev,

                [variantId]: updated

            };



            console.log(
                "SELECTED VALUES UPDATED",
                result
            );



            return result;


        });


    };

    const addManualValue = (variantId) => {
        const value = manualValues[variantId];

        if (!value) return;

        setSelectedValues((prev) => ({
            ...prev,

            [variantId]: [...(prev[variantId] || []), value],
        }));

        setManualValues((prev) => ({
            ...prev,

            [variantId]: "",
        }));
    };

    const createCombinations = (groups, index = 0) => {
        if (index === groups.length) {
            return [[]];
        }

        const current = groups[index];

        const rest = createCombinations(groups, index + 1);

        let result = [];

        current.values.forEach((value) => {
            rest.forEach((item) => {
                result.push([
                    {
                        variantType: current.variantType,

                        value,
                    },

                    ...item,
                ]);
            });
        });

        return result;
    };

    const generateVariants = () => {
        console.log("Selected Values", selectedValues);
        console.log("Generated", combinations);
        const groups = Object.keys(selectedValues)
            .map((id) => ({
                variantType: id,

                values: selectedValues[id],
            }))
            .filter((item) => item.values.length > 0);

        if (groups.length === 0) return;

        const combinations = createCombinations(groups);

        // const productVariants = combinations.map((attributes) => ({
        //   attributes,

        //   sku: "",

        //   barcode: "",

        //   stock: 0,

        //   sellingPrice: formData.sellingPrice || null,
        // }));




        const productVariants = combinations.map((attributes) => {


            const existing =
                formData.productVariants?.find(item => {

                    if (
                        item.attributes?.length !== attributes.length
                    )
                        return false;


                    return attributes.every(attr =>

                        item.attributes.some(oldAttr =>

                            String(
                                typeof oldAttr.variantType === "object"
                                    ?
                                    oldAttr.variantType._id
                                    :
                                    oldAttr.variantType
                            )
                            ===
                            String(attr.variantType)

                            &&

                            oldAttr.value === attr.value

                        )

                    );

                });


            return {

                attributes,

                sku:
                    existing?.sku || "",


                barcode:
                    existing?.barcode || "",


                stock:
                    existing?.stock || 0,


                sellingPrice:
                    existing?.sellingPrice ||
                    formData.sellingPrice ||
                    null

            };


        });

        setFormData((prev) => ({
            ...prev,

            productVariants,
        }));
    };

    return (
        <Box mt={3}>
            <Typography variant="h6" mb={2}>
                Select Product Variants
            </Typography>

            {variantTypes.map((type) => (
                <Paper
                    key={type._id}

                    sx={{
                        p: 2,
                        mb: 2,
                    }}
                >
                    <Typography fontWeight="bold" mb={1}>
                        {type.displayName || type.name}
                    </Typography>

                    {type.inputType === "checkbox" && (
                        <Grid container>
                            {/* {type.values.map((value) => ( */}
                            {(type.values || []).map((value) => (
                                <Grid item xs={6} md={3} key={value}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={
                                                    selectedValues[type._id]?.includes(value) || false
                                                }

                                                onChange={() => toggleValue(type._id, value)}
                                            />
                                        }

                                        label={value}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    )}

                    {type.inputType === "manual" && (
                        <Box>
                            <TextField
                                fullWidth

                                // label={`Enter ${type.displayName}`}
                                label={`Enter ${type.displayName || type.name}`}

                                value={manualValues[type._id] || ""}

                                onChange={(e) =>
                                    setManualValues((prev) => ({
                                        ...prev,

                                        [type._id]: e.target.value,
                                    }))
                                }
                            />

                            <Button
                                sx={{
                                    mt: 1,
                                }}

                                variant="outlined"

                                onClick={() => addManualValue(type._id)}
                            >
                                Add
                            </Button>
                        </Box>
                    )}
                </Paper>
            ))}

            <Button
                variant="contained"

                onClick={generateVariants}
            >
                Generate Variants
            </Button>
        </Box>
    );
};

export default ProductVariantSelector;
