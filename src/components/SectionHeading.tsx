import Reveal from "./Reveal";

type Props = {
  /** Small mono label above the title, e.g. "01 / Work" */
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <Reveal>
      <div className="max-w-2xl">
        <p className="font-mono text-xs tracking-widest text-accent uppercase">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-muted text-pretty">{description}</p>
        )}
      </div>
    </Reveal>
  );
}
