import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, Home, Info, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo brand link */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={closeMenu} className="text-[#0F172A] font-bold text-xl tracking-tight">
              NXTWEBWORKS
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-[#0F172A] transition-colors">
              <Home size={14} className="text-gray-400 stroke-[1.5]" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-[#0F172A] transition-colors">
              <Info size={14} className="text-gray-400 stroke-[1.5]" />
              <span>About Us</span>
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-[#0F172A] transition-colors">
              <Phone size={14} className="text-gray-400 stroke-[1.5]" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Desktop Call Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href="/#schedule"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-[#0F172A] hover:bg-[#1E293B] transition-colors shadow-sm"
            >
              <Calendar size={14} className="stroke-[1.5]" />
              <span>Book a Call</span>
            </a>
          </div>

          {/* Hamburger Menu Toggle Button (Mobile view only) */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Render sidebar in document.body using React Portals to escape backdrop-blur stacking context container limits */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Full Viewport Backdrop Blur Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeMenu}
                className="fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm md:hidden"
              />

              {/* Sidebar Slider Drawer Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 z-[101] w-72 h-screen bg-white shadow-2xl border-l border-gray-100 p-6 flex flex-col justify-between md:hidden"
              >
                <div className="space-y-8">
                  {/* Header panel inside sidebar */}
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-gray-900 font-bold text-lg tracking-tight">NXTWEBWORKS</span>
                    <button
                      onClick={closeMenu}
                      className="p-2 -mr-2 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer"
                      aria-label="Close menu"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  {/* Vertical menu navigation links */}
                  <nav className="flex flex-col gap-3">
                    <Link 
                      to="/" 
                      onClick={closeMenu} 
                      className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors py-2.5 px-3 rounded-lg hover:bg-gray-50 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <Home size={18} className="text-gray-400 stroke-[1.5]" />
                        <span>Home</span>
                      </div>
                      <ArrowRight size={14} className="text-gray-300" />
                    </Link>
                    <Link 
                      to="/about" 
                      onClick={closeMenu} 
                      className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors py-2.5 px-3 rounded-lg hover:bg-gray-50 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <Info size={18} className="text-gray-400 stroke-[1.5]" />
                        <span>About Us</span>
                      </div>
                      <ArrowRight size={14} className="text-gray-300" />
                    </Link>
                    <Link 
                      to="/contact" 
                      onClick={closeMenu} 
                      className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors py-2.5 px-3 rounded-lg hover:bg-gray-50 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <Phone size={18} className="text-gray-400 stroke-[1.5]" />
                        <span>Contact Us</span>
                      </div>
                      <ArrowRight size={14} className="text-gray-300" />
                    </Link>
                  </nav>
                </div>

                {/* Call button Action at bottom */}
              <div className="pt-6 border-t border-gray-100 space-y-4">
                <a
                  href="/#schedule"
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm transition-colors shadow-md"
                >
                  <Calendar size={16} className="stroke-[1.5]" />
                  <span>Book discovery call</span>
                  <ArrowRight size={14} />
                </a>
              </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </nav>
  );
};

export default Navbar;
