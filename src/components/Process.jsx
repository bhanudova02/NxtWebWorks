import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery & Architecture',
    description: 'We analyze your business requirements, define the technical stack, and design scalable architecture tailored to your goals.',
    detail: '~1 week',
  },
  {
    number: '02',
    title: 'UI/UX Design',
    description: 'Creating high-fidelity wireframes and interactive prototypes with a focus on user experience and brand identity.',
    detail: '~2 weeks',
  },
  {
    number: '03',
    title: 'Agile Development',
    description: 'Building the product in iterative sprints, ensuring transparency, continuous testing, and rapid feature delivery.',
    detail: '~4–8 weeks',
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description: 'Deploying to robust cloud infrastructure with continuous monitoring, maintenance, and performance optimization.',
    detail: 'Ongoing',
  },
];

const Process = () => {
  return (
    <section id="process" className="py-16 md:py-28 bg-[#FAFAFA] border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-50/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
              Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A] tracking-tight">
              How We Build<br />Great Software
            </h2>
          </div>
          <p className="text-sm text-[#475569] max-w-xs leading-relaxed md:text-right">
            A systematic, transparent process from discovery through deployment and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl border border-[#E2E8F0] p-7 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] hover:border-[#CBD5E1] transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start justify-between mb-8">
                <span className="text-4xl font-black text-[#F1F5F9] group-hover:text-blue-50 transition-colors duration-300 tracking-tighter select-none">
                  {step.number}
                </span>
                <span className="text-[9px] font-bold text-gray-400 bg-gray-50 border border-gray-100 px-2 py-1 rounded-md font-mono tracking-wider whitespace-nowrap">
                  {step.detail}
                </span>
              </div>

              <h3 className="text-base font-semibold text-[#0F172A] mb-3 leading-snug group-hover:text-blue-700 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed flex-grow">
                {step.description}
              </p>

              {/* Step indicator dot */}
              <div className="mt-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-[10px] font-semibold text-gray-300 group-hover:text-blue-400 transition-colors duration-300 uppercase tracking-widest">
                  Phase {step.number}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
