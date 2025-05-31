import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/Authcontext';

const Footer = () => {
  const { authState } = useContext(AuthContext);
  const [setIsOpen] = useState(false);

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 md:px-0 max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">
          
          {/* About Section */}
          <div className="md:w-1/3">
            <h2 className="text-xl font-semibold mb-4 text-white">About SocialSnap</h2>
            <p className="text-gray-400 leading-relaxed">
              SocialSnap is a platform to share your thoughts, moments, and connect with friends. Built with React and Node.js.
            </p>
          </div>

          {/* Links Section */}
          <nav aria-label="Footer Navigation" className="md:w-1/3 flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="font-semibold mb-3 text-white">Quick Links</h3>
              <ul className="space-y-2">
                {authState.status && (
                  <>
                    <li>
                      <Link
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium md:mx-2"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/createpost"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium md:mx-2"
                      >
                        Create Post
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/profile"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium md:mx-2"
                      >
                        Profile
                      </Link>
                    </li>
                  </>
                )}
                {!authState.status && (
                  <li>
                    <Link
                      to="/login"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <div className="mt-6 md:mt-0">
              <h3 className="font-semibold mb-3 text-white">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:support@socialsnap.com"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Contact Section */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-4 text-white">Get in Touch</h3>
            <address className="not-italic text-gray-400">
              <p>123 SocialSnap St.</p>
              <p>Jakarta, Indonesia</p>
              <p>Email: <a href="mailto:info@socialsnap.com" className="hover:text-white">jerynana76@gmail.com</a></p>
              <p>Phone: <a href="tel:+62123456789" className="hover:text-white">+1 (415) 523-8886</a></p>
            </address>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SocialSnap. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
