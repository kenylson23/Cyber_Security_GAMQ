import { motion } from "framer-motion";
import { ShoppingCart, Wrench, Settings, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ImageCarousel from "@/components/image-carousel";
import OptimizedImage from "@/components/optimized-image";
import technicianWorkingImage from "@assets/IMG_20250322_131457_1752354152611.jpg";
import installationTeamImage from "@assets/IMG_20250322_162904_1752354528471.jpg";
import securityInstallationImage from "@assets/IMG_20250226_094318_1752354829433.jpg";
import salesTeamImage from "@assets/IMG_20250322_162658_1752355169600.jpg";
// Electrical work carousel images
import electricalImage1 from "@assets/IMG_20250612_104821_5_11zon_1752747543695.jpg";
import electricalImage2 from "@assets/IMG_20250614_100400_6_11zon_1752747543708.jpg";
import electricalImage3 from "@assets/IMG_20250614_101003_1_11zon_1752747661213.jpg";
import electricalImage4 from "@assets/IMG_20250614_100405_7_11zon_1752747661227.jpg";
import electricalImage5 from "@assets/IMG_20250614_133959_2_11zon_1752747695318.jpg";
import electricalImage6 from "@assets/IMG_20250614_134012_3_11zon_1752747695326.jpg";
import electricalImage7 from "@assets/IMG_20250614_134021_4_11zon_1752747750633.jpg";

const services = [
  {
    icon: ShoppingCart,
    title: "Venda",
    description: "Comercialização de equipamentos de segurança electrônica das melhores marcas",
    images: [salesTeamImage]
  },
  {
    icon: Wrench,
    title: "Instalação",
    description: "Instalação profissional de sistemas de segurança electrônica e equipamentos",
    images: [technicianWorkingImage]
  },
  {
    icon: Settings,
    title: "Manutenção de Equipamentos de Segurança Electrônica",
    description: "Manutenção preventiva e corretiva de equipamentos de segurança electrônica",
    images: [installationTeamImage]
  },
  {
    icon: Zap,
    title: "Cerca Eléctrica",
    description: "Instalação e manutenção de cercas elétricas para segurança perimetral",
    images: [
      securityInstallationImage,
      electricalImage1,
      electricalImage2,
      electricalImage3,
      electricalImage4,
      electricalImage5,
      electricalImage6,
      electricalImage7
    ]
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
              className="service-card rounded-xl p-6 hover-3d tech-border transform-gpu hover-optimized"
            >
              <ImageCarousel
                images={service.images}
                alt={service.title}
                className="mb-4"
                autoPlay={true}
                autoPlayInterval={3000}
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
