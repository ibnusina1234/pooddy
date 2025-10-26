import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Logo from '../atoms/Logo';
import Button from '../atoms/Button';
import { useCart } from '../../context/CartContext'; // ✅ IMPORT

export default function Navbar({ whatsappNumber }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalItems, setIsCartOpen } = useCart(); // ✅ USE CART

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItems = getTotalItems();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl py-3' 
          : 'bg-white/5 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo & Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <Logo 
            size={scrolled ? 'sm' : 'md'} 
            variant="default"
            className="group-hover:scale-110 transition-transform duration-300"
          />
          <span className={`font-black transition-all duration-300 ${
            scrolled 
              ? 'text-xl md:text-2xl text-gray-800' 
              : 'text-2xl md:text-3xl text-white'
          }`}>
            Pooddy<span className="text-pink-500">💖</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a 
            href="#products" 
            className={`font-semibold transition-colors ${
              scrolled 
                ? 'text-gray-700 hover:text-pink-600' 
                : 'text-white/90 hover:text-white'
            }`}
          >
            Menu
          </a>

          {/* ✅ CART ICON dengan Badge */}
          <button
            onClick={() => setIsCartOpen(true)}
            className={`relative p-2 rounded-full transition-all hover:scale-110 ${
              scrolled
                ? 'bg-pink-100 text-pink-600 hover:bg-pink-200'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <span className="text-2xl">🛒</span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center shadow-lg">
                {totalItems}
              </span>
            )}
          </button>

          <Button
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo! Aku mau tanya tentang Pooddy 💖")}`}
            variant="primary"
            className="!px-6 !py-2.5 !text-sm"
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-3">
          {/* ✅ CART ICON Mobile */}
          <button
            onClick={() => setIsCartOpen(true)}
            className={`relative p-2 rounded-full transition-all ${
              scrolled
                ? 'bg-pink-100 text-pink-600'
                : 'bg-white/20 text-white'
            }`}
          >
            <span className="text-xl">🛒</span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {/* Hamburger */}
          <button
            className="p-2"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((s) => !s)}
          >
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${menuOpen ? 'transform rotate-45 translate-y-2' : ''} ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></div>
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''} ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></div>
            <div className={`w-6 h-0.5 transition-all ${menuOpen ? '-rotate-45 -translate-y-1' : ''} ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></div>
          </button>
        </div>
      </div>
      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className={`md:hidden mt-2 w-full`}>
          <div className={`${scrolled ? 'bg-white/95 text-gray-800' : 'bg-white/5 text-white'} backdrop-blur-md py-4 shadow-md`}> 
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-3">
              <a href="#products" onClick={() => setMenuOpen(false)} className="font-semibold">
                Menu
              </a>
              <button
                onClick={() => { setIsCartOpen(true); setMenuOpen(false); }}
                className="text-left font-semibold"
              >
                Cart ({totalItems})
              </button>
              <Button
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo! Aku mau tanya tentang Pooddy 💖')}`}
                variant="primary"
                className="!px-4 !py-2 !text-sm max-w-max"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}