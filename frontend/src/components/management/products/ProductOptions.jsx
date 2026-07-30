// import { useEffect, useState } from "react";

// import {
//     Box,
//     Typography,
//     Chip,
//     Stack,
//     Button,
//     TextField,
//     Divider,
// } from "@mui/material";

// import { useDispatch, useSelector } from "react-redux";

// import { getVariants } from "../../../features/variants/VariantThunk";

// const ProductOptions = ({
//     formData,
//     setFormData,
// }) => {

//     const dispatch = useDispatch();

//     const { variants = [] } = useSelector(
//         (state) => state.variants
//     );

//     const [selectedValues, setSelectedValues] = useState({});
//     const [manualValues, setManualValues] = useState({});

//     useEffect(() => {

//         dispatch(getVariants());

//     }, [dispatch]);

//     // ----------------------------
//     // Checkbox selection
//     // ----------------------------

//     const toggleValue = (variantId, value) => {

//         setSelectedValues(prev => {

//             const current = prev[variantId] || [];

//             if (current.includes(value)) {

//                 return {

//                     ...prev,

//                     [variantId]: current.filter(
//                         item => item !== value
//                     ),

//                 };

//             }

//             return {

//                 ...prev,

//                 [variantId]: [
//                     ...current,
//                     value,
//                 ],

//             };

//         });

//     };

//     // ----------------------------
//     // Manual value
//     // ----------------------------

//     const addManualValue = (variantId) => {

//         const value =
//             (manualValues[variantId] || "").trim();

//         if (!value) return;

//         setSelectedValues(prev => {

//             const current = prev[variantId] || [];

//             if (current.includes(value)) return prev;

//             return {

//                 ...prev,

//                 [variantId]: [
//                     ...current,
//                     value,
//                 ],

//             };

//         });

//         setManualValues(prev => ({

//             ...prev,

//             [variantId]: "",

//         }));

//     };

//     // ----------------------------
//     // Cartesian Product
//     // ----------------------------

//     const cartesian = (arrays) => {

//         return arrays.reduce(

//             (acc, current) =>

//                 acc.flatMap(a =>
//                     current.map(b => [...a, b])
//                 ),

//             [[]]

//         );

//     };

//     // ----------------------------
//     // Generate Variants
//     // ----------------------------

//     const generateVariants = () => {

//         const active = variants
//             .filter(v =>
//                 (selectedValues[v._id] || []).length > 0
//             );

//         if (active.length === 0) {

//             setFormData(prev => ({
//                 ...prev,
//                 productVariants: [],
//             }));

//             return;

//         }

//         const arrays = active.map(v =>
//             selectedValues[v._id].map(value => ({
//                 variantType: v._id,
//                 value,
//             }))
//         );

//         const combinations = cartesian(arrays);

//         const rows = combinations.map(attributes => ({

//             attributes,

//             sku: "",

//             barcode: "",

//             stock: 0,

//             sellingPrice:
//                 Number(formData.sellingPrice) || 0,

//         }));

//         setFormData(prev => ({

//             ...prev,

//             productVariants: rows,

//         }));

//     };

//     return (

//         <Box>

//             <Typography
//                 variant="h6"
//                 mb={2}
//             >
//                 Product Options
//             </Typography>

//             {

//                 variants.map(variant => (

//                     <Box
//                         key={variant._id}
//                         mb={4}
//                     >

//                         <Typography
//                             fontWeight="bold"
//                             mb={1}
//                         >
//                             {variant.displayName}
//                         </Typography>

//                         {

//                             variant.inputType ===
//                             "checkbox"

//                                 ?

//                                 <Stack
//                                     direction="row"
//                                     spacing={1}
//                                     flexWrap="wrap"
//                                 >

//                                     {

//                                         variant.values.map(value => (

//                                             <Chip
//                                                 key={value}
//                                                 label={value}
//                                                 clickable
//                                                 color={
//                                                     (
//                                                         selectedValues[
//                                                             variant._id
//                                                         ] || []
//                                                     ).includes(value)

//                                                         ?

//                                                         "primary"

//                                                         :

//                                                         "default"
//                                                 }
//                                                 onClick={() =>
//                                                     toggleValue(
//                                                         variant._id,
//                                                         value
//                                                     )
//                                                 }
//                                             />

//                                         ))

//                                     }

