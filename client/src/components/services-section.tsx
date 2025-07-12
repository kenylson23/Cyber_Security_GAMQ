import { motion } from "framer-motion";
import { ShoppingCart, Wrench, Settings, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  {
    icon: ShoppingCart,
    title: "Venda",
    description: "Comercialização de equipamentos de segurança electrônica das melhores marcas",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    icon: Wrench,
    title: "Instalação",
    description: "Instalação profissional de sistemas de segurança electrônica e equipamentos",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    icon: Settings,
    title: "Manutenção de Equipamentos de Segurança Electrônica",
    description: "Manutenção preventiva e corretiva de equipamentos de segurança electrônica",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    icon: Zap,
    title: "Electricidade",
    description: "Serviços elétricos especializados para instalações de segurança electrônica",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  }
];

export default function ServicesSection() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="services" ref={ref} className="py-20 bg-black-medium">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="container mx-auto px-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-gold">
            NOSSOS SERVIÇOS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Equipamentos de segurança electrônica com venda, instalação, manutenção e serviços elétricos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="service-card rounded-xl p-6 hover-3d tech-border"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="text-center">
                <service.icon className="text-gold text-3xl mb-4 mx-auto" />
                <h3 className="text-xl font-orbitron font-bold mb-3 text-gold">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
