import type { Metadata } from "next";
import Link from "next/link";
import Scorecard from "@/components/scorecard/Scorecard";
import { Footer } from "@/components/FinalCTAAndFooter";
import { Section, Eyebrow, Heading, Lead, FadeIn } from "@/components/ui";

export const metadata: Metadata = {
  title: "Free Airbnb Listing Scorecard — Host Insider Pro",
  description:
    "Score your Airbnb listing out of 100 across title, photos, cancellation policy, reviews, response time and pricing — and find out which fix is worth the most. Free, no account, built by someone with more than 3 years helping hosts.",
  openGraph: {
    title: "Free Airbnb Listing Scorecard — Host Insider Pro",
    description:
      "Six questions about your listing. One honest score, and the fixes ordered by what they cost you.",
    type: "website",
  },
};

export default function ScorecardPage() {
  return (
    <>
      <Section tone="peach" className="!pb-10">
        <div className="max-w-[760px] mx-auto text-center">
          <FadeIn>
            <Eyebrow>Free tool · Listing audit</Eyebrow>
            <Heading className="mb-5">
              Your listing scored out of 100,
              <br className="hidden md:block" /> and what to fix first.
            </Heading>
            <Lead className="max-w-[58ch] mx-auto">
              Most listing tools hand you a checklist. This one scores the six
              things that actually decide whether a guest opens your listing,
              then ranks the fixes by what they are costing you — including the
              one most hosts have in their messages that carries real account
              risk.
            </Lead>
          </FadeIn>
        </div>
      </Section>

      <Section tone="off" className="!pt-10">
        <Scorecard />
      </Section>

      <Section tone="light">
        <div className="max-w-[760px] mx-auto">
          <Eyebrow>How this is scored</Eyebrow>
          <Heading className="!text-2xl md:!text-3xl mb-5">
            Two categories here refuse to give you a simple answer.
          </Heading>
          <div className="grid md:grid-cols-2 gap-5">
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "var(--card-border)" }}
            >
              <h3 className="font-extrabold text-lg mb-2.5">
                Cancellation policy
              </h3>
              <p className="text-[15px] text-text-muted leading-relaxed mb-3">
                No policy is best. Flexible is the right answer for a city flat
                that refills a lost night inside a day, and an expensive
                mistake for a property that takes a week. So this scores the
                match between your policy and your real refill speed, not the
                policy on its own.
              </p>
              <Link
                href="/free/cancellation-policy/"
                className="text-[14px] font-bold accent-ink hover:underline"
              >
                The lesson behind it →
              </Link>
            </div>
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: "var(--card-border)" }}
            >
              <h3 className="font-extrabold text-lg mb-2.5">
                Strikethrough pricing
              </h3>
              <p className="text-[15px] text-text-muted leading-relaxed mb-3">
                You get no points for having a strikethrough showing. Airbnb
                calculates discounts from your 60-day median price, capped at
                your highest actually-booked price — so the 40% markup trick
                mostly does not do what it is sold as doing. The two plays that
                genuinely work are scored instead.
              </p>
              <Link
                href="/free/strikethrough-pricing/"
                className="text-[14px] font-bold accent-ink hover:underline"
              >
                The lesson behind it →
              </Link>
            </div>
          </div>

          <p className="text-sm text-text-light leading-relaxed mt-7">
            <strong>Nothing is read from Airbnb.</strong> This scores what you
            type, which is why it can ask the questions a scraper cannot — what
            your post-checkout message actually says, and how fast you really
            refill a cancelled night. Figures reflect the cancellation system
            Airbnb introduced on 1 October 2025, checked October 2026. Not legal
            or tax advice. I do not speak for Airbnb.
          </p>
        </div>
      </Section>

      <Footer />
    </>
  );
}
