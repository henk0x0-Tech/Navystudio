import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Skip Link for Accessibility - SEO friendly */}
      <a href="#services" className="skip-link">
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <Services />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
