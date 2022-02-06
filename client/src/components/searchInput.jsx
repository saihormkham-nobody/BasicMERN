import React, { Component }  from 'react';
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

const SearchInput = prop => {
  return (
    // <Box sx={{ mt: 3 }}>
    //     <TextField id="outlined-basic" label="Search" variant="outlined" />
    // </Box>
    <Box sx={{ mt: 3,  maxWidth: '100%' }}>
      <TextField id="fullWidth" label="Search" variant="outlined" fullWidth />
    </Box>
  );
}

export default SearchInput;