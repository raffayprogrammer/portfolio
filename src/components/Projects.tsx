import { projects } from "@/content/site";
import { ArrowUpRightIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Project = (typeof projects)[number];

function ProjectCard({ project, featured }: { project: Project; featured: boolean }) {
  const hasLink = project.href !== "";

  const body = (
    <>
      <div className="flex items-start justify-between gap-4">
        <h3
          className={`font-semibold tracking-tight text-text ${featured ? "text-xl sm:text-2xl" : "text-lg"}`}
        >
          {project.title}
        </h3>
        <span className="mt-1 shrink-0 font-mono text-xs text-faint">{project.period}</span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>

      {/* The detail paragraph is where the actual engineering story lives, so it
          renders on every card — featured ones just get more room for it. */}
      <p className="mt-3 text-sm leading-relaxed text-faint">{project.detail}</p>

      {project.metrics.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-5">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="font-mono text-lg font-semibold text-accent">{metric.value}</div>
              <div className="text-xs text-faint">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-line bg-elevated px-2.5 py-1 font-mono text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      {hasLink && (
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors group-hover:text-accent">
          View project
          <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      )}
    </>
  );

  // flex-1 so cards in the same grid row match height
  const classes = `card group flex flex-1 flex-col p-6 sm:p-7 ${hasLink ? "cursor-pointer" : ""}`;

  return hasLink ? (
    <a href={project.href} target="_blank" rel="noreferrer noopener" className={classes}>
      {body}
    </a>
  ) : (
    <article className={classes}>{body}</article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Systems I built end to end"
          description="From the API call that fetches the data to the number a stakeholder reads — including the parts that failed silently until someone went looking."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.title} delay={i * 80} className="flex">
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {rest.map((project, i) => (
              <Reveal key={project.title} delay={i * 80} className="flex">
                <ProjectCard project={project} featured={false} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
