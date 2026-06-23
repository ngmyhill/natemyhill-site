import Breadcrumb from "./Breadcrumb";
import CTABox from "./CTABox";

interface Crumb { label: string; href?: string }

interface Props {
  children: React.ReactNode;
  crumbs?: Crumb[];
  showCTA?: boolean;
  ctaReferrer?: boolean;
  aside?: React.ReactNode;
}

export default function PageLayout({ children, crumbs, showCTA = true, ctaReferrer = false, aside }: Props) {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>
      {crumbs && <Breadcrumb crumbs={crumbs} />}
      <div style={{ display: "grid", gridTemplateColumns: aside ? "1fr 300px" : "1fr", gap: "3rem", alignItems: "start" }}>
        <article className="prose">
          {children}
          {showCTA && <CTABox referrer={ctaReferrer} />}
        </article>
        {aside && <aside>{aside}</aside>}
      </div>
    </main>
  );
}
