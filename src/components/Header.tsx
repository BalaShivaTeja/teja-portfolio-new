import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">Bala Shiva Teja</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-primary transition">
              Skills
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-primary transition">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-primary transition">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition">
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition">
              Skills
            </button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-primary transition">
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
