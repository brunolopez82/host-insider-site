import { FadeIn, Section, Heading, Eyebrow, Card } from "./ui";

const FOR = [
  "You're an Airbnb host.",
  "You want to improve your listing.",
  "You want more bookings.",
  "You want to understand pricing better.",
  "You want to use AI and automation.",
  "You want practical help with difficult situations.",
  "You want to learn from other hosts.",
  "You prefer facts over Facebook myths.",
];

const NOT_FOR = [
  "You're looking for secret algorithm hacks.",
  "You want to manipulate Airbnb Support.",
  "You want guest-bashing or toxic discussions.",
  "You're looking for legal or tax advice.",
  "You want guaranteed income.",
];

export function WhoThisIsFor() {
  return (
    <Section tone="light">
      <FadeIn>
        <Eyebrow>Fit check</Eyebrow>
        <Heading>This community is for you if...</Heading>
      </FadeIn>

      <div className="mt-10 grid md:grid-cols-2 gap-5">
        <FadeIn delay={0.1}>
          <Card className="h-full">
            <ul className="space-y-3">
              {FOR.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-text-muted text-base"
                >
                  <span className="accent-ink mt-0.5 shrink-0 font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Card className="h-full">
            <p className="font-bold text-sm uppercase tracking-[0.16em] text-text-light mb-4">
              Not for you if...
            </p>
            <ul className="space-y-3">
              {NOT_FOR.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-text-light text-base"
                >
                  <span className="mt-0.5 shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
