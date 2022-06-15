import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReadingPage from "./pages/ReadingPage";
import NotFoundPage from "./pages/NotFoundPage";
import BookDetailPage from "./pages/BookDetailPage";
import PublicLayout from "./layout/PublicLayout";
import MThemeProvider from "./theme/MThemeProvider";

function App() {
  return (
    <BrowserRouter>
      <MThemeProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="books/:id" element={<BookDetailPage />} />
            <Route path="reading" element={<ReadingPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </MThemeProvider>
    </BrowserRouter>
  );
}

export default App;
