import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block">Deploy Our Team</span>
            <h2 className="font-sans text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
              Get Your Free <span className="text-neutral-500">Estimate</span>
            </h2>
            <p className="text-lg text-neutral-400 mb-10">
              Stop letting your asphalt deteriorate. Contact us today to schedule your on-site evaluation and get a straightforward quote for your property.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neutral-950 flex items-center justify-center border border-neutral-800 flex-shrink-0">
                  <Phone className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wide text-neutral-50 mb-1">Call Us Directly</h4>
                  <a href="tel:2483514794" className="text-xl text-neutral-300 hover:text-yellow-400 transition-colors">(248) 351-4794</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neutral-950 flex items-center justify-center border border-neutral-800 flex-shrink-0">
                  <MapPin className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wide text-neutral-50 mb-1">Service Area</h4>
                  <p className="text-neutral-300">Southfield, MI and surrounding communities</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neutral-950 flex items-center justify-center border border-neutral-800 flex-shrink-0">
                  <Clock className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wide text-neutral-50 mb-1">Operating Hours</h4>
                  <p className="text-neutral-300">Mon-Fri: 7:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-neutral-950 border border-neutral-800 p-8 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400 translate-x-2 -translate-y-2 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-yellow-400 -translate-x-2 translate-y-2 -z-10"></div>
            
            <h3 className="font-sans text-3xl font-bold uppercase tracking-tight mb-8">Request A Quote</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-neutral-50 focus:border-yellow-400 focus:outline-none transition-colors" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-neutral-50 focus:border-yellow-400 focus:outline-none transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Phone Number</label>
                <input type="tel" id="phone" className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-neutral-50 focus:border-yellow-400 focus:outline-none transition-colors" placeholder="(248) 555-0123" />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Interested Service</label>
                <select id="service" className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-neutral-50 focus:border-yellow-400 focus:outline-none transition-colors appearance-none">
                  <option>Asphalt Paving</option>
                  <option>Sealcoating & Striping</option>
                  <option>Concrete Repair</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Project Details</label>
                <textarea id="message" rows={4} className="w-full bg-neutral-900 border border-neutral-800 px-4 py-3 text-neutral-50 focus:border-yellow-400 focus:outline-none transition-colors resize-none" placeholder="Briefly describe what you need done..."></textarea>
              </div>

              <button type="button" className="w-full bg-yellow-400 hover:bg-yellow-300 text-neutral-950 font-bold uppercase tracking-widest py-4 transition-all">
                Send Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
