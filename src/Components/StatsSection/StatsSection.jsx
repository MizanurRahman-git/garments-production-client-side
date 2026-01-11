import React from "react";

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-700 hover:scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521334884684-d80222895322')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-indigo-900/40" />

      {/* Content */}
      <div className="relative z-10 px-6 py-20 md:px-16 text-white">
        {/* Small heading */}
        <p className="text-indigo-400 tracking-wide uppercase text-sm mb-4 animate-fadeIn">
          Our Fashion Philosophy
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl animate-slideUp">
          Fabric Fashion is the art of{" "}
          <span className="text-indigo-400">style & expression</span>
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-gray-300 leading-relaxed animate-fadeIn delay-200">
          Fabric Fashion is the harmony between material, design, and
          craftsmanship. Every thread tells a story of culture, confidence, and
          creativity—connecting tradition with modern trends.
        </p>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-10">
          {[
            { value: "Premium", label: "Quality Fabrics" },
            { value: "100+", label: "Design Variations" },
            { value: "Comfort", label: "Meets Style" },
            { value: "Global", label: "Fashion Influence" },
          ].map((item, index) => (
            <div
              key={index}
              className="group transition-transform duration-500 hover:-translate-y-2"
            >
              <h3 className="text-3xl font-bold text-white group-hover:text-indigo-400">
                {item.value}
              </h3>
              <p className="mt-2 text-sm text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
