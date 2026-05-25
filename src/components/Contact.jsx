import { Mail, MapPin, X, CheckCircle } from 'lucide-react';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(form.current);
    const templateParams = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      phone_number: formData.get('phone_number'),
      message: formData.get('message'),
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

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0F172A] relative overflow-hidden scroll-mt-16">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1E293B] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">

          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
              Get in Touch
            </h2>
            <p className="text-base md:text-lg text-[#94A3B8] leading-relaxed mb-10 max-w-md">
              Have a specific project in mind? Send us a message and our team will get back to you shortly.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-[#E2E8F0]">
                <div className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center text-[#38BDF8]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-white">Email Us</p>
                  <p className="text-[#94A3B8] text-sm">hello@nxtwebworks.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[#E2E8F0]">
                <div className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center text-[#38BDF8]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-[#94A3B8] text-sm">Global Remote</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <form ref={form} onSubmit={sendEmail} className="bg-[#1E293B] p-8 rounded-2xl border border-[#334155]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-[#CBD5E1] mb-2">First Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full bg-[#0F172A] border border-[#334155] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#CBD5E1] mb-2">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    name="phone_number"
                    className="w-full bg-[#0F172A] border border-[#334155] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#CBD5E1] mb-2">Work Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full bg-[#0F172A] border border-[#334155] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#CBD5E1] mb-2">Project Details</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-[#0F172A] border border-[#334155] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-colors"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={"w-full bg-white text-[#0F172A] font-medium rounded-lg px-4 py-3 transition-colors " + (isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm font-medium mt-3 text-center">Failed to send message. Please try again.</p>
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
            <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-5 border border-green-100">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
            <p className="text-gray-600 leading-relaxed">
              Thank you for reaching out! We will contact you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitStatus(null)}
              className="mt-8 w-full py-3.5 bg-[#0F172A] text-white font-bold rounded-xl hover:bg-[#1E293B] transition-all duration-300"
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
