import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function GoToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-6 p-3 rounded-full shadow-lg
                  bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900
                  transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}
                  pointer-events-${visible ? "auto" : "none"} z-50`}
      aria-label="Go to top"
    >
      <FaArrowUp />
    </button>
  );
}
