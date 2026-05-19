import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const reviews = [
  { name: "Priya Sharma", role: "Founder, StyleAura", text: "NXTWEBWORKS completely transformed our Shopify store. Our conversion rate doubled in the first month after launch. True professionals." },
  { name: "Rahul Verma", role: "CEO, TechFlow SaaS", text: "The team delivered our marketing site ahead of schedule. The code quality is pristine, and the design is exactly the premium look we wanted." },
  { name: "Arjun Reddy", role: "Owner, Prime Estate", text: "Working with them was a breeze. They understood our business needs and translated them into a stunning, fast-loading web experience." },
  { name: "Neha Gupta", role: "Marketing Director, Bloom Beauty", text: "Their attention to detail is unmatched. The new UI/UX design they created for our beauty brand elevated our customer experience entirely." },
  { name: "Vikram Singh", role: "CTO, NextGen Logistix", text: "We needed a highly scalable web app, and they delivered flawlessly. The performance optimization alone saved us thousands in hosting." },
  { name: "Anita Desai", role: "Founder, Spice Route", text: "Our restaurant's new website perfectly captures our vibe. We've seen a 40% increase in online reservations since going live." },
  { name: "Karthik Iyer", role: "Partner, Iyer Consulting", text: "Professional, communicative, and exceptionally skilled. They built a corporate site that instantly builds trust with our enterprise clients." }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gray-50 border-y border-gray-100 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Client <span className="text-brand-blue">Success Stories</span></h2>
          <p className="text-lg text-gray-600">Don't just take our word for it. Hear what ambitious founders have to say.</p>
        </motion.div>
      </div>
        
      <div className="relative overflow-hidden flex w-full">
        {/* Fading Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-48 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-48 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex gap-8 w-max animate-marquee py-4 px-4 md:px-8">
          {[...reviews, ...reviews].map((review, idx) => (
            <div key={idx} className="glass-card p-8 bg-white border-gray-200 hover:shadow-lg transition-shadow relative w-[320px] md:w-[420px] shrink-0 flex flex-col justify-between">
              <div>
                <div className="absolute top-8 right-8 opacity-10">
                  <MessageSquare size={40} className="text-brand-blue" />
                </div>
                <div className="flex gap-1 text-brand-blue mb-6">
                  {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md shadow-brand-blue/30">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">{review.name}</h5>
                  <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
