// import {
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   TableContainer,
//   Paper,
//   IconButton,
//   Chip,
//   CircularProgress,
//   Typography,
//   Box,
// } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// const BannerTable = ({
//   banners,
//   loading,
//   onEdit,
//   onDelete,
// }) => {
//   const getChipColor = (visibility) => {
//     switch (visibility) {
//       case "everyone":
//         return "success";

//       case "registered":
//         return "primary";

//       case "hidden":
//         return "default";

//       default:
//         return "default";
//     }
//   };

//   if (loading) {
//     return (
//       <Box
//         display="flex"
//         justifyContent="center"
//         py={5}
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <TableContainer component={Paper} elevation={0}>
//       <Table>

//         <TableHead>

//           <TableRow>

//             <TableCell>Image</TableCell>

//             <TableCell>Title</TableCell>

//             <TableCell>Type</TableCell>

//             <TableCell>Placement</TableCell>

//             <TableCell>Visibility</TableCell>

//             <TableCell align="center">
//               Order
//             </TableCell>

//             <TableCell align="center">
//               Actions
//             </TableCell>

//           </TableRow>

//         </TableHead>

//         <TableBody>

//           {banners.length === 0 ? (
//             <TableRow>

//               <TableCell
//                 colSpan={7}
//                 align="center"
//               >
//                 <Typography>
//                   No banners found.
//                 </Typography>
//               </TableCell>

//             </TableRow>
//           ) : (
//             banners.map((banner) => (
//               <TableRow key={banner._id} hover>

//                 <TableCell>

//                   <img
//                     src={banner.image}
//                     alt={banner.title}
//                     width={80}
//                     height={50}
//                     style={{
//                       objectFit: "cover",
//                       borderRadius: 8,
//                     }}
//                   />

//                 </TableCell>

//                 <TableCell>
//                   {banner.title}
//                 </TableCell>

//                 <TableCell>
//                   {banner.bannerType}
//                 </TableCell>

//                 <TableCell>
//                   {banner.placement}
//                 </TableCell>

//                 <TableCell>

//                   <Chip
//                     label={banner.visibility}
//                     color={getChipColor(
//                       banner.visibility
//                     )}
//                     size="small"
//                   />

//                 </TableCell>

//                 <TableCell align="center">
//                   {banner.displayOrder}
//                 </TableCell>

//                 <TableCell align="center">

//                   <IconButton
//                     color="primary"
//                     onClick={() =>
//                       onEdit(banner)
//                     }
//                   >
//                     <EditIcon />
//                   </IconButton>

//                   <IconButton
//                     color="error"
//                     onClick={() =>
//                       onDelete(banner)
//                     }
//                   >
//                     <DeleteIcon />
//                   </IconButton>

//                 </TableCell>

//               </TableRow>
//             ))
//           )}

//         </TableBody>

//       </Table>
//     </TableContainer>
//   );
// };

// export default BannerTable;
//-------------------------------------------------------------------------------------
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
//   Avatar,
//   Stack,
// } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// const BannerTable = ({
//   banners = [],
//   onEdit,
//   onDelete,
// }) => {
//   if (banners.length === 0) {
//     return (
//       <Paper
//         sx={{
//           p: 4,
//           textAlign: "center",
//           borderRadius: 3,
//         }}
//       >
//         <Typography color="text.secondary">
//           No banners found.
//         </Typography>
//       </Paper>
//     );
//   }

//   return (
//     <TableContainer
//       component={Paper}
//       sx={{
//         borderRadius: 3,
//       }}
//     >
//       <Table>

//         <TableHead>

//           <TableRow>

//             <TableCell>Image</TableCell>

//             <TableCell>Title</TableCell>

//             <TableCell>Type</TableCell>

//             <TableCell>Placement</TableCell>

//             <TableCell>Visibility</TableCell>

//             <TableCell>Order</TableCell>

//             <TableCell align="center">
//               Actions
//             </TableCell>

//           </TableRow>

//         </TableHead>

//         <TableBody>

//           {banners.map((banner) => (

//             <TableRow key={banner._id} hover>

//               <TableCell>

//                 <Avatar
//                   src={banner.image}
//                   variant="rounded"
//                   sx={{
//                     width: 90,
//                     height: 55,
//                   }}
//                 />

//               </TableCell>

//               <TableCell>

//                 <Typography fontWeight={600}>
//                   {banner.title}
//                 </Typography>

