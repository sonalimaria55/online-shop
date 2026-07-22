
// import {
//   Drawer,
//   List,
//   ListItemButton,
//   ListItemText,
// } from "@mui/material";

// import { useNavigate } from "react-router-dom";

// const Sidebar = ({ open }) => {
//   const navigate = useNavigate();

//   return (
//     <Drawer
//       variant="persistent"
//       open={open}
//       sx={{
//         "& .MuiDrawer-paper": {
//           width: 240,
//           background: "#FFFFFF",
//           borderRight: "1px solid #E8DED2",
//           paddingTop: "80px",
//         },
//       }}
//     >
//       <List>
//         <ListItemButton onClick={() => navigate("/app/dashboard")}>
//           <ListItemText primary="Dashboard" />
//         </ListItemButton>

//         <ListItemButton onClick={() => navigate("/app/products")}>
//           <ListItemText primary="Products" />
//         </ListItemButton>

//         <ListItemButton>
//           <ListItemText primary="Categories" />
//         </ListItemButton>

//         <ListItemButton>
//           <ListItemText primary="Collections" />
//         </ListItemButton>

//         <ListItemButton>
//           <ListItemText primary="Inventory" />
//         </ListItemButton>

//         <ListItemButton>
//           <ListItemText primary="Billing" />
//         </ListItemButton>

//         <ListItemButton>
//           <ListItemText primary="Customers" />
//         </ListItemButton>

//         <ListItemButton>
//           <ListItemText primary="Reports" />
//         </ListItemButton>
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;

import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

// Import Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CategoryIcon from "@mui/icons-material/Category";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import CollectionsIcon from "@mui/icons-material/Collections";
import StoreIcon from "@mui/icons-material/Store";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";

// Menu Array
const menuItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "/super-admin",
  },
  {
    text: "Products",
    icon: <Inventory2Icon />,
    path: "/super-admin/products",
  },
  {
    text: "Categories",
    icon: <CategoryIcon />,
    path: "/super-admin/categories",
  },
  {
    text: "Banner Management",
    icon: <ViewCarouselIcon />,
    path: "/super-admin/banners",
  },
  {
    text: "Collections",
    icon: <CollectionsIcon />,
    path: "/super-admin/collections",
  },
  {
    text: "Inventory",
    icon: <StoreIcon />,
    path: "/super-admin/inventory",
  },
  {
    text: "Billing",
    icon: <ReceiptLongIcon />,
    path: "/super-admin/billing",
  },
  {
    text: "Customers",
    icon: <PeopleIcon />,
    path: "/super-admin/customers",
  },
  {
    text: "Reports",
    icon: <AssessmentIcon />,
    path: "/super-admin/reports",
  },
];

const Sidebar = ({ open }) => {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="persistent"
      open={open}
      sx={{
        "& .MuiDrawer-paper": {
          width: 240,
          background: "#FFFFFF",
          borderRight: "1px solid #E8DED2",
          paddingTop: "80px",
        },
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            onClick={() => navigate(item.path)}
          >
            {item.icon}

            <ListItemText
              primary={item.text}
              sx={{ ml: 2 }}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;