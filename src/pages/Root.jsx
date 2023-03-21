import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import AppBarr from "MUI-Components/AppBarr";
import Drawerr from "MUI-Components/Drawerr";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { pink } from "@mui/material/colors";
const color = pink[300];

const Root = () => {
  const drawerWidth = 250;
  const [myMode, setMyMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode: myMode,
      // @ts-ignore
      suzanTheme: {
        main: "#64748B",
        contrastText: "#fff",
      },
      primary: {
        main: color,
      },
    },
  });

  return (

    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBarr />
      <Drawerr setMyyMode={setMyMode} />
      <Box sx={{
         width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px`,display:"flex",justifyContent:"center" },
     }}>
      <Outlet />
      </Box>
      </ThemeProvider>
    </>
  );
};

export default Root;
