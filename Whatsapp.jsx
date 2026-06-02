// 
import { MessageCircle } from "lucide-react";
import { motion as m } from "motion/react";

export default function Whatsapp() {
  return (
    <m.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: 1.5,
        duration: 0.6,
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
    >
      <a
        href="https://wa.me/254714058073"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center"
      >
        {/* Tooltip */}
        <span
          className="
          absolute right-16
          whitespace-nowrap
          rounded-full
          bg-black
          px-4 py-2
          text-sm text-white
          opacity-0
          translate-x-2
          transition-all
          duration-300
          group-hover:opacity-100
          group-hover:translate-x-1
        "
        >
          Chat with us
        </span>

        {/* Button */}
        <m.div
          whileHover={{
            scale: 1.08,
            rotate: 3,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            relative
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-green-500
            text-white
            shadow-[0_8px_30px_rgba(34,197,94,0.35)]
            transition-all
            duration-300
            hover:shadow-xl
          "
        >
          <MessageCircle size={30} strokeWidth={2.2} />

          {/* Online Indicator */}
          <span className="absolute top-2 right-2 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
          </span>
        </m.div>
      </a>
    </m.div>
  );
}