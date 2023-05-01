import { Routes, Route } from "react-router-dom";
import { BookList } from "./pages/BookList";
import { Book } from "./pages/Book";
import { NewBook } from "./pages/NewBook";
import { BookLayout } from "./BookLayout";

export function BookRoutes() {
  return (
    <>
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />}></Route>
          <Route path=":id" element={<Book />}></Route>
          <Route path="new" element={<NewBook />}></Route>
        </Route>
      </Routes>
    </>
  );
}
