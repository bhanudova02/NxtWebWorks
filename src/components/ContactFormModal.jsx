import React, { useRef, useState, useEffect } from 'react';
import { Send, CheckCircle, X } from 'lucide-react';

const ContactFormModal = ({ isOpen, onClose, selectedService }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Reset form state when modal opens
  useEffect(() => {
    if (isOpen) {
      setSubmitStatus(null);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    formData.append('access_key', '22dfa523-d43d-4085-ba8a-6c980b4d7e64');
    formData.append('subject', `NxtWebWorks — ${selectedService || 'General'} Inquiry`);
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-rn-text/40 backdrop-blur-sm p-0 sm:p-4 transition-all"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`relative w-full sm:max-w-lg bg-white sm:rounded-xl rounded-t-2xl shadow-2xl transform transition-all duration-300 ease-out ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        style={{ maxHeight: '95dvh' }}
      >
        {/* ── HEADER ── */}
        <div className="flex items-center justify-between border-b border-rn-border px-5 py-4 sm:px-6">
          {/* Mobile drag handle */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 sm:hidden">
            <div className="h-1 w-10 rounded-full bg-slate-300" />
          </div>

          <div className="pt-2 sm:pt-0">
            <h3 className="text-lg font-bold text-rn-text">Get a free quote</h3>
            {selectedService && (
              <p className="mt-0.5 text-xs text-rn-blue font-medium">
                Service: {selectedService}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-rn-surface text-rn-text-muted hover:text-rn-text transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* ── FORM BODY ── */}
        <div className="overflow-y-auto px-5 py-5 sm:px-6" style={{ maxHeight: 'calc(95dvh - 72px)' }}>
          {submitStatus === 'success' ? (
            /* ── SUCCESS STATE ── */
            <div className="flex flex-col items-center text-center py-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600">
                <CheckCircle size={28} />
              </div>
              <h4 className="text-xl font-semibold text-rn-text">Message sent!</h4>
              <p className="mt-2 text-sm leading-6 text-rn-text-muted max-w-xs">
                We'll review your requirement and get back to you within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="premium-button mt-6 w-full sm:w-auto"
              >
                Done
              </button>
            </div>
          ) : (
            /* ── FORM ── */
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              {/* Hidden service field */}
              <input type="hidden" name="service_interested" value={selectedService || ''} />

              {/* Full Name */}
              <div>
                <label htmlFor="modal-name" className="mb-1.5 block text-sm font-semibold text-rn-text">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="modal-name"
                  type="text"
                  name="user_name"
                  required
                  autoFocus
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-rn-border bg-white px-4 py-3 text-sm text-rn-text outline-none transition-colors placeholder:text-slate-400 focus:border-rn-blue focus:ring-1 focus:ring-rn-blue/20"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="modal-email" className="mb-1.5 block text-sm font-semibold text-rn-text">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  id="modal-email"
                  type="email"
                  name="user_email"
                  required
                  placeholder="name@email.com"
                  className="w-full rounded-lg border border-rn-border bg-white px-4 py-3 text-sm text-rn-text outline-none transition-colors placeholder:text-slate-400 focus:border-rn-blue focus:ring-1 focus:ring-rn-blue/20"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="modal-phone" className="mb-1.5 block text-sm font-semibold text-rn-text">
                  Phone Number
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  name="phone_number"
                  placeholder="+91 00000 00000"
                  className="w-full rounded-lg border border-rn-border bg-white px-4 py-3 text-sm text-rn-text outline-none transition-colors placeholder:text-slate-400 focus:border-rn-blue focus:ring-1 focus:ring-rn-blue/20"
                />
              </div>

              {/* Requirement */}
              <div>
                <label htmlFor="modal-message" className="mb-1.5 block text-sm font-semibold text-rn-text">
                  Your Requirement <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  required
                  rows={4}
                  placeholder={`Tell us about your ${selectedService?.toLowerCase() || 'project'} requirement...`}
                  className="w-full resize-none rounded-lg border border-rn-border bg-white px-4 py-3 text-sm text-rn-text outline-none transition-colors placeholder:text-slate-400 focus:border-rn-blue focus:ring-1 focus:ring-rn-blue/20"
                />
              </div>

              {/* Error message */}
              {submitStatus === 'error' && (
                <p className="text-sm font-medium text-red-600">
                  Message failed. Please check your connection and try again.
                </p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="premium-button w-full disabled:opacity-60 disabled:cursor-not-allowed"
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

              {/* Privacy note */}
              <p className="text-center text-[11px] text-rn-text-muted leading-4">
                We'll never share your information with anyone else.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactFormModal;

