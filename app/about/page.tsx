import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import { journeyPillars, aboutContent } from "@/lib/siteData";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner
          title="About Us"
          subtitle={aboutContent.headline}
          ctaLabel="Get In Touch"
          ctaHref="/contact"
          backgroundImage="/assets/hero-home-page.png"
        />

        {/* Who We Are Section */}
        <section className="section section-cream">
          <div className="container">
            <div className="section-title">
              <h2>Who We Are</h2>
            </div>
            <div className="about-intro">
              <div className="about-intro-text">
                <p>
                  AANGVI is synonymous with elegance, excellence, and unforgettable
                  celebrations. With years of experience in the luxury event industry,
                  we are passionate about transforming your vision into extraordinary
                  experiences.
                </p>
                <p>
                  Our team of expert planners, designers, and coordinators is dedicated
                  to ensuring that every event we create is timeless, exquisite, and
                  uniquely personal.
                </p>
                <Link href="/services" className="btn-gold">
                  Discover More
                </Link>
              </div>
              <div className="about-intro-image">
                <img
                  src="/assets/BCO.3ccfaf9a-b47d-4da5-a2a5-f0b3bef93291.png"
                  alt="Couple at AANGVI wedding"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Where We Excel */}
        <section className="section section-warm">
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
                    Discover Our Services
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="section section-cream">
          <div className="container">
            <div className="about-quote">
              <blockquote>
                "Our passion is turning your dreams into unforgettable realities. Let
                us craft a day that reflects your love story with elegance and grace."
              </blockquote>
              <cite>— Team AANGVI</cite>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
