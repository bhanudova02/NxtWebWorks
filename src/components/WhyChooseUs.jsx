import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Server, ShieldCheck, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      number: '01',
      title: 'Modern Tech Stack',
      description: 'We build with React, Next.js, and Node.js to ensure your application is fast, responsive, and easy to maintain.',
      badge: 'Performance',
      icon: Zap,
    },
    {
      number: '02',
      title: 'Enterprise Security',
      description: 'We implement TLS 1.3 encryption, secure cookie validation, and custom JWT authorization scopes to protect your data.',
      badge: 'Security',
      icon: ShieldCheck,
    },
    {
      number: '03',
      title: 'Modular Code Quality',
      description: 'We follow clean code principles and decoupled architecture patterns, allowing database and API changes without code rewrites.',
      badge: 'Scalability',
      icon: Cpu,
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#EFF6FF] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                <Cpu size={12} className="animate-pulse" />
                <span>The Advantage</span>
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-tight mb-4">
                Engineered for Performance and Security
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                We combine modern framework capabilities with robust engineering principles to deliver software that scales.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.number} className="flex gap-4 group">
                    <span className="text-sm font-bold text-gray-300 group-hover:text-blue-500 transition-colors pt-1">
                      {feat.number}
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-gray-900">
                          {feat.title}
                        </h3>
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-gray-50 border border-gray-100 text-gray-400">
                          {feat.badge}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 relative w-full">
            <div className="bg-[#FCFDFE] rounded-2xl border border-slate-200/70 p-4 md:p-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)] relative z-10 overflow-hidden">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-200/80">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="ml-3 px-3 py-1 rounded bg-white border border-slate-200/80 text-[9px] font-mono text-gray-400 w-36 truncate shadow-[inset_0_1px_2px_rgba(15,23,42,0.04)]">
                    api.nxtwebworks.com/v1
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] font-bold font-mono text-green-600 bg-green-50 px-2 py-0.5 rounded-md">
                    OPERATIONAL
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-4 space-y-3 font-mono text-[9px] text-gray-400 bg-white border border-slate-200/70 p-3.5 rounded-xl shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                  <div className="text-[10px] font-bold text-gray-700 pb-1.5 border-b border-slate-100 flex items-center gap-1.5">
                    <Globe size={11} className="text-blue-500" /> Global Nodes
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>US-East</span>
                      <span className="text-green-600 font-bold">12ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>EU-Central</span>
                      <span className="text-green-600 font-bold">18ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>AP-South</span>
                      <span className="text-green-600 font-bold">22ms</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-8 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border border-slate-200/70 p-4 rounded-xl shadow-[0_8px_24px_rgba(15,23,42,0.04)] flex flex-col justify-between h-20">
                      <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">Edge Latency</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-2xl font-bold text-gray-900">14</span>
                        <span className="text-[10px] text-gray-400 font-mono">ms</span>
                      </div>
                    </div>
                    <div className="bg-white border border-slate-200/70 p-4 rounded-xl shadow-[0_8px_24px_rgba(15,23,42,0.04)] flex flex-col justify-between h-20">
                      <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">Security SLA</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-2xl font-bold text-gray-900">A+</span>
                        <span className="text-[9px] font-bold text-green-600 font-mono">Verified</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200/70 p-4 rounded-xl shadow-[0_8px_24px_rgba(15,23,42,0.04)] space-y-3 font-mono text-[9px] text-gray-400">
                    <div className="flex justify-between items-center text-gray-700">
                      <span className="font-bold flex items-center gap-1.5">
                        <Server size={11} className="text-blue-500" /> Server Throughput
                      </span>
                      <span className="text-blue-600 font-bold">99.9% Uptime</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-10 mt-1">
                      {[35, 50, 40, 75, 25, 30, 45, 60, 80].map((val, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end h-full">
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${val}%` }}
                            className={`w-full rounded-t-sm ${i === 8 ? 'bg-blue-500' : 'bg-gray-200 hover:bg-blue-200 transition-colors'}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/4 to-indigo-500/4 rounded-3xl -z-10 transform rotate-1 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
