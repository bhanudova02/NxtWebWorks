import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { SlideVisual } from './SlideVisual';

const FeaturedProjects = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  // State for handling the modal/popup details
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

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

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e) => {
    // Only drag on left click and not on a button click
    if (e.button !== 0 || e.target.closest('button') || e.target.closest('a')) return;
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
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="projects" className="py-12 md:py-16 bg-white border-b border-rn-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              Featured Builds
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] tracking-tight mb-3">
              Technical Case Studies
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Explore our recent custom platforms, dashboards, and integrations.
            </p>
          </div>
        </div>

        <div>
          {/* Scroll List container */}
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
                onClick={() => {
                  if (!isDragging) {
                    setSelectedProject(project);
                    setActiveSlideIdx(0);
                  }
                }}
                className="w-[78vw] sm:w-[60vw] md:w-[45vw] lg:w-[38%] flex-shrink-0 snap-start group cursor-pointer"
              >
                <div className="h-[280px] sm:h-[320px] md:h-auto md:aspect-[16/10] bg-white rounded-xl border border-[#E2E8F0] overflow-hidden mb-6 relative shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200">
                  <SlideVisual type={project.slides[0]} />
                  <div className="absolute inset-0 bg-black/[0.01] hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] md:text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-base md:text-lg font-semibold text-[#0F172A] group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E2E8F0] bg-white text-xs font-semibold text-[#475569] group-hover:bg-[#0F172A] group-hover:text-white group-hover:border-[#0F172A] transition-all duration-300 mr-2 mt-1 cursor-pointer">
                    <span>View Info</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-2 mt-4 pr-4 lg:pr-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-lg border border-[#CBD5E1] flex items-center justify-center transition-colors shadow-sm ${
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
              className={`w-10 h-10 rounded-lg border border-[#CBD5E1] flex items-center justify-center transition-colors shadow-sm ${
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

      {/* Case Study Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl border border-rn-border shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col outline-none relative overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-rn-border flex-shrink-0">
                <h3 className="text-lg font-semibold text-[#0F172A]">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-full border border-rn-border bg-white flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors shadow-sm cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="p-6 space-y-6 flex-grow overflow-y-auto">
                {/* Visual Slide Viewer Area */}
                <div className="space-y-4">
                  <div className="aspect-[16/10] sm:aspect-[21/9] w-full border border-rn-border rounded-xl overflow-hidden shadow-inner bg-white">
                    <SlideVisual type={selectedProject.slides[activeSlideIdx]} />
                  </div>
                  
                  {/* Slider Pagination Controls */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-400 font-mono">
                      Image {activeSlideIdx + 1} of {selectedProject.slides.length}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setActiveSlideIdx(prev => Math.max(0, prev - 1))}
                        disabled={activeSlideIdx === 0}
                        className="w-8 h-8 rounded-lg border border-rn-border bg-white flex items-center justify-center text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors cursor-pointer"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={() => setActiveSlideIdx(prev => Math.min(selectedProject.slides.length - 1, prev + 1))}
                        disabled={activeSlideIdx === selectedProject.slides.length - 1}
                        className="w-8 h-8 rounded-lg border border-rn-border bg-white flex items-center justify-center text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors cursor-pointer"
                        aria-label="Next image"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Description and Action Info */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">Project Overview</h4>
                    <p className="text-sm text-[#475569] leading-relaxed">{selectedProject.description}</p>
                  </div>
                </div>
              </div>

              {/* Modal Footer - Fixed */}
              <div className="p-4 sm:p-6 border-t border-rn-border flex justify-end gap-3 flex-shrink-0 bg-rn-surface/40">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-lg border border-rn-border bg-white text-xs font-semibold text-[#475569] hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Close
                </button>
                {selectedProject.liveUrl && (
                  <a 
                    href={selectedProject.liveUrl}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                  >
                    <Globe size={13} />
                    <span>Visit Live Platform</span>
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default FeaturedProjects;
