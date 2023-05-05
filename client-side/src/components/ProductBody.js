import React, { Fragment } from "react";
import PageTitle from "./PageTitle";
import datas from './data/products.json';
import './ProductBody.css';

export default function ProductBody(props) {
  return (
    <Fragment>
      <div className="product_body">
        <PageTitle
          message={"Sunlight"}
        />
        <p>{datas[0].sun_description}</p>
        <PageTitle
          message={"Watering"}
        />
        <p>{datas[0].water_description}</p>
      </div>
    </Fragment>
  );
};

