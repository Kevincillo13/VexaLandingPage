import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sun, Droplets, ShieldAlert, Timer } from 'lucide-react';

const TiltCard = ({ title, desc, index, icon: Icon }: { title: string, desc: string, index: number, icon: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full bg-white rounded-[32px] p-10 flex flex-col justify-center shadow-subtle hover:shadow-premium transition-shadow duration-500 border border-gray-50 relative group"
      >
        <div className="absolute top-8 right-8 text-gray-400 group-hover:text-brand-violet transition-colors duration-500" style={{ transform: "translateZ(40px)" }}>
          <Icon size={40} strokeWidth={1.5} />
        </div>
        <div style={{ transform: "translateZ(60px)" }}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{title}</h3>
          <p className="text-gray-500 font-inter leading-relaxed">{desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Problem = () => {
  const cards = [
    { title: "ENTRENAS BAJO EL SOL.", desc: "Corres, levantas, te mueves. El sol te golpea directo.", icon: Sun },
    { title: "SUDAS.", desc: "Los bloqueadores normales se caen con el sudor. Quedan pegajosos.", icon: Droplets },
    { title: "EXPOSICIÓN CONSTANTE.", desc: "No es la playa. Es todos los días. Es ahora.", icon: ShieldAlert },
    { title: "NO TIENES TIEMPO.", desc: "Necesitas algo que funcione. Rápido. Sin complicaciones.", icon: Timer }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <section className="py-40 bg-white relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-24"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-[0.9] tracking-tighter">LA PROTECCIÓN SOLAR NO ESTÁ PENSADA PARA TI.</h2>
          <p className="text-xl md:text-2xl text-gray-500 font-inter leading-tight">
            Está hecha para turistas en la playa. <span className="text-brand-black font-medium">No para gente que se mueve.</span>
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, i) => (
            <TiltCard key={i} index={i} title={card.title} desc={card.desc} icon={card.icon} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-inter text-gray-500">
            ...y la mayoría cree que <span className="text-brand-black font-bold">"no necesitan protección"</span> hasta que es tarde.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
