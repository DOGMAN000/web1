import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, LinkedinIcon, TwitterIcon, InstagramIcon, ChevronDown } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStudentsDropdownOpen, setIsStudentsDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleMobileMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-3 py-2 rounded-lg">
                  Lorem Ipsum
                </div>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link 
                  to="/about" 
                  className={`font-medium transition-colors ${isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  About
                </Link>
                
                <div 
                  className="relative group"
                  onMouseEnter={() => setIsStudentsDropdownOpen(true)}
                  onMouseLeave={() => setIsStudentsDropdownOpen(false)}
                >
                  <button 
                    className={`font-medium transition-colors flex items-center ${isActive('/students') || isActive('/member-application-requirements') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                  >
                    Students
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  
                  {isStudentsDropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 w-64">
                      <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                        <Link 
                          to="/students" 
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          Lorem Ipsum
                        </Link>
                        <Link 
                          to="/member-application-requirements" 
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          Lorem Ipsum Dolor
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                
                <Link 
                  to="/programs" 
                  className={`font-medium transition-colors ${isActive('/programs') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  Programs
                </Link>
                <Link 
                  to="/events" 
                  className={`font-medium transition-colors ${isActive('/events') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  Events
                </Link>
                <Link 
                  to="/news" 
                  className={`font-medium transition-colors ${isActive('/news') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  News
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Lorem Ipsum
                </Link>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={handleMobileMenuClick}
              >
                About
              </Link>
              <Link 
                to="/students" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={handleMobileMenuClick}
              >
                Students
              </Link>
              <Link 
                to="/member-application-requirements" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={handleMobileMenuClick}
              >
                Lorem Ipsum
              </Link>
              <Link 
                to="/programs" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={handleMobileMenuClick}
              >
                Programs
              </Link>
              <Link 
                to="/events" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={handleMobileMenuClick}
              >
                Events
              </Link>
              <Link 
                to="/news" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={handleMobileMenuClick}
              >
                News
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 bg-blue-600 text-white rounded-lg mx-3"
                onClick={handleMobileMenuClick}
              >
                Lorem Ipsum
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="inline-block mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-3 py-2 rounded-lg">
                  Lorem Ipsum
                </div>
              </Link>
              <p className="text-gray-300 mb-6 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <LinkedinIcon size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <TwitterIcon size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <InstagramIcon size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Lorem Ipsum</h3>
              <ul className="space-y-2">
                <li><Link to="/programs" className="text-gray-300 hover:text-white transition-colors">Lorem Ipsum</Link></li>
                <li><Link to="/programs" className="text-gray-300 hover:text-white transition-colors">Dolor Sit</Link></li>
                <li><Link to="/programs" className="text-gray-300 hover:text-white transition-colors">Amet Consectetur</Link></li>
                <li><Link to="/programs" className="text-gray-300 hover:text-white transition-colors">Adipiscing Elit</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Lorem Ipsum</h3>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Lorem Ipsum</Link></li>
                <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">Dolor Sit</Link></li>
                <li><Link to="/news" className="text-gray-300 hover:text-white transition-colors">Amet</Link></li>
                <li><Link to="/students" className="text-gray-300 hover:text-white transition-colors">Consectetur</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Lorem Ipsum. Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;