import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import ProductCard from "../Components/ProductCard/ProductCard";

const AllProducts = () => {
  const axiosInstance = useAxios();

  const { data: products = [] } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const res = await axiosInstance.get("/products");
      return res.data;
    },
  });

  return (
    <div className="my-10">
      <h1>Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
