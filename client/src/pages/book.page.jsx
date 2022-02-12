import React, { Component } from "react";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getBookById } from "../services/book.service";
import { useState } from "react";
import { LinearProgress } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Alert } from "@mui/material";
import { deleteBook, updateBookAsRead } from "../services/book.service";
import { useNavigate } from "react-router-dom";
import Transition from "../components/dialog/transition";
const initState = {
  book: null,
  success: "",
  error: "",
  open: false,
  isLoading: "true",
};

const BookDetailPage = (prop) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [state, setState] = useState(initState);

  useEffect(() => {
    getBookById(id)
      .then((response) => {
        setState({ ...state, book: response.data, isLoading: false });
      })
      .catch((err) => {
        console.log(err.message);
        setState({
          ...state,
          error: "Invalid Id or Book not Found",
          isLoading: false,
        });
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      navigate("/");
    } catch (err) {
      setState({
        ...state,
        error: err.message,
      });
    }
  };

  const handleOpen = () => {
    setState({ ...state, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleUpdate = async () => {
    try {
      const response = await updateBookAsRead(id);
      const book = response.data;
      setState({
        ...state,
        book,
        success: `Successfully update ${book.name} as finished`,
      });
    } catch (err) {
      setState({
        ...state,
        error: err.message,
      });
    }
  };

  return (
    <div>
      <Dialog
        open={state.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Delete Permanently?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            The delete file cannot be recover!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button
            color="error"
            onClick={async () => {
              await handleDelete(id);
            }}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Container sx={{ my: 3 }}>
        {/* Display Error Message */}
        {state.error.length > 0 && (
          <Alert sx={{ mb: 3 }} severity="error">
            {state.error}
          </Alert>
        )}

        {/* Only show This Part if no error occurs*/}
        {state.success.length > 0 && (
          <Alert sx={{ mb: 3 }} severity="success">
            {state.success}
          </Alert>
        )}

        {state.isLoading || state.book == null ? (
          <Skeleton
            variant="rectangular"
            sx={{ maxWidth: 400, mx: "auto", height: 150 }}
          />
        ) : (
          <BookInfo
            book={state.book}
            handleUpdate={handleUpdate}
            handleOpen={handleOpen}
          />
        )}
      </Container>
    </div>
  );
};

const BookInfo = ({ book, handleUpdate, handleOpen }) => {
  const created = new Date(book.created).toDateString();
  let longDate = 1;
  if (book.finished) {
    longDate = getDifferentDate(book.created, book.finished);
  }
  return (
    <Container>
      <Card variant="outlined" sx={{ maxWidth: 400, mx: "auto" }}>
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
            <Button size="small" color="error" onClick={handleOpen}>
              Delete reading history
            </Button>
          </CardActions>
        ) : (
          <CardActions>
            <Button
              size="small"
              color="success"
              onClick={() => {
                handleUpdate(book._id);
              }}
            >
              Finished Reading!
            </Button>
            <Button size="small" color="error" onClick={handleOpen}>
              Give Up!
            </Button>
          </CardActions>
        )}
      </Card>{" "}
    </Container>
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
