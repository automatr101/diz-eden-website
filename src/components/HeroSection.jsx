import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/room1.jpg")' }}
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </motion.div>

      {/* Hero Content */}
      <div className="container relative z-10 px-6 lg:px-12 flex flex-col items-center text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="text-xs md:text-sm font-sans tracking-[0.4em] uppercase text-white/80 mb-6 block drop-shadow-md">
            East Legon, Accra
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#fdfdfd] leading-none mb-8 drop-shadow-xl">
            Escape<br className="md:hidden" /> to Calm
          </h1>
          
          <div className="mt-16">
            <a 
              href="#property" 
              className="group inline-flex flex-col items-center gap-4 text-white hover:text-[#bda255] transition-colors duration-500"
            >
              <span className="text-xs font-sans uppercase tracking-[0.3em]">Explore Residence</span>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-px h-16 bg-gradient-to-b from-current to-transparent opacity-70 group-hover:from-[#bda255]"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
