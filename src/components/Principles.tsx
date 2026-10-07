import { FadeIn, Section, Heading, Eyebrow, Card } from "./ui";

const PRINCIPLES = [
  "Facts over hype",
  "Real cases over theory",
  "Hosts helping hosts",
  "No manipulation",
  "No toxicity",
  "Practical action over information overload",
];

export function Principles() {
  return (
    <Section tone="off">
      <FadeIn>
        <Eyebrow>How we do things here</Eyebrow>
        <Heading>Principles.</Heading>
      </FadeIn>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PRINCIPLES.map((p, i) => (
          <FadeIn key={p} delay={i * 0.06}>
            <Card className="text-center py-8">
              <p className="font-bold text-base tracking-[-0.02em]">{p}</p>
            </Card>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4}>
        <div className="mt-10 max-w-2xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-extrabold tracking-[-0.03em]">
            Airbnb is not your friend. Airbnb is not your enemy. It&apos;s a
            business partner.
          </p>
          <p className="mt-3 text-text-muted text-base leading-relaxed">
            The goal is to understand how the platform works and make better
            decisions.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}
