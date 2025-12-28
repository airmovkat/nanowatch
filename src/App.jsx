import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import GoToTop from "./components/GoToTop"; // ← import it
import SnowEffect from "./components/SnowEffect";
import AdPopup from "./components/AdPopup";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* Root Layout: flex-col ensures footer always at bottom */}
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        <SnowEffect />
        <AdPopup />
        {/* Fixed Navbar */}
        <Navbar />

        {/* Floating WhatsApp button (global) */}
        <FloatingWhatsApp />

        {/* Main content grows to push footer down */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
                {/* Go to Top button for the whole site */}
        <GoToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
