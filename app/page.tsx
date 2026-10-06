import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Process from "@/components/Process";
import Credibility from "@/components/Credibility";
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
        <Pillars />
        <Services />
        <Works />
        <Process />
        <Credibility />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
