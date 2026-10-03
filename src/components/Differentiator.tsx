import { FadeIn, Section, Heading, Eyebrow } from "./ui";

const BADGES = ["Hosts Only", "No Toxicity", "No Guest-Bashing", "No Drama"];

export function Differentiator() {
  return (
    <Section className="bg-deep-blue/20">
      <div className="max-w-3xl">
        <FadeIn>
          <Eyebrow>What makes this different</Eyebrow>
          <Heading>Not another facebook group.</Heading>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-6 space-y-4 text-slate text-lg leading-relaxed">
            <p>
              Most large hosting groups mix hosts and guests, which can
              quickly turn useful conversations into arguments.
            </p>
            <p>Host Insider Pro is different. It&apos;s built exclusively for hosts.</p>
            <p>A positive environment where hosts can ask questions, share experiences, discuss real problems, learn from each other, build relationships, and improve their businesses.</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-3">
            {BADGES.map((b) => (
              <span
                key={b}
                className="rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-gold-soft font-semibold uppercase tracking-wide text-xs md:text-sm"
              >
                {b}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
