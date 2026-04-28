import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    {
      name: "Carlos M.",
      sport: "Triatleta",
      text: "El único bloqueador que no me deja los ojos ardiendo después de 2 horas de bicicleta. Increíble.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Ana P.",
      sport: "Trail Runner",
      text: "Textura súper ligera, parece que no llevas nada pero la protección es real. Lo uso todos los días.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Javier R.",
      sport: "CrossFit",
      text: "Sudo a mares y este es el primer producto que se queda en su lugar. Un game changer para entrenar al aire libre.",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Laura G.",
      sport: "Tenista",
      text: "No mancha la ropa y no deja residuo blanco. Por fin un bloqueador pensado para rendimiento.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Diego T.",
      sport: "Ciclista",
      text: "Me lo pongo antes de la ruta larga y me olvido. Aguanta perfecto el sol del mediodía.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    }
  ];

  // Duplicamos para el efecto infinito
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-32 bg-gray-50 overflow-hidden flex flex-col justify-center">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-5xl md:text-7xl font-bold">PROBADO EN EL MUNDO REAL.</h2>
      </div>

      <div className="relative w-full overflow-hidden flex">
        {/* Gradient fades for the edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

        <motion.div 
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {duplicatedReviews.map((review, i) => (
            <div 
              key={i} 
              className="w-[350px] md:w-[450px] shrink-0 bg-white p-8 border border-gray-100 shadow-sm"
            >
              <p className="text-lg text-gray-600 font-inter mb-8 italic">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover grayscale" />
                <div>
                  <h4 className="font-bold text-brand-black">{review.name}</h4>
                  <p className="text-sm text-brand-violet font-inter font-medium">{review.sport}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
