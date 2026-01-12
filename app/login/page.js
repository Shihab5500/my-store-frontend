"use client";
import { useState } from 'react';
import Cookies from 'js-cookie';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  // const router = useRouter(); 

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    
    setTimeout(() => {
      if (email === 'admin@example.com' && password === '123456') {
        
        Cookies.set('auth_token', 'mock-token-xyz', { expires: 1, path: '/' });
        
        
        toast.success('Login Successful!');

        
        window.location.href = '/items'; 

      } else {
        toast.error('Invalid Credentials! Try: admin@example.com / 123456');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border border-gray-200">
        
        <div className="text-center mb-8">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 text-3xl shadow-sm">
            <FiUser />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500 mt-2">Please login to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2 ml-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiMail className="text-gray-400 text-lg" />
              </div>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-gray-50"
                placeholder="admin@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2 ml-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiLock className="text-gray-400 text-lg" />
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-gray-50"
                placeholder="••••••"
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/30 disabled:opacity-70 flex justify-center items-center"
          >
            {loading ? <span className="animate-pulse">Logging in...</span> : 'Login Now'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Don't have an account? <Link href="#" className="text-blue-600 font-bold hover:underline">Sign up</Link></p>
          <div className="mt-4 p-3 bg-yellow-50 text-yellow-800 rounded-lg text-xs border border-yellow-200">
            <strong>Demo Credentials:</strong><br/>
            Email: admin@example.com<br/>
            Pass: 123456
          </div>
        </div>

      </div>
    </div>
  );
}