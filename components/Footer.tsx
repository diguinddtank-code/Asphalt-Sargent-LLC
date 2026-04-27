export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          <div className="md:col-span-1">
            <h3 className="font-sans font-bold text-2xl tracking-tighter uppercase mb-4">
              <span className="bg-yellow-400 text-neutral-950 px-2 py-1 mr-1">Asphalt</span> 
              Sargent
            </h3>
            <p className="text-neutral-400 text-sm mb-4">
              Premium residential and commercial paving contractors serving Southfield, MI. Real professionals, real results.
            </p>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-neutral-50 mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">Residential Paving</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">Commercial Parking Lots</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">Sealcoating</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">Line Striping</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">Concrete Repair</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-neutral-50 mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li><a href="#why-us" className="hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-yellow-400 transition-colors">Our Work</a></li>
              <li><a href="#testimonials" className="hover:text-yellow-400 transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-neutral-50 mb-4 text-sm">Contact Information</h4>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li>Southfield, MI</li>
              <li><a href="tel:2483514794" className="hover:text-yellow-400 transition-colors text-lg text-neutral-200 mt-2 block font-bold">(248) 351-4794</a></li>
              <li className="mt-4"><a href="#contact" className="inline-block border border-yellow-400 text-yellow-400 px-4 py-2 hover:bg-yellow-400 hover:text-neutral-950 transition-colors uppercase tracking-widest font-bold text-xs mt-2">Get A Quote</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} Asphalt Sargent. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-neutral-500">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
