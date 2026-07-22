import { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const SuperAdminLayout = () => {
  const [open, setOpen] = useState(true);

  return (
    <Box>
      <Navbar
        openSidebar={() => setOpen(!open)}
      />

      <Sidebar open={open} role="super_admin" />

      <Box
        component="main"
        sx={{
          ml: open ? "240px" : 0,
          p: 3,
          background: "#F9F5EE",
          minHeight: "100vh",
          transition: "0.3s",
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
};

export default SuperAdminLayout;