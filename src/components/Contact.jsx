import React, { useRef, useState } from 'react';
import { 
  Send, 
  CheckCircle, 
  X, 
  Mail, 
  Phone,
  MessageCircle
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
    <section id="contact" className="py-16 md:py-20 bg-white relative border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Text & Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block py-1.5 px-3 bg-[#F1F5F9] text-[#0F172A] text-xs font-bold uppercase tracking-widest rounded-sm">
                Contact Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] leading-tight">
                Let's Build Your Website, Fullstack App, or Shopify Store
              </h2>
              <p className="text-[#475569] text-base leading-relaxed max-w-lg">
                Share your requirement and I will help you with website development, fullstack application development, custom Shopify theme work, and Shopify store customization.
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">How It Works</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0F172A] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">1</div>
                <p className="text-[#334155] font-medium text-sm">Tell us your project idea.</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0F172A] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">2</div>
                <p className="text-[#334155] font-medium text-sm">Share your goals and required features.</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0F172A] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">3</div>
                <p className="text-[#334155] font-medium text-sm">Get a clear development plan and timeline.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-4 bg-white border border-gray-100 p-4 rounded-lg shadow-sm">
                <div className="w-10 h-10 flex items-center justify-center text-[#0F172A] bg-[#F1F5F9] rounded-md border border-[#E2E8F0]">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Us</p>
                  <p className="text-sm font-semibold text-[#1E293B]">dovabhanu6@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white border border-gray-100 p-4 rounded-lg shadow-sm">
                <div className="w-10 h-10 flex items-center justify-center text-[#0F172A] bg-[#F1F5F9] rounded-md border border-[#E2E8F0]">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Call Us</p>
                  <p className="text-sm font-semibold text-[#1E293B]">+91 7660952680</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white border border-gray-100 p-4 rounded-lg shadow-sm sm:col-span-2 w-max pr-8">
                <div className="w-10 h-10 flex items-center justify-center text-[#0F172A] bg-[#F1F5F9] rounded-md border border-[#E2E8F0]">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">WhatsApp</p>
                  <p className="text-sm font-semibold text-[#1E293B]">Chat with us</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white p-8 md:p-10 border border-[#E2E8F0] shadow-sm rounded-sm">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-[#334155] mb-2">Full Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Enter your full name"
                  className="w-full bg-[#FAFAFA] border border-[#E2E8F0] rounded-sm px-4 py-3 text-sm text-[#0F172A] placeholder-gray-400 focus:outline-none focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#334155] mb-2">Email Address</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="name@email.com"
                    className="w-full bg-[#FAFAFA] border border-[#E2E8F0] rounded-sm px-4 py-3 text-sm text-[#0F172A] placeholder-gray-400 focus:outline-none focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#334155] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone_number"
                    placeholder="+91 00000 00000"
                    className="w-full bg-[#FAFAFA] border border-[#E2E8F0] rounded-sm px-4 py-3 text-sm text-[#0F172A] placeholder-gray-400 focus:outline-none focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#334155] mb-2">Your Requirement</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your website, fullstack app, or Shopify requirement..."
                  className="w-full bg-[#FAFAFA] border border-[#E2E8F0] rounded-sm px-4 py-3 text-sm text-[#0F172A] placeholder-gray-400 focus:outline-none focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] transition-colors resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold tracking-wide rounded-sm px-8 py-3.5 text-xs transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer uppercase"
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message <Send size={14} />
                    </>
                  )}
                </button>
              </div>

              {submitStatus === 'error' && (
                <p className="text-red-500 text-xs font-semibold mt-2">
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
            <div className="w-16 h-16 bg-[#F1F5F9] text-[#0F172A] rounded-full flex items-center justify-center mb-5 border border-[#E2E8F0]">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              We received your inquiry details. Our team will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitStatus(null)}
              className="mt-8 w-full py-3 bg-[#0F172A] text-white font-semibold rounded-sm hover:bg-[#1E293B] transition-all duration-300 text-sm"
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
