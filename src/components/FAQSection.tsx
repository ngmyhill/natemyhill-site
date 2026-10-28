"use client";
import { useId, useState } from "react";

interface FAQ { q: string; a: string }

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();
  return (
    <div style={{ marginTop: "2.5rem" }}>
      <h2>Frequently asked questions</h2>
      <div style={{ marginTop: "1rem" }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: "1px solid #d3d1c7" }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{ width: "100%", textAlign: "left", padding: "1rem 0", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}
              id={`${baseId}-q-${i}`}
              aria-expanded={open === i}
              aria-controls={`${baseId}-a-${i}`}
            >
              <span style={{ fontFamily: "EB Garamond, Georgia, serif", fontSize: "var(--text-lead)", color: "#1a2744" }}>{faq.q}</span>
              <span aria-hidden="true" style={{ color: "#0f7a59", fontSize: "1.25rem", flexShrink: 0 }}>{open === i ? "−" : "+"}</span>
            </button>
            <div
              id={`${baseId}-a-${i}`}
              role="region"
              aria-labelledby={`${baseId}-q-${i}`}
              hidden={open !== i}
              style={{ paddingBottom: "1rem", color: "#5f5e5a", fontSize: "15px", lineHeight: 1.7 }}
            >
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
