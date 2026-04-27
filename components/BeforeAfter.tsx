"use client";

import Image from "next/image";
import * as motion from "motion/react-client";

const projects = [
  {
    id: 1,
    title: "Commercial Parking Lot Restoration",
    location: "Southfield, MI",
    beforeImage: "https://picsum.photos/seed/parkinglotbefore/800/600",
    afterImage: "https://picsum.photos/seed/parkinglotafter/800/600",
  },
  {
    id: 2,
    title: "Residential Driveway Tear-Out & Paving",
    location: "Farmington Hills, MI",
    beforeImage: "https://picsum.photos/seed/drivewaybefore/800/600",
    afterImage: "https://picsum.photos/seed/drivewayafter/800/600",
  }
];

export default function BeforeAfter() {
  return (
    <section id="portfolio" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Decorative niche pattern */}
      <div className="absolute inset-x-0 top-0 h-1 bg-warning-stripes"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block">The Evidence</span>
          <h2 className="font-sans text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
            Night & Day <span className="text-neutral-500">Transformations</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            See how we strip away decades of damage and pour perfect, level asphalt. Real projects, real results.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id} 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
            >
              <div className="text-center mb-8">
                <h3 className="font-sans text-3xl font-bold uppercase tracking-tight text-neutral-50">{project.title}</h3>
                <p className="text-yellow-400 font-medium uppercase tracking-widest text-sm mt-2">{project.location}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-0">
                {/* Before Box */}
                <div className="relative group perspective-1000">
                  <div className="absolute top-4 left-4 z-10 bg-neutral-900 border border-neutral-700 text-neutral-400 font-black uppercase tracking-widest px-4 py-2 text-sm shadow-xl">
                    Before
                  </div>
                  <div className="relative aspect-video border-[6px] border-neutral-800 md:border-r-0 md:rounded-l-lg overflow-hidden grayscale">
                    <Image src={project.beforeImage} alt={`Before ${project.title}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" referrerPolicy="no-referrer" />
                  </div>
                </div>

                {/* After Box */}
                <motion.div 
                  className="relative group origin-left"
                  initial={{ opacity: 0, rotateY: 90 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 60, delay: 0.4 + idx * 0.2 }}
                >
                  <div className="absolute top-4 right-4 z-10 bg-yellow-400 text-neutral-950 font-black uppercase tracking-widest px-4 py-2 text-sm shadow-xl">
                    After
                  </div>
                  <div className="relative aspect-video border-[6px] border-yellow-400 md:border-l-[6px] md:rounded-r-lg overflow-hidden shadow-[0_0_40px_rgba(250,204,21,0.15)]">
                    <Image src={project.afterImage} alt={`After ${project.title}`} fill className="object-cover hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
