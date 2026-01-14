import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import { galleryImages } from "@/lib/siteData";

const weddingStories = [
  { slug: "aman-priya-udaipur", title: "Aman & Priya", location: "Udaipur Palace" },
  { slug: "aarav-meera-jaipur", title: "Aarav & Meera", location: "Jaipur Gardens" },
  { slug: "rohan-ananya-goa", title: "Rohan & Ananya", location: "Goa Beachfront" },
];

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner
          title="Our Portfolio"
          subtitle="Real Weddings & Celebrations"
          backgroundImage="/assets/background-tile.png"
        />

        <section className="section section-cream">
          <div className="container">
            <div className="section-title">
              <h2>Real Weddings</h2>
              <p>Explore our curated collection of unforgettable celebrations.</p>
            </div>

            <div className="services-row">
              {weddingStories.map((wedding, index) => (
                <Link
                  key={wedding.slug}
                  href={`/portfolio/${wedding.slug}`}
                  className="service-card"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={galleryImages[index % galleryImages.length].src}
                    alt={wedding.title}
                  />
                  <div className="service-card-body">
                    <h3>{wedding.title}</h3>
                    <p>{wedding.location}</p>
                    <span className="btn-outline">View Story</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="section section-warm">
          <div className="container">
            <div className="section-title">
              <h2>Event Gallery</h2>
            </div>
            <div className="gallery-grid">
              {galleryImages.slice(0, 6).map((img, index) => (
                <div key={index} className="gallery-item">
                  <img src={img.src} alt={img.alt} />
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link href="/gallery" className="btn-gold">
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
