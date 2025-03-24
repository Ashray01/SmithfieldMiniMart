import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BannerSlider = () => {
  const banners = [
    {
      id: 1,
      image: "/assets/image1.jpg",
    },
    {
      id: 2,
      image: "/assets/Image2.jpg",
    },
    {
      id: 3,
      image: "/assets/profile.jpg",
    },
  ];

  return (
    <section id="home" className="relative h-screen">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
        showArrows={true}
        width={"100%"}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="relative w-full h-screen">
            <img
              src={banner.image}
              alt={`Banner ${banner.id}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
              <h1 className="text-4xl font-bold mb-4 text-center">
                Welcome To <br /> Smithfield Mini Mart Etc
              </h1>
              <p className="text-lg mb-6 max-w-2xl text-center">
                Your one-stop shop for all your grocery and household needs.
              </p>
              {/* <a
                href="#shop"
                className="bg-blue-500 px-6 py-3 text-white font-bold rounded hover:bg-red-500 transition"
              >
                Shop Now
              </a> */}
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default BannerSlider;
