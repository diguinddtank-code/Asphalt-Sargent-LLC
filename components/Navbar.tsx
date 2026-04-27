"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-sans font-bold text-2xl tracking-tighter uppercase flex items-center gap-2">
              <span className="bg-yellow-400 text-neutral-950 px-2 py-1 rotate-[-2deg]">Asphalt</span>
              <span>Sargent</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="#services" className="text-sm font-semibold hover:text-yellow-400 transition-colors uppercase tracking-wider">Services</Link>
            <Link href="#why-us" className="text-sm font-semibold hover:text-yellow-400 transition-colors uppercase tracking-wider">Why Us</Link>
            <Link href="#portfolio" className="text-sm font-semibold hover:text-yellow-400 transition-colors uppercase tracking-wider">Portfolio</Link>
            <Link href="#testimonials" className="text-sm font-semibold hover:text-yellow-400 transition-colors uppercase tracking-wider">Reviews</Link>
            <Link href="#contact" className="text-sm font-semibold hover:text-yellow-400 transition-colors uppercase tracking-wider">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center">
            <a href="tel:2483514794" className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-neutral-950 px-6 py-3 rounded-none font-bold uppercase tracking-wide transition-all transform hover:-translate-y-0.5 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]">
              <Phone size={18} fill="currentColor" />
              <span>(248) 351-4794</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-neutral-50 hover:text-yellow-400 transition-colors p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900 border-b border-neutral-800">
          <div className="px-4 pt-2 pb-6 flex flex-col space-y-4">
            <Link href="#services" onClick={() => setIsOpen(false)} className="text-lg font-semibold hover:text-yellow-400 uppercase tracking-wider py-2">Services</Link>
            <Link href="#why-us" onClick={() => setIsOpen(false)} className="text-lg font-semibold hover:text-yellow-400 uppercase tracking-wider py-2">Why Us</Link>
            <Link href="#portfolio" onClick={() => setIsOpen(false)} className="text-lg font-semibold hover:text-yellow-400 uppercase tracking-wider py-2">Portfolio</Link>
            <Link href="#testimonials" onClick={() => setIsOpen(false)} className="text-lg font-semibold hover:text-yellow-400 uppercase tracking-wider py-2">Reviews</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="text-lg font-semibold hover:text-yellow-400 uppercase tracking-wider py-2">Contact</Link>
            <a href="tel:2483514794" className="mt-4 flex items-center justify-center gap-2 bg-yellow-400 text-neutral-950 px-6 py-4 font-bold uppercase tracking-wide">
              <Phone size={20} fill="currentColor" />
              <span>Call (248) 351-4794</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
