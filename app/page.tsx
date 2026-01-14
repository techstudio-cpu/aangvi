import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import { serviceCategories, journeyPillars } from "@/lib/siteData";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner
          showLogo={true}
          variant="home"
          ctaLabel="Discover More"
          ctaHref="/services"
          backgroundImage="/assets/hero-home-page.png"
        />

        {/* Welcome Section */}
        <section className="section section-cream">
          <div className="container">
            <div className="decorative-divider">
              <span></span>
            </div>
            <div className="section-title">
              <h2>Welcome to AANGVI</h2>
              <p>
                At AANGVI, we specialize in creating luxurious and unforgettable events
                that reflect your unique story. From breathtaking weddings to vibrant
                cultural celebrations, our team brings elegance and meticulous attention
                to detail to every occasion.
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <Link href="/about" className="btn-outline">
                Discover More
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section section-warm">
          <div className="container">
            <div className="section-title">
              <h2>Creating Unforgettable Experiences</h2>
              <p>
                At AANGVI, we specialize in crafting bespoke events that captivate and
                enchant. Explore our range of services designed to bring your vision to
                life with unmatched elegance and sophistication.
              </p>
            </div>
            <div className="services-row">
              {serviceCategories.map((service) => (
                <article key={service.title} className="service-card">
                  <img src={service.image} alt={service.title} />
                  <div className="service-card-body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link href={`/services#${service.slug}`} className="btn-outline">
                      View All Services
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="section section-cream">
          <div className="container">
            <div className="section-title">
              <h2>Where We Excel</h2>
              <p>
                Experience the artistry of AANGVI through our dedication to perfection
                in three key areas.
              </p>
            </div>
            <div className="pillars-row">
              {journeyPillars.map((pillar, index) => (
                <article key={pillar.title} className="pillar-card">
                  <div className="pillar-num">0{index + 1}</div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                  <Link href="/services" className="btn-outline">
                    {pillar.cta}
                  </Link>
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
