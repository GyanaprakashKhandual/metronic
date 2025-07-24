'use client';

import React, { useEffect, useRef } from 'react';
import { 
  BarChart3, 
  Users, 
  FileText, 
  Zap, 
  LogIn
} from 'lucide-react';

const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  
  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      element.style.transform = 'translateY(20px)';
      element.style.opacity = '0';
      element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      
      setTimeout(() => {
        element.style.transform = 'translateY(0)';
        element.style.opacity = '1';
      }, delay);
    }
  }, []);
  
  return <div ref={ref}>{children}</div>;
};

export default function Homepage() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      const element = heroRef.current;
      element.style.transform = 'translateY(30px)';
      element.style.opacity = '0';
      element.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
      
      setTimeout(() => {
        element.style.transform = 'translateY(0)';
        element.style.opacity = '1';
      }, 300);
    }
  }, []);

  return (
    <div className="min-h-screen max-h-screen h-screen bg-gradient-to-br from-green-50 via-white to-sky-100 relative overflow-hidden">
      {/* Beautiful SVG Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Radial Gradient Definitions */}
          <defs>
            <radialGradient id="radial1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgb(240 253 244)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="rgb(186 230 253)" stopOpacity="0.3" />
            </radialGradient>
            <linearGradient id="linear1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(247 254 231)" />
              <stop offset="50%" stopColor="rgb(240 249 255)" />
              <stop offset="100%" stopColor="rgb(186 230 253)" />
            </linearGradient>
            <linearGradient id="linear2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(240 253 244)" />
              <stop offset="100%" stopColor="rgb(219 234 254)" />
            </linearGradient>
          </defs>

          {/* Background Shapes */}
          <circle cx="200" cy="200" r="150" fill="url(#radial1)" />
          <circle cx="800" cy="300" r="200" fill="url(#linear1)" opacity="0.6" />
          <circle cx="600" cy="700" r="180" fill="url(#linear2)" opacity="0.5" />

          {/* Beautiful Path Strokes */}
          <path
            d="M100,500 Q300,300 500,500 T900,500"
            stroke="rgb(34 197 94)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M200,200 Q400,100 600,200 T1000,200"
            stroke="rgb(14 165 233)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M0,700 Q200,600 400,700 T800,700"
            stroke="rgb(132 204 22)"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M300,100 L700,200 Q800,300 700,400 L300,500 Q200,400 300,300 Z"
            stroke="rgb(59 130 246)"
            strokeWidth="1"
            fill="url(#radial1)"
            opacity="0.2"
          />
          <path
            d="M500,600 Q600,500 700,600 Q800,700 700,800 Q600,700 500,800 Q400,700 500,600 Z"
            stroke="rgb(101 163 13)"
            strokeWidth="1.5"
            fill="url(#linear2)"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            {/* Metroniq Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center ">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Metroniq
              </h1>
            </div>
            
            {/* Separator */}
            <div className="w-px h-8 bg-gradient-to-b from-green-300 to-blue-300"></div>
            
            {/* Avidus Interactive */}
            <div className="text-gray-600">
              <span className="text-lg font-bold">Avidus Interactive</span>
            </div>
          </div>

          {/* Login Button */}
          <button className="group bg-gradient-to-r from-green-500 to-blue-500 px-6 py-3 rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2 text-white font-semibold">
            <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            <span>Login</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 px-6 flex items-center justify-center h-full">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={heroRef}>
            {/* Hero Content */}
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-green-200 rounded-full px-6 py-3 mb-8 shadow-sm">
                <BarChart3 className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-700 font-medium">Performance Testing Platform</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-green-500 bg-clip-text text-transparent">
                  Test Results &
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-green-600 to-blue-500 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Comprehensive platform for performance testing results, detailed documentation, 
                and seamless team collaboration.
              </p>
            </div>

            {/* Feature Icons */}
            <AnimatedSection delay={600}>
              <div className="flex items-center justify-center space-x-12">
                <div className="group flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-green-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Performance Tests</span>
                </div>
                
                <div className="group flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Documentation</span>
                </div>
                
                <div className="group flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-lime-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-lime-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Team Collaboration</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
    </div>
  );
}