import React, { useState } from "react";

const testimonials = [
  {
    name: "Sophia Williams",
    role: "Fashion Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "Fabric Fashion completely transformed the way I present my designs. The quality, comfort, and elegance are unmatched.",
  },
  {
    name: "Liam Carter",
    role: "Creative Director",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "Every fabric tells a story. Their craftsmanship perfectly blends tradition with modern fashion trends.",
  },
  {
    name: "Ava Johnson",
    role: "Lifestyle Blogger",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "Wearing Fabric Fashion feels like confidence woven into style. Truly premium and expressive.",
  },
];
const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <p className="text-indigo-400 uppercase tracking-widest text-md font-semibold mb-3">
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          What People Say About{" "}
          <span className="text-indigo-400">Fabric Fashion</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-14">
          Our community of designers and creators share their experiences with
          our fabrics and craftsmanship.
        </p>

        {/* Testimonial Card */}
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border rounded-2xl p-10 transition-all duration-500 hover:scale-[1.02]">
            <p className="text-lg leading-relaxed mb-8">
              “{testimonials[activeIndex].feedback}”
            </p>

            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-indigo-400"
              />
              <div className="text-left">
                <h4 className="font-semibold">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-sm text-gray-400">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-indigo-400 scale-125"
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
