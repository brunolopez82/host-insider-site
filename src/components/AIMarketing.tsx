import { FadeIn, Section, Heading, Eyebrow, Card } from "./ui";

export function AIMarketing() {
  return (
    <Section className="bg-deep-blue/20">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <FadeIn>
          <Eyebrow>Beyond the listing</Eyebrow>
          <Heading>Your airbnb business can be more than just airbnb.</Heading>
          <p className="mt-6 text-slate text-lg leading-relaxed">
            Your Airbnb listing is only one part of the business. We&apos;ll
            also explore how hosts can use AI, marketing and automation to
            save time, build visibility and create additional booking
            opportunities.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <Card>
            <p className="text-gold-soft font-semibold uppercase tracking-wide text-xs mb-3">
              Workshop
            </p>
            <h3 className="font-headline text-xl uppercase mb-3">
              Build Your Own Website — Without Hiring an Agency
            </h3>
            <p className="text-slate text-sm leading-relaxed mb-4">
              Learn to build a low-cost, professional website that can:
            </p>
            <ul className="space-y-2 text-slate text-sm">
              {[
                "Showcase your properties",
                "Leverage Instagram and Facebook traffic",
                "Generate direct enquiries",
                "Capture WhatsApp leads",
                "Support offline bookings",
                "Build an audience you don't entirely depend on Airbnb for",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold-soft mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-slate/60 text-xs italic">
              No guaranteed direct bookings. Results depend on your own effort and market.
            </p>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
