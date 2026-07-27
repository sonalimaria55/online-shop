import {
    Grid,
    TextField,
    MenuItem,
    Button,
    Box,
} from "@mui/material";

import { useSelector } from "react-redux";


const VariantForm = ({
    formData,
    setFormData
}) => {


    const variants =
        useSelector(
            state => state.variants.variants
        ) || [];



    const handleVariantChange = (e) => {

        const {
            name,
            value
        } = e.target;


        setFormData(prev => ({

            ...prev,

            currentVariant:{

                ...prev.currentVariant,

                [name]:value

            }

        }));

    };



    const addVariant = () => {


        const variant =
            formData.currentVariant;


        if(
            !variant.variantType ||
            !variant.value
        ){
            alert(
                "Variant type and value required"
            );

            return;
        }



        setFormData(prev => ({

            ...prev,

            productVariants:[
                ...prev.productVariants,
                variant
            ],


            currentVariant:{
                variantType:"",
                value:"",
                color:"",
                sku:"",
                barcode:"",
                stock:0,
                sellingPrice:""
            }

        }));


    };




    return (

        <Box sx={{mt:3}}>


            <Grid container spacing={2}>


                <Grid size={{xs:12,md:6}}>

                    <TextField

                    select
                    fullWidth

                    label="Variant Type"

                    name="variantType"

                    value={
                        formData.currentVariant.variantType
                    }

                    onChange={
                        handleVariantChange
                    }

                    >

                    {
                        variants.map((variant)=>(

                            <MenuItem

                            key={variant._id}

                            value={variant._id}

                            >

                            {variant.name}

                            </MenuItem>

                        ))
                    }

                    </TextField>


                </Grid>



                <Grid size={{xs:12,md:6}}>


                    <TextField

                    fullWidth

                    label="Value"

                    name="value"

                    placeholder="M / Red / 500ml"

                    value={
                        formData.currentVariant.value
                    }

                    onChange={
                        handleVariantChange
                    }

                    />


                </Grid>



                <Grid size={{xs:12,md:6}}>


                    <TextField

                    fullWidth

                    label="Color"

                    name="color"

                    value={
                        formData.currentVariant.color
                    }

                    onChange={
                        handleVariantChange
                    }

                    />


                </Grid>




                <Grid size={{xs:12,md:6}}>


                    <TextField

                    fullWidth

                    label="SKU"

                    name="sku"

                    value={
                        formData.currentVariant.sku
                    }

                    onChange={
                        handleVariantChange
                    }

                    />


                </Grid>




                <Grid size={{xs:12,md:6}}>


                    <TextField

                    fullWidth

                    label="Barcode"

                    name="barcode"

                    value={
                        formData.currentVariant.barcode
                    }

                    onChange={
                        handleVariantChange
                    }

                    />


                </Grid>




                <Grid size={{xs:12,md:3}}>


                    <TextField

                    type="number"

                    fullWidth

                    label="Stock"

                    name="stock"

                    value={
                        formData.currentVariant.stock
                    }

                    onChange={
                        handleVariantChange
                    }

                    />


                </Grid>




                <Grid size={{xs:12,md:3}}>


                    <TextField

                    type="number"

                    fullWidth

                    label="Selling Price"

                    name="sellingPrice"

                    value={
                        formData.currentVariant.sellingPrice
                    }

                    onChange={
                        handleVariantChange
                    }

                    />


                </Grid>


                <Grid size={12}>


                    <Button

                    variant="contained"

                    onClick={addVariant}

                    >

                    Add Variant

                    </Button>


                </Grid>


            </Grid>


        </Box>

    );

};


export default VariantForm;