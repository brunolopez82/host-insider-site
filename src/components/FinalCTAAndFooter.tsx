import Image from "next/image";
import { FadeIn, Section, Heading, Lead, PrimaryCTA, FoundingOfferBadge } from "./ui";

export function FinalCTA() {
  return (
    <Section tone="dark" className="text-center">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <Heading>Always have someone in your corner.</Heading>
          <Lead className="mt-6">
            Hosting doesn&apos;t have to mean figuring everything out alone.
            Join a private community of hosts who are learning, improving and
            building better Airbnb businesses together.
          </Lead>
          <div className="mt-8 flex justify-center">
            <PrimaryCTA>Join Host Insider Pro</PrimaryCTA>
          </div>
          <div className="mt-8 flex justify-center">
            <FoundingOfferBadge />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="tone-light border-t border-black/[0.08] py-12 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image
              src="/images/icon.webp"
              alt="Host Insider Pro"
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="font-bold text-sm tracking-tight">
              Host Insider <span className="text-orange">Pro</span>
            </span>
          </div>
          <p className="text-text-muted text-sm">
            Learn. Optimize. Protect. Grow.
          </p>
          <p className="text-text-light text-sm">
            Private community for Airbnb hosts.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-text-muted">
          <a href="#whats-inside" className="hover:text-orange">Community</a>
          <a href="#" className="hover:text-orange">About</a>
          <a href="#whats-inside" className="hover:text-orange">Academy</a>
          <a href="mailto:hello@hostinsider.app" className="hover:text-orange">Contact</a>
          <a href="#" className="hover:text-orange">Terms</a>
          <a href="#" className="hover:text-orange">Privacy</a>
        </nav>
      </div>

      <div className="max-w-[1200px] mx-auto mt-8 pt-6 border-t border-black/[0.06]">
        <p className="text-text-light text-xs max-w-2xl">
          Host Insider Pro is an independent community and is not affiliated
          with, endorsed by, or operated by Airbnb.
        </p>
      </div>
    </footer>
  );
}
