import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, Zap } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 md:px-12 container mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
          <motion.div variants={fadeInUp} className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white border border-brand-blue/20 shadow-sm text-sm font-medium text-brand-blue">
            ✨ Premium Digital Agency
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6">
            Next-Gen Websites That <span className="text-brand-blue">Grow Your Business</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
            We build modern, high-converting websites, Shopify stores, and scalable web applications for ambitious brands.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 bg-brand-blue text-white font-semibold rounded-full hover:bg-gray-800 hover:glow-effect transition-all duration-300 flex items-center gap-2">
              Start Your Project <ArrowRight size={20} />
            </a>
            <a href="#projects" className="px-8 py-4 bg-white border border-gray-200 text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300">
              View Projects
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Visual Mockup */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
          <div className="relative z-10 glass-card p-2 glow-effect-purple">
            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 relative">
              {/* Fake Browser Header */}
              <div className="h-8 bg-gray-200 flex items-center px-4 gap-2 border-b border-gray-100">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="relative overflow-hidden bg-white aspect-[4/3] w-full">
                 <img src="/images/hero4.webp" alt="Digital Agency Website Mockup" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="hidden md:flex absolute -top-10 -right-10 glass-card p-4 items-center gap-3 z-20 shadow-2xl bg-gray-50/90">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <ShoppingCart className="text-green-400" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-600">Shopify Sales</p>
              <p className="text-sm font-bold text-gray-900">+245% Growth</p>
            </div>
          </motion.div>
          
          <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="hidden md:flex absolute -bottom-10 -left-10 glass-card p-4 items-center gap-3 z-20 shadow-2xl bg-gray-50/90">
            <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
              <Zap className="text-brand-blue" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-600">Performance</p>
              <p className="text-sm font-bold text-gray-900">99/100 Score</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
