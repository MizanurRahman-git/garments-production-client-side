import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../Hooks/useAxios";
import ProductCard from "../ProductCard/ProductCard";

const DisplayProduct = () => {
  const axiosInstance = useAxios();

  const { data: products = [] } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const res = await axiosInstance.get("/display-product");
      return res.data;
    },
  });
  return (
    <div className="mt-16 my-4">
        <h1 className="font-bold text-4xl text-center border-b-4 pb-3 border-[#6C63FF]">Latest Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-18 mt-18"> 
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DisplayProduct;
