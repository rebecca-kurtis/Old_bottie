import React, { Fragment } from "react";
import PlantHeadingInfo from "../components/PlantHeadingInfo";
import PlantHeadingVisuals from "../components/PlantHeadingVisuals";

export default function PlantDetail() {
  return (
    <Fragment>
      <div className="detail_header">
  
          <PlantHeadingInfo></PlantHeadingInfo>
          <PlantHeadingVisuals></PlantHeadingVisuals>
          
 
      
      
      </div>

    </Fragment>
  );
};

