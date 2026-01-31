'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Earth from './Earth';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline for hero animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Animate badge
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 }
        );
      }

      // Animate title lines with stagger
      const titleSpans = titleRef.current?.querySelectorAll('span');
      if (titleSpans && titleSpans.length > 0) {
        tl.fromTo(
          titleSpans,
          { opacity: 0, y: 60, rotateX: -15 },
          { opacity: 1, y: 0, rotateX: 0, duration: 1, stagger: 0.15 },
          '-=0.4'
        );
      }

      // Animate subtitle
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        );
      }

      // Animate CTA buttons
      const ctaButtons = ctaRef.current?.querySelectorAll('a');
      if (ctaButtons && ctaButtons.length > 0) {
        tl.fromTo(
          ctaButtons,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1 },
          '-=0.4'
        );
      }

      // Animate stats
      if (statsRef.current) {
        tl.fromTo(
          statsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.3'
        );

        // Animate individual stat items
        const statItems = statsRef.current.querySelectorAll('div > div');
        if (statItems.length > 0) {
          tl.fromTo(
            statItems,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
            '-=0.5'
          );
        }
      }

      // Animate scroll indicator
      if (scrollRef.current) {
        tl.fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          '-=0.2'
        );

        // Floating animation for scroll indicator
        gsap.to(scrollRef.current, {
          y: 8,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
    >
      {/* Particle Background */}
      <Earth />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,10,10,0.8)_70%)] z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full mb-8 opacity-0"
        >
          <span className="w-1.5 h-1.5 bg-white/50 rounded-full" />
          <span className="font-[family-name:var(--font-share-tech-mono)] text-white/50 text-xs tracking-wide">
            Canada-Based IT Consulting
          </span>
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="font-[family-name:var(--font-orbitron)] text-white mb-6 overflow-hidden"
        >
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight opacity-0">
            Intelligence
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white/30 mt-2 opacity-0">
            at Scale
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="font-[family-name:var(--font-share-tech-mono)] text-white/40 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed px-4 opacity-0"
        >
          Enterprise technology solutions that transform businesses.
          Strategic IT planning, cloud infrastructure, and security.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 justify-center items-center px-4">
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#0a0a0a] font-[family-name:var(--font-orbitron)] text-sm uppercase tracking-wider hover:bg-white/90 transition-all rounded-sm opacity-0"
          >
            Explore Solutions
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 border border-white/20 text-white/60 font-[family-name:var(--font-orbitron)] text-sm uppercase tracking-wider hover:bg-white/5 hover:text-white hover:border-white/30 transition-all rounded-sm opacity-0"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-16 md:mt-20 pt-10 border-t border-white/10 opacity-0"
        >
          {[
            { value: '99.9%', label: 'Uptime' },
            { value: '24/7', label: 'Support' },
            { value: '100+', label: 'Projects' },
            { value: '50+', label: 'Clients' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-[family-name:var(--font-orbitron)] text-xl sm:text-2xl md:text-3xl font-medium text-white/80">
                {stat.value}
              </div>
              <div className="font-[family-name:var(--font-share-tech-mono)] text-[10px] sm:text-xs text-white/30 uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block opacity-0"
      >
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-0.5 h-1.5 bg-white/30 rounded-full" />
        </div>
      </div>
    </section>
  );
}
