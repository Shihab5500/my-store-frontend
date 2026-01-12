"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div>
            <Link href="/" className="text-2xl font-extrabold flex items-center gap-2 mb-6 text-white">
              <FiShoppingCart className="text-blue-500 text-3xl" /> MyStore
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your one-stop destination for premium gadgets and accessories. We ensure quality, speed, and reliability in every order.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaLinkedinIn />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-blue-600 inline-block pb-1">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/items" label="Shop Products" />
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/contact" label="Contact Support" />
              <FooterLink href="/terms" label="Terms & Conditions" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-blue-600 inline-block pb-1">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-500 mt-1" />
                <span>123 Tech Street, Dhanmondi,<br/>Dhaka-1209, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-500" />
                <span>+880 1712 345 678</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                <span>support@mystore.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-blue-600 inline-block pb-1">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get the latest updates and offers.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
              />
              <button 
                type="button"
                className="absolute right-2 top-2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} MyStore. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Cookie Policy</Link>
          </div>
        </div>
      </div>

      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition z-40"
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

// --- Small Components ---

function FooterLink({ href, label }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-white hover:translate-x-1 transition-transform duration-300 inline-block">
        {label}
      </Link>
    </li>
  );
}

function SocialIcon({ icon }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition duration-300 transform hover:-translate-y-1">
      {icon}
    </a>
  );
}