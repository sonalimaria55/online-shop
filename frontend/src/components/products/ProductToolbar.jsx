// import {
//   Box,
//   Button
// } from "@mui/material";


// const ProductToolbar = ({ onAdd }) => {

//   return (
//     <Box
//       sx={{
//         display:"flex",
//         justifyContent:"flex-end",
//         mb:3
//       }}
//     >

//       <Button
//         variant="contained"
//         onClick={onAdd}
//         sx={{
//           background:"#4A4036",
//           textTransform:"none",
//           "&:hover":{
//             background:"#3A3128"
//           }
//         }}
//       >
//         + Add Product
//       </Button>

//     </Box>
//   );
// };


// export default ProductToolbar;
import {
  Box,
  Button
} from "@mui/material";


const ProductToolbar = ({ onAdd }) => {

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        mb: 3,
      }}
    >

      <Button
        variant="contained"
        onClick={onAdd}
        sx={{
          background: "#C9A227",
          color: "#FFFFFF",
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 2,
          px: 3,

          "&:hover": {
            background: "#A8841F",
          },
        }}
      >
        + Add Product
      </Button>

    </Box>
  );
};


export default ProductToolbar;