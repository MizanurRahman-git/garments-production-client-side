import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

const ProductEditPage = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm();

  const { data: product = {} } = useQuery({
    queryKey: ["product-edit", id],
    queryFn: async () => {
      const result = await axiosSecure(`/product/${id}`);
      return result.data;
    },
  });

  const handleEditProduct = (data) => {
    const profileImage = data.image[0];
    const formData = new FormData();
    formData.append("image", profileImage);
    const imageURL_API = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_imagebbAPI
    }`;
    axios.post(imageURL_API, formData).then((res) => {
      const ProductInfo = {
        productName: data.productName,
        productPrice: data.productPrice,
        category: data.category,
        availableQuantity: data.availableQuantity,
        description: data.description,
        image: res.data.data.url,
        minimumQuantity: data.minimumQuantity,
        paymentOptions: data.paymentOptions,
        videoLink: data.videoLink,
      };

      axiosSecure.patch(`/product/${id}`, ProductInfo).then((res) => {
        if (res.data.modifiedCount) {
          navigate("/");
          Swal.fire({
            title: "Product Update Successfuly!",
            icon: "success",
            draggable: true,
          });
        }
      });
    });
    ;
  };
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
