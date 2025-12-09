import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const result = await axiosSecure(`/manage-product/${user?.email}`);
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
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Payment Method</th>
            <th>Actions</th>
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

export default ManageProducts;
