import { motion } from 'framer-motion';

const technologies = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "MongoDB"] },
  { category: "Commerce", items: ["Shopify Liquid", "Theme Dev", "App Integration", "GraphQL"] },
  { category: "DevOps", items: ["Vercel", "GitHub CI/CD", "Edge Hosting", "Lighthouse"] },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "3×", label: "Avg Perf Boost" },
];

const TrustStats = () => {
  return (
    <section className="py-14 md:py-20 bg-[#EFF6FF] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-xl border border-[#E2E8F0] px-5 py-5 text-center shadow-sm"
            >
              <p className="text-2xl font-bold text-[#0F172A] tracking-tight">{stat.value}</p>
              <p className="text-[11px] text-[#64748B] font-medium mt-1 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
          <div>
            <p className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest mb-1">Tech Stack</p>
            <h2 className="text-xl md:text-2xl font-semibold text-[#0F172A] tracking-tight">
              Technologies We Master
            </h2>
          </div>
          <p className="text-xs text-[#64748B] max-w-xs sm:text-right">
            Production-grade tooling used across every project we ship.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {technologies.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white border border-[#E2E8F0] rounded-xl p-5 hover:shadow-sm hover:border-[#CBD5E1] transition-all duration-300"
            >
              <h3 className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md border border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-center flex-shrink-0">
                      {/* Replace with: <img src="/icons/{tech}.svg" alt={item} className="w-3.5 h-3.5 object-contain" /> */}
                    </div>
                    <span className="text-xs text-[#1E293B] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustStats;
