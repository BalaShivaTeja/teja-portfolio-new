import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Tailwind CSS'],
      highlights: [
        'Real-time inventory tracking',
        'Secure payment processing',
        'Mobile-responsive design',
        'Admin analytics dashboard'
      ]
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Socket.io', 'JWT', 'Material-UI'],
      highlights: [
        'Real-time collaboration',
        'Drag-and-drop interface',
        'Role-based access control',
        'Email notifications'
      ]
    },
    {
      title: 'Social Media Analytics Dashboard',
      description: 'Analytics dashboard for tracking social media metrics across multiple platforms with data visualization.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Chart.js', 'RxJS', 'Bootstrap'],
      highlights: [
        'Multi-platform integration',
        'Interactive data visualizations',
        'Scheduled report generation',
        'Custom metrics tracking'
      ]
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Scalable chat application supporting group chats, file sharing, and video calls.',
      technologies: ['React', 'Node.js', 'Socket.io', 'WebRTC', 'Redis', 'AWS S3'],
      highlights: [
        'End-to-end encryption',
        'Video/audio calling',
        'File sharing capabilities',
        'Message search and history'
      ]
    }
  ];

  return (
    <section id="projects" className="bg-gray-50">
      <div className="section-container">
        <h2 className="heading-secondary text-center text-gray-800">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="card h-full flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Key Highlights:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium"
                  >
                    {tech}
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

export default Projects;
