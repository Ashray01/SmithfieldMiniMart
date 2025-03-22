import React from "react";

const products = [
  {
    name: "Fertilizers",
    price: "$5000.00",
    image: "/assets/Image2.jpg",
  },
  {
    name: "One A Day® Women’s VitaCraves® Gummies",
    price: "$200.00 per 10 gummies",
    image: "/assets/one-a-day.png",
  },
  {
    name: "Grace Tomato Ketchup 3.8 L / 128.5 ozs",
    price: "$1850.00",
    image: "/assets/ketchup.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-[#221D0F] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">
          Quality Products for Everyone
        </h2>
        <p className="mt-2 text-gray-400">
          Affordable choices for every household.
        </p>
      </div>

      {/* Product Grid */}
      <div className="mt-8 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform group hover:scale-105 hover:z-20 relative"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-blue-600 font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
