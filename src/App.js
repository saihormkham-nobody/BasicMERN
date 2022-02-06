import * as React from "react";
import MaterialAppBar from "./components/appBar";
import Typography from "@mui/material/Typography";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage.component";
import BookDetailPage from "./pages/book.component";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  return (
    <div>
      <MaterialAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="book" element={<BookDetailPage />} />
        {/* <Route exact path="/add" component={HomePage} /> */}
        {/* <Route path="/tutorials/:id" component={BookDetailPage} /> */}
      </Routes>
    </div>
  );
}
