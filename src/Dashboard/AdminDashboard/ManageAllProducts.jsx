import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ManageAllProducts = () => {
  const axiosSecure = useAxiosSecure();

  const { data: products = [] , refetch} = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const result = await axiosSecure("/products");
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
        axiosSecure.delete(`/product/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        })
        .catch(err=>{
          console.log(err)
        });
      }
    });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Created By</th>
            <th>Show On Home</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <img
                  className="w-20 h-16 rounded-md"
                  src={product.image}
                  alt=""
                />{" "}
              </td>
              <td>{product.productName}</td>
              <td>{product.productPrice}</td>
              <td>{product.category}</td>
              <td>{product.sellerName}</td>
              <td>
                <Link
                  to={`/dashboard/product-edit-page/${product._id}`}
                  className="btn "
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDeleteBTN(product._id)}
                  className="btn ms-"
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

export default ManageAllProducts;
