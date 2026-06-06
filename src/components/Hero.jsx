import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-rn-border bg-white py-14 md:py-24">
      {/* Fine grid pattern & radial gradients for ambient light */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Text & CTA */}
          <div 
            data-aos="fade-right" 
            data-aos-duration="1000"
            className="lg:col-span-6 space-y-6 text-left flex flex-col items-start"
          >
            <span className="section-kicker">
              Websites, apps, Shopify
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-rn-text leading-[1.08] text-balance">
              Clean digital products for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">growing businesses.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-rn-text-muted leading-relaxed max-w-xl">
              We build custom websites, mobile apps, Shopify stores, and tools that help businesses grow and succeed online in competitive markets.
            </p>
            
            <div className="flex flex-row items-center justify-start gap-2 pt-2 w-full max-w-[280px] sm:max-w-sm lg:max-w-none">
              <a 
                href="#projects" 
                className="premium-button flex-1 sm:flex-none text-center min-h-10 px-3 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 gap-1"
              >
                View work
                <ArrowUpRight size={14} className="stroke-[2.5]" />
              </a>
              <a 
                href="#contact" 
                className="premium-outline flex-1 sm:flex-none text-center min-h-10 px-3 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Start project
              </a>
            </div>
          </div>

          {/* Right Column: Layered Mockups */}
          <div className="lg:col-span-6 mt-4 lg:mt-0 flex items-center justify-center min-h-0 sm:min-h-[400px]">
            {/* Centered Mockup Wrapper */}
            <div className="relative w-full max-w-[540px]">
              {/* Desktop Mockup */}
              <div 
                data-aos="fade-left" 
                data-aos-delay="250"
                data-aos-duration="1000"
                className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
              >
                <div className="flex h-9 items-center gap-1.5 border-b border-slate-100 bg-slate-50/50 px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  <span className="ml-4 font-mono text-[10px] text-slate-400">nxtwebworks.com/work</span>
                </div>
                <div className="aspect-[16/10] bg-slate-50 overflow-hidden">
                  <img
                    src="/HeroSectionDesktop.jpeg"
                    alt="NxtWebWorks desktop dashboard preview"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating Mobile Mockup */}
              <div 
                data-aos="fade-up" 
                data-aos-delay="450"
                data-aos-duration="1000"
                className="absolute -bottom-6 -left-4 lg:-left-6 w-[120px] sm:w-[150px] aspect-[9/16] overflow-hidden rounded-[24px] border-[5px] border-slate-950 bg-slate-950 shadow-[0_25px_50px_rgba(0,0,0,0.12)] hidden sm:block"
              >
                <div className="w-full h-full bg-white overflow-hidden rounded-[19px]">
                  <img
                    src="/HeroSectionMobile.jpeg"
                    alt="NxtWebWorks mobile app preview"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
