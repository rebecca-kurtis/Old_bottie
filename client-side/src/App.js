import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import styling
import "./App.css"

//import components
import Header from "./_partials/_Header";
import Footer from "./_partials/_Footer";

//import pages
import Home from "./pages/Home";
import Plants from "./pages/Plants";
import PlantDetail from "./pages/PlantDetail";

function App() {
  return (
    <>
     <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Plants />} />
      <Route path="/products/id" element={<PlantDetail />} />
    </Routes>
  </BrowserRouter>
  <Footer></Footer>
    </>

  );
}

export default App;
