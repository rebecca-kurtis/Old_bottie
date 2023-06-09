import React from "react";
import './ProductsGrid.css';
import ProductCard from "./ProductCard";
import datas from './data/products.json';

export default function ProductGrid(props) {

  console.log(datas);

  const mappedProduct = datas.map((data) => {
    return <ProductCard
      key={data.id} 
      name={data.name} 
      description={data.description} 
      price={data.price_in_cents}
      imageSrc={data.image_draw}
    /> 
  });

  return (
    <ul className="grid">
      {mappedProduct}
    </ul>
  );
}