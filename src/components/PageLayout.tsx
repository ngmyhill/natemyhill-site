import Breadcrumb from "./Breadcrumb";
import CTABox from "./CTABox";

interface Crumb { label: string; href?: string }
export interface GlanceFact { label: string; value: string }

interface Props {
  children: React.ReactNode;
  crumbs?: Crumb[];
  showCTA?: boolean;
  ctaReferrer?: boolean;
  /** Facts already stated on the page. The "At a glance" box shows only when there are at least two. */
  glance?: GlanceFact[];
}

export default function PageLayout({ children, crumbs, showCTA = true, ctaReferrer = false, glance }: Props) {
  const hasGlance = !!glance && glance.length >= 2;
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>
      {crumbs && <Breadcrumb crumbs={crumbs} />}
      <div className={`page-grid${hasGlance ? " has-glance" : ""}`}>
        <article className="prose">
          {children}
          {showCTA && <CTABox referrer={ctaReferrer} />}
        </article>
        {hasGlance && (
          <aside className="glance" aria-labelledby="glance-heading">
            <h2 id="glance-heading">At a glance</h2>
            <dl>
              {glance!.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
            <p>Typical figures only. Recovery varies between people.</p>
          </aside>
        )}
      </div>
    </div>
  );
}
