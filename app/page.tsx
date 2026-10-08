import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Pillars from "@/components/Pillars";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Marquee from "@/components/Marquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works />
        <Pillars />
        <Services />
        <Projects />
        <Marquee />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
