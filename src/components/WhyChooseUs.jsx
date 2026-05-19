import { motion } from 'framer-motion';
import { Zap, PenTool, Smartphone, Gauge, Database, Code, Layout, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="py-24 md:py-32 bg-gray-50/50 border-y border-gray-100 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-1/2 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose <span className="text-brand-blue">NXTWEBWORKS</span></h2>
          <p className="text-lg text-gray-600">We don't just deliver code; we deliver digital ecosystems built for performance, scalability, and aesthetics.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Fast Delivery", icon: Zap },
            { title: "Modern UI Design", icon: PenTool },
            { title: "Mobile Responsive", icon: Smartphone },
            { title: "SEO Ready", icon: Gauge },
            { title: "Scalable Dev", icon: Database },
            { title: "Clean Code", icon: Code },
            { title: "Business Focused", icon: Layout },
            { title: "Long-term Support", icon: Shield }
          ].map((feature, idx) => (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} key={idx} className="glass-card p-6 flex items-center gap-4 bg-white border-gray-200 hover:border-brand-blue/30 transition-colors">
              <div className="p-3 bg-white rounded-lg border border-gray-100">
                <feature.icon className="text-brand-blue" size={20} />
              </div>
              <h4 className="font-semibold text-gray-700">{feature.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
