import React from "react";
import './HeroBanner.css';

export default function HeroBanner(props) {

  return (
    <main className="hero-banner">
      <h2 className="text-banner">{props.message}</h2>
    </main>
  );
}