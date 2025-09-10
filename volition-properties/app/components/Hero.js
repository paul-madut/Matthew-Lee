'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/sections/hero/hero.jpg')`
      }}
    >
      {/* Background Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div> */}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-[#014996]/10 backdrop-blur-sm text-[#014996] rounded-full text-sm font-medium border border-[#014996]/20 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="w-2 h-2 bg-[#014996] rounded-full"></div>
              Real Estate
            </div>

            {/* Main Heading */}
            <div className={`space-y-4 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-[#014996]">
                Together, let's
                <br />
                <span className="text-[#014996] font-medium">enhance</span>
                <br />
                your portfolio
              </h1>
            </div>

            {/* Description */}
            <p className={`text-lg text-gray-100 leading-relaxed max-w-lg transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              We guide you step by step for your real estate projects and investments.
            </p>

            {/* CTA Button */}
            <div className={`transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-[#014996] text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:bg-[#1e5fab] transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#014996] focus:ring-offset-2">
                <span>Get Started</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Empty space to maintain layout */}
          <div className="hidden lg:block">
            {/* This div maintains the grid layout but is empty */}
          </div>
        </div>
      </div>
    </section>
  );
}