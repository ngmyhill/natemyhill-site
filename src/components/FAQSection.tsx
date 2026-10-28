"use client";
import { useState } from "react";

interface FAQ { q: string; a: string }

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ marginTop: "2.5rem" }}>
      <h2>Frequently asked questions</h2>
      <div style={{ marginTop: "1rem" }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: "1px solid #d3d1c7" }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{ width: "100%", textAlign: "left", padding: "1rem 0", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}
              aria-expanded={open === i}
            >
              <span style={{ fontFamily: "EB Garamond, Georgia, serif", fontSize: "1.05rem", color: "#1a2744" }}>{faq.q}</span>
              <span style={{ color: "#0f7a59", fontSize: "1.25rem", flexShrink: 0 }}>{open === i ? "−" : "+"}</span>
            </button>
            {open === i && (
              <div style={{ paddingBottom: "1rem", color: "#5f5e5a", fontSize: "15px", lineHeight: 1.7 }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
