import React from 'react';
import { Target } from 'lucide-react';
// import { useNavigate } from "react-router-dom";
import Features  from '../pages/Features';
import HowItWorks from '../pages/HowItWorks';
import Pricing from '../pages/Pricing';
import { Link } from "react-router-dom";




const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
           
            <p className="text-gray-400 text-sm">
              Conduct 100% cheat-proof technical interviews with triple-layer monitoring.
            </p>
          </div>

          {/* Product */}
         <div>
  <h3 className="font-semibold mb-4">Product</h3>

  <ul className="space-y-4 text-sm text-gray-400">
    <li>
      <Link to="/features" className="hover:text-white transition">
        Features
      </Link>
    </li>

    <li>
      <Link to="/pricing" className="hover:text-white transition">
        Pricing
      </Link>
    </li>

    <li>
      <Link to="/how-it-works" className="hover:text-white transition">
        How It Works
      </Link>
    </li>
  </ul>
</div>


          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#careers" className="hover:text-white transition">Careers</a></li>
              <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#privacy" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#security" className="hover:text-white transition">Security</a></li>
              <li><a href="#compliance" className="hover:text-white transition">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025 Interview Pro. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#twitter" className="text-gray-400 hover:text-white transition">Twitter</a>
            <a href="#linkedin" className="text-gray-400 hover:text-white transition">LinkedIn</a>
            <a href="#github" className="text-gray-400 hover:text-white transition">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;