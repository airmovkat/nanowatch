// src/components/ThemeToggle.jsx
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 relative transition-colors"
    >
      {/* Knob */}
      <span
        className={`absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center transition-all
        ${darkMode ? "translate-x-7" : "translate-x-0"}`}
      >
        {darkMode ? (
          <FaMoon className="text-gray-800 text-xs" />
        ) : (
          <FaSun className="text-yellow-500 text-xs" />
        )}
      </span>
    </button>
  );
}
