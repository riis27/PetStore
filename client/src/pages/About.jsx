import React from "react";

const About = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center w-100">
              <a className="navbar-brand" href="index.html">
                <img src="./assets/logo.jpeg" className="navbar-image" alt="logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="about.html">
                      Our Mission <span className="sr-only">(current)</span>
                    </a>
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

      <div className="Letter">
        <h2>The Pawsh<sup>&reg;</sup> Mission:</h2>
        <img
          src="https://images.unsplash.com/photo-1651807690642-636dd0cfe76c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhhcHB5JTIwZmFtaWx5JTIwd2l0aCUyMHBldHxlbnwwfDB8MHx8fDI%3D"
          alt="dog-beach"
        />

        <p>
          Founded in 2012, Pawsh<sup>&reg;</sup> is dedicated to enriching lives by connecting exceptional pets with
          loving families. Leveraging our extensive background in veterinary medicine and purebred judging, we
          maintain the highest standards for the health, temperament, and overall well-being of every animal we
          represent. Unlike traditional pet stores or online marketplaces, Pawsh<sup>&reg;</sup> meticulously selects
          our pets through partnerships with reputable local and regional breeders, as well as carefully assessing
          and training animals from families and shelters in transition. This rigorous process, combined with our
          commitment to transparency and client education, ensures a trustworthy and satisfying experience for every
          adopter.
        </p>
        <h3>Who We Partner With</h3>
        <p>
          To further support our mission of responsible pet placement, Pawsh<sup>&reg;</sup> partners with local pet
          photographers, specializing in capturing the unique personality of each animal. By booking a photography
          session through Pawsh<sup>&reg;</sup>, clients not only receive cherished memories but also contribute a
          portion of the proceeds to support the vital work of the Cincinnati Animal CARE Humane Society.
        </p>
        <h3>Your New Best Friend Awaits!</h3>
        <p>
          At Pawsh<sup>&reg;</sup>, we believe that finding the perfect pet is a deeply personal journey, and we are
          committed to guiding families every step of the way, fostering lasting bonds and promoting animal welfare.
          On behalf of our partners and team members, we thank you for choosing us to meet your new family addition!
        </p>
      </div>

      <footer>
        <p>&copy; 2025 Pawsh Inc.</p>
      </footer>
    </div>
  );
};

export default About;