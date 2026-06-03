import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-rn-surface border-y border-rn-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-1/3 bg-rn-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-rn-text mb-6">Simple, Transparent <span className="text-rn-blue">Pricing</span></h2>
          <p className="text-lg text-rn-text-muted">High-quality digital solutions at unbeatable prices. Choose the perfect plan for your business needs.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Landing Page */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-6 lg:p-8 rounded-2xl border border-rn-border hover:border-rn-blue/30 transition-all duration-300 relative flex flex-col shadow-sm">
            <h3 className="text-xl font-bold text-rn-text mb-2">Landing Page</h3>
            <p className="text-sm text-rn-text-muted mb-6">Perfect for single product or event promotions.</p>
            <div className="mb-6 flex items-end gap-1">
              <span className="text-3xl font-black text-rn-text">₹999</span>
              <span className="text-rn-text-muted text-sm pb-1">/only</span>
            </div>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {['Single Page Design', 'Contact Form', 'WhatsApp Chat Button', 'Mobile Responsive', 'Fast Delivery'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-rn-text-muted">
                  <div className="w-5 h-5 rounded-full bg-rn-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-rn-blue" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <a href="#contact" className="premium-outline text-center">
              Get Started
            </a>
          </motion.div>

          {/* Static Website */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-6 lg:p-8 rounded-2xl border border-rn-border hover:border-rn-blue/30 transition-all duration-300 relative flex flex-col shadow-sm">
            <h3 className="text-xl font-bold text-rn-text mb-2">Static Website</h3>
            <p className="text-sm text-rn-text-muted mb-6">Ideal for personal brands and local businesses.</p>
            <div className="mb-6 flex items-end gap-1">
              <span className="text-3xl font-black text-rn-text">₹1,999</span>
              <span className="text-rn-text-muted text-sm pb-1">/complete</span>
            </div>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {['Up to 5 Pages', 'Custom UI Design', 'Mobile Responsive', 'SEO Friendly', 'Contact Form Setup'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-rn-text-muted">
                  <div className="w-5 h-5 rounded-full bg-rn-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-rn-blue" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <a href="#contact" className="premium-outline text-center">
              Get Started
            </a>
          </motion.div>

          {/* Mini E-Commerce */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-6 lg:p-8 rounded-2xl border border-rn-border hover:border-rn-blue/30 transition-all duration-300 relative flex flex-col shadow-sm">
            <h3 className="text-xl font-bold text-rn-text mb-2">Mini E-Commerce</h3>
            <p className="text-sm text-rn-text-muted mb-6">Affordable e-commerce with WhatsApp orders.</p>
            <div className="mb-6 flex items-end gap-1">
              <span className="text-3xl font-black text-rn-text">₹2,999</span>
              <span className="text-rn-text-muted text-sm pb-1">/only</span>
            </div>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {['WhatsApp Cart Orders', 'Standard Theme Setup', 'Up to 20 Products', 'Mobile Optimized', 'No Custom Design'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-rn-text-muted">
                  <div className="w-5 h-5 rounded-full bg-rn-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-rn-blue" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <a href="#contact" className="premium-outline text-center">
              Start Selling
            </a>
          </motion.div>

          {/* Business Website */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white p-6 lg:p-8 rounded-2xl border border-rn-border hover:border-rn-blue/30 transition-all duration-300 relative flex flex-col shadow-sm">
            <h3 className="text-xl font-bold text-rn-text mb-2">Dynamic Business</h3>
            <p className="text-sm text-rn-text-muted mb-6">CMS-driven website for growing businesses.</p>
            <div className="mb-6 flex items-end gap-1">
              <span className="text-3xl font-black text-rn-text">₹4,999</span>
              <span className="text-rn-text-muted text-sm pb-1">/complete</span>
            </div>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {['Admin Panel (CMS)', 'Blog Setup', 'Dynamic Pages', 'SEO Optimized', 'Social Media Integration'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-rn-text-muted">
                  <div className="w-5 h-5 rounded-full bg-rn-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-rn-blue" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <a href="#contact" className="premium-outline text-center">
              Grow Business
            </a>
          </motion.div>

          {/* Shopify Custom E-Commerce */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.1)] p-6 lg:p-8 bg-rn-blue text-white border border-rn-blue hover:shadow-2xl transition-all duration-300 relative transform lg:-translate-y-4 glow-effect flex flex-col">
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
              <span className="bg-yellow-400 text-yellow-900 text-xs font-black px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">Most Popular</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Custom Shopify</h3>
            <p className="text-sm text-white/80 mb-6">Fully custom Shopify builds & website redesigns.</p>
            <div className="mb-6 flex items-end gap-1">
              <span className="text-3xl font-black text-white">₹9,999</span>
              <span className="text-white/70 text-sm pb-1">/complete</span>
            </div>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {['Complete Store Setup', 'Domain Integration', 'Payment Integrations', 'Custom Design/Redesign', 'Unlimited Products'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/90">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-white" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <a href="#contact" className="block w-full py-3 mt-auto text-center rounded-xl bg-white text-rn-blue font-bold hover:bg-gray-50 transition-colors shadow-lg">
              Start Project
            </a>
          </motion.div>

          {/* Web Apps & CRM */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="bg-white p-6 lg:p-8 rounded-2xl border border-rn-border hover:border-rn-blue/30 transition-all duration-300 relative flex flex-col shadow-sm">
            <h3 className="text-xl font-bold text-rn-text mb-2">Dashboards & CRM</h3>
            <p className="text-sm text-rn-text-muted mb-6">Complex logic, leads management & web apps.</p>
            <div className="mb-6 flex items-end gap-1">
              <span className="text-3xl font-black text-rn-text">Custom</span>
              <span className="text-rn-text-muted text-sm pb-1">/pricing</span>
            </div>
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {['Lead Management Systems', 'Admin Dashboards', 'Fullstack Web Apps', 'Third-Party APIs', 'Dedicated Support'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-rn-text-muted">
                  <div className="w-5 h-5 rounded-full bg-rn-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-rn-blue" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <a href="#contact" className="premium-outline text-center">
              Get Quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
