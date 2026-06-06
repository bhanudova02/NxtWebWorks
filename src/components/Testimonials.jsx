import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "NxtWebWorks and team built our logistics platform with high quality and excellent speed. Our operations are completely automated now. Very happy with their support.",
    author: "Kalyan Kumar",
    company: "Rajesh Seeds · Guntur, AP",
    initials: "KK",
    color: "",
  },
  {
    quote: "We needed a fast and responsive web platform for our corporate cab fleet. They delivered a highly professional site that runs smoothly on all mobile devices.",
    author: "Srinivas Rao",
    company: "PVR Cabs · Hyderabad, TG",
    initials: "SR",
    color: "",
  },
  {
    quote: "Highly professional and easy to work with. They took our simple wireframes and built a beautifully functional portal that our users love using every single day.",
    author: "Anjali Sharma",
    company: "V-Care Tech · Vijayawada, AP",
    initials: "AS",
    color: "",
  },
  {
    quote: "Delivered our custom dealer management system right on time with absolutely zero issues. The code is very clean and our internal team learned it instantly.",
    author: "Ravi Teja",
    company: "Sri Balaji Motors · Warangal, TG",
    initials: "RT",
    color: "",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="w-[84vw] sm:w-[340px] md:w-[360px] flex-shrink-0 whitespace-normal">
    <div className="h-full bg-white border border-rn-border rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-4">
      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5 text-rn-blue" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote mark + text */}
      <div>
        <div className="text-4xl leading-none text-rn-blue/20 mb-1 select-none">"</div>
        <p className="text-rn-text text-xs leading-relaxed font-medium">
          {testimonial.quote}
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-2.5 pt-3 border-t border-rn-border">
        <div className={`w-8 h-8 rounded-full bg-rn-text flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>
          {testimonial.initials}
        </div>
        <div>
          <p className="text-xs font-semibold text-rn-text leading-tight">{testimonial.author}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-12 md:py-16 bg-rn-surface border-b border-rn-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8"
        >
          <div>
            <span className="section-kicker mb-4">
              Social Proof
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-rn-text tracking-tight">
              Client notes
            </h2>
          </div>
          <p className="text-sm text-rn-text-muted max-w-xs leading-7 md:text-right">
            Short notes from project conversations.
          </p>
        </motion.div>
      </div>

      {/* Scrolling ticker */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-rn-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-rn-surface to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          <div className="flex gap-4 pr-5">
            {testimonials.map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
          </div>
          <div className="flex gap-4 pr-5" aria-hidden="true">
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
