'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Earth = dynamic(() => import('./Earth'), { ssr: false });

export default function Hero() {
  return (
    <section className="hero-section">
      {/* 3D Earth Background */}
      <Earth />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-[2]" />

      {/* Content */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 bg-white/5 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
          >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="font-[family-name:var(--font-share-tech-mono)] text-white/70 text-sm">
              Canada-Based IT Consulting
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="hero-title">
            Intelligence
            <br />
            <span className="text-white/60">at Scale</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            We deliver cutting-edge technology solutions that transform businesses.
            From strategic IT planning to bulletproof cybersecurity.
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4 }}
          >
            <a href="#services" className="btn btn-white">
              Explore Solutions
            </a>
            <a href="#contact" className="btn btn-secondary border-white/30 text-white hover:bg-white hover:text-black">
              Contact Us
            </a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6 }}
        >
          {[
            { value: '99.9%', label: 'Uptime' },
            { value: '24/7', label: 'Support' },
            { value: '100+', label: 'Projects' },
            { value: '50+', label: 'Clients' },
          ].map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-value stat-value-light">{stat.value}</div>
              <div className="stat-label stat-label-light">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <div className="flex flex-col items-center text-white/40">
          <span className="text-xs tracking-widest mb-2 font-[family-name:var(--font-share-tech-mono)]">SCROLL</span>
          <motion.div
            className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
