'use client';

import { motion } from 'framer-motion';

const advantages = [
  {
    number: '01',
    title: 'Global Reach, Local Expertise',
    description: 'Based in Canada with international presence. We understand both local regulations and global best practices to serve clients worldwide.',
  },
  {
    number: '02',
    title: 'Proven Track Record',
    description: 'Years of successful implementations across diverse industries. Our portfolio speaks to our commitment to excellence.',
  },
  {
    number: '03',
    title: 'Security-First Approach',
    description: 'Every solution we deliver is built with security at its core. We protect your business from evolving cyber threats.',
  },
  {
    number: '04',
    title: '24/7 Support',
    description: 'Round-the-clock monitoring and support ensures your systems run smoothly. We are always online when you need us.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">The AskAConsult Advantage</h2>
          <p className="section-subtitle">
            What sets us apart from the competition
          </p>
        </motion.div>

        {/* Advantages List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.number}
              className="card border-l-4 border-l-black hover:translate-x-2 transition-transform"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="number-badge">
                    {advantage.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-orbitron)] text-xl text-black mb-3">
                    {advantage.title}
                  </h3>
                  <p className="font-[family-name:var(--font-share-tech-mono)] text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { value: '99.9%', label: 'Uptime' },
            { value: '24/7', label: 'Support' },
            { value: '100+', label: 'Projects' },
            { value: '50+', label: 'Clients' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card border border-gray-100"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
