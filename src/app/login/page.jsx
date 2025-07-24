'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';

const LoginPage = () => {
  const router = useRouter();
  const containerRef = useRef(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // ✅ Check if token exists (on initial load)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Optional: verify token with backend here
      router.push('/projects');
    }
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // 👈 ensures cookies are handled
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token); // optional
        router.push('/projects');
      } else {
        setError(data.message || 'Invalid email or password');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dvytvjplt/image/upload/v1753352793/Gemini_Generated_Image_cxdpw8cxdpw8cxdp_bccdm0.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20 p-8"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">Avidus Interactive</h1>
          <p className="text-white/80">Welcome back, please login to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="group relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white/70 group-focus-within:text-white">
              <FiMail className="w-5 h-5" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 rounded-lg border border-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 text-white placeholder-white/50 outline-none transition-all duration-200"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="group relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white/70 group-focus-within:text-white">
              <FiLock className="w-5 h-5" />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 rounded-lg border border-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 text-white placeholder-white/50 outline-none transition-all duration-200"
              placeholder="Password"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/20"
          >
            <span>Login</span>
            <FiArrowRight className="w-5 h-5" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
