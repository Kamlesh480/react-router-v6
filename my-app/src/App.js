import { Link, NavLink, Route, Routes, useRoutes } from "react-router-dom";
import { Home } from "./pages/Home";
import { BookList } from "./pages/BookList";
import { Book } from "./pages/Book";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NewBook } from "./pages/NewBook";
import { NotFound } from "./pages/NotFound";
import { BookLayout } from "./BookLayout";
import { BookRoutes } from "./BookRoutes";

function App() {
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
  // ]);
  return (
    <>
      <nav>
        <ui>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : {};
              }}
              to="/"
            >
              {({ isActive }) => {
                return isActive ? "Active Home" : "Home";
              }}
            </NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
        </ui>
      </nav>
      {/* {element} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
