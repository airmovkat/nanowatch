import { useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import NewYearPendants from "./NewYearPendants";
import Sparkles from "./Sparkles";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">

        <div className="flex flex-col items-start leading-none relative">

          {/* LOGO WITH SPARKLES */}
          <Sparkles>
            <Link
              to="/"
              className="relative inline-flex items-center font-bold text-3xl
                 text-blue-600 dark:text-blue-400 no-text-jump"
            >
              <span className="relative inline-block mr-0.5">
                N
              </span>
              anoWatch
            </Link>
          </Sparkles>

          <div className="ml-6" style={{ marginTop: "-4px" }}>
            <NewYearPendants />
          </div>



        </div>


        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-6 items-center">
          {menuLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-semibold text-gray-800 dark:text-white
                         hover:text-blue-500 dark:hover:text-blue-300
                         transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="ml-3 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white dark:bg-gray-800 overflow-hidden"
          >
            {menuLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="block py-3 px-4 text-gray-800 dark:text-white
                           hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