//                                 </Stack>

//                                 :

//                                 <>

//                                     <Box
//                                         display="flex"
//                                         gap={2}
//                                         mt={1}
//                                     >

//                                         <TextField
//                                             fullWidth
//                                             label={`Add ${variant.displayName}`}
//                                             value={
//                                                 manualValues[
//                                                     variant._id
//                                                 ] || ""
//                                             }
//                                             onChange={e =>

//                                                 setManualValues(prev => ({

//                                                     ...prev,

//                                                     [variant._id]:
//                                                         e.target.value,

//                                                 }))

//                                             }
//                                         />

//                                         <Button
//                                             variant="contained"
//                                             onClick={() =>
//                                                 addManualValue(
//                                                     variant._id
//                                                 )
//                                             }
//                                         >
//                                             Add
//                                         </Button>

//                                     </Box>

//                                     <Stack
//                                         direction="row"
//                                         spacing={1}
//                                         flexWrap="wrap"
//                                         mt={2}
//                                     >

//                                         {

//                                             (
//                                                 selectedValues[
//                                                     variant._id
//                                                 ] || []
//                                             ).map(value => (

//                                                 <Chip
//                                                     key={value}
//                                                     label={value}
//                                                     onDelete={() =>

//                                                         toggleValue(
//                                                             variant._id,
//                                                             value
//                                                         )

//                                                     }
//                                                 />

//                                             ))

//                                         }

//                                     </Stack>

//                                 </>

//                         }

//                         <Divider sx={{ mt: 3 }} />

//                     </Box>

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

// export default ProductOptions;


import { useEffect, useState } from "react";

