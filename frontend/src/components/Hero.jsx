import { useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [isVisible] = useState(true); // Start visible for faster LCP
    const whatsappNumber = '916366515258';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Navya!%20I'm%20interested%20in%20your%20bridal%20makeup%20services.`;

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            className={`hero ${isVisible ? 'hero--visible' : ''}`}
            id="hero"
            aria-label="Welcome to Navya Makeup & Hairstyle"
            itemScope
            itemType="https://schema.org/WPHeader"
        >
            {/* Background Elements - decorative, hidden from accessibility */}
            <div className="hero__bg" aria-hidden="true">
                <div className="hero__bg-gradient"></div>
                <div className="hero__bg-pattern"></div>
                <div className="hero__bg-glow hero__bg-glow--1"></div>
                <div className="hero__bg-glow hero__bg-glow--2"></div>
            </div>

            <div className="hero__container container">
                <div className="hero__content">
                    {/* Tagline */}
                    <span className="hero__tagline">
                        <span className="hero__tagline-icon" aria-hidden="true">✨</span>
                        Premium Beauty Services in Bengaluru
                    </span>

                    {/* Main Heading - SEO H1 */}
                    <h1 className="hero__title" itemProp="headline">
                        <span className="hero__title-line">Navyashravs</span>
                        <span className="hero__title-line hero__title-line--gold">makeup & hairstyle</span>
                    </h1>

                    {/* Value Proposition - SEO subtitle */}
                    <p className="hero__subtitle" itemProp="description">
                        Premium Bridal Makeup & Hairstyling for Your Special Moments
                    </p>

                    {/* Supporting Text */}
                    <p className="hero__description">
                        Transform your dream look into reality with our expert makeup artist in Bangalore.
                        From traditional to contemporary bridal styles, we create timeless beauty for your most cherished celebrations.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero__actions">
                        <button
                            className="btn btn-primary hero__btn"
                            onClick={() => scrollToSection('services')}
                            aria-label="View our makeup and hairstyle services"
                        >
                            View Services
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn hero__btn hero__btn--whatsapp"
                            aria-label="Chat with Navya on WhatsApp for bridal makeup booking"
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp Us
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className="hero__trust" role="list" aria-label="Our achievements">
                        <div className="hero__trust-item" role="listitem">
                            <span className="hero__trust-number">100+</span>
                            <span className="hero__trust-label">Happy Brides</span>
                        </div>
                        <div className="hero__trust-divider" aria-hidden="true"></div>
                        <div className="hero__trust-item" role="listitem">
                            <span className="hero__trust-number">4+</span>
                            <span className="hero__trust-label">Years Experience</span>
                        </div>
                        <div className="hero__trust-divider" aria-hidden="true"></div>
                        <div className="hero__trust-item" role="listitem">
                            <span className="hero__trust-number">100%</span>
                            <span className="hero__trust-label">Satisfaction</span>
                        </div>
                    </div>
                </div>

                {/* Navya's Profile Photo */}
                <div className="hero__visual" aria-hidden="true">
                    <div className="hero__visual-card">
                        <img
                            src="/images/navya-profile.jpg"
                            alt="Navya - Professional Makeup Artist in Bangalore"
                            className="hero__visual-image"
                            width="320"
                            height="400"
                            loading="eager"
                            fetchpriority="high"
                            decoding="async"
                        />
                        <div className="hero__visual-glow"></div>
                    </div>
                    <div className="hero__visual-float hero__visual-float--1">💍</div>
                    <div className="hero__visual-float hero__visual-float--2">✨</div>
                    <div className="hero__visual-float hero__visual-float--3">💅</div>
                    <div className="hero__visual-ring hero__visual-ring--1"></div>
                    <div className="hero__visual-ring hero__visual-ring--2"></div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <button
                className="hero__scroll"
                onClick={() => scrollToSection('services')}
                aria-label="Scroll down to view services"
            >
                <span className="hero__scroll-text">Scroll Down</span>
                <div className="hero__scroll-indicator" aria-hidden="true">
                    <span className="hero__scroll-dot"></span>
                </div>
            </button>
        </section>
    );
};

export default Hero;
