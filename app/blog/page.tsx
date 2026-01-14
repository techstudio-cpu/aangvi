import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import { blogPosts, blogCategories } from "@/lib/siteData";

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner
          title="Blog"
          subtitle="Insights & Inspirations: AANGVI's Event Blog"
          backgroundImage="/assets/hero-home-page.png"
        />

        <section className="section section-cream">
          <div className="container">
            <div className="section-title">
              <h2>Insights & Inspirations: AANGVI's Event Blog</h2>
            </div>

            <div className="blog-layout">
              {/* Blog Posts */}
              <div className="blog-posts">
                {blogPosts.map((post) => (
                  <article key={post.title} className="blog-card blog-card-horizontal">
                    <img src={post.image} alt={post.title} />
                    <div className="blog-card-body">
                      <h3>{post.title}</h3>
                      <p className="blog-date">{post.date}</p>
                      <p>{post.excerpt}</p>
                      <Link href={`/blog/${post.slug}`} className="btn-outline">
                        Read More
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Sidebar */}
              <aside className="blog-sidebar">
                <div className="sidebar-card">
                  <h3>Search</h3>
                  <div className="search-input">
                    <input type="text" placeholder="Search..." />
                    <button className="search-btn">🔍</button>
                  </div>
                </div>
                <div className="sidebar-card">
                  <h3>Blog Categories</h3>
                  <ul className="category-list">
                    {blogCategories.map((cat) => (
                      <li key={cat}>
                        <Link href="#">› {cat}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
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
