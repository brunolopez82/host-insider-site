import { FadeIn, Section, Heading, Eyebrow, Card, PrimaryCTA } from "./ui";

const SHAPES = [
  "Future courses",
  "Workshops",
  "Templates",
  "Playbooks",
  "AI tools",
  "Case studies",
  "Community discussions",
];

export function FoundingMembers() {
  return (
    <Section>
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
        <FadeIn>
          <Eyebrow>Founding members</Eyebrow>
          <Heading>Help build the community from day one.</Heading>

          <div className="mt-6 space-y-4 text-slate text-lg leading-relaxed">
            <p>
              Right now, you won&apos;t find a massive library of finished
              courses. That&apos;s intentional.
            </p>
            <p>
              Host Insider Pro is being built around real host problems.
              Founding members help shape:
            </p>
          </div>

          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
            {SHAPES.map((s) => (
              <li key={s} className="flex items-start gap-2 text-slate text-sm">
                <span className="text-gold-soft mt-0.5">✓</span>
                {s}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-white font-medium italic">
            &ldquo;I&apos;d rather create 10 resources hosts genuinely use
            than 100 videos nobody watches.&rdquo;
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <Card className="text-center">
            <p className="font-headline text-gold-soft text-2xl mb-1">
              First 10 Members
            </p>
            <p className="font-headline text-3xl md:text-4xl uppercase mb-6">
              Free for life
            </p>
            <div className="h-px bg-border my-6" />
            <p className="text-slate text-sm mb-1">After the first 10</p>
            <p className="font-headline text-2xl text-white mb-1">$9/month</p>
            <p className="text-slate text-sm mb-8">
              Your founding price is locked in forever.
            </p>
            <PrimaryCTA className="w-full">Join Host Insider Pro</PrimaryCTA>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
