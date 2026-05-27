import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-16 md:pt-24 pb-12 md:pb-20 bg-white relative overflow-hidden">
      {/* Background Mesh/Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] text-[#475569] text-sm font-medium mb-6">
            Enterprise Software Agency
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-[#0F172A] tracking-tight mb-8 leading-[1.1]">
            We build digital platforms for scale.
          </h1>
          <p className="text-lg text-[#475569] mb-10 text-balance mx-auto max-w-2xl leading-relaxed">
            We engineer high-performance web applications, robust CRM systems, and enterprise tools designed for speed, reliability, and growth.
          </p>
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 w-full">
            <a
              href="#projects"
              className="flex-1 sm:flex-none px-2 sm:px-6 py-3 rounded-md bg-[#0F172A] text-white text-sm sm:text-base font-medium hover:bg-[#1E293B] transition-colors text-center whitespace-nowrap"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="flex-1 sm:flex-none px-2 sm:px-6 py-3 rounded-md bg-white border border-[#E2E8F0] text-[#0F172A] text-sm sm:text-base font-medium hover:bg-gray-50 transition-colors shadow-sm text-center whitespace-nowrap"
            >
              Start a Project
            </a>
          </div>
        </motion.div>

        {/* Abstract Loading Composition / Software Skeleton Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 mx-auto max-w-5xl relative"
        >
          <div className="rounded-xl border border-[#E2E8F0] bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden aspect-[16/9] sm:aspect-[21/9] flex flex-col">
            {/* Top Bar Skeleton */}
            <div className="h-10 border-b border-[#E2E8F0] bg-[#F8FAFC] flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-200" />
              <div className="w-3 h-3 rounded-full bg-gray-200" />
              <div className="w-3 h-3 rounded-full bg-gray-200" />
              <div className="ml-4 w-48 h-4 rounded bg-gray-200" />
            </div>
            {/* Content Skeleton */}
            <div className="flex-1 p-6 flex gap-6 bg-white">
              {/* Sidebar */}
              <div className="w-48 hidden sm:flex flex-col gap-4">
                <div className="h-4 w-full rounded bg-gray-100" />
                <div className="h-4 w-3/4 rounded bg-gray-100" />
                <div className="h-4 w-5/6 rounded bg-gray-100" />
                <div className="h-4 w-full rounded bg-gray-100" />
                <div className="h-4 w-2/3 rounded bg-gray-100" />
              </div>
              {/* Main Area */}
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="h-24 flex-1 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]" />
                  <div className="h-24 flex-1 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]" />
                  <div className="h-24 flex-1 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]" />
                </div>
                <div className="flex-1 rounded-lg bg-[#FAFAFA] border border-[#E2E8F0] flex items-center justify-center relative overflow-hidden">
                   {/* Abstract graphic */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 flex items-end justify-between gap-2 opacity-20">
                     {[...Array(12)].map((_, i) => (
                       <div key={i} className="w-full bg-[#3B82F6] rounded-t-sm" style={{ height: `${20 + (i * 7) % 80}%` }} />
                     ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
