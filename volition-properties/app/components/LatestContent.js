import Link from 'next/link';

export default function LatestContent() {
  const articles = [
    {
      category: "Market Analysis",
      title: "2024 Real Estate Investment Outlook: Opportunities in Emerging Markets",
      excerpt: "Exploring the most promising investment opportunities as market conditions evolve...",
      date: "March 15, 2024",
      readTime: "5 min read",
      slug: "2024-real-estate-outlook"
    },
    {
      category: "Investment Strategy",
      title: "Diversification Strategies for High-Net-Worth Real Estate Portfolios",
      excerpt: "How sophisticated investors are building resilient portfolios across asset classes...",
      date: "March 10, 2024",
      readTime: "7 min read",
      slug: "diversification-strategies"
    },
    {
      category: "Market Trends",
      title: "The Rise of Sustainable Real Estate: ESG Investing in Property",
      excerpt: "Environmental and social considerations are reshaping investment decisions...",
      date: "March 5, 2024",
      readTime: "6 min read",
      slug: "sustainable-real-estate"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-light tracking-tight text-gray-900">
            Latest Volition Insights
          </h2>
          <Link 
            href="/blog" 
            className="text-[var(--color-accent)] font-medium hover:text-[var(--color-accent-light)] transition-colors duration-200 group"
          >
            View All Articles
            <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm font-medium group-hover:bg-gradient-to-br group-hover:from-[var(--color-accent)]/80 group-hover:to-[var(--color-accent-light)]/80 group-hover:text-white transition-all duration-300">
                  Article Image
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-[var(--color-accent)] text-white rounded-full text-xs font-semibold uppercase tracking-wide">
                  {article.category}
                </span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3 text-gray-900 line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 text-sm text-gray-500">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}