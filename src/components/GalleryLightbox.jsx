import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const GalleryLightbox = () => {
  const images = [
    '/images/room1.jpg',
    '/images/room2.jpg',
    '/images/room3.jpg',
    '/images/event1.jpg',
    '/images/event2.jpg',
    '/images/gallery4.jpg',
  ];

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-24 bg-[#f9f9f9]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-serif text-[#1a1a1a]">The Residence</h2>
          <span className="text-sm uppercase tracking-widest text-[#c4a132] font-semibold hidden md:block">Gallery</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              className="relative aspect-square overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImg(img)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={img} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-[#c4a132] transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
            >
              <X size={40} strokeWidth={1} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImg} 
              alt="Expanded view" 
              className="max-h-full max-w-full object-contain cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryLightbox;
