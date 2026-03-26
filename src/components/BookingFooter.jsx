import { useState } from 'react';
import { motion } from 'framer-motion';
import BookingWidget from './BookingWidget';

const BookingFooter = () => {
  const [formData, setFormData] = useState({ name: '', date: '', message: '' });

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    alert(`Booking Inquiry for ${formData.name} simulated!\nDates: ${formData.date}\nMessage: ${formData.message}`);
  };

  return (
    <footer id="booking" className="bg-[#111111] text-[#fdfdfd] pt-32 pb-16 md:pt-48 md:pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 mb-32">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-xs md:text-sm font-sans tracking-[0.3em] uppercase text-[#bda255] mb-8 block text-left">
              Reservations
            </span>
            <h2 className="text-4xl md:text-8xl font-serif mb-10 text-white text-left leading-[1.1] px-4 -ml-4">Book Your Stay.</h2>
            <p className="text-gray-400 font-sans mb-16 text-xl leading-loose max-w-lg text-left font-light">
              Reserve your private luxury short-let in Oyarifa today. We process all 
              bookings directly to ensure you get the best rate without third-party fees.
            </p>
            
            <div className="space-y-12">
              <div>
                <span className="block text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 font-sans text-left">Email Us</span>
                <a href="mailto:hello@dizeden.com" className="text-2xl font-serif text-white hover:text-[#bda255] transition-colors block text-left">hello@dizeden.com</a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 font-sans text-left">Call Us</span>
                <a href="tel:+233000000000" className="text-2xl font-serif text-white hover:text-[#bda255] transition-colors block text-left">+233 XX XXX XXXX</a>
              </div>
            </div>
            
            <div className="mt-20 text-left">
              <a 
                href="#"
                onClick={(e) => { e.preventDefault(); alert("Chat on WhatsApp simulated for demo."); }}
                className="inline-flex items-center justify-center px-10 py-5 bg-[#072a1e] text-[#fdfdfd] font-sans font-light tracking-[0.2em] uppercase text-sm hover:bg-[#bda255] transition-colors duration-500 shrink-0 border border-transparent"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <BookingWidget />

        </div>

        <div className="pt-12 border-t border-[#333] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 font-sans text-xs tracking-[0.1em] text-left uppercase">
            &copy; {new Date().getFullYear()} Diz Eden Luxury Apartments.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs font-sans tracking-[0.2em] uppercase">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs font-sans tracking-[0.2em] uppercase">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BookingFooter;
