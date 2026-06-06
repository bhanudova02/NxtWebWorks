import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between md:h-16">
          <Link to="/" onClick={closeMenu} className="flex items-center">
            <img
              src="/logo/logo.png"
              alt="NxtWebWorks"
              className="h-8 w-auto object-contain"
            />
          </Link>

          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative py-1.5 text-sm font-semibold transition-colors ${pathname === item.to ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
              >
                <span>{item.label}</span>
                {pathname === item.to && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute -bottom-1 left-0 h-[2px] w-5 bg-blue-600"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900 focus:outline-none md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeMenu}
                className="fixed inset-0 z-[100] bg-slate-900/20 backdrop-blur-sm md:hidden"
              />

              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed right-0 top-0 z-[101] flex h-screen w-72 flex-col justify-between border-l border-slate-200 bg-white p-6 shadow-2xl md:hidden text-slate-900"
              >
                <div className="space-y-8">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <img
                      src="/logo/black_logo.webp"
                      alt="NxtWebWorks"
                      className="h-7 w-auto object-contain"
                    />
                    <button
                      onClick={closeMenu}
                      className="-mr-2 rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
                      aria-label="Close menu"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <nav className="mt-5 flex flex-col gap-3">
                    {navItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={closeMenu}
                        className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-semibold transition-colors ${pathname === item.to ? 'bg-slate-50 text-slate-900' : 'text-slate-500 hover:bg-slate-50/50 hover:text-slate-900'}`}
                      >
                        <span>{item.label}</span>
                        <ArrowRight size={14} className="text-blue-500/60" />
                      </Link>
                    ))}
                  </nav>
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
