"use client";

import * as motion from "motion/react-client";

export default function CtaSection() {
  return (
    <section className="py-32 bg-yellow-400 relative overflow-hidden">
      <div className="absolute inset-0 bg-asphalt opacity-20 pointer-events-none mix-blend-multiply"></div>
      
      <motion.div 
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      >
        <h2 className="font-sans text-5xl md:text-7xl font-black uppercase tracking-tighter text-neutral-950 leading-none mb-6 drop-shadow-sm">
          Stop Waiting. <br />
          <span className="text-neutral-100">Start Paving.</span>
        </h2>
        <p className="text-2xl text-neutral-900 font-bold mb-10 max-w-2xl mx-auto drop-shadow-sm">
          Secure your free estimate today before our schedule fills up for the season.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="tel:2483514794" className="bg-neutral-950 text-neutral-50 px-10 py-5 font-black uppercase tracking-widest text-lg hover:bg-neutral-900 transition-colors shadow-2xl hover:scale-105 duration-200">
            Call (248) 351-4794
          </a>
          <a href="#contact" className="bg-transparent border-4 border-neutral-950 text-neutral-950 px-10 py-5 font-black uppercase tracking-widest text-lg hover:bg-neutral-950 hover:text-yellow-400 transition-colors shadow-2xl hover:scale-105 duration-200">
            Get Online Quote
          </a>
        </div>
      </motion.div>
    </section>
  );
}
