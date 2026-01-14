"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import { galleryImages, galleryCategories } from "@/lib/siteData";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => 
        img.category.toLowerCase() === activeCategory.toLowerCase()
      );

  return (
    <>
      <Header />
      <main>
        <HeroBanner
          title="Gallery"
          subtitle="Experience the Magic: AANGVI's Event Showcase"
          backgroundImage="/assets/background-tile.png"
        />

        {/* Filter Tabs */}
        <section className="section section-cream">
          <div className="container">
            <div className="gallery-filters">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={activeCategory === cat ? "btn-gold" : "btn-outline"}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="gallery-grid">
              {filteredImages.map((img, index) => (
                <div key={index} className="gallery-item">
                  <img src={img.src} alt={img.alt} />
                </div>
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
