import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { InlineWidget } from 'react-calendly';
import { 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  X, 
  ChevronDown, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Calendar,
  Activity,
  Globe
} from 'lucide-react';

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

const projectTypes = [
  "SaaS Platform",
  "Shopify Store",
  "Custom CRM",
  "Enterprise App",
  "API Integration"
];

const ContactUs = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedProjectType, setSelectedProjectType] = useState("SaaS Platform");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(form.current);
    const templateParams = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      phone_number: formData.get('phone_number'),
      message: `[Project Type: ${selectedProjectType}] \n\n` + formData.get('message'),
    };

    emailjs.send('service_7lloynq', 'template_zj1dajq', templateParams, 'TaeFTpQKeEwOyWsqq')
      .then((result) => {
        console.log("EmailJS Success:", result.text);
        setSubmitStatus('success');
        form.current.reset();
        setIsSubmitting(false);
      }, (error) => {
        console.error("EmailJS Error:", error.text || error);
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

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
                detail: "hello@nxtwebworks.com",
                sub: "Response within 24 hours",
                link: "mailto:hello@nxtwebworks.com",
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
                link: "#form-section",
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

      {/* 3. CONTACT FORM SECTION */}
      <section id="form-section" className="py-20 bg-[#FAFAFA] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Form Container */}
            <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-sm">
              <h2 className="text-lg font-semibold text-[#0F172A] mb-2 tracking-tight">Project Spec Inquiry</h2>
              <p className="text-xs text-gray-400 mb-6">Select your project type and enter details below.</p>

              {/* Dynamic Project Type Selector Pill System */}
              <div className="mb-6">
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-2">Project Category</label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => {
                    const isSelected = selectedProjectType === type;
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setSelectedProjectType(type)}
                        className={`py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                          isSelected 
                            ? 'bg-[#0F172A] text-white border-[#0F172A]' 
                            : 'bg-white text-gray-600 border-[#E2E8F0] hover:bg-[#FAFAFA]'
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-1.5">First Name</label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      placeholder="e.g. John"
                      className="w-full bg-[#FCFCFD] border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#0F172A] placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors shadow-inner"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-1.5">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      name="phone_number"
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-[#FCFCFD] border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#0F172A] placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-1.5">Work Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="e.g. john@company.com"
                    className="w-full bg-[#FCFCFD] border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#0F172A] placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-1.5">Project Details</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your project expectations, stack framework details, or timelines..."
                    className="w-full bg-[#FCFCFD] border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#0F172A] placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors shadow-inner resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold rounded-lg px-5 py-3 text-sm transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? "Submitting Spec..." : (
                    <>
                      Submit Project Spec <Send size={12} />
                    </>
                  )}
                </button>

                {submitStatus === 'error' && (
                  <p className="text-red-500 text-xs font-semibold mt-3 text-center">
                    Submission failed. Check network and try again.
                  </p>
                )}
              </form>
            </div>

            {/* Sidebar Guidelines & Social Info Card */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <div className="bg-white border border-[#E2E8F0] p-6 rounded-2xl shadow-sm space-y-5">
                <div className="flex items-center gap-2 pb-4 border-b border-[#E2E8F0]">
                  <Sparkles size={16} className="text-blue-500" />
                  <h3 className="font-semibold text-sm text-[#0F172A]">Connect & Onboarding</h3>
                </div>
                
                {/* Social Networks Row using clean custom SVGs */}
                <div className="pb-3 border-b border-[#F1F5F9]">
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Connect Channels</h4>
                  <div className="flex gap-2.5">
                    <a 
                      href="mailto:hello@nxtwebworks.com"
                      className="w-9 h-9 rounded-lg border border-[#E2E8F0] bg-[#FCFCFD] flex items-center justify-center text-[#475569] hover:text-[#0F172A] hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                      aria-label="Email"
                    >
                      <Mail size={15} />
                    </a>
                    <a 
                      href="https://wa.me/919876543210" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg border border-[#E2E8F0] bg-[#FCFCFD] flex items-center justify-center text-[#475569] hover:text-[#0F172A] hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                      aria-label="WhatsApp"
                    >
                      <MessageSquare size={15} />
                    </a>
                    <a 
                      href="https://instagram.com/nxtwebworks" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg border border-[#E2E8F0] bg-[#FCFCFD] flex items-center justify-center text-[#475569] hover:text-[#0F172A] hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                      aria-label="Instagram"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href="https://x.com/nxtwebworks" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg border border-[#E2E8F0] bg-[#FCFCFD] flex items-center justify-center text-[#475569] hover:text-[#0F172A] hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                      aria-label="X"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a 
                      href="https://linkedin.com/company/nxtwebworks" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg border border-[#E2E8F0] bg-[#FCFCFD] flex items-center justify-center text-[#475569] hover:text-[#0F172A] hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="space-y-4 pt-1">
                  {[
                    {
                      step: "01",
                      title: "Discovery Meeting",
                      desc: "We discuss interface requirements and target timelines."
                    },
                    {
                      step: "02",
                      title: "Blueprint Scoping",
                      desc: "You receive a document proposal covering pricing specs."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="text-[10px] font-bold text-blue-500 font-mono mt-0.5">{item.step}</span>
                      <div>
                        <h4 className="font-semibold text-xs text-[#0F172A] mb-0.5">{item.title}</h4>
                        <p className="text-[10px] text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Compliance Privacy Card */}
              <div className="bg-[#EFF6FF] border border-[#DBEAFE] p-5 rounded-2xl flex gap-3.5 items-start">
                <ShieldCheck size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-[10px] text-blue-700 leading-relaxed">
                  Specifications kept strictly confidential. NDA files signed prior to scoping details.
                </p>
              </div>
            </div>

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
              <style dangerouslySetInnerHTML={{__html: `
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
              href="#form-section" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
            >
              Fill out Project Inquiry form <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {submitStatus === 'success' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-all duration-300">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full relative shadow-2xl flex flex-col items-center text-center animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setSubmitStatus(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors p-1"
            >
              <X size={20} />
            </button>
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-5 border border-emerald-100">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              We received your inquiry details. Our team will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitStatus(null)}
              className="mt-8 w-full py-3 bg-[#0F172A] text-white font-semibold rounded-lg hover:bg-[#1E293B] transition-all duration-300 text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default ContactUs;
