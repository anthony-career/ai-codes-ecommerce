"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='container mx-auto px-4 py-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* About Us Section */}
          <div>
            <h3 className='text-lg font-bold mb-3'>About Us</h3>
            <p className='text-sm text-gray-300'>
              We are a leading provider of construction and industrial
              equipment, committed to delivering quality products and
              exceptional service.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className='text-lg font-bold mb-3'>Contact Us</h3>
            <ul className='text-sm space-y-2 text-gray-300'>
              <li>Email: info@constructequip.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Construction Ave, Building City, ST 12345</li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className='text-lg font-bold mb-3'>Follow Us</h3>
            <div className='flex space-x-4'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-white transition-colors'
              >
                <FaFacebook size={20} />
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-white transition-colors'
              >
                <FaTwitter size={20} />
              </a>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-white transition-colors'
              >
                <FaInstagram size={20} />
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-white transition-colors'
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='border-t border-gray-800 mt-6 pt-6 text-center text-sm text-gray-400'>
          <p>
            © {new Date().getFullYear()} ConstructEquip. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
