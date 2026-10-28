"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { NAV_ITEMS, DOCTOR } from "@/lib/data";
import PhoneIcon from "./PhoneIcon";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const hoverOpened = useRef(false);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  return (
    <header style={{ background: "#ffffff", borderBottom: "1px solid #d3d1c7" }}>
      {/* Top bar */}
      <div className="on-navy" style={{ background: "#1a2744", color: "#ffffff", fontSize: "13px", padding: "6px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a
            href={`tel:${DOCTOR.phoneTel}`}
            aria-label={`Call the practice on ${DOCTOR.phone}`}
            style={{ color: "#ffffff", fontSize: "15px", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.4rem", textDecoration: "none", padding: "2px 0" }}
          >
            <PhoneIcon size={16} />
            {DOCTOR.phone}
          </a>
          <a href={`mailto:${DOCTOR.email}`} className="topbar-email" style={{ color: "#d3d1c7" }}>{DOCTOR.email}</a>
        </div>
      </div>

      {/* Main nav */}
      <nav aria-label="Main" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
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
            <div style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "12px", color: "#5f5e5a", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Orthopaedic Surgeon
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "0", fontSize: "14px" }} className="hidden-mobile">
          {NAV_ITEMS.filter(i => i.label !== "Appointments" && i.label !== "For Referrers").map((item) => {
            const topStyle: React.CSSProperties = {
              padding: "0 0.75rem",
              height: "72px",
              display: "flex",
              alignItems: "center",
              color: "#1a2744",
              fontWeight: 400,
              textDecoration: "none",
              whiteSpace: "nowrap",
              fontSize: "13.5px",
            };
            if (!item.children) {
              return (
                <Link key={item.href} href={item.href} style={topStyle}>
                  {item.label}
                </Link>
              );
            }
            const menuId = `nav-menu-${item.href.replace(/\//g, "")}`;
            const isOpen = openDropdown === item.label;
            return (
              <div
                key={item.href}
                style={{ position: "relative" }}
                onMouseEnter={() => {
                  hoverOpened.current = true;
                  setOpenDropdown(item.label);
                }}
                onMouseLeave={() => {
                  hoverOpened.current = false;
                  setOpenDropdown(null);
                }}
                onBlur={(e) => {
                  if (hoverOpened.current) return; // pointer is still over the menu
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpenDropdown(null);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape" && isOpen) {
                    setOpenDropdown(null);
                    triggerRefs.current[item.label]?.focus();
                  }
                }}
              >
                <button
                  type="button"
                  ref={(el) => {
                    triggerRefs.current[item.label] = el;
                  }}
                  aria-expanded={isOpen}
                  aria-controls={menuId}
                  onClick={() => {
                    // A mouse click on a menu the hover just opened keeps it open
                    if (hoverOpened.current) {
                      hoverOpened.current = false;
                      setOpenDropdown(item.label);
                      return;
                    }
                    setOpenDropdown(isOpen ? null : item.label);
                  }}
                  style={{ ...topStyle, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
                >
                  {item.label}
                  <span aria-hidden="true" style={{ marginLeft: "4px", fontSize: "12px" }}>▾</span>
                </button>
                <div
                  id={menuId}
                  hidden={!isOpen}
                  style={{
                    position: "absolute",
                    top: "72px",
                    left: 0,
                    background: "#ffffff",
                    border: "1px solid #d3d1c7",
                    borderTop: "3px solid #1d9e75",
                    minWidth: "220px",
                    zIndex: 50,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                >
                  {[{ label: `${item.label} overview`, href: item.href }, ...item.children].map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpenDropdown(null)}
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
              </div>
            );
          })}
          <Link
            href="/for-referrers/how-to-refer"
            style={{
              marginLeft: "0.5rem",
              border: "1px solid #0f7a59",
              color: "#0f7a59",
              padding: "0.45rem 1rem",
              borderRadius: "4px",
              fontSize: "13.5px",
              fontWeight: 500,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            GP Referral
          </Link>
          <Link
            href="/appointments"
            style={{
              marginLeft: "0.5rem",
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
          aria-label="Main menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {/* Always rendered so aria-controls on the toggle always points at a real element */}
      <div id="mobile-menu" hidden={!mobileOpen} style={{ background: "#f8f8f6", borderTop: "1px solid #d3d1c7", padding: "1rem 1.5rem" }}>
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

      <style>{`
        @media (max-width: 1140px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}
