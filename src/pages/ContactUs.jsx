import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InlineWidget } from 'react-calendly';
import {
  Mail,
  MessageSquare,
  ChevronDown,
  ArrowRight,
  Calendar,
  Activity,
  Globe
} from 'lucide-react';
import Contact from '../components/Contact';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.05
    }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const faqs = [
  {
    q: "What is your typical project timeline?",
    a: "Standard enterprise platforms and SaaS systems take 4 to 8 weeks. Shopify storefronts and smaller web apps are completed in 3 to 5 weeks from technical spec sign-off."
  },
  {
    q: "Which technology stack do you recommend?",
    a: "We specialize in React, Next.js, and Node.js for scalability, along with TailwindCSS for styling and MongoDB/PostgreSQL for databases. For headless commerce, we recommend Shopify with Next.js."
  },
  {
    q: "How do we handle communication during a build?",
    a: "We set up a dedicated Slack channel for real-time communication, along with weekly async Loom updates and bi-weekly milestone reviews. All code is deployed to a staging URL for continuous verification."
  },
  {
    q: "Do you offer post-launch support and maintenance?",
    a: "Yes, we offer ongoing maintenance retainers that include security updates, speed audits, minor updates, and server health monitoring so you can focus entirely on growing your business."
  },
  {
    q: "How does the project kickoff process look?",
    a: "We start with a 30-minute discovery call to discuss requirements. Next, we deliver a scoping proposal with direct pricing and wireframe designs. Once approved, we launch the development phase immediately."
  }
];

const ContactUs = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen text-[#1E293B] antialiased">

      {/* 1. CONTACT HERO SECTION */}
      <section className="relative pt-16 md:pt-20 pb-16 bg-gradient-to-tr from-[#FAFAFA] via-[#FCFCFD] to-[#EFF6FF] border-b border-[#E2E8F0] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-20 right-10 w-[500px] h-[250px] bg-blue-50/40 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 space-y-4 text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider shadow-sm">
                <Activity size={12} className="text-blue-500 animate-pulse" />
                <span>Connect With Us</span>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0F172A] tracking-tight leading-[1.12]"
              >
                Let's construct <br />
                the <span className="text-blue-600">next standard</span>.
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-sm md:text-base text-[#475569] max-w-xl mx-auto lg:mx-0 leading-relaxed text-balance"
              >
                Submit our short inquiry form or schedule a video call below to start planning your scope.
              </motion.p>
            </motion.div>

            {/* Interactive Socket Status Widget Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="lg:col-span-5 relative w-full aspect-[4/3] bg-white border border-[#E2E8F0] rounded-2xl shadow-sm p-6 overflow-hidden flex items-center justify-center group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/5 to-sky-500/5 rounded-2xl blur-lg opacity-85 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-grid-pattern opacity-40" />

              <div className="relative z-10 w-full space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-xl border border-[#E2E8F0] bg-[#FAFAFA] shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold text-gray-600">websocket_client: online</span>
                  <div className="ml-auto flex items-center gap-1">
                    <span className="text-[9px] text-gray-400 font-mono">ping: 12ms</span>
                  </div>
                </div>

                <div className="border border-[#E2E8F0] rounded-xl bg-white p-4 space-y-3 shadow-sm">
                  <div className="flex justify-between items-center text-[10px] text-gray-400">
                    <span className="font-mono">inquiry_stream</span>
                    <span>active</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded overflow-hidden">
                    <div className="h-full bg-blue-500 w-4/5 rounded animate-pulse" />
                  </div>
                  <p className="text-[10px] text-gray-500 leading-relaxed font-mono">
                    &gt; Listening for payload specs...
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. CONTACT OPTIONS SECTION */}
      <section className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Mail,
                title: "Email Us",
                detail: "teamnxtwebworks@gmail.com",
                sub: "Response within 24 hours",
                link: "mailto:teamnxtwebworks@gmail.com",
                bg: "bg-blue-50/50 text-blue-600 border-blue-100"
              },
              {
                icon: MessageSquare,
                title: "WhatsApp Chat",
                detail: "+91 98765 43210",
                sub: "Direct developer messaging",
                link: "https://wa.me/919876543210",
                bg: "bg-emerald-50/50 text-emerald-600 border-emerald-100"
              },
              {
                icon: Calendar,
                title: "Consultation",
                detail: "Book via Calendly",
                sub: "30-min architecture slots",
                link: "#schedule",
                bg: "bg-blue-50/50 text-blue-600 border-blue-100"
              },
              {
                icon: Globe,
                title: "Submit Scope Spec",
                detail: "Online Form",
                sub: "Check options below",
                link: "#contact",
                bg: "bg-amber-50/50 text-amber-600 border-amber-100"
              }
            ].map((opt, idx) => (
              <a
                href={opt.link}
                key={idx}
                className="bg-[#FAFAFA] border border-[#E2E8F0] p-6 rounded-xl hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-4 group"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${opt.bg} group-hover:scale-105 transition-transform`}>
                  <opt.icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-xs text-gray-400 mb-1">{opt.title}</h3>
                  <p className="text-sm font-semibold text-[#0F172A] group-hover:text-blue-600 transition-colors mb-1">{opt.detail}</p>
                  <p className="text-[11px] text-gray-400">{opt.sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM COMPONENT SECTION */}
      <div>
        <Contact />
      </div>
      {/* 5. FAQ / QUICK ANSWERS */}
      <section className="py-20 bg-[#FAFAFA] border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
              Support Guide
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] tracking-tight mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-500">
              Clear information covering timelines, stack guidelines, and remote workflows.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold text-sm md:text-base text-[#0F172A] hover:bg-[#FCFCFD] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={16}
                      className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="p-5 pt-0 border-t border-[#F1F5F9] text-xs md:text-sm text-[#475569] leading-relaxed bg-[#FCFCFD]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CALENDLY / BOOKING SECTION */}
      <section id="schedule" className="py-20 bg-white border-b border-[#E2E8F0] scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              Instant Scheduling
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] mb-4 tracking-tight">
              Book a Video Conference
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Select an available time slot directly with our core team.
            </p>
          </div>

          {/* Vercel Browser Wrap Mockup */}
          <div className="max-w-5xl mx-auto bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm relative flex flex-col" style={{ height: '740px' }}>
            <div className="h-10 border-b border-[#E2E8F0] bg-[#FAFAFA] flex items-center px-4 justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
              </div>
              <div className="px-3 py-1 bg-white border border-[#E2E8F0] rounded text-[9px] text-gray-400 font-mono w-48 text-center truncate">
                nxtwebworks.com/book-call
              </div>
              <div className="w-10" />
            </div>

            <div className="flex-1 relative bg-white">
              <style dangerouslySetInnerHTML={{
                __html: `
                .calendly-spinner {
                  position: absolute !important;
                  top: 50% !important;
                  left: 50% !important;
                  transform: translate(-50%, -50%) !important;
                  z-index: 10 !important;
                }
              `}} />
              <InlineWidget
                url="https://calendly.com/teamnxtwebworks/30min"
                styles={{ height: '100%', width: '100%' }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: '2563eb',
                  textColor: '0F172A'
                }}
              />
            </div>
          </div>
        </div>
      </section>


      {/* 6. FINAL CTA / FOOTER TRANSITION */}
      <section className="py-16 bg-[#0F172A] relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.06),transparent_50%)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Ready to start?</h2>
          <p className="text-xs text-[#94A3B8] max-w-md mx-auto leading-relaxed">
            Complete our scoping form to outline your project specs with our engineering leads.
          </p>
          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
            >
              Fill out Project Inquiry form <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;
