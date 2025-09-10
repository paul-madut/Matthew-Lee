import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: "About Us - Volition Properties",
  description: "Learn about Volition Properties' mission, values, and leadership team. Building wealth through strategic real estate investments with integrity and expertise.",
};

export default function About() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Integrity",
      description: "We operate with complete transparency, ensuring our clients have full visibility into every aspect of their investments."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      title: "Expertise",
      description: "Our team brings deep market knowledge and proven track records in real estate investment and wealth management."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Partnership",
      description: "We view every client relationship as a long-term partnership, aligning our success with theirs."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "We leverage cutting-edge technology and data analytics to identify the most promising investment opportunities."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      title: "Founder & CEO",
      bio: "15+ years in real estate investment and private equity. Former VP at Goldman Sachs Real Estate.",
      initials: "SC"
    },
    {
      name: "Michael Rodriguez",
      title: "Chief Investment Officer",
      bio: "20+ years in institutional real estate. Former Managing Director at Blackstone Real Estate.",
      initials: "MR"
    },
    {
      name: "Jennifer Walsh",
      title: "Head of Client Relations",
      bio: "12+ years in wealth management and client advisory. Former Director at Morgan Stanley.",
      initials: "JW"
    },
    {
      name: "David Kim",
      title: "Head of Research & Analytics",
      bio: "PhD in Economics, 10+ years in real estate research and market analysis at CBRE.",
      initials: "DK"
    }
  ];

  const awards = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443a55.381 55.381 0 015.25 2.882V15" />
        </svg>
      ),
      title: "Best Real Estate Advisory Firm 2023",
      organization: "Real Estate Investment Association"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5C5.25 5.671 4.328 6.75 3 6.75H2.25A2.25 2.25 0 010 4.5v-1.875c0-.621.504-1.125 1.125-1.125H1.5c.621 0 1.125.504 1.125 1.125v1.875c0 .621.504 1.125 1.125 1.125m5.25-3c-.621 0-1.125-.504-1.125-1.125v-1.875c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v1.875c0 .621-.504 1.125-1.125 1.125H6.75z" />
        </svg>
      ),
      title: "Top 50 Wealth Management Firms",
      organization: "Financial Planning Magazine"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
      title: "Excellence in Client Service Award",
      organization: "Investment Advisor Association"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
      title: "Certified Fiduciary Firm",
      organization: "National Association of Fiduciaries"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl font-light mb-6 tracking-tight">
              About Volition Properties
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Building wealth through strategic real estate investments with integrity, expertise, and unwavering commitment to our clients' success.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-light mb-6 tracking-tight text-gray-900">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2018, Volition Properties emerged from a simple belief: real estate investment should be accessible, strategic, and profitable for every investor, regardless of experience level.
                  </p>
                  <p>
                    Our founders, seasoned professionals with decades of combined experience in real estate, finance, and investment management, recognized a gap in the market for truly personalized real estate advisory services.
                  </p>
                  <p>
                    Today, we've grown into a trusted partner for over 500 clients, managing more than $2.5 billion in real estate assets across premium markets nationwide.
                  </p>
                </div>
              </div>
              <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center text-gray-500 font-medium">
                Our Office
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-light text-center mb-12 tracking-tight text-gray-900">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-2xl text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-light text-center mb-12 tracking-tight text-gray-900">
              Our Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-gray-900">{member.name}</h3>
                  <span className="block text-[var(--color-accent)] font-medium mb-4">{member.title}</span>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center gap-3 mt-4">
                    <a href="#" className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-200">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-light text-center mb-12 tracking-tight text-gray-900">
              Awards & Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-yellow-400 rounded-xl flex items-center justify-center text-[var(--color-primary)] flex-shrink-0">
                    {award.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">{award.title}</h4>
                    <span className="text-gray-600 text-sm">{award.organization}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[var(--color-primary)] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-light mb-4 tracking-tight">Ready to Start Your Investment Journey?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join hundreds of successful investors who trust Volition Properties with their real estate investment strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span>Schedule Consultation</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-xl hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300"
              >
                <span>Learn More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}