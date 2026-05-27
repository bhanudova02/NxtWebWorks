import React, { useRef, useState } from 'react';
import { 
  Send, 
  CheckCircle, 
  X, 
  Mail, 
  MessageSquare,
  ShieldCheck 
} from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    formData.append("access_key", "22dfa523-d43d-4085-ba8a-6c980b4d7e64");
    formData.append("subject", "NxtWebWorks Client Message");
    formData.append("from_name", "NxtWebWorks Portal");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        if (form.current) form.current.reset();
      } else {
        console.error("Web3Forms Error:", data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] scroll-mt-16 relative overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text & Social Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="inline-block py-1 px-3.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                Let's Collaborate
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] tracking-tight leading-snug">
                Start your next development phase.
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed mt-3">
                Submit your project specifications. Our team will review your requirements and respond within 24 hours.
              </p>
            </div>

            {/* Social & Contact Channels */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Connect Channels</h3>
              <div className="flex flex-col gap-3">
                <a href="mailto:hello@nxtwebworks.com" className="flex items-center gap-3 text-sm text-[#475569] hover:text-[#0F172A] transition-colors">
                  <Mail size={16} className="text-blue-500" />
                  <span>hello@nxtwebworks.com</span>
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-[#475569] hover:text-[#0F172A] transition-colors">
                  <MessageSquare size={16} className="text-emerald-500" />
                  <span>+91 98765 43210 (WhatsApp)</span>
                </a>
              </div>

              {/* Social Icon Grid */}
              <div className="flex gap-3 pt-2">
                <a 
                  href="mailto:hello@nxtwebworks.com"
                  className="w-9 h-9 rounded-lg border border-[#E2E8F0] bg-white flex items-center justify-center text-[#475569] hover:text-[#0F172A] hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-[#E2E8F0] bg-white flex items-center justify-center text-[#475569] hover:text-[#0F172A] hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                  aria-label="WhatsApp"
                >
                  <MessageSquare size={16} />
                </a>
                <a 
                  href="https://instagram.com/nxtwebworks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-[#E2E8F0] bg-white flex items-center justify-center text-[#475569] hover:text-[#0F172A] hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
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
                  className="w-9 h-9 rounded-lg border border-[#E2E8F0] bg-white flex items-center justify-center text-[#475569] hover:text-[#0F172A] hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
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
                  className="w-9 h-9 rounded-lg border border-[#E2E8F0] bg-white flex items-center justify-center text-[#475569] hover:text-[#0F172A] hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Confidentiality Notice */}
            <div className="bg-[#EFF6FF] border border-[#DBEAFE] p-4 rounded-xl flex gap-3 items-start">
              <ShieldCheck size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-blue-700 leading-relaxed">
                NDA files signed prior to scoping details. Your specifications are fully protected.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-sm">
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
                {isSubmitting ? "Submitting..." : (
                  <>
                    Send Project Message <Send size={12} />
                  </>
                )}
              </button>

              {submitStatus === 'error' && (
                <p className="text-red-500 text-xs font-semibold mt-2 text-center">
                  Message failed to send. Check connection and retry.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>

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
    </section>
  );
};

export default Contact;
