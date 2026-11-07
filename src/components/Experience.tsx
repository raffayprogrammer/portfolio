import { experience } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section className="wrap rule" id="experience">
      <SectionHeading eyebrow="Background" title="Where I've been" />

      <ol className="cv">
        {experience.map((item) => (
          <Reveal as="li" className="cv-row" key={`${item.org}-${item.role}`}>
            <div>
              {/* An ongoing role shows only its start — never "Present". */}
              <p className="cv-when">{item.end ? `${item.start} — ${item.end}` : item.start}</p>
              <p className="cv-org">{item.org}</p>
            </div>

            <div>
              {item.duration && <p className="label label-accent">{item.duration}</p>}
              <h3>{item.role}</h3>
              <ul className="cv-points">
                {item.points.map((point) => (
                  <li key={point.slice(0, 32)}>{point}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
