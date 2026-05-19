import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Featured <span className="text-brand-blue">Projects</span></h2>
          <p className="text-lg text-gray-600">Explore our recent work. We build scalable, beautiful digital products that drive real business results.</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { img: "/images/fashion.webp", category: "Ecommerce", title: "Fashion Ecommerce Store" },
          { img: "/images/restaurant.webp", category: "Restaurant", title: "Restaurant Website" },
          { img: "/images/realestate.webp", category: "Real Estate", title: "Luxury Real Estate" },
          { img: "/images/beauty.webp", category: "Shopify Store", title: "Shopify Beauty Brand" },
          { img: "/images/saas.webp", category: "SaaS Platform", title: "SaaS Analytics Dashboard" },
          { img: "/images/consulting.webp", category: "Consulting", title: "Business Consulting" }
        ].map((project, idx) => (
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } } }} key={idx} className="group cursor-pointer">
            <div className="glass-card overflow-hidden rounded-xl mb-4 relative aspect-square border-gray-200">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent opacity-80"></div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 bg-white/95 shadow-sm border border-gray-100 rounded-md text-xs font-bold text-gray-900 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                 <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-blue/40 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                   <ExternalLink size={20} />
                 </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">{project.title}</h3>
            <p className="text-gray-600 text-sm">A modern digital experience tailored for growth and conversion.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
