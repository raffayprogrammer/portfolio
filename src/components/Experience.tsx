import { experience } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Background" title="Where I've been" />

        <ol className="mt-14 space-y-0">
          {experience.map((item, i) => (
            <Reveal key={`${item.org}-${item.role}`} delay={i * 80} as="li">
              {/* left rule + dot form the timeline spine */}
              <div className="relative border-l border-line pb-12 pl-8 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_14px_2px_var(--primary)]"
                />

                <p className="font-mono text-xs tracking-widest text-faint uppercase">
                  {item.start} — {item.end}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-text">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-accent">{item.org}</p>

                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-5 text-sm leading-relaxed text-muted before:absolute before:top-2.5 before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-line-strong"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
