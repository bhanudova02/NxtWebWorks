
const steps = [
  {
    number: '01',
    title: 'Discovery & Architecture',
    description: 'We analyze your business requirements, define the technical stack, and design scalable architecture tailored to your goals.',
  },
  {
    number: '02',
    title: 'UI/UX Design',
    description: 'Creating high-fidelity wireframes and interactive prototypes with a focus on user experience and brand identity.',
  },
  {
    number: '03',
    title: 'Agile Development',
    description: 'Building the product in iterative sprints, ensuring transparency, continuous testing, and rapid feature delivery.',
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description: 'Deploying to robust cloud infrastructure with continuous monitoring, maintenance, and performance optimization.',
  },
];

const Process = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-[#FAFAFA] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-[#3B82F6] uppercase tracking-widest mb-4">
            Methodology
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] tracking-tight">
            How We Build Great Software
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed">
            Our systematic approach ensures predictability, quality, and alignment with your business objectives from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center md:items-start md:text-left">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[3rem] right-[-1rem] h-[1px] bg-[#E2E8F0]" />
              )}
              
              <div className="w-12 h-12 bg-white border border-[#E2E8F0] rounded-full flex items-center justify-center text-[#0F172A] font-medium mb-6 relative z-10 shadow-sm">
                {step.number}
              </div>
              
              <h3 className="text-xl font-medium text-[#0F172A] mb-3">
                {step.title}
              </h3>
              <p className="text-[#475569] leading-relaxed text-sm max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
