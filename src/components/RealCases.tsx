import { FadeIn, Section, Heading, Eyebrow, Card } from "./ui";

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

const FRAMEWORK = ["Situation", "What matters", "What to document", "How to communicate", "What to consider next"];

export function RealCases() {
  return (
    <Section>
      <FadeIn>
        <Eyebrow>Host Casebook</Eyebrow>
        <Heading>When something goes wrong, know what to do next.</Heading>
        <p className="mt-6 text-slate text-lg leading-relaxed max-w-2xl">
          The Host Casebook is built around real hosting situations, broken
          down the same way every time.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-8 flex flex-wrap items-center gap-2 text-sm md:text-base">
          {FRAMEWORK.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-gold-soft font-semibold uppercase tracking-wide text-xs md:text-sm">
                {step}
              </span>
              {i < FRAMEWORK.length - 1 && <span className="text-slate">→</span>}
            </span>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <Card className="mt-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {SITUATIONS.map((s) => (
              <p key={s} className="text-slate text-sm flex items-start gap-2">
                <span className="text-gold-soft">•</span>
                {s}
              </p>
            ))}
          </div>
        </Card>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="mt-6 text-slate/70 text-sm italic">
          Guidance, not guarantees. No outcome is promised for any specific case.
        </p>
      </FadeIn>
    </Section>
  );
}
