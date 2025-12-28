import FadeIn from "../components/FadeIn";
import { FaWhatsapp } from "react-icons/fa";


export default function Contact() {
  const whatsappNumber = "94771981273"; // replace if needed
  const phoneNumber = "+94 77 198 1273";

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 pt-28 pb-20">

      <section className="max-w-5xl mx-auto px-4">
        
        {/* TITLE */}
        <div className="text-center mb-12">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">
              Contact Us
            </h1>
          </FadeIn>

          <FadeIn>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Visit our store or contact us directly via phone or WhatsApp.
            </p>
          </FadeIn>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* CONTACT INFO */}
          <FadeIn>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow">
              <h2 className="text-2xl font-semibold mb-4">Store Information</h2>

              <p className="mb-2">
                📍 <strong>Address:</strong><br />
                No. 45, Main Street,<br />
                Colombo, Sri Lanka
              </p>

              <p className="mb-2">
                📞 <strong>Phone:</strong><br />
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {phoneNumber}
                </a>
              </p>

              <p className="mb-6">
                💬 <strong>WhatsApp:</strong><br />
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  +94 77 198 1273
                </a>
              </p>

              {/* WHATSAPP BUTTON WITH ICON */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                <FaWhatsapp className="text-xl" />
                Order via WhatsApp
              </a>
            </div>
          </FadeIn>

          {/* GOOGLE MAP */}
          <FadeIn>
            <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow">
              <iframe
                title="Store Location"
                src="https://www.google.com/maps?q=Colombo,Sri%20Lanka&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </FadeIn>

        </div>
      </section>

    </div>
  );
}
