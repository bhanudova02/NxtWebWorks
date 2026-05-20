import React from 'react';
import { InlineWidget } from 'react-calendly';

const ScheduleCall = () => {
  return (
    <section id="schedule" className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Book a <span className="text-brand-blue">Free Discovery Call</span>
          </h2>
          <p className="text-lg text-gray-600">
            Choose a time that works best for you. We'll discuss your project requirements, goals, and how we can help your brand grow.
          </p>
        </div>

        <div className="glass-card bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl relative" style={{ height: '700px' }}>
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
              textColor: '111827'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ScheduleCall;
