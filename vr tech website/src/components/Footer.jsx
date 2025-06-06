import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/Assets';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-blue-500/30">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="font-bold -mt-4 text-2xl text-blue-400 flex items-center gap-2 mb-4">
              <img className='w-20' src={assets.logo} alt="" />
            </Link>
            <p className="text-slate-400 mb-6">
              Advanced air conditioning solutions with cutting-edge technology for maximum comfort and efficiency.
            </p>
            <div className='flex gap-4'>
              <div >
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-blue-500/50"
                >
                  <FaInstagram />
                </a>
              
            </div>
            <div>
            
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-blue-500/50"
                >
                  <FaFacebook />
                </a>
              
            </div>
          </div>
            </div>
            

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Services</h3>
            <ul className="space-y-3">
              {['Installation', 'Maintenance', 'Repair', 'Consultation'].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 text-blue-400">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-slate-400">Saraswathi street,Pari Nagar,Chennai</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 mr-3 text-blue-400">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-slate-400">+91 9790811296</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 mr-3 text-blue-400">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-slate-400">Vrhvactech@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Vr tech havc Solutions. All rights reserved <span>* Terms & conditions</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;