import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const OrderForm = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(0);

  const { data: product = {} } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const result = await axiosSecure.get(`/product/${id}`);
      return result.data;
    },
  });

  const { productPrice, productName, _id } = product;
  const singlePrice = Number(productPrice);
  const totalQuantity = Number(quantity);
  const finalPrice = singlePrice * totalQuantity;

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue("orderPrice", finalPrice);
    setValue("orderQuantity", totalQuantity);
  }, [finalPrice, totalQuantity, setValue]);



  const handlePayment = async(info) =>{
    info.id = _id;
    const {data} = await axiosSecure.post('/create-checkout-session', info);
    window.location.href = data.url;
  };



  return (
    <div className="w-11/12 mx-auto my-10 mt-2.5">
      <h2 className="text-5xl font-bold">Payment</h2>
      <h2 className="text-xl font-semibold mt-2.5">
        Check your Product Info: and Input your Informations
      </h2>
      <form onSubmit={handleSubmit(handlePayment)} className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <fieldset className="fieldset">
            <label className="label text-black font-semibold">
              Product Name
            </label>
            <input
              type="text"
              readOnly
              defaultValue={productName}
              {...register("productName")}
              className="input w-full"
              placeholder="Product Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label text-black font-semibold">
              Product Price
            </label>
            <input
              type="number"
              readOnly
              defaultValue={productPrice}
              {...register("productPrice")}
              className="input w-full"
              placeholder="Product Price"
            />
          </fieldset>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product information */}
          <fieldset className="fieldset">
            <label className="label text-black font-semibold">First Name</label>
            <input
              type="text"
              {...register("firstName")}
              className="input w-full"
              placeholder="First Name"
            />

            <label className="label text-black font-semibold">Last Name</label>
            <input
              type="text"
              {...register("lastName")}
              className="input w-full"
              placeholder="Last Name"
            />

            <label className="label text-black font-semibold">
              Order Quantity
            </label>
            <input
              type="number"
              onChange={(e) => setQuantity(e.target.value)}
              className="input w-full"
              placeholder="Order Quantity"
            />
            <label className="label">Minimum 100 products</label>

            <label className="label text-black font-semibold">
              Order Price
            </label>
            <input
              type="number"
              readOnly
              {...register("orderPrice")}
              className="input w-full"
              placeholder="Order Price"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label font-semibold text-black">Email</label>
            <input
              type="email"
              readOnly
              defaultValue={user?.email}
              {...register("email", { required: true })}
              className="input w-full"
              placeholder="Email"
            />

            <label className="label text-black font-semibold">
              Contact Number
            </label>
            <input
              type="number"
              {...register("number", { required: true })}
              className="file-input w-full"
              placeholder="Contact Number"
            />

            <label className="label text-black font-semibold">
              Delivery Address
            </label>
            <input
              type="text"
              {...register("address")}
              className="input w-full"
              placeholder="Address"
            />

            <label className="label text-black font-semibold">
              Additional Notes
            </label>
            <input
              type="text"
              {...register("notes")}
              className="input w-full h-16"
              placeholder="Notes"
            />
          </fieldset>
        </div>
        <input
          type="submit"
          className="btn btn-primary text-white w-full mt-5"
          value="Confirm"
        />
      </form>
    </div>
  );
};

export default OrderForm;
