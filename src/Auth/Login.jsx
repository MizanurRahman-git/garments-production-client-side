import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router";
import SocialLink from "./SocialLink";
import useAuth from "../Hooks/useAuth";
import { Bounce, toast } from "react-toastify";

const Login = () => {
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const handleLogIn = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        if (result.user) {
          navigate(location?.state || "/");
          toast.success("🦄 Wow Log In Success!", {
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
      .catch((error) => {
        console.log(error);
        toast.error(error.message, {
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
      });
  };

  const handleAutoFill = (role) => {
    if (role === "buyer") {
      setValue("email", "mohtasinbillaratul@gmail.com");
      setValue("password", "Hridoy32");
    } else if (role === "manager") {
      setValue("email", "mdmizanurrahmanhridoy5@gmail.com");
      setValue("password", "Hridoy32");
    } else if (role === "admin") {
      setValue("email", "mizanurrahmanhridoy42@gmail.com");
      setValue("password", "Hridoy32");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-lime-50 via-white to-lime-100 px-4">
      <div className="card w-full max-w-sm mx-auto bg-white shadow-xl rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        <title>Log-In</title>

        <div className="card-body space-y-4">
          <div className="text-center space-y-1">
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome Back 👋
            </h1>
            <p className="text-gray-500 text-sm">
              Login to your garment dashboard
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => handleAutoFill("buyer")}
              className="btn w-full rounded-xl bg-blue-400 text-white font-semibold hover:bg-blue-500 transition"
            >
              Use Demo Buyer Login
            </button>
            <button
              type="button"
              onClick={() => handleAutoFill("manager")}
              className="btn w-full rounded-xl bg-green-400 text-white font-semibold hover:bg-green-500 transition"
            >
              Use Demo Manager Login
            </button>
            <button
              type="button"
              onClick={() => handleAutoFill("admin")}
              className="btn w-full rounded-xl bg-red-400 text-white font-semibold hover:bg-red-500 transition"
            >
              Use Demo Admin Login
            </button>
          </div>

          <form onSubmit={handleSubmit(handleLogIn)} className="space-y-4">
            <fieldset className="space-y-3">
              <div>
                <label className="label font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CAEB66] transition"
                  placeholder="Enter your email"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500 text-sm mt-1">Email is required</p>
                )}
              </div>

              <div>
                <label className="label font-semibold text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
                  })}
                  className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CAEB66] transition"
                  placeholder="Enter your password"
                />

                {errors.password?.type === "required" && (
                  <p className="text-red-500 text-sm mt-1">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-400 text-sm mt-1">
                    Password must be at least 6 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500 text-sm mt-1">
                    Must include uppercase, lowercase & number
                  </p>
                )}
              </div>

              <div className="text-right">
                <a className="text-sm text-gray-500 hover:text-gray-700 transition underline cursor-pointer">
                  Forgot password?
                </a>
              </div>

              <button className="btn w-full rounded-xl bg-[#CAEB66] text-black font-semibold border-none hover:bg-[#bada4d] active:scale-95 transition-all duration-200">
                Login
              </button>
            </fieldset>
          </form>

          <div className="text-center space-y-2">
            <p className="text-gray-500">
              Don't have an account?{" "}
              <Link
                state={location.state}
                to="/register"
                className="text-[#8FA748] font-medium hover:underline"
              >
                Register
              </Link>
            </p>

            <p className="text-gray-400 text-sm">or continue with</p>
          </div>

          <SocialLink />
        </div>
      </div>
    </div>
  );
};

export default Login;
