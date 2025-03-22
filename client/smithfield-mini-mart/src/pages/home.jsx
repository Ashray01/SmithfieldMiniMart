import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerSlider from "../components/BannerSlider";
import ProductsOverView from "../components/ProductOverview";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6">
      <div className="mx-auto mt-5">
        <BannerSlider />

        {/* Section with ID for smooth scrolling */}
        <section id="productsOverview">
          <ProductsOverView />
        </section>

        <section id="featured">
          <FeaturedProducts />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>
      </div>
    </div>
  );
};

export default Home;
