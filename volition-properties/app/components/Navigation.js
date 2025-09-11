'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-white/20 shadow-lg' 
          : 'bg-white/90 backdrop-blur-md border-b border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-2">
              <Link href="/" className="text-xl font-semibold text-[var(--color-primary)] hover:opacity-80 transition-opacity">
                <Image src="/logo.webp" alt="Volition Properties" width={220} height={220} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link 
                  href="/" 
                  className="text-gray-900 hover:text-[var(--color-accent)] px-3 py-2 text-base font-medium transition-colors duration-200 relative group"
                >
                  
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-900 hover:text-[var(--color-accent)] px-3 py-2 text-base font-medium transition-colors duration-200 relative group"
                >
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <a 
                  href="#services" 
                  className="text-gray-900 hover:text-[var(--color-accent)] px-3 py-2 text-base font-medium transition-colors duration-200 relative group"
                >
                  Construction Projects
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-200 group-hover:w-full"></span>
                </a>
                <Link 
                  href="/blog" 
                  className="text-gray-900 hover:text-[var(--color-accent)] px-3 py-2 text-base font-medium transition-colors duration-200 relative group"
                >
                  Latest Updates
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-900 hover:text-[var(--color-accent)] px-3 py-2 text-base font-medium transition-colors duration-200 relative group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-[var(--color-accent)] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-accent)] transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/98 backdrop-blur-xl border-t border-gray-200/50 shadow-lg">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="text-gray-900 hover:text-[var(--color-accent)] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Investment Calculator
            </Link>
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="text-gray-900 hover:text-[var(--color-accent)] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              About
            </Link>
            <a
              href="#services"
              onClick={closeMobileMenu}
              className="text-gray-900 hover:text-[var(--color-accent)] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Services
            </a>
            <Link
              href="/blog"
              onClick={closeMobileMenu}
              className="text-gray-900 hover:text-[var(--color-accent)] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Insights
            </Link>
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="text-gray-900 hover:text-[var(--color-accent)] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}
    </>
  );
}