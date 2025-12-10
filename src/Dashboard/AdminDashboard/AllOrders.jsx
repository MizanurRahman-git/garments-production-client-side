import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router";
import { Bounce, toast } from "react-toastify";
import { useState } from "react";

const AllOrders = () => {
  const axiosSecure = useAxiosSecure();
  const [searchText, setSearchText] = useState('')


  const { data: orders = [], refetch } = useQuery({
    queryKey: ["all-orders", searchText],
    queryFn: async () => {
      const result = await axiosSecure(`/all-orders?searchText=${searchText}`);
      return result.data;
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
    <div className="overflow-x-auto w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row justify-between my-5 items-center px-6">
        <h1 className="font-bold text-2xl">All Orders:</h1>
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
                  <select
                    onChange={(e) => handleChange(order._id, e)}
                    defaultValue="By Status"
                    className="select w-10"
                  >
                    <option disabled={true}>By Status</option>
                    <option>Panding</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                  </select>
                </div>
                <Link
                  to={`/dashboard/order-details/${order._id}`}
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

export default AllOrders;
