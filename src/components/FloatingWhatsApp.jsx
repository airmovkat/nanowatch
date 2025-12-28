import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const whatsappNumber = "94771981273"; // your number

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 left-6 z-50
                 bg-green-500 hover:bg-green-600
                 text-white p-2.5 rounded-full
                 shadow-lg transition"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}
