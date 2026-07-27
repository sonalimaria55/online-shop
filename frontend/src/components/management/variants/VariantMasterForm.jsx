import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

import VariantMasterForm from "./VariantMasterForm";


const VariantDialog = ({
    open,
    onClose,
    variant,
}) => {

    return (

        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
        >

            <DialogTitle>

                {
                    variant
                    ? "Edit Variant"
                    : "Add Variant"
                }

            </DialogTitle>


            <DialogContent>

                <VariantMasterForm
                    variant={variant}
                    onClose={onClose}
                />

            </DialogContent>


            <DialogActions>

                <Button
                    onClick={onClose}
                >
                    Cancel
                </Button>

            </DialogActions>


        </Dialog>

    );

};


export default VariantDialog;