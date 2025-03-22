import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    console.log("Observing sections:", sections);

    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id); // Choose the section closest to the top
          console.log(`Active section: ${visibleSections[0].target.id}`);
        }
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleScroll = (id) => {
    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error(`Section with ID "${id}" not found!`);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-800 bg-opacity-80 text-white py-4 px-6 flex justify-between items-center z-50 shadow-md">
      {/* Logo and Store Name */}
      <Link to="/" className="flex items-center gap-3">
        <img
          src="/src/assets/logo.jpg"
          alt="Smithfield Mini-Mart"
          className="h-10"
        />
        <h3 className="font-bold text-lg">
          <span className="text-red-400">SmithField</span>{" "}
          <span className="text-white">Mini Mart Etc</span>
        </h3>
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-6 text-sm">
        <button
          onClick={() => handleScroll("productsOverview")}
          className={`hover:text-gray-300 transition ${
            activeSection === "productsOverview"
              ? "text-yellow-400 font-bold"
              : ""
          }`}
        >
          Products Overview
        </button>
        <button
          onClick={() => handleScroll("featured")}
          className={`hover:text-gray-300 transition ${
            activeSection === "featured" ? "text-yellow-400 font-bold" : ""
          }`}
        >
          Featured Products
        </button>
        <button
          onClick={() => handleScroll("testimonials")}
          className={`hover:text-gray-300 transition ${
            activeSection === "testimonials" ? "text-yellow-400 font-bold" : ""
          }`}
        >
          Customers Review
        </button>
      </nav>

      {/* Menu & User Icon */}
      <Link className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 hover:bg-blue-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Link>
    </header>
  );
}
