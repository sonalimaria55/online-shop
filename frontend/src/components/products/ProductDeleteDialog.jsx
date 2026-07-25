// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   Typography,
// } from "@mui/material";

// import { useDispatch } from "react-redux";

// import { deleteProduct } from "../../features/products/ProductThunk";


// const ProductDeleteDialog = ({
//   open,
//   product,
//   onClose,
// }) => {

//   const dispatch = useDispatch();


//   const handleDelete = () => {

//     dispatch(deleteProduct(product._id));

//     onClose();

//   };


//   return (
//     <Dialog
//       open={open}
//       onClose={onClose}
//     >

//       <DialogTitle>
//         Delete Product
//       </DialogTitle>


//       <DialogContent>

//         <Typography>
//           Are you sure you want to delete{" "}
//           <strong>
//             {product?.name}
//           </strong>
//           ?
//         </Typography>

//       </DialogContent>


//       <DialogActions>

//         <Button
//           onClick={onClose}
//         >
//           Cancel
//         </Button>


//         <Button
//           color="error"
//           variant="contained"
//           onClick={handleDelete}
//         >
//           Delete
//         </Button>

//       </DialogActions>

//     </Dialog>
//   );
// };


// export default ProductDeleteDialog;

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

import { useDispatch } from "react-redux";

import { deleteProduct } from "../../features/products/ProductsThunk";


const ProductDeleteDialog = ({
  open,
  product,
  onClose,
}) => {

  const dispatch = useDispatch();


  const handleDelete = () => {

    if (!product?._id) return;

    dispatch(deleteProduct(product._id));

    onClose();

  };


  return (
    <Dialog
      open={open}
      onClose={onClose}
    >

      <DialogTitle>
        Delete Product
      </DialogTitle>


      <DialogContent>

        <Typography>
          Are you sure you want to delete{" "}
          <strong>
            {product?.productName}
          </strong>
          ?
        </Typography>

      </DialogContent>


      <DialogActions>

        <Button
          onClick={onClose}
        >
          Cancel
        </Button>


        <Button
          color="error"
          variant="contained"
          onClick={handleDelete}
        >
          Delete
        </Button>


      </DialogActions>


    </Dialog>
  );
};


export default ProductDeleteDialog;