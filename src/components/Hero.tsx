import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 pt-16">
      <div className="section-container text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-primary bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Bala Shiva Teja Kandimalla
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
            Senior React/Node.js Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            10+ years of experience building scalable web applications with MERN/MEAN stack.
            Passionate about creating exceptional user experiences and clean, maintainable code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-md"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-50 transition shadow-md border border-primary"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
