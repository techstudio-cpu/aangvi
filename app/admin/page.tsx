import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { adminHighlights } from "@/lib/siteData";

export default async function AdminDashboard() {
  const session = await auth();
  const user = session?.user as { role?: string } | undefined;

  if (!user || user.role !== "ADMIN") {
    redirect("/admin/login");
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-cream)", padding: "2rem" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <h1>Admin Dashboard</h1>
          <Link href="/" className="btn-outline">
            Back to Site
          </Link>
        </div>

        <div className="admin-grid">
          {adminHighlights.map((stat) => (
            <div key={stat.label} className="admin-stat">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          <div className="pillar-card" style={{ textAlign: "left" }}>
            <h3>Recent Leads</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: "1rem 0" }}>
              <li style={{ padding: "0.75rem 0", borderBottom: "1px solid var(--border-gold)" }}>
                <strong>Priya Sharma</strong> - Wedding Inquiry
                <br />
                <small style={{ color: "var(--text-muted)" }}>2 hours ago</small>
              </li>
              <li style={{ padding: "0.75rem 0", borderBottom: "1px solid var(--border-gold)" }}>
                <strong>Rahul Mehta</strong> - Corporate Event
                <br />
                <small style={{ color: "var(--text-muted)" }}>5 hours ago</small>
              </li>
              <li style={{ padding: "0.75rem 0" }}>
                <strong>Ananya Gupta</strong> - Engagement Party
                <br />
                <small style={{ color: "var(--text-muted)" }}>1 day ago</small>
              </li>
            </ul>
            <Link href="#" className="btn-outline">
              View All Leads
            </Link>
          </div>

          <div className="pillar-card" style={{ textAlign: "left" }}>
            <h3>Quick Actions</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
              <Link href="#" className="btn-gold" style={{ textAlign: "center" }}>
                Add New Lead
              </Link>
              <Link href="#" className="btn-outline" style={{ textAlign: "center" }}>
                Manage Services
              </Link>
              <Link href="#" className="btn-outline" style={{ textAlign: "center" }}>
                Update Gallery
              </Link>
              <Link href="/admin/login" className="btn-outline" style={{ textAlign: "center" }}>
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
