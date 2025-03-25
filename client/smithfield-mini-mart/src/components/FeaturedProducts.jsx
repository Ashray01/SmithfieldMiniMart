import React from "react";

const products = [
  {
    image: "/assets/alcohols.jpg",
  },
  {
    image: "/assets/groceries1.jpg",
  },
  {
    image: "/assets/groceries2.jpg",
  },
  {
    image: "/assets/coldbeverages.jpg",
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
      <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform group hover:scale-105 hover:z-20 relative"
          >
            <img src={product.image} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
