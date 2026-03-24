import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 md:py-48 mt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/gallery1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-[#072a1e]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 px-6 lg:px-12 text-center text-[#fdfdfd]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-xs md:text-sm font-sans tracking-[0.4em] uppercase text-[#bda255] mb-8 block">
            The Space
          </span>
          <h2 className="text-6xl md:text-8xl font-serif mb-10 text-[#fdfdfd] leading-tight">
            Crafted for the<br />Discerning Guest.
          </h2>
          <p className="text-xl md:text-2xl font-sans font-light leading-[2] max-w-3xl mx-auto text-gray-200">
            A plush queen-size bed with premium linens, a chic living area with Smart TV, a fully equipped 
            modern kitchen, and a spa-inspired bathroom with hot water and daily housekeeping. 
            Ideal for business executives, couples, and discerning travelers seeking a sophisticated city escape.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
