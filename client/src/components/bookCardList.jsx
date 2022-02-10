import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BookCard from "./bookCard";

const BookCardList = (prop) => {
  const list = prop.books || [];
  const variant = prop.variant || "reading";
  const errorMsg = getErrorMessage(variant);

  if (list == null || list.length === 0) {
    return <Box sx={{ textAlign: "center" }}>{errorMsg}</Box>;
  }
  return (
    <Box sx={{ flexGrow: 1, mt: 3 }}>
      <Grid container spacing={2}>
        {list.map((e) => {
          return (
            <Grid key={e._id} item xs={12} sm={6} md={4}>
              <BookCard  book={e} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

const getErrorMessage = (variant) => {
  switch (variant) {
    case "reading":
      return "There is no current reading book.";
    case "finished":
      return "There is no finished reading book.";
  }
  return "";
};

export default BookCardList;
