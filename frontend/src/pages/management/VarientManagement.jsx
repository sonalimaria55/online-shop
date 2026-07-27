import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    Box,
    Button,
    Container,
    Typography,
    Paper,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import { getVariants } from "../../features/variants/VariantThunk";

import VariantTable from "../../components/management/variants/VariantTable";
import VariantDialog from "../../components/management/variants/VariantDialog";

const VariantManagement = () => {

    const dispatch = useDispatch();

    const {
        variants,
        loading,
    } = useSelector((state) => state.variants);

    const [open, setOpen] = useState(false);

    const [selectedVariant, setSelectedVariant] = useState(null);

    useEffect(() => {

        dispatch(getVariants());

    }, [dispatch]);

    const handleAdd = () => {

        setSelectedVariant(null);

        setOpen(true);

    };

    const handleEdit = (variant) => {

        setSelectedVariant(variant);

        setOpen(true);

    };

    const handleClose = () => {

        setOpen(false);

        setSelectedVariant(null);

    };

    return (

        <Container maxWidth="xl">

            <Paper sx={{ p: 3 }}>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={3}
                >

                    <Typography
                        variant="h5"
                        fontWeight={700}
                    >
                        Variant Management
                    </Typography>

                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={handleAdd}
                    >
                        Add Variant
                    </Button>

                </Box>

                <VariantTable
                    variants={variants}
                    loading={loading}
                    onEdit={handleEdit}
                />

            </Paper>

          <VariantDialog
    open={open}
    onClose={handleClose}
    variant={selectedVariant}
    refresh={()=>dispatch(getVariants())}
/>

        </Container>

    );

};

export default VariantManagement;