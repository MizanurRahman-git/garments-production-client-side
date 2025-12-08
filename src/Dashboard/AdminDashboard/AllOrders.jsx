import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../Hooks/useAxios";

const AllOrders = () => {
  const axiosInstance = useAxios();

  const { data: orders = [] } = useQuery({
    queryKey: ["all-orders"],
    queryFn: async () => {
      const result = await axiosInstance.get("/all-orders");
      return result.data;
    },
  });
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>SL No.</th>
            <th>order Id</th>
            <th>User</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Actios</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={order._id}>
              <td>{i + 1}</td>
              <td>{order._id}</td>
              <td>{order.customer}</td>
              <td>{order.productName}</td>
              <td>{order.quantity}</td>
              <td>{order.status}</td>
              <td className="flex">
                <div>
                  <select defaultValue="By Status" className="select w-10">
                    <option disabled={true}>By Status</option>
                    <option>Panding</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                  </select>
                </div>
                <button className="btn ms-1.5">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrders;
