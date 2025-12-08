import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";

const ProductEditPage = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

   const { register, handleSubmit } = useForm();

  const { data: product = {} } = useQuery({
    queryKey: ["product-edit", id],
    queryFn: async () => {
      const result = await axiosSecure(`/product/${id}`);
      return result.data;
    },
  });

  const handleEditProduct = (data)=> {
    console.log(data)
  }
  return (
    <div className="w-11/12 mx-auto mt-2.5">
      <h2 className="text-5xl font-bold">Edit Product</h2>
      <h2 className="text-2xl font-semibold">Product Details</h2>
      <form onSubmit={handleSubmit(handleEditProduct)} className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <fieldset className="fieldset">
            <label className="label text-black font-semibold">
              Product Name
            </label>
            <input
              type="text"
              defaultValue={product.productName}
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
              defaultValue={product.productPrice}
              {...register("productPrice")}
              className="input w-full"
              placeholder="Product Price"
            />
          </fieldset>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <fieldset className="fieldset">
            <label className="label text-black font-semibold">
              Product Category
            </label>
            <select
              defaultValue={product.category}
              {...register("category", { required: true })}
              className="select w-full"
            >
              <option disabled={true}>{product.category}</option>
              <option>Shirt</option>
              <option>Pant</option>
              <option>Jacket</option>
              <option>Accessories</option>
            </select>

            <label className="label text-black font-semibold">
              Product Description
            </label>
            <textarea
              type="text"
              defaultValue={product.description}
              {...register("description")}
              className="input w-full h-20"
              placeholder="Description"
            />

            <label className="label text-black font-semibold">
              Available Quantity
            </label>
            <input
              type="number"
              defaultValue={product.availableQuantity}
              {...register("availableQuantity")}
              className="input w-full"
              placeholder="Available Quantity"
            />

            <label className="label text-black font-semibold">
              Minimum Quantity
            </label>
            <input
              type="number"
              defaultValue={product.minimumQuantity}
              {...register("minimumQuantity")}
              className="input w-full"
              placeholder="Minimum"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-black font-semibold">
              Product Image
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              multiple
              accept="image/*"
              className="file-input"
              placeholder="Image"
            />

            <label className="label text-black font-semibold">
              Demo Video Link
            </label>
            <input
              type="text"
              defaultValue={product.videoLink}
              {...register("videoLink")}
              className="input w-full"
              placeholder="Video Link"
            />

            <label className="label text-black font-semibold">
              Payment Options
            </label>
            <select
              {...register("paymentOptions", { required: true })}
              defaultValue={product.paymentOptions}
              className="select w-full"
            >
              <option disabled={true}>{product.paymentOptions}</option>
              <option>Cash On Delivery</option>
              <option>PayFast</option>
            </select>
          </fieldset>
        </div>
        <input
          type="submit"
          className="btn btn-primary text-white w-full mt-5"
          value="Update Product"
        />
      </form>
    </div>
  );
};

export default ProductEditPage;
