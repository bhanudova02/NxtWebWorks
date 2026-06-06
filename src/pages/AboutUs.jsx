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
    <div className="bg-rn-bg min-h-screen text-rn-text antialiased">
      
      {/* 1. ABOUT HERO SECTION */}
      <section className="relative pt-16 md:pt-20 pb-24 bg-gradient-to-b from-rn-surface via-white to-rn-bg border-b border-rn-border overflow-hidden">
        {/* Fine grid pattern & radial gradient for ambient light */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rn-blue/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 left-1/3 w-[300px] h-[200px] bg-rn-blue/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <motion.div variants={fadeInUp} custom={0} className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-rn-blue/5 border border-rn-blue/10 text-rn-blue text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              <Sparkles size={12} className="text-rn-blue animate-pulse" />
              <span>Engineering Agency</span>
            </motion.div>
            <motion.h1 
              variants={fadeInUp} 
              custom={1}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-rn-text tracking-tight mb-8 leading-[1.12]"
            >
              We craft high-performance <br />
              <span className="text-rn-blue">digital systems</span> for scale.
            </motion.h1>
            <motion.p 
              variants={fadeInUp} 
              custom={2}
              className="text-base md:text-lg text-rn-text-muted max-w-2xl mx-auto leading-relaxed"
            >
              NxtWebWorks is a premium digital agency. We construct reliable Web applications, SaaS systems, and customized CRM databases with optimal speed, security, and interface clarity.
            </motion.p>
          </motion.div>

          {/* Premium Vercel-Style Dev Workspace Mockup */}
          {/* Responsive About Hero Workspace Banners */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="max-w-5xl mx-auto relative group"
          >
            {/* Desktop Browser Mockup View */}
            <div className="hidden sm:flex rounded-2xl border border-rn-border bg-white shadow-[0_32px_64px_-24px_rgba(0,0,0,0.06)] overflow-hidden aspect-[16/9] flex-col">
              {/* Browser control header */}
              <div className="h-12 border-b border-rn-border bg-rn-surface flex items-center px-5 justify-between">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-100 border border-red-200" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-100 border border-yellow-200" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-100 border border-green-200" />
                </div>
                <div className="flex items-center gap-1.5 px-4 py-1.5 bg-white border border-rn-border rounded-lg text-[10px] text-rn-text-muted font-mono w-72 justify-center shadow-sm">
                  <Lock size={10} className="text-rn-text-muted" />
                  <span>nxtwebworks.com/about/workspace</span>
                </div>
                <div className="w-12 h-6" />
              </div>
              <div className="flex-1 overflow-hidden relative bg-rn-surface">
                <img 
                  src="/AboutHeroDesktop.jpeg" 
                  alt="NxtWebWorks Creative Agency Workspace" 
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-tr from-rn-blue/10 via-rn-blue/5 to-white flex flex-col justify-center items-center font-sans p-8">
                        <p class="text-sm font-semibold text-rn-text">NxtWebWorks Development Studio</p>
                        <p class="text-[10px] text-rn-text-muted mt-1">Upload /AboutHeroDesktop.jpeg to replace this placeholder</p>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>

            {/* Mobile Phone Mockup View */}
            <div className="block sm:hidden max-w-[280px] mx-auto rounded-[32px] border-8 border-rn-text bg-rn-text shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] overflow-hidden aspect-[9/16] relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-rn-text rounded-b-2xl z-20 flex justify-center items-center">
                <div className="w-10 h-1 rounded-full bg-slate-700/80 mb-1" />
              </div>
              <div className="w-full h-full rounded-[24px] overflow-hidden bg-rn-surface">
                <img 
                  src="/AboutHeroMobile.jpeg" 
                  alt="NxtWebWorks Mobile Agency Showcase" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-tr from-rn-blue/10 via-rn-blue/5 to-white flex flex-col justify-center items-center font-sans p-6 text-center">
                        <p class="text-xs font-semibold text-rn-text-muted">Mobile Agency View</p>
                        <p class="text-[9px] text-rn-text-muted mt-1">Upload /AboutHeroMobile.jpeg</p>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. COMPANY STORY SECTION */}
      <section className="py-12 md:py-16 bg-rn-surface border-b border-rn-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full aspect-[4/3] rounded-md overflow-hidden border border-rn-border shadow-sm"
            >
              <img 
                src="/AboutStory.jpeg" 
                alt="NxtWebWorks Team and Workflow" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.span variants={fadeInUp} className="section-kicker">
                Who we are
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-rn-text tracking-tight leading-[1.15]">
                We build digital products that <span className="text-blue-600">actually work.</span>
              </motion.h2>
              <div className="space-y-4 pt-2">
                <motion.p variants={fadeInUp} className="text-base text-rn-text-muted leading-relaxed">
                  Our mission is simple: to help businesses grow by delivering high-quality websites and applications. We focus on clean design, fast load times, and reliable code.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-base text-rn-text-muted leading-relaxed">
                  We combine beautiful interfaces with solid backend systems to create digital experiences that your users will easily understand and love to use.
                </motion.p>
              </div>
              
              <motion.div variants={fadeInUp} className="pt-4">
                <Link to="/contact" className="premium-button shadow-sm">
                  Start a project
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO SECTION */}
      <section className="py-12 md:py-16 bg-white border-b border-rn-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-kicker">What we do</span>
            <h2 className="text-2xl md:text-3xl font-bold text-rn-text tracking-tight mt-4">
              Our core services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Layout,
                title: "Website Development",
                desc: "Beautiful, fast-loading, and responsive websites designed to help your business stand out."
              },
              {
                icon: Database,
                title: "Fullstack Applications",
                desc: "Powerful web applications with secure backend systems and reliable databases."
              },
              {
                icon: LineChart,
                title: "Admin Dashboards",
                desc: "Custom analytics and management dashboards for internal tools and business operations."
              },
              {
                icon: Layers,
                title: "App Development",
                desc: "Cross-platform and native mobile applications built for seamless user experiences."
              },
              {
                icon: ShoppingBag,
                title: "Custom Shopify Themes",
                desc: "Unique Shopify theme designs built from scratch to match your exact brand vision."
              },
              {
                icon: Code,
                title: "Shopify Customization",
                desc: "Expert modifications, app integrations, and performance optimization for existing stores."
              }
            ].map((service, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className="bg-rn-surface border border-rn-border p-6 md:p-8 rounded-md hover:bg-white hover:border-rn-blue/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-md bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-5">
                  <service.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-rn-text mb-2">{service.title}</h3>
                <p className="text-sm text-rn-text-muted leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-12 md:py-16 bg-rn-surface border-b border-rn-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-kicker">Why choose us</span>
            <h2 className="text-2xl md:text-3xl font-bold text-rn-text tracking-tight mt-4">
              Built for reliability
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                iconImg: "/icon_fast_delivery.png",
                title: "Fast Delivery",
                desc: "We respect your time. We deliver projects on schedule without compromising on quality."
              },
              {
                iconImg: "/icon_clean_code.png",
                title: "Clean Code",
                desc: "We write simple, maintainable code so your product can easily scale in the future."
              },
              {
                iconImg: "/icon_reliable_support.png",
                title: "Reliable Support",
                desc: "We provide clear communication and ongoing support even after your project is launched."
              }
            ].map((feature, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="w-16 h-16 rounded-md bg-white border border-rn-border shadow-sm flex items-center justify-center mb-5 p-2.5 overflow-hidden">
                  <img src={feature.iconImg} alt={feature.title} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <h3 className="text-base font-bold text-rn-text mb-2">{feature.title}</h3>
                <p className="text-sm text-rn-text-muted leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECH STACK */}
      <section className="py-12 md:py-16 bg-white border-b border-rn-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <p className="text-xs font-bold text-rn-text-muted uppercase tracking-widest">
            Technologies we use
          </p>
        </div>
        
        {/* Infinite Marquee Container */}
        <div className="relative w-full max-w-[100vw] mx-auto flex flex-col gap-5">
          
          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Row 1: Left scrolling */}
          <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
            {[1, 2].map((group) => (
              <div key={`group1-${group}`} className="flex gap-5 pr-5">
                {[
                  "React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Shopify", "TypeScript", "Express.js",
                  "React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Shopify", "TypeScript", "Express.js",
                  "React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Shopify", "TypeScript", "Express.js",
                  "React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Shopify", "TypeScript", "Express.js"
                ].map((tech, idx) => (
                  <div 
                    key={`row1-${group}-${idx}`}
                    className="bg-rn-surface border border-rn-border rounded-md py-2.5 px-6 text-sm font-semibold text-rn-text whitespace-nowrap flex-shrink-0 hover:bg-white transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Row 2: Right scrolling */}
          <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
            {[1, 2].map((group) => (
              <div key={`group2-${group}`} className="flex gap-5 pr-5">
                {[
                  "Figma", "Framer Motion", "Vite", "GraphQL", "PostgreSQL", "AWS", "Docker", "Stripe",
                  "Figma", "Framer Motion", "Vite", "GraphQL", "PostgreSQL", "AWS", "Docker", "Stripe",
                  "Figma", "Framer Motion", "Vite", "GraphQL", "PostgreSQL", "AWS", "Docker", "Stripe",
                  "Figma", "Framer Motion", "Vite", "GraphQL", "PostgreSQL", "AWS", "Docker", "Stripe"
                ].map((tech, idx) => (
                  <div 
                    key={`row2-${group}-${idx}`}
                    className="bg-rn-surface border border-rn-border rounded-md py-2.5 px-6 text-sm font-semibold text-rn-text whitespace-nowrap flex-shrink-0 hover:bg-white transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. HOW WE WORK (Philosophy) */}
      <section className="py-12 md:py-16 bg-rn-surface border-b border-rn-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Text Side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6 lg:order-1 order-2"
            >
              <motion.span variants={fadeInUp} className="section-kicker">
                How we work
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-rn-text tracking-tight leading-[1.15]">
                Clear process, <br />
                <span className="text-blue-600">better results.</span>
              </motion.h2>
              
              <div className="space-y-5 pt-4">
                {[
                  {
                    title: "1. Understanding your goals",
                    desc: "We start by listening. We make sure we completely understand your requirement before writing any code."
                  },
                  {
                    title: "2. Clean implementation",
                    desc: "We build your product step by step, keeping you updated so there are no surprises."
                  },
                  {
                    title: "3. Testing and launch",
                    desc: "We test everything carefully to make sure your product works perfectly for your users."
                  }
                ].map((ph, idx) => (
                  <motion.div variants={fadeInUp} key={idx} className="flex gap-4">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-md bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-rn-text mb-1">{ph.title}</h3>
                      <p className="text-sm text-rn-text-muted leading-relaxed">{ph.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full aspect-[4/3] rounded-md overflow-hidden border border-rn-border shadow-sm lg:order-2 order-1 bg-white p-2"
            >
              <div className="w-full h-full rounded-md overflow-hidden bg-rn-surface">
                <img 
                  src="/AboutPhilosophy.jpeg" 
                  alt="NxtWebWorks Work Process" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-rn-text">
              Ready to start your project?
            </h2>
            <p className="text-sm md:text-base text-rn-text-muted leading-relaxed">
              Let's discuss your requirements and build something great together.
            </p>
            <div className="pt-2">
              <Link 
                to="/contact" 
                className="premium-button shadow-sm"
              >
                Contact us today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
