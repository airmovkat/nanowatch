import { useEffect, useState } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Luxury Men’s Watches",
    subtitle: "Timeless design. Premium quality.",
  },
  {
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Premium Watch Collection",
    subtitle: "Style that defines your personality.",
  },
  {
    image: "https://images.unsplash.com/photo-1634394412850-b3a7571b334b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Order Easily via WhatsApp",
    subtitle: "Fast response. Trusted service.",
    
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000
            ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Text Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {slide.title}
              </h1>
              <p className="mt-4 text-lg text-gray-200">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
