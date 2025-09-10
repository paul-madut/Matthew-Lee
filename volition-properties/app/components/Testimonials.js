'use client';

import { useState, useEffect, useRef } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const testimonials = [
    {
      quote: "Volition Properties helped me build a diversified real estate portfolio that has consistently outperformed market expectations.",
      author: "Sarah Chen",
      title: "Investment Executive",
      result: "Portfolio Growth 32%"
    },
    {
      quote: "Their strategic approach and market insights enabled me to secure my first investment property with confidence.",
      author: "Michael Rodriguez",
      title: "Tech Entrepreneur",
      result: "First Property Secured"
    },
    {
      quote: "Professional, insightful, and results-driven. My real estate investments have become a cornerstone of my wealth strategy.",
      author: "Jennifer Walsh",
      title: "Private Equity Partner",
      result: "ROI 28% Annually"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoScrolling, testimonials.length]);

  // Handle manual scroll
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = 420; // width + gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
      setIsAutoScrolling(false);
      
      setTimeout(() => setIsAutoScrolling(true), 3000);
    }
  };

  // Auto-scroll to current index
  useEffect(() => {
    if (carouselRef.current && isAutoScrolling) {
      const cardWidth = 420;
      carouselRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, isAutoScrolling]);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-center mb-12 tracking-tight text-gray-900">
          Client Success Stories
        </h2>
        
        {/* Desktop Carousel */}
        <div className="hidden md:block">
          <div 
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-8 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none' }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-96 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-lg italic text-gray-800 leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {testimonial.author.split(' ').map(name => name[0]).join('')}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                        <span className="text-gray-600 text-sm">{testimonial.title}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-[var(--color-secondary)] to-yellow-400 text-[var(--color-primary)] rounded-full text-sm font-semibold uppercase tracking-wide">
                      {testimonial.result}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-base italic text-gray-800 leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full flex items-center justify-center text-white font-semibold text-xs">
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                      <span className="text-gray-600 text-sm">{testimonial.title}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-[var(--color-secondary)] to-yellow-400 text-[var(--color-primary)] rounded-full text-xs font-semibold uppercase tracking-wide">
                    {testimonial.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoScrolling(false);
                setTimeout(() => setIsAutoScrolling(true), 3000);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[var(--color-accent)] scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}