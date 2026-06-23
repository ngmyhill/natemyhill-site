import Link from "next/link";

interface Crumb { label: string; href?: string }

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" style={{ fontSize: "13px", color: "#888780", marginBottom: "1.5rem" }}>
      {crumbs.map((c, i) => (
        <span key={i}>
          {i > 0 && <span style={{ margin: "0 0.4rem" }}>›</span>}
          {c.href ? (
            <Link href={c.href} style={{ color: "#888780" }}>{c.label}</Link>
          ) : (
            <span style={{ color: "#5f5e5a" }}>{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
