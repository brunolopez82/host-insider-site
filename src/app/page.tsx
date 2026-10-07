import Image from "next/image";
import { FadeIn, PrimaryCTA, SecondaryCTA } from "@/components/ui";

const STATS = [
  { stat: "3+ yrs", label: "Inside Airbnb's Resolutions team" },
  { stat: "3,000+", label: "Real disputes mediated" },
];

export default function Home() {
  return (
    <main className="tone-dark min-h-screen flex flex-col text-[color:var(--fg)]">
      <header className="px-6 pt-7">
        <div className="max-w-[1100px] mx-auto flex items-center gap-2.5">
          <Image
            src="/images/icon.webp"
            alt="Host Insider Pro"
            width={34}
            height={34}
            className="rounded-full"
            priority
          />
          <span className="font-bold text-[15px] tracking-tight">
            Host Insider <span className="text-orange">Pro</span>
          </span>
        </div>
      </header>

      <section className="flex-1 flex items-center px-6 py-14 md:py-20">
        <div className="max-w-[1100px] mx-auto w-full grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center">
          <FadeIn>
            <h1 className="text-[38px] sm:text-5xl md:text-[58px] font-extrabold leading-[1.05] tracking-[-0.035em]">
              Grow your Airbnb{" "}
              <span className="brand-gradient-text">like an insider</span>
            </h1>

            <p className="mt-6 text-white/60 text-lg md:text-xl leading-relaxed max-w-lg">
              A private, hosts-only community for Airbnb hosts. Built by someone
              who spent three years inside Airbnb&apos;s Resolutions team.
            </p>

            <p className="mt-4 font-accent text-2xl text-orange">
              Learn. Optimize. Protect. Grow.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <PrimaryCTA>Join Host Insider Pro</PrimaryCTA>
              <SecondaryCTA href="/start">See what&apos;s inside</SecondaryCTA>
            </div>

            <p className="mt-7 text-[15px]">
              <span className="font-bold text-amber">
                First 10 members join free, for life.
              </span>{" "}
              <span className="text-white/50">
                After that $5/month, locked in.
              </span>
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/hero.webp"
                alt="Bruno Lopes, founder of Host Insider Pro"
                width={1200}
                height={627}
                className="w-full h-auto"
                priority
              />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-5">
              {STATS.map((s) => (
                <div key={s.stat}>
                  <p className="brand-gradient-text text-2xl font-extrabold tracking-[-0.02em]">
                    {s.stat}
                  </p>
                  <p className="text-white/45 text-[13px] mt-1 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="px-6 pb-7">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-white/30 text-xs max-w-xl">
            Host Insider Pro is an independent community and is not affiliated
            with, endorsed by, or operated by Airbnb.
          </p>
          <a
            href="mailto:hello@hostinsider.app"
            className="text-white/40 hover:text-orange text-xs"
          >
            hello@hostinsider.app
          </a>
        </div>
      </footer>
    </main>
  );
}
