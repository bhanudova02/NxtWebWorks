import { useEffect, useState, useRef } from 'react';
import { 
  Rocket, 
  Smile, 
  Shield, 
  ArrowUpRight, 
  Code, 
  Server, 
  ShoppingCart, 
  Wrench, 
  Check,
  Box,
  Settings,
  Clock,
  MapPin,
  Globe,
  Cpu,
  ShoppingBag,
  Layout
} from 'lucide-react';

const CountUp = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  const numericMatch = value.match(/[\d.]+/);
  if (!numericMatch) {
    return <span>{value}</span>;
  }

  const targetNumber = parseFloat(numericMatch[0]);
  const suffix = value.replace(/[\d.]+/, '');

  useEffect(() => {
    let observer;
    let animationFrameId;

    const startAnimation = () => {
      const startTime = performance.now();
      const duration = 2000; // 2 seconds

      const updateCount = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out quad
        const easeProgress = progress * (2 - progress);
        const currentVal = easeProgress * targetNumber;

        if (value.includes('.')) {
          setCount(parseFloat(currentVal.toFixed(1)));
        } else {
          setCount(Math.round(currentVal));
        }

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(updateCount);
        }
      };

      animationFrameId = requestAnimationFrame(updateCount);
    };

    if (ref.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
      observer.observe(ref.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [targetNumber, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const topStats = [
  { value: '50+', label: 'Projects Delivered', icon: Rocket },
  { value: '100%', label: 'Client Satisfaction', icon: Smile },
  { value: '99.9%', label: 'Uptime SLA', icon: Shield },
  { value: '3x', label: 'Avg Perf Boost', icon: ArrowUpRight },
];

const techCategories = [
  {
    title: 'Frontend',
    icon: Code,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB']
  },
  {
    title: 'Commerce',
    icon: ShoppingCart,
    items: ['Shopify Liquid', 'Theme Dev', 'App Integration', 'GraphQL']
  },
  {
    title: 'Development',
    icon: Wrench,
    items: ['Vercel', 'GitHub CI/CD', 'Edge Hosting', 'Lighthouse']
  }
];

const bottomStats = [
  { value: '48+', label: 'Completed builds', icon: Box },
  { value: '4', label: 'Core services', icon: Settings },
  { value: '72h', label: 'First plan', icon: Clock },
  { value: 'India', label: 'Remote friendly', icon: MapPin },
];

const workTypes = [
  { label: 'Business websites', icon: Globe },
  { label: 'Full-stack applications', icon: Cpu },
  { label: 'Shopify stores', icon: ShoppingBag },
  { label: 'Admin dashboards', icon: Layout },
];

const TrustStats = () => {
  return (
    <section className="bg-[#050814] py-10 md:py-14 text-white relative overflow-hidden border-b border-slate-900">
      {/* Decorative background glows */}
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-12 relative z-10">
        
        {/* 1. TOP STATS ROW */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {topStats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-[#0B1224]/50 border border-slate-800/80 rounded-xl p-4 sm:p-6 flex items-center gap-3 sm:gap-5 hover:border-slate-700/80 transition-all duration-300 group shadow-[0_8px_30px_rgb(0,0,0,0.15)]"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-900 text-slate-300 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 border border-slate-800 shadow-inner">
                  <IconComponent size={18} className="stroke-[2]" />
                </div>
                <div>
                  <p className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. TECH STACK SECTION */}
        <div className="space-y-6 md:space-y-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-900 overflow-hidden">
            <div
              data-aos="fade-up"
              className="px-1.5 sm:px-3 lg:px-0"
            >
              <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest block mb-2">
                TECH STACK
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                Technologies We Master
              </h2>
            </div>
            
            <div 
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex items-center lg:justify-end px-1.5 sm:px-3 lg:px-0"
            >
              <div className="border-l-2 border-blue-500 pl-4 py-1 text-slate-400 text-xs md:text-sm max-w-[280px] leading-relaxed">
                Production-grade tooling used across every project we ship.
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {techCategories.map((cat, i) => {
              const IconComponent = cat.icon;
              return (
                <div
                  key={cat.title}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="bg-[#080E1C] border border-[#1E293B]/60 rounded-xl p-4 sm:p-7 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all duration-300 group flex flex-col"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900 text-slate-300 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 border border-slate-800">
                    <IconComponent size={18} className="stroke-[2]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {cat.title}
                  </h3>
                  <div className="w-6 h-0.5 bg-blue-500/80 mt-2 mb-4 sm:mb-6" />
                  
                  <ul className="space-y-2.5 sm:space-y-3.5 flex-grow">
                    {cat.items.map((item) => (
                      <li 
                        key={item} 
                        className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs md:text-sm text-slate-300 font-medium"
                      >
                        <span className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-full bg-slate-900/50 border border-slate-800 text-slate-300 flex items-center justify-center flex-shrink-0 p-0.5">
                          <Check size={9} className="stroke-[3]" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. BOTTOM SUMMARY BLOCK */}
        <div
          data-aos="fade-up"
          className="bg-[#080E1C] border border-[#1E293B]/50 rounded-2xl p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden"
        >
          {/* Subtle glow inside card */}
          <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Left Column info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h3 className="text-base md:text-lg font-bold text-white leading-snug max-w-xl">
                NxtWebWorks builds practical web products for small teams, stores, and growing businesses.
              </h3>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-lg">
                Simple design, clean code, and clear communication from the first call to launch.
              </p>
            </div>
            
            {/* Work Type Pills */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {workTypes.map((type) => {
                const PillIcon = type.icon;
                return (
                  <span
                    key={type.label}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-800 bg-[#0F172A]/50 text-[10px] md:text-xs font-semibold text-slate-300 hover:border-slate-700 hover:text-white transition-all cursor-default"
                  >
                    <PillIcon size={12} className="text-slate-400" />
                    <span>{type.label}</span>
                  </span>
                );
              })}
            </div>
          </div>

          {/* Right Column Stats List */}
          <div className="lg:col-span-5 grid grid-cols-4 gap-2 border-t lg:border-t-0 lg:border-l border-slate-800/80 pt-8 lg:pt-0 lg:pl-10">
            {bottomStats.map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div 
                  key={stat.label} 
                  className="flex flex-col items-center text-center justify-between min-h-[96px]"
                >
                  <div className="w-8 h-8 rounded-md bg-slate-900 text-slate-300 flex items-center justify-center border border-slate-800 shadow-inner">
                    <StatIcon size={16} className="stroke-[2]" />
                  </div>
                  <div className="flex-grow flex flex-col justify-end mt-3">
                    <span className="text-lg md:text-xl font-bold text-white tracking-tight block">
                      <CountUp value={stat.value} />
                    </span>
                    <span className="text-[8px] md:text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1 block leading-tight">
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustStats;
