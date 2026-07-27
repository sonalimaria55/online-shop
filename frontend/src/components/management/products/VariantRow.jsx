import {
    Box,
    Grid,
    TextField,
    Typography,
    Paper,
} from "@mui/material";

const VariantRow = ({
    variant,
    index,
    onChange,
}) => {

    const handleChange = (field, value) => {

        onChange(index, {

            ...variant,

            [field]: value,

        });

    };

    return (

        <Paper
            sx={{
                p: 2,
                mb: 2,
            }}
        >

            <Typography
                variant="subtitle1"
                fontWeight="bold"
                mb={2}
            >

                {variant.attributes
                    .map(item => item.value)
                    .join(" / ")}

            </Typography>

            <Grid container spacing={2}>

                <Grid item xs={12} md={3}>

                    <TextField
                        fullWidth
                        label="SKU"
                        value={variant.sku}
                        onChange={(e)=>
                            handleChange(
                                "sku",
                                e.target.value
                            )
                        }
                    />

                </Grid>

                <Grid item xs={12} md={3}>

                    <TextField
                        fullWidth
                        label="Barcode"
                        value={variant.barcode}
                        onChange={(e)=>
                            handleChange(
                                "barcode",
                                e.target.value
                            )
                        }
                    />

                </Grid>

                <Grid item xs={12} md={3}>

                    <TextField
                        fullWidth
                        type="number"
                        label="Stock"
                        value={variant.stock}
                        onChange={(e)=>
                            handleChange(
                                "stock",
                                Number(e.target.value)
                            )
                        }
                    />

                </Grid>

                <Grid item xs={12} md={3}>

                    <TextField
                        fullWidth
                        type="number"
                        label="Selling Price"
                        value={variant.sellingPrice}
                        onChange={(e)=>
                            handleChange(
                                "sellingPrice",
                                Number(e.target.value)
                            )
                        }
                    />

                </Grid>

            </Grid>

        </Paper>

    );

};

export default VariantRow;