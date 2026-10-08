import Image from "next/image";
import { FadeIn, PrimaryCTA, SecondaryCTA, FoundingOfferBadge } from "./ui";

export function Hero() {
  return (
    <section className="tone-light relative overflow-hidden">
      <div className="relative max-w-[1200px] mx-auto px-6 pt-14 pb-16 md:pt-20 md:pb-24 grid md:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <div className="flex items-center gap-2.5 mb-8">
            <Image
              src="/images/icon.webp"
              alt="Host Insider Pro"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="font-bold text-base tracking-tight">
              Host Insider <span className="accent-ink">Pro</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-[52px] font-extrabold leading-[1.08] tracking-[-0.03em]">
            Grow your Airbnb{" "}
            <span className="brand-gradient-text">like an insider</span>
          </h1>

          <p className="mt-6 text-text-muted text-lg leading-relaxed max-w-xl">
            A private, hosts-only community for Airbnb hosts who want better
            listings, more bookings, smarter systems, and practical guidance
            when things go wrong.
          </p>

          <p className="mt-4 font-accent text-2xl accent-ink">
            Learn. Optimize. Protect. Grow.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <PrimaryCTA>Join Host Insider Pro</PrimaryCTA>
            <SecondaryCTA href="#whats-inside">See what&apos;s inside</SecondaryCTA>
          </div>

          <FoundingOfferBadge className="mt-8" />
        </FadeIn>

        <FadeIn delay={0.15} className="relative">
          <div className="relative rounded-xl overflow-hidden border border-black/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/avatar.webp"
              alt="Bruno, founder of Host Insider Pro"
              width={520}
              height={520}
              className="w-full h-auto"
              priority
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
