import React from "react";
import { Link } from "react-router-dom";

const Plants = () => {
  return (
    <main>
      <h1>This all my plants</h1>
      <Link to="/products/id">
        A plant detailed page
      </Link>
    </main>
  );
};

export default Plants;
