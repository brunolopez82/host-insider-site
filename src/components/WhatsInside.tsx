import { FadeIn, Section, Heading, Eyebrow, Lead, Card } from "./ui";

const CARDS = [
  {
    n: "01",
    title: "Listing optimization",
    copy: "Photos, titles, descriptions, guest expectations and practical ways to make your listing stronger.",
  },
  {
    n: "02",
    title: "Pricing & growth",
    copy: "Pricing strategy, occupancy, revenue thinking, marketing, direct bookings and systems to help you grow.",
  },
  {
    n: "03",
    title: "AI & automation",
    copy: "Use AI, automation and modern tools to save time, improve your workflow and build better marketing systems.",
  },
  {
    n: "04",
    title: "Host protection",
    copy: "Real-world scenarios, refunds, disputes, guest problems, support cases, documentation and practical playbooks.",
  },
];

export function WhatsInside() {
  return (
    <Section id="whats-inside" tone="off">
      <FadeIn>
        <Eyebrow>What&apos;s inside</Eyebrow>
        <Heading className="max-w-3xl">
          Everything you need to build a better Airbnb business.
        </Heading>
      </FadeIn>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {CARDS.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.08}>
            <Card className="h-full">
              <p className="brand-gradient-text text-2xl font-extrabold mb-3">
                {c.n}
              </p>
              <h3 className="text-lg font-bold mb-2 tracking-[-0.02em]">
                {c.title}
              </h3>
              <p className="text-[color:var(--fg-muted)] text-sm leading-relaxed">
                {c.copy}
              </p>
            </Card>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <Card className="mt-5">
          <p className="font-accent text-2xl accent-ink mb-1">Host Hangout</p>
          <Lead className="max-w-2xl">
            Live conversations with other hosts. Bring your real case. Ask
            questions. Share experiences. Learn from each other.
          </Lead>
        </Card>
      </FadeIn>
    </Section>
  );
}
