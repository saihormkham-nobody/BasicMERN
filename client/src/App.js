import * as React from "react";
import MaterialAppBar from "./components/appBar";
import Typography from "@mui/material/Typography";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage.page";
import BookDetailPage from "./pages/book.page";
import AddBookPage from "./pages/add.book.page";

export default function App() {
  return (
    <div>
      <MaterialAppBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/book/id/:id" element={<BookDetailPage />} />
        <Route exact path="/add" element={<AddBookPage />} />

      </Routes>
    </div>
  );
}
