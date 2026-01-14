import Link from "next/link";

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: string;
  showLogo?: boolean;
  variant?: "home" | "page";
}

export default function HeroBanner({
  title,
  subtitle,
  ctaLabel,
  ctaHref = "/contact",
  backgroundImage = "/assets/hero-home-page.png",
  showLogo = false,
  variant = "page",
}: HeroBannerProps) {
  return (
    <section
      className={`hero-banner ${variant === "home" ? "hero-banner-home" : ""}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        {showLogo && (
          <div className="hero-logo">
            <div className="hero-logo-icon">
              <span className="hero-logo-letter">A</span>
              <svg className="hero-logo-flower" viewBox="0 0 60 60" fill="none">
                <path d="M30 5 C35 15, 45 20, 55 25 C45 30, 35 35, 30 45 C25 35, 15 30, 5 25 C15 20, 25 15, 30 5" fill="currentColor" opacity="0.8"/>
                <circle cx="45" cy="12" r="6" fill="currentColor" opacity="0.6"/>
                <circle cx="52" cy="20" r="4" fill="currentColor" opacity="0.5"/>
              </svg>
            </div>
            <h1 className="hero-logo-text">AANGVI</h1>
            <p className="hero-logo-tagline">CREATING LASTING MOMENTS</p>
          </div>
        )}
        {title && !showLogo && <h1>{title}</h1>}
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {ctaLabel && (
          <Link href={ctaHref} className="btn-gold">
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
