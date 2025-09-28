import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, LinkedinIcon, TwitterIcon, InstagramIcon, ChevronDown } from 'lucide-react';
import Logo from './Logo';
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
              <Link to="/" className="flex-shrink-0" onClick={() => window.scrollTo(0, 0)}>
                <div className="less-crazy-hover-card bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-4 py-2 rounded-lg text-xl">
                  <Logo/>
                </div>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link 
                  onClick={() => window.scrollTo(0, 0)}
                  to="/about" 
                  className={`font-medium transition-colors ${isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  About Us
                </Link>
                
                <Link
                  onClick={() => window.scrollTo(0, 0)} 
                  to="/cohort" 
                  className={`font-medium transition-colors ${isActive('/cohort') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  The Cohort
                </Link>
                
                <Link 
                  onClick={() => window.scrollTo(0, 0)}
                  to="/partners" 
                  className={`font-medium transition-colors ${isActive('/partners') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  Partners
                </Link>
                <Link
                onClick={() => window.scrollTo(0, 0)} 
                  to="/apply" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Join the Cohort
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
                About Us
              </Link>
              <Link 
                to="/cohort" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={handleMobileMenuClick}
              >
                The Cohort
              </Link>
              <Link 
                to="/partners" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={handleMobileMenuClick}
              >
                Partners
              </Link>
              <Link 
                to="/apply" 
                className="block px-3 py-2 bg-blue-600 text-white rounded-lg mx-3"
                onClick={handleMobileMenuClick}
              >
                Join the Cohort
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
              <Link to="/" className="inline-block mb-4" onClick={() => window.scrollTo(0, 0)}>
                <div className="less-crazy-hover-card bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-4 py-2 rounded-lg text-xl">
                  <Logo/>
                </div>
              </Link>
              <p className="text-gray-300 mb-6 max-w-md">
                Empowering community college transfer students in computer science with the community, resources, and opportunities to succeed.
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
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/cohort" className="text-gray-300 hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>The Cohort</Link></li>
                <li><Link to="/apply" className="text-gray-300 hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Apply Now</Link></li>
                <li><Link to="/partners" className="text-gray-300 hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Partners</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>About Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="mailto:hello@cstc.org" className="text-gray-300 hover:text-white transition-colors">hello@cstc.org</a></li>
                <li><a href="mailto:partner@cstc.org" className="text-gray-300 hover:text-white transition-colors">partner@cstc.org</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Slack Community</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 CSTC - Computer Science Transfer Cohort. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;