import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-600 dark:text-gray-300 body-font bg-gray-100 dark:bg-gray-900">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {/* ABOUT Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0">
            <h2 className="title-font font-medium text-gray-900 dark:text-white tracking-widest text-sm mb-3">
              ABOUT
            </h2>
            <nav className="list-none">
              <li><Link to="/about" className="hover:text-indigo-500">AboutUS</Link></li>
              <li><Link to="/about" className="hover:text-indigo-500">Team</Link></li>
              <li><Link to="/about" className="hover:text-indigo-500">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-500">Contact</Link></li>
            </nav>
          </div>

          {/* SERVICES Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0">
            <h2 className="title-font font-medium text-gray-900 dark:text-white tracking-widest text-sm mb-3">
              SERVICES
            </h2>
            <nav className="list-none">
              <li><Link to="/services" className="hover:text-indigo-500">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-indigo-500">Mobile Apps</Link></li>
              <li><Link to="/services" className="hover:text-indigo-500">AI Solutions</Link></li>
              <li><Link to="/services" className="hover:text-indigo-500">Support</Link></li>
            </nav>
          </div>

          {/* RESOURCES Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0">
            <h2 className="title-font font-medium text-gray-900 dark:text-white tracking-widest text-sm mb-3">
              RESOURCES
            </h2>
            <nav className="list-none">
              <li><Link to="/blog" className="hover:text-indigo-500">Blog</Link></li>
              <li><Link to="/docs" className="hover:text-indigo-500">Documentation</Link></li>
              <li><Link to="/faq" className="hover:text-indigo-500">FAQs</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-500">Terms & Privacy</Link></li>
            </nav>
          </div>

          {/* SUBSCRIBE Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 dark:text-white tracking-widest text-sm mb-3">
              SUBSCRIBE
            </h2>
            <form className="flex flex-col sm:flex-row w-full">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base px-4 py-2 mb-4 sm:mb-0 sm:mr-2"
              />
              <button className="bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center sm:text-left">
            © 2025 Inviduka — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
