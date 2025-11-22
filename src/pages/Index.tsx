import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoreLibraries from "@/components/CoreLibraries";
import Material from "@/components/Material";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import ODECalculator from "@/components/ODECalculator";
import Outro from "@/components/outro";
import WhyPython from "@/components/WhyPython";

const Index = () => {
  return (
    <div className="gradient-bg min-h-screen">
      <Navbar />
      <Hero />
      <Team />
      <WhyPython />
      <CoreLibraries />
      <Material />
      <ODECalculator />
      <Outro/>
      <Footer />
    </div>
  );
};

export default Index;
