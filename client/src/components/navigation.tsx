import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="text-gold text-2xl" />
            <span className="text-xl font-orbitron font-bold text-gold">
              Kenylson-Tech
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-gold transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-gold transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-gold transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-gold transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-gold transition-colors"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left hover:text-gold transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left hover:text-gold transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left hover:text-gold transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left hover:text-gold transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left hover:text-gold transition-colors"
            >
              Contato
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
