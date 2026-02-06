import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2020 - Present',
      description: [
        'Led development of enterprise-level web applications using React and Node.js',
        'Architected and implemented microservices architecture serving 1M+ users',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization techniques'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Corp',
      period: '2017 - 2020',
      description: [
        'Developed and maintained multiple client-facing web applications',
        'Implemented RESTful APIs and integrated third-party services',
        'Collaborated with UX/UI designers to create responsive interfaces',
        'Reduced server costs by 30% through efficient database queries and caching strategies'
      ]
    },
    {
      title: 'Software Developer',
      company: 'StartUp Ventures',
      period: '2014 - 2017',
      description: [
        'Built full-stack features for SaaS products using MEAN stack',
        'Participated in agile development processes and sprint planning',
        'Implemented automated testing resulting in 50% reduction in bugs',
        'Contributed to open-source projects and internal tools'
      ]
    }
  ];

  return (
    <section id="experience" className="bg-white">
      <div className="section-container">
        <h2 className="heading-secondary text-center text-gray-800">Work Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <ul className="space-y-2 text-gray-600">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
