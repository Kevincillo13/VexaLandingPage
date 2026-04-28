import { motion } from 'framer-motion';

const Solution = () => {
  const blocks = [
    {
      title: "ZERO RASTRO BLANCO.",
      desc: "Protección invisible que se absorbe al instante. Sin capas pegajosas, sin manchas, solo piel real bajo el sol.",
      img: "/producto-lifestyle.png",
      reverse: false
    },
    {
      title: "RESISTE EL SUDOR.",
      desc: "Diseñado para quienes se mueven. Corres, entrenas, sudas; VEXA se queda contigo pase lo que pase.",
      img: "/producto-gym.png",
      reverse: true
    },
    {
      title: "PARA EL DÍA A DÍA.",
      desc: "Porque la exposición al sol no es sólo en vacaciones. Es en la calle, en el coche, en cada entrenamiento.",
      img: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=1000",
      reverse: false
    }
  ];

  return (
    <section className="py-32 bg-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
            DISEÑADO PARA EL SOL REAL DE CHIHUAHUA.
          </h2>
        </motion.div>

        <div className="space-y-32">
          {blocks.map((block, i) => (
            <div key={i} className={`flex flex-col ${block.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: block.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-[40px] shadow-premium">
                  <img src={block.img} alt={block.title} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-brand-violet/5 mix-blend-overlay"></div>
                </div>
              </motion.div>
              
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: block.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">{block.title}</h3>
                <p className="text-lg md:text-xl text-gray-600 font-inter leading-relaxed">{block.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
