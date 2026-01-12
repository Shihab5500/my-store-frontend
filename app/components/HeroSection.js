

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiShoppingBag } from "react-icons/fi";

export default function HeroSection() {
  return (
    
    <div className="relative bg-gray-900 text-white overflow-hidden min-h-[700px] flex items-center pt-32 pb-12">
      
      {/* Background Shape Animation */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600 rounded-full blur-[100px] opacity-30"
      />
      
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <span className="text-blue-400 font-bold tracking-wider uppercase mb-6 block">New Arrival</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Next Gen</span> Tech
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg">
            Upgrade your lifestyle with our premium collection of gadgets. Quality meets innovation here.
          </p>
          
          <div className="flex gap-4">
            <Link href="/items">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 px-8 py-4 rounded-full font-bold shadow-lg flex items-center gap-2 hover:bg-blue-700 transition"
              >
                Shop Now <FiArrowRight />
              </motion.button>
            </Link>
            <Link href="/items">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="px-8 py-4 rounded-full font-bold border border-gray-600 flex items-center gap-2 transition"
              >
                View Catalog <FiShoppingBag />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image/Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
           <img 
             src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
             alt="VR Headset" 
             className="rounded-3xl shadow-2xl border-4 border-gray-800 relative z-10 w-full object-cover h-[400px]" 
           />
           <motion.div 
             animate={{ y: [0, -20, 0] }}
             transition={{ duration: 4, repeat: Infinity }}
             className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-xl shadow-xl z-20"
           >
             <p className="font-bold text-lg">50% OFF</p>
             <p className="text-sm text-gray-500">On VR Headsets</p>
           </motion.div>
        </motion.div>
      </div>
    </div>
  );
}