import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import SimpleCarousel from "@/components/simple-carousel";
import electricFenceImage from "@assets/IMG_20250225_151918_1752355468124.jpg";
import automaticGatesImage from "@assets/IMG_20250322_162658_1752355633154.jpg";
// Sistema de Vigilância carousel images
import surveillanceImage1 from "@assets/Camer 1.jpg";
import surveillanceImage2 from "@assets/camera 2.jpg";
import surveillanceImage3 from "@assets/camera 3.jpg";

const projects = [
  {
    title: "Montagem de Cerca Eléctrica",
    description: "Instalação completa de cerca eléctrica para segurança perimetral residencial e comercial",
    image: electricFenceImage,
    hasCarousel: false,
    tags: ["Cerca Eléctrica", "Perímetro"]
  },
  {
    title: "Portões Automatizados",
    description: "Automação de portões residenciais e comerciais com controle remoto e sistemas de segurança",
    image: automaticGatesImage,
    hasCarousel: false,
    tags: ["Automação", "Portões"]
  },
  {
    title: "Sistema de Vigilância",
    description: "Implementação de sistemas CCTV com câmeras de alta definição e monitoramento 24/7",
    images: [
      surveillanceImage1,
      surveillanceImage2,
      surveillanceImage3
    ],
    hasCarousel: true,
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
              {project.hasCarousel && project.images ? (
                <SimpleCarousel
                  images={project.images}
                  alt={project.title}
                  className="h-48"
                  autoPlay={true}
                  autoPlayInterval={3000}
                />
              ) : (
                <div className="relative w-full h-48 overflow-hidden bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
              )}
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
