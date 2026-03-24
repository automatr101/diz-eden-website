"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button as MovingBorderButton } from "./ui/moving-border";

export const AnimeNavBar = ({
  className,
}: {
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Amenities", link: "#amenities" },
    { name: "Gallery", link: "#gallery" },
    { name: "Location", link: "#location" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12 backdrop-blur-md bg-black/40 border-b border-white/5",
        className
      )}
    >
      {/* Brand */}
      <Link to="/" className="text-xl font-playfair font-semibold text-white tracking-widest uppercase relative group">
        Diz Eden
        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full"></span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="text-sm font-inter text-gray-300 hover:text-white transition-colors uppercase tracking-wider relative group"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
        
        <MovingBorderButton
          as="a"
          href="#booking"
          containerClassName="ml-6 h-12 w-40"
          borderRadius="0.25rem"
          className="bg-brand-gold/10 backdrop-blur-sm border-none text-white text-sm font-inter font-bold uppercase tracking-widest hover:bg-brand-gold/20 transition-all duration-300"
          borderClassName="bg-[radial-gradient(#d4af37_40%,transparent_60%)]"
          duration={3000}
        >
          Book Now
        </MovingBorderButton>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white p-2 focus:outline-none"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-brand-black border-t border-white/10 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-inter text-gray-300 hover:text-white uppercase tracking-widest"
                >
                  {item.name}
                </a>
              ))}
              <MovingBorderButton
                as="a"
                href="#booking"
                onClick={() => setIsOpen(false)}
                containerClassName="mt-6 h-14 w-full"
                borderRadius="0.25rem"
                className="bg-brand-gold/10 backdrop-blur-sm border-none text-white text-lg font-inter font-bold uppercase tracking-widest"
                borderClassName="bg-[radial-gradient(#d4af37_40%,transparent_60%)]"
                duration={3000}
              >
                Book Now
              </MovingBorderButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
