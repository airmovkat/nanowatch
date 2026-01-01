import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import FadeIn from "../components/FadeIn";

export default function Products() {
  const [products, setProducts] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPageLoaded(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbyPynzh8hiwwhwaL6-SD42dI_Ee6Qv-A-Toxj4Xi6b9BD-sEwMjzhyMblWLJSNtPRl6/exec")
      .then(res => res.json())
      .then(data => {
        /**
         * IMPORTANT:
         * ✔ Keep BOTH "yes" and "nill"
         * ❌ Do NOT filter only yes
         */
        setProducts(data);
      })
      .catch(err => console.error("Failed to load products", err));
  }, []);

  const categories = [
    "All",
    ...new Set(products.map(p => p.category).filter(Boolean))
  ];

  const filtered = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <FadeIn className={pageLoaded ? "opacity-100 transition-opacity duration-700" : "opacity-0"}>
      <div className="bg-white dark:bg-gray-900 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4">

          <h1 className="text-3xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400">
            Our Watches
          </h1>

          {/* Brand Filter */}
          <div className="mb-12 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/3">
              <label className="block mb-1 font-semibold text-gray-800 dark:text-white">
                Brand
              </label>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 rounded-lg
                           bg-white dark:bg-gray-700
                           text-gray-900 dark:text-white
                           border border-gray-300 dark:border-white
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((c) => (
                  <option
                    key={c}
                    value={c}
                    className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {filtered.length === 0 ? (
            <p className="text-center text-gray-500">Please wait...</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {filtered.map(p => (
                <ProductCard key={p.productID} product={p} />
              ))}
            </div>
          )}

        </div>
      </div>
    </FadeIn>
  );
}
