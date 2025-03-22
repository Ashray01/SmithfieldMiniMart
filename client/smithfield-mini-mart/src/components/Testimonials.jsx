export default function Testimonials() {
  const testimonials = [
    {
      img: "../src/assets/customer-review.jpg",
      title: "Great Service!",
      description:
        "I always find what I need at Smithfield Mini Mart. The staff is friendly and helpful!",
    },
    {
      img: "../src/assets/customer-review.jpg",
      title: "Wide Selection",
      description:
        "Their variety of products is impressive! I can get everything I need in one stop.",
    },
    {
      img: "../src/assets/customer-review.jpg",
      title: "Affordable Prices",
      description:
        "I love the prices here! I always leave feeling like I got a great deal.",
    },
  ];

  return (
    <div className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-semibold text-gray-800">
        What Our Customers Say
      </h2>
      <p className="text-gray-600 mt-2">Hear from those who shop with us.</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
