import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import { testimonials } from "@/lib/siteData";

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner
          title="What Our Clients Say"
          subtitle="Cherished Words from Happy Couples and Families"
          backgroundImage="/assets/hero-home-page.png"
        />

        <section className="section section-cream">
          <div className="container">
            <div className="testimonials-row">
              {testimonials.map((testimonial) => (
                <article key={testimonial.couple} className="testimonial-card">
                  <div className="testimonial-avatar">
                    <img
                      src={testimonial.image}
                      alt={testimonial.couple}
                    />
                  </div>
                  <h4>{testimonial.couple}</h4>
                  <p className="testimonial-event">{testimonial.event}</p>
                  <blockquote>{testimonial.quote}</blockquote>
                  <Link href="/gallery" className="btn-outline">
                    Discover More
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band">
          <div className="container">
            <h2>Ready to Plan Your Dream Event?</h2>
            <Link href="/contact" className="btn-gold">
              Get Started
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
