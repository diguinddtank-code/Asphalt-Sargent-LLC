"use client";

import { AlertTriangle, TrendingDown, Frown } from "lucide-react";
import * as motion from "motion/react-client";

export default function ProblemAgitation() {
  return (
    <section className="py-24 bg-neutral-900 border-y border-neutral-800 overflow-hidden relative">
      {/* Decorative niche element */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-warning-stripes opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sans text-4xl lg:text-5xl font-bold uppercase tracking-tighter mb-6 leading-tight">
              An Ugly, Damaged Surface Is <span className="text-yellow-400">Costing You</span>
            </h2>
            <p className="text-xl text-neutral-400 mb-8">
              Ignoring cracks and potholes doesn&apos;t make them go away. It makes them spread deeper, ruining your property&apos;s value and creating serious liabilities.
            </p>
            
            <div className="space-y-6">
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-neutral-950 flex justify-center items-center rounded-sm border border-neutral-800 shadow-[2px_2px_0px_rgba(250,204,21,0.3)]">
                    <TrendingDown className="text-yellow-400" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-1">Ruined Property Value</h3>
                  <p className="text-neutral-400">A crumbling driveway is the fastest way to drop your home or business&apos;s curb appeal in an instant.</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-neutral-950 flex justify-center items-center rounded-sm border border-neutral-800 shadow-[2px_2px_0px_rgba(250,204,21,0.3)]">
                    <AlertTriangle className="text-yellow-400" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-1">Safety Hazards & Liability</h3>
                  <p className="text-neutral-400">Potholes and uneven surfaces are trip hazards waiting to happen—leading to potential lawsuits from injured customers or guests.</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-neutral-950 flex justify-center items-center rounded-sm border border-neutral-800 shadow-[2px_2px_0px_rgba(250,204,21,0.3)]">
                    <Frown className="text-yellow-400" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-1">Embarrassing First Impression</h3>
                  <p className="text-neutral-400">Your parking lot or driveway is the first thing people see. Don&apos;t let neglected asphalt define your reputation.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-yellow-400 -rotate-3 scale-[1.02]"></div>
            <div className="relative bg-neutral-950 border-2 border-neutral-800 p-8 flex flex-col justify-center">
              <h3 className="font-sans text-3xl font-bold uppercase tracking-tight text-center mb-6">The Asphalt Sargent Fix</h3>
              
              <ul className="space-y-4">
                {[
                  "Tears out the old, decayed foundation",
                  "Lays down commercial-grade hot mix",
                  "Protects it with heavy-duty sealcoating",
                  "Leaves a flawless, jet-black finish"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                    className="flex items-center gap-3 text-lg font-medium p-4 bg-neutral-900 border-l-4 border-yellow-400 transition-transform hover:translate-x-1"
                  >
                    <span className="w-6 h-6 rounded-full bg-yellow-400/20 text-yellow-400 flex justify-center items-center text-sm flex-shrink-0">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-8 text-center bg-neutral-900 py-3 border border-neutral-800">
                <p className="text-yellow-400 uppercase tracking-widest text-sm font-bold animate-pulse">Stop waiting. Start paving.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
