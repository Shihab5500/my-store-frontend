"use client";
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiShoppingCart, FiUser, FiLogOut, FiMenu, FiX, FiPlusCircle, FiHome, FiGrid } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const token = Cookies.get('auth_token');
    if (token) setIsLoggedIn(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    Cookies.remove('auth_token');
    setIsLoggedIn(false);
    toast.success('Logged out successfully!');
    router.push('/login');
  };

  
  const isHome = pathname === '/';
  const navClass = isHome && !scrolled && !mobileMenuOpen
    ? 'bg-transparent text-white py-6' 
    : 'bg-white/80 backdrop-blur-md shadow-sm text-gray-900 py-4';

  const logoColor = isHome && !scrolled && !mobileMenuOpen ? 'text-white' : 'text-blue-600';
  const linkColor = isHome && !scrolled && !mobileMenuOpen ? 'text-white/90 hover:text-white' : 'text-gray-600 hover:text-blue-600';

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${navClass}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className={`text-2xl font-extrabold flex items-center gap-2 ${logoColor}`}>
            <FiShoppingCart className="text-3xl" /> <span>MyStore</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            <Link href="/" className={`${linkColor} transition`}>Home</Link>
            <Link href="/items" className={`${linkColor} transition`}>Shop</Link>
            
            {isLoggedIn ? (
              <>
                <Link href="/add-item" className="flex items-center gap-1 text-green-600 hover:text-green-700 font-semibold">
                  <FiPlusCircle /> Add Item
                </Link>
                <button 
                  onClick={handleLogout} 
                  className="flex items-center gap-2 bg-red-50 text-red-600 px-5 py-2 rounded-full hover:bg-red-500 hover:text-white transition border border-red-100"
                >
                  <FiLogOut /> Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-500/30">
                <FiUser /> Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className={`md:hidden text-3xl focus:outline-none ${isHome && !scrolled && !mobileMenuOpen ? 'text-white' : 'text-gray-900'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu (Slide form Right) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Background Overlay (Click to close) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden glass"
            />
            
            {/* Side Drawer */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 p-6 flex flex-col md:hidden"
            >
              <div className="flex justify-between items-center mb-10 border-b pb-4">
                <span className="text-xl font-bold text-blue-600 flex items-center gap-2">
                   <FiShoppingCart /> Menu
                </span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500 text-2xl hover:text-red-500">
                  <FiX />
                </button>
              </div>

              <div className="flex flex-col space-y-4">
                <MobileLink href="/" icon={<FiHome />} label="Home" />
                <MobileLink href="/items" icon={<FiGrid />} label="All Products" />
                
                {isLoggedIn && (
                  <MobileLink href="/add-item" icon={<FiPlusCircle />} label="Add New Item" className="text-green-600 bg-green-50" />
                )}
              </div>

              <div className="mt-auto pt-6 border-t">
                {isLoggedIn ? (
                  <button 
                    onClick={handleLogout} 
                    className="w-full flex items-center justify-center gap-2 bg-red-100 text-red-600 py-3 rounded-xl font-bold hover:bg-red-200 transition"
                  >
                    <FiLogOut /> Logout
                  </button>
                ) : (
                  <Link href="/login" className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg">
                    <FiUser /> Login
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


function MobileLink({ href, icon, label, className = "" }) {
  return (
    <Link 
      href={href} 
      className={`flex items-center gap-4 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition font-medium text-lg ${className}`}
    >
      <span className="text-xl">{icon}</span>
      {label}
    </Link>
  );
}