import { site } from "@/content/site";
import Reveal from "./Reveal";

/** The email already has its own oversized link, so it isn't repeated here. */
const elsewhere = site.socials.filter((social) => !social.href.startsWith("mailto:"));

export default function Contact() {
  return (
    <section className="wrap rule contact" id="contact">
      <Reveal>
        <p className="label">Contact</p>
      </Reveal>

      <Reveal>
        <h2 style={{ marginTop: "1rem" }}>Have a process that should run itself?</h2>
      </Reveal>

      <Reveal>
        <p className="lede" style={{ marginTop: "1.5rem" }}>
          I&apos;m open to freelance and full-time work. The fastest way to reach me is email — I
          reply to everything.
        </p>
      </Reveal>

      <Reveal>
        <a className="mail" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </Reveal>

      {elsewhere.length > 0 && (
        <Reveal className="elsewhere">
          {elsewhere.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer noopener">
              {social.label}
            </a>
          ))}
        </Reveal>
      )}
    </section>
  );
}
