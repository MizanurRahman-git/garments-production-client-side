import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../Hooks/useAxios";

const ManageAllProducts = () => {
  const axiosInstance = useAxios();

  const { data: products = [] } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const result = await axiosInstance.get("/products");
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
              <td>{product.checkbox}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllProducts;
