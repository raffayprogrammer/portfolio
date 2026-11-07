import { demos } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Demos() {
  return (
    <section id="demos" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Walkthroughs"
          title="See them running"
          description="Short screen recordings of the systems above — what the user does, and what happens behind it."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {demos.map((demo, i) => (
            <Reveal key={demo.slug} delay={(i % 2) * 80} className="flex">
              <article className="card flex flex-1 flex-col overflow-hidden">
                {/* preload="none" keeps twelve videos off the initial page load —
                    the poster is all that's fetched until someone hits play. */}
                <video
                  controls
                  preload="none"
                  playsInline
                  poster={`/demos/${demo.slug}.png`}
                  className="aspect-video w-full bg-elevated object-cover"
                >
                  <source src={`/demos/${demo.slug}.mp4`} type="video/mp4" />
                  Your browser can&apos;t play this video.{" "}
                  <a href={`/demos/${demo.slug}.mp4`}>Download it instead.</a>
                </video>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-lg font-semibold tracking-tight text-text">{demo.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{demo.blurb}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {demo.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md border border-line bg-elevated px-2.5 py-1 font-mono text-xs text-muted"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
