import { ArrowRight, ShieldCheck, MapPin, Star, Phone } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";

const conversionItems = [
  "Free Estimates",
  "Fully Licensed & Insured",
  "Premium Asphalt",
  "Commercial Paving",
  "Residential Driveways",
  "100% Satisfaction",
  "Locally Owned"
];
const duplicatedBanner = [...conversionItems, ...conversionItems, ...conversionItems, ...conversionItems];

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] lg:h-[100svh] flex flex-col items-center justify-center pt-24 lg:pt-0 pb-24 lg:pb-24 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0 bg-neutral-950">
        <Image
          src="/regenerated_image_1777327242873.png"
          alt="Asphalt background"
          fill
          className="object-cover object-center brightness-[0.2] mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent z-10"></div>
        {/* Subtle grid and asphalt pattern over the empty background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,black,transparent)] opacity-40 z-10"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        
        {/* Left Column Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full text-left"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-800/40 backdrop-blur-md text-neutral-100 font-bold uppercase tracking-wider text-xs border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              <Star size={14} className="text-orange-500 fill-orange-500" />
              Top Rated in Southfield, MI
            </span>
          </div>

          <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-[clamp(3.5rem,5.5vw,5.5rem)] xl:text-[clamp(4.5rem,6vw,6rem)] font-extrabold uppercase leading-[0.9] tracking-tighter mb-4 text-neutral-50 drop-shadow-xl">
            Get a <span className="text-orange-500 inline-block rotate-[-1deg]">Smooth</span>,<br className="hidden sm:block" />
            <span className="underline decoration-orange-500 underline-offset-8">Durable</span> Driveway<br className="hidden sm:block lg:hidden xl:block" />
            That Lasts
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-[clamp(1.125rem,1.5vw,1.35rem)] text-neutral-300 font-medium mb-8 max-w-2xl border-l-4 border-orange-500 pl-4 lg:pl-6 leading-relaxed">
            Stop dealing with cracks, potholes, and unsafe surfaces. We deliver premium asphalt paving and concrete solutions for residential and commercial properties.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10 max-w-2xl">
            <a href="#contact" className="group flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-neutral-950 px-6 py-4 lg:py-5 font-extrabold uppercase tracking-widest text-sm lg:text-base transition-all transform hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]">
              Get Free Estimate
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:2483514794" className="flex-1 flex items-center justify-center gap-2 bg-neutral-900/80 backdrop-blur-sm hover:bg-neutral-800 text-neutral-50 px-6 py-4 lg:py-5 font-bold uppercase tracking-widest text-sm lg:text-base transition-colors border border-neutral-700 hover:border-orange-500">
              <Phone size={20} className="fill-current text-orange-500" />
              Call (248) 351-4794
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 opacity-80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-orange-500" size={24} />
              <span className="font-semibold text-sm uppercase tracking-wide">20+ Years Exp</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-orange-500" size={24} />
              <span className="font-semibold text-sm uppercase tracking-wide">Locally Owned</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Star className="text-orange-500 fill-orange-500" size={24} />
              <span className="font-semibold text-sm uppercase tracking-wide">Fully Licensed</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column Content - Aesthetic Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:block relative flex-1 w-full max-w-lg xl:max-w-xl"
        >
          {/* Aesthetic brutalist accent frame */}
          <div className="absolute inset-0 bg-orange-500 translate-x-4 translate-y-4"></div>
          
          <div className="w-full aspect-[4/5] max-h-[70vh] relative z-10">
            <Image
              src="/regenerated_image_1777327241263.png"
              alt="Asphalt machinery"
              fill
              className="object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* overlaid label */}
          <div className="absolute -bottom-6 -left-6 z-20 bg-neutral-900 border border-neutral-800 p-5 shadow-2xl">
            <p className="font-sans font-bold text-2xl lg:text-3xl uppercase tracking-tight leading-none mb-1 text-white">Commercial</p>
            <p className="font-sans font-bold text-2xl lg:text-3xl uppercase tracking-tight text-neutral-500 leading-none">& Residential</p>
          </div>
        </motion.div>

      </div>

      {/* Road Marquee Banner - Bottom of Hero */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-neutral-950 border-t-4 border-b-4 border-neutral-900 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] z-20 h-16 sm:h-20 flex items-center">
        {/* Subtle background road texture (noise) */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>

        <div className="flex w-max animate-marquee items-center relative z-10">
          {duplicatedBanner.map((item, idx) => (
            <div key={idx} className="flex items-center whitespace-nowrap">
              <span className="text-xs sm:text-sm md:text-base font-black uppercase tracking-[0.2em] text-neutral-300 px-6 sm:px-10">
                {item}
              </span>
              {/* Dashed Road Line */}
              <div className="w-12 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-yellow-400 skew-x-[-15deg] opacity-90 shadow-[0_0_12px_rgba(250,204,21,0.8)]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
