import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemAgitation from "@/components/ProblemAgitation";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeforeAfter from "@/components/BeforeAfter";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col font-body selection:bg-yellow-400 selection:text-neutral-950">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <Hero />
        <ProblemAgitation />
        <Services />
        <WhyChooseUs />
        <BeforeAfter />
        <Process />
        <Testimonials />
        <CtaSection />
        <Contact />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
