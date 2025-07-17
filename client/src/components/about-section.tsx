import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import OptimizedImage from "./optimized-image";
import technicianImage from "@assets/IMG_20250322_131457_1752352079117.jpg";

const features = [
  "Tecnologia de ponta e soluções personalizadas",
  "Equipe altamente qualificada e certificada",
  "Suporte técnico 24/7 e manutenção preventiva",
  "Parceria com as melhores marcas do mercado"
];

export default function AboutSection() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="py-20 bg-black-medium">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="container mx-auto px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <OptimizedImage
              src={technicianImage}
              alt="Técnico da G.A.M.Q trabalhando com equipamentos de segurança electrônica"
              className="rounded-xl shadow-2xl hover-3d"
              width={600}
              height={400}
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-gold">
              SOBRE A G.A.M.Q
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Somos uma empresa especializada em equipamentos de segurança electrônica, oferecendo venda, 
              instalação, manutenção de equipamentos de segurança electrônica e serviços elétricos. Com experiência no mercado, 
              oferecemos soluções de alta qualidade e suporte técnico especializado.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ x: -50, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <CheckCircle className="text-gold mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
