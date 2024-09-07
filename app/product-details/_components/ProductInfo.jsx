"use client";
import React, { useContext } from "react";
import { AlertOctagon, BadgeCheck, ShoppingCart } from "lucide-react";
import SkeletonPrductInfo from "./SkeletonPrductInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CartApis from "@/app/_utils/CartApis";
import { CartContext } from "@/app/_context/CartContext";
const ProductInfo = ({ product }) => {
  const { user } = useUser();
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      const data = {
        data: {
          username: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [product?.id],
        },
      };
      CartApis.AddToCart(data)
        .then((res) => {
          setCart((oldCart) => [
            ...oldCart,
            {
              id: res?.data?.data?.id,
              product,
            },
          ]);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }
  };

  return (
    <div className="sm:w-full sm:me-20">
      {product ? (
        <div>
          <div className="flex justify-between">
            <h2 className="text-[26px]">{product?.attributes?.title} </h2>
            <span className="bg-primary text-white p-3 rounded-full me-20 w-20 text-center">
              ${product?.attributes?.price}
            </span>
          </div>
          <span className="text-gray-400 text-[14px] ">
            Category : {product?.attributes?.category}
          </span>
          <p className="text-[16px] mt-6 text-gray-600">
            {product?.attributes?.description[0]?.children[0]?.text}{" "}
          </p>
          <h2 className="mt-6 text-[12px] text-gray-500 flex items-center gap-1">
            Eligible For Instant Delivery :
            {product?.attributes?.insatantDelivery ? (
              <BadgeCheck className="text-green-500" />
            ) : (
              <AlertOctagon className="text-red-500" />
            )}
          </h2>

          <button
            onClick={() => handleAddToCart()}
            className="flex  gap-3 bg-primary px-7 py-3 rounded-full text-white mt-6 hover:bg-purple-900 transition-all duration-150 uppercase tracking-wide "
          >
            <ShoppingCart />
            Add To Cart
          </button>
        </div>
      ) : (
        <SkeletonPrductInfo />
      )}
    </div>
  );
};

export default ProductInfo;
