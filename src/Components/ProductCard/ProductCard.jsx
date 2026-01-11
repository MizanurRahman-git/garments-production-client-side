import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { image, availableQuantity, category, productPrice, productName, _id } =
    product;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-indigo-500/30 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={productName}
          className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-indigo-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category badge */}
        <span className="absolute left-4 top-4 rounded-full bg-[#9CAB84] px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <h2 className="text-xl font-semibold  transition group-hover:text-indigo-600">
          {productName}
        </h2>

        {/* Stock & Price */}
        <div className="flex items-center justify-between text-sm">
          <p className="text-slate-500 dark:text-slate-400">
            <span className="font-medium text-slate-700 dark:text-slate-300">
              In Stock:
            </span>{" "}
            {availableQuantity} only
          </p>

          <p className="flex items-center text-lg font-bold text-[#F96E5B]">
            {productPrice}
            <HiOutlineCurrencyBangladeshi className="text-xl" />
          </p>
        </div>

        {/* CTA */}
        <Link
          to={`/productDetails/${_id}`}
          className="mt-4 flex items-center justify-between rounded-xl bg-[#79C9C5] px-4 py-3 text-black font-medium transition-all duration-300 hover:bg-[#3F9AAE]"
        >
          <span>View Details</span>
          <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
