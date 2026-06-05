import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = 'auto';
        onComplete();
      }
    });

    // Simulate loading progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 20) + 10;
      if (currentProgress > 100) currentProgress = 100;
      setProgress(currentProgress);
      
      if (currentProgress === 100) {
        clearInterval(interval);
        
        // Outro animation
        tl.to(textRef.current, {
          y: -50,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.in'
        })
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut'
        });
      }
    }, 150);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'auto';
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[999] bg-background flex flex-col items-center justify-center"
    >
      <div ref={textRef} className="flex flex-col items-center gap-4">
        <span className="font-headline-lg text-4xl md:text-headline-lg text-white font-black tracking-widest">SAHITI.K</span>
        <div className="w-48 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
          <div 
            className="absolute top-0 left-0 h-full bg-primary transition-all duration-200" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-label-sm text-primary font-bold tracking-[0.3em]">{progress}%</span>
      </div>
    </div>
  );
}
