import classes from "./Create.module.css";
import React from "react";
import { Outlet } from "react-router-dom";
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  styled,
  TextField,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { pink, purple } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import TitleIcon from "@mui/icons-material/Title";

const Create = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[300],
    "&:hover": {
      backgroundColor: pink[100],
      scale:"0.9"

    },
  }));
  return (
    <Box paddingTop="40px" sx={{width:{sm:"600px" , xs:"400px"}}} height="200px" component="form">
      <TextField
        fullWidth
        label="ProductName"
        sx={{ mt: "10px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <FormControl sx={{width:{sm:"600px" , xs:"400px"}}} variant="filled" >
        <FilledInput sx={{mt: "10px"}}
        fullWidth
          id="filled-adornment-weight"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="upload picture"
                component="label"
              >
                <input hidden accept="image/*" type="file" />
                <PhotoCamera sx={{color:"#F06292"}} />
              </IconButton>
            </InputAdornment>
          }
          aria-describedby="filled-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
      </FormControl>

      <TextField
        fullWidth
        label="ProductPrice"
        sx={{ mt: "10px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <ColorButton sx={{ marginTop: "20px" }} variant="contained">
        Add Product <AddIcon sx={{ paddingLeft: "2px" }} />
      </ColorButton>
    </Box>
  );
};

export default Create;