//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                 >
//                   {banner.subtitle}
//                 </Typography>

//               </TableCell>

//               <TableCell>
//                 {banner.bannerType}
//               </TableCell>

//               <TableCell>
//                 {banner.placement}
//               </TableCell>

//               <TableCell>

//                 <Chip
//                   label={banner.visibility}
//                   color={
//                     banner.visibility === "everyone"
//                       ? "success"
//                       : banner.visibility === "registered"
//                       ? "primary"
//                       : "default"
//                   }
//                   size="small"
//                 />

//               </TableCell>

//               <TableCell>
//                 {banner.displayOrder}
//               </TableCell>

//               <TableCell align="center">

//                 <Stack
//                   direction="row"
//                   spacing={1}
//                   justifyContent="center"
//                 >

//                   <IconButton
//                     color="primary"
//                     onClick={() => onEdit(banner)}
//                   >
//                     <EditIcon />
//                   </IconButton>

//                   <IconButton
//                     color="error"
//                     onClick={() => onDelete(banner)}
//                   >
//                     <DeleteIcon />
//                   </IconButton>

//                 </Stack>

//               </TableCell>

//             </TableRow>

//           ))}

//         </TableBody>

//       </Table>
//     </TableContainer>
//   );
// };

// export default BannerTable;

//------------------------------------------------------------------------------------
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   Chip,
//   CircularProgress,
// } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// const BannerTable = ({
//   banners = [],
//   loading,
//   onEdit,
//   onDelete,
// }) => {

//   if (loading) {
//     return (
//       <Paper sx={{ p: 3, textAlign: "center", mt: 2 }}>
//         <CircularProgress />
//       </Paper>
//     );
//   }

//   return (
//     <TableContainer component={Paper} sx={{ mt: 3 }}>

//       <Table>

//         <TableHead>
//           <TableRow>
//             <TableCell>Image</TableCell>
//             <TableCell>Title</TableCell>
//             <TableCell>Type</TableCell>
//             <TableCell>Placement</TableCell>
//             <TableCell>Visibility</TableCell>
//             <TableCell>Order</TableCell>
//             <TableCell align="center">Actions</TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>

//           {banners.length === 0 ? (

//             <TableRow>
//               <TableCell colSpan={7} align="center">
//                 No banners found
//               </TableCell>
//             </TableRow>

//           ) : (

//             banners.map((banner) => (

//               <TableRow key={banner._id} hover>

//                 <TableCell>
//                   <img
//                     src={banner.image}
//                     alt={banner.title}
//                     width={100}
//                     style={{
//                       borderRadius: 8,
//                       objectFit: "cover",
//                     }}
//                   />
//                 </TableCell>

//                 <TableCell>{banner.title}</TableCell>

//                 <TableCell>{banner.bannerType}</TableCell>

//                 <TableCell>{banner.placement}</TableCell>

//                 <TableCell>
//                   <Chip
//                     label={banner.visibility}
//                     color={
//                       banner.visibility === "everyone"
//                         ? "success"
//                         : banner.visibility === "registered"
//                         ? "warning"
//                         : "default"
//                     }
//                     size="small"
//                   />
//                 </TableCell>

//                 <TableCell>{banner.displayOrder}</TableCell>

//                 <TableCell align="center">

//                   <IconButton
//                     color="primary"
//                     onClick={() => onEdit?.(banner)}
//                   >
//                     <EditIcon />
//                   </IconButton>

//                   <IconButton
//                     color="error"
//                     onClick={() => onDelete?.(banner)}
//                   >
//                     <DeleteIcon />
//                   </IconButton>

//                 </TableCell>

//               </TableRow>

//             ))

//           )}

//         </TableBody>

//       </Table>

//     </TableContainer>
//   );
// };

// export default BannerTable;
//-----------------------------------

// import {
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   IconButton,
//   CircularProgress,
//   Box,
//   Typography,
//   Select,
//   MenuItem,
// } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// import { useDispatch } from "react-redux";
// import { changeBannerVisibility } from "../../features/banners/BannerThunk";

// const BannerTable = ({
//   banners,
//   loading,
//   onEdit,
//   onDelete,
// }) => {

//   // ✅ Hooks must be inside the component
//   const dispatch = useDispatch();

