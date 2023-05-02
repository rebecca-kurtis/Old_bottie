import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>This is my React app!</h1>
      <Link to="/products">
        All plants
      </Link>
    </main>
  );
};

export default Home;