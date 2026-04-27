"use client";

import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolling down a bit (past Hero)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <a 
        href="tel:2483514794" 
        className="group flex items-center justify-center gap-3 bg-orange-500 text-neutral-950 px-6 py-4 rounded-full shadow-[0_10px_30px_rgba(249,115,22,0.3)] hover:bg-orange-400 hover:scale-105 transition-all outline outline-4 outline-transparent hover:outline-orange-500/30"
      >
        <Phone size={24} className="fill-current" />
        <span className="font-bold uppercase tracking-widest text-sm hidden md:inline">Call (248) 351-4794</span>
      </a>
    </div>
  );
}
