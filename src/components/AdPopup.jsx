import { useEffect, useState } from "react";

export default function AdPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    // Overlay (clicking this closes popup)
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]"
      onClick={() => setShow(false)}
    >
      {/* Popup content (stop click bubbling) */}
      <div
        className="relative max-w-sm w-[90%]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setShow(false)}
          className="absolute -top-3 -right-3 w-8 h-8
                     bg-red-600 hover:bg-red-700
                     rounded-full text-white font-bold
                     flex items-center justify-center
                     shadow-lg z-10"
        >
          ✕
        </button>

        {/* Advertisement Image */}
        <img
          src="/images/ad.jpg"
          alt="Advertisement"
          className="w-full rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
}
