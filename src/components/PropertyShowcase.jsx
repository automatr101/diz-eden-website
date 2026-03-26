import { motion } from 'framer-motion';

const PropertyShowcase = () => {
  const specs = [
    { label: 'Bedrooms', value: '3' },
    { label: 'Bathrooms', value: '3.5' },
    { label: 'Workspace', value: 'Dedicated Office' },
    { label: 'Parking', value: '2 Vehicles' },
    { label: 'Security', value: 'Gated & 24/7 Guard' },
  ];

  return (
    <section className="py-32 md:py-48 bg-[#fdfdfd] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
        
        {/* Image Container with Parallax-like reveal */}
        <motion.div 
          className="w-full lg:w-1/2 h-[750px] relative overflow-hidden rounded-sm"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <img 
            src="/images/room2.jpg" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover transition-transform duration-[3s] ease-out hover:scale-[1.03]"
          />
        </motion.div>

        {/* Text and Specs */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#111111] leading-[1.1] mb-10">
              Designed for Living
            </h2>
            <p className="text-gray-500 font-sans text-lg lg:text-xl mb-16 leading-relaxed font-light">
              Every corner of the residence has been thoughtfully curated to blend
              contemporary aesthetics with true functional comfort. From the expansive
              master suite to the state-of-the-art kitchen, experience uncompromised quality.
            </p>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-y-12 gap-x-8">
              {specs.map((spec, index) => (
                <div key={index} className="border-l border-[#bda255] pl-6">
                  <span className="block text-xs font-sans text-gray-400 uppercase tracking-[0.2em] mb-2">{spec.label}</span>
                  <span className="block text-2xl font-serif text-[#111111]">{spec.value}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-20">
              <a href="#booking" className="inline-block border-b border-[#111111] pb-2 text-[#111111] uppercase tracking-[0.2em] font-medium text-sm hover:text-[#bda255] hover:border-[#bda255] transition-all duration-500">
                Reserve Your Dates
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default PropertyShowcase;
