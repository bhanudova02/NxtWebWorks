import { Mail, Smartphone, MapPin, X, CheckCircle } from 'lucide-react';
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

    // Replace these with your actual EmailJS credentials
    emailjs.sendForm('service_kfdst3w', 'template_hki1y3q', form.current, {
      publicKey: 'jpBG9_OUYcD3I9dEr',
    })
      .then((result) => {
        console.log(result.text);
        setSubmitStatus('success');
        form.current.reset();
        setIsSubmitting(false);
      }, (error) => {
        console.log(error.text);
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-50/30 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Let's start a <span className="text-brand-blue">conversation</span></h2>
            <p className="text-lg text-gray-600 mb-12 max-w-md">Fill out the form and our team will get back to you within 24 hours to discuss your project.</p>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-white rounded-xl border border-gray-200 text-brand-blue">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="text-gray-600 text-sm mb-1">Email Us</h5>
                  <p className="text-gray-900 font-medium text-lg">hello@nxtwebworks.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-4 bg-white rounded-xl border border-gray-200 text-brand-purple">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h5 className="text-gray-600 text-sm mb-1">WhatsApp</h5>
                  <p className="text-gray-900 font-medium text-lg">+91 76609 52680</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-4 bg-white rounded-xl border border-gray-200 text-brand-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="text-gray-600 text-sm mb-1">Location</h5>
                  <p className="text-gray-900 font-medium text-lg">Global Remote Agency</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-10 border-gray-200 bg-white">
            <form ref={form} className="flex flex-col gap-6" onSubmit={sendEmail}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-600 font-medium">Full Name</label>
                  <input type="text" name="user_name" required placeholder="John Doe" className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-brand-blue transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-600 font-medium">Email Address</label>
                  <input type="email" name="user_email" required placeholder="john@company.com" className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-brand-blue transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600 font-medium">Phone / WhatsApp</label>
                <input type="tel" name="phone_number" placeholder="+91 98765 43210" className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-brand-blue transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600 font-medium">Project Details</label>
                <textarea name="message" required rows="4" placeholder="Tell us about your project, goals, and budget..." className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-brand-blue transition-colors resize-none"></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className={`w-full py-4 text-white font-bold rounded-xl mt-2 transition-all duration-300 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-blue hover:bg-gray-800 hover:glow-effect'}`}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'error' && <p className="text-red-500 text-sm font-medium mt-2 text-center">Failed to send message. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {submitStatus === 'success' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-all duration-300">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full relative shadow-2xl flex flex-col items-center text-center" style={{ animation: 'fade-in-up 0.4s ease-out forwards' }}>
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
              className="mt-8 w-full py-3.5 bg-brand-blue text-white font-bold rounded-xl hover:bg-gray-800 transition-all duration-300"
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
