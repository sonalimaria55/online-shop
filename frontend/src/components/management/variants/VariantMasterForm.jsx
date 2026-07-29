import {
    TextField,
    Button,
    Box,
    Chip,
    Typography,
} from "@mui/material";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { createVariant } from "../../../features/variants/VariantThunk";

const VariantMasterForm = ({ onClose, refresh }) => {

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [values, setValues] = useState("");
    const [customDisplayName, setCustomDisplayName] = useState("");
    const [customValue, setCustomValue] = useState("");
    const [customDisplayValues, setCustomDisplayValues] = useState([]);

    const addCustomValue = () => {

        if (
            customValue.trim() &&
            !customDisplayValues.includes(customValue.trim())
        ) {

            setCustomDisplayValues([
                ...customDisplayValues,
                customValue.trim(),
            ]);

            setCustomValue("");
        }
    };

    const removeCustomValue = (value) => {

        setCustomDisplayValues(
            customDisplayValues.filter(item => item !== value)
        );
    };

    const handleSubmit = async () => {

        const data = {

            name,

            values: values
                ? values.split(",").map(item => item.trim())
                : [],

            customDisplayName,

            customDisplayValues,

        };

        await dispatch(createVariant(data));

        if (refresh) {
            refresh();
        }

        onClose();
    };

    return (
        <>
            <TextField
                fullWidth
                margin="normal"
                label="Variant Name"
                placeholder="Size, Capacity, Waist"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <TextField
                fullWidth
                margin="normal"
                label="Standard Values"
                placeholder="XS,S,M,L,XL"
                value={values}
                onChange={(e) => setValues(e.target.value)}
            />

            <TextField
                fullWidth
                margin="normal"
                label="Display Name"
                placeholder="Capacity, Length"
                value={customDisplayName}
                onChange={(e) => setCustomDisplayName(e.target.value)}
            />

            <Box display="flex" gap={1} mt={2}>
                <TextField
                    fullWidth
                    label="Custom Value"
                    placeholder="500ml"
                    value={customValue}
                    onChange={(e) => setCustomValue(e.target.value)}
                />

                <Button
                    variant="contained"
                    onClick={addCustomValue}
                >
                    Add
                </Button>
            </Box>

            {customDisplayValues.length > 0 && (

                <Box mt={2}>

                    <Typography>
                        Selected Values
                    </Typography>

                    {customDisplayValues.map(value => (

                        <Chip
                            key={value}
                            label={value}
                            onDelete={() => removeCustomValue(value)}
                            sx={{ mr: 1, mt: 1 }}
                        />

                    ))}

                </Box>

            )}

            <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>

                <Button onClick={onClose}>
                    Cancel
                </Button>

                <Button
                    variant="contained"
                    onClick={handleSubmit}
                >
                    Save
                </Button>

            </Box>
        </>
    );
};

export default VariantMasterForm;