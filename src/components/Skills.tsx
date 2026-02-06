import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Angular', 'TypeScript', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Tailwind CSS', 'Redux', 'Next.js']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Microservices', 'WebSockets', 'Authentication/Authorization']
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Database Design', 'Query Optimization']
    },
    {
      title: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack', 'Vite', 'Nginx']
    }
  ];

  return (
    <section id="skills" className="bg-gray-50">
      <div className="section-container">
        <h2 className="heading-secondary text-center text-gray-800">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
