import { Mail, Smartphone, MapPin } from 'lucide-react';

const Contact = () => {
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
                  <p className="text-gray-900 font-medium text-lg">+1 (555) 123-4567</p>
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
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-600 font-medium">Full Name</label>
                  <input type="text" placeholder="John Doe" className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-brand-blue transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-600 font-medium">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-brand-blue transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600 font-medium">Phone / WhatsApp</label>
                <input type="tel" placeholder="+1 (555) 000-0000" className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-brand-blue transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600 font-medium">Project Details</label>
                <textarea rows="4" placeholder="Tell us about your project, goals, and budget..." className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-brand-blue transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-brand-blue text-white font-bold rounded-xl mt-2 hover:bg-gray-800 hover:glow-effect transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
