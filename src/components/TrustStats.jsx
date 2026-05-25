
const technologies = [
  {
    category: "Frontend & Styling",
    items: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS"]
  },
  {
    category: "JavaScript Ecosystem",
    items: ["JavaScript", "TypeScript", "React", "Next.js"]
  },
  {
    category: "Backend & Data",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
  },
  {
    category: "Shopify Ecosystem",
    items: ["Shopify Liquid", "Theme Customization", "App Integrations"]
  }
];

const TrustStats = () => {
  return (
    <section className="py-12 md:py-24 bg-[#EFF6FF] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <p className="text-sm font-semibold text-[#3B82F6] uppercase tracking-widest mb-2 md:mb-4">
            Tech Stack
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] tracking-tight">
            Technologies We Master
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
          {technologies.map((techGroup, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="text-sm font-medium text-[#475569] uppercase tracking-wider mb-4 md:mb-6 border-b border-[#E2E8F0] pb-2">
                {techGroup.category}
              </h3>
              <ul className="flex flex-row flex-wrap md:flex-col gap-3 md:gap-4">
                {techGroup.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-2 md:gap-3 text-[#1E293B] text-sm md:text-base font-medium bg-white md:bg-transparent border border-[#E2E8F0] md:border-transparent px-3 py-1.5 md:p-0 rounded-full md:rounded-none">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded bg-[#E0E7FF] flex items-center justify-center flex-shrink-0">
                      {/* Add real icon image here: <img src="..." alt={item} className="w-3 h-3 md:w-4 md:h-4 object-contain" /> */}
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
