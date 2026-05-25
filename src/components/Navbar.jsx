
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-[#0F172A] font-bold text-xl tracking-tight">
              NXTWEBWORKS
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-gray-600 hover:text-[#0F172A] transition-colors">Services</a>
            <a href="#projects" className="text-sm font-medium text-gray-600 hover:text-[#0F172A] transition-colors">Projects</a>
            <a href="#process" className="text-sm font-medium text-gray-600 hover:text-[#0F172A] transition-colors">Process</a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-[#0F172A] transition-colors">Contact</a>
          </div>
          <div className="hidden md:flex items-center">
            <a
              href="#schedule"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#0F172A] hover:bg-[#1E293B] transition-colors"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
