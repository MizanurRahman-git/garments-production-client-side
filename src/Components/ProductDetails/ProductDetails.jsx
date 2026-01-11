import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";

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
    minimumQuantity,
    paymentOptions,
    _id,
  } = product;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <title>{productName}</title>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* ================= Image Section ================= */}
        <div className="relative group">
          <div className="absolute inset-0 rounded-3xl bg-indigo-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

          <img
            src={image}
            alt={productName}
            className="relative w-full h-[460px] object-cover rounded-3xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
          />

          {/* Category Badge */}
          <span className="absolute top-5 left-5 rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold text-white shadow-lg">
            {category}
          </span>
        </div>

        {/* ================= Content Section ================= */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold ">
            {productName}
          </h1>

          {/* Description */}
          <p className=" leading-relaxed">{description}</p>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-indigo-500/20 bg-indigo-50 px-4 py-3">
              <p className="text-xs text-indigo-500 uppercase">
                Available Stock
              </p>
              <p className="font-semibold text-slate-900">
                {availableQuantity} Units
              </p>
            </div>

            <div className="rounded-xl border border-indigo-500/20 bg-indigo-50 px-4 py-3">
              <p className="text-xs text-indigo-500 uppercase">Minimum Order</p>
              <p className="font-semibold text-slate-900">
                {minimumQuantity} Units
              </p>
            </div>
          </div>

          {/* Price & Payment */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="flex items-center text-3xl font-bold text-indigo-600">
              {productPrice}
              <HiOutlineCurrencyBangladeshi className="text-4xl ml-1" />
            </p>

            <p className="text-slate-600">
              <span className="font-semibold ">
                Payment Method:
              </span>{" "}
              {paymentOptions}
            </p>
          </div>

          {/* CTA */}
          <Link
            to={`/orderform/${_id}`}
            className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-indigo-500 hover:scale-[1.02]"
          >
            🛒 Order Now
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
