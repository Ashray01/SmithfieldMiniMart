import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const products = [
  {
    id: 1,
    name: "Whole Wheat  Bread",
    image:
      "https://cdn.pixabay.com/photo/2019/10/31/18/04/bread-4592486_1280.jpg",
    price: 40.0,
    originalPrice: 50.0,
  },
  {
    id: 2,
    name: "Organic Fresh Milk",
    image:
      "https://media.istockphoto.com/id/1394044503/photo/assortment-of-organic-vegan-non-dairy-milk-from-nuts-pine-nuts-oatmeal-rice-buckwheat-almonds.jpg?s=612x612&w=0&k=20&c=545B8vlG_I2_WDCLC-30zdnVnKeKL8nXHLnqBzrcK-0=",
    price: 60.0,
    originalPrice: 70.0,
  },
  {
    id: 3,
    name: "Brown Eggs Pack of 12",
    image:
      "https://cdn.pixabay.com/photo/2022/07/26/13/55/egg-7345934_1280.jpg",

    price: 120.0,
    originalPrice: 150.0,
  },
  {
    id: 4,
    name: "Fresh Apples (1kg)",
    image:
      "https://cdn.pixabay.com/photo/2022/09/16/16/09/harvest-7458975_1280.jpg",

    price: 200.0,
    originalPrice: 220.0,
  },
  {
    id: 5,
    name: "Fresh Vegetables (1kg)",
    image:
      "https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_960_720.jpg",

    price: 120.0,
    originalPrice: 150.0,
  },
  {
    id: 6,
    name: "Fresh Juice (1L)",
    image:
      "https://cdn.pixabay.com/photo/2024/04/12/07/28/ai-generated-8691287_1280.jpg",

    price: 200.0,
    originalPrice: 220.0,
  },
  {
    id: 7,
    name: "Fresh Bananas (1kg)",
    image:
      "https://cdn.pixabay.com/photo/2015/03/30/12/43/bananas-698608_960_720.jpg",
    price: 120.0,
    originalPrice: 150.0,
  },
  {
    id: 8,
    name: "Fresh Fruits Mix (1kg)",
    image:
      "https://cdn.pixabay.com/photo/2013/02/04/22/47/fruits-77946_1280.jpg",

    price: 200.0,
    originalPrice: 220.0,
  },
];

const BestSellingProducts = () => {
  return (
    <section className="container mx-auto p-6">
      <div className="row">
        <div className="col-md-12">
          <div className="section-header d-flex flex-wrap justify-between mb-4">
            <h2 className="section-title">Best Sellers</h2>
            <div className="d-flex align-items-center">
              <a href="#" className="btn btn-primary me-2">
                View All
              </a>
              <div className="swiper-buttons">
                <button className="swiper-prev best-sellers-prev btn btn-yellow">
                  ❮
                </button>
                <button className="swiper-next best-sellers-next btn btn-yellow">
                  ❯
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".best-sellers-next",
          prevEl: ".best-sellers-prev",
        }}
        slidesPerView={5}
        spaceBetween={15}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 3, spaceBetween: 10 },
          768: { slidesPerView: 4, spaceBetween: 15 },
          1024: { slidesPerView: 5, spaceBetween: 15 },
        }}
        className="best-sellers-carousel"
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            className="text-center flex flex-col w-full"
          >
            <div className="bg-white p-4 rounded-lg transition-all duration-300 transform group hover:scale-105 hover:z-20 relative flex flex-col h-full">
              <a href={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-4 rounded"
                />
              </a>
              <h3 className="text-lg font-medium mb-2 group-hover:whitespace-normal group-hover:overflow-visible group-hover:text-ellipsis group-hover:block truncate">
                {product.name}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold text-red-500">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              </div>
              {/* Quantity Selector and Add to Cart Button */}
              <div className="mt-auto">
                <input
                  type="number"
                  min="1"
                  defaultValue={1}
                  className="w-16 p-3 border border-gray-300 rounded-l-md text-center h-12"
                />
                <button className="bg-blue-500 text-white py-2 px-6 border border-blue-600 rounded-l-md hover:bg-blue-600 h-12">
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BestSellingProducts;
