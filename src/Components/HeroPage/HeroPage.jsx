import React from "react";
import heroImg from "../../assets/hero.png";
import { Link } from "react-router";

const HeroPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 overflow-hidden">

  {/* Left Content */}
  <div className="space-y-4 animate-fadeInLeft">
    <h1 className="font-bold text-6xl leading-tight">
      Discover the Essence of <br />
      <span className="text-[#6c63ff]">Timeless Elegance</span>
    </h1>

    <p className="text-gray-600 animate-fadeIn delay-200">
      Step into a world where fashion meets art. Experience unparalleled
      luxury and sophisticated style with our exclusive collections.
      Discover the perfect blend of timeless elegance and contemporary flair.
    </p>

    <div className="mt-10 animate-fadeIn delay-300">
      <Link
        to="/all-products"
        className="inline-block p-3 px-9 rounded-md bg-[#6c63ff] font-semibold text-white
        transition-all duration-300
        hover:bg-black hover:scale-105 hover:shadow-xl"
      >
        Shop the Collection
      </Link>
    </div>
  </div>

  {/* Right Image */}
  <div className="flex justify-center">
    <img
      src={heroImg}
      alt="Hero"
      className="
        animate-float
        transition-transform duration-500
        hover:scale-105
        drop-shadow-2xl
      "
    />
  </div>
</div>

  );
};

export default HeroPage;
