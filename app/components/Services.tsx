'use client';

import { motion } from 'framer-motion';

const services = [
  {
    id: '01',
    title: 'IT Strategy & Planning',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    description: 'Strategic technology roadmaps aligned with your business objectives.',
    features: [
      'Digital Transformation Roadmaps',
      'Technology Assessments',
      'IT Budget Optimization',
      'Vendor Management Strategy',
    ],
    technologies: ['Enterprise Architecture', 'TOGAF', 'Agile', 'DevOps'],
  },
  {
    id: '02',
    title: 'Cloud Solutions',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    description: 'Seamless cloud migration and infrastructure management solutions.',
    features: [
      'Cloud Migration Planning',
      'Infrastructure Design',
      'Multi-Cloud Strategy',
      'Cost Optimization',
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes'],
  },
  {
    id: '03',
    title: 'Cybersecurity',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: 'Comprehensive security solutions to protect your digital assets.',
    features: [
      'Security Audits & Assessments',
      'Compliance Management',
      'Incident Response Planning',
      'Security Training Programs',
    ],
    technologies: ['SOC 2', 'ISO 27001', 'NIST', 'Zero Trust'],
  },
  {
    id: '04',
    title: 'Managed IT Services',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description: '24/7 monitoring, support, and maintenance for your IT infrastructure.',
    features: [
      '24/7 System Monitoring',
      'Help Desk Support',
      'Proactive Maintenance',
      'Performance Optimization',
    ],
    technologies: ['ITIL', 'ServiceNow', 'Monitoring Tools', 'Automation'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section section-gray">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Services</span>
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="card bg-white group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 flex items-center justify-center border border-gray-200 text-gray-400 group-hover:border-black group-hover:text-black transition-all">
                    {service.icon}
                  </div>
                  <div>
                    <span className="font-[family-name:var(--font-orbitron)] text-gray-300 text-sm">
                      {service.id}
                    </span>
                    <h3 className="font-[family-name:var(--font-orbitron)] text-xl text-black">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="font-[family-name:var(--font-share-tech-mono)] text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6 flex-grow">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="font-[family-name:var(--font-share-tech-mono)] text-gray-500 text-sm flex items-center gap-3"
                      >
                        <span className="w-1 h-1 bg-black rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-[family-name:var(--font-share-tech-mono)] text-gray-500 border border-gray-200 bg-gray-50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
