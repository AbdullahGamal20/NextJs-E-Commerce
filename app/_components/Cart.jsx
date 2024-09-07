"use client";
import React, { useContext, useState } from "react";
import { CartContext } from "../_context/CartContext";
import Link from "next/link";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="h-[300px] w-[250px] bg-gray-100 z-10 rounded-md border shadow-sm absolute mx-10 right-28 top-14 p-5 overflow-auto">
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {cart &&
            cart.map((item) => {
              const bannerUrl = item?.product?.attributes?.banner?.data
                ?.attributes?.url
                ? `http://localhost:1337${item.product.attributes.banner.data.attributes.url}`
                : "fallback-image-url.jpg";

              return (
                <li key={item?.id} className="flex items-center gap-4">
                  <img
                    src={bannerUrl}
                    alt="Cart Item"
                    className="size-16 rounded object-cover"
                    loading="lazy"
                  />

                  <div>
                    <h3 className="text-sm text-gray-900">
                      {item?.product?.attributes?.title}
                    </h3>

                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dt className="inline">
                          Category: {item?.product?.attributes?.category}
                        </dt>
                      </div>

                      <div>
                        <dt className="inline">Price: </dt>
                        <dd className="inline text-primary">
                          {item?.product?.attributes?.price}$
                        </dd>
                      </div>
                    </dl>
                  </div>
                </li>
              );
            })}
        </ul>

        <div className="space-y-4 text-center">
          <Link
            href="/cart"
            className="block rounded border border-primary px-5 py-3 text-sm text-white bg-primary transition hover:ring-1 hover:ring-gray-400"
          >
            View my cart ({cart?.length})
          </Link>

          <a
            href="#"
            className="inline-block text-sm text-gray-500 underline-offset-4 transition hover:text-gray-600"
          >
            Continue shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
