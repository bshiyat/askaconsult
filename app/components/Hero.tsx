'use client';

import { motion } from 'framer-motion';
import Earth from './Earth';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Particle Background */}
      <Earth />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,10,10,0.8)_70%)] z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-white/50 rounded-full" />
            <span className="font-[family-name:var(--font-share-tech-mono)] text-white/50 text-xs tracking-wide">
              Canada-Based IT Consulting
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-[family-name:var(--font-orbitron)] text-white mb-6">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
              Intelligence
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white/30 mt-2">
              at Scale
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-[family-name:var(--font-share-tech-mono)] text-white/40 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed px-4">
            Enterprise technology solutions that transform businesses.
            Strategic IT planning, cloud infrastructure, and security.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center px-4">
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#0a0a0a] font-[family-name:var(--font-orbitron)] text-sm uppercase tracking-wider hover:bg-white/90 transition-all rounded-sm"
            >
              Explore Solutions
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 border border-white/20 text-white/60 font-[family-name:var(--font-orbitron)] text-sm uppercase tracking-wider hover:bg-white/5 hover:text-white hover:border-white/30 transition-all rounded-sm"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-16 md:mt-20 pt-10 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
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
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-0.5 h-1.5 bg-white/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
