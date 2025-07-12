import { motion } from "framer-motion";
import ThreeScene from "./three-scene";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function HeroSection() {
  const { ref, inView } = useScrollAnimation();

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative hero-bg cyber-grid"
    >
      <ThreeScene />
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <div className="animate-float">
          <h1 className="text-4xl md:text-7xl font-orbitron font-bold mb-6 text-shadow-gold">
            <span className="text-gold">G.A.M.Q</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Venda • Instalação • Manutenção • Electricidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToServices}
              className="bg-gold text-black px-8 py-4 rounded-lg font-rajdhani font-bold text-lg hover-3d animate-glow"
            >
              NOSSOS SERVIÇOS
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-gold text-gold px-8 py-4 rounded-lg font-rajdhani font-bold text-lg hover-3d"
            >
              FALAR CONOSCO
            </button>
          </div>
        </div>
      </motion.div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-gold rounded-full animate-pulse-gold"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-gold-light rounded-full animate-pulse-gold" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-gold rounded-full animate-pulse-gold" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-gold-dark rounded-full animate-pulse-gold" style={{ animationDelay: "0.5s" }}></div>
    </section>
  );
}
