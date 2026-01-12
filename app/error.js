'use client'; 
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-6">We apologize for the inconvenience.</p>
      <button
        onClick={() => reset()} 
        className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}