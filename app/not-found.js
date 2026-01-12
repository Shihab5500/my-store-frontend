import Link from 'next/link';
import { FiAlertCircle } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
      <div className="text-red-500 text-6xl mb-4">
        <FiAlertCircle />
      </div>
      <h2 className="text-4xl font-bold text-gray-800 mb-2">404 - Page Not Found</h2>
      <p className="text-gray-600 mb-8 text-lg">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
}