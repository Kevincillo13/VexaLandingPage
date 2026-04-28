import { motion } from 'framer-motion';

const LaunchForm = () => {
  return (
    <section id="lanzamiento" className="py-40 bg-brand-black text-brand-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-violet/10 via-brand-black to-brand-black pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div 
          className="text-center max-w-4xl mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-[5.5rem] font-bold mb-4 tracking-tighter leading-none">
            El sol no avisa.
          </h2>
          <p className="text-2xl md:text-4xl font-bold text-brand-violet tracking-tight">
            Tú tampoco deberías esperar.
          </p>
        </motion.div>

        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-white/60 font-bold tracking-[0.2em] uppercase mb-3 block text-base md:text-lg">
            Sé de los primeros en probar VEXA
          </span>
          <p className="text-white/40 font-inter text-lg md:text-xl">
            Déjanos tus datos y te avisamos cuando lancemos.
          </p>
        </motion.div>

        <motion.form 
          className="w-full max-w-lg space-y-4 mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Nombre" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-lg font-normal placeholder-gray-600 focus:outline-none focus:border-brand-lavender transition-all"
            />
            <input 
              type="tel" 
              placeholder="Whatsapp" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-lg font-normal placeholder-gray-600 focus:outline-none focus:border-brand-lavender transition-all"
            />
          </div>
          <button 
            type="submit"
            className="w-full py-5 text-xl font-bold text-brand-black bg-brand-white rounded-full mt-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-premium"
          >
            Unirme al lanzamiento
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center w-full pt-10 border-t border-white/5"
        >
          <p className="text-xs md:text-sm text-gray-600 tracking-widest uppercase font-inter">
            © 2026 VEXA. PROTECCIÓN PARA EL SOL REAL.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LaunchForm;
