import Image from "next/image";
import { FadeIn, PrimaryCTA, SecondaryCTA, FoundingOfferBadge } from "./ui";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 hero-gradient opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,166,58,0.12),transparent_60%)]" />

      <div className="relative max-w-[1200px] mx-auto px-6 pt-16 pb-14 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <Image
              src="/images/icon.png"
              alt="Host Insider Pro"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-headline text-lg tracking-wide">
              HOST INSIDER <span className="text-gold-soft">PRO</span>
            </span>
          </div>

          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl leading-[1.05] uppercase">
            Grow your airbnb
            <br />
            <span className="gold-gradient-text">like an insider</span>
          </h1>

          <p className="mt-6 text-slate text-lg md:text-xl max-w-xl">
            A private, hosts-only community for Airbnb hosts who want better
            listings, more bookings, smarter systems, and practical guidance
            when things go wrong.
          </p>

          <p className="mt-3 text-gold-soft font-semibold tracking-wide uppercase text-sm md:text-base">
            Learn. Optimize. Protect. Grow.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <PrimaryCTA>Join Host Insider Pro</PrimaryCTA>
            <SecondaryCTA href="#whats-inside">See What&apos;s Inside</SecondaryCTA>
          </div>

          <FoundingOfferBadge className="mt-8" />
        </FadeIn>

        <FadeIn delay={0.15} className="relative">
          <div className="relative rounded-[18px] overflow-hidden border border-border shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/hero-founder.png"
              alt="Bruno, founder of Host Insider Pro"
              width={1200}
              height={627}
              className="w-full h-auto"
              priority
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
