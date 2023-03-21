import classes from "./Home.module.css";
import React from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Home = () => {
  return (
    <Box paddingTop="40px">
      <Paper
        sx={{
          width: "700px",
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "12px",
          paddingBottom: "10px",
        }}
      >
        <img
          width="55px"
          height="70px"
          style={{ paddingTop: "10px" }}
          src="https://img.ltwebstatic.com/images3_pi/2021/10/28/16353914755a3efb84646a154c8732277de181c310_thumbnail_220x293.webp"
          alt="suzan"
        />
        <Typography sx={{ paddingTop: "35px" }} variant="body1" color="initial">
          Black Dress
        </Typography>
        <Typography
          sx={{ paddingTop: "35px", mr: "33px" }}
          variant="body1"
          color="initial"
        >
          $100
        </Typography>
        <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
          <CloseIcon sx={{ fontSize: "20" }} />
        </IconButton>
      </Paper>
      <Paper
        sx={{
          mt:"5px",
          width: "700px",
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "12px",
          paddingBottom: "10px",
        }}
      >
        <img
          width="55px"
          height="70px"
          style={{ paddingTop: "10px" }}
          src="https://n.nordstrommedia.com/id/sr3/3c20e8d9-2f21-497c-9d29-e24d8bac49e6.jpeg?h=365&w=240&dpr=2"
          alt="suzan"
        />
        <Typography sx={{ paddingTop: "35px" }} variant="body1" color="initial">
          Red Dress
        </Typography>
        <Typography
          sx={{ paddingTop: "35px", mr: "33px" }}
          variant="body1"
          color="initial"
        >
          $100
        </Typography>
        <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
          <CloseIcon sx={{ fontSize: "20" }} />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default Home;
