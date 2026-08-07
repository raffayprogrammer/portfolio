import { site, stats } from "@/content/site";
import { ArrowUpRightIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h1 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            <span className="text-gradient">{site.name}</span>
            <span className="block text-muted">{site.role}</span>
          </h1>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted text-pretty">
            {site.tagline}
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white transition-all hover:brightness-110 hover:shadow-[0_0_32px_-6px_var(--primary)]"
            >
              View my work
              <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        {/* Stats strip */}
        <Reveal delay={240}>
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
