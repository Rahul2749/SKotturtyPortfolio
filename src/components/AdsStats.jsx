const achievements = [
  {
    icon: 'trending_up',
    title: 'More Leads',
    desc: 'Strategic campaigns that attract and convert qualified prospects.',
  },
  {
    icon: 'gps_fixed',
    title: 'Better Conversions',
    desc: 'Data-driven optimization that turns visitors into customers.',
  },
  {
    icon: 'search',
    title: 'Higher Rankings',
    desc: 'SEO strategies that put your business on the first page of Google.',
  },
  {
    icon: 'payments',
    title: 'Better ROI',
    desc: 'Maximizing returns from every marketing dollar you invest.',
  },
];

export default function AdsStats() {
  return (
    <section id="achievements" className="bg-[#edf0f6] py-section-gap px-container-margin">
      <div className="achieve-header text-center mb-12 md:mb-16">
        <span className="text-primary font-bold tracking-[0.5em] uppercase text-label-sm">
          Results
        </span>
        <h2 className="font-headline-lg text-[32px] md:text-headline-lg text-on-surface mt-4">
          What I Help Businesses{' '}
          <em className="text-gradient italic">Achieve</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {achievements.map((item) => (
          <div
            key={item.title}
            className="achieve-card project-card bg-[#eaeff5] border border-[#c4cdd9] rounded-[2.5rem] p-8 md:p-10"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-2xl">
                {item.icon}
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#1e293b] mb-3">{item.title}</h3>
            <p className="text-[#64748b] text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
