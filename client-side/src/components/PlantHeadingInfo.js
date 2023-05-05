import React from "react";
import datas from './data/products.json';
import './PlantHeadingInfo.css';

export default function PlantHeadingInfo(props) {


  return (
    <div className="product_info">
      <h1>{datas[0].name}</h1>
      <p className="product_info__latin">{datas[0].latin_name}</p>
      <p>{datas[0].description}</p>
      <h4>For someone who</h4>
      <ul className="product_info__intended">
        <li>{datas[0].intended_for[0]}</li>
        <li>{datas[0].intended_for[1]}</li>
        <li>{datas[0].intended_for[2]}</li>
        <li>{datas[0].intended_for[3]}</li>
      </ul>
      <button className="main_button">Start with Bottie</button>
    </div>

  );

}