import React, { Fragment } from "react";
import HeroBanner from "../components/HeroBanner";
import PageTitle from "../components/PageTitle";
import ProductGrid from "../components/ProductsGrid";


export default function Plants(props) {
  return (
    <Fragment>
      <HeroBanner
        message={"Find the perfect gift from our carefully selected plants collection."}
      />
      <PageTitle
        message={"My plants selection"}
      />
      <ProductGrid />
    </Fragment>
  );
};

