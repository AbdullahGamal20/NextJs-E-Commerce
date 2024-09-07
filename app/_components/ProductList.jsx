"use client";
import React, { useEffect, useState } from "react";
import ProductApis from "../_utils/ProductApis";
import ProductCard from "./ProductCard";

const ProductList = ({ productList }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
      {productList.map((product, index) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
