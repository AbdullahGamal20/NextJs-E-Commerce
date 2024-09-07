import React from "react";
import Image from "next/image";

const ProductCard = ({ product }) => {
  const title = product?.attributes?.title;
  const description = product?.attributes?.description[0]?.children[0]?.text;
  const price = product?.attributes?.price;
  const bannerUrl = `http://localhost:1337${product?.attributes?.banner?.data?.attributes?.url}`;

  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition ease-in-out duration-300 hover:shadow-md ">
      <Image
        src={bannerUrl}
        alt="banner-image"
        width={400}
        height={300}
        className=" h-[200px] object-cover"
        loading="lazy"
      />

      <div className="p-4 sm:p-6">
        <div className="w-full flex justify-end">
          <span className="bg-primary text-white p-3 rounded-full ">
            ${price}
          </span>
        </div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {description}
        </p>

        <a
          href={`/product-details/${product.id}`}
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
        >
          Find out more
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </a>
      </div>
    </article>
  );
};

export default ProductCard;
