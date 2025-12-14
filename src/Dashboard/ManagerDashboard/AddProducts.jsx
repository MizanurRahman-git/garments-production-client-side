import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";

const AddProducts = () => {
    const {user} = useAuth()
  const axiosInstance = useAxios();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleAddProduct = (data) => {
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
        checkbox: data.checkbox,
        description: data.decription,
        image: res.data.data.url,
        minimumQuantity: data.minimumQuantity,
        paymentOptions: data.paymentOptions,
        videoLink: data.videoLink,
        managerEmail: user.email,
        sellerName: user?.displayName
      };

      axiosInstance.post("/products", ProductInfo).then((res) => {
        if (res.data.insertedId) {
          navigate("/");
          Swal.fire({
            title: "Product Add Successfuly!",
            icon: "success",
            draggable: true,
          });
        }
      });
    });
  };
  return (
    <div className="w-11/12 mx-auto mt-2.5 my-10">
      <title>Add-Products</title>
      <h2 className="text-5xl font-bold">Add Product</h2>
      <h2 className="text-2xl font-semibold">Product Details</h2>
      <form onSubmit={handleSubmit(handleAddProduct)} className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <fieldset className="fieldset">
            <label className="label text-black font-semibold">
              Product Name
            </label>
            <input
              type="text"
              {...register("productName", {required: true})}
              className="input w-full"
              placeholder="Product Name"
            />
            {errors.productName?.type === "required" && (
              <p className="text-red-500">Name is Required</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <label className="label text-black font-semibold">
              Product Price
            </label>
            <input
              type="number"
              {...register("productPrice", {required: true})}
              className="input w-full"
              placeholder="Product Price"
            />
            {errors.productPrice?.type === "required" && (
              <p className="text-red-500">Price is Required</p>
            )}
          </fieldset>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <fieldset className="fieldset">
            <label className="label text-black font-semibold">
              Product Category
            </label>
            <select
              {...register("category", { required: true })}
              defaultValue="Pick a Item"
              className="select w-full"
            >
              <option disabled={true}>Pick a Item</option>
              <option>Shirt</option>
              <option>Pant</option>
              <option>Jacket</option>
              <option>Accessories</option>
            </select>
            {errors.category?.type === "required" && (
              <p className="text-red-500">Category is Required</p>
            )}

            <label className="label text-black font-semibold">
              Product Description
            </label>
            <textarea
              type="text"
              {...register("decription", {required: true})}
              className="input w-full h-20"
              placeholder="Description"
            />
            {errors.decription?.type === "required" && (
              <p className="text-red-500">Description is Required</p>
            )}

            <label className="label text-black font-semibold">
              Available Quantity
            </label>
            <input
              type="number"
              {...register("availableQuantity", {required: true})}
              className="input w-full"
              placeholder="Available Quantity"
            />
            {errors.availableQuantity?.type === "required" && (
              <p className="text-red-500">Available Quantity is Required</p>
            )}

            <label className="label text-black font-semibold">
              Minimum Order
            </label>
            <input
              type="number"
              {...register("minimumQuantity", {required: true})}
              className="input w-full"
              placeholder="Minimum"
            />
            {errors.minimumQuantity?.type === "required" && (
              <p className="text-red-500">Minimum Quantity is Required</p>
            )}
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
            {errors.image?.type === "required" && (
              <p className="text-red-500">Image is Required</p>
            )}

            <label className="label text-black font-semibold">
              Demo Video Link
            </label>
            <input
              type="text"
              {...register("videoLink", {required: true})}
              className="input w-full"
              placeholder="Video Link"
            />
            {errors.videoLink?.type === "required" && (
              <p className="text-red-500">Video Link is Required</p>
            )}

            <label className="label text-black font-semibold">
              Payment Options
            </label>
            <select
              {...register("paymentOptions", { required: true })}
              defaultValue="Pick a Item"
              className="select w-full"
            >
              <option disabled={true}>Pick a Item</option>
              <option>Cash On Delivery</option>
              <option>PayFast</option>
            </select>
            {errors.paymentOptions?.type === "required" && (
              <p className="text-red-500">Payment Options is Required</p>
            )}

            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
              <legend className="fieldset-legend">Show On</legend>
              <label className="label">
                <input
                  type="radio"
                  value="Show"
                  {...register("checkbox")}
                  className="radio"
                />
                Show on Home Page
              </label>
            </fieldset>
          </fieldset>
        </div>
        <input
          type="submit"
          className="btn btn-primary text-white w-full mt-5 mb-10"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProducts;
