import { about } from "@/content/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="wrap rule" id="about">
      <div className="shead">
        <Reveal>
          <p className="label">About</p>
        </Reveal>
        <div>
          <Reveal>
            <h2>The short version</h2>
          </Reveal>
          {about.paragraphs.map((paragraph, i) => (
            <Reveal key={paragraph.slice(0, 32)} delay={i * 60}>
              <p className="lede" style={{ maxWidth: "60ch", marginTop: "1.5rem" }}>
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
