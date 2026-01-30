import './LegalPages.css';

const PrivacyPolicy = () => {
    return (
        <div className="legal-page">
            <div className="legal-page__container">
                <header className="legal-page__header">
                    <a href="/" className="legal-page__back" aria-label="Back to Home">
                        ← Back to Home
                    </a>
                    <h1 className="legal-page__title">Privacy Policy</h1>
                    <p className="legal-page__updated">Last Updated: January 30, 2026</p>
                </header>

                <main className="legal-page__content">
                    <section className="legal-section">
                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to Navya Makeup & Hairstyle ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>2. Information We Collect</h2>
                        <h3>Personal Information</h3>
                        <p>We may collect the following personal information:</p>
                        <ul>
                            <li><strong>Contact Information:</strong> Name, phone number, email address</li>
                            <li><strong>Booking Details:</strong> Event date, service type, location preferences</li>
                            <li><strong>Communication Data:</strong> Messages sent via WhatsApp or contact forms</li>
                        </ul>

                        <h3>Automatically Collected Information</h3>
                        <ul>
                            <li>Device and browser type</li>
                            <li>IP address and location data</li>
                            <li>Pages visited and time spent on our website</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>3. How We Use Your Information</h2>
                        <p>We use your information to:</p>
                        <ul>
                            <li>Process and confirm your service bookings</li>
                            <li>Communicate with you about appointments and services</li>
                            <li>Send promotional offers and updates (with your consent)</li>
                            <li>Improve our website and services</li>
                            <li>Respond to your inquiries and provide customer support</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>4. Information Sharing</h2>
                        <p>
                            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                        </p>
                        <ul>
                            <li>With your explicit consent</li>
                            <li>To comply with legal obligations</li>
                            <li>To protect our rights and safety</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>5. Data Security</h2>
                        <p>
                            We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>6. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access your personal information</li>
                            <li>Correct inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Opt-out of marketing communications</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>7. Cookies</h2>
                        <p>
                            Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>8. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us:
                        </p>
                        <ul>
                            <li><strong>Phone:</strong> +91 6366515258</li>
                            <li><strong>Email:</strong> hairstylistnavya786@gmail.com</li>
                            <li><strong>WhatsApp:</strong> <a href="https://wa.me/916366515258">Message Us</a></li>
                            <li><strong>Address:</strong> CSR Golden Gate, Hosabasavanapura, Medahalli, Bengaluru 560049</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>9. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                        </p>
                    </section>
                </main>

                <footer className="legal-page__footer">
                    <p>© 2026 Navya Makeup & Hairstyle. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
