import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { Link } from "react-router";


const ProductCard = ({ product }) => {
  const {image, availableQuantity, category, productPrice, productName, _id}=product;
  return (
    <div className="card border-2 border-blue-800 bg-base-100 h-fit shadow-sm">
      <figure className="p-1.5">
        <img
          src={image}
          alt=""
          className="rounded-xl w-100 h-80 object-cover"
        />
      </figure>
      <div className="">
        <div className="p-3">
          <p className="font-medium text-gray-500">{category}</p>
          <h2 className="text-2xl font-medium">{productName}</h2>
        </div>
        <div className="flex justify-between p-3">
          <p className="flex items-center gap-0.5">
            {" "}
            <span className="font-medium">
              In Stock:
            </span>
            {availableQuantity} Only
          </p>
          <p className="flex  font-semibold text-xl">
            {" "}
            {productPrice}
            <span>
              <HiOutlineCurrencyBangladeshi />
            </span>
          </p>
        </div>
        <div className="card-actions">
          <Link
            to={`/productDetails/${_id}`}
            className="bg-blue-800 text-white px-4 py-2 w-full flex items-center justify-between text-xl"
          >
            <span>View Details</span>{" "}
            <span>
              {" "}
              <FaArrowRightLong />{" "}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
