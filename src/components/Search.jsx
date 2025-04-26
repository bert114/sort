import React from "react";
import { Link } from "react-router-dom";

function Search() {
  return (
    <>
      <Link to="/create">
        <button>Create new item</button>
      </Link>
    </>
  );
}

export default Search;
