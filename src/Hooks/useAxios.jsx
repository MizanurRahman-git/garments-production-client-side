import axios from "axios";
import React from "react";

const axiosIntance = axios.create({
    baseURL: "https://garments-production-server.vercel.app",
  });

const useAxios = () => {
  return axiosIntance;
};

export default useAxios;