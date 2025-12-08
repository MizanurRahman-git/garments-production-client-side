import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";

const ManageProducts = () => {
  const axiosInstance = useAxios();
  const { user } = useAuth();

  const { data: products = [] } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const result = await axiosInstance.get(`/manage-product/${user?.email}`);
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
            <th>Payment Method</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td><img className="w-20 h-16 rounded-md" src={product.image} alt="" /> </td>
              <td>{product.productName}</td>
              <td>{product.productPrice}</td>
              <td>{product.paymentOptions}</td>
              <td>
                <button className="btn ">Update</button>
                <button className="btn ms-2.5">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
