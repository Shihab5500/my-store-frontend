"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FiSearch, FiFilter } from 'react-icons/fi';
import FadeIn from './FadeIn';

export default function ShopContent({ items }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  
  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = category === 'All' || true; 
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      
      {/* Header & Search Bar */}
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Explore Products</h1>
            <p className="text-gray-500">Find the best gadgets for you</p>
          </div>
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <FiSearch className="absolute left-4 top-3.5 text-gray-400 text-lg" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </FadeIn>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group flex flex-col h-full">
                
                {/* Image Area */}
                <div className="relative overflow-hidden rounded-xl h-64 bg-gray-100 mb-4">
                  <img 
                    src={item.image || 'https://placehold.co/600x400'} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm text-gray-800">
                    In Stock
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4">{item.description}</p>
                </div>

                {/* Footer (Price & Button) */}
                <div className="flex justify-between items-center mt-auto border-t border-gray-50 pt-4">
                  <span className="text-xl font-extrabold text-blue-600">{item.price}</span>
                  <Link href={`/items/${item.id}`}>
                    <button className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition font-medium text-sm">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
             <h3 className="text-xl font-bold text-gray-400">No products found matching "{searchTerm}"</h3>
          </div>
        )}
      </div>
    </div>
  );
}