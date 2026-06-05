import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;

    const xSet = gsap.quickSetter(cursor, 'x', 'px');
    const ySet = gsap.quickSetter(cursor, 'y', 'px');
    const xSetFollower = gsap.quickSetter(follower, 'x', 'px');
    const ySetFollower = gsap.quickSetter(follower, 'y', 'px');

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      xSet(mouse.x);
      ySet(mouse.y);
    };

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSetFollower(pos.x);
      ySetFollower(pos.y);
    });

    const onMouseEnter = () => {
      gsap.to(cursor, { scale: 1.5, duration: 0.2 });
      gsap.to(follower, { scale: 1.5, borderColor: 'rgba(165,231,255,0.8)', backgroundColor: 'rgba(165,231,255,0.1)', duration: 0.2 });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
      gsap.to(follower, { scale: 1, borderColor: 'rgba(255,255,255,0.2)', backgroundColor: 'transparent', duration: 0.2 });
    };

    document.addEventListener('mousemove', onMouseMove);
    
    // Add hover effect to links and buttons
    const hoverElements = document.querySelectorAll('a, button, .hover-target');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none z-[100]">
      <div ref={cursorRef} className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full mix-blend-difference z-[100]" />
      <div ref={followerRef} className="fixed top-0 left-0 w-8 h-8 border border-white/20 rounded-full mix-blend-difference z-[99] transition-colors" />
    </div>
  );
}
