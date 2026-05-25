import { InlineWidget } from 'react-calendly';

const ScheduleCall = () => {
  return (
    <section id="schedule" className="py-16 md:py-24 bg-[#FAFAFA] border-b border-[#E2E8F0] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] mb-4 tracking-tight">
            Book a Discovery Call
          </h2>
          <p className="text-base md:text-lg text-[#475569] leading-relaxed">
            Choose a time that works best for you. Let's discuss your engineering needs and how we can collaborate.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative" style={{ height: '700px' }}>
          <style dangerouslySetInnerHTML={{__html: `
            .calendly-spinner {
              position: absolute !important;
              top: 50% !important;
              left: 50% !important;
              transform: translate(-50%, -50%) !important;
              z-index: 10 !important;
            }
          `}} />
          <InlineWidget
            url="https://calendly.com/teamnxtwebworks/30min"
            styles={{ height: '100%', width: '100%' }}
            pageSettings={{
              backgroundColor: 'ffffff',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: '3b82f6',
              textColor: '0F172A'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ScheduleCall;
