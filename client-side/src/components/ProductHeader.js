import React, { Fragment } from "react";
import PlantHeadingInfo from "../components/PlantHeadingInfo";
import PlantHeadingVisuals from "../components/PlantHeadingVisuals";
import './ProductHeader.css';

export default function ProductHeader() {
  return (
    <Fragment>
      <div className="product_header">
        <PlantHeadingVisuals></PlantHeadingVisuals>   
        <PlantHeadingInfo></PlantHeadingInfo>
      </div>
    </Fragment>
  );
};

