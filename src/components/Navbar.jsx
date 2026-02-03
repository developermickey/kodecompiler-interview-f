import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-blue-600 rounded flex items-center justify-center">
                <Target className="text-white" size={18} />
              </div>
              <span className="text-xl font-bold text-gray-900">Interview Pro</span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              <Link to="/features" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors">Features</Link>
              <Link to="/pricing" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors">Pricing</Link>
              <Link to="/how-it-works" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors">How It Works</Link>
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-3">
           
            <Link to="/login" className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded 
             hover:bg-blue-700 hover:text-white 
             transition-colors shadow-sm">
              Log in
            </Link>
            
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 space-y-3">
            <Link to="/features" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded">Features</Link>
            <Link to="/pricing" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded">Pricing</Link>
            <Link to="/how-it-works" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded">How It Works</Link>
            <div className="pt-3 border-t border-gray-200 space-y-2">
              <Link to="/login" className="block w-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded text-left">Log in</Link>
              <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700">Try for free</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;