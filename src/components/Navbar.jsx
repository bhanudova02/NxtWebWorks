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
            <img src="/src/assets/logo.webp" alt="Logo" className="w-8 h-8 object-contain" />
            <span className="text-gray-900">NXTWEB<span className="text-brand-blue">WORKS</span></span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Services', 'Projects', 'Testimonials', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {item}
              </a>
            ))}
            <a href="#contact" className="px-6 py-2.5 bg-brand-blue text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300">
              Book Free Call
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 p-6 flex flex-col gap-6 shadow-2xl">
            {['Home', 'Services', 'Projects', 'Testimonials', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-600">
                {item}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-center bg-brand-blue text-white font-semibold rounded-full shadow-md">
              Book Free Call
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
