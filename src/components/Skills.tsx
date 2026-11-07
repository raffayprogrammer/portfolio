import { skillGroups } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section className="wrap rule" id="kit">
      <SectionHeading
        eyebrow="Toolkit"
        title="What I work with"
        description="Tools I've used to ship something real, not just read about."
      />

      <div className="kit">
        {skillGroups.map((group) => (
          <Reveal className="kit-row" key={group.name}>
            <p className="label">{group.name}</p>
            <ul className="kit-items">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
