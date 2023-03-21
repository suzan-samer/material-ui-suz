import React from 'react';
import { AppBar, Avatar, Link, Typography, Toolbar} from "@mui/material";
const drawerWidth = 240;
const AppBarr = () => {
  return (
      <AppBar  position="static" sx={{
         width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
     }}>
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
            src="./images/suz.jpeg"
          />
        </Toolbar>
      </AppBar>
  );
}

export default AppBarr;
