import React, { Component } from "react";
import MaterialAppBar from "../components/appBar";
import { Container, Card, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getBookById } from "../services/book.service";
import { useState } from "react";
import { LinearProgress } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const BookDetailPage = (prop) => {
  const { id } = useParams();

  const [book, setBook] = useState({});

  useEffect(() => {
    getBookById(id)
      .then((response) => {
        setBook(response.data);
        console.log(book);
      })
      .catch((err) => {
        console.log(err);
      });
   
  }, []);

  return (
    <div>
      <Container>
        <Paper sx={{ width: 400, px: 2, mx: "auto", my: 3 }}>
          {book == null ? (
            <LinearProgress />
          ) : (
            <Box sx={{ my: 3 }}>
              <Typography gutterBottom variant="h5" component="div">
                {book.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {book.author}
              </Typography>
            </Box>
          )}
        </Paper>
      </Container>
    </div>
  );
};

const BookInfo = ({ book }) => {
  return (
    <Box sx={{ my: 3 }}>
      <Typography gutterBottom variant="h5" component="div">
        {book.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {book.author}
      </Typography>
    </Box>
  );
};

export default BookDetailPage;
