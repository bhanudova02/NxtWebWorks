import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const TrustStats = () => {
  return (
    <section className="py-10 border-y border-gray-100 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "<2wks", label: "Fast Delivery" },
            { value: "100%", label: "Modern Scalable Code" }
          ].map((stat, idx) => (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} key={idx} className="text-center px-4">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-sm text-gray-600 font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
