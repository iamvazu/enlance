import { Reveal } from "./Reveal";

export function SectionHeading({ eyebrow, title, lead, center = false, dark = false, as: H = "h2" }: {
  eyebrow?: string; title: string; lead?: string; center?: boolean; dark?: boolean; as?: "h1" | "h2";
}) {
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && <p className={`eyebrow ${center ? "justify-center" : ""} ${dark ? "!text-sky-accent" : ""}`}>{eyebrow}</p>}
      <H className={`h-section mt-3 ${dark ? "!text-white" : ""}`}>{title}</H>
      {lead && <p className={`lead mt-4 ${dark ? "!text-white/70" : ""}`}>{lead}</p>}
    </Reveal>
  );
}
