import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ProductDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const { data: product = {} } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const result = await axiosSecure.get(`/product/${id}`);
      return result.data;
    },
  });

  const {
    image,
    productName,
    description,
    category,
    productPrice,
    availableQuantity,
    minimumQuantity, paymentOptions, _id
  } = product;
  return (
    <div className="mx-auto my-10 flex flex-col lg:flex-row justify-between w-full gap-12">
      <title>{productName}</title>
      <div className="flex flex-col gap-6 flex-1">
        <div>
          <div className="w-full overflow-hidden rounded-xl">
            <img
              className="object-cover h-120 w-full"
              src={image}
              alt="header image"
            />
          </div>
        </div>
      </div>
      <div className="md:gap-10 flex-1">
        <h1 className="font-bold text-3xl">{productName}</h1>
        <hr className="my-6" />
        <div>
          {" "}
          <p>Description:</p>
          <h1
            className="
          text-lg font-light text-neutral-500"
          >
            {description}
          </h1>
        </div>
        <hr className="my-6" />

        <div
          className="
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              "
        >
          <div>Category: {category}</div>
        </div>
        <hr className="my-6" />
        <div className="flex justify-between items-center px-8">
          <p
            className="
                gap-4 
                font-light
                text-neutral-500
              "
          >
            Available Quantity: {availableQuantity} Only!
          </p>
          <p
            className="
                gap-4 
                font-light
                text-neutral-500
              "
          >
            Order Quantity: {minimumQuantity} Only!
          </p>
        </div>
        <hr className="my-6" />
        <div className="flex justify-between">
          <p className="font-bold text-3xl text-gray-500">
            Price: {productPrice}$
          </p>
          <p>
            <span className="font-medium text-xl text-gray-500">Payment Method: </span>{paymentOptions}
          </p>
          
        </div>
        <div className="mt-10">
            <Link to={`/orderform/${_id}`} className="btn btn-primary w-full">Order Now</Link>
          </div>
      </div>
    </div>
  );
};

export default ProductDetails;
