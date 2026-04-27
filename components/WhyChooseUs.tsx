"use client";

import { Clock, DollarSign, PenTool, HardHat } from "lucide-react";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-neutral-900 border-y border-neutral-800 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            className="order-2 lg:order-1 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Split layout images */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="space-y-4 pt-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative h-64 shadow-[8px_8px_0px_0px_rgba(249,115,22,1)] overflow-hidden group">
                  <Image src="https://picsum.photos/seed/crew1/600/800" alt="Construction crew" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="relative h-48 border border-neutral-800 overflow-hidden group">
                  <Image src="https://picsum.photos/seed/equipment/600/500" alt="Equipment" fill className="object-cover brightness-75 grayscale sepia-[.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
              </motion.div>
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="relative h-48 border border-neutral-800 overflow-hidden group">
                  <Image src="https://picsum.photos/seed/trucks/600/500" alt="Fleets" fill className="object-cover brightness-75 grayscale sepia-[.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="relative h-80 shadow-[8px_8px_0px_0px_rgba(31,41,55,1)] overflow-hidden group">
                  <Image src="https://picsum.photos/seed/finishings/600/1000" alt="Finished details" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
              </motion.div>
            </div>
            {/* Floating Trust Badge */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-neutral-950 p-6 shadow-2xl z-10 flex flex-col items-center justify-center rounded-sm border-4 border-neutral-950"
              initial={{ scale: 0, x: "-50%", y: "-50%", rotate: -10 }}
              whileInView={{ scale: 1, x: "-50%", y: "-50%", rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, delay: 0.6 }}
            >
              <span className="font-sans font-black text-5xl leading-none">20+</span>
              <span className="font-bold uppercase tracking-wider text-sm mt-1">Years Built</span>
            </motion.div>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">No Shortcuts</span>
            <h2 className="font-sans text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
              Why <span className="text-neutral-500">Local Owners</span> Choose Us
            </h2>
            
            <p className="text-lg text-neutral-400 mb-10 border-l-4 border-orange-500 pl-4">
              We didn&apos;t last 20 years in Southfield by cutting corners. We do the job right the first time, using commercial-grade materials and battle-tested crews.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Clock, title: "20+ Years Experience", desc: "Decades of handling Michigan's tough weather means we know what materials survive and what fails." },
                { icon: DollarSign, title: "Competitive Pricing", desc: "Fair, honest quotes with no hidden fees and no sudden upcharges halfway through the job." },
                { icon: HardHat, title: "Reliable Crews", desc: "Our operators show up on time, maintain a clean site, and respect your property entirely." },
                { icon: PenTool, title: "Any Project Size", desc: "From massive commercial strip malls to small residential driveways, we bring the same heavy-duty equipment." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                >
                  <item.icon className="text-orange-500 mb-4" size={32} />
                  <h3 className="font-sans text-xl font-bold uppercase tracking-tight mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12">
              <a href="#contact" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-400 text-neutral-950 px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all transform hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]">
                Get a Fast Quote
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
