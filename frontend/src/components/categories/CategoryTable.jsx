// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   IconButton,
//   Chip,
//   Typography,
// } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// const CategoryTable = ({
//   categories,
//   loading,
//   onEdit,
//   onDelete,
// }) => {

//   if (loading) {
//     return (
//       <Typography align="center">
//         Loading...
//       </Typography>
//     );
//   }

//   return (
//     <TableContainer component={Paper} elevation={0}>

//       <Table>

//         <TableHead>

//           <TableRow>

//             <TableCell>
//               Category Code
//             </TableCell>

//             <TableCell>
//               Category Name
//             </TableCell>

//             <TableCell>
//               Status
//             </TableCell>

//             <TableCell align="center">
//               Actions
//             </TableCell>

//           </TableRow>

//         </TableHead>

//         <TableBody>

//           {categories.length > 0 ? (

//             categories.map((category) => (

//               <TableRow key={category._id} hover>

//                 <TableCell>
//                   {category.categoryCode}
//                 </TableCell>

//                 <TableCell>
//                   {category.categoryName}
//                 </TableCell>

//                 <TableCell>

//                   <Chip
//                     label={
//                       category.isActive
//                         ? "Active"
//                         : "Inactive"
//                     }
//                     color={
//                       category.isActive
//                         ? "success"
//                         : "default"
//                     }
//                     size="small"
//                   />

//                 </TableCell>

//                 <TableCell align="center">

//                   <IconButton
//                     color="primary"
//                     onClick={() => onEdit(category)}
//                   >
//                     <EditIcon />
//                   </IconButton>

//                   <IconButton
//                     color="error"
//                     onClick={() => onDelete(category)}
//                   >
//                     <DeleteIcon />
//                   </IconButton>

//                 </TableCell>

//               </TableRow>

//             ))

//           ) : (

//             <TableRow>

//               <TableCell
//                 colSpan={4}
//                 align="center"
//               >
//                 No Categories Found
//               </TableCell>

//             </TableRow>

//           )}

//         </TableBody>

//       </Table>

//     </TableContainer>
//   );
// };

// export default CategoryTable;
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Avatar,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const CategoryTable = ({
  categories = [],
  onEdit,
  onDelete,
}) => {

  return (

    <TableContainer
      component={Paper}
      elevation={0}
    >

      <Table>

        <TableHead>

          <TableRow>

            <TableCell>Image</TableCell>

            <TableCell>Category Code</TableCell>

            <TableCell>Category Name</TableCell>

            <TableCell align="center">
              Actions
            </TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {categories.length === 0 ? (

            <TableRow>

              <TableCell
                colSpan={4}
                align="center"
              >
                No Categories Available
              </TableCell>

            </TableRow>

          ) : (

            categories.map((category) => (

              <TableRow
                key={category._id}
              >

                <TableCell>

                  <Avatar
                    src={category.image}
                    variant="rounded"
                    sx={{
                      width: 55,
                      height: 55,
                    }}
                  />

                </TableCell>

                <TableCell>
                  {category.categoryCode}
                </TableCell>

                <TableCell>
                  {category.categoryName}
                </TableCell>

                <TableCell align="center">

                  <IconButton
                    color="primary"
                    onClick={() =>
                      onEdit(category)
                    }
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() =>
                      onDelete(category)
                    }
                  >
                    <DeleteIcon />
                  </IconButton>

                </TableCell>

              </TableRow>

            ))

          )}

        </TableBody>

      </Table>

    </TableContainer>

  );

};

export default CategoryTable;