import React, { Component }  from 'react';
import MaterialAppBar from "../components/appBar";
import { Container } from "@mui/material";
import SearchInput from "../components/searchInput";
import CardList from "../components/bookCardList";

const BookDetailPage = (prop) => (
  <div>
    <MaterialAppBar />
    <Container>
    <p>Hello World</p>
    </Container>
  </div>
);

export default BookDetailPage;
