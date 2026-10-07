import Image from "next/image";
import { FadeIn, PrimaryCTA } from "@/components/ui";

const PROOF = [
  { n: "3+ yrs", d: "Inside Airbnb's Resolutions team, handling disputes between hosts and guests." },
  { n: "3,000+", d: "Real host and guest disputes mediated, which is where the patterns come from." },
  { n: "Hosts only", d: "No guests in the room, so conversations stay useful instead of turning into arguments." },
];

const REMOVES = [
  "Hosts only. No guests, no arguments.",
  "I personally reply to every post.",
  "7-day free trial. Cancel anytime.",
];

function CtaBlock() {
  return (
    <div className="flex flex-col items-center">
      <PrimaryCTA className="text-[15px] px-9 py-4">
        Join Host Insider Pro →
      </PrimaryCTA>
      <p className="mt-3.5 text-white/40 text-[13px]">
        7-day free trial. First 10 members join free, for life.
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="tone-dark min-h-screen flex flex-col text-[color:var(--fg)]">
      <header className="px-6 pt-7">
        <div className="max-w-[1000px] mx-auto flex items-center gap-2.5">
          <Image
            src="/images/icon.webp"
            alt="Host Insider Pro"
            width={32}
            height={32}
            className="rounded-full"
            priority
          />
          <span className="font-bold text-[15px] tracking-tight">
            Host Insider <span className="text-orange">Pro</span>
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-14 pb-16 md:pt-20 md:pb-20 text-center">
        <div className="max-w-[820px] mx-auto">
          <FadeIn>
            <p className="text-orange text-xs md:text-[13px] font-bold tracking-[0.18em] uppercase">
              Private community for Airbnb hosts
            </p>

            <h1 className="mt-6 text-[40px] sm:text-[52px] md:text-[60px] font-extrabold leading-[1.04] tracking-[-0.035em]">
              You don&apos;t have to figure out
              <br className="hidden sm:block" />{" "}
              <span className="brand-gradient-text">Airbnb on your own</span>
            </h1>

            <p className="mt-7 text-white/60 text-lg md:text-xl leading-relaxed max-w-[640px] mx-auto">
              A private, hosts-only community where real hosting problems get
              real answers. Bring the guest situation you&apos;re stuck on and
              get a straight reply, not fifty opinions.
            </p>

            <div className="mt-10">
              <CtaBlock />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-14 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-9 gap-y-3.5">
              {REMOVES.map((r) => (
                <span
                  key={r}
                  className="flex items-center gap-2.5 text-white/70 text-[15px]"
                >
                  <span className="text-orange font-bold">✓</span>
                  {r}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why listen to me */}
      <section className="px-6 py-16 md:py-20 border-t border-white/[0.07]">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn>
            <h2 className="text-center text-2xl md:text-[32px] font-extrabold tracking-[-0.03em]">
              Why listen to me?
            </h2>

            <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-11 max-w-[760px] mx-auto">
              <div className="relative w-[150px] h-[150px] shrink-0 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/hero.webp"
                  alt="Bruno Lopes, founder of Host Insider Pro"
                  fill
                  style={{ objectFit: "cover", objectPosition: "75% 30%" }}
                />
              </div>

              <div className="text-center md:text-left">
                <p className="text-white/70 text-lg leading-relaxed">
                  I&apos;m Bruno. I spent three years inside Airbnb&apos;s
                  Resolutions team, mediating disputes between hosts and guests.
                  Most hosting problems aren&apos;t random — they follow
                  patterns. This community turns those patterns into guidance
                  you can actually use.
                </p>
                <p className="mt-4 text-white/45 text-[15px] leading-relaxed">
                  No secret hacks. No manipulating Support. No promised
                  outcomes.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-14 grid sm:grid-cols-3 gap-9 max-w-[880px] mx-auto text-center sm:text-left">
              {PROOF.map((p) => (
                <div key={p.n}>
                  <p className="brand-gradient-text text-[28px] font-extrabold tracking-[-0.02em]">
                    {p.n}
                  </p>
                  <p className="mt-2 text-white/45 text-sm leading-relaxed">
                    {p.d}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 py-16 md:py-20 border-t border-white/[0.07] text-center">
        <FadeIn>
          <h2 className="text-2xl md:text-[34px] font-extrabold tracking-[-0.03em] max-w-[620px] mx-auto leading-[1.15]">
            Ready to stop guessing your way through it?
          </h2>
          <div className="mt-9">
            <CtaBlock />
          </div>
          <p className="mt-9">
            <a
              href="/start"
              className="text-white/40 hover:text-orange text-sm underline underline-offset-4"
            >
              Or see everything that&apos;s inside first
            </a>
          </p>
        </FadeIn>
      </section>

      <footer className="px-6 py-9 border-t border-white/[0.07]">
        <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-white/25 text-xs max-w-xl leading-relaxed">
            Host Insider Pro is an independent community and is not affiliated
            with, endorsed by, or operated by Airbnb.
          </p>
          <a
            href="mailto:hello@hostinsider.app"
            className="text-white/35 hover:text-orange text-xs shrink-0"
          >
            hello@hostinsider.app
          </a>
        </div>
      </footer>
    </main>
  );
}
