import { motion } from 'framer-motion';
import { 
  GitBranch, 
  Terminal, 
  Cpu, 
  Layers, 
  Shield, 
  Zap, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Database, 
  Layout, 
  ShoppingBag, 
  LineChart, 
  Users, 
  Code,
  Lock,
  Workflow, 
  Settings,
  ChevronRight,
  TrendingUp,
  FileCode,
  DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.08
    }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen text-[#1E293B] antialiased">
      
      {/* 1. ABOUT HERO SECTION */}
      <section className="relative pt-16 md:pt-20 pb-24 bg-gradient-to-b from-[#FAFAFA] via-[#FCFCFD] to-white border-b border-[#E2E8F0] overflow-hidden">
        {/* Fine grid pattern & radial gradient for ambient light */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-50/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 left-1/3 w-[300px] h-[200px] bg-indigo-50/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <motion.div variants={fadeInUp} custom={0} className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              <Sparkles size={12} className="text-blue-500 animate-pulse" />
              <span>Engineering Agency</span>
            </motion.div>
            <motion.h1 
              variants={fadeInUp} 
              custom={1}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0F172A] tracking-tight mb-8 leading-[1.12]"
            >
              We craft high-performance <br />
              <span className="text-blue-600">digital systems</span> for scale.
            </motion.h1>
            <motion.p 
              variants={fadeInUp} 
              custom={2}
              className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed"
            >
              NxtWebWorks is a premium digital agency. We construct reliable Web applications, SaaS systems, and customized CRM databases with optimal speed, security, and interface clarity.
            </motion.p>
          </motion.div>

          {/* Premium Vercel-Style Dev Workspace Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="max-w-5xl mx-auto relative group"
          >
            {/* Glowing borders shadow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur-lg opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_32px_64px_-24px_rgba(0,0,0,0.06)] overflow-hidden aspect-[16/9] sm:aspect-[21/9] flex flex-col">
              {/* Browser control header */}
              <div className="h-12 border-b border-[#E2E8F0] bg-[#FAFAFA] flex items-center px-5 justify-between">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-100 border border-red-200" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-100 border border-yellow-200" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-100 border border-green-200" />
                </div>
                <div className="flex items-center gap-1.5 px-4 py-1.5 bg-white border border-[#E2E8F0] rounded-lg text-[10px] text-gray-500 font-mono w-72 justify-center shadow-sm">
                  <Lock size={10} className="text-gray-400" />
                  <span>nxtwebworks.com/src/core/router.ts</span>
                </div>
                <div className="w-12 h-6" />
              </div>

              {/* Dev Studio Workspace */}
              <div className="flex-grow flex bg-white font-sans text-xs">
                {/* Sidebar Navigation */}
                <div className="w-56 border-r border-[#E2E8F0] p-4 flex flex-col gap-5 hidden sm:flex bg-[#FAFAFA]">
                  <div>
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Project Explorer</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-blue-600 font-medium bg-blue-50/50 py-1.5 px-2.5 rounded-md">
                        <FileCode size={13} />
                        <span>CoreEngine.ts</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 py-1.5 px-2.5 hover:text-gray-900 transition-colors">
                        <FileCode size={13} />
                        <span>Database.sql</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 py-1.5 px-2.5 hover:text-gray-900 transition-colors">
                        <FileCode size={13} />
                        <span>UI_Components.tsx</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Interactive Screen */}
                <div className="flex-grow p-6 flex flex-col justify-between bg-gradient-to-r from-white to-[#F8FAFC]">
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1.5">
                      <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
                      <div className="h-3 w-48 bg-gray-100 rounded" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-mono text-gray-400">production_v3_ready</span>
                    </div>
                  </div>

                  {/* Flow representation inside preview */}
                  <div className="relative p-5 border border-[#E2E8F0] rounded-xl bg-white shadow-sm flex flex-col sm:flex-row items-center gap-6 justify-between overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-indigo-50/20 to-transparent pointer-events-none" />
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
                        <GitBranch size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">Automated Pipeline</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">Continuous verification logic active</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />
                        <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white" />
                        <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-blue-600">+4</div>
                      </div>
                      <span className="h-6 w-px bg-gray-200" />
                      <span className="text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-600 py-1 px-2.5 border border-emerald-100 rounded-md">Deploy OK</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. COMPANY STORY SECTION */}
      <section className="py-24 bg-[#FAFAFA] border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-50/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="lg:col-span-6 space-y-6"
            >
              <motion.span variants={fadeInUp} className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                Our Foundation
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-semibold text-[#0F172A] tracking-tight leading-snug">
                Designed to bridge visual beauty <br />
                with enterprise backend systems.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-base text-[#475569] leading-relaxed">
                We founded NxtWebWorks because we believed websites shouldn't just look pretty—they need to perform, scale, and carry complex product logics effortlessly. 
              </motion.p>
              <motion.p variants={fadeInUp} className="text-base text-[#475569] leading-relaxed">
                By integrating Framer-like interface animations with solid database design patterns, we engineer experiences that increase conversions and reinforce user trust from the first view.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="pt-2">
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group transition-colors">
                  <span>Start building today</span> 
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Split Visual Timeline Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 p-1 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="bg-[#FCFCFD] p-8 rounded-xl space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-[#E2E8F0]">
                  <span className="text-xs font-bold text-gray-700">Project Delivery Stages</span>
                  <span className="text-[10px] bg-blue-50 text-blue-600 border border-blue-100 font-semibold px-2 py-0.5 rounded">Vercel Standard</span>
                </div>
                
                <div className="space-y-6 relative pl-4 border-l border-blue-100">
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-blue-50" />
                    <h4 className="text-xs font-semibold text-[#0F172A]">01 / UI Layout Review</h4>
                    <p className="text-[11px] text-gray-500 mt-1">Establishing custom wireframes, interactive flows, and responsive layouts.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-amber-500 ring-4 ring-amber-50" />
                    <h4 className="text-xs font-semibold text-[#0F172A]">02 / Production Dev Phase</h4>
                    <p className="text-[11px] text-gray-500 mt-1">Writing clean JSX structures, database API calls, and animations state-logic.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-50" />
                    <h4 className="text-xs font-semibold text-[#0F172A]">03 / Edge Server Launch</h4>
                    <p className="text-[11px] text-gray-500 mt-1">Hosting on Vercel Edge Server, executing Lighthouse performance audits.</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. WHAT WE BUILD SECTION (BENTO GRID) */}
      <section className="py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex py-1 px-3.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              Featured Builds
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] tracking-tight mb-4">
              We specialize in custom web foundations.
            </h2>
            <p className="text-base text-[#475569] leading-relaxed max-w-xl mx-auto">
              Our structures bypass basic templates to construct secure, lightning-fast digital applications.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bento Card 1: CRM Systems */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group md:col-span-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-blue-50/10 to-transparent pointer-events-none" />
              <div>
                <span className="p-2.5 bg-blue-50 text-blue-600 rounded-xl inline-block mb-4 border border-blue-100">
                  <Database size={20} />
                </span>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Custom CRM & Internal Tools</h3>
                <p className="text-sm text-[#475569] mb-8 max-w-md">
                  We build client pipelines, analytics boards, and database tools designed for rapid employee use.
                </p>
              </div>
              
              {/* High Fidelity CRM Mockup */}
              <div className="bg-[#FCFCFD] rounded-xl p-5 border border-[#E2E8F0] flex flex-col justify-between overflow-hidden shadow-inner gap-4">
                <div className="flex justify-between items-center pb-3 border-b border-[#F1F5F9]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <span className="text-[10px] font-bold text-gray-700">Client Pipeline</span>
                  </div>
                  <span className="text-[9px] bg-green-50 text-green-600 border border-green-100 font-semibold px-2 py-0.5 rounded-md">$142,800 Active</span>
                </div>
                
                {/* Visual Pipeline Stages */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { stage: "Discovery", count: "12 Leads", color: "bg-blue-500" },
                    { stage: "Technical Scope", count: "8 Spec", color: "bg-sky-500" },
                    { stage: "Contract Sent", count: "5 Ready", color: "bg-emerald-500" }
                  ].map((pipe, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-lg border border-[#E2E8F0] shadow-sm flex flex-col justify-between h-16">
                      <span className="text-[10px] text-gray-400 font-medium">{pipe.stage}</span>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-[11px] font-bold text-gray-800">{pipe.count}</span>
                        <div className={`w-1.5 h-1.5 rounded-full ${pipe.color}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bento Card 2: SaaS Platforms */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="p-2.5 bg-blue-50 text-blue-600 rounded-xl inline-block mb-4 border border-blue-100">
                  <LineChart size={20} />
                </span>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">SaaS Platforms</h3>
                <p className="text-sm text-[#475569] mb-8">
                  Highly customizable interfaces built with fast data queries and stripe integrations.
                </p>
              </div>
              
              {/* SaaS Metric Mockup */}
              <div className="bg-[#FCFCFD] rounded-xl p-5 border border-[#E2E8F0] shadow-inner space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-gray-400 font-mono">monthly_recurring_revenue</span>
                  <TrendingUp size={12} className="text-green-500" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xl font-bold text-gray-900 tracking-tight">$42,910</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] text-green-600 font-bold bg-green-50 border border-green-100 py-0.5 px-1.5 rounded">+14.2%</span>
                    <span className="text-[9px] text-gray-400">vs last month</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card 3: Admin Dashboards */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl inline-block mb-4 border border-emerald-100">
                  <Layout size={20} />
                </span>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Admin Dashboards</h3>
                <p className="text-sm text-[#475569] mb-8">
                  Intuitive administrative controls with clear security checks.
                </p>
              </div>
              
              {/* Admin Panel User Row List */}
              <div className="bg-[#FCFCFD] rounded-xl p-4 border border-[#E2E8F0] shadow-inner space-y-2">
                {[
                  { name: "Apex Ltd", plan: "Enterprise", status: "Active", dotColor: "bg-emerald-500" },
                  { name: "Vertex Co", plan: "Developer", status: "Trial", dotColor: "bg-amber-500" }
                ].map((user, i) => (
                  <div key={i} className="flex justify-between items-center bg-white p-2.5 rounded-lg border border-[#E2E8F0] shadow-sm">
                    <div>
                      <h4 className="text-[10px] font-bold text-gray-800">{user.name}</h4>
                      <p className="text-[8px] text-gray-400 mt-0.5">{user.plan}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${user.dotColor}`} />
                      <span className="text-[9px] font-semibold text-gray-600">{user.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bento Card 4: Headless Shopify Stores */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group md:col-span-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-amber-50/10 to-transparent pointer-events-none" />
              <div>
                <span className="p-2.5 bg-amber-50 text-amber-600 rounded-xl inline-block mb-4 border border-amber-100">
                  <ShoppingBag size={20} />
                </span>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Shopify & Headless Commerce</h3>
                <p className="text-sm text-[#475569] mb-8 max-w-md">
                  We build highly customized e-commerce designs connected directly to Shopify APIs for lightning-fast cart operations.
                </p>
              </div>
              
              {/* Product Store Mockup */}
              <div className="bg-[#FCFCFD] rounded-xl p-5 border border-[#E2E8F0] flex flex-col sm:flex-row items-center gap-5 justify-between shadow-inner overflow-hidden">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-lg border border-[#E2E8F0] flex items-center justify-center p-2.5 shadow-sm">
                    <ShoppingBag size={18} className="text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-800">Pro Developer Theme</h4>
                    <p className="text-[10px] text-gray-500 mt-0.5">$49.00 / download</p>
                  </div>
                </div>
                
                <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors w-full sm:w-auto">
                  Add to cart
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY CLIENTS TRUST US */}
      <section className="py-24 bg-white border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
              NXT Advantage
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] tracking-tight mt-2 mb-4">
              Designed for reliability and efficiency.
            </h2>
            <p className="text-sm text-gray-500">
              We focus on structure, maintainability, and clean UI standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: "Scalable Infrastructure",
                desc: "We write clean, modular APIs and components that scale seamlessly with increase in traffic.",
                bg: "bg-blue-50/50 text-blue-600 border-blue-100"
              },
              {
                icon: Layers,
                title: "Modern Stack Focus",
                desc: "Utilize core frameworks (React, Next.js, Node.js) for clean logic division and fast server speeds.",
                bg: "bg-sky-50/50 text-sky-600 border-sky-100"
              },
              {
                icon: Sparkles,
                title: "Premium User Interface",
                desc: "Every border, alignment, and animation is designed to look highly professional and clear.",
                bg: "bg-amber-50/50 text-amber-600 border-amber-100"
              },
              {
                icon: Zap,
                title: "Speed Performance Audit",
                desc: "Optimized server responses, image compression, and edge distribution for fast loading times.",
                bg: "bg-emerald-50/50 text-emerald-600 border-emerald-100"
              },
              {
                icon: Shield,
                title: "Enterprise Data Safety",
                desc: "Database layer authentication, secure queries, and token management built directly into system core.",
                bg: "bg-red-50/50 text-red-600 border-red-100"
              },
              {
                icon: Users,
                title: "Dedicated Technical Support",
                desc: "Post-deployment audit checkups and updates to keep your application operational without error.",
                bg: "bg-teal-50/50 text-teal-600 border-teal-100"
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#FAFAFA] border border-[#E2E8F0] p-6 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col gap-4 group"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${item.bg} group-hover:scale-105 transition-transform`}>
                  <item.icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-[#475569] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECH STACK SECTION */}
      <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
              Our Core Development Stack
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
            {[
              "React",
              "Next.js",
              "TailwindCSS",
              "Node.js",
              "MongoDB",
              "Shopify",
              "TypeScript",
              "APIs & Webhooks"
            ].map((tech, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-xl py-3 px-5 text-xs font-semibold text-[#0F172A] shadow-sm font-mono tracking-tight hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DEVELOPMENT PHILOSOPHY SECTION */}
      <section className="py-24 bg-white border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual Clean Architecture onion model */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative aspect-square w-full max-w-md mx-auto bg-[#FCFCFD] rounded-2xl border border-[#E2E8F0] flex items-center justify-center p-8 overflow-hidden shadow-sm"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-30" />
              {/* Outer Layer */}
              <div className="w-full h-full border border-dashed border-[#CBD5E1] rounded-full flex items-center justify-center relative p-12 animate-[spin_60s_linear_infinite]">
                <span className="absolute top-2 text-[8px] font-mono font-bold text-gray-400">UI / API Layer</span>
                {/* Mid Layer */}
                <div className="w-full h-full border border-[#E2E8F0] bg-white rounded-full flex items-center justify-center relative p-10 shadow-inner">
                  <span className="absolute top-2 text-[8px] font-mono font-bold text-gray-400">Controllers</span>
                  {/* Core Inner Layer */}
                  <div className="w-full h-full border border-blue-100 bg-blue-50/20 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-[10px] font-mono font-bold text-blue-600">Core Entities</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="lg:col-span-7 space-y-6"
            >
              <motion.span variants={fadeInUp} className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                Our Philosophy
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-semibold text-[#0F172A] tracking-tight leading-snug">
                Consistent structures, <br />
                built for clear project audits.
              </motion.h2>
              
              <div className="space-y-6 pt-2">
                {[
                  {
                    title: "Clean Presentation Layer",
                    desc: "Separating operational business algorithms from UI modules so logic remains isolated and testable."
                  },
                  {
                    title: "Optimization Priority",
                    desc: "Executing compressed client-side payload logic to achieve fast load times and clean animations."
                  },
                  {
                    title: "Strict Coding Standards",
                    desc: "Enforcing strict code type verification standards to allow clean expansion audits by any engineer."
                  }
                ].map((ph, idx) => (
                  <motion.div variants={fadeInUp} key={idx} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
                      <Check size={11} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xs md:text-sm text-[#0F172A] mb-1">{ph.title}</h3>
                      <p className="text-xs md:text-sm text-[#475569] leading-relaxed">{ph.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 7. FINAL ABOUT CTA */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.06),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.06),transparent_40%)]" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
              Let's construct something exceptional.
            </h2>
            <p className="text-sm md:text-base text-[#94A3B8] max-w-lg mx-auto leading-relaxed">
              Build with an agency that prioritizes clean architecture guidelines, modern animations, and continuous deployment flow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-[#0F172A] text-sm font-semibold hover:bg-gray-100 transition-colors shadow-sm text-center"
              >
                Start project inquiry
              </Link>
              <Link 
                to="/contact#schedule" 
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#1E293B] border border-[#334155] text-[#CBD5E1] text-sm font-semibold hover:bg-[#334155] hover:text-white transition-colors text-center"
              >
                Schedule discovery call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
