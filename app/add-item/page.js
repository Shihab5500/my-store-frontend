"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiPlus, FiTag, FiDollarSign, FiAlignLeft, FiImage } from 'react-icons/fi';
import toast from 'react-hot-toast';
import FadeIn from '../components/FadeIn'; 

export default function AddItem() {
  const [formData, setFormData] = useState({ name: '', price: '', description: '', image: '' });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      
      const res = await fetch('http://127.0.0.1:5000/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Product Added Successfully!'); 
        router.push('/items'); 
        router.refresh(); 
      } else {
        toast.error('Failed to add product');
      }
    } catch (error) {
      console.error(error);
      toast.error('Server connection failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 flex justify-center items-center">
      <FadeIn className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white text-center">
            <h1 className="text-3xl font-bold flex justify-center items-center gap-2">
              <FiPlus className="bg-white/20 rounded-full p-1" /> Add New Product
            </h1>
            <p className="text-blue-100 mt-2">Fill in the details to add a new item to the store.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
            
            {/* Product Name */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <FiTag className="text-blue-600" /> Product Name
              </label>
              <input 
                type="text" required
                placeholder="e.g. Wireless Headphones"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            {/* Price & Image URL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <FiDollarSign className="text-blue-600" /> Price
                </label>
                <input 
                  type="text" required
                  placeholder="e.g. 2500 BDT"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <FiImage className="text-blue-600" /> Image URL (Optional)
                </label>
                <input 
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <FiAlignLeft className="text-blue-600" /> Description
              </label>
              <textarea 
                rows="4"
                placeholder="Write a short description about the product..."
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/30 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center"
            >
              {loading ? 'Adding Product...' : 'Submit Product'}
            </button>

          </form>
        </div>
      </FadeIn>
    </div>
  );
}