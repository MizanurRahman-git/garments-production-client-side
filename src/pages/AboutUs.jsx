import React from "react";
import aboutImg from "../assets/about.png";
import workingImg from "../assets/working.jpg";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <title>About Us | Fabric Fashion</title>

      {/* ===== Hero About ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-14">
        {/* Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="block text-gray-900">FABRIC</span>
            <span className="block text-indigo-600">FASHION</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-md">
            Everything you need to know about the art, culture, and creativity
            behind modern Fabric Fashion.
          </p>

          <Link to='/about-us' className="mt-4 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-indigo-500 hover:scale-105">
            Learn More
            <span className="text-xl">→</span>
          </Link>
        </div>

        {/* Image */}
        <div className="relative group">
          <div className="absolute inset-0 bg-indigo-600 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition" />
          <img
            src={aboutImg}
            alt="Fabric Fashion"
            className="relative rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* ===== Divider ===== */}
      <div className="my-24 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent" />

      {/* ===== Details Section ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Image */}
        <div className="relative group order-2 md:order-1">
          <img
            src={workingImg}
            alt="Working Process"
            className="rounded-3xl shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-black/10 group-hover:ring-indigo-400 transition" />
        </div>

        {/* Content */}
        <div className="space-y-5 order-1 md:order-2">
          <h2 className="text-3xl font-bold text-gray-900">
            About Fabric Fashion
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Fabric Fashion is the art and business of transforming raw textiles
            into stylish, functional, and expressive garments. Every thread
            tells a story of culture, identity, and creativity.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Through the careful selection of fabrics—natural or synthetic—we
            blend comfort, durability, and aesthetic beauty to shape confidence,
            lifestyle, and modern fashion trends.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              "Premium Fabrics",
              "Creative Design",
              "Modern Trends",
              "Timeless Style",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-800 transition hover:bg-indigo-600 hover:text-white hover:-translate-y-1"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
