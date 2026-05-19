import { motion } from 'framer-motion';
import { Monitor, ShoppingCart, Database, Code, PenTool, Layout, Zap, Headphones } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Premium <span className="text-brand-blue">Services</span></h2>
          <p className="text-lg text-gray-600">Comprehensive digital solutions tailored for ambitious brands and modern businesses.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Monitor, title: "Website Development", desc: "Custom, high-performance websites built with modern frameworks." },
            { icon: ShoppingCart, title: "Shopify Development", desc: "High-converting ecommerce stores designed to maximize sales." },
            { icon: Database, title: "Ecommerce Stores", desc: "Custom ecommerce platforms with seamless payment integrations." },
            { icon: Code, title: "Fullstack Web Apps", desc: "Complex, scalable web applications with robust backend systems." },
            { icon: PenTool, title: "UI/UX Design", desc: "User-centric interfaces that deliver exceptional digital experiences." },
            { icon: Layout, title: "Website Redesign", desc: "Breathe new life into your existing website with a modern overhaul." },
            { icon: Zap, title: "Speed Optimization", desc: "Lightning-fast load times to improve SEO and user retention." },
            { icon: Headphones, title: "Maintenance & Support", desc: "Reliable ongoing support to keep your digital assets secure." }
          ].map((service, idx) => (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } } }} key={idx} className="glass-card p-8 group hover:bg-gray-800/5 transition-all duration-300 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/0 to-brand-purple/0 group-hover:from-brand-blue/5 group-hover:to-brand-purple/5 transition-all duration-500"></div>
              <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-blue/30 transition-transform duration-300 relative z-10">
                <service.icon className="text-gray-600 group-hover:text-brand-blue transition-colors" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
