import { about } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionHeading eyebrow="About" title="The short version" />

          <div className="space-y-6">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-lg leading-relaxed text-muted text-pretty">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
