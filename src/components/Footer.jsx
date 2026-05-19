import { ChevronRight } from 'lucide-react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 border-t border-gray-200 bg-gray-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 max-w-sm">
            <a href="#" className="text-2xl font-black tracking-tighter flex items-center gap-2 mb-6">
              <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
              <span className="text-gray-900">NXTWEB<span className="text-brand-blue">WORKS</span></span>
            </a>
            <p className="text-gray-600 leading-relaxed mb-8">
              A premium digital agency crafting exceptional web experiences, scalable applications, and high-converting ecommerce solutions for ambitious modern brands.
            </p>
            <div className="flex gap-4">
              {[FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-600 hover:text-brand-blue transition-colors flex items-center gap-2 text-sm">
                    <ChevronRight size={14} /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Services</h4>
            <ul className="flex flex-col gap-4">
              {['Web Development', 'Shopify Stores', 'UI/UX Design', 'Fullstack Apps', 'SEO Optimization'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-600 hover:text-brand-purple transition-colors flex items-center gap-2 text-sm">
                    <ChevronRight size={14} /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} NXTWEBWORKS. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
