import React, { Component } from "react";
import MaterialAppBar from "../components/appBar";
import {
  Container,
  Card,
  Paper,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Skeleton,
  Grid,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getBookById } from "../services/book.service";
import { useState } from "react";
import { LinearProgress } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Alert } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { deleteBook } from "../services/book.service";

const initState = {
  book: {},
  error: "",
  isLoading: "true",
};

const BookDetailPage = (prop) => {
  const { id } = useParams();

  const [state, setState] = useState(initState);

  useEffect(() => {
    getBookById(id)
      .then((response) => {
        setState({ book: response.data, error: "", isLoading: false });
      })
      .catch((err) => {
        console.log(err.message);
        setState({
          error: "Invalid Id or Book not Found",
          book: {},
          isLoading: false,
        });
      });
  }, []);

  const handleDelete = async (id) => {
    console.log("handle", id);
    try {
      await deleteBook(id);
    } catch (err) {
      setState({
        ...state,
        error: err.message,
      });
    }
  };

  const handleUpdate = () => {};

  return (
    <div>
      <Container sx={{ my: 3 }}>
        {/* Display Error Message */}
        {state.error.length > 0 && (
          <Alert sx={{ mb: 3 }} severity="error">
            {state.error}
          </Alert>
        )}

        {/* Only show This Part if no error occurs*/}

        {state.isLoading ? (
          <Skeleton
            variant="rectangular"
            sx={{ maxWidth: 400, mx: "auto", height: 150 }}
          />
        ) : (
          <BookInfo
            book={state.book}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        )}
      </Container>
    </div>
  );
};

const BookInfo = ({ book, handleUpdate, handleDelete }) => {
  const created = new Date(book.created).toDateString();
  let longDate = 1;
  if (book.finished) {
    longDate = getDifferentDate(book.created, book.finished);
  }
  return (
    <Card sx={{ maxWidth: 400, mx: "auto" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.name}
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={2} sx={{ mt: 1 }}>
          <Grid item xs={3}>
            <Typography variant="body1">Author:</Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="body1">{book.author}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1">Start Date:</Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="body1">{created}</Typography>
          </Grid>
          {book.finished && (
            <Grid item xs={12}>
              <Typography variant="body1" style={{ color: "green" }}>
                You have finished the book in {longDate}{" "}
                {longDate > 1 ? "days" : "day"}.
              </Typography>
            </Grid>
          )}
        </Grid>
      </CardContent>
      {/* Change Action Buttons based on whether finished or not */}
      {book.finished ? (
        <CardActions>
          <Button
            size="small"
            color="error"
            onClick={() => {
              console.log("clicked", book._id);
              handleDelete(book._id);
            }}
          >
            Delete reading history
          </Button>
        </CardActions>
      ) : (
        <CardActions>
          <Button size="small" color="success">
            Finished Reading!
          </Button>
          <Button
            size="small"
            color="error"
            onClick={() => {
              console.log("clicked", book._id);
              handleDelete(book._id);
            }}
          >
            Give Up!
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

const getDifferentDate = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  // time difference
  const differentTime = Math.abs(endDate - startDate);
  // days difference
  const differentDate = Math.ceil(differentTime / (1000 * 60 * 60 * 24));
  if (differentDate <= 1) return 1;
  return differentDate;
};

export default BookDetailPage;
