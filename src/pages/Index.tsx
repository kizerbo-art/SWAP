import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DealsSection from "@/components/DealsSection";
import HowItWorks from "@/components/HowItWorks";
import Simulator from "@/components/Simulator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DealsSection />
      <HowItWorks />
      <Simulator />
      <Footer />
    </div>
  );
};

export default Index;
