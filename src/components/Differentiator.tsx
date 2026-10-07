import { FadeIn, Section, Heading, Eyebrow, Lead } from "./ui";

const BADGES = ["Hosts only", "No toxicity", "No guest-bashing", "No drama"];

export function Differentiator() {
  return (
    <Section tone="peach">
      <div className="max-w-3xl">
        <FadeIn>
          <Eyebrow>What makes this different</Eyebrow>
          <Heading>Not another Facebook group.</Heading>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-6 space-y-4">
            <Lead>
              Most large hosting groups mix hosts and guests, which can quickly
              turn useful conversations into arguments.
            </Lead>
            <Lead>
              Host Insider Pro is different. It&apos;s built exclusively for
              hosts.
            </Lead>
            <Lead>
              A positive environment where hosts can ask questions, share
              experiences, discuss real problems, learn from each other, build
              relationships, and improve their businesses.
            </Lead>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-3">
            {BADGES.map((b) => (
              <span
                key={b}
                className="rounded-full bg-white border border-orange/20 px-5 py-2 text-orange-deep font-bold text-xs md:text-sm"
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
