"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductApis from "../_utils/ProductApis";

const ProductSection = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getLatestProducts_();
  }, []);
  const getLatestProducts_ = () => {
    ProductApis.getLatestProducts().then((res) => {
      setProductList(res.data.data);
    });
  };
  return (
    <div>
      <h2 className="text-center text-3xl mt-10 mb-10">Our Latest Products</h2>
      <hr className="w-72 m-auto bg-primary text-primary h-[3px] rounded-full" />
      <div className="px-10 md:px-20 mt-20">
        <ProductList productList={productList} />
      </div>
    </div>
  );
};

export default ProductSection;
