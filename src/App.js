import React, { Component } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import HomePage from "./pages/homepage.component";
import {} from "react-router-dom";
import BookDetailPage from "./pages/book.component";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
}));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <IndexRoute component={HomePage} />
        <Route exact path="/" component={App} />
        <Route path="/book" component={BookDetailPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
