import Image from "next/image";
import { FadeIn, Section, Heading, Eyebrow, Lead } from "./ui";

export function WhyBruno() {
  return (
    <Section tone="dark">
      <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
        <FadeIn>
          <div className="relative rounded-xl overflow-hidden border border-white/10 max-w-[280px] aspect-square">
            <Image
              src="/images/hero-founder.jpg"
              alt="Bruno Lopes, founder of Host Insider Pro"
              fill
              style={{ objectFit: "cover", objectPosition: "75% 30%" }}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Eyebrow>Why learn from me?</Eyebrow>
          <Heading>Why Bruno?</Heading>

          <div className="mt-6 space-y-4 max-w-2xl">
            <Lead>I&apos;m Bruno.</Lead>
            <Lead>
              For more than 3 years, I worked inside Airbnb&apos;s Resolutions
              team, helping handle difficult situations between hosts and
              guests. Over that time, I mediated 3,000+ real disputes.
            </Lead>
            <Lead>
              That experience taught me something important: most hosting
              problems aren&apos;t completely random. Patterns exist.
            </Lead>
            <Lead>
              The goal of Host Insider Pro is to turn those patterns into
              practical guidance hosts can actually use.
            </Lead>
            <p className="text-white font-semibold text-lg leading-relaxed">
              I don&apos;t have secret Airbnb hacks. I don&apos;t manipulate
              Support. I don&apos;t promise outcomes.
            </p>
            <Lead>
              I share what I know, explain what I don&apos;t know, and keep the
              community focused on facts.
            </Lead>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
