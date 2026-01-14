import Link from "next/link";
import { navLinks, contactDetails } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta-band">
        <h2>Ready to Plan Your Dream Event?</h2>
        <Link href="/contact" className="btn-gold">
          Get Started
        </Link>
      </div>
      <div className="footer-main">
        <div className="footer-brand">
          <span className="footer-logo">AANGVI</span>
          <p>{contactDetails.email}</p>
          <p>{contactDetails.phone}</p>
        </div>
        <nav className="footer-nav">
          {navLinks
            .filter((l) => l.label !== "Admin")
            .map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
        </nav>
        <div className="footer-social">
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="WhatsApp">WA</a>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} AANGVI. All rights reserved.</p>
    </footer>
  );
}
