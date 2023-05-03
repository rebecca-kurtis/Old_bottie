import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import styling
import "./App.css"
import Header from "./_partials/_Header";

//import pages
import Home from "./pages/Home";
import Plants from "./pages/Plants";
import PlantDetail from "./pages/PlantDetail";

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Plants />} />
      <Route path="/products/id" element={<PlantDetail />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
