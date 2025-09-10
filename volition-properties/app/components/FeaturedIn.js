export default function FeaturedIn() {
  const publications = [
    'Wall Street Journal',
    'Forbes',
    'Financial Times',
    'Bloomberg',
    'Real Estate Weekly'
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm uppercase tracking-wide font-medium mb-8">
          Trusted by leading publications
        </p>
        
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="px-6 py-4 bg-white rounded-lg text-gray-600 font-medium shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {publication}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}