
const testimonials = [
  {
    quote: "The team at NxtWebWorks delivered an exceptional enterprise application that transformed our internal operations. Their engineering standards are world-class.",
    author: "Sarah Jenkins",
    role: "CTO, Acumen Tech",
  },
  {
    quote: "We needed a scalable architecture for our growing SaaS product. They provided a robust React/Node solution that handles our traffic effortlessly.",
    author: "Marcus Chen",
    role: "Founder, Nexus Platform",
  },
  {
    quote: "Professional, communicative, and technically proficient. They are a rare agency that truly understands both business logic and deep technical architecture.",
    author: "David Alroy",
    role: "VP Engineering, Vertex Systems",
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] mb-4 tracking-tight">
            Client Feedback
          </h2>
          <p className="text-base md:text-lg text-[#475569] leading-relaxed">
            Don't just take our word for it. Here's what engineering leaders have to say about our work.
          </p>
        </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradient Edges for smooth fading */}
        <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {/* First Set */}
          <div className="flex gap-6 pr-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-[85vw] md:w-[450px] flex-shrink-0 whitespace-normal p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#1E293B] leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-medium text-[#0F172A]">{testimonial.author}</p>
                  <p className="text-sm text-[#475569]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Set (Duplicate for infinite scroll) */}
          <div className="flex gap-6 pr-6" aria-hidden="true">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-[85vw] md:w-[450px] flex-shrink-0 whitespace-normal p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#1E293B] leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-medium text-[#0F172A]">{testimonial.author}</p>
                  <p className="text-sm text-[#475569]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}} />
      </div>
    </section>
  );
};

export default Testimonials;
