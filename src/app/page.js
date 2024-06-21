import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";
import Logos from "./components/Logos";

export const metadata = {
  title: "Rzeczoznawca Majątkowy",
  description: "Wycena Nieruchomości Nowy Targ Natalia Bełtowska",
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Certificates />
      <FAQ />
      <Logos />
      <Contact />
      <Footer />
    </div>
  );
}
