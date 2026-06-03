import React from 'react';
import { ArrowUpRight, Code2, LayoutDashboard, ShoppingBag, Monitor, Smartphone, ShoppingCart } from 'lucide-react';

const services = [
  {
    title: 'Website development',
    description: 'Clean responsive websites for service businesses, portfolios, agencies, and product pages.',
    points: ['Landing pages', 'Company websites', 'Responsive UI'],
    icon: Monitor,
  },
  {
    title: 'Full-stack applications',
    description: 'Custom React and Node.js applications with authentication, APIs, database, and deployment.',
    points: ['React frontends', 'Node APIs', 'MongoDB setup'],
    icon: Code2,
  },
  {
    title: 'Shopify stores',
    description: 'Theme customization, storefront sections, product pages, and store experience improvements.',
    points: ['Theme edits', 'Custom sections', 'Store polish'],
    icon: ShoppingBag,
  },
  {
    title: 'Admin dashboards',
    description: 'Internal panels for orders, customers, reports, content, and day-to-day business operations.',
    points: ['Data views', 'Role access', 'Business tools'],
    icon: LayoutDashboard,
  },
  {
    title: 'Mobile apps development',
    description: 'Cross-platform iOS and Android mobile applications built with React Native for smooth performance.',
    points: ['iOS & Android', 'App Store deploy', 'Native features'],
    icon: Smartphone,
  },
  {
    title: 'Ecommerce websites',
    description: 'Custom online stores, cart systems, payment gateways, and checkout flows optimized for sales.',
    points: ['Payment gateway', 'Inventory management', 'High conversion'],
    icon: ShoppingCart,
  },
];

const Services = () => {
  return (
    <section id="services" className="border-b border-rn-border bg-rn-surface py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          data-aos="fade-up"
          className="mb-7 max-w-2xl"
        >
          <p className="text-sm font-semibold text-rn-blue">Services</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-rn-text md:text-4xl">What we can build for you</h2>
          <p className="mt-3 text-sm leading-6 text-rn-text-muted">Pick one service or combine them into a complete product build.</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="rounded-lg border border-rn-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-md bg-rn-blue/10 text-rn-blue">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold text-rn-text">{service.title}</h3>
                      <ArrowUpRight size={16} className="mt-1 flex-none text-rn-text-muted" />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-rn-text-muted">{service.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.points.map((point) => (
                        <span key={point} className="rounded-md bg-rn-blue/5 px-2.5 py-1 text-xs font-medium text-rn-blue">{point}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
