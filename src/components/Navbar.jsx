import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.webp';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200 ${isScrolled ? 'bg-white/95 backdrop-blur-xl py-4 shadow-sm' : 'bg-white/70 backdrop-blur-md py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
            <span className="text-gray-900">NXTWEB<span className="text-brand-blue">WORKS</span></span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Services', 'Projects', 'Testimonials', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {item}
              </a>
            ))}
            <a href="#schedule" className="px-6 py-2.5 bg-brand-blue text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300">
              Schedule a Call
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-600" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>

      </nav>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-end mb-8">
            <button className="text-gray-500 hover:text-gray-900 bg-gray-50 p-2 rounded-full" onClick={() => setMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {['Home', 'Services', 'Projects', 'Testimonials', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-gray-800 hover:text-brand-blue transition-colors">
                {item}
              </a>
            ))}
          </div>
          <div className="mt-auto mb-4">
            <a href="#schedule" onClick={() => setMobileMenuOpen(false)} className="block w-full py-4 text-center bg-brand-blue text-white font-bold rounded-xl shadow-lg shadow-brand-blue/30 hover:bg-gray-800 transition-all">
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
