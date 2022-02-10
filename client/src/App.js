import * as React from "react";
import MaterialAppBar from "./components/appBar";
import Typography from "@mui/material/Typography";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage.component";
import BookDetailPage from "./pages/book.component";

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
