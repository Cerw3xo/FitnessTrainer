import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroTestimonials from "@/components/HeroTestimonials";
import QuoteTransition from "@/components/QuoteTransition";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HeroTestimonials />
      <Services />
      <Testimonials />
      <About />
      <QuoteTransition />
      <Contact />
      <Footer />
    </main>
  );
}
