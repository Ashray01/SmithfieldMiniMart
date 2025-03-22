import React from "react";

const offeredServices = [
  {
    title: "Groceries Galore",
    description:
      "Discover a wide variety of fresh produce, essential pantry staples, and unique specialty items—everything you need to create delicious and wholesome meals.",
    image: "../src/assets/groceries.png",
  },
  {
    title: "Health & Hygiene",
    description:
      "From personal care products to over-the-counter medications, we prioritize your health and well-being.",
    image: "../src/assets/health-and-hygiene.png",
  },
  {
    title: "Pet Care Essentials",
    description:
      "Find high-quality animal feed and fertilizers to keep your pets happy and your garden flourishing.",
    image: "../src/assets/fertilizers.png",
  },
];

export default function ProductsOverView() {
  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {offeredServices.map((item, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div>
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-semibold">{item.title}</h2>
              <p className="mt-4 text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
