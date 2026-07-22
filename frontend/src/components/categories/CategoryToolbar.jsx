import {
  Box,
  Button,
  Typography,
} from "@mui/material";

const CategoryToolbar = ({ onAdd }) => {

  return (

    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={3}
    >

      <Typography
        variant="h5"
        fontWeight={600}
      >
        Category Management
      </Typography>

      <Button
        variant="contained"
        onClick={onAdd}
      >
        + Add Category
      </Button>

    </Box>

  );

};

export default CategoryToolbar;