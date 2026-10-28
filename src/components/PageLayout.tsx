import { Children, isValidElement } from "react";
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

function GlanceBox({ facts, className, headingId }: { facts: GlanceFact[]; className: string; headingId: string }) {
  return (
    <aside className={className} aria-labelledby={headingId}>
      <h2 id={headingId}>At a glance</h2>
      <dl>
        {facts.map((f) => (
          <div key={f.label}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
      <p>Typical figures only. Recovery varies between people.</p>
    </aside>
  );
}

export default function PageLayout({ children, crumbs, showCTA = true, ctaReferrer = false, glance }: Props) {
  const hasGlance = !!glance && glance.length >= 2;

  // On phones the side rail would fall below the booking box, so a second copy
  // sits under the h1 and intro paragraph. CSS shows one copy at a time.
  let content: React.ReactNode = children;
  if (hasGlance) {
    const items = Children.toArray(children);
    const first = items[0], second = items[1];
    if (isValidElement(first) && first.type === "h1" && isValidElement(second) && second.type === "p") {
      content = [
        ...items.slice(0, 2),
        <GlanceBox key="glance-inline" facts={glance!} className="glance glance-inline" headingId="glance-heading-inline" />,
        ...items.slice(2),
      ];
    }
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>
      {crumbs && <Breadcrumb crumbs={crumbs} />}
      <div className={`page-grid${hasGlance ? " has-glance" : ""}`}>
        <article className="prose">
          {content}
          {showCTA && <CTABox referrer={ctaReferrer} />}
        </article>
        {hasGlance && <GlanceBox facts={glance!} className="glance glance-rail" headingId="glance-heading" />}
      </div>
    </div>
  );
}
