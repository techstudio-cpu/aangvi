import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import { serviceCategories, additionalServices } from "@/lib/siteData";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner
          title="Services"
          subtitle="Turning Dreams into Exquisite Events & Celebrations"
          ctaLabel="Schedule Your Consultation"
          ctaHref="/contact"
          backgroundImage="/assets/background-tile.png"
        />

        {/* Intro */}
        <section className="section section-cream">
          <div className="container">
            <div className="section-title">
              <h2>Creating Unforgettable Experiences</h2>
              <p>
                At AANGVI, we specialize in crafting bespoke events that captivate and
                enchant. Explore our range of services designed to bring your vision to
                life with unmatched elegance and sophistication.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="section section-warm">
          <div className="container">
            <div className="section-title">
              <h2>Our Core Services</h2>
            </div>
            <div className="services-row">
              {serviceCategories.map((service) => (
                <article key={service.title} className="service-card">
                  <img src={service.image} alt={service.title} />
                  <div className="service-card-body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link href="/contact" className="btn-outline">
                      Discover More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="cta-band">
          <div className="container">
            <h2>Ready to Plan Your Dream Event?</h2>
            <Link href="/contact" className="btn-gold">
              Get Started
            </Link>
          </div>
        </section>

        {/* Additional Services */}
        <section className="section section-cream">
          <div className="container">
            <div className="section-title">
              <h2>Additional Services</h2>
              <p>
                Beyond our core offerings, we provide a suite of specialized services
                to elevate every aspect of your celebration.
              </p>
            </div>
            <div className="services-row">
              {additionalServices.map((service) => (
                <article key={service.title} className="service-card">
                  <img src={service.image} alt={service.title} />
                  <div className="service-card-body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link href="/contact" className="btn-outline">
                      Learn More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
