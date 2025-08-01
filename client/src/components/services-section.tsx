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
// Videovigilância carousel images
import cameraImage1 from "@assets/IMG_20250618_121441_4_11zon_1752745245179.jpg";
import cameraImage2 from "@assets/IMG_20250618_122018_5_11zon_1752745245181.jpg";
import cameraImage3 from "@assets/IMG_20250618_122139_6_11zon_1752745245181.jpg";
// Vídeo Porteiro carousel images
import videoIntercomImage1 from "@assets/porteiro 1.jpg";
import videoIntercomImage2 from "@assets/porteiro 2.jpg";
import videoIntercomImage3 from "@assets/porteiro 3.jpg";
// Automação de Portões carousel images
import gateAutomationImage1 from "@assets/portão 1.jpg";
import gateAutomationImage2 from "@assets/portão 2.jpg";
import gateAutomationImage3 from "@assets/portão 3.jpg";
// Electrical work carousel images (optimized selection)
import electricalImage1 from "@assets/IMG_20250612_104821_5_11zon_1752747543695.jpg";
import electricalImage2 from "@assets/IMG_20250614_100400_6_11zon_1752747543708.jpg";
import electricalImage3 from "@assets/IMG_20250614_101003_1_11zon_1752747661213.jpg";
import electricalImage4 from "@assets/IMG_20250614_133959_2_11zon_1752747695318.jpg";
import electricalImage5 from "@assets/IMG_20250614_134012_3_11zon_1752747695326.jpg";
// Fechaduras Electrónicas carousel images
import lockImage1 from "@assets/fechadura 1.jpg";
import lockImage2 from "@assets/fechadura 2.jpg";
// GPS Tracking image
import gpsTrackingImage from "@assets/GPS.webp";

const services = [
  {
    icon: Camera,
    title: "Câmeras de Videovigilância",
    description: "Instalação de câmeras de videovigilância para monitoramento 24/7 com tecnologia avançada",
    images: [
      cameraImage1,
      cameraImage2,
      cameraImage3
    ],
    hasCarousel: true
  },
  {
    icon: Zap,
    title: "Cerca Eléctrica",
    description: "Instalação e manutenção de cercas elétricas para segurança perimetral",
    images: [
      electricalImage1,
      electricalImage2,
      electricalImage3,
      electricalImage4,
      electricalImage5
    ],
    hasCarousel: true
  },
  {
    icon: DoorOpen,
    title: "Automação de Portões",
    description: "Sistemas automatizados de portões com controles remotos e sensores de segurança",
    images: [
      gateAutomationImage1,
      gateAutomationImage2,
      gateAutomationImage3
    ],
    hasCarousel: true
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    description: "Sistemas de rastreamento GPS para veículos e equipamentos com monitoramento em tempo real",
    image: gpsTrackingImage,
    hasCarousel: false
  },
  
  {
    icon: Phone,
    title: "Vídeo Porteiro",
    description: "Sistemas de comunicação visual com interfones digitais de alta definição",
    images: [
      videoIntercomImage1,
      videoIntercomImage2,
      videoIntercomImage3
    ],
    hasCarousel: true
  },
  {
    icon: Lock,
    title: "Fechaduras Electrónicas",
    description: "Fechaduras inteligentes com códigos, cartões e controle remoto via smartphone",
    images: [
      lockImage1,
      lockImage2
    ],
    hasCarousel: true
  },
 
  {
    icon: ShoppingCart,
    title: "Venda de Equipamentos",
    description: "Comercialização de equipamentos de segurança electrônica das melhores marcas",
    image: salesTeamImage,
    hasCarousel: false
  },
  {
    icon: Wrench,
    title: "Instalação Profissional",
    description: "Instalação profissional de todos os sistemas de segurança electrônica",
    image: technicianWorkingImage,
    hasCarousel: false
  },
  {
    icon: Settings,
    title: "Manutenção e Suporte",
    description: "Manutenção preventiva e corretiva com suporte técnico especializado 24/7",
    image: installationTeamImage,
    hasCarousel: false
  },
  {
    icon: Eye,
    title: "Monitoramento 24/7",
    description: "Serviços de monitoramento contínuo com central de alarmes profissional",
    image: securityInstallationImage,
    hasCarousel: false
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
              {/* Services with carousel */}
              {service.hasCarousel && service.images ? (
                <SimpleCarousel
                  images={service.images}
                  alt={service.title}
                  className="mb-4"
                  autoPlay={true}
                  autoPlayInterval={3000}
                />
              ) : (
                <div className="relative w-full h-48 overflow-hidden rounded-lg bg-gray-800 mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
              )}
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
