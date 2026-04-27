"use client";

import { FileSearch, Calculator, Drum } from "lucide-react"; // Using Drum as a proxy for Roller/Machinery
import * as motion from "motion/react-client";

export default function Process() {
  return (
    <section className="py-24 bg-neutral-900 border-t border-neutral-800 relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 flex justify-evenly pointer-events-none opacity-5">
        <div className="w-px h-full bg-white"></div>
        <div className="w-px h-full bg-white"></div>
        <div className="w-px h-full bg-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sans text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
            Our Battle <span className="text-orange-500">Strategy</span>
          </h2>
          <p className="text-xl text-neutral-400">
            Three simple steps to totally upgrade your property&apos;s exterior. We handle the heavy lifting so you don&apos;t have to stress.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <motion.div 
            className="bg-neutral-950 border border-neutral-800 p-8 relative group hover:border-orange-500 transition-colors shadow-lg hover:-translate-y-2 duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="absolute -top-6 -right-6 text-8xl font-sans font-black text-neutral-800/50 group-hover:text-neutral-800 transition-colors z-0">01</span>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-neutral-900 flex items-center justify-center border border-neutral-700 mb-8 mt-4 group-hover:bg-orange-500 group-hover:text-neutral-950 transition-colors">
                <FileSearch size={32} />
              </div>
              <h3 className="font-sans text-2xl font-bold uppercase tracking-tight mb-4">Request Estimate</h3>
              <p className="text-neutral-400">Call us or submit our quick online form. Tell us about your cracks, potholes, or new project ideas.</p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-neutral-950 border border-neutral-800 p-8 relative group hover:border-orange-500 transition-colors shadow-lg hover:-translate-y-2 duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="absolute -top-6 -right-6 text-8xl font-sans font-black text-neutral-800/50 group-hover:text-neutral-800 transition-colors z-0">02</span>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-neutral-900 flex items-center justify-center border border-neutral-700 mb-8 mt-4 group-hover:bg-orange-500 group-hover:text-neutral-950 transition-colors">
                <Calculator size={32} />
              </div>
              <h3 className="font-sans text-2xl font-bold uppercase tracking-tight mb-4">On-Site Evaluation</h3>
              <p className="text-neutral-400">We inspect the ground, measure the exact square footage, and provide a brutally honest, highly competitive quote.</p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-neutral-950 border border-orange-500 p-8 relative group shadow-[0_0_30px_rgba(249,115,22,0.1)] hover:shadow-[0_0_40px_rgba(249,115,22,0.2)] transition-all hover:-translate-y-2 duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-warning-stripes opacity-10"></div>
            <span className="absolute -top-6 -right-6 text-8xl font-sans font-black text-neutral-800/50 group-hover:text-orange-500/20 transition-colors z-0">03</span>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-orange-500 text-neutral-950 flex items-center justify-center border border-orange-400 mb-8 mt-4">
                <Drum size={32} />
              </div>
              <h3 className="font-sans text-2xl font-bold uppercase tracking-tight mb-4">Execution</h3>
              <p className="text-neutral-300">Our heavy-duty fleet rolls in. We pave, we clean up perfectly, and we leave you with a flawless new surface.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
