import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Share requirement',
    description: 'Tell us what you want to build, your budget range, and the main features you need.',
  },
  {
    title: 'Plan the scope',
    description: 'We prepare a clear page list or feature list with timeline and development approach.',
  },
  {
    title: 'Design and develop',
    description: 'We build the UI, frontend, backend, Shopify work, or dashboard based on the approved scope.',
  },
  {
    title: 'Launch and handoff',
    description: 'We deploy, test key flows, and share the details needed for future updates.',
  },
];

const Process = () => {
  return (
    <section id="process" className="border-b border-rn-border bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 max-w-2xl">
          <p className="text-sm font-semibold text-rn-blue">Process</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-rn-text md:text-4xl">How the project moves</h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-rn-border bg-rn-border md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="bg-white p-5"
            >
              <p className="font-mono text-xs font-bold text-rn-blue">0{index + 1}</p>
              <h3 className="mt-3 text-base font-semibold text-rn-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-rn-text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
