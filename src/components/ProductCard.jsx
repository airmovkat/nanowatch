import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductCard({ product }) {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const whatsappNumber = "94771981273";

  const handleOrder = () => {
    const msg = `Hello, I want to order:
Product ID: ${product.productID}
Name: ${product.name}
Quantity: ${quantity}
Image: ${product.image}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const openModal = () => {
    setQuantity(1); // Reset quantity every time modal opens
    setShowModal(true);
  };

  return (
    <>
      <div
        onClick={openModal}
        className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden
                   transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
      >
        {/* Product ID badge */}
        <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-sm z-10">
          {product.productID}
        </span>

        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />

        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">{product.name}</h3>
          <p className="text-gray-600 dark:text-gray-300">{product.price}</p>
          <button
            onClick={e => { e.stopPropagation(); openModal(); }}
            className="mt-3 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl font-semibold transition"
          >
            <FaWhatsapp /> Order Now
          </button>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 font-bold text-xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-xl mb-4" />
            <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-100">{product.name}</h3>
            <p className="mb-2 text-gray-600 dark:text-gray-300">Product ID: {product.productID}</p>

            {/* Stepper quantity selector */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-100"
              >
                −
              </button>

              <span className="text-lg font-semibold text-gray-900 dark:text-white">{quantity}</span>

              <button
                onClick={() => setQuantity(Math.min(5, quantity + 1))}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-100"
              >
                +
              </button>
            </div>

            <button
              onClick={handleOrder}
              className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl font-semibold transition mb-2"
            >
              <FaWhatsapp /> Order via WhatsApp
            </button>

            {/* Cancel button restored */}
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
