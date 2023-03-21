import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import AppBarr from "MUI-Components/AppBarr";
import Drawerr from "MUI-Components/Drawerr";
import { Box } from "@mui/material";
const Root = () => {
  const drawerWidth = 250;

  return (
    <>
      <AppBarr />
      <Drawerr />
      <Box sx={{
         width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px`,display:"flex",justifyContent:"center" },
     }}>
      <Outlet />
      </Box>
    </>
  );
};

export default Root;
