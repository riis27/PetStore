import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import 'bootstrap/dist/css/bootstrap.min.css';

// ... other pages

<Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/adoption" element={<Adoption />} />
    <Route path="/services" element={<Services />} />
    <Route path="/faqs" element={<FAQs />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  <Footer />
</Router>
