import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router";

const ManageAllProducts = () => {
  const axiosSecure = useAxiosSecure();

  const { data: products = [] } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const result = await axiosSecure("/products");
      return result.data;
    },
  });
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
                <Link to={`/dashboard/product-edit-page/${product._id}`} className="btn ">Update</Link>
                <button className="btn ms-">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllProducts;
