import React, { useRef, useState } from 'react';
import { Send, CheckCircle, X, Mail, Phone, MessageCircle } from 'lucide-react';

const contactItems = [
  { label: 'Email', value: 'teamnxtwebworks@gmail.com', icon: Mail },
  { label: 'Phone', value: '+91 7660952680', icon: Phone },
  { label: 'WhatsApp', value: 'Chat with us', icon: MessageCircle },
];

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
        console.error('Web3Forms Error:', data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-b border-rn-border bg-rn-bg py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-rn-blue">Contact</p>
            <h2 className="mt-2 text-3xl font-bold leading-tight text-rn-text md:text-4xl">Tell us what you need</h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-rn-text-muted">
              Send the project type, required pages or features, and any reference website you like. We will reply with the next step.
            </p>

            <div className="mt-6 space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3 rounded-lg border border-rn-border bg-rn-surface p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-rn-blue shadow-sm">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-rn-text-muted">{item.label}</p>
                      <p className="text-sm font-semibold text-rn-text">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7">
            <form ref={form} onSubmit={sendEmail} className="rounded-lg border border-rn-border bg-rn-surface p-5 md:p-6 shadow-sm">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-rn-text">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-md border border-rn-border bg-white px-4 py-3 text-sm text-rn-text outline-none transition-colors placeholder:text-slate-400 focus:border-rn-blue"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-rn-text">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="name@email.com"
                    className="w-full rounded-md border border-rn-border bg-white px-4 py-3 text-sm text-rn-text outline-none transition-colors placeholder:text-slate-400 focus:border-rn-blue"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-rn-text">Phone</label>
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="+91 00000 00000"
                  className="w-full rounded-md border border-rn-border bg-white px-4 py-3 text-sm text-rn-text outline-none transition-colors placeholder:text-slate-400 focus:border-rn-blue"
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-rn-text">Project details</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Website, full-stack app, Shopify store, dashboard, timeline, budget range..."
                  className="w-full resize-none rounded-md border border-rn-border bg-white px-4 py-3 text-sm text-rn-text outline-none transition-colors placeholder:text-slate-400 focus:border-rn-blue"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="premium-button mt-5 w-full sm:w-auto"
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
                {!isSubmitting && <Send size={15} />}
              </button>

              {submitStatus === 'error' && (
                <p className="mt-3 text-sm font-medium text-red-600">Message failed. Please check your connection and try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {submitStatus === 'success' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-rn-text/35 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-sm rounded-lg bg-white p-7 text-center shadow-2xl">
            <button
              onClick={() => setSubmitStatus(null)}
              className="absolute right-4 top-4 text-rn-text-muted hover:text-rn-text"
              aria-label="Close success message"
            >
              <X size={18} />
            </button>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rn-surface text-rn-blue">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-semibold text-rn-text">Message received</h3>
            <p className="mt-2 text-sm leading-6 text-rn-text-muted">We will review your project details and reply soon.</p>
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
