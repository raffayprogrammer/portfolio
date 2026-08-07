import { site } from "@/content/site";
import { ArrowUpRightIcon, SocialIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-elevated px-6 py-16 text-center sm:px-12 sm:py-24">
            {/* localised glow behind the CTA */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary opacity-20 blur-[110px]"
            />

            <div className="relative">
              <p className="font-mono text-xs tracking-widest text-accent uppercase">
                Contact
              </p>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
                Have data that needs to become <span className="text-gradient">useful</span>?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted text-pretty">
                I&apos;m open to freelance and full-time work. The fastest way to reach me is
                email — I reply to everything.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-white transition-all hover:brightness-110 hover:shadow-[0_0_36px_-6px_var(--primary)] sm:w-auto"
                >
                  {site.email}
                  <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <div className="flex items-center gap-1">
                  {site.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer noopener"
                      aria-label={social.label}
                      title={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-muted transition-colors hover:border-primary hover:text-accent"
                    >
                      <SocialIcon label={social.label} className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