//   const handleVisibilityChange = (banner, visibility) => {
//     dispatch(
//       changeBannerVisibility({
//         id: banner._id,
//         visibility,
//       })
//     );
//   };

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" py={5}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (!banners || banners.length === 0) {
//     return (
//       <Typography
//         align="center"
//         color="text.secondary"
//         py={4}
//       >
//         No banners found.
//       </Typography>
//     );
//   }

//   return (
//     <Table>
//       <TableHead>
//         <TableRow>
//           <TableCell>Image</TableCell>
//           <TableCell>Title</TableCell>
//           <TableCell>Type</TableCell>
//           <TableCell>Placement</TableCell>
//           <TableCell>Visibility</TableCell>
//           <TableCell>Order</TableCell>
//           <TableCell align="center">Actions</TableCell>
//         </TableRow>
//       </TableHead>

//       <TableBody>
//         {banners.map((banner) => (
//           <TableRow key={banner._id} hover>

//             <TableCell>
//               <img
//                 src={banner.image}
//                 alt={banner.title}
//                 width={90}
//                 height={50}
//                 style={{
//                   objectFit: "cover",
//                   borderRadius: 8,
//                 }}
//               />
//             </TableCell>

//             <TableCell>{banner.title}</TableCell>

//             <TableCell>{banner.bannerType}</TableCell>

//             <TableCell>{banner.placement}</TableCell>

//             {/* Visibility Dropdown */}
//             <TableCell>
//               <Select
//                 size="small"
//                 value={banner.visibility}
//                 onChange={(e) =>
//                   handleVisibilityChange(
//                     banner,
//                     e.target.value
//                   )
//                 }
//                 sx={{ minWidth: 140 }}
//               >
//                 <MenuItem value="everyone">
//                   Everyone
//                 </MenuItem>

//                 <MenuItem value="registered">
//                   Registered
//                 </MenuItem>

//                 <MenuItem value="hidden">
//                   Hidden
//                 </MenuItem>
//               </Select>
//             </TableCell>

//             <TableCell>{banner.displayOrder}</TableCell>

//             <TableCell align="center">
//               <IconButton
//                 color="primary"
//                 onClick={() => onEdit(banner)}
//               >
//                 <EditIcon />
//               </IconButton>

//               <IconButton
//                 color="error"
//                 onClick={() => onDelete(banner)}
//               >
//                 <DeleteIcon />
//               </IconButton>
//             </TableCell>

//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// };

// export default BannerTable;

//-----------------------------------------------------
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  CircularProgress,
  Box,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDispatch } from "react-redux";
import { changeBannerVisibility } from "../../features/banners/BannerThunk";

const BannerTable = ({
  banners,
  loading,
  onEdit,
  onDelete,
}) => {
  const dispatch = useDispatch();

  const handleVisibilityChange = async (
    banner,
    visibility
  ) => {
    try {
      await dispatch(
        changeBannerVisibility({
          id: banner._id,
          visibility,
        })
      ).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        py={5}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!banners.length) {
    return (
      <Typography
        align="center"
        py={5}
      >
        No banners found.
      </Typography>
    );
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Image</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>Placement</TableCell>
          <TableCell>Visibility</TableCell>
          <TableCell>Order</TableCell>
          <TableCell align="center">
            Actions
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {banners.map((banner) => (
          <TableRow
            key={banner._id}
            hover
          >
            <TableCell>
              <img
                src={banner.image}
                alt={banner.title}
                style={{
                  width: 90,
                  height: 55,
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
            </TableCell>

            <TableCell>
              {banner.title}
            </TableCell>

            <TableCell>
              {banner.bannerType}
            </TableCell>

            <TableCell>
              {banner.placement}
            </TableCell>

            <TableCell>
              <Select
                size="small"
                value={banner.visibility}
                onChange={(e) =>
                  handleVisibilityChange(
                    banner,
                    e.target.value
                  )
                }
                sx={{
                  minWidth: 150,
                }}
              >
                <MenuItem value="everyone">
                  Everyone
                </MenuItem>

                <MenuItem value="registered">
                  Registered
                </MenuItem>

                <MenuItem value="hidden">
                  Hidden
                </MenuItem>
              </Select>
            </TableCell>

            <TableCell>
              {banner.displayOrder}
            </TableCell>

            <TableCell align="center">
              <IconButton
                color="primary"
                onClick={() =>
                  onEdit(banner)
                }
              >
                <EditIcon />
              </IconButton>

              <IconButton
                color="error"
                onClick={() =>
                  onDelete(banner)
                }
              >
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BannerTable;