export default function Marquee() {
  return (
    <div className="w-full bg-primary text-black py-4 overflow-hidden border-y border-primary/20 rotate-[-1deg] scale-105 my-12 z-10 relative">
      <div className="flex whitespace-nowrap animate-marquee items-center gap-8">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 px-4 text-label-lg md:text-headline-md font-black uppercase tracking-widest">
            <span>UI/UX Design</span>
            <span className="w-2 h-2 rounded-full bg-black opacity-50"></span>
            <span>Brand Strategy</span>
            <span className="w-2 h-2 rounded-full bg-black opacity-50"></span>
            <span>Digital Marketing</span>
            <span className="w-2 h-2 rounded-full bg-black opacity-50"></span>
            <span>Web Development</span>
            <span className="w-2 h-2 rounded-full bg-black opacity-50"></span>
            <span>Creative Direction</span>
            <span className="w-2 h-2 rounded-full bg-black opacity-50"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
