import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import ProductCard from "../Components/ProductCard/ProductCard";

const AllProducts = () => {
  const axiosInstance = useAxios();
  const [searchText, setSearchText] = useState('')

  const { data: products = [] } = useQuery({
    queryKey: ["all-products", searchText],
    queryFn: async () => {
      const res = await axiosInstance.get(`/products?searchText=${searchText}`);
      return res?.data;
    },
  });


  return (
    <div className="my-10">
      <div className="flex flex-col md:flex-row justify-between my-5 items-center px-3.5">
        <h1 className="font-bold text-2xl">Available Products:</h1>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input 
          onChange={(e)=> setSearchText(e.target.value)}
          type="search" 
          placeholder="Search" />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
