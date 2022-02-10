import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const MaterialAppBar = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My 2022 Reading List
          </Typography>
          <Button variant="text" color="inherit" component={Link} to="/">Home</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MaterialAppBar;
