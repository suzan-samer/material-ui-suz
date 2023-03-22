import classes from "./Home.module.css";
import React, { useEffect, useState } from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Home = () => {
  const [mydata, setmydata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
  .then((response) => response.json())
  .then((data) =>setmydata(data));

  }, []);
  console.log(mydata)
  return (
    <Box paddingTop="40px" sx={{ width: { sm: "600px", xs: "300px" } }}>
      {mydata.map((item) => {
        return(
<Paper
        sx={{
          width: { sm: "600px", xs: "300px" },
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: { sm: "12px", xs: "2px" },
          paddingBottom: "10px",
          marginTop: "10px",
        }}
      >
        <img
          width="55px"
          height="70px"
          style={{ paddingTop: "10px" }}
          src={item.image}
          alt="suzan"
        />
        <Typography sx={{ paddingTop: "35px" }} variant="body1" color="">
          {item.title}
        </Typography>
        <Typography
          sx={{ paddingTop: "35px", mr: "33px" }}
          variant="body1"
          color=""
        >
          $ {item.price}
        </Typography>
        <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
          <CloseIcon sx={{ fontSize: "20" }} />
        </IconButton>
      </Paper>
        )
        
      })}
      
    </Box>
  );
};

export default Home;
