export default function MissionStatement() {
  const stats = [
    {
      number: "$2.5B+",
      label: "Assets Under Management"
    },
    {
      number: "850+",
      label: "Successful Transactions"
    },
    {
      number: "25%",
      label: "Average Annual Returns"
    }
  ];

  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light mb-6 tracking-tight text-gray-900">
          Our Mission
        </h2>
        
        <p className="text-lg text-gray-600 leading-relaxed mb-12">
          At Volition Properties, we exist to empower our clients to grow sustainable wealth through strategic real estate investments. Our structured, high-end approach combines deep market expertise with personalized service, ensuring every investment decision is informed, strategic, and aligned with your long-term financial goals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl font-light text-[var(--color-accent)] mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}