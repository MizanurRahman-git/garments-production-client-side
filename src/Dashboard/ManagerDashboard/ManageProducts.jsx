import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const axiosSecure = useAxiosSecure();
  const [searchText, setSearchText] = useState('')
  const { user } = useAuth();

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products", searchText],
    queryFn: async () => {
      const result = await axiosSecure(`/manage-product/${user?.email}?searchText=${searchText}`);
      return result.data;
    },
  });

  const handleDeleteBTN = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/product/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto w-11/12 mx-auto">
      <title>Manage-Products</title>
      <div className="flex flex-col md:flex-row justify-between my-5 items-center mx-10">
        <h1 className="font-bold text-2xl">All Products:</h1>
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
            onChange={(e) => setSearchText(e.target.value)}
            type="search"
            placeholder="Search"
          />
        </label>
      </div>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>SL NO.</th>
            <th>image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Payment Method</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product,i) => (
            <tr key={product._id}>
              <td>{i+1}</td>
              <td>
                <img
                  className="w-20 h-16 rounded-md"
                  src={product.image}
                  alt=""
                />{" "}
              </td>
              <td>{product.productName}</td>
              <td>{product.productPrice}</td>
              <td>{product.paymentOptions}</td>
              <td>
                <Link
                  to={`/dashboard/product-edit-page/${product._id}`}
                  className="btn "
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDeleteBTN(product._id)}
                  className="btn ms-3"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