import {
    Box,
    Typography,
    Chip,
    Stack,
    Button,
    TextField,
    Divider,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import { getVariants } from "../../../features/variants/VariantThunk";

const ProductOptions = ({
    formData,
    setFormData,
}) => {

    const dispatch = useDispatch();

    const { variants = [] } = useSelector(
        state => state.variants
    );

    const [selectedValues, setSelectedValues] = useState({});

    const [manualValues, setManualValues] = useState({});

    useEffect(() => {

        dispatch(getVariants());

    }, [dispatch]);

    // ---------------------------------
    // Toggle checkbox values
    // ---------------------------------

    const toggleValue = (
        variantId,
        value
    ) => {

        setSelectedValues(prev => {

            const current =
                prev[variantId] || [];

            if (current.includes(value)) {

                return {

                    ...prev,

                    [variantId]:
                        current.filter(
                            item => item !== value
                        ),

                };

            }

            return {

                ...prev,

                [variantId]: [

                    ...current,

                    value,

                ],

            };

        });

    };
    useEffect(() => {

        if (
            !variants.length ||
            !formData.productVariants?.length
        ) {
            return;
        }

        const selected = {};

        formData.productVariants.forEach(productVariant => {

            productVariant.attributes.forEach(attribute => {

                const key = String(attribute.variantType);

                if (!selected[key]) {
                    selected[key] = [];
                }

                if (!selected[key].includes(attribute.value)) {
                    selected[key].push(attribute.value);
                }

            });

        });

        setSelectedValues(selected);

    }, [variants, formData.productVariants]);


    // ---------------------------------
    // Manual values
    // ---------------------------------

    const addManualValue = (
        variantId
    ) => {

        const value =
            (manualValues[variantId] || "")
                .trim();

        if (!value) return;

        setSelectedValues(prev => {

            const current =
                prev[variantId] || [];

            if (
                current.includes(value)
            ) {

                return prev;

            }

            return {

                ...prev,

                [variantId]: [

                    ...current,

                    value,

                ],

            };

        });

        setManualValues(prev => ({

            ...prev,

            [variantId]: "",

        }));

    };

    // ---------------------------------
    // Cartesian Product
    // ---------------------------------

    const cartesian = (arrays) => {

        return arrays.reduce(

            (acc, current) =>

                acc.flatMap(a =>

                    current.map(

                        b => [...a, b]

                    )

                ),

            [[]]

        );

    };
    // ---------------------------------
    // Generate Variant Combinations
    // ---------------------------------

    const generateVariants = () => {

        const activeVariants = variants.filter(

            variant =>

                (selectedValues[variant._id] || [])
                    .length > 0

        );

        if (activeVariants.length === 0) {

            setFormData(prev => ({

                ...prev,

                productVariants: [],

            }));

            return;

        }

        // Build arrays for cartesian product

        const arrays = activeVariants.map(

            variant =>

                selectedValues[variant._id].map(

                    value => ({

                        variantType: variant._id,

                        value,

                    })

                )

        );

        const combinations =
            cartesian(arrays);

        const rows = combinations.map(
            attributes => {

                // Keep attribute order consistent

                const sortedAttributes = [
                    ...attributes,
                ].sort((a, b) =>
                    a.variantType.localeCompare(
                        b.variantType
                    )
                );

                // Preserve inventory data
                const existing =
                    formData.productVariants.find(
                        item =>

                            JSON.stringify(
                                [...item.attributes].sort(
                                    (a, b) =>
                                        a.variantType.localeCompare(
                                            b.variantType
                                        )
                                )
                            ) ===
                            JSON.stringify(
                                sortedAttributes
                            )
                    );

                return {

                    attributes:
                        sortedAttributes,

                    sku:
                        existing?.sku || "",

                    barcode:
                        existing?.barcode || "",

                    stock: existing?.stock ?? 0,

                    sellingPrice:
                        existing?.sellingPrice ??
                        Number(formData.sellingPrice ?? 0),

                };

            }
        );

        // Remove duplicate combinations

        const uniqueRows =
            rows.filter(
                (
                    row,
                    index,
                    self
                ) =>

                    index ===

                    self.findIndex(
                        item =>

                            JSON.stringify(
                                item.attributes
                            ) ===

                            JSON.stringify(
                                row.attributes
                            )
                    )
            );

        setFormData(prev => ({

            ...prev,

            productVariants:
                uniqueRows,

        }));

    };

    return (

        <Box>

            <Typography
                variant="h6"
                mb={2}
            >
                Product Options
            </Typography>
            {

                variants.map(variant => (

                    <Box
                        key={variant._id}
                        mb={4}
                    >

                        <Typography
                            fontWeight="bold"
                            mb={1}
                        >
                            {variant.displayName}
                        </Typography>

                        {

                            variant.inputType === "checkbox"

                                ?

                                <Stack
                                    direction="row"
                                    spacing={1}
                                    useFlexGap
                                    flexWrap="wrap"
                                >

                                    {

                                        variant.values.map(value => (

                                            <Chip
                                                key={value}
                                                label={value}
                                                clickable
                                                color={
                                                    (
                                                        selectedValues[
                                                        variant._id
                                                        ] || []
                                                    ).includes(value)

                                                        ?

                                                        "primary"

                                                        :

                                                        "default"
                                                }
                                                onClick={() =>
                                                    toggleValue(
                                                        variant._id,
                                                        value
                                                    )
                                                }
                                            />

                                        ))

                                    }

                                </Stack>

                                :

                                <>

                                    <Box
                                        display="flex"
                                        gap={2}
                                        mt={1}
                                    >

                                        <TextField
                                            fullWidth
                                            label={`Add ${variant.displayName}`}
                                            value={
                                                manualValues[
                                                variant._id
                                                ] || ""
                                            }
                                            onChange={(e) =>

                                                setManualValues(prev => ({

                                                    ...prev,

                                                    [variant._id]:
                                                        e.target.value,

                                                }))

                                            }
                                        />

                                        <Button
                                            variant="contained"
                                            onClick={() =>
                                                addManualValue(
                                                    variant._id
                                                )
                                            }
                                        >
                                            Add
                                        </Button>

                                    </Box>

                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        useFlexGap
                                        flexWrap="wrap"
                                        mt={2}
                                    >

                                        {

                                            (
                                                selectedValues[
                                                variant._id
                                                ] || []
                                            ).map(value => (

                                                <Chip
                                                    key={value}
                                                    label={value}
                                                    color="primary"
                                                    onDelete={() =>
                                                        toggleValue(
                                                            variant._id,
                                                            value
                                                        )
                                                    }
                                                />

                                            ))

                                        }

                                    </Stack>

                                </>

                        }

                        <Divider
                            sx={{
                                mt: 3,
                            }}
                        />

                    </Box>

                ))

            }

            <Button
                variant="contained"
                size="large"
                onClick={generateVariants}
            >
                Generate Variants
            </Button>

        </Box>

    );

};

export default ProductOptions;