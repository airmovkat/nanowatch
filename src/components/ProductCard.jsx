import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductCard({ product }) {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const whatsappNumber = "94771981273";

  const isOutOfStock =
    (product.active || "").toLowerCase() === "nill";

  const handleOrder = () => {
    if (isOutOfStock) return;

    const msg = `Hello, I want to order:
Product ID: ${product.productID}
Name: ${product.name}
Quantity: ${quantity}
Image: ${product.image}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const openModal = () => {
    setQuantity(1);
    setShowModal(true);
  };

  return (
    <>
      {/* CARD */}
      <div
        onClick={openModal}
        className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden
                   transition-transform duration-300 transform-gpu hover:-translate-y-1 hover:scale-[1.02]
                   cursor-pointer will-change-transform"
      >
        {/* Product ID */}
        <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-sm z-20">
          {product.productID}
        </span>

        {/* OUT OF STOCK OVERLAY */}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
            <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
              OUT OF STOCK
            </span>
          </div>
        )}

        {/* IMAGE */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover select-none"
          loading="lazy"
        />

        {/* CONTENT */}
        <div className="p-4 text-center relative z-20">
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
            {product.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {product.price}
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              openModal();
            }}
            disabled={isOutOfStock}
            className={`mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition
              ${
                isOutOfStock
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-green-500 hover:bg-green-600 text-white"
              }`}
          >
            <FaWhatsapp /> Order Now
          </button>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full relative">

            {/* CLOSE */}
            <button
              className="absolute top-2 right-2 text-xl font-bold text-gray-700 dark:text-gray-300"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            {/* IMAGE */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />

            <h3 className="font-bold text-xl mb-1 text-gray-800 dark:text-gray-100">
              {product.name}
            </h3>

            <p className="mb-2 text-gray-600 dark:text-gray-300">
              Product ID: {product.productID}
            </p>

            {/* OUT OF STOCK TEXT */}
            {isOutOfStock && (
              <div className="mb-4 text-center text-red-600 font-bold">
                This product is out of stock
              </div>
            )}

            {/* QUANTITY */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <button
                disabled={isOutOfStock}
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className={`px-3 py-1 rounded
                  ${
                    isOutOfStock
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-gray-200 dark:bg-gray-700"
                  }
                `}
              >
                −
              </button>

              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {quantity}
              </span>

              <button
                disabled={isOutOfStock}
                onClick={() => setQuantity(Math.min(5, quantity + 1))}
                className={`px-3 py-1 rounded
                  ${
                    isOutOfStock
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-gray-200 dark:bg-gray-700"
                  }
                `}
              >
                +
              </button>
            </div>

            {/* WHATSAPP */}
            <button
              onClick={handleOrder}
              disabled={isOutOfStock}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-semibold mb-2
                ${
                  isOutOfStock
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-green-500 hover:bg-green-600 text-white"
                }`}
            >
              <FaWhatsapp /> Order via WhatsApp
            </button>

            {/* CANCEL */}
            <button
              onClick={() => setShowModal(false)}
              className="w-full text-center text-sm text-gray-700 dark:text-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
