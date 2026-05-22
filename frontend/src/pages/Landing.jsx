import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Artists from "../components/Artists";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div data-testid="landing-page" className="bg-[#E8DCC4] min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Artists />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
