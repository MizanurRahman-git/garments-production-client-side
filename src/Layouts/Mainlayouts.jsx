import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Mainlayouts = () => {
  return (
    <div>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto">
        <section className="mt-10">{/* <Slider /> */}</section>
        <Outlet />
      </main>

      <footer className="mt-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Mainlayouts;
