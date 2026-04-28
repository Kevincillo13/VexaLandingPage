import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Manifesto = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-black">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img 
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=2000" 
          alt="Athlete sweating" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black opacity-80"></div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h2 
          className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white leading-tight mix-blend-difference"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          SIN SORPRESAS.<br />
          SIN EXCUSAS.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lavender to-brand-violet">
            SOLO PROTECCIÓN QUE FUNCIONA.
          </span>
        </motion.h2>
      </div>
    </section>
  );
};

export default Manifesto;
