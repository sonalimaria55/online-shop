import { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const ManagementLayout = () => {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar
        openSidebar={() => setOpen(!open)}
      />

      <Sidebar
        open={open}
        role="management_support"
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: open ? "240px" : 0,
          p: 3,
          minHeight: "100vh",
          background: "#F9F5EE",
          transition: "margin 0.3s ease",
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
};

export default ManagementLayout;