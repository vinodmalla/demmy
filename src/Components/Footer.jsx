import React from 'react';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 md:py-10 md:mt-auto w-full">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Intelli Tek IT Solutions</h2>
          <p className="text-xl text-gray-400">
            Empowering businesses through innovative IT solutions and expert resource staffing across domains.
          </p>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Services</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><Link to="/cyber" className="hover:text-white">Cybersecurity Services</Link></li>
            <li><Link to="/bussiness" className="hover:text-white">Business Intelligence (BI)</Link></li>
            <li><Link to="/.net" className="hover:text-white">.NET Development</Link></li>
            <li><Link to="/salesforce" className="hover:text-white">Salesforce Consulting</Link></li>
            <li><Link to="/java" className="hover:text-white">Java Development</Link></li>
            <li><Link to="/aws" className="hover:text-white">AWS Consulting</Link></li>
            <li><Link to="/ai" className="hover:text-white">AI Consulting</Link></li>
          </ul>
        </div>

        {/* Industries Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Industries We Serve</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><Link to="/insurence" className="hover:text-white">Insurance & Financial Sectors</Link></li>
            <li><Link to="/healthcare" className="hover:text-white">Healthcare</Link></li>
            <li><Link to="/manufature" className="hover:text-white">Manufacturing</Link></li>
            <li><Link to="/automobile" className="hover:text-white">Automobile</Link></li>
            <li><Link to="/ecommerce" className="hover:text-white">Retail & E-Commerce</Link></li>
            <li><Link to="/hospitality" className="hover:text-white">Hospitality</Link></li>
            <li><Link to="/banking" className="hover:text-white">Banking</Link></li>
            <li><Link to="/supply-chain" className="hover:text-white">Supply Chain Management</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="flex items-center text-sm text-gray-300 mb-1">
            <Phone className="h-4 w-4 mr-2" />+1 (727) 641-3777
          </p>
          <p className="flex items-center text-sm text-gray-300 mb-4">
            <Mail className="h-4 w-4 mr-2" />contact@intellitekits.com
          </p>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:contact@intellitekits.com" className="hover:text-green-400 transition">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Intelli Tek IT Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
