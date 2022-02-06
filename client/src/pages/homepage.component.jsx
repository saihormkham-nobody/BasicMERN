import React, { Component }  from 'react';
import MaterialAppBar from "../components/appBar";
import { Container } from "@mui/material";
import SearchInput from "../components/searchInput";
import CardList from "../components/bookCardList";

const HomePage = (prop) => (
  <div>
   
    <Container>
      <SearchInput />
      <CardList />
    </Container>
  </div>
);

export default HomePage;
