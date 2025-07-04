import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";

const stats = [
  { value: 500, label: "Projetos Realizados" },
  { value: 10, label: "Anos de Experiência" },
  { value: 24, label: "Suporte 24/7" },
  { value: 99, label: "% Satisfação" }
];

export default function StatsSection() {
  const { ref, inView } = useScrollAnimation();
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, duration / steps);
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-20 bg-black-deep">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="container mx-auto px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={stat.label} className="stat-item">
              <div className="text-4xl md:text-5xl font-orbitron font-bold text-gold mb-2">
                {counters[index]}
              </div>
              <p className="text-gray-300 font-rajdhani">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
