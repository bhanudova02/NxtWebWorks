import React, { useRef, useState } from 'react';
import { Send, CheckCircle, X, Mail, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    formData.append('access_key', '22dfa523-d43d-4085-ba8a-6c980b4d7e64');
    formData.append('subject', 'NxtWebWorks Client Message');
    formData.append('from_name', 'NxtWebWorks Portal');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        if (form.current) form.current.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center border-b border-rn-border bg-rn-bg py-12 md:py-20">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">

          {/* ── LEFT: Info ── */}
          <div className="flex flex-col justify-between h-full space-y-8">

            {/* Heading */}
            <div>
              <h1 className="text-2xl font-bold leading-tight text-rn-text md:text-3xl lg:text-4xl">
                Let's build your website, fullstack app, or Shopify store
              </h1>
              <p className="mt-4 text-sm leading-6 text-rn-text-muted max-w-md">
                Share your requirement and we will help you with website development, fullstack application development, custom Shopify theme work, and Shopify store customization.
              </p>
            </div>

            {/* How it works */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-rn-text-muted mb-4">
                How it works
              </p>
              <ol className="space-y-3">
                {[
                  'Tell us your project idea.',
                  'Share your goals and required features.',
                  'Get a clear development plan and timeline.'
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-rn-blue/10 text-rn-blue text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="text-sm text-rn-text-muted leading-6">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Contact links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="mailto:teamnxtwebworks@gmail.com"
                className="col-span-2 sm:col-span-1 w-fit sm:w-full flex items-center gap-3 rounded-lg border border-rn-border bg-white p-4 hover:shadow-sm transition-shadow group"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-rn-blue/10 text-rn-blue">
                  <Mail size={17} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-rn-text-muted">Email us</p>
                  <p className="text-xs font-semibold text-rn-text group-hover:text-rn-blue transition-colors leading-tight break-all">teamnxtwebworks@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+917660952680"
                className="flex items-center gap-3 rounded-lg border border-rn-border bg-white p-4 hover:shadow-sm transition-shadow group"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-rn-blue/10 text-rn-blue">
                  <Phone size={17} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-rn-text-muted">Call us</p>
                  <p className="text-xs font-semibold text-rn-text group-hover:text-rn-blue transition-colors">+91 7660952680</p>
                </div>
              </a>

              <a
                href="https://wa.me/917660952680"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-rn-border bg-white p-4 hover:shadow-sm transition-shadow group"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-rn-blue/10 text-rn-blue">
                  <MessageCircle size={17} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-rn-text-muted">WhatsApp</p>
                  <p className="text-xs font-semibold text-rn-text group-hover:text-rn-blue transition-colors">Chat with us</p>
                </div>
              </a>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="h-full">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="rounded-md border border-rn-border bg-white p-6 md:p-10 shadow-md space-y-5 h-full flex flex-col justify-between"
            >
              {/* Full Name */}
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-rn-text">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="user_name"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-md border border-rn-border bg-white px-4 py-3 text-sm text-rn-text outline-none transition-colors placeholder:text-slate-400 focus:border-rn-blue"
                />
              </div>

              {/* Email + Phone row */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-rn-text">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="user_email"
                    required
                    placeholder="name@email.com"
                    className="w-full rounded-md border border-rn-border bg-white px-4 py-3 text-sm text-rn-text outline-none transition-colors placeholder:text-slate-400 focus:border-rn-blue"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="mb-2 block text-sm font-semibold text-rn-text">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone_number"
                    placeholder="+91 00000 00000"
                    className="w-full rounded-md border border-rn-border bg-white px-4 py-3 text-sm text-rn-text outline-none transition-colors placeholder:text-slate-400 focus:border-rn-blue"
                  />
                </div>
              </div>

              {/* Requirement */}
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-rn-text">
                  Your Requirement
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your website, fullstack app, or Shopify requirement..."
                  className="w-full resize-none rounded-md border border-rn-border bg-white px-4 py-3 text-sm text-rn-text outline-none transition-colors placeholder:text-slate-400 focus:border-rn-blue"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="premium-button w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={15} />
                  </>
                )}
              </button>

              {submitStatus === 'error' && (
                <p className="text-sm font-medium text-red-600">
                  Message failed. Please check your connection and try again.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>

      {/* ── SUCCESS MODAL ── */}
      {submitStatus === 'success' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-rn-text/35 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-sm rounded-lg bg-white p-7 text-center shadow-2xl">
            <button
              onClick={() => setSubmitStatus(null)}
              className="absolute right-4 top-4 text-rn-text-muted hover:text-rn-text transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rn-surface text-rn-blue">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-semibold text-rn-text">Message received</h3>
            <p className="mt-2 text-sm leading-6 text-rn-text-muted">
              We will review your requirement and reply with the next step.
            </p>
            <button
              onClick={() => setSubmitStatus(null)}
              className="premium-button mt-5 w-full"
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
