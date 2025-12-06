import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import SocialLink from "./SocialLink";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import useAxios from "../Hooks/useAxios";

const Register = () => {
  const navigate = useNavigate()
  const { registerUser, updateuserProfile } = useAuth();
  const axiosIntance = useAxios()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    const profileImage = data.image[0];

    registerUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        const formData = new FormData();
        formData.append("image", profileImage);
        const imageURL_API = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_imagebbAPI
        }`;
        axios.post(imageURL_API, formData)
        .then((res) => {

          const userInfo = {
            email: data.email,
            displayName:data.name,
            photoURL:res.data.data.display_url,
            Role: data.role
          }
          axiosIntance.post('/users', userInfo)
          .then(res => {
            if(res.data.insertedId){
              console.log('user set on database')
            }
          })

          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.display_url,
          };

          updateuserProfile(userProfile)
            .then(() => {
              navigate(location?.state || "/");
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0">
      <div className="card-body">
        <h1 className="text-4xl font-bold">Create an Account</h1>
        <h1 className="">Register with Garments</h1>
        <form onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label font-bold text-black">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input"
              placeholder="Full Name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Name is Required</p>
            )}

            {/* Photo*/}
            <label className="label font-bold text-black">Image</label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input"
              placeholder="Full Name"
            />
            <label className="label">Max size 2MB</label>
            {errors.image?.type === "required" && (
              <p className="text-red-500">file is Required</p>
            )}

            {/* Email */}
            <label className="label font-bold text-black">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is Required</p>
            )}

            <label className="label font-bold text-black">Role</label>
            <select
              {...register("role", { required: true })}
              defaultValue="Pick a Role"
              className="select"
            >
              <option disabled={true}>Pick a Role</option>
              <option>Buyer</option>
              <option>Manager</option>
            </select>
            {errors.role?.type === "required" && (
              <p className="text-red-500">Role is Required</p>
            )}

            {/* Password */}
            <label className="label font-bold text-black">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
              })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is Required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-400">
                Password must be 6 Charaters or Longer
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                Minimum six characters, at least one uppercase letter, one
                lowercase letter and one number
              </p>
            )}
            <button className="btn btn-neutral mt-4 bg-[#CAEB66] border-none text-black">
              Register
            </button>
          </fieldset>
          <p className="text-gray-500 mt-3">
            Already have an account?{" "}
            <Link state={location.state} to="/login" className="text-[#8FA748]">
              LogIn
            </Link>{" "}
          </p>
          <p className="text-gray-500 text-center mt-2">Or</p>
        </form>
        <SocialLink />
      </div>
    </div>
  );
};

export default Register;
