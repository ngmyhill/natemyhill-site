"use client";
import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS, DOCTOR } from "@/lib/data";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header style={{ background: "#ffffff", borderBottom: "1px solid #d3d1c7" }}>
      {/* Top bar */}
      <div style={{ background: "#1a2744", color: "#ffffff", fontSize: "13px", padding: "6px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>{DOCTOR.phone}</span>
          <Link href="/for-referrers" style={{ color: "#34b889", fontWeight: 500 }}>For Referrers</Link>
        </div>
      </div>

      {/* Main nav */}
      <nav style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <svg viewBox="0 0 100 100" width="44" height="44" aria-hidden="true">
            <circle cx="50" cy="50" r="34" fill="none" stroke="#1d9e75" strokeWidth="8" strokeLinecap="round" strokeDasharray="148.3 65.3" transform="rotate(100 50 50)"/>
            <circle cx="83.5" cy="44.1" r="7" fill="#1a2744"/>
          </svg>
          <div>
            <div style={{ fontFamily: "EB Garamond, Georgia, serif", fontSize: "1.35rem", color: "#1a2744", lineHeight: 1.1, letterSpacing: "0.02em" }}>
              Dr Nate Myhill
            </div>
            <div style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "10px", color: "#5f5e5a", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Orthopaedic Surgeon
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "0", fontSize: "14px" }} className="hidden-mobile">
          {NAV_ITEMS.filter(i => i.label !== "Appointments").map((item) => (
            <div
              key={item.href}
              style={{ position: "relative" }}
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                style={{
                  padding: "0 0.75rem",
                  height: "72px",
                  display: "flex",
                  alignItems: "center",
                  color: "#1a2744",
                  fontWeight: 400,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  fontSize: "13.5px",
                }}
              >
                {item.label}
                {item.children && <span style={{ marginLeft: "4px", fontSize: "10px" }}>▾</span>}
              </Link>
              {item.children && openDropdown === item.label && (
                <div style={{
                  position: "absolute",
                  top: "72px",
                  left: 0,
                  background: "#ffffff",
                  border: "1px solid #d3d1c7",
                  borderTop: "3px solid #1d9e75",
                  minWidth: "220px",
                  zIndex: 50,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      style={{
                        display: "block",
                        padding: "0.6rem 1rem",
                        color: "#1a2744",
                        fontSize: "13px",
                        textDecoration: "none",
                        borderBottom: "1px solid #f8f8f6",
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/appointments"
            style={{
              marginLeft: "0.75rem",
              background: "#0f7a59",
              color: "#ffffff",
              padding: "0.5rem 1.25rem",
              borderRadius: "4px",
              fontSize: "13.5px",
              fontWeight: 500,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", fontSize: "1.5rem", color: "#1a2744" }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: "#f8f8f6", borderTop: "1px solid #d3d1c7", padding: "1rem 1.5rem" }}>
          {NAV_ITEMS.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{ display: "block", padding: "0.6rem 0", color: "#1a2744", fontWeight: 500, borderBottom: "1px solid #d3d1c7" }}
              >
                {item.label}
              </Link>
              {item.children && (
                <div style={{ paddingLeft: "1rem" }}>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      style={{ display: "block", padding: "0.4rem 0", color: "#5f5e5a", fontSize: "14px", borderBottom: "1px solid #f0efea" }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}
