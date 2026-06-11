import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const preloaderRef = useRef(null);
  const logoRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);
  const textRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Exit animation
        const exitTl = gsap.timeline({
          onComplete: () => {
            if (onComplete) onComplete();
          },
        });
        exitTl
          .to(counterRef.current, { autoAlpha: 0, y: -20, duration: 0.3, ease: 'power2.in' })
          .to(progressRef.current, { autoAlpha: 0, scaleX: 0, duration: 0.3, ease: 'power2.in' }, '-=0.2')
          .to(textRef.current, { autoAlpha: 0, y: -15, duration: 0.3, ease: 'power2.in' }, '-=0.2')
          .to(logoRef.current, { scale: 1.2, autoAlpha: 0, duration: 0.5, ease: 'power3.in' }, '-=0.2')
          .to(preloaderRef.current, {
            clipPath: 'circle(0% at 50% 50%)',
            duration: 0.8,
            ease: 'power3.inOut',
          }, '-=0.3');
      },
    });

    // Entrance animation
    tl.fromTo(
      logoRef.current,
      { scale: 0.5, autoAlpha: 0, rotate: -15 },
      { scale: 1, autoAlpha: 1, rotate: 0, duration: 0.8, ease: 'back.out(1.7)' }
    )
      .fromTo(
        textRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo(
        progressRef.current,
        { autoAlpha: 0, scaleX: 0 },
        { autoAlpha: 1, scaleX: 1, duration: 0.4, ease: 'power2.out' },
        '-=0.2'
      )
      .fromTo(
        counterRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.3 },
        '-=0.2'
      );

    // Progress bar fill animation
    tl.to(progressBarRef.current, {
      scaleX: 1,
      duration: 1.4,
      ease: 'power2.inOut',
      onUpdate: function () {
        const progress = Math.round(this.progress() * 100);
        if (counterRef.current) {
          counterRef.current.textContent = `${progress}%`;
        }
      },
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#e4e8ef]"
      style={{ clipPath: 'circle(150% at 50% 50%)' }}
    >
      {/* Ambient glow blobs */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/20 blur-[120px] -top-20 -left-20 animate-pulse" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-[#ecd4ff]/15 blur-[100px] -bottom-10 -right-10 animate-pulse" />

      {/* Logo */}
      <div ref={logoRef} className="relative mb-6">
        <img
          src="/skotturty_logo.png"
          alt="SK Logo"
          className="h-20 md:h-28 object-contain drop-shadow-[0_10px_20px_rgba(79,140,255,0.3)]"
        />
      </div>

      {/* Name */}
      <div ref={textRef} className="mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-black tracking-tight text-on-surface">
          SAHITI<span className="text-primary">.K</span>
        </h1>
        <p className="text-xs md:text-sm text-on-surface-variant tracking-[0.3em] uppercase mt-1 font-body-lg">
          Multidisciplinary Designer
        </p>
      </div>

      {/* Progress bar */}
      <div ref={progressRef} className="w-48 md:w-64 relative">
        <div className="w-full h-[2px] bg-on-surface/10 rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full rounded-full origin-left"
            style={{
              transform: 'scaleX(0)',
              background: 'linear-gradient(90deg, #4F8CFF, #0055FF)',
            }}
          />
        </div>
      </div>

      {/* Counter */}
      <div
        ref={counterRef}
        className="mt-4 text-xs tracking-[0.2em] text-on-surface-variant font-mono"
      >
        0%
      </div>
    </div>
  );
}
