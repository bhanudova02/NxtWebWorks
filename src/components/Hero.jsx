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

        {/* Responsive Hero Banners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-20 mx-auto max-w-5xl relative"
        >
          {/* Desktop Browser View */}
          <div className="hidden sm:flex rounded-xl border border-[#E2E8F0] bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden aspect-[16/9] flex-col">
            {/* Top Bar Navigation UI */}
            <div className="h-10 border-b border-[#E2E8F0] bg-[#F8FAFC] flex items-center px-4 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              <div className="ml-4 w-60 h-5 rounded bg-white border border-[#E2E8F0] text-[9px] font-mono text-gray-400 flex items-center px-3 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
                nxtwebworks.com/dashboard/analytics
              </div>
            </div>
            {/* Desktop Dashboard Screenshot */}
            <div className="flex-1 overflow-hidden relative bg-gray-50">
              <img 
                src="/HeroSectionDesktop.jpeg" 
                alt="NxtWebWorks Platform Desktop Dashboard" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Mobile Phone Mockup View */}
          <div className="block sm:hidden max-w-[280px] mx-auto rounded-[32px] border-8 border-[#0F172A] bg-[#0F172A] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] overflow-hidden aspect-[9/16] relative">
            {/* Phone Notch/Speaker */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#0F172A] rounded-b-2xl z-20 flex justify-center items-center">
              <div className="w-10 h-1 rounded-full bg-gray-700/80 mb-1" />
            </div>
            {/* Mobile Dashboard Screenshot */}
            <div className="w-full h-full rounded-[24px] overflow-hidden bg-gray-50">
              <img 
                src="/HeroSectionMobile.jpeg" 
                alt="NxtWebWorks Platform Mobile App" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
