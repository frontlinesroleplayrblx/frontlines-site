import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import FeaturedProduct from "../components/FeaturedProduct";
import Marketplace from "../components/Marketplace";
import ValueProps from "../components/ValueProps";
import FAQ from "../components/FAQ";

export default function StartPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <FeaturedProduct />
      <Marketplace />
      <ValueProps />
      <FAQ />
    </>
  );
}