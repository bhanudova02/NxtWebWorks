
const CTABanner = () => {
  return (
    <section className="py-20 px-6 md:px-12 container mx-auto">
      <div className="p-12 md:p-20 bg-rn-blue text-center relative overflow-hidden rounded-3xl shadow-2xl border-0">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Build Your <span className="text-white/70">Next Website?</span></h2>
          <p className="text-xl text-white/90 mb-10">Let's collaborate to create a digital experience that elevates your brand and drives measurable results.</p>
          <a href="#contact" className="inline-flex items-center justify-center px-10 py-5 bg-white text-rn-blue font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
