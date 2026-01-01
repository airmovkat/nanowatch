import { useEffect, useState } from "react";
import HeroCarousel from "../components/HeroCarousel";
import ProductCard from "../components/ProductCard";
import FadeIn from "../components/FadeIn";

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPageLoaded(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbyPynzh8hiwwhwaL6-SD42dI_Ee6Qv-A-Toxj4Xi6b9BD-sEwMjzhyMblWLJSNtPRl6/exec?featured=yes"
    )
      .then((res) => res.json())
      .then((data) => {
        /**
         * IMPORTANT:
         * ❌ DO NOT filter active here
         * ✔ ProductCard decides OUT OF STOCK UI
         */
        setFeaturedProducts(data);
      })
      .catch((err) =>
        console.error("Failed to load featured products", err)
      );
  }, []);

  const features = [
    {
      title: "Premium Quality",
      subtitle: "Carefully selected watches with top-grade materials.",
    },
    {
      title: "Fast WhatsApp Order",
      subtitle: "Order instantly via WhatsApp with quick responses.",
    },
    {
      title: "Trusted Store",
      subtitle: "Hundreds of satisfied customers across Sri Lanka.",
    },
  ];

  return (
    <FadeIn
      className={
        pageLoaded
          ? "opacity-100 transition-opacity duration-700"
          : "opacity-0"
      }
    >
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">

        <HeroCarousel />

        {/* ABOUT */}
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

          {featuredProducts.length === 0 ? (
            <p className="text-center text-gray-500">
              No featured products available
            </p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto px-4">
              {featuredProducts.map((p) => (
                <ProductCard key={p.productID} product={p} />
              ))}
            </div>
          )}
        </section>

        {/* FEATURE CARDS */}
        <section className="py-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 text-center">
            {features.map((f, i) => (
              <div
                key={i}
                className="relative p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg
                           transform-gpu backface-hidden
                           hover:-translate-y-2 hover:scale-105
                           transition-transform duration-500
                           overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <h3 className="relative z-10 text-xl font-semibold">
                  {f.title}
                </h3>
                <p className="relative z-10 mt-2 text-gray-600 dark:text-gray-300">
                  {f.subtitle}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </FadeIn>
  );
}
