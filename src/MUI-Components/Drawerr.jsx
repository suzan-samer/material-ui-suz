import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";
import { pink } from "@mui/material/colors";
import { useTheme } from "@emotion/react";
import { Brightness4, Brightness7 } from "@mui/icons-material";
const color = pink[300];
const drawerWidth = 240;
const Drawerr = ({
  setMyyMode,
  drawer,
  drawerType,
  setDrawer,
  setDrawerType,
}) => {
  const Loc = useLocation();
  console.log(Loc.pathname);
  const navigate = useNavigate();
  const theme = useTheme();
  const myList =[
    {tex:"Home" ,icon:<HomeIcon/>,path:"/"},
    {tex:"Create" ,icon:<CreateIcon/>,path:"/create"},
    {tex:"Profile" ,icon:<AccountCircleIcon/>,path:"/profile"},
    {tex:"Setting" ,icon:<SettingsIcon/>,path:"/setting"},
  ]
  return (
    <Drawer
      sx={{
        display: { xs: drawer, sm: "block" },

        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant={drawerType}
      anchor="left"
      open={true}
      onClose={() => {
        setDrawerType("permanent");
        setDrawer("none");
      }}
    >
      
      <List>
        <ListItem
          sx={{ display: "flex", justifyContent: "center" }}
          disablePadding
        >
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme.palette.mode === "light" ? "dark" : "light"
              );
              setMyyMode(theme.palette.mode === "light" ? "dark" : "light");
            }}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7 sx={{ color: "orange" }} />
            ) : (
              <Brightness4 sx={{ color: "grey" }} />
            )}
          </IconButton>
        </ListItem>
        <Divider>
          <SettingsIcon sx={{ color: color }} />
        </Divider>

        {myList.map((item) => {
        return(
          <ListItem
          key={item.text}
          sx={{
            bgcolor: Loc.pathname === item.path ? theme.palette.primary.main : null,
          }}
          disablePadding
        >
          <ListItemButton
            onClick={() => {
              navigate(item.path);
            }}
          >
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.tex} />
          </ListItemButton>
        </ListItem>  
        )
      })}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon sx={{}} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Drawerr;
