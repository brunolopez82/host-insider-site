import { FadeIn, Section, Heading, Eyebrow, Lead, Card } from "./ui";

const BENEFITS = [
  "Showcase your properties",
  "Leverage Instagram and Facebook traffic",
  "Generate direct enquiries",
  "Capture WhatsApp leads",
  "Support offline bookings",
  "Build an audience you don't entirely depend on Airbnb for",
];

export function AIMarketing() {
  return (
    <Section tone="light">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <FadeIn>
          <Eyebrow>Beyond the listing</Eyebrow>
          <Heading>Your Airbnb business can be more than just Airbnb.</Heading>
          <Lead className="mt-6">
            Your Airbnb listing is only one part of the business. We&apos;ll
            also explore how hosts can use AI, marketing and automation to
            save time, build visibility and create additional booking
            opportunities.
          </Lead>
        </FadeIn>

        <FadeIn delay={0.15}>
          <Card>
            <p className="accent-ink font-bold uppercase tracking-[0.16em] text-xs mb-3">
              Workshop
            </p>
            <h3 className="text-xl font-extrabold mb-3 tracking-[-0.02em]">
              Build your own website — without hiring an agency
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              Learn to build a low-cost, professional website that can:
            </p>
            <ul className="space-y-2 text-text-muted text-sm">
              {BENEFITS.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="accent-ink mt-0.5 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-text-light text-xs">
              No guaranteed direct bookings. Results depend on your own effort
              and market.
            </p>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
