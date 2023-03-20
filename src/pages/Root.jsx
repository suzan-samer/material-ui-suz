import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import AppBarr from "MUI-Components/AppBarr";
import Drawerr from "MUI-Components/Drawerr";
const Root = () => {
  return (
    <>
      <AppBarr />
      <Drawerr />
    
      <Outlet />
    </>
  );
};

export default Root;
