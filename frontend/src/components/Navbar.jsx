import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const whatsappNumber = '916366515258';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Navya!%20I'm%20interested%20in%20booking%20a%20makeup%20appointment.`;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    const handleKeyDown = (e, sectionId) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToSection(sectionId);
        }
    };

    return (
        <>
            <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} role="banner">
                <nav className="navbar__container container" aria-label="Main navigation">
                    {/* Logo */}
                    <a
                        href="#hero"
                        className="navbar__logo"
                        onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
                        aria-label="Navya Makeup & Hairstyle - Home"
                        itemScope
                        itemType="https://schema.org/Organization"
                    >
                        <span className="navbar__logo-text" itemProp="name">Navya</span>
                        <span className="navbar__logo-tagline">Makeup & Hairstyle</span>
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="navbar__menu" role="menubar" aria-label="Main menu">
                        <li role="none">
                            <a
                                href="#hero"
                                className="navbar__link"
                                role="menuitem"
                                onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
                                onKeyDown={(e) => handleKeyDown(e, 'hero')}
                            >
                                Home
                            </a>
                        </li>
                        <li role="none">
                            <a
                                href="#services"
                                className="navbar__link"
                                role="menuitem"
                                onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                                onKeyDown={(e) => handleKeyDown(e, 'services')}
                            >
                                Services
                            </a>
                        </li>
                        <li role="none">
                            <a
                                href="#testimonials"
                                className="navbar__link"
                                role="menuitem"
                                onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
                                onKeyDown={(e) => handleKeyDown(e, 'testimonials')}
                            >
                                Reviews
                            </a>
                        </li>
                        <li role="none">
                            <a
                                href="#location"
                                className="navbar__link"
                                role="menuitem"
                                onClick={(e) => { e.preventDefault(); scrollToSection('location'); }}
                                onKeyDown={(e) => handleKeyDown(e, 'location')}
                            >
                                Location
                            </a>
                        </li>
                        <li role="none">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="navbar__whatsapp"
                                role="menuitem"
                                aria-label="Chat with Navya on WhatsApp"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                        </li>
                        <li role="none">
                            <a
                                href="#contact"
                                className="navbar__cta btn btn-primary"
                                role="menuitem"
                                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                                onKeyDown={(e) => handleKeyDown(e, 'contact')}
                                aria-label="Book your makeup appointment now"
                            >
                                Book Now
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className={`navbar__toggle ${isOpen ? 'navbar__toggle--active' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    >
                        <span className="navbar__toggle-line" aria-hidden="true"></span>
                        <span className="navbar__toggle-line" aria-hidden="true"></span>
                        <span className="navbar__toggle-line" aria-hidden="true"></span>
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div
                    id="mobile-menu"
                    className={`navbar__mobile ${isOpen ? 'navbar__mobile--open' : ''}`}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile navigation menu"
                >
                    <ul className="navbar__mobile-menu" role="menu">
                        <li role="none">
                            <a
                                href="#hero"
                                className="navbar__mobile-link"
                                role="menuitem"
                                onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
                            >
                                Home
                            </a>
                        </li>
                        <li role="none">
                            <a
                                href="#services"
                                className="navbar__mobile-link"
                                role="menuitem"
                                onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                            >
                                Services
                            </a>
                        </li>
                        <li role="none">
                            <a
                                href="#testimonials"
                                className="navbar__mobile-link"
                                role="menuitem"
                                onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
                            >
                                Reviews
                            </a>
                        </li>
                        <li role="none">
                            <a
                                href="#location"
                                className="navbar__mobile-link"
                                role="menuitem"
                                onClick={(e) => { e.preventDefault(); scrollToSection('location'); }}
                            >
                                Location
                            </a>
                        </li>
                        <li role="none">
                            <a
                                href="#contact"
                                className="navbar__mobile-link navbar__mobile-link--cta"
                                role="menuitem"
                                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                            >
                                Book Now
                            </a>
                        </li>
                        <li role="none">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="navbar__mobile-whatsapp"
                                role="menuitem"
                                aria-label="Chat with Navya on WhatsApp for makeup booking"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Chat on WhatsApp
                            </a>
                        </li>
                    </ul>
                </div>
            </header>

            {/* Floating WhatsApp Button */}
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
                aria-label="Book bridal makeup on WhatsApp - Navya Makeup Artist Bangalore"
            >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="whatsapp-float__text">Book Now</span>
            </a>
        </>
    );
};

export default Navbar;
