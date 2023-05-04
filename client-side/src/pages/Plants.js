import React, { Fragment } from "react";
import HeroBanner from "../components/HeroBanner";
import PageTitle from "../components/PageTitle";
import ProductGrid from "../components/ProductsGrid";
import './Plants.css';

export default function Plants(props) {
  return (
    <Fragment classNames="container">
      <HeroBanner
        message={"Find the perfect gift from our carefully selected plants collection."}
      />
      <PageTitle
        message={"My plants selection"}
      />
      <ProductGrid />
      {/* <ProductCard
        name={"Azalea"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        price={"22.95$"}
        imageSrc={"/images/1.png"}
      /> */}
    </Fragment>
  );
};

