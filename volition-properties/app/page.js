import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedIn from './components/FeaturedIn';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import LatestContent from './components/LatestContent';
import MissionStatement from './components/MissionStatement';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-0">
        <Hero />
        <FeaturedIn />
        <Testimonials />
        <HowItWorks />
        <Features />
        <LatestContent />
        <MissionStatement />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
