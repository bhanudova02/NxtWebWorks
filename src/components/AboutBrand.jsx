import { motion } from 'framer-motion';
import { Layout, Smartphone, Zap, CheckCircle, Shield } from 'lucide-react';

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

const AboutBrand = () => {
  return (
    <section className="py-24 md:py-32 container mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative rounded-2xl overflow-hidden glass-card p-2 border-gray-200 glow-effect">
          <img src="/images/workspace.webp" alt="Developer Workspace" className="w-full h-[400px] object-cover rounded-xl" />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Trusted <span className="text-brand-blue">Web Development</span> Partner
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-8 leading-relaxed">
            At NXTWEBWORKS, we help brands build a professional online presence with stunning modern design and scalable technology. We don't just build websites; we build digital experiences that convert visitors into loyal customers.
          </motion.p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Layout, text: "Clean & Modern Design" },
              { icon: Smartphone, text: "Mobile-First Development" },
              { icon: Zap, text: "Fast Loading Websites" },
              { icon: CheckCircle, text: "SEO-Friendly Structure" },
              { icon: Shield, text: "Secure Scalable Architecture" }
            ].map((item, idx) => (
              <motion.div variants={fadeInUp} key={idx} className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-blue/10 text-brand-blue">
                  <item.icon size={18} />
                </div>
                <span className="text-gray-600 font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBrand;
