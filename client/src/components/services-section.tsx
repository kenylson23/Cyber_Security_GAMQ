import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Wrench, 
  Settings, 
  Zap, 
  Camera, 
  DoorOpen, 
  MapPin, 
  Shield, 
  Phone, 
  Lock, 
  Fingerprint,
  Eye
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import SimpleCarousel from "@/components/simple-carousel";

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
    icon: Camera,
    title: "Videovigilância CCTV",
    description: "Instalação de câmeras de videovigilância para monitoramento 24/7 com tecnologia avançada",
    images: [securityInstallationImage, technicianWorkingImage]
  },
  {
    icon: Zap,
    title: "Cerca Eléctrica",
    description: "Instalação e manutenção de cercas elétricas para segurança perimetral",
    images: [
      electricalImage1,
      electricalImage2,
      electricalImage3
    ]
  },
  {
    icon: DoorOpen,
    title: "Automação de Portões",
    description: "Sistemas automatizados de portões com controles remotos e sensores de segurança",
    images: [salesTeamImage, installationTeamImage]
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    description: "Sistemas de rastreamento GPS para veículos e equipamentos com monitoramento em tempo real",
    images: [technicianWorkingImage, securityInstallationImage]
  },
  {
    icon: Shield,
    title: "Controle de Acesso",
    description: "Sistemas de controle de acesso com cartões, códigos e tecnologia biométrica",
    images: [installationTeamImage, electricalImage4]
  },
  {
    icon: Phone,
    title: "Vídeo Interfone",
    description: "Sistemas de comunicação visual com interfones digitais de alta definição",
    images: [electricalImage5, electricalImage6]
  },
  {
    icon: Lock,
    title: "Fechaduras Electrónicas",
    description: "Fechaduras inteligentes com códigos, cartões e controle remoto via smartphone",
    images: [electricalImage7, technicianWorkingImage]
  },
  {
    icon: Fingerprint,
    title: "Autenticação Biométrica",
    description: "Sistemas de reconhecimento de impressões digitais e reconhecimento facial",
    images: [securityInstallationImage, salesTeamImage]
  },
  {
    icon: ShoppingCart,
    title: "Venda de Equipamentos",
    description: "Comercialização de equipamentos de segurança electrônica das melhores marcas",
    images: [salesTeamImage]
  },
  {
    icon: Wrench,
    title: "Instalação Profissional",
    description: "Instalação profissional de todos os sistemas de segurança electrônica",
    images: [technicianWorkingImage, installationTeamImage]
  },
  {
    icon: Settings,
    title: "Manutenção e Suporte",
    description: "Manutenção preventiva e corretiva com suporte técnico especializado 24/7",
    images: [installationTeamImage, electricalImage1]
  },
  {
    icon: Eye,
    title: "Monitoramento 24/7",
    description: "Serviços de monitoramento contínuo com central de alarmes profissional",
    images: [securityInstallationImage]
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
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Soluções completas em segurança electrônica: videovigilância, controle de acesso, automação, GPS tracking e muito mais
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="service-card rounded-xl p-6 hover-3d tech-border transform-gpu hover-optimized"
            >
              <SimpleCarousel
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
