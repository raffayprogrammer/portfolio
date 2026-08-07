import { skillGroups } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Toolkit"
          title="What I work with"
          description="Tools I've used to ship something real, not just read about."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.name} delay={i * 70} className="flex">
              <div className="card flex flex-1 flex-col p-6">
                <h3 className="font-mono text-xs tracking-widest text-faint uppercase">
                  {group.name}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-line bg-elevated px-3 py-1.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-text"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
