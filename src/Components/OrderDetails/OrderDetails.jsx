import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const OrderDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: order = {} } = useQuery({
    queryKey: ["single-order", id],
    queryFn: async () => {
      const result = await axiosSecure(`/single-order/${id}`);
      return result?.data;
    },
  });

  const {
    productName,
    productId,
    transectionId,
    customer,
    status,
    trackingId,
    customerAddress,
    quantity,
    managerEmail,
    seller,
    price,
  } = order;
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Prodcut Name</th>
            <th>Price</th>
            <th>TransectionId</th>
            <th>ProductId</th>
            <th>Customer</th>
            <th>Status</th>
            <th>TrackingId</th>
            <th>CustomerAddress</th>
            <th>Quantity</th>
            <th>ManagerEmail</th>
            <th>Seller</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>{productName}</th>
            <td>{price}</td>
            <td>{transectionId}</td>
            <td>{productId}</td>
            <td>{customer}</td>
            <td>{status}</td>
            <td>{trackingId}</td>
            <td>{customerAddress}</td>
            <td>{quantity}</td>
            <td>{managerEmail}</td>
            <td>{seller}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;
