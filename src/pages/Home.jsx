import { useState, useEffect } from "react";
import HeroCarousel from "../components/HeroCarousel";
import ProductCard from "../components/ProductCard";
import FadeIn from "../components/FadeIn";

export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => setPageLoaded(true), []);

  // Featured products with productID
  const featuredProducts = [
    {
      productID: "NW001",
      name: "Luxury Black Watch",
      price: "LKR 18,500",
      image:
        "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?q=80&w=764&auto=format&fit=crop",
    },
    {
      productID: "NW002",
      name: "Classic Silver Watch",
      price: "LKR 15,900",
      image:
        "https://images.unsplash.com/photo-1609587312208-cea54be969e7?q=80&w=1170&auto=format&fit=crop",
    },
    {
      productID: "NW003",
      name: "Sport Chronograph",
      price: "LKR 21,000",
      image:
        "https://images.unsplash.com/photo-1629581678313-36cf745a9af9?q=80&w=627&auto=format&fit=crop",
    },
  ];

  const features = [
    { title: "Premium Quality", subtitle: "Carefully selected watches with top-grade materials." },
    { title: "Fast WhatsApp Order", subtitle: "Order instantly via WhatsApp with quick responses." },
    { title: "Trusted Store", subtitle: "Hundreds of satisfied customers across Sri Lanka." },
  ];

  return (
    <FadeIn className={pageLoaded ? "opacity-100 transition-opacity duration-700" : "opacity-0"}>
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">

        {/* HERO */}
        <HeroCarousel />

        {/* ABOUT STORE */}
        <section className="py-16 text-center max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            Premium Men’s Watch Store
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Luxury & sport watches with fast ordering via WhatsApp.
          </p>
        </section>

        {/* FEATURED WATCHES */}
        <section className="py-20 bg-gray-100 dark:bg-gray-800">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">
            Featured Watches
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto px-4">
            {featuredProducts.map(product => (
              <ProductCard key={product.productID} product={product} />
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 text-center">
            {features.map((f, i) => (
              <div
                key={i}
                className="relative p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg
                           transform hover:-translate-y-2 hover:scale-105 transition duration-500
                           overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500
                                opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <h3 className="relative z-10 text-xl font-semibold">{f.title}</h3>
                <p className="relative z-10 mt-2 text-gray-600 dark:text-gray-300">{f.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </FadeIn>
  );
}
