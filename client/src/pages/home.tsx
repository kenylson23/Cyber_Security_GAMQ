import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import StatsSection from "@/components/stats-section";
import AboutSection from "@/components/about-section";
import LazySecuritySimulator from "@/components/lazy-security-simulator";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { usePerformanceMonitor } from "@/hooks/use-performance-monitor";

export default function Home() {
  usePerformanceMonitor();
  
  return (
    <div className="min-h-screen bg-black-deep text-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <LazySecuritySimulator />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
