import { motion } from 'framer-motion';

const IntroSection = () => {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-white flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl"
      >
        <span className="text-xs md:text-sm font-sans tracking-[0.3em] uppercase text-gray-400 mb-8 block">
          Welcome to East Legon, Accra
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#111111] leading-[1.15] mb-12">
          Comfort, Convenience, and Modern Luxury.
        </h2>
        <p className="text-lg md:text-xl text-gray-500 font-sans leading-loose max-w-3xl mx-auto font-light">
          Modern 1-bedroom apartment in East Legon, just 5 minutes from ANC Mall and 12 minutes from 
          Kotoka International Airport. Enjoy a spacious living area, fully equipped kitchen, cozy bedroom, 
          daily cleaning, and high-speed WiFi — with 24/7 security and attentive support.
        </p>
      </motion.div>
    </section>
  );
};

export default IntroSection;

