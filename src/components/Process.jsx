import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Process = () => {
  return (
    <section className="py-24 md:py-32 container mx-auto px-6 md:px-12">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Proven <span className="text-brand-blue">Process</span></h2>
        <p className="text-lg text-gray-600">A transparent, streamlined workflow designed to turn your vision into reality seamlessly.</p>
      </div>
      
      <div className="relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 z-0"></div>
        
        <div className="grid md:grid-cols-5 gap-8 relative z-10">
          {[
            { step: "01", title: "Discovery Call", desc: "Understanding your vision, goals, and requirements." },
            { step: "02", title: "Strategy", desc: "Mapping out the architecture and user journey." },
            { step: "03", title: "UI/UX Design", desc: "Crafting beautiful, intuitive visual interfaces." },
            { step: "04", title: "Development", desc: "Building with modern, scalable web technologies." },
            { step: "05", title: "Launch & Support", desc: "Deploying and providing ongoing maintenance." }
          ].map((process, idx) => (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} key={idx} className="relative flex flex-col md:items-center md:text-center group">
              <div className="w-16 h-16 bg-white glass-card border-gray-300 rounded-2xl flex items-center justify-center text-xl font-bold text-gray-900 mb-6 group-hover:border-brand-blue group-hover:text-brand-blue transition-colors glow-effect-purple relative z-10">
                {process.step}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h4>
              <p className="text-sm text-gray-600">{process.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
