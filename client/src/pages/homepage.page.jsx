import React from "react";
import { Container } from "@mui/material";
import BookCardList from "../components/bookCardList";
import { Typography } from "@mui/material";

import { connect } from "react-redux";

import { initReadingBooks } from "../redux/reading/reading.book.action";
import { initFinishedBooks } from "../redux/finished/finished.book.action";
import { useEffect } from "react";

import {
  getFinishedBook,
  getAllReadingBook,
} from "../services/book.service";
import BookLoadingButton from "../components/loadingButton";
import AddBookFAB from "../components/addBookFAB";

const HomePage = (prop) => {
  const reading = prop.reading.data || [];
  const finished = prop.finished.data || [];
  let currentPage = prop.finished.meta.page || 0;
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
  }, []);

  useEffect(() => {
    currentPage = 1;
    getFinishedBook(currentPage)
      .then((response) => {
        console.log("response: ", response);
        putFinishedBooks(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
        <BookLoadingButton />
        <AddBookFAB />
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  putReadingBooks: (books) => dispatch(initReadingBooks(books)),
  putFinishedBooks: (books) => dispatch(initFinishedBooks(books)),
});

const mapStateToProps = (state) => ({
  reading: state.reading,
  finished: state.finished,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
