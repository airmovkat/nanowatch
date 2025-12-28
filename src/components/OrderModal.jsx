import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function OrderModal({ product, onClose }) {
  const [qty, setQty] = useState(1);
  const whatsappNumber = "94771981273";

  const message = encodeURIComponent(
    `Product ID: ${product.productID}
Name: ${product.name}
Qty: ${qty}
Image: ${product.image}`
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-80">
        <h3 className="font-semibold mb-4 text-gray-800 dark:text-gray-100">{product.name}</h3>

        {/* Stepper quantity selector */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-100"
          >
            −
          </button>

          <span className="text-lg font-semibold text-gray-900 dark:text-white">{qty}</span>

          <button
            onClick={() => setQty(Math.min(5, qty + 1))}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-100"
          >
            +
          </button>
        </div>

        {/* WhatsApp order button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          className="flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded mb-2"
        >
          <FaWhatsapp /> Order via WhatsApp
        </a>

        <button
          onClick={onClose}
          className="text-sm w-full text-center text-gray-700 dark:text-gray-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
