'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const industries = [
  'Healthcare',
  'Finance',
  'Retail',
  'Manufacturing',
  'Technology',
  'Government',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', industry: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section section-gray">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to transform your business? Let&apos;s start a conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card h-full bg-white">
              <h3 className="font-[family-name:var(--font-orbitron)] text-2xl text-black mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-gray-200 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-orbitron)] text-black text-sm mb-1">
                      Phone
                    </h4>
                    <p className="font-[family-name:var(--font-share-tech-mono)] text-gray-600">
                      +1 (416) 807 1609
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-gray-200 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-orbitron)] text-black text-sm mb-1">
                      Email
                    </h4>
                    <p className="font-[family-name:var(--font-share-tech-mono)] text-gray-600">
                      info@askaconsult.com
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-gray-200 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-orbitron)] text-black text-sm mb-1">
                      Location
                    </h4>
                    <p className="font-[family-name:var(--font-share-tech-mono)] text-gray-600">
                      Al Sufouh - Dubai Internet City<br />
                      Dubai, United Arab Emirates
                    </p>
                    <p className="font-[family-name:var(--font-share-tech-mono)] text-gray-400 text-sm mt-1">
                      Headquartered in Canada
                    </p>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <h4 className="font-[family-name:var(--font-orbitron)] text-black text-sm mb-4">
                  What to Expect
                </h4>
                <ul className="space-y-3">
                  {[
                    'Free initial consultation',
                    'Detailed project assessment',
                    'Custom solution proposal',
                    'Transparent pricing',
                  ].map((item) => (
                    <li
                      key={item}
                      className="font-[family-name:var(--font-share-tech-mono)] text-gray-500 text-sm flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-black rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="card bg-white border-2 border-black">
              <h3 className="font-[family-name:var(--font-orbitron)] text-2xl text-black mb-6">
                Send Message
              </h3>

              {isSubmitted && (
                <motion.div
                  className="mb-6 p-4 border border-black bg-gray-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="font-[family-name:var(--font-share-tech-mono)] text-black">
                    Message sent successfully! We&apos;ll get back to you soon.
                  </p>
                </motion.div>
              )}

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-[family-name:var(--font-orbitron)] text-black text-sm mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-[family-name:var(--font-orbitron)] text-black text-sm mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block font-[family-name:var(--font-orbitron)] text-black text-sm mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="industry"
                    className="block font-[family-name:var(--font-orbitron)] text-black text-sm mb-2"
                  >
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="form-input form-select"
                  >
                    <option value="">Select industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry.toLowerCase()}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-[family-name:var(--font-orbitron)] text-black text-sm mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-input form-textarea"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
