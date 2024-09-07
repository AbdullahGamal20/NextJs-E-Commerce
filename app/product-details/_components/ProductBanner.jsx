import Image from "next/image";
import React from "react";

const ProductBanner = ({ bannerUrl, product }) => {
  return (
    <div className="sm:w-full">
      {product ? (
        <Image
          src={bannerUrl}
          alt="banner-image"
          width={550}
          height={400}
          className="h-[350px] object-cover rounded-lg"
          loading="lazy"
        />
      ) : (
        <div className="w-[550px] h-[350px] bg-slate-200 rounded-lg animate-pulse flex justify-center items-center text-[26px]">
          Loading...
        </div>
      )}
    </div>
  );
};

export default ProductBanner;
