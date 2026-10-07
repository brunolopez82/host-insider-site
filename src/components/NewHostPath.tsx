import { FadeIn, Section, Heading, Eyebrow, Lead, SecondaryCTA } from "./ui";

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
    <Section tone="off">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <FadeIn>
          <Eyebrow>New to hosting?</Eyebrow>
          <Heading>Just starting your Airbnb?</Heading>
          <Lead className="mt-6">
            Start with the New Host Checklist: a practical checklist, not a
            boring course, covering everything worth getting right before your
            first guest.
          </Lead>
          <SecondaryCTA href="#whats-inside" className="mt-8">
            Start with the checklist
          </SecondaryCTA>
        </FadeIn>

        <FadeIn delay={0.15}>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
            {ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-text-muted text-sm"
              >
                <span className="text-orange mt-0.5 font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </Section>
  );
}
