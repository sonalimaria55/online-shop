import { useEffect, useState } from "react";

import {
    Box,
    Button,
    Typography
} from "@mui/material";

import { useDispatch } from "react-redux";

import {
    getVariants
} from "../../../features/variants/VariantThunk";


import VariantForm from "./VariantForm";
import VariantTable from "./VariantTable";


const VariantManagement = () => {


    const dispatch = useDispatch();


    const [open,setOpen] = useState(false);



    useEffect(()=>{

        dispatch(getVariants());

    },[dispatch]);



    return (

        <Box p={3}>


            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
            >

                <Typography variant="h5">

                    Variant Management

                </Typography>



                <Button
                    variant="contained"
                    onClick={()=>setOpen(true)}
                >

                    Add Variant

                </Button>


            </Box>



            <VariantTable />



            <VariantForm

                open={open}

                setOpen={setOpen}

            />


        </Box>

    );

};


export default VariantManagement;