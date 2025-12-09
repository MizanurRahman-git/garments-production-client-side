import React from "react";
import heroImg from "../../assets/hero.png";
import { Link } from "react-router";

const HeroPage = () => {
  return (
    <div className="flex justify-center items-center flex-col md:flex-row">
      <div className="space-y-3">
        <h1 className="font-bold text-6xl">
          Discover the Essence of Timeless Elegance
        </h1>
        <p>
          Step into a world where fashion meets art. Experience unparalleled
          luxury and sophisticated style with our exclusive collections.
          Discover the perfect blend of timeless elegance and contemporary
          flair.
        </p>

        <div className="mt-10">
          <Link to='/all-products' className="p-3 px-9 rounded-md bg-[#6c63ff] font-semibold hover:bg-black hover:text-white">Shop the Collection</Link>
        </div>
      </div>
      <div>
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default HeroPage;
