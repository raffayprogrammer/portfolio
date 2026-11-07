import Reveal from "./Reveal";

type Props = {
  /** Small mono label in the left column, e.g. "Selected work". */
  eyebrow: string;
  title: string;
  description?: string;
};

/**
 * Swiss section head: the label holds column 1, the title and lede run
 * across the rest. The asymmetry is the point — it is what keeps the page
 * reading as an index rather than a stack of centred blocks.
 */
export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <Reveal className="shead">
      <p className="label">{eyebrow}</p>
      <div>
        <h2>{title}</h2>
        {description && <p className="lede">{description}</p>}
      </div>
    </Reveal>
  );
}
