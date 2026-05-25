import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Fintech Analytics Platform',
    category: 'SaaS / Data Viz',
    placeholderType: 'analytics',
  },
  {
    title: 'Enterprise CRM System',
    category: 'Internal Tools',
    placeholderType: 'crm',
  },
  {
    title: 'Global E-commerce Store',
    category: 'Headless Commerce',
    placeholderType: 'ecommerce',
  },
  {
    title: 'Healthcare Portal',
    category: 'Web Application',
    placeholderType: 'app',
  },
  {
    title: 'Logistics Dashboard',
    category: 'Admin Panel',
    placeholderType: 'dashboard',
  },
];

const PlaceholderVisual = ({ type }) => {
  switch (type) {
    case 'analytics':
      return (
        <div className="w-full h-full bg-[#FAFAFA] flex flex-col p-6 gap-4">
          <div className="flex justify-between items-center mb-2">
            <div className="h-4 w-32 bg-gray-200 rounded" />
            <div className="h-6 w-20 bg-gray-200 rounded-full" />
          </div>
          <div className="flex gap-4">
            <div className="h-24 flex-1 bg-white border border-gray-100 rounded-lg shadow-sm" />
            <div className="h-24 flex-1 bg-white border border-gray-100 rounded-lg shadow-sm" />
          </div>
          <div className="flex-1 bg-white border border-gray-100 rounded-lg shadow-sm flex items-end p-4 gap-2">
            {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
              <div key={i} className="flex-1 bg-blue-100 rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      );
    case 'crm':
      return (
        <div className="w-full h-full bg-[#FAFAFA] flex p-4 gap-4">
          <div className="w-16 flex flex-col gap-3 border-r border-gray-200 pr-4">
            <div className="w-8 h-8 rounded bg-gray-200 mb-4" />
            <div className="w-8 h-8 rounded bg-gray-100" />
            <div className="w-8 h-8 rounded bg-gray-100" />
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="h-8 w-48 bg-gray-200 rounded mb-2" />
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-12 w-full bg-white border border-gray-100 rounded flex items-center px-4 gap-4 shadow-sm">
                <div className="w-6 h-6 rounded-full bg-gray-200" />
                <div className="h-3 w-32 bg-gray-200 rounded" />
                <div className="ml-auto h-3 w-16 bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      );
    case 'ecommerce':
      return (
        <div className="w-full h-full bg-[#FAFAFA] flex flex-col">
          <div className="h-12 border-b border-gray-200 flex items-center px-6 justify-between bg-white">
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="flex gap-3">
              <div className="h-4 w-12 bg-gray-100 rounded" />
              <div className="h-4 w-12 bg-gray-100 rounded" />
            </div>
          </div>
          <div className="p-6 grid grid-cols-2 gap-4 flex-1">
            <div className="bg-gray-100 rounded-lg h-full" />
            <div className="flex flex-col gap-4 justify-center pl-4">
              <div className="h-6 w-3/4 bg-gray-200 rounded" />
              <div className="h-4 w-1/4 bg-gray-200 rounded" />
              <div className="h-20 w-full bg-gray-100 rounded mt-4" />
              <div className="h-10 w-full bg-blue-500 rounded mt-2" />
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="w-full h-full bg-[#FAFAFA] p-6 flex flex-col gap-4">
          <div className="h-40 w-full bg-gray-100 rounded-lg" />
          <div className="grid grid-cols-3 gap-4 flex-1">
            <div className="bg-gray-100 rounded-lg" />
            <div className="bg-gray-100 rounded-lg col-span-2" />
          </div>
        </div>
      );
  }
};

const FeaturedProjects = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    // Safety check: if mouse button is released outside window/element
    if (e.buttons !== 1) {
      setIsDragging(false);
      return;
    }
    
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-[#F5F3FF] border-b border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] mb-4 tracking-tight">
              Featured Work
            </h2>
            <p className="text-base md:text-lg text-[#475569] leading-relaxed">
              A selection of our recent enterprise platforms and web applications.
            </p>
          </div>
        </div>

        <div>
          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`flex gap-6 overflow-x-auto pb-8 hide-scrollbar ${!isDragging ? 'snap-x snap-mandatory' : ''} ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-[75vw] sm:w-[60vw] md:w-[45vw] lg:w-[38%] flex-shrink-0 snap-start group cursor-pointer"
              >
                <div className="h-[280px] sm:h-[320px] md:h-auto md:aspect-[16/10] bg-white rounded-sm border border-[#E2E8F0] overflow-hidden mb-6 relative shadow-sm transition-all duration-500 group-hover:shadow-md">
                  <PlaceholderVisual type={project.placeholderType} />
                  <div className="absolute inset-0 bg-[#0F172A]/[0.02] group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] md:text-xs font-medium text-[#4F46E5] uppercase tracking-wider mb-1 md:mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-base md:text-xl font-medium text-[#0F172A] group-hover:text-[#4F46E5] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 md:px-3 py-1.5 rounded-md border border-[#E2E8F0] text-xs font-semibold text-[#475569] group-hover:bg-[#4F46E5] group-hover:text-white group-hover:border-[#4F46E5] transition-all duration-300 mr-2 mt-1">
                    <span className="hidden md:inline">View Info</span>
                    <ArrowUpRight className="w-4 h-4 md:w-3.5 md:h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-2 mt-4 pr-4 lg:pr-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-md border border-[#CBD5E1] flex items-center justify-center transition-colors shadow-sm ${
                canScrollLeft 
                  ? 'bg-white text-[#0F172A] hover:bg-gray-50 cursor-pointer' 
                  : 'bg-gray-50 text-gray-300 cursor-not-allowed opacity-50'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-md border border-[#CBD5E1] flex items-center justify-center transition-colors shadow-sm ${
                canScrollRight 
                  ? 'bg-white text-[#0F172A] hover:bg-gray-50 cursor-pointer' 
                  : 'bg-gray-50 text-gray-300 cursor-not-allowed opacity-50'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default FeaturedProjects;
