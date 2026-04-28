import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center bg-[#F8F8F8] overflow-hidden pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        {/* Sharp Geometric Shapes with Exaggerated Scroll Interaction */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            style={{
              y: useTransform(useScroll().scrollY, [0, 800], [0, -400]),
              opacity: useTransform(useScroll().scrollY, [0, 500], [1, 0])
            }}
            animate={{ rotate: [15, 30, 15] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[15%] w-64 h-64 border-2 border-brand-violet/20 rounded-xl"
          />
          <motion.div
            style={{
              y: useTransform(useScroll().scrollY, [0, 800], [0, -250]),
              opacity: useTransform(useScroll().scrollY, [0, 500], [1, 0])
            }}
            animate={{ rotate: [-10, -25, -10] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[25%] right-[30%] w-48 h-48 bg-brand-lavender/10 rounded-lg rotate-12"
          />
          <motion.div
            style={{
              y: useTransform(useScroll().scrollY, [0, 800], [0, -600]),
              opacity: useTransform(useScroll().scrollY, [0, 500], [1, 0])
            }}
            animate={{ rotate: [45, 60, 45] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-[10%] w-32 h-32 border border-brand-violet/20 rounded-sm"
          />
          <motion.div
            style={{
              y: useTransform(useScroll().scrollY, [0, 800], [0, -150]),
              opacity: useTransform(useScroll().scrollY, [0, 500], [1, 0])
            }}
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-[5%] w-96 h-96 bg-gradient-to-br from-brand-violet/10 to-transparent rounded-3xl"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-8 lg:-ml-20">
            <img 
              src="/logo.png" 
              alt="VEXA Logo" 
              className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain"
            />
          </div>

          <p className="text-xl md:text-2xl text-gray-500 font-inter mb-8 max-w-lg leading-relaxed">
            Diseñado para el sol real de Chihuahua.<br />
            <span className="text-brand-black font-bold">Ligero • No blanco • Resiste sudor</span>
          </p>

          <a
            href="#lanzamiento"
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-500 bg-brand-black rounded-full overflow-hidden shadow-premium hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="absolute inset-0 w-full h-full opacity-30 bg-gradient-accent"></span>
            <span className="relative flex items-center gap-2">
              Quiero enterarme del lanzamiento <span className="group-hover:translate-x-1 transition-transform duration-300">-&gt;</span>
            </span>
          </a>
        </motion.div>

        <motion.div
          className="relative flex justify-center items-center h-[500px] md:h-[600px] lg:h-[80vh] order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ y: useTransform(useScroll().scrollY, [0, 500], [0, -40]) }}
        >
          <div className="relative z-10 h-full w-full flex items-center justify-center lg:justify-end">
            <img 
              src="/producto-hero-2.png" 
              alt="VEXA Sunscreen" 
              className="h-full w-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-brand-black/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
