"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import * as motion from "motion/react-client";

const services = [
  {
    id: "01",
    title: "Asphalt Paving",
    description: "New installations and overlays for driveways and commercial parking lots. Built on a rock-solid foundation for maximum durability.",
    image: "https://picsum.photos/seed/pavingdemo/800/600",
    features: ["Residential Driveways", "Commercial Parking Lots", "Patching & Overlays"],
  },
  {
    id: "02",
    title: "Sealcoating & Striping",
    description: "Protect your investment from water, oil, and UV sun damage. We finish with precision line striping for parking lots.",
    image: "https://picsum.photos/seed/sealcoating/800/600",
    features: ["Heavy-Duty Sealant", "Crack Filling", "ADA Compliant Striping"],
  },
  {
    id: "03",
    title: "Concrete Placement",
    description: "Expert concrete repair, sidewalks, curbs, and patios. We tear out the old completely and pour smooth, uniform concrete.",
    image: "https://picsum.photos/seed/concretework/800/600",
    features: ["Sidewalks & Approaches", "Curbs & Gutters", "Demolition & Haul away"],
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-asphalt opacity-20 pointer-events-none [mask-image:linear-gradient(to_left,black,transparent)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block">Our Arsenal</span>
            <h2 className="font-sans text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Hardscapes Built <br/><span className="text-neutral-500">To Outlast</span>
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-yellow-400 font-bold uppercase tracking-wider hover:text-yellow-300 transition-colors bg-yellow-400/10 px-6 py-3 border border-yellow-400/20">
            Request Service <ArrowUpRight size={20} />
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              className="group flex flex-col bg-neutral-900 border border-neutral-800 hover:border-yellow-400 transition-colors shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="relative h-64 overflow-hidden border-b border-neutral-800">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-yellow-400 text-neutral-950 font-sans font-bold text-2xl px-3 py-1 leading-none shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  {service.id}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow relative bg-neutral-900 overflow-hidden">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-400/5 blur-3xl rounded-full"></div>
                <h3 className="font-sans text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-yellow-400 transition-colors relative z-10">
                  {service.title}
                </h3>
                <p className="text-neutral-400 mb-6 flex-grow relative z-10">{service.description}</p>
                
                <ul className="space-y-2 mb-8 border-t border-neutral-800 pt-6 relative z-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-neutral-300 uppercase tracking-wide font-medium">
                      <span className="text-yellow-400 mt-0.5">■</span> {feature}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="mt-auto block w-full text-center border-2 border-neutral-800 hover:border-yellow-400 py-4 font-bold uppercase tracking-widest text-sm transition-all group-hover:bg-yellow-400 group-hover:text-neutral-950 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] relative z-10">
                  Select Service
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
