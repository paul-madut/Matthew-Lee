'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the minimum investment required to get started?",
      answer: "Our minimum investment varies by strategy and property type, typically starting at $250,000 for individual properties and $500,000 for portfolio investments. We work with each client to find suitable opportunities within their investment range."
    },
    {
      question: "How do you ensure the safety of my investments?",
      answer: "We employ rigorous due diligence processes, comprehensive market analysis, and diversification strategies. All properties undergo thorough financial and structural assessments, and we maintain strong relationships with trusted partners in legal, financial, and construction sectors."
    },
    {
      question: "What types of properties do you typically recommend?",
      answer: "Our recommendations vary based on client goals and market conditions, including luxury residential, commercial real estate, mixed-use developments, and emerging market opportunities. We focus on properties with strong fundamentals and growth potential."
    },
    {
      question: "What is the typical timeline for seeing returns on investment?",
      answer: "Investment timelines vary by strategy. Some investments generate immediate rental income, while others focus on long-term appreciation. We typically recommend a 3-7 year investment horizon for optimal returns, though shorter and longer-term opportunities are available."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-center mb-12 tracking-tight text-gray-900">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-[var(--color-accent)]/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
              >
                <span className="text-lg font-medium text-gray-900 pr-8">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}>
                  <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}