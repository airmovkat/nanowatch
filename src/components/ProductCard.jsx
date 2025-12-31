import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductCard({ product }) {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const whatsappNumber = "94771981273";

  const isOutOfStock = (product.active || "").toLowerCase() === "nill";

  const handleOrder = () => {
    if (isOutOfStock) return; // Prevent ordering if out of stock
    const msg = `Hello, I want to order:
Product ID: ${product.productID}
Name: ${product.name}
Quantity: ${quantity}
Image: ${product.image}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const openModal = () => {
    setQuantity(1);
    setShowModal(true);
  };

  return (
    <>
      {/* Product Card */}
      <div
        onClick={openModal}
        className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden
                   transition-transform duration-300 hover:-translate-y-1 cursor-pointer will-change-transform"
      >
        {/* Product ID Badge */}
        <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-sm z-10
                         transform-gpu backface-hidden antialiased">
          {product.productID}
        </span>

        {/* Out of Stock Badge */}
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-20">
            <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
              OUT OF STOCK
            </span>
          </div>
        )}

        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-64 object-cover ${isOutOfStock ? "brightness-75" : ""}`}
        />

        {/* Product Info */}
        <div className="p-4 text-center relative z-10">
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">{product.name}</h3>
          <p className="text-gray-600 dark:text-gray-300">{product.price}</p>
          <button
            onClick={(e) => { e.stopPropagation(); openModal(); }}
            disabled={isOutOfStock}
            className={`mt-3 inline-flex items-center gap-2 text-white px-4 py-2 rounded-xl font-semibold transition
                        ${isOutOfStock ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
          >
            <FaWhatsapp /> Order Now
          </button>
        </div>
      </div>

      {/* Old Style Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 font-bold text-xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-64 object-cover rounded-xl mb-4 ${isOutOfStock ? "brightness-75" : ""}`}
            />
            <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-100">{product.name}</h3>
            <p className="mb-2 text-gray-600 dark:text-gray-300">Product ID: {product.productID}</p>

            {/* Stepper */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-800 dark:text-white"
                disabled={isOutOfStock}
              >
                −
              </button>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(5, quantity + 1))}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-800 dark:text-white"
                disabled={isOutOfStock}
              >
                +
              </button>
            </div>

            <button
              onClick={handleOrder}
              disabled={isOutOfStock}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-semibold mb-2 transition
                          ${isOutOfStock ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"} text-white`}
            >
              <FaWhatsapp /> {isOutOfStock ? "Out of Stock" : "Order via WhatsApp"}
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="w-full text-center text-sm text-gray-700 dark:text-gray-300 mt-1"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
