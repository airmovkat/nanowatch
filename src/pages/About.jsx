import { useEffect, useState } from "react";
import FadeIn from "../components/FadeIn";

export default function About() {
  const [pageLoaded, setPageLoaded] = useState(false);

  // Trigger page fade-in
  useEffect(() => {
    const timer = setTimeout(() => setPageLoaded(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      title: "Authenticity Guaranteed",
      subtitle: "All watches are 100% genuine and sourced from authorized suppliers.",
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
    },
    {
      title: "Luxury & Style",
      subtitle: "Curated collection of premium brands to suit your style.",
      gradient: "from-yellow-400 via-red-400 to-pink-500",
    },
    {
      title: "Order via WhatsApp",
      subtitle: "Easy ordering and fast response directly through WhatsApp.",
      gradient: "from-green-400 to-blue-500",
    },
  ];

  return (
    <FadeIn className={pageLoaded ? "opacity-100 transition-opacity duration-700" : "opacity-0"}>
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 pt-28 pb-20">

        {/* ABOUT HERO */}
        <section className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">
            NanoWatch
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            At NanoWatch, we offer a curated collection of premium men’s watches that combine timeless design with exceptional craftsmanship. Each timepiece is crafted for quality, precision, and style, ensuring it complements every occasion—from formal events to everyday wear. Our dedicated team is passionate about helping watch enthusiasts discover the perfect watch, offering expert guidance, personalized recommendations, and unparalleled customer service. At NanoWatch, it’s not just about telling time—it’s about making a statement.
          </p>
        </section>

        {/* WHY CHOOSE US / FEATURES */}
        <section className="mt-16 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((item, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl shadow-md bg-white dark:bg-gray-800
                         transition-all duration-500 transform hover:-translate-y-2 hover:scale-105
                         overflow-hidden cursor-pointer group`}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0
                            group-hover:opacity-30 transition-opacity duration-500 rounded-2xl`}
              ></div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </section>

      </div>
    </FadeIn>
  );
}
