import React from 'react';
import { ClipboardList, Layout, Code2, ArrowRight } from 'lucide-react';

const reasons = [
  {
    title: 'Clear planning',
    description: 'Features, timeline, and cost locked before coding starts.',
    icon: ClipboardList,
  },
  {
    title: 'Simple UI design',
    description: 'Clean layouts that users read and understand instantly.',
    icon: Layout,
  },
  {
    title: 'Maintainable code',
    description: 'Structured React, Node, and Shopify work for easy updates.',
    icon: Code2,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="border-b border-rn-border bg-rn-surface py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Heading, Reasons and footer CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div data-aos="fade-up">
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Why work with us</p>
              <div className="w-8 h-[2px] bg-blue-600 mt-2"></div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl leading-tight">
                Built calmly, with <span className="text-blue-600">useful</span> decisions.
              </h2>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                For businesses that need a working website, store, or app without confusing design noise.
              </p>
            </div>

            <div className="divide-y divide-slate-100">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="flex gap-4 items-start py-3.5 first:pt-0 last:pb-0"
                  >
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon size={20} className="stroke-[1.8]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                        {reason.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Banner / CTA */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="300"
              className="flex items-center gap-3 pt-3.5 border-t border-slate-100"
            >
              <div className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-blue-600 text-blue-600">
                <ArrowRight size={13} />
              </div>
              <p className="text-xs font-medium text-slate-600">
                Let's build something that works — for you and your users.
              </p>
            </div>
          </div>

          {/* Right Column: Premium Image Mockup */}
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="lg:col-span-6"
          >
            <div className="relative overflow-hidden rounded-none shadow-xl shadow-slate-100/90 border border-slate-200 bg-white p-2">
              <img
                src="/nxt_workspace.png"
                alt="Minimalist design agency workspace"
                className="w-full aspect-[4/3] object-cover rounded-none"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
