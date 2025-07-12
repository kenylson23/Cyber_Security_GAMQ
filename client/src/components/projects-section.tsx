import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import electricFenceImage from "@assets/IMG_20250225_151918_1752355468124.jpg";
import automaticGatesImage from "@assets/IMG_20250322_162658_1752355633154.jpg";

const projects = [
  {
    title: "Montagem de Cerca Eléctrica",
    description: "Instalação completa de cerca eléctrica para segurança perimetral residencial e comercial",
    image: electricFenceImage,
    tags: ["Cerca Eléctrica", "Perímetro"]
  },
  {
    title: "Portões Automatizados",
    description: "Automação de portões residenciais e comerciais com controle remoto e sistemas de segurança",
    image: automaticGatesImage,
    tags: ["Automação", "Portões"]
  },
  {
    title: "Sistema de Vigilância",
    description: "Implementação de sistemas CFTV com câmeras de alta definição e monitoramento 24/7",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    tags: ["CFTV", "Vigilância"]
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
              className="project-card bg-black-medium rounded-xl overflow-hidden hover-3d tech-border"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
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
