import { projects } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section className="wrap rule" id="work">
      <SectionHeading
        eyebrow="Selected work"
        title="Systems built end to end"
        description="From the API call that starts the process to the moment a person stops doing the job by hand."
      />

      <div className="index">
        {projects.map((project, i) => (
          <Reveal as="article" className="row" key={project.title}>
            {/* Padded so the index reads 01…07 rather than 1…7 */}
            <div className="row-num">{String(i + 1).padStart(2, "0")}</div>

            <div>
              <h3>{project.title}</h3>
              <p className="label row-tag">{project.period}</p>
            </div>

            <div>
              <p>{project.summary}</p>
              <p className="p2">{project.detail}</p>

              {project.metrics.length > 0 && (
                <div className="figs">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <b>{metric.value}</b>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="pills">
                {project.stack.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>

              {project.href && (
                <a
                  className="row-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View project
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
