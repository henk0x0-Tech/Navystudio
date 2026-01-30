import { useState, useEffect, useRef, useCallback } from 'react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Bride",
        location: "Bangalore",
        image: "👰",
        rating: 5,
        quote: "Navya made me feel like a princess on my wedding day! Her bridal makeup was absolutely stunning and lasted the entire ceremony. Highly recommend her services!",
        date: "2024"
    },
    {
        id: 2,
        name: "Ananya Reddy",
        role: "Bride",
        location: "Medahalli",
        image: "👸",
        rating: 5,
        quote: "The best makeup artist in Bangalore! Navya understood exactly what I wanted and created a beautiful traditional bridal look. My photos came out amazing!",
        date: "2024"
    },
    {
        id: 3,
        name: "Sneha Krishnan",
        role: "Engagement",
        location: "Whitefield",
        image: "💃",
        rating: 5,
        quote: "Professional, talented, and so friendly! Navya did my engagement makeup and I received so many compliments. Will definitely book her for my wedding!",
        date: "2024"
    },
    {
        id: 4,
        name: "Divya Nair",
        role: "Party Guest",
        location: "Bangalore",
        image: "🌟",
        rating: 5,
        quote: "Amazing party makeup! Navya is incredibly skilled and made me look gorgeous for my friend's sangeet. The hairstyling was perfect too!",
        date: "2024"
    },
    {
        id: 5,
        name: "Meera Patel",
        role: "Bride",
        location: "Bengaluru",
        image: "💍",
        rating: 5,
        quote: "Navya is a true artist! From makeup to mehendi, everything was flawless. She made my wedding preparations stress-free and I looked beautiful!",
        date: "2024"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const autoPlayRef = useRef(null);

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

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    const goToSlide = useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    // Auto-play
    useEffect(() => {
        autoPlayRef.current = setInterval(nextSlide, 5000);
        return () => clearInterval(autoPlayRef.current);
    }, [nextSlide]);

    // Pause on hover
    const handleMouseEnter = () => {
        clearInterval(autoPlayRef.current);
    };

    const handleMouseLeave = () => {
        autoPlayRef.current = setInterval(nextSlide, 5000);
    };

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span
                key={i}
                className={`testimonials__star ${i < rating ? 'testimonials__star--filled' : ''}`}
                aria-hidden="true"
            >
                ★
            </span>
        ));
    };

    return (
        <section
            className="testimonials section"
            id="testimonials"
            ref={sectionRef}
            aria-labelledby="testimonials-heading"
            itemScope
            itemType="https://schema.org/ItemList"
        >
            <div className="container">
                {/* Section Header */}
                <header className={`section-title ${isVisible ? 'animate-slide-up' : ''}`}>
                    <span className="testimonials__label">Client Reviews</span>
                    <h2 id="testimonials-heading">What Our Brides Say About Navya Makeup Artist</h2>
                    <p className="section-subtitle">
                        Real reviews from happy brides and clients who trusted us with their special day in Bangalore
                    </p>
                </header>

                {/* Testimonials Carousel */}
                <div
                    className={`testimonials__carousel ${isVisible ? 'animate-slide-up' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onKeyDown={handleKeyDown}
                    role="region"
                    aria-label="Customer testimonials carousel"
                    aria-roledescription="carousel"
                >
                    {/* Navigation Arrows */}
                    <button
                        className="testimonials__nav testimonials__nav--prev"
                        onClick={prevSlide}
                        aria-label="Previous testimonial"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <div
                        className="testimonials__track"
                        role="group"
                        aria-live="polite"
                    >
                        {testimonials.map((testimonial, index) => (
                            <article
                                key={testimonial.id}
                                className={`testimonials__card ${index === currentIndex ? 'testimonials__card--active' : ''}`}
                                style={{
                                    transform: `translateX(${(index - currentIndex) * 100}%)`,
                                    opacity: index === currentIndex ? 1 : 0.3
                                }}
                                aria-hidden={index !== currentIndex}
                                itemScope
                                itemType="https://schema.org/Review"
                            >
                                <div className="testimonials__card-content">
                                    {/* Quote Icon */}
                                    <div className="testimonials__quote-icon" aria-hidden="true">❝</div>

                                    {/* Rating */}
                                    <div className="testimonials__rating" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                                        {renderStars(testimonial.rating)}
                                        <meta itemProp="ratingValue" content={testimonial.rating} />
                                    </div>

                                    {/* Quote */}
                                    <blockquote className="testimonials__quote" itemProp="reviewBody">
                                        "{testimonial.quote}"
                                    </blockquote>

                                    {/* Author */}
                                    <div className="testimonials__author" itemProp="author" itemScope itemType="https://schema.org/Person">
                                        <div className="testimonials__avatar" aria-hidden="true">
                                            {testimonial.image}
                                        </div>
                                        <div className="testimonials__info">
                                            <span className="testimonials__name" itemProp="name">{testimonial.name}</span>
                                            <span className="testimonials__role">{testimonial.role} • {testimonial.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <button
                        className="testimonials__nav testimonials__nav--next"
                        onClick={nextSlide}
                        aria-label="Next testimonial"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="testimonials__dots" role="tablist" aria-label="Select testimonial">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`testimonials__dot ${index === currentIndex ? 'testimonials__dot--active' : ''}`}
                            onClick={() => goToSlide(index)}
                            role="tab"
                            aria-selected={index === currentIndex}
                            aria-label={`View testimonial ${index + 1} of ${testimonials.length}`}
                        />
                    ))}
                </div>

                {/* Trust Badges */}
                <div className={`testimonials__badges ${isVisible ? 'animate-slide-up' : ''}`} role="list" aria-label="Trust indicators">
                    <div className="testimonials__badge" role="listitem">
                        <span className="testimonials__badge-icon" aria-hidden="true">⭐</span>
                        <span className="testimonials__badge-text">5-Star Rated Makeup Artist</span>
                    </div>
                    <div className="testimonials__badge" role="listitem">
                        <span className="testimonials__badge-icon" aria-hidden="true">💯</span>
                        <span className="testimonials__badge-text">100+ Happy Brides in Bangalore</span>
                    </div>
                    <div className="testimonials__badge" role="listitem">
                        <span className="testimonials__badge-icon" aria-hidden="true">✅</span>
                        <span className="testimonials__badge-text">100% Satisfaction Guaranteed</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
