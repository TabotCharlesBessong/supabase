
"use client"

import { useState } from "react";
import { CarouselComp, Product } from "./components"
import MainLayout from "./layouts/MainLayout"

export default function Home() {
  // const [products, setProducts] = useState([]);

  const products = [
    {
      id: 1,
      url: "images/banner/1.png",
      title: "Product 1",
      price: 999,
    },
    {
      id: 2,
      url: "images/banner/2.png",
      title: "Product 2",
      price: 1499,
    },
    {
      id: 3,
      url: "images/banner/3.png",
      title: "Product 3",
      price: 799,
    },
    // Add more dummy products as needed
  ];

  return (
    <MainLayout>
      <CarouselComp />
      <div className="max-w-[1200px] mx-auto">
        <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>

        <div className="grid grid-cols-5 gap-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
