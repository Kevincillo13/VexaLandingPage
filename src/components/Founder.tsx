import { motion } from 'framer-motion';

const Founder = () => {
  return (
    <section className="py-32 bg-brand-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 max-w-6xl mx-auto">
          <motion.div 
            className="w-full md:w-5/12 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden rounded-[40px] shadow-premium">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" 
                alt="Eduardo C. - Fundador VEXA" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-7/12 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-brand-violet font-inter font-bold tracking-widest uppercase mb-6 block text-sm">Nuestra Historia</span>
            <blockquote className="text-2xl md:text-4xl font-bold leading-tight mb-8 text-brand-black text-justify tracking-tighter">
              "Estamos creando algo que <span className="text-transparent bg-clip-text bg-gradient-accent">sí funcione en la vida real.</span> Me cansé de productos que prometen y no cumplen. De bloqueadores que se caen con el primer sudor."
            </blockquote>
            <p className="text-lg md:text-xl text-gray-500 font-inter mb-10 leading-relaxed">
              VEXA es para gente que no tiene tiempo para replicar cada hora. Para quienes viven expuestos al sol y necesitan que funcione de verdad.
            </p>
            <div>
              <p className="text-xl font-bold uppercase tracking-widest">Eduardo C.</p>
              <p className="text-gray-400 font-inter mt-1 text-sm uppercase tracking-wider">Fundador VEXA</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
