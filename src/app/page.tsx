"use client";

import React, { useEffect } from "react";
import Link from "next/link";

const Home: React.FC = () => {
  const destinations = [
    {
      name: "Paris, France",
      image:
        "https://www.agoda.com/wp-content/uploads/2024/03/Featured-image-Eiffel-Tower-Paris-France-1244x700.jpg",
    },
    {
      name: "Bali, Indonesia",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Tokyo, Japan",
      image:
        "https://lp-cms-production.imgix.net/2025-07/shutterstock247901467.jpg?auto=compress&format=auto&fit=crop&q=50&w=1200&h=800",
    },
    {
      name: "New York, USA",
      image:
        "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg",
    },
    {
      name: "Santorini, Greece",
      image:
        "https://sothebysrealty.gr/wp-content/uploads/2016/11/Santorini-sunset-at-dawn-Greece-Sothebys-International-Realty.jpg",
    },
    {
      name: "Swiss Alps, Switzerland",
      image:
        "https://deih43ym53wif.cloudfront.net/small_zermatt-matterhorn-switzerland-shutterstock_1298208013_44fea015e5.jpeg",
    },
  ];

  useEffect(() => {}, []);

  return (
    <div className="relative flex min-h-screen flex-col bg-zinc-50 font-sans text-zinc-800 dark:bg-gray dark:text-zinc-100 b">
      {/* Global MotionCursor handles the custom cursor */}

      {/* 🌅 Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center h-[90vh] text-center bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Explore the World with{" "}
            <span className="text-blue-400">Travel Explorer</span>
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-zinc-200">
            Discover breathtaking destinations, book your next adventure, and
            make memories that last forever.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#destinations"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Start Exploring
            </Link>
            <Link
              href="../components/login/LoginForm"
              className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-medium transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* 🏖️ Destinations Section */}
      <section id="destinations" className="py-20 px-8 bg-white ">
        <h2 className="text-4xl font-bold text-blue-400 text-center mb-12">
          Popular Destinations
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {destinations.map((place, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <div
                className="w-full h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${place.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
              <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                {place.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ✈️ Call-to-Action Section */}
      <section
        id="about"
        className="py-20 bg-blue-500 text-white text-center flex flex-col items-center"
      >
        <h2 className="text-4xl font-bold mb-4">
          Plan Your Dream Vacation Today
        </h2>
        <p className="max-w-xl mb-8 text-lg">
          Join thousands of travelers discovering new adventures with Travel
          Explorer. Let’s make your next trip unforgettable.
        </p>
        <a
          href="#"
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-zinc-100 transition-colors"
        >
          Get Started
        </a>
      </section>

      {/* 🌍 Footer */}
      <footer className="py-6 bg-zinc-100 text-center text-sm text-zinc-700 ">
        © {new Date().getFullYear()} Travel Explorer. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;