import Image from "next/image";
import { FadeIn, Section, Heading, PrimaryCTA, FoundingOfferBadge } from "./ui";

export function FinalCTA() {
  return (
    <Section className="relative overflow-hidden text-center">
      <div className="absolute inset-0 hero-gradient opacity-70" />
      <div className="relative max-w-2xl mx-auto">
        <FadeIn>
          <Heading>Always have someone in your corner.</Heading>
          <p className="mt-6 text-slate text-lg leading-relaxed">
            Hosting doesn&apos;t have to mean figuring everything out alone.
            Join a private community of hosts who are learning, improving and
            building better Airbnb businesses together.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryCTA>Join Host Insider Pro</PrimaryCTA>
          </div>
          <FoundingOfferBadge className="mt-8" />
        </FadeIn>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image src="/images/icon.png" alt="Host Insider Pro" width={28} height={28} className="rounded-full" />
            <span className="font-headline text-sm tracking-wide">
              HOST INSIDER <span className="text-gold-soft">PRO</span>
            </span>
          </div>
          <p className="text-slate text-sm">Learn. Optimize. Protect. Grow.</p>
          <p className="text-slate/70 text-sm">Private community for Airbnb hosts.</p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate">
          <a href="#whats-inside" className="hover:text-white">Community</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#whats-inside" className="hover:text-white">Academy</a>
          <a href="mailto:hello@hostinsider.app" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </nav>
      </div>

      <div className="max-w-[1200px] mx-auto mt-8 pt-6 border-t border-border/40">
        <p className="text-slate/60 text-xs max-w-2xl">
          Host Insider Pro is an independent community and is not affiliated
          with, endorsed by, or operated by Airbnb.
        </p>
      </div>
    </footer>
  );
}
