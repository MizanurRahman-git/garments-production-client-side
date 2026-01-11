import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "https://garments-production-server.vercel.app",
});
const useAxiosSecure = () => {
  const { user, loading, logOut } = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && user?.accessToken) {
      const requestInterceptor = axiosSecure.interceptors.request.use(
        (config) => {
          config.headers.Authorization = `Bearer ${user.accessToken}`;
          return config;
        }
      );
      const responseInterceptor = axiosSecure.interceptors.response.use(
        (res) => res,
        (err) => {
          if (err?.response?.status === 401 || err?.response?.status === 403) {
            logOut()
              .then(() => {
                console.log("Logged out.");
              })
              .catch();
            navigate("/logIn");
          }
          return Promise.reject(err);
        }
      );
      return () => {
        axiosSecure.interceptors.request.eject(requestInterceptor);
        axiosSecure.interceptors.response.eject(responseInterceptor);
      };
    }
  }, [user, loading, logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
