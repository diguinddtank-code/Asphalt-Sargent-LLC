"use client";

/* 
  Requisitos e Configurações Tailwind (Instrução):
  A animação scroll e keyframes já foram injetadadas nativamente no arquivo `/app/globals.css` 
  através da diretiva @theme do novo Tailwind v4. Não é necessário alterar tailwind.config.ts!
*/

import { Star, CheckCircle2 } from "lucide-react";
import Counter from "./Counter";
import Image from "next/image";

const reviews = [
  {
    name: "Robert D.",
    date: "2 days ago",
    rating: 5,
    text: "Asphalt Sargent completely tore out and replaced our 30,000 sq ft parking lot. They stayed on schedule, the crew was extremely disciplined, and the result is magnificent.",
    service: "Commercial Paving",
    city: "Southfield, MI"
  },
  {
    name: "Sarah M.",
    date: "1 week ago",
    rating: 5,
    text: "We had a nightmare driveway full of cracks and a huge sinkhole. The Sargent crew came out and fixed it perfectly. The hot mix they use is no joke.",
    service: "Driveway Install",
    city: "Farmington Hills, MI"
  },
  {
    name: "James T.",
    date: "3 weeks ago",
    rating: 5,
    text: "Great pricing and straightforward communication. No hidden fees. The sealcoating and fresh lines made our storefront look brand new overnight.",
    service: "Sealcoating",
    city: "Detroit, MI"
  },
  {
    name: "Michael L.",
    date: "1 month ago",
    rating: 5,
    text: "Called five different companies. Asphalt Sargent was the only one that actually showed up on time for the quote and explained everything in detail. The new driveway looks pristine.",
    service: "New Install",
    city: "Royal Oak, MI"
  },
  {
    name: "David W.",
    date: "2 months ago",
    rating: 5,
    text: "They sealed the entire neighborhood's roads. Fast, clean, and incredible attention to detail. Barely disrupted our residents' day-to-day. We found our long-term contractor.",
    service: "HOA Road Paving",
    city: "Novi, MI"
  }
];

export default function Testimonials() {
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section id="testimonials" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-asphalt opacity-30 pointer-events-none"></div>

      {/* 1. HEADER E ESTATÍSTICAS AO VIVO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-4 flex items-center justify-center md:justify-start gap-2">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Verified Reviews
            </h2>
            <h3 className="text-4xl md:text-5xl font-sans font-black text-neutral-50 mb-4 tracking-tight">
              Southfield&apos;s Trusted <span className="text-neutral-500">Contractor</span>
            </h3>
            <p className="text-neutral-400 text-lg">
              Real stories from homeowners and property managers in Oakland County. We don&apos;t just pour asphalt; we build lasting reliability.
            </p>
          </div>

          <div className="flex gap-8 bg-neutral-900 p-6 rounded-2xl shadow-xl border border-neutral-800 transform rotate-1 md:rotate-0 hover:rotate-0 transition-transform duration-300 relative">
             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
             
             <div className="text-center px-4 border-r border-neutral-800">
               <p className="text-4xl font-bold text-neutral-50 mb-1">
                 <Counter end={4.9} duration={2000} decimals={1} />
               </p>
               <div className="flex justify-center mb-2">
                 {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#FBBC05] text-[#FBBC05] mx-0.5" />
                 ))}
               </div>
               <p className="text-xs text-neutral-500 uppercase tracking-wider font-bold">Avg Rating</p>
             </div>

             <div className="text-center px-4">
               <p className="text-4xl font-bold text-neutral-50 mb-1">
                 <Counter end={128} duration={2000} />+
               </p>
               <p className="text-sm font-medium text-emerald-500 mb-1">100% Recommended</p>
               <p className="text-xs text-neutral-500 uppercase tracking-wider font-bold">Total Reviews</p>
             </div>
          </div>

        </div>
      </div>

      {/* 2. MARQUEE INFINITO DE CARDS */}
      <div className="relative w-full mb-20 overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-max animate-scroll group hover:[animation-play-state:paused] gap-6 px-4">
          {duplicatedReviews.map((review, idx) => (
            <div key={idx} className="w-[320px] md:w-[380px] bg-neutral-900/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-neutral-800 flex flex-col hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:-translate-y-1 transition-all duration-300 relative shrink-0 select-none cursor-default group/card">
               
               <div className="flex justify-between items-start mb-4">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-800 flex-shrink-0">
                     <Image 
                       src={`https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=111111&color=f97316`} 
                       alt={review.name}
                       width={40} height={40} className="w-full h-full object-cover" 
                     />
                   </div>
                   <div>
                     <p className="font-bold text-neutral-50 text-sm tracking-wide">{review.name}</p>
                     <p className="text-[10px] text-neutral-500 font-medium">{review.date}</p>
                   </div>
                 </div>
                 <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 opacity-30 grayscale group-hover/card:grayscale-0 transition-all">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                 </svg>
               </div>

               <div className="flex items-center justify-between mb-4">
                 <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#FBBC05] text-[#FBBC05] mr-0.5" />
                    ))}
                 </div>
                 {/* Glassmorphism Pill */}
                 <span className="text-[10px] bg-white/5 backdrop-blur-md text-neutral-300 px-3 py-1 rounded-full font-bold uppercase tracking-wider border border-white/10">
                   {review.service}
                 </span>
               </div>

               <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-4">
                 &quot;{review.text}&quot;
               </p>

               <div className="mt-auto pt-4 border-t border-neutral-800/60 flex items-center gap-1.5 text-blue-500">
                 <CheckCircle2 size={14} className="fill-blue-500/10" />
                 <span className="text-xs font-semibold tracking-wide">Verified Customer</span>
                 <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider ml-auto">
                   {review.city}
                 </span>
               </div>

            </div>
          ))}
        </div>
      </div>

      {/* 3. CTA BLOCK COM GRADIENTE */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="relative bg-gradient-to-br from-orange-600 to-neutral-900 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl border border-orange-500/20">
          
          {/* Blur circular solto no topo direito */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-400 opacity-30 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="text-center md:text-left max-w-xl">
                <h4 className="text-3xl md:text-5xl font-sans font-black uppercase text-white mb-4 tracking-tight leading-none">
                  Ready for a <span className="text-neutral-900 drop-shadow-sm">Solid</span> Surface?
                </h4>
                <p className="text-orange-100 text-lg font-medium">
                  Join hundreds of satisfied business owners and homeowners locally. 
                  Secure your project timeline today.
                </p>
             </div>

             <div className="flex flex-col sm:flex-row gap-4 items-center relative">
                {/* Badge Desktop apenas */}
                <div className="hidden lg:flex absolute -top-12 -left-6 bg-neutral-950 border border-neutral-800 text-orange-500 px-4 py-2 rounded-full items-center gap-2 animate-pulse shadow-xl z-20">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="font-bold text-xs tracking-widest uppercase">A+ Quality</span>
                </div>

                <a href="#contact" className="bg-yellow-400 hover:bg-yellow-300 text-neutral-950 font-black uppercase tracking-widest px-8 py-4 rounded-full transition-all transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(250,204,21,0.3)] text-center w-full sm:w-auto text-sm">
                   Get Free Estimate
                </a>
                <a href="tel:2483514794" className="border-2 border-white/20 text-white hover:bg-white/10 font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all backdrop-blur-sm text-center w-full sm:w-auto text-sm">
                   Call Us Now
                </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
