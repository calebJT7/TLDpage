import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Scale from "@/components/Scale";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <main className="bg-bg min-h-screen">
      <RevealObserver />
      <Nav />
      <Hero />
      <Pillars />
      <Scale />
      <Services />
      <Projects />
      <Process />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
