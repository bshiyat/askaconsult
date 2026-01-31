'use client';

import { motion } from 'framer-motion';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'IT Strategy & Planning',
  'Cloud Solutions',
  'Cybersecurity',
  'Managed IT Services',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <span className="font-[family-name:var(--font-orbitron)] text-white text-2xl font-bold tracking-wider">
                ASKACONSULT
              </span>
            </div>
            <p className="font-[family-name:var(--font-share-tech-mono)] text-white/60 text-sm mb-6 leading-relaxed">
              Canada-based IT consulting company with global reach, delivering cutting-edge technology solutions
              for tomorrow&apos;s business.
            </p>
            <div className="space-y-2 text-white/60 text-sm font-[family-name:var(--font-share-tech-mono)]">
              <p>+1 (416) 807 1609</p>
              <p>info@askaconsult.com</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-[family-name:var(--font-orbitron)] text-white text-sm mb-6 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-share-tech-mono)] text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-[family-name:var(--font-orbitron)] text-white text-sm mb-6 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-[family-name:var(--font-share-tech-mono)] text-white/60 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-[family-name:var(--font-orbitron)] text-white text-sm mb-6 uppercase tracking-wider">
              Locations
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-[family-name:var(--font-share-tech-mono)] text-white/80 mb-1">Headquarters</p>
                <p className="font-[family-name:var(--font-share-tech-mono)] text-white/60">Canada</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-share-tech-mono)] text-white/80 mb-1">Regional Office</p>
                <p className="font-[family-name:var(--font-share-tech-mono)] text-white/60">
                  Dubai Internet City<br />
                  Dubai, UAE
                </p>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block px-6 py-3 border border-white text-white font-[family-name:var(--font-orbitron)] text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-all"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-[family-name:var(--font-share-tech-mono)] text-white/40 text-xs">
              {currentYear} AskAConsult. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-xs font-[family-name:var(--font-share-tech-mono)]">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Systems Operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
