import { motion } from 'framer-motion';

const Location = () => {
  return (
    <section className="py-32 md:py-48 bg-[#f5f5f5] border-t border-[#e5e5e5]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              <span className="text-xs md:text-sm font-sans tracking-[0.3em] uppercase text-gray-400 mb-6 block">Location</span>
              <h2 className="text-5xl lg:text-7xl font-serif text-[#111111] mb-10 leading-tight">Discover Oyarifa</h2>
              <p className="text-gray-500 font-sans text-xl mb-12 leading-loose font-light">
                Situated in the prestigious and rapidly developing enclave of Oyarifa,
                the residence offers the perfect balance. You're far enough from the 
                hustle to enjoy absolute serenity and clean air, yet close enough to 
                major highways for quick access to Accra's central business districts, 
                shopping malls, and the airport.
              </p>
              
              <ul className="space-y-6 mb-16">
                <li className="flex items-start gap-6">
                  <span className="w-1.5 h-1.5 mt-3 bg-[#bda255] shrink-0" />
                  <p className="text-gray-500 font-sans text-lg font-light">25 minutes from Kotoka International Airport</p>
                </li>
                <li className="flex items-start gap-6">
                  <span className="w-1.5 h-1.5 mt-3 bg-[#bda255] shrink-0" />
                  <p className="text-gray-500 font-sans text-lg font-light">Close proximity to Aburi Mountains for nature retreats</p>
                </li>
                <li className="flex items-start gap-6">
                  <span className="w-1.5 h-1.5 mt-3 bg-[#bda255] shrink-0" />
                  <p className="text-gray-500 font-sans text-lg font-light">Quiet, highly-secured residential neighborhood</p>
                </li>
              </ul>
              
              <a href="https://maps.google.com/?q=Oyarifa,Accra,Ghana" target="_blank" rel="noopener noreferrer" className="text-xs font-sans uppercase tracking-[0.2em] text-[#111111] hover:text-[#bda255] transition-colors border-b border-[#111111] hover:border-[#bda255] pb-2">
                Get Directions
              </a>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 h-[500px] lg:h-[700px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="w-full h-full rounded-sm overflow-hidden bg-gray-200"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15881.026131464972!2d-0.1906!3d5.7334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9ca7e8c44b35%3A0xa1df43d41e7fbac5!2sOyarifa%2C%20Ghana!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.9)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Diz Eden Location in Oyarifa"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
