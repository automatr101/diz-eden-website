import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <div className="navbar-logo">
          <Link to="/" className={`font-serif text-2xl font-semibold tracking-widest ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`}>
            DIZ EDEN
          </Link>
        </div>
        <nav className="nav-links hidden md:flex items-center gap-8">
          <a href="#property" className={`text-sm uppercase tracking-widest transition-colors ${isScrolled ? 'text-gray-600 hover:text-[#c4a132]' : 'text-gray-200 hover:text-white'}`}>Property</a>
          <a href="#amenities" className={`text-sm uppercase tracking-widest transition-colors ${isScrolled ? 'text-gray-600 hover:text-[#c4a132]' : 'text-gray-200 hover:text-white'}`}>Amenities</a>
          <a href="#gallery" className={`text-sm uppercase tracking-widest transition-colors ${isScrolled ? 'text-gray-600 hover:text-[#c4a132]' : 'text-gray-200 hover:text-white'}`}>Gallery</a>
          <a href="#booking" className={`px-6 py-2 border transition-colors uppercase text-sm tracking-widest ${isScrolled ? 'border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white' : 'border-white text-white hover:bg-white hover:text-[#1a1a1a]'}`}>
            Check Availability
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
