import React from 'react';
import './style.css';

const FAQs = () => {
    return (
        <React.Fragment>
                    <div>
                <header>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <a className="navbar-brand" href="index.html">
                                <img src="./assets/logo.jpeg" className="navbar-image" alt="logo" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="about.html">Our Mission <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="adoption.html">Adoption</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="services.html">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="FAQs.html">FAQs</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

<div>
    <div className="page-header">
        <p>There are never too many questions when it comes to giving our animals a loving home! Below are our most commonly asked questions; contact us directly for further questions.
        </p>
    </div>

    <div class="faq-container">
        <h2>Pet Adoption </h2>
        <div class="faq-item">
            <div class="faq-question">
                <span>What are the adoption fees?</span>
                <span class="arrow">&#9660;</span>
            </div>
            <div class="faq-answer">
                Adoption fees vary depending on the animal and its age. Please check our website or contact us for
                specific fee information.
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question">
                <span>What is the adoption process?</span>
                <span class="arrow">&#9660;</span>
            </div>
            <div class="faq-answer">
                The adoption process typically involves filling out an application, meeting the animal, and a home
                visit.
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question">
                <span>What animals are available for adoption?</span>
                <span class="arrow">&#9660;</span>
            </div>
            <div class="faq-answer">
                We have a variety of animals available, including dogs, cats, rabbits, and more. Check our adoption
                page for current listings.
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question">
                <span>Can I return an adopted pet?</span>
                <span class="arrow">&#9660;</span>
            </div>
            <div class="faq-answer">
                Yes, we understand that sometimes adoptions don't work out. For this reason we charge a refundable
                $500 deposit that covers the fees and paperwork required for handling return cases. If you are
                satisfied with your adoption, the deposit is returned to you in 90 days. Please contact us to
                discuss the return process.
            </div>
        </div>
        <br />
        <h2>Photography Services </h2>
        <div class="faq-item">
            <div class="faq-question">
                <span>What types of photography services do you offer?</span>
                <span class="arrow">&#9660;</span>
            </div>
            <div class="faq-answer">
                We offer a wide range of photography services onsite, including custom services on location.
                Please
                refer to our Services page for more details.
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question">
                <span>How do I book a photography session?</span>
                <span class="arrow">&#9660;</span>
            </div>
            <div class="faq-answer">
                You can book a session by contacting us through our website, email, or phone. We'll discuss your
                needs
                and schedule a convenient time.
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question">
                <span>What are your pricing packages?</span>
                <span class="arrow">&#9660;</span>
            </div>
            <div class="faq-answer">
                Our pricing packages vary depending on the type of photography and the duration of the session.
                Please
                contact us for a detailed quote.
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question">
                <span>How long does it take to receive the edited photos?</span>
                <span class="arrow">&#9660;</span>
            </div>
            <div class="faq-answer">
                The turnaround time for edited photos is typically 1-2 weeks, depending on the volume of photos
                and
                the
                complexity of editing.
            </div>
        </div>

        </div>
    </div>
    
    <script src="./faqScript.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <footer>
            <p>&copy; 2025 Pawsh Inc.</p>
    </footer>
</div>
        </React.Fragment>
    );
};