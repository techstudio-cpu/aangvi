import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroBanner from "../../components/HeroBanner";
import { galleryImages } from "@/lib/siteData";

export default function WeddingPage({ params }: any) {
  const title = params.wedding.replace(/-/g, " ");

  return (
    <>
      <Header />
      <main>
        <HeroBanner
          title={title}
          subtitle="A Celebration of Love"
          backgroundImage="/assets/background-tile.png"
        />

        <section className="section section-cream">
          <div className="container">
            <div className="about-intro">
              <div className="about-intro-text">
                <h2>The Story</h2>
                <p>
                  This was a magical celebration that brought together two families
                  in an unforgettable union. Every detail was meticulously planned
                  to reflect the couple's unique love story and cultural heritage.
                </p>
                <p>
                  From the breathtaking venue to the exquisite decor, this wedding
                  showcased AANGVI's commitment to creating timeless memories.
                </p>
                <Link href="/contact" className="btn-gold">
                  Plan Your Wedding
                </Link>
              </div>
              <div className="about-intro-image">
                <img
                  src={galleryImages[0].src}
                  alt={title}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-warm">
          <div className="container">
            <div className="section-title">
              <h2>Gallery</h2>
            </div>
            <div className="gallery-grid">
              {galleryImages.slice(0, 6).map((img, index) => (
                <div key={index} className="gallery-item">
                  <img src={img.src} alt={img.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
