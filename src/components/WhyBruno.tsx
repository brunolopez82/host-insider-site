import Image from "next/image";
import { FadeIn, Section, Heading, Eyebrow } from "./ui";

export function WhyBruno() {
  return (
    <Section>
      <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
        <FadeIn>
          <div className="relative rounded-[18px] overflow-hidden border border-border max-w-[280px] aspect-square">
            <Image
              src="/images/hero-founder.png"
              alt="Bruno Lopes, founder of Host Insider Pro"
              fill
              style={{ objectFit: "cover", objectPosition: "75% 30%" }}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Eyebrow>Why learn from me?</Eyebrow>
          <Heading>Why Bruno?</Heading>

          <div className="mt-6 space-y-4 text-slate text-lg leading-relaxed max-w-2xl">
            <p>I&apos;m Bruno.</p>
            <p>
              For more than 3 years, I worked inside Airbnb&apos;s
              Resolutions team, helping handle difficult situations between
              hosts and guests. Over that time, I mediated 3,000+ real
              disputes.
            </p>
            <p>That experience taught me something important: most hosting problems aren&apos;t completely random. Patterns exist.</p>
            <p>
              The goal of Host Insider Pro is to turn those patterns into
              practical guidance hosts can actually use.
            </p>
            <p className="text-white font-medium">
              I don&apos;t have secret Airbnb hacks. I don&apos;t manipulate
              Support. I don&apos;t promise outcomes.
            </p>
            <p>
              I share what I know, explain what I don&apos;t know, and keep
              the community focused on facts.
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
