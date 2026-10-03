import { FadeIn, Section, Heading, Eyebrow, SecondaryCTA } from "./ui";

const ITEMS = [
  "Airbnb terms and conditions",
  "Host responsibilities",
  "Local requirements",
  "Payout setup",
  "Account verification",
  "Cancellation settings",
  "House rules",
  "Guest requirements",
  "Pricing",
  "Availability",
  "Listing photos",
  "Description",
  "Check-in",
  "Final listing audit",
];

export function NewHostPath() {
  return (
    <Section className="bg-deep-blue/20">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <FadeIn>
          <Eyebrow>New to hosting?</Eyebrow>
          <Heading>Just starting your airbnb?</Heading>
          <p className="mt-6 text-slate text-lg leading-relaxed">
            Start with the New Host Checklist: a practical checklist, not a
            boring course, covering everything worth getting right before
            your first guest.
          </p>
          <SecondaryCTA href="#whats-inside" className="mt-8">
            Start With The Checklist
          </SecondaryCTA>
        </FadeIn>

        <FadeIn delay={0.15}>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
            {ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-slate text-sm">
                <span className="text-gold-soft mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </Section>
  );
}
