"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/siteData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredLinks = navLinks.filter((l) => l.label !== "Admin");

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="logo-link">
            <span className="logo-icon">A</span>
            <div className="logo-text">
              <span className="logo-name">AANGVI</span>
              <span className="logo-tagline">Creating Lasting Moments</span>
            </div>
          </Link>
          <nav className="main-nav">
            {filteredLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="header-cta">
            Contact Us
          </Link>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <nav className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
        {filteredLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
