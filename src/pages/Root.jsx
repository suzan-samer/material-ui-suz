import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { AppBar, Avatar, Link, Typography, Toolbar } from "@mui/material";
const Root = () => {
  return (
    <>
      <AppBar position="static" sx={{ background: "#000000" }}>
        <Toolbar>
          <Link
            variant="h6"
            color="inherit"
            underline="none"
            sx={{ flexGrow: 1, "&:hover": { color: "pink", fontSize: "22px" } }}
            href="/"
          >
            CLUB MONAKO
          </Link>
          <Typography variant="body1" color="inherit">
            SUZAN SAMER
          </Typography>
          <Avatar
            sx={{ marginLeft: "12px", bgcolor: "" }}
            alt="Suzan Samer"
            src="./images/suz.jpg"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Root;
