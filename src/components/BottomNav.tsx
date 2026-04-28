import { motion } from 'framer-motion';

const BottomNav = () => {
  return (
    <motion.div 
      className="fixed top-8 right-8 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <a 
        href="#lanzamiento" 
        className="bg-white/80 backdrop-blur-md border border-white/20 rounded-full px-8 py-3 shadow-premium text-sm font-bold uppercase tracking-widest hover:text-brand-violet transition-all duration-300 inline-block hover:scale-105 active:scale-95"
      >
        Unirme al lanzamiento
      </a>
    </motion.div>
  );
};

export default BottomNav;
