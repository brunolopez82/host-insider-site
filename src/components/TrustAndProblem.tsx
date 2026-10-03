import { FadeIn, Section, Heading, Eyebrow } from "./ui";

const TRUST_POINTS = [
  { stat: "3+ YEARS", label: "Inside Airbnb's Resolutions team" },
  { stat: "3,000+", label: "Real host & guest disputes mediated" },
  { stat: "HOSTS ONLY", label: "Positive, practical community" },
  { stat: "FACT-BASED", label: "No hype. No secret hacks." },
];

export function TrustStrip() {
  return (
    <div className="border-b border-border/60 bg-deep-blue/40">
      <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {TRUST_POINTS.map((t, i) => (
          <FadeIn key={t.stat} delay={i * 0.08} className="text-center md:text-left">
            <p className="font-headline text-xl md:text-2xl text-gold-soft">{t.stat}</p>
            <p className="text-slate text-sm mt-1">{t.label}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

export function ProblemSection() {
  return (
    <Section>
      <div className="max-w-3xl">
        <FadeIn>
          <Eyebrow>The reality of hosting</Eyebrow>
          <Heading>Hosting gets complicated fast.</Heading>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-6 space-y-4 text-slate text-lg leading-relaxed">
            <p>
              One guest complaint can turn into a refund request. One
              reservation problem can create hours of stress. One bad review
              can leave you wondering what to do next.
            </p>
            <p>
              And when bookings slow down, most hosts start searching
              Facebook for answers, only to find conflicting opinions,
              outdated advice and &ldquo;algorithm hacks.&rdquo;
            </p>
            <p>
              Host Insider Pro exists to give hosts a better place to learn,
              ask questions and solve real problems together.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-8 font-headline text-xl md:text-2xl text-white">
            You don&apos;t have to figure it out alone.
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
