import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export function BookLayout() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  const number = searchParams.get("n");
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
        <li>
          <Link to={`/books/${number}`}>Book {number}</Link>
        </li>
      </ui>
      <Outlet context={{ Hello: "World" }} />
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </>
  );
}
