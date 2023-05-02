import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import HeroBanner from "../components/HeroBanner";
import PageTitle from "../components/PageTitle";
import ProductCard from "../components/ProductCard";
import ProductGrid from "../components/ProductsGrid";
import './Plants.scss';

const Plants = (props) => {
  return (
    <Fragment classNames="page">
      <HeroBanner
        message={"Find the perfect gift from our carefully selected plants collection."}
      />
      <PageTitle
        message={"My plants selection"}
      />
      <ProductGrid/>
      {/* <ProductCard
        name={"Azalea"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        price={"22.95$"}
        imageSrc={"/images/1.png"}
      /> */}
      <h1>This all my plants</h1>
      <Link to="/products/id">
        A plant detailed page
      </Link>
    </Fragment>
  );
};

export default Plants;
