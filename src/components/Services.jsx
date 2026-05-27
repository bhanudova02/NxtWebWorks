import { motion } from 'framer-motion';
import { Layers, ShoppingBag, LayoutGrid, Code2, Database, Briefcase, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Headless E-commerce',
    description: 'Blazing fast storefronts using Next.js, Tailwind CSS, and the Shopify Storefront API.',
    icon: ShoppingBag,
    accent: 'from-amber-500/10 to-transparent',
    iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
    tag: 'Commerce',
  },
  {
    title: 'Custom SaaS Platforms',
    description: 'Subscription-based software products built on a robust MERN stack architecture.',
    icon: Layers,
    accent: 'from-blue-500/10 to-transparent',
    iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
    tag: 'SaaS',
  },
  {
    title: 'Shopify Theme Customization',
    description: 'Transforming ordinary themes into highly interactive stores using Shopify Liquid & JS.',
    icon: LayoutGrid,
    accent: 'from-green-500/10 to-transparent',
    iconBg: 'bg-green-50 text-green-600 border-green-100',
    tag: 'Shopify',
  },
  {
    title: 'Full-Stack Web Applications',
    description: 'Scalable and secure web apps using React, Node.js, Express, and MongoDB.',
    icon: Code2,
    accent: 'from-violet-500/10 to-transparent',
    iconBg: 'bg-violet-50 text-violet-600 border-violet-100',
    tag: 'Full-Stack',
  },
  {
    title: 'Shopify Private Apps',
    description: 'Custom Node.js and REST API integrations to handle specific e-commerce business logic.',
    icon: Briefcase,
    accent: 'from-rose-500/10 to-transparent',
    iconBg: 'bg-rose-50 text-rose-600 border-rose-100',
    tag: 'API',
  },
  {
    title: 'Advanced Admin Dashboards',
    description: 'Internal business tools for managing complex data securely with modern React interfaces.',
    icon: Database,
    accent: 'from-cyan-500/10 to-transparent',
    iconBg: 'bg-cyan-50 text-cyan-600 border-cyan-100',
    tag: 'Dashboards',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white border-b border-[#E2E8F0] relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A] tracking-tight">
              Comprehensive Technical<br />Solutions
            </h2>
          </div>
          <p className="text-sm text-[#475569] max-w-xs leading-relaxed md:text-right">
            Every service is delivered with clean, scalable code and a focus on long-term maintainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group relative p-7 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Gradient accent top-right */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.accent} pointer-events-none rounded-bl-full`} />

                <div className="relative z-10">
                  {/* Top row: icon + tag */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-11 h-11 rounded-xl border ${service.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-[#0F172A] mb-2 leading-snug group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover arrow */}
                  <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-gray-300 group-hover:text-blue-500 transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowUpRight size={13} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
