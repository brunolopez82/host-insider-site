import { FadeIn, Section, Heading, Eyebrow, Card } from "./ui";

const CARDS = [
  {
    icon: "🏡",
    title: "Listing Optimization",
    copy: "Photos, titles, descriptions, guest expectations and practical ways to make your listing stronger.",
  },
  {
    icon: "📈",
    title: "Pricing & Growth",
    copy: "Pricing strategy, occupancy, revenue thinking, marketing, direct bookings and systems to help you grow.",
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    copy: "Use AI, automation and modern tools to save time, improve your workflow and build better marketing systems.",
  },
  {
    icon: "🛡️",
    title: "Host Protection",
    copy: "Real-world scenarios, refunds, disputes, guest problems, support cases, documentation and practical playbooks.",
  },
];

export function WhatsInside() {
  return (
    <Section id="whats-inside" className="bg-deep-blue/20">
      <FadeIn>
        <Eyebrow>What&apos;s inside</Eyebrow>
        <Heading>Everything you need to build a better airbnb business.</Heading>
      </FadeIn>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CARDS.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.08}>
            <Card className="h-full">
              <div className="text-3xl mb-4">{c.icon}</div>
              <h3 className="font-headline text-lg uppercase mb-2">{c.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{c.copy}</p>
            </Card>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <Card className="mt-6 md:flex md:items-center md:justify-between gap-6">
          <div>
            <div className="text-3xl mb-2">☕</div>
            <h3 className="font-headline text-lg uppercase mb-2">Host Hangout</h3>
            <p className="text-slate text-sm leading-relaxed max-w-xl">
              Live conversations with other hosts. Bring your real case. Ask
              questions. Share experiences. Learn from each other.
            </p>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}
