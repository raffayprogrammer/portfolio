import { site, stats } from "@/content/site";
import { ArrowUpRightIcon, DownloadIcon, SocialIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-elevated/60 px-3 py-1.5 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for work · {site.location}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 max-w-4xl text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            <span className="text-gradient">{site.name}</span>
            <span className="block text-muted">{site.role}</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted text-pretty">
            {site.tagline}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white transition-all hover:brightness-110 hover:shadow-[0_0_32px_-6px_var(--primary)]"
            >
              View my work
              <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {site.resumeUrl && (
              <a
                href={site.resumeUrl}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line-strong bg-elevated px-5 py-3 text-sm font-medium text-text transition-colors hover:border-primary hover:text-accent"
              >
                <DownloadIcon />
                Résumé
              </a>
            )}

            <div className="ml-1 flex items-center gap-1">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  title={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-muted transition-colors hover:bg-elevated hover:text-accent"
                >
                  <SocialIcon label={social.label} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Stats strip */}
        <Reveal delay={320}>
          <dl className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {/* col-reverse: the number reads above its label while dt stays first in the DOM */}
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1 bg-bg px-6 py-7">
                <dt className="text-sm text-faint">{stat.label}</dt>
                <dd className="font-mono text-3xl font-semibold tracking-tight text-text">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
