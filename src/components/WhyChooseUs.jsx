import { ShieldCheck, Zap, BarChart } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="sticky top-24">
            <p className="text-sm font-semibold text-[#3B82F6] uppercase tracking-widest mb-4">
              The NxtWebWorks Advantage
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] mb-6 tracking-tight leading-snug">
              We don't just write code, we engineer scalable business solutions.
            </h2>
            <p className="text-base md:text-lg text-[#475569] leading-relaxed mb-8">
              We don't just build websites; we engineer digital products that solve complex business problems. Our approach combines modern framework capabilities with robust engineering principles.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#3B82F6] flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#0F172A] mb-2">Modern Tech Stack</h3>
                  <p className="text-[#475569] leading-relaxed">
                    Utilizing React, Next.js, and Node.js to ensure your application is fast, scalable, and maintainable.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-[#FEFCE8] flex items-center justify-center text-[#EAB308] flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#0F172A] mb-2">Enterprise Security</h3>
                  <p className="text-[#475569] leading-relaxed">
                    Implementing best-in-class security measures, authentication systems, and data protection protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            {/* Modular Structure Placeholder */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden p-6 relative z-10">
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-[#E2E8F0]">
                <div>
                  <div className="h-5 w-32 bg-gray-200 rounded mb-2" />
                  <div className="h-3 w-48 bg-gray-100 rounded" />
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#EFF6FF] text-[#3B82F6] flex items-center justify-center"><BarChart className="w-4 h-4" /></div>
                </div>
              </div>
              
              <div className="space-y-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded bg-gray-100 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="h-4 w-1/3 bg-gray-200 rounded mb-2" />
                      <div className="h-2 w-full bg-gray-100 rounded overflow-hidden">
                        <div className="h-full bg-[#3B82F6] rounded" style={{ width: `${80 - i * 15}%` }} />
                      </div>
                    </div>
                    <div className="w-16 text-right">
                      <div className="h-4 w-full bg-gray-200 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#3B82F6]/5 to-[#4F46E5]/5 rounded-3xl -z-10 transform rotate-2" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
