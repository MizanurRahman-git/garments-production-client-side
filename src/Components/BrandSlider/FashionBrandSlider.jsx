import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const brands = [
  {
    name: "Zara",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
  },
  {
    name: "H&M",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
  },
  {
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
  {
    name: "Gucci",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/70/Gucci_Logo.svg",
  },
  {
    name: "Levi’s",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Levi%27s_logo.svg",
  },
];

const BrandCarousel = () => {
  return (
    <section className="py-20 ">
      <h2 className="text-center text-3xl font-bold mb-12 ">
        Our Trusted Fashion Brands
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="max-w-6xl mx-auto"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center border justify-center h-28 rounded-xl shadow-md hover:shadow-xl transition">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BrandCarousel;
