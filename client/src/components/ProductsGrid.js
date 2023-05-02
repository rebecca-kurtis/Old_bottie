import React, { Fragment } from "react";
import './ProductsGrid.scss';
import ProductCard from "./ProductCard";
import datas from './data/products.json';

export default function ProductGrid(props) {

  console.log(datas);

  const mappedProduct = datas.map((data) => {
    return <ProductCard
      key={data.id} 
      name={data.name} 
      description={data.description} 
      price={data.price}
      imageSrc={data.image_draw}
    /> 
  });

  return (
    <ul className="grid">
      {mappedProduct}
    </ul>
  );
}
