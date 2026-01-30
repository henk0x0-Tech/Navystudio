import { useEffect, useRef, useState } from 'react';
import './Services.css';

const services = [
    {
        id: 1,
        name: "Bridal Makeup Package",
        price: "₹15,000",
        description: "Complete bridal transformation with premium products for your special day",
        image: "/images/bridal-makeup.jpg",
        alt: "Bridal makeup by Navya - Professional wedding makeup artist in Bangalore",
        featured: true
    },
    {
        id: 2,
        name: "Party Makeup",
        price: "₹4,000",
        description: "Glamorous looks for special occasions and celebrations",
        image: "/images/party-makeup.jpg",
        alt: "Party makeup services in Bangalore by Navya Makeup Artist",
        featured: false
    },
    {
        id: 3,
        name: "Non-Bridal Makeup",
        price: "₹3,500",
        description: "Professional makeup for any event or occasion",
        image: "/images/non-bridal-makeup.jpg",
        alt: "Non-bridal professional makeup by Navya in Bengaluru",
        featured: false
    },
    {
        id: 4,
        name: "Pre-Wedding Shoot Makeup",
        price: "₹3,500",
        description: "Picture-perfect looks for your pre-wedding photos",
        image: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Pre-wedding shoot makeup services by Navya Makeup Artist Bangalore",
        featured: false
    },
    {
        id: 5,
        name: "Mehendi for Brides",
        price: "₹2,000",
        description: "Traditional and modern mehendi designs",
        image: "/images/mehendi.jpg",
        alt: "Bridal mehendi henna designs by Navya in Bangalore",
        featured: false
    },
    {
        id: 6,
        name: "Hairstyle",
        price: "From ₹1,500",
        description: "Trendy and elegant hairstyling for all occasions",
        image: "/images/hairstyle.jpg",
        alt: "Professional hairstylist in Bangalore - Navya Hairstyle services",
        featured: false
    },
    {
        id: 7,
        name: "Nail Art",
        price: "From ₹700",
        description: "Beautiful nail designs and art to complete your look",
        image: "/images/nail-art.jpg",
        alt: "Nail art and nail design services by Navya in Bengaluru",
        featured: false
    },
    {
        id: 8,
        name: "Saree Pre-Pleating & Box Folding",
        price: "₹500",
        description: "Expert saree draping and folding services",
        image: "/images/saree.jpg",
        alt: "Saree draping and pre-pleating service in Bangalore",
        featured: false
    }
];

const Services = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [imageErrors, setImageErrors] = useState({});
    const whatsappNumber = '916366515258';

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

    const handleServiceClick = (serviceName, servicePrice) => {
        const message = encodeURIComponent(
            `Hi Navya! I'm interested in booking:\n\n*Service:* ${serviceName}\n*Price:* ${servicePrice}\n\nPlease let me know the available dates and any other details.`
        );
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappLink, '_blank');
    };

    const handleImageError = (serviceId) => {
        setImageErrors(prev => ({ ...prev, [serviceId]: true }));
    };

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            className="services section"
            id="services"
            ref={sectionRef}
            aria-labelledby="services-heading"
            itemScope
            itemType="https://schema.org/ItemList"
        >
            <div className="container">
                {/* Section Header */}
                <header className={`section-title ${isVisible ? 'animate-slide-up' : ''}`}>
                    <span className="services__label">What We Offer</span>
                    <h2 id="services-heading" itemProp="name">Our Premium Makeup & Hairstyle Services in Bangalore</h2>
                    <p className="section-subtitle" itemProp="description">
                        Experience the art of beauty with our carefully curated bridal makeup and hairstyling services designed to make you look extraordinary
                    </p>
                </header>

                {/* Services Grid */}
                <div className="services__grid" role="list">
                    {services.map((service, index) => (
                        <article
                            key={service.id}
                            className={`services__card ${service.featured ? 'services__card--featured' : ''} ${isVisible ? 'animate-card' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => handleServiceClick(service.name, service.price)}
                            role="listitem"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && handleServiceClick(service.name, service.price)}
                            aria-label={`${service.name} - ${service.price}. Click to book via WhatsApp`}
                            itemScope
                            itemType="https://schema.org/Service"
                        >
                            {service.featured && (
                                <span className="services__badge" aria-label="Most popular service">Most Popular</span>
                            )}

                            {/* Service Image - No icon overlay */}
                            <div className="services__image-wrapper">
                                {!imageErrors[service.id] ? (
                                    <img
                                        src={service.image}
                                        alt={service.alt}
                                        className="services__image"
                                        loading="lazy"
                                        decoding="async"
                                        width="400"
                                        height="300"
                                        onError={() => handleImageError(service.id)}
                                        itemProp="image"
                                    />
                                ) : (
                                    <div className="services__image-fallback" role="img" aria-label={service.alt}>
                                        <span className="services__fallback-text">Image</span>
                                    </div>
                                )}
                            </div>

                            <div className="services__content">
                                <h3 className="services__name" itemProp="name">{service.name}</h3>
                                <p className="services__description" itemProp="description">{service.description}</p>

                                <div className="services__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                                    <span className="services__price-value" itemProp="price">{service.price}</span>
                                    <meta itemProp="priceCurrency" content="INR" />
                                </div>

                                <div className="services__book-btn" role="button" aria-label={`Book ${service.name} via WhatsApp`}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Book via WhatsApp
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Call to Action */}
                <div className={`services__cta ${isVisible ? 'animate-slide-up' : ''}`}>
                    <p>Can't find what you're looking for?</p>
                    <button
                        className="btn btn-secondary"
                        onClick={scrollToContact}
                        aria-label="Contact us for custom makeup packages"
                    >
                        Contact Us for Custom Packages
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;
