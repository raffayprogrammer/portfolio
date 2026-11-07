import { site, stats } from "@/content/site";

export default function Hero() {
  return (
    <section className="wrap hero" id="top">
      <p className="label">Portfolio &mdash; 2026</p>
      <h1>{site.name}</h1>
      <p className="hero-role">{site.role}</p>

      <div className="hero-grid">
        <p className="lede">{site.tagline}</p>
        <div className="actions">
          <a className="btn" href="#work">
            See the work
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>

      {/* A ruled row, not boxes — the figure sits above its own caption. */}
      <dl className="stats">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
