import React, { Fragment } from "react";
import HeroBanner from "../components/HeroBanner";
import PageTitle from "../components/PageTitle";
import ProductGrid from "../components/ProductsGrid";
import './Plants.css';



export default function Plants(props) {
  return (
    <Fragment>
      <div className="spacer-tag plants"/>
      <HeroBanner
        message={"Find the perfect gift from our curated plants collection!"}
      />
      <PageTitle
        message={"All Plants"}
      />
      <ProductGrid />
    </Fragment>
  );
};

