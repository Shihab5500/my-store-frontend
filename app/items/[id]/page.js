

import Link from 'next/link';
import { FiArrowLeft, FiShoppingCart, FiCheck, FiStar } from 'react-icons/fi';
import FadeIn from '@/app/components/FadeIn'; 

// ডাটা ফেচিং ফাংশন
async function getItem(id) {
  try {
    const res = await fetch(`http://127.0.0.1:5000/api/items/${id}`, { cache: 'no-store' });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}

// Related Products ফেচ করার জন্য (ডেমো)
async function getRelatedItems() {
  try {
    const res = await fetch('http://127.0.0.1:5000/api/items', { cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return data.slice(0, 3); 
  } catch (error) {
    return [];
  }
}

export default async function ItemDetails({ params }) {
  const { id } = await params;
  const item = await getItem(id);
  const relatedItems = await getRelatedItems();

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-gray-700">Product Not Found!</h2>
        <Link href="/items" className="text-blue-600 mt-4 hover:underline">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-8">
        <Link href="/items" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition w-fit">
          <FiArrowLeft /> Back to Shop
        </Link>
      </div>

      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Left: Image Section */}
            <div className="relative bg-gray-100 rounded-3xl overflow-hidden h-[400px] md:h-[500px] shadow-inner group">
              <img 
                src={item.image || 'https://placehold.co/600x400'} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col justify-center">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2">New Arrival</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{item.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-extrabold text-gray-900">{item.price}</span>
                <div className="flex text-yellow-400 text-sm">
                  <FiStar fill="currentColor" /><FiStar fill="currentColor" /><FiStar fill="currentColor" /><FiStar fill="currentColor" /><FiStar fill="currentColor" />
                  <span className="text-gray-400 ml-2">(120 Reviews)</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg mb-8 border-t border-b border-gray-100 py-6">
                {item.description} <br/>
                Experience premium quality with our latest collection. Designed for performance and durability.
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-8 text-gray-600">
                <li className="flex items-center gap-2"><FiCheck className="text-green-500" /> Free Shipping available</li>
                <li className="flex items-center gap-2"><FiCheck className="text-green-500" /> 1 Year Official Warranty</li>
                <li className="flex items-center gap-2"><FiCheck className="text-green-500" /> 7 Days Return Policy</li>
              </ul>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/30 flex justify-center items-center gap-2">
                  <FiShoppingCart /> Add to Cart
                </button>
                <button className="px-6 py-4 border-2 border-gray-200 rounded-xl hover:border-red-400 hover:text-red-500 transition">
                   ❤️
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
        
        {/* Related Products Section */}
        <div className="mt-24 border-t border-gray-100 pt-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">You may also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedItems.map((related) => (
              <Link href={`/items/${related.id}`} key={related.id}>
                <div className="bg-gray-50 rounded-xl p-4 hover:bg-white hover:shadow-lg transition cursor-pointer border border-transparent hover:border-gray-100">
                  <div className="h-48 bg-white rounded-lg overflow-hidden mb-4">
                    <img src={related.image} alt={related.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-gray-900">{related.name}</h3>
                  <p className="text-blue-600 font-semibold">{related.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}