import { lazy, Suspense, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

// Lazy load below-the-fold components for faster initial load
const Services = lazy(() => import('./components/Services'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Location = lazy(() => import('./components/Location'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));

// Minimal loading fallback
const SectionLoader = () => (
  <div style={{ minHeight: '200px', background: 'transparent' }} />
);

// Simple hash-based routing
const useHashRoute = () => {
  const [route, setRoute] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#home');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return route;
};

function App() {
  const route = useHashRoute();

  // Render legal pages
  if (route === '#privacy-policy') {
    return (
      <Suspense fallback={<SectionLoader />}>
        <PrivacyPolicy />
      </Suspense>
    );
  }

  if (route === '#terms-of-service') {
    return (
      <Suspense fallback={<SectionLoader />}>
        <TermsOfService />
      </Suspense>
    );
  }

  // Default: render main page
  return (
    <div className="app">
      {/* Skip Link for Accessibility - SEO friendly */}
      <a href="#services" className="skip-link">
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Services />
          <Testimonials />
          <Location />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
