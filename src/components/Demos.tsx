import { demos } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Demos() {
  return (
    <section className="wrap rule" id="demos">
      <SectionHeading
        eyebrow="Walkthroughs"
        title="See them running"
        description="Short screen recordings of the systems above — what the user does, and what happens behind it."
      />

      <div className="demos">
        {demos.map((demo, i) => (
          <Reveal as="article" className="demo" key={demo.slug}>
            {/* preload="none" keeps twelve videos off the initial page load —
                the poster is all that's fetched until someone hits play. */}
            <video controls preload="none" playsInline poster={`/demos/${demo.slug}.png`}>
              <source src={`/demos/${demo.slug}.mp4`} type="video/mp4" />
              Your browser can&apos;t play this video.{" "}
              <a href={`/demos/${demo.slug}.mp4`}>Download it instead.</a>
            </video>

            <div className="demo-meta">
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{demo.title}</h3>
                <p>{demo.blurb}</p>
                <div className="pills">
                  {demo.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
