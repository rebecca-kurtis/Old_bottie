import React from "react";
import { Link } from "react-router-dom";

//Import components
import Header from "../_partials/_Header";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <section className="pages">
        <h1>This is my React app!</h1>
        <Link to="/products">
          All plants
        </Link>
      </section>
    </main>
  );
};