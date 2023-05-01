import { Link, Outlet } from "react-router-dom";

export function BookLayout() {
  return (
    <>
      <ui>
        <br />
        <li>
          <Link to="/books/1">Book 1</Link>
        </li>
        <li>
          <Link to="/books/2">Book 2</Link>
        </li>
        <li>
          <Link to="/books/new">New Book </Link>
        </li>
      </ui>
      <Outlet context={{ Hello: "World" }} />
    </>
  );
}
