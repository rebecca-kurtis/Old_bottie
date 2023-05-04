import React from "react";
import datas from './data/products.json';

export default function PlantHeadingInfo(props) {


  return (
    <div>
      <h1>{datas[0].name}</h1>
      <p>{datas[0].latin_name}</p>
      <p>{datas[0].description}</p>
      <h4>For someone who</h4>
      <ul>
        <li>{datas[0].intended_for[0]}</li>
        <li>{datas[0].intended_for[1]}</li>
        <li>{datas[0].intended_for[2]}</li>
        <li>{datas[0].intended_for[3]}</li>
      </ul>
      <button>Start with Bottie</button>
    </div>

  );

}