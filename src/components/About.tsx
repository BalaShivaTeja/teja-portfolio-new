import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <h2 className="heading-secondary text-center text-gray-800">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 text-gray-600 text-lg">
            <p>
              I'm a passionate Full Stack Developer with over 10 years of experience in building modern web applications.
              My expertise lies in the MERN (MongoDB, Express.js, React, Node.js) and MEAN (MongoDB, Express.js, Angular, Node.js) stacks.
            </p>
            <p>
              Throughout my career, I've worked on diverse projects ranging from enterprise-level applications to
              innovative startups. I pride myself on writing clean, maintainable code and staying up-to-date with the
              latest web technologies and best practices.
            </p>
            <p>
              I'm particularly interested in performance optimization, scalable architecture, and creating intuitive
              user interfaces that delight users. I believe in continuous learning and contributing to the developer community.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">10+</div>
              <div className="text-gray-600 mt-2">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-gray-600 mt-2">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">15+</div>
              <div className="text-gray-600 mt-2">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
