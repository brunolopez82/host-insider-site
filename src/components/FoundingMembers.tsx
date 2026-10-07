import { FadeIn, Section, Heading, Eyebrow, Lead, Card, PrimaryCTA } from "./ui";

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
    <Section tone="dark">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
        <FadeIn>
          <Eyebrow>Founding members</Eyebrow>
          <Heading>Help build the community from day one.</Heading>

          <div className="mt-6 space-y-4">
            <Lead>
              Right now, you won&apos;t find a massive library of finished
              courses. That&apos;s intentional.
            </Lead>
            <Lead>
              Host Insider Pro is being built around real host problems.
              Founding members help shape:
            </Lead>
          </div>

          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {SHAPES.map((s) => (
              <li
                key={s}
                className="flex items-start gap-2 text-[color:var(--fg-muted)] text-sm"
              >
                <span className="text-orange mt-0.5 font-bold">✓</span>
                {s}
              </li>
            ))}
          </ul>

          <p className="mt-8 font-accent text-2xl text-amber">
            &ldquo;I&apos;d rather create 10 resources hosts genuinely use than
            100 videos nobody watches.&rdquo;
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <Card className="text-center">
            <p className="text-amber text-sm font-bold uppercase tracking-[0.16em] mb-2">
              First 10 members
            </p>
            <p className="brand-gradient-text text-4xl font-extrabold tracking-[-0.03em] mb-6">
              Free for life
            </p>
            <div
              className="h-px my-6"
              style={{ background: "var(--divider)" }}
            />
            <p className="text-[color:var(--fg-muted)] text-sm mb-1">
              After the first 10
            </p>
            <p className="text-2xl font-extrabold mb-1">$9/month</p>
            <p className="text-[color:var(--fg-muted)] text-sm mb-8">
              Your founding price is locked in forever.
            </p>
            <PrimaryCTA className="w-full">Join Host Insider Pro</PrimaryCTA>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}
