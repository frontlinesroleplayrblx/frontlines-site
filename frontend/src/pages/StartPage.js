import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marketplace from "../components/Marketplace";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function StartPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <Hero />
      <Marketplace />
      <CTA />
      <Footer />
    </div>
  );
}
