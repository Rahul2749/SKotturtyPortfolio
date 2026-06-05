export default function Process() {
  return (
    <section className="py-section-gap px-container-margin reveal" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.5em] uppercase text-label-sm">Workflow</span>
          <h2 className="font-headline-lg text-headline-lg text-white mt-4">Visual <span className="italic font-light text-gradient">Process</span></h2>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-4 lg:grid-cols-7 gap-6 pb-8 md:pb-0">
          <div className="glass p-6 md:p-8 rounded-3xl text-center project-card w-[85%] self-start md:w-full">
            <span className="text-primary font-black text-2xl mb-2 md:mb-4 block">01</span>
            <span className="text-label-sm text-white font-bold uppercase">Research</span>
          </div>
          <div className="glass p-6 md:p-8 rounded-3xl text-center project-card w-[85%] self-end md:w-full">
            <span className="text-secondary font-black text-2xl mb-2 md:mb-4 block">02</span>
            <span className="text-label-sm text-white font-bold uppercase">Strategy</span>
          </div>
          <div className="glass p-6 md:p-8 rounded-3xl text-center project-card w-[85%] self-start md:w-full">
            <span className="text-tertiary font-black text-2xl mb-2 md:mb-4 block">03</span>
            <span className="text-label-sm text-white font-bold uppercase">Wireframe</span>
          </div>
          <div className="glass p-6 md:p-8 rounded-3xl text-center project-card w-[85%] self-end md:w-full">
            <span className="text-primary font-black text-2xl mb-2 md:mb-4 block">04</span>
            <span className="text-label-sm text-white font-bold uppercase">Design</span>
          </div>
          <div className="glass p-6 md:p-8 rounded-3xl text-center project-card w-[85%] self-start md:w-full">
            <span className="text-secondary font-black text-2xl mb-2 md:mb-4 block">05</span>
            <span className="text-label-sm text-white font-bold uppercase">Branding</span>
          </div>
          <div className="glass p-6 md:p-8 rounded-3xl text-center project-card w-[85%] self-end md:w-full">
            <span className="text-tertiary font-black text-2xl mb-2 md:mb-4 block">06</span>
            <span className="text-label-sm text-white font-bold uppercase">Marketing</span>
          </div>
          <div className="glass p-6 md:p-8 rounded-3xl text-center project-card w-[85%] self-center md:col-span-1 md:w-full">
            <span className="text-primary font-black text-2xl mb-2 md:mb-4 block">07</span>
            <span className="text-label-sm text-white font-bold uppercase">Launch</span>
          </div>
        </div>
      </div>
    </section>
  );
}
