import React, { useState } from "react";
import Product from "./Product";

const ProductsList = (props) => {
  const { products } = props;
  return (
    <>
      {products.map((product) => (
        <Product
          product={product}
          setInCart={props.setInCart}
          inCart={props.inCart}
        />
      ))}
    </>
  );
};

export default ProductsList;
