import React, { Component }  from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BookCard from './bookCard';

const CardList = prop => {
  return (
    <Box sx={{ flexGrow: 1, mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <BookCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CardList;
