import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const riderModalRef = useRef();
  const [userInfo, setUserInfo] = useState(null);

  const { register, handleSubmit } = useForm();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const result = await axiosSecure("/users");
      return result.data;
    },
  });

  const handleModal = (user) => {
    setUserInfo(user);
    riderModalRef.current.showModal();
  };

  const updateRole = (data) => {
    // console.log(data, userInfo?.email)
    axiosSecure
      .patch(`/users/${userInfo?.email}/role`, data)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          riderModalRef.current.close();
          toast.success("User Role Updated!", {
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
        {/* head */}
        <thead>
          <tr>
            <th>Sl No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user._id}>
              <td>{i + 1}</td>
              <td>{user.displayName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleModal(user)} className="btn">
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <dialog
        ref={riderModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update User Role</h3>
          <form onSubmit={handleSubmit(updateRole)} className="my-2.5">
            <select
              {...register("role", { required: true })}
              defaultValue="User Role"
              className="select w-full"
            >
              <option disabled={true}>Pick a Role</option>
              <option>Admin</option>
              <option>Manager</option>
              <option>Buyer</option>
              <option>Reject</option>
            </select>
            <div className="mt-3.5">
              <button className="btn">Update</button>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ManageUsers;
