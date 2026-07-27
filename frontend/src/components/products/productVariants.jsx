import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

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
} from "@mui/material";

const ProductVariants = ({ onChange }) => {

    const { variants } = useSelector(
        (state) => state.variants
    );

    const [selectedValues, setSelectedValues] = useState({});

    const handleChange = (variantId, values) => {

        setSelectedValues((prev) => ({

            ...prev,

            [variantId]: values,

        }));

    };

    const generatedVariants = useMemo(() => {

        const activeVariants = variants.filter(

            (variant) =>
                selectedValues[variant._id]?.length

        );

        if (!activeVariants.length) return [];

        const combine = (index, current) => {

            if (index === activeVariants.length) {

                return [current];

            }

            const variant = activeVariants[index];

            const values =
                selectedValues[variant._id];

            let result = [];

            values.forEach((value) => {

                result = result.concat(

                    combine(index + 1, [

                        ...current,

                        {

                            variantType: variant._id,

                            variantName: variant.name,

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

        const rows = generatedVariants.map(
            (attributes) => ({

                sku: "",

                barcode: "",

                stock: 0,

                sellingPrice: "",

                attributes,

            })
        );

        onChange(rows);

    };

    return (

        <Box mt={3}>

            <Typography
                variant="h6"
                gutterBottom
            >

                Product Variants

            </Typography>

            <Stack spacing={3}>

                {variants.map((variant) => (

                    <FormControl
                        key={variant._id}
                        fullWidth
                    >

                        <InputLabel>

                            {variant.name}

                        </InputLabel>

                        <Select
                            multiple
                            value={
                                selectedValues[
                                    variant._id
                                ] || []
                            }
                            onChange={(e) =>
                                handleChange(
                                    variant._id,
                                    e.target.value
                                )
                            }
                            input={
                                <OutlinedInput
                                    label={variant.name}
                                />
                            }
                            renderValue={(selected) => (

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 0.5,
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

                            {variant.values.map((value) => (

                                <MenuItem
                                    key={value}
                                    value={value}
                                >

                                    {value}

                                </MenuItem>

                            ))}

                        </Select>

                    </FormControl>

                ))}

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