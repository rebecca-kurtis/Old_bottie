import React, { Fragment } from "react";
import ProductHeader from "../components/ProductHeader";
import ProductBody from "../components/ProductBody";


export default function PlantDetail() {
  return (
    <Fragment>
      <div className="spacer-tag"></div>
      <ProductHeader />
      <ProductBody />
    </Fragment>
  );
};

