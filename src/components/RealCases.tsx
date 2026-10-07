import { FadeIn, Section, Heading, Eyebrow, Lead, Card } from "./ui";

const SITUATIONS = [
  "Guest requests a refund",
  "Property damage",
  "Unauthorized guests",
  "Guest wants to leave early",
  "Double booking",
  "Third-party booking",
  "Difficult review",
  "Payment issue",
  "Guest complaint",
  "Airbnb Support case",
  "Evidence and documentation",
  "Host cancellation situations",
];

const FRAMEWORK = [
  "Situation",
  "What matters",
  "What to document",
  "How to communicate",
  "What to consider next",
];

export function RealCases() {
  return (
    <Section tone="dark">
      <FadeIn>
        <Eyebrow>Host Casebook</Eyebrow>
        <Heading className="max-w-3xl">
          When something goes wrong, know what to do next.
        </Heading>
        <Lead className="mt-6 max-w-2xl">
          The Host Casebook is built around real hosting situations, broken
          down the same way every time.
        </Lead>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-8 flex flex-wrap items-center gap-2 text-sm">
          {FRAMEWORK.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span className="rounded-full brand-gradient-soft border border-orange/20 px-4 py-2 text-amber font-semibold text-xs md:text-sm">
                {step}
              </span>
              {i < FRAMEWORK.length - 1 && (
                <span className="text-white/35">→</span>
              )}
            </span>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <Card className="mt-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {SITUATIONS.map((s) => (
              <p
                key={s}
                className="text-[color:var(--fg-muted)] text-sm flex items-start gap-2"
              >
                <span className="text-orange">•</span>
                {s}
              </p>
            ))}
          </div>
        </Card>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="mt-6 text-white/35 text-sm">
          Guidance, not guarantees. No outcome is promised for any specific case.
        </p>
      </FadeIn>
    </Section>
  );
}
