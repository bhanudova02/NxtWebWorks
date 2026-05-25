import { Layers, ShoppingBag, LayoutGrid, Code2, Database, Briefcase } from 'lucide-react';

const services = [
  {
    title: 'Headless E-commerce',
    description: 'Blazing fast storefronts using Next.js, Tailwind CSS, and the Shopify Storefront API.',
    icon: ShoppingBag,
  },
  {
    title: 'Custom SaaS Platforms',
    description: 'Subscription-based software products built on a robust MERN stack architecture.',
    icon: Layers,
  },
  {
    title: 'Shopify Theme Customization',
    description: 'Transforming ordinary themes into highly interactive stores using Shopify Liquid & JS.',
    icon: LayoutGrid,
  },
  {
    title: 'Full-Stack Web Applications',
    description: 'Scalable and secure web apps using React, Node.js, Express, and MongoDB.',
    icon: Code2,
  },
  {
    title: 'Shopify Private Apps',
    description: 'Custom Node.js and REST API integrations to handle specific e-commerce business logic.',
    icon: Briefcase,
  },
  {
    title: 'Advanced Admin Dashboards',
    description: 'Internal business tools for managing complex data securely with modern React interfaces.',
    icon: Database,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-[#3B82F6] uppercase tracking-widest mb-4">
            Capabilities
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] tracking-tight">
            Comprehensive Technical Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-[#CBD5E1] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#F1F5F9] text-[#3B82F6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-medium text-[#0F172A] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#475569] leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
