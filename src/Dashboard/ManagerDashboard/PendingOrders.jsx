import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Bounce, toast } from "react-toastify";
import { Link } from "react-router";

const PendingOrders = () => {
  const axiosSecure = useAxiosSecure();

  const { data: orders = [], refetch } = useQuery({
    queryKey: ["orders", "Panding"],
    queryFn: async () => {
      const res = await axiosSecure("/panding-orders");
      return res.data;
    },
  });

  const handleChange = (id, e) => {
    const updateinfo = {
      status: e.target.value,
    };

    axiosSecure
      .patch(`/update-order/${id}`, updateinfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          toast.success("Order Updated!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
                <div>
                  <select
                    onChange={(e) => handleChange(order._id, e)}
                    defaultValue="By Status"
                    className="select w-10"
                  >
                    <option disabled={true}>By Status</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                  </select>
                </div>
                <Link to={`/dashboard/order-details/${order._id}`}
                  className="btn ms-1.5"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingOrders;
