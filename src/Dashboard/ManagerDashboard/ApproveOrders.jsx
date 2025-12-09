import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router";

const ApproveOrders = () => {
    const axiosSecure = useAxiosSecure()

  const { data: orders = [] } = useQuery({
    queryKey: ["orders", "Approved"],
    queryFn: async () => {
      const res = await axiosSecure("/approved-orders");
      return res.data;
    },
  });
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>OrderId</th>
            <th>User</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Order Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.customer}</td>
              <td>{order.productName}</td>
              <td>{order.quantity}</td>
              <td>{order.createAt}</td>
              <td className="flex ">
                <button className="btn">Add Tracking</button>
                <Link
                  className="btn ms-1.5"
                >
                  View Tracking
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApproveOrders;
