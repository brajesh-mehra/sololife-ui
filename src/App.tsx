import React from "react";
import Header from "./components/header/Header";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>

      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>✅ Solar Pump Installation for Farmers</li>
          <li>✅ Rooftop & Ground-Mounted Solar Panels</li>
          <li>✅ Solar Water Heating Systems</li>
          <li>✅ Green Energy Consulting & Maintenance</li>
        </ul>
      </section>
     
      <section className="gallery">
        <h2>Our Work</h2>
        <div className="image-grid">
          <img src="/images/solar-panel.jpg" alt="Solar Panel Installation" />
          <img src="/images/work1.png" alt="Solar Pump System" />
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>📞 Phone: +91-8767119658</p>
        <p>✉️ Email: admin@sololife.in</p>
        <p>🏢 Address: N 227, Malwa County, Raukhedi, Manglia, Bypass Road, Indore, Madhya Pradesh, India, Pin - 453771</p>
      </section>

      <footer className="footer">
        <p>Follow us on:</p>
        <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=61578627299356" target="_blank" rel="noreferrer">🌐 Facebook</a>
          <a href="https://www.linkedin.com/company/sololife" target="_blank" rel="noreferrer">💼 LinkedIn</a>
          <a href="https://wa.me/918767119658" target="_blank" rel="noreferrer">💬 WhatsApp</a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} SOLOLIFE GREEN ENERGY PVT LTD. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
