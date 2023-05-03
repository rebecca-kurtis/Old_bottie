import React from "react";
import { Link } from "react-router-dom";

export default function Plants() {
  return (
    <main>
      <h1>This all my plants</h1>
      <Link to="/products/id">
        A plant detailed page
      </Link>
    </main>
  );
};

