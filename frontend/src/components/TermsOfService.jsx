import './LegalPages.css';

const TermsOfService = () => {
    return (
        <div className="legal-page">
            <div className="legal-page__container">
                <header className="legal-page__header">
                    <a href="/" className="legal-page__back" aria-label="Back to Home">
                        ← Back to Home
                    </a>
                    <h1 className="legal-page__title">Terms of Service</h1>
                    <p className="legal-page__updated">Last Updated: January 30, 2026</p>
                </header>

                <main className="legal-page__content">
                    <section className="legal-section">
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using the services of Navya Makeup & Hairstyle ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>2. Services Offered</h2>
                        <p>We provide the following beauty services:</p>
                        <ul>
                            <li>Bridal Makeup & Hairstyling</li>
                            <li>Party & Event Makeup</li>
                            <li>Non-Bridal Makeup</li>
                            <li>Pre-Wedding Shoot Makeup</li>
                            <li>Mehendi (Henna) Art</li>
                            <li>Hairstyling Services</li>
                            <li>Nail Art & Design</li>
                            <li>Saree Pre-Pleating & Box Folding</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>3. Booking & Appointments</h2>
                        <h3>Booking Process</h3>
                        <ul>
                            <li>Bookings can be made via WhatsApp, phone call, or our website contact form</li>
                            <li>A booking is confirmed only after receiving confirmation from us</li>
                            <li>Advance booking is required for all bridal services</li>
                        </ul>

                        <h3>Advance Payment</h3>
                        <ul>
                            <li>Bridal packages require 50% advance payment to confirm booking</li>
                            <li>Non-bridal services may require advance payment based on service type</li>
                            <li>Payment can be made via UPI, bank transfer, or cash</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>4. Cancellation & Refund Policy</h2>
                        <h3>Cancellation by Client</h3>
                        <ul>
                            <li><strong>30+ days before event:</strong> Full refund minus processing fee (5%)</li>
                            <li><strong>15-29 days before event:</strong> 50% refund of advance payment</li>
                            <li><strong>Less than 15 days:</strong> No refund (booking can be rescheduled once)</li>
                        </ul>

                        <h3>Cancellation by Us</h3>
                        <p>
                            In rare cases where we must cancel, you will receive a full refund or option to reschedule at no additional cost.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>5. Rescheduling</h2>
                        <ul>
                            <li>Free rescheduling is allowed once, with at least 7 days notice</li>
                            <li>Rescheduling within 7 days of the event may incur additional charges</li>
                            <li>Second rescheduling will be treated as a new booking</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>6. Service Delivery</h2>
                        <h3>Home Service</h3>
                        <ul>
                            <li>We provide home service within Bengaluru and surrounding areas</li>
                            <li>Travel charges may apply for locations beyond 15 km from our base location</li>
                            <li>Client must provide adequate lighting and space for makeup application</li>
                        </ul>

                        <h3>Time & Punctuality</h3>
                        <ul>
                            <li>Please be ready at the scheduled time</li>
                            <li>Delays caused by the client may affect the final result</li>
                            <li>We strive to arrive 15-30 minutes before scheduled time</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>7. Client Responsibilities</h2>
                        <ul>
                            <li>Inform us of any skin allergies, sensitivities, or medical conditions</li>
                            <li>Provide accurate contact and event information</li>
                            <li>Ensure face is clean and moisturized before makeup session</li>
                            <li>Communicate preferences clearly during trial sessions</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>8. Photos & Portfolio</h2>
                        <p>
                            We may take photos of our work for portfolio and promotional purposes. If you prefer not to have your photos used, please inform us in advance.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>9. Limitation of Liability</h2>
                        <p>
                            While we use high-quality products and follow best practices, we are not liable for:
                        </p>
                        <ul>
                            <li>Allergic reactions not disclosed prior to service</li>
                            <li>Damage to clothing or accessories during service</li>
                            <li>Dissatisfaction due to unclear communication of expectations</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>10. Contact Information</h2>
                        <p>For any questions regarding these terms:</p>
                        <ul>
                            <li><strong>Phone:</strong> +91 6366515258</li>
                            <li><strong>Email:</strong> hairstylistnavya786@gmail.com</li>
                            <li><strong>WhatsApp:</strong> <a href="https://wa.me/916366515258">Message Us</a></li>
                            <li><strong>Address:</strong> CSR Golden Gate, Hosabasavanapura, Medahalli, Bengaluru 560049</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>11. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of updated terms.
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

export default TermsOfService;
