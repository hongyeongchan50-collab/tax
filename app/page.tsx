import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import TrustSection from './components/TrustSection';
import ServiceSection from './components/ServiceSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <TrustSection />
        <ServiceSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
