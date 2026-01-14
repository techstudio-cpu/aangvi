"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (result?.error) {
      setError("Invalid credentials. Please try again.");
      return;
    }

    router.replace("/admin");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-cream)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "var(--radius-lg)",
          padding: "3rem",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "var(--shadow-soft)",
          border: "1px solid var(--border-gold)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "1.75rem", margin: "0 0 0.5rem" }}>Admin Login</h1>
          <p style={{ color: "var(--text-muted)", margin: 0 }}>Sign in to manage AANGVI</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="admin@aangvi.in"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          {error ? (
            <p style={{ color: "var(--error-red)", marginBottom: "1rem" }}>{error}</p>
          ) : null}

          <button type="submit" className="btn-gold" style={{ width: "100%" }} disabled={loading}>
            {loading ? "Signing in…" : "Login"}
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <Link href="/" style={{ color: "var(--gold)", fontSize: "0.9rem" }}>
            ← Back to Website
          </Link>
        </div>
      </div>
    </div>
  );
}
