"use client";

import { SimilarProducts } from "@/app/components";
import MainLayout from "../../layouts/MainLayout";
import { useEffect, useState } from "react";
// import useIsLoading from "../../hooks/useIsLoading";
import { useCart } from "../../context/cart";
import { toast } from "react-toastify";

export default function Product({ params }) {
  const cart = useCart();
  // const cart = {};

  const products = {
    id: 1,
    url: "images/banner/1.png",
    title: "Product 1",
    price: 999,
    description: "Hello just come and buy and feel good",
  };

  // const [product, setProduct] = useState(products);
  const [isLoading, setIsLoading] = useState(false);

  // const getProduct = async () => {
  //   // useIsLoading(true);
  //   setIsLoading(true)
  //   setProduct({});

  //   const response = await fetch(`/api/product/${params.id}`);
  //   const prod = await response.json();
  //   setProduct(prod);
  //   cart.isItemAddedToCart(prod);
  //   useIsLoading(false);
  // };

  // useEffect(() => {
  //   getProduct();
  // }, []);

  return (
    <>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex px-4 py-10">
            {products?.url ? (
              <img className="w-[40%] rounded-lg" src="/images/banner/1.png" />
            ) : (
              <div className="w-[40%]"></div>
            )}

            <div className="px-4 w-full">
              <div className="font-bold text-xl">{products?.title}</div>
              <div className="text-sm text-gray-700 pt-2">
                Brand New - Full Warranty
              </div>

              <div className="border-b py-1" />

              <div className="pt-3 pb-2">
                <div className="flex items-center">
                  Condition:{" "}
                  <span className="font-bold text-[17px] ml-2">New</span>
                </div>
              </div>

              <div className="border-b py-1" />

              <div className="pt-3">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center">
                    Price:
                    {products?.price ? (
                      <div className="font-bold text-[20px] ml-2">
                        GBP £{(products?.price / 100).toFixed(2)}
                      </div>
                    ) : null}
                  </div>
                  <button
                    onClick={() => {
                      if (cart.isItemAdded) {
                        cart.removeFromCart(products);
                        toast.info("Removed from cart", { autoClose: 3000 });
                      } else {
                        cart.addToCart(products);
                        toast.success("Added to cart", { autoClose: 3000 });
                      }
                    }}
                    className={`
                      text-white py-2 px-20 rounded-full cursor-pointer 
                      ${
                        cart.isItemAdded
                          ? "bg-[#e9a321] hover:bg-[#bf851a]"
                          : "bg-[#3498C9] hover:bg-[#0054A0]"
                      }
                    `}
                  >
                    {cart.isItemAdded ? "Remove From Cart" : "Add To Cart"}
                  </button>
                </div>
              </div>

              <div className="border-b py-1" />

              <div className="pt-3">
                <div className="font-semibold pb-1">Description:</div>
                <div className="text-sm">{products?.description}</div>
              </div>
            </div>
          </div>
        </div>

        <SimilarProducts />
      </MainLayout>
    </>
  );
}
