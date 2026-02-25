import { useEffect, useRef, useState } from 'react';
import './Location.css';

const Location = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const googleMapsLink = "https://www.google.com/maps/place/Navya+hairstylist+and+Nail+artist/@13.0243797,77.7167323,17z/data=!4m6!3m5!1s0x3bae11000bca9397:0x6594f9129d4fa4dc!8m2!3d13.0243745!4d77.7193072!16s%2Fg%2F11mrmjs5k5";
    const chintamaniMapsLink = "https://www.google.com/maps/place/Navya+hairstylist+and+Nail+artist/@13.4045873,78.0380118,16z/data=!4m6!3m5!1s0x3bb20597ccaa4d0d:0x747243ccfff13d35!8m2!3d13.4048326!4d78.0511654!16s%2Fg%2F11msxdwkdx";

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            className="location section"
            id="location"
            ref={sectionRef}
            aria-labelledby="location-heading"
            itemScope
            itemType="https://schema.org/LocalBusiness"
        >
            <div className="container">
                {/* Section Header */}
                <header className={`section-title ${isVisible ? 'animate-slide-up' : ''}`}>
                    <span className="location__label">Find Us</span>
                    <h2 id="location-heading">Visit Navyashravs Makeup & Hairstyle Studios</h2>
                    <p className="section-subtitle">
                        Visit us at our studios in Bengaluru or Chintamani, or book a home service appointment for bridal makeup
                    </p>
                </header>

                <div className="location__wrapper">
                    {/* Map Container */}
                    <div className={`location__map-container ${isVisible ? 'animate-slide-up' : ''}`}>
                        <div className="location__map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d77.7167323!3d13.0243797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11000bca9397%3A0x6594f9129d4fa4dc!2sNavya%20hairstylist%20and%20Nail%20artist!5e0!3m2!1sen!2sin!4v1706600000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Navya Makeup & Hairstyle Location - Bridal Makeup Artist in Bangalore"
                                aria-label="Google Maps showing Navya Makeup Artist location in Medahalli, Bangalore"
                            ></iframe>

                            {/* Map Overlay for styling */}
                            <div className="location__map-overlay" aria-hidden="true"></div>
                        </div>

                        {/* Open in Google Maps Button */}
                        <a
                            href={googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="location__map-btn"
                            aria-label="Open Navya Makeup Artist location in Google Maps"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            Open in Google Maps
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        </a>
                    </div>

                    {/* Address Info */}
                    <aside className={`location__info ${isVisible ? 'animate-slide-up' : ''}`}>
                        <div className="location__info-card">
                            <div className="location__info-icon" aria-hidden="true">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>

                            <h3 itemProp="name">📍 Main Branch - Bengaluru</h3>

                            <address
                                className="location__address"
                                itemProp="address"
                                itemScope
                                itemType="https://schema.org/PostalAddress"
                            >
                                <span className="location__address-line location__address-line--highlight" itemProp="streetAddress">
                                    CSR Golden Gate, Hosabasavanapura
                                </span>
                                <span className="location__address-line">Medahalli</span>
                                <span className="location__address-line">
                                    <span itemProp="addressLocality">Bengaluru</span>,
                                    <span itemProp="addressRegion"> Karnataka</span>
                                    <span itemProp="postalCode"> 560049</span>
                                </span>
                                <meta itemProp="addressCountry" content="IN" />
                            </address>

                            <div className="location__divider" aria-hidden="true"></div>

                            {/* Contact Quick Links */}
                            <nav className="location__quick-contact" aria-label="Quick contact options">
                                <a
                                    href="tel:+916366515258"
                                    className="location__quick-item"
                                    aria-label="Call Navya Makeup Artist at +91 63665 15258"
                                    itemProp="telephone"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <span>+91 63665 15258</span>
                                </a>
                                <a
                                    href="https://wa.me/916366515258"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="location__quick-item location__quick-item--whatsapp"
                                    aria-label="Chat with Navya on WhatsApp for bridal makeup booking"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    <span>WhatsApp</span>
                                </a>
                            </nav>

                            {/* Service Area */}
                            <div className="location__service-area">
                                <h4>Service Areas in Bangalore</h4>
                                <p itemProp="areaServed">
                                    We provide bridal makeup and hairstyling services across Bengaluru including Whitefield,
                                    Marathahalli, KR Puram, Medahalli, and surrounding areas. Home visits available on request.
                                </p>
                            </div>

                            {/* Hidden SEO data */}
                            <meta itemProp="image" content="https://navyamakeup.com/logo.jpg" />
                            <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates" style={{ display: 'none' }}>
                                <meta itemProp="latitude" content="13.0243745" />
                                <meta itemProp="longitude" content="77.7193072" />
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Sub Branch - Chintamani */}
                <div className="location__branch-divider">
                    <span className="location__branch-divider-text">Sub Branch</span>
                </div>

                <div className={`location__wrapper ${isVisible ? 'animate-slide-up' : ''}`}>
                    {/* Chintamani Map */}
                    <div className={`location__map-container ${isVisible ? 'animate-slide-up' : ''}`}>
                        <div className="location__map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.5!2d78.0511654!3d13.4048326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb20597ccaa4d0d%3A0x747243ccfff13d35!2sNavya%20hairstylist%20and%20Nail%20artist!5e0!3m2!1sen!2sin!4v1706600000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Navyashravs Makeup & Hairstyle - Chintamani Branch"
                                aria-label="Google Maps showing Navyashravs sub branch in Chintamani"
                            ></iframe>
                            <div className="location__map-overlay" aria-hidden="true"></div>
                        </div>

                        <a
                            href={chintamaniMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="location__map-btn"
                            aria-label="Open Chintamani branch location in Google Maps"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            Open in Google Maps
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        </a>
                    </div>

                    {/* Chintamani Address Info */}
                    <aside className={`location__info ${isVisible ? 'animate-slide-up' : ''}`}>
                        <div className="location__info-card">
                            <div className="location__info-icon" aria-hidden="true">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>

                            <h3>📍 Sub Branch - Chintamani</h3>

                            <address
                                className="location__address"
                                itemProp="address"
                                itemScope
                                itemType="https://schema.org/PostalAddress"
                            >
                                <span className="location__address-line location__address-line--highlight" itemProp="streetAddress">
                                    N,N, T Road, Opp. Abgund
                                </span>
                                <span className="location__address-line">KGN Colony</span>
                                <span className="location__address-line">
                                    <span itemProp="addressLocality">Chintamani</span>,
                                    <span itemProp="addressRegion"> Karnataka</span>
                                    <span itemProp="postalCode"> 563125</span>
                                </span>
                                <meta itemProp="addressCountry" content="IN" />
                            </address>

                            <div className="location__divider" aria-hidden="true"></div>

                            {/* Contact Quick Links */}
                            <nav className="location__quick-contact" aria-label="Quick contact options for Chintamani branch">
                                <a
                                    href="tel:+916366515258"
                                    className="location__quick-item"
                                    aria-label="Call Navyashravs at +91 63665 15258"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <span>+91 63665 15258</span>
                                </a>
                                <a
                                    href="https://wa.me/916366515258"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="location__quick-item location__quick-item--whatsapp"
                                    aria-label="Chat on WhatsApp for Chintamani branch booking"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    <span>WhatsApp</span>
                                </a>
                            </nav>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Location;
