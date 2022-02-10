import React, { Component } from "react";
import { Container } from "@mui/material";
import BookCardList from "../components/bookCardList";
import { Typography } from "@mui/material";
import { connect } from "react-redux";
import { putReadingBooks } from "../redux/reading/reading.book.action";
import { putFinishedBooks } from "../redux/finished/finished.book.action";
import { useEffect } from "react";
import {
  getAllFinishedBook,
  getAllReadingBook,
} from "../services/book.service";

const HomePage = (prop) => {
  console.log(JSON.stringify(prop.reading.data));
  const reading = prop.reading.data || [];
  const finished = prop.finished.data || [];
  const currentPage = prop.finished.meta.page || 0;
  const { putReadingBooks, putFinishedBooks } = prop;
  useEffect(async () => {
    getAllReadingBook()
      .then((response) => {
        console.log("response: ", response);
        putReadingBooks(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [putReadingBooks]);

  useEffect(() => {
    getAllFinishedBook(currentPage + 1);
  }, []);

  return (
    <div>
      <Container>
        <Typography variant="h4" mt={3}>
          Reading List
        </Typography>

        <BookCardList books={reading} />

        <Typography variant="h4" mt={3}>
          Finished List
        </Typography>

        <BookCardList books={finished} />
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  putReadingBooks: (books) => dispatch(putReadingBooks(books)),
  putFinishedBooks: (books) => dispatch(putFinishedBooks(books)),
});

const mapStateToProps = (state) => ({
  reading: state.reading,
  finished: state.finished,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
