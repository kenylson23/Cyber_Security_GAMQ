import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import SimpleCarousel from "@/components/simple-carousel";
import electricFenceImage from "@assets/IMG_20250225_151918_1752355468124.jpg";
import automaticGatesImage from "@assets/IMG_20250322_162658_1752355633154.jpg";
import surveillanceSystemImage from "@assets/IMG_20250321_173542_1752356189979.jpg";
// Surveillance system carousel images
import surveillanceImage1 from "@assets/IMG_20250614_120542_7_11zon_1752745202473.jpg";
import surveillanceImage2 from "@assets/IMG_20250614_120716_8_11zon_1752745202494.jpg";
import surveillanceImage3 from "@assets/IMG_20250614_123256_1_11zon_1752745202497.jpg";
import surveillanceImage4 from "@assets/IMG_20250614_125246_2_11zon_1752745202502.jpg";
import surveillanceImage5 from "@assets/IMG_20250614_125254_3_11zon_1752745245168.jpg";
import surveillanceImage6 from "@assets/IMG_20250618_121441_4_11zon_1752745245179.jpg";
import surveillanceImage7 from "@assets/IMG_20250618_122018_5_11zon_1752745245181.jpg";
import surveillanceImage8 from "@assets/IMG_20250618_122139_6_11zon_1752745245181.jpg";

const projects = [
  {
    title: "Montagem de Cerca Eléctrica",
    description: "Instalação completa de cerca eléctrica para segurança perimetral residencial e comercial",
    images: [electricFenceImage],
    tags: ["Cerca Eléctrica", "Perímetro"]
  },
  {
    title: "Portões Automatizados",
    description: "Automação de portões residenciais e comerciais com controle remoto e sistemas de segurança",
    images: [automaticGatesImage],
    tags: ["Automação", "Portões"]
  },
  {
    title: "Sistema de Vigilância",
    description: "Implementação de sistemas CCTV com câmeras de alta definição e monitoramento 24/7",
    images: [
      surveillanceSystemImage,
      surveillanceImage1,
      surveillanceImage2,
      surveillanceImage3,
      surveillanceImage4,
      surveillanceImage5,
      surveillanceImage6,
      surveillanceImage7,
      surveillanceImage8
    ],
    tags: ["CCTV", "Vigilância"]
  }
];

export default function ProjectsSection() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="projects" ref={ref} className="py-20 bg-black-deep">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="container mx-auto px-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-gold">
            NOSSOS PROJETOS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça nossos principais projetos em segurança electrônica e automação
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="project-card bg-black-medium rounded-xl overflow-hidden hover-3d tech-border transform-gpu hover-optimized"
            >
              <SimpleCarousel
                images={project.images}
                alt={project.title}
                className="w-full h-48 object-cover"
                autoPlay={true}
                autoPlayInterval={4000}
              />
              <div className="p-6">
                <h3 className="text-xl font-orbitron font-bold mb-3 text-gold">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gold text-black px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
