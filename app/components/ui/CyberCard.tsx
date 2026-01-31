'use client';

import { motion } from 'framer-motion';

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function CyberCard({ children, className = '', delay = 0 }: CyberCardProps) {
  return (
    <motion.div
      className={`cyber-card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
