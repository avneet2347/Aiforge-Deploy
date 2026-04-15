import HeroSection from "@/components/HeroSection";
import PipelineGenerator from "@/components/PipelineGenerator";
import RiskDashboard from "@/components/RiskDashboard";
import HealthMonitor from "@/components/HealthMonitor";
import FeaturesGrid from "@/components/FeaturesGrid";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PipelineGenerator />
      <RiskDashboard />
      <HealthMonitor />
      <FeaturesGrid />
      <TechStack />
      <Footer />
    </div>
  );
};

export default Index;
