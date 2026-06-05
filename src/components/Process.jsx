export default function Process() {
  return (
    <section className="py-section-gap px-container-margin reveal" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.5em] uppercase text-label-sm">Workflow</span>
          <h2 className="font-headline-lg text-headline-lg text-white mt-4">Visual <span className="italic font-light text-gradient">Process</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 pb-8 md:pb-0">
          <div className="glass p-6 md:p-8 rounded-3xl text-center project-card">
            <span className="text-primary font-black text-2xl mb-2 md:mb-4 block">01</span>
            <span className="text-label-sm text-white font-bold uppercase">Research</span>
          </div>
          <div className="glass p-6 md:p-8 rounded-3xl text-center project-card mt-8 md:mt-0">
            <span className="text-secondary font-black text-2xl mb-2 md:mb-4 block">02</span>
            <span className="text-label-sm text-white font-bold uppercase">Strategy</span>
          </div>
          <div className="glass p-6 md:p-8 rounded-3xl text-center project-card">
            <span className="text-tertiary font-black text-2xl mb-2 md:mb-4 block">03</span>
            <span className="text-label-sm text-white font-bold uppercase">Wireframe</span>
          </div>
          <div className="glass p-6 md:p-8 rounded-3xl text-center project-card mt-8 md:mt-0">
            <span className="text-primary font-black text-2xl mb-2 md:mb-4 block">04</span>
            <span className="text-label-sm text-white font-bold uppercase">Design</span>
          </div>
          <div className="glass p-6 md:p-8 rounded-3xl text-center project-card">
            <span className="text-secondary font-black text-2xl mb-2 md:mb-4 block">05</span>
            <span className="text-label-sm text-white font-bold uppercase">Branding</span>
          </div>
          <div className="glass p-6 md:p-8 rounded-3xl text-center project-card mt-8 md:mt-0">
            <span className="text-tertiary font-black text-2xl mb-2 md:mb-4 block">06</span>
            <span className="text-label-sm text-white font-bold uppercase">Marketing</span>
          </div>
          <div className="glass p-6 md:p-8 rounded-3xl text-center project-card col-span-2 md:col-span-1 w-1/2 md:w-full mx-auto md:mx-0">
            <span className="text-primary font-black text-2xl mb-2 md:mb-4 block">07</span>
            <span className="text-label-sm text-white font-bold uppercase">Launch</span>
          </div>
        </div>
      </div>
    </section>
  );
}
