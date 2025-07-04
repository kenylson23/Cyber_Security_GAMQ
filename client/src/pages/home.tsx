import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import StatsSection from "@/components/stats-section";
import AboutSection from "@/components/about-section";
import SecuritySimulator from "@/components/security-simulator";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black-deep text-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <SecuritySimulator />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
