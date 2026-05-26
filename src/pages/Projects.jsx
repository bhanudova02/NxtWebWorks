import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight, X, Globe, Eye, Sparkles, LayoutGrid } from 'lucide-react';
import { projects } from '../data/projects';
import { SlideVisual } from '../components/SlideVisual';

const categories = ['All', 'SaaS / Data Viz', 'Internal Tools', 'Headless Commerce', 'Web Application', 'Admin Panel'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  // Filter projects based on category selection
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()) || activeCategory.toLowerCase().includes(p.category.toLowerCase()));

  useEffect(() => {
    // Reset active slide index when project changes
    setActiveSlideIdx(0);
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-20">
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-20 pb-16 bg-gradient-to-b from-white to-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden">
        {/* Background Mesh Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles size={12} />
            <span>Our Portfolio</span>
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0F172A] tracking-tight mb-6 leading-tight max-w-3xl mx-auto">
            Engineered for performance. Built for scale.
          </h1>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Explore our case studies. We build clean, modular codebases designed to automate operations and drive business growth.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12 pt-8 border-t border-[#E2E8F0] text-center">
            <div>
              <p className="text-3xl font-bold text-gray-900">5+</p>
              <p className="text-xs text-gray-400 font-medium uppercase mt-1 tracking-wider">Enterprise Systems</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">100%</p>
              <p className="text-xs text-gray-400 font-medium uppercase mt-1 tracking-wider">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">99.9%</p>
              <p className="text-xs text-gray-400 font-medium uppercase mt-1 tracking-wider">Uptime Delivery</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">10k+</p>
              <p className="text-xs text-gray-400 font-medium uppercase mt-1 tracking-wider">Hours Engineered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 pb-4 border-b border-gray-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'bg-white border border-[#E2E8F0] text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.06)] transition-all group flex flex-col justify-between"
              >
                {/* Visual Mockup Container */}
                <div className="aspect-[16/10] bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden relative flex items-center justify-center p-4">
                  <div className="w-full h-full border border-gray-150 rounded-lg overflow-hidden shadow-inner bg-white transform group-hover:scale-[1.02] transition-transform duration-500">
                    <SlideVisual type={project.slides[0]} />
                  </div>
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="bg-white/95 px-3 py-1.5 rounded-lg shadow text-[10px] font-bold text-gray-800 flex items-center gap-1.5">
                      <Eye size={12} />
                      <span>Explore Project</span>
                    </span>
                  </div>
                </div>

                {/* Content details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[9px] font-semibold text-gray-500 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions button layout */}
                    <div className="mt-5 flex gap-2.5">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-[#E2E8F0] hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
                      >
                        <LayoutGrid size={12} />
                        <span>View Info</span>
                      </button>

                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
                        >
                          <span>Live Site</span>
                          <ArrowUpRight size={12} />
                        </a>
                      ) : (
                        <div className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-50 border border-dashed border-gray-200 text-gray-400 text-xs font-medium rounded-lg select-none">
                          No Live Link
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white border border-[#E2E8F0] rounded-2xl p-6">
            <p className="text-gray-400 text-sm font-medium">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Projects Slideshow Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-[#E2E8F0] flex flex-col"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-[#E2E8F0] flex justify-between items-center bg-gray-50">
                <div>
                  <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-base font-semibold text-gray-900 mt-1">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg border border-[#E2E8F0] bg-white text-gray-400 hover:text-gray-900 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6 flex-grow overflow-y-auto max-h-[75vh] hide-scrollbar">
                {/* Visual Slide Viewer Area */}
                <div className="space-y-4">
                  <div className="aspect-[16/10] sm:aspect-[21/9] w-full border border-[#E2E8F0] rounded-xl overflow-hidden shadow-inner bg-[#FCFCFD]">
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
                        className="w-8 h-8 rounded-lg border border-[#E2E8F0] bg-white flex items-center justify-center text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors cursor-pointer"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={() => setActiveSlideIdx(prev => Math.min(selectedProject.slides.length - 1, prev + 1))}
                        disabled={activeSlideIdx === selectedProject.slides.length - 1}
                        className="w-8 h-8 rounded-lg border border-[#E2E8F0] bg-white flex items-center justify-center text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors cursor-pointer"
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

                  {/* Live URL Button (Only shown if liveUrl exists) */}
                  {selectedProject.liveUrl && (
                    <div className="pt-2 flex justify-start">
                      <a 
                        href={selectedProject.liveUrl}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                      >
                        <Globe size={13} />
                        <span>Visit Live Platform</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 mt-20">
        <div className="bg-[#0F172A] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl text-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let's Build Something Exceptional</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Have a custom lead platform, API integration, or enterprise dashboard requirement? We deliver production-ready systems tailored to your needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white hover:bg-gray-50 text-[#0F172A] font-semibold text-sm transition-colors shadow-md"
          >
            <span>Start a Project</span>
          </a>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
};

export default Projects;
