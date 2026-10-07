import { FadeIn, Section, Heading, Eyebrow, Lead } from "./ui";

const TRUST_POINTS = [
  { stat: "3+ yrs", label: "Inside Airbnb's Resolutions team" },
  { stat: "3,000+", label: "Real host & guest disputes mediated" },
  { stat: "Hosts only", label: "Positive, practical community" },
  { stat: "Fact-based", label: "No hype. No secret hacks." },
];

export function TrustStrip() {
  return (
    <div className="tone-dark px-6 py-14">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {TRUST_POINTS.map((t, i) => (
          <FadeIn key={t.stat} delay={i * 0.08} className="text-center md:text-left">
            <p className="brand-gradient-text text-2xl md:text-3xl font-extrabold tracking-[-0.02em]">
              {t.stat}
            </p>
            <p className="text-white/60 text-sm mt-1.5">{t.label}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

export function ProblemSection() {
  return (
    <Section tone="light">
      <div className="max-w-3xl">
        <FadeIn>
          <Eyebrow>The reality of hosting</Eyebrow>
          <Heading>Hosting gets complicated fast.</Heading>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-6 space-y-4">
            <Lead>
              One guest complaint can turn into a refund request. One
              reservation problem can create hours of stress. One bad review
              can leave you wondering what to do next.
            </Lead>
            <Lead>
              And when bookings slow down, most hosts start searching Facebook
              for answers, only to find conflicting opinions, outdated advice
              and &ldquo;algorithm hacks.&rdquo;
            </Lead>
            <Lead>
              Host Insider Pro exists to give hosts a better place to learn,
              ask questions and solve real problems together.
            </Lead>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-8 text-2xl md:text-3xl font-extrabold tracking-[-0.03em]">
            You don&apos;t have to figure it out alone.
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
