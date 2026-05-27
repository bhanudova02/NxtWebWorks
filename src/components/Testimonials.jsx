import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "The team at NxtWebWorks delivered an exceptional enterprise application that transformed our internal operations. Their engineering standards are world-class.",
    author: "Sarah Jenkins",
    role: "CTO",
    company: "Acumen Tech",
    initials: "SJ",
    color: "from-blue-500 to-indigo-600",
  },
  {
    quote: "We needed a scalable architecture for our growing SaaS product. They provided a robust React/Node solution that handles our traffic effortlessly.",
    author: "Marcus Chen",
    role: "Founder",
    company: "Nexus Platform",
    initials: "MC",
    color: "from-violet-500 to-purple-600",
  },
  {
    quote: "Professional, communicative, and technically proficient. A rare agency that truly understands both business logic and deep technical architecture.",
    author: "David Alroy",
    role: "VP Engineering",
    company: "Vertex Systems",
    initials: "DA",
    color: "from-emerald-500 to-teal-600",
  },
  {
    quote: "Delivered ahead of schedule with zero bugs at launch. The codebase is clean, well-documented, and our in-house team can maintain it with ease.",
    author: "Priya Menon",
    role: "Product Lead",
    company: "FlowStack",
    initials: "PM",
    color: "from-rose-500 to-pink-600",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="w-[88vw] sm:w-[400px] md:w-[420px] flex-shrink-0 whitespace-normal">
    <div className="h-full bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-[#CBD5E1] transition-all duration-300 flex flex-col justify-between gap-4">
      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote mark + text */}
      <div>
        <div className="text-4xl leading-none text-blue-100 font-serif mb-1 select-none">"</div>
        <p className="text-[#1E293B] text-xs leading-relaxed font-medium">
          {testimonial.quote}
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-2.5 pt-3 border-t border-[#F1F5F9]">
        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>
          {testimonial.initials}
        </div>
        <div>
          <p className="text-xs font-semibold text-[#0F172A] leading-tight">{testimonial.author}</p>
          <p className="text-[11px] text-[#64748B]">{testimonial.role} · {testimonial.company}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-flex items-center py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
              Social Proof
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A] tracking-tight">
              What clients say
            </h2>
          </div>
          <p className="text-sm text-[#475569] max-w-xs leading-relaxed md:text-right">
            Engineering leaders share their experience working with our team.
          </p>
        </motion.div>
      </div>

      {/* Scrolling ticker */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          <div className="flex gap-5 pr-5">
            {testimonials.map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
          </div>
          <div className="flex gap-5 pr-5" aria-hidden="true">
            {testimonials.map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Testimonials;
