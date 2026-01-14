import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import { contactDetails } from "@/lib/siteData";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner
          title="Let's Create Unforgettable Memories"
          subtitle="Schedule Your Consultation"
          backgroundImage="/assets/hero-home-page.png"
        />

        <section className="section section-cream">
          <div className="container">
            <div className="contact-grid">
              {/* Contact Form */}
              <div>
                <h2 style={{ marginBottom: "1.5rem" }}>Get in Touch</h2>
                <form className="contact-form">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Your email" />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" placeholder="Your phone number" />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea placeholder="Tell us about your dream event..." />
                  </div>
                  <button type="submit" className="btn-gold">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="contact-info">
                <h3>Contact Information</h3>
                <div className="contact-info-item">
                  <span>📞</span>
                  <p>{contactDetails.phone}</p>
                </div>
                <div className="contact-info-item">
                  <span>✉️</span>
                  <p>{contactDetails.email}</p>
                </div>
                <div className="contact-info-item">
                  <span>🕐</span>
                  <div>
                    <p><strong>Office Hours</strong></p>
                    <p>{contactDetails.office}</p>
                    <p>{contactDetails.closed}</p>
                  </div>
                </div>

                {/* Map */}
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0076!2d72.8679!3d19.0607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM4LjUiTiA3MsKwNTInMDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: "var(--radius-md)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="AANGVI Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Consultation CTA */}
        <section className="cta-band">
          <div className="container">
            <h2>Schedule Your Consultation</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "1.5rem" }}>
              Let AANGVI help bring your dream wedding or event to life. Contact our planning team today.
            </p>
            <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`} className="btn-gold">
              Call Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
