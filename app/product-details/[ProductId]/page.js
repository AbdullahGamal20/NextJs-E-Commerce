"use client";
import BreadCrumb from "@/app/_components/BreadCrumb";
import ProductApis from "@/app/_utils/ProductApis";
import React, { useEffect, useState } from "react";
import ProductBanner from "../_components/ProductBanner";
import ProductInfo from "../_components/ProductInfo";
import ProductList from "@/app/_components/ProductList";
import { usePathname } from "next/navigation";

const Page = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [bannerUrl, setBannerUrl] = useState("");
  const [productList, setProductList] = useState([]);
  const path = usePathname();

  const getProductById_ = () => {
    ProductApis.getProductById(params?.ProductId).then((res) => {
      const productData = res.data.data;
      setProduct(productData);
      getProductsByCategory_(productData);

      // Construct the banner URL once the product data is fetched
      const bannerUrl = `http://localhost:1337${productData?.attributes?.banner?.data?.attributes?.url}`;
      setBannerUrl(bannerUrl);
    });
  };

  const getProductsByCategory_ = (product) => {
    ProductApis.getProductsByCategory(product?.attributes?.category).then(
      (res) => {
        setProductList(res.data.data);
      }
    );
  };

  useEffect(() => {
    if (params?.ProductId) {
      getProductById_();
    }
  }, [params?.ProductId]);

  return (
    <div className="px-10 md:px-28 py-8">
      <BreadCrumb path={path} />
      <div className="grid grid-cols-1 gap-5 sm:gap-0 sm:grid-cols-2 mt-10">
        <ProductBanner bannerUrl={bannerUrl} product={product} />
        <ProductInfo product={product} />
      </div>
      <div className="mt-32 text-[24px]">
        <h2 className="mb-8 text-primary">Similar Products</h2>
        <ProductList productList={productList} />
      </div>
    </div>
  );
};

export default Page;
