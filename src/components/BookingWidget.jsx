import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/moving-border';
import ActionButton from './ui/action-button';

const RATE_PER_NIGHT = 750;

const BookingWidget = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 guests');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  
  // Calculate nights
  const nights = useMemo(() => {
    if (checkIn && checkOut) {
      const inDate = new Date(checkIn);
      const outDate = new Date(checkOut);
      if (outDate > inDate) {
        const diffTime = Math.abs(outDate - inDate);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      }
    }
    return 0;
  }, [checkIn, checkOut]);

  const totalPrice = nights > 0 ? nights * RATE_PER_NIGHT : 0;

  const handleReserve = (e) => {
    e.preventDefault();
    if (nights <= 0) {
      alert("Please select valid check-in and check-out dates.");
      return;
    }
    setIsPending(true);
    
    // Simulate a brief loading state for better UX
    setTimeout(() => {
      // For demo purposes, we don't open a real external link
      alert(`Booking Request Simulated for ${guests}!\nDates: ${checkIn} to ${checkOut}\nTotal: GH₵${totalPrice.toLocaleString()}`);
      setIsPending(false);
    }, 1500);
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isDropdownOpen && !e.target.closest('.group')) {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true }}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md ml-auto"
    >
      <form onSubmit={handleReserve} className="flex flex-col gap-4">
        {/* AirBnb style inputs container */}
        <div className="border border-gray-400 rounded-xl overflow-hidden flex flex-col font-sans">
          <div className="flex border-b border-gray-400">
            <div className="w-1/2 p-3 border-r border-gray-400 relative">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#111111] mb-1">Check-In</label>
              <input 
                type="date" 
                required
                min={new Date().toISOString().split('T')[0]} // prevent past dates
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full text-sm text-[#111111] bg-transparent outline-none cursor-pointer"
              />
            </div>
            <div className="w-1/2 p-3 relative">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#111111] mb-1">Check-Out</label>
              <input 
                type="date" 
                required
                min={checkIn || new Date().toISOString().split('T')[0]} // must be after check-in
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full text-sm text-[#111111] bg-transparent outline-none cursor-pointer"
              />
            </div>
          </div>
          <div className="relative p-3 w-full group">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-[#111111] mb-1">Guests</label>
            <div 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full text-sm text-[#111111] cursor-pointer flex justify-between items-center"
            >
              <span>{guests}</span>
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </motion.div>
            </div>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-20 overflow-hidden"
                >
                  {['1 guest', '2 guests', '3 guests', '4 guests'].map((option) => (
                    <div
                      key={option}
                      onClick={() => {
                        setGuests(option);
                        setIsDropdownOpen(false);
                      }}
                      className="px-4 py-3 text-sm text-[#111111] hover:bg-gray-100 cursor-pointer transition-colors"
                    >
                      {option}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <ActionButton
          type="submit"
          isPending={isPending}
          className="w-full mt-2 h-14 bg-[#e00b58] text-white font-sans font-semibold text-lg hover:bg-[#c2094c] transition-colors rounded-xl"
        >
          Reserve
        </ActionButton>

        <p className="text-center text-sm text-gray-500 font-sans mt-2">
          You won't be charged yet
        </p>

        {nights > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-3 font-sans">
            <div className="flex justify-between text-[#111111] underline underline-offset-2">
              <span>GH₵{RATE_PER_NIGHT} x {nights} nights</span>
              <span>GH₵{totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-[#111111] font-semibold text-lg mt-2 pt-4 border-t border-gray-200">
              <span>Total</span>
              <span>GH₵{totalPrice.toLocaleString()}</span>
            </div>
          </div>
        )}
      </form>
    </motion.div>
  );
};

export default BookingWidget;
