import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {
    id: 1,
    label: "Groceries",
    image:
      "https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_1280.jpg",
  },
  {
    id: 2,
    label: "Hygiene Product",
    image: "../src/assets/hygiene.jpg",
  },
  {
    id: 3,
    label: "Beauty & Cosmetics",
    image:
      "https://cdn.pixabay.com/photo/2020/04/02/05/19/beauty-4993472_1280.jpg",
  },
  {
    id: 4,
    label: "Animal Feedings Fertilizers",
    image: "../src/assets/fertilizer.png",
  },
];

const CategoriesShop = () => {
  return (
    <section className="py-5 overflow-hidden">
      <div className="container-lg">
        {/* Header Section */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex flex-wrap justify-between mb-4 ">
              <h2 className="section-title">Categories</h2>
              <div className="d-flex align-items-center ">
                <a href="#" className="btn btn-primary me-2">
                  View All
                </a>
                <div className="swiper-buttons">
                  <button className="swiper-prev categories-prev btn btn-yellow">
                    ❮
                  </button>
                  <button className="swiper-next categories-next btn btn-yellow">
                    ❯
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="row">
          <div className="col-md-12">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".categories-next",
                prevEl: ".categories-prev",
              }}
              slidesPerView={3}
              spaceBetween={15}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 10 },
                480: { slidesPerView: 3, spaceBetween: 10 },
                768: { slidesPerView: 4, spaceBetween: 15 },
                1024: { slidesPerView: 5, spaceBetween: 15 },
              }}
              className="categories-carousel"
            >
              {categories.map((category) => (
                <SwiperSlide
                  key={category.id}
                  className="text-center  hover:scale-105 transition-shadow duration-300"
                >
                  <a href="category.html" className="nav-link">
                    <img
                      src={category.image}
                      className="rounded-circle category-image"
                      alt={category.label}
                    />
                    <h4 className="fs-6 mt-3 fw-normal category-title">
                      {category.label}
                    </h4>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CategoriesShop;
