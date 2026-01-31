const coreValues = [
  {
    icon: '01',
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge technology solutions.',
  },
  {
    icon: '02',
    title: 'Integrity',
    description: 'Building trust through transparent practices.',
  },
  {
    icon: '03',
    title: 'Excellence',
    description: 'Delivering exceptional quality in every project.',
  },
  {
    icon: '04',
    title: 'Partnership',
    description: 'Working alongside clients as strategic partners.',
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">About Us</span>
          <h2 className="section-title">Who We Are</h2>
          <p className="section-subtitle">
            Empowering businesses with intelligent technology solutions
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="card border-l-4 border-l-black">
            <div className="flex items-start gap-6">
              <span className="text-black text-5xl font-[family-name:var(--font-orbitron)] hidden sm:block font-light">//</span>
              <div>
                <h3 className="font-[family-name:var(--font-orbitron)] text-2xl text-black mb-4">
                  Our Mission
                </h3>
                <p className="font-[family-name:var(--font-share-tech-mono)] text-gray-600 text-lg leading-relaxed">
                  AskAConsult is a Canada-based IT consulting firm with global reach, dedicated to empowering businesses
                  with intelligent technology solutions. We bridge the gap between complex technology
                  and practical business outcomes, ensuring our clients stay ahead in the digital era.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value) => (
            <div
              key={value.title}
              className="card text-center"
            >
              <span className="number-badge block mb-4">
                {value.icon}
              </span>
              <h4 className="font-[family-name:var(--font-orbitron)] text-lg text-black mb-3">
                {value.title}
              </h4>
              <p className="font-[family-name:var(--font-share-tech-mono)] text-gray-500 text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
