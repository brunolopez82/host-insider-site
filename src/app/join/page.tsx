import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/ui";
import { ACCENT_DISPLAY, ACCENT_INK, CleanCTA } from "@/components/CleanCTA";

export const metadata: Metadata = {
  title: "Join Host Insider Pro",
  description:
    "A private, hosts-only community run by a former member of Airbnb's Resolutions team. Bring the situation you're stuck on and get a straight answer.",
};

const PROOF = [
  { n: "3+ yrs", d: "Inside Airbnb Resolutions" },
  { n: "3,000+", d: "Disputes mediated" },
  { n: "Hosts only", d: "No guests in the room" },
  { n: "Monthly", d: "Live Host Hangout" },
];

const MICRO = ["Hosts only", "No guests in the room", "Cancel anytime"];

export default function JoinSqueeze() {
  return (
    <main className="tone-light min-h-screen flex flex-col text-[color:var(--fg)]">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 md:py-24">
        <div className="w-full max-w-[720px] flex flex-col items-center text-center gap-8">
          <FadeIn>
            <div className="flex flex-col items-center gap-7">
              <Image
                src="/images/icon.webp"
                alt="Host Insider Pro"
                width={52}
                height={52}
                className="rounded-full"
                priority
              />

              <p
                className="text-xs md:text-[13px] font-bold tracking-[0.18em] uppercase"
                style={{ color: ACCENT_INK }}
              >
                Private community for Airbnb hosts
              </p>

              <h1 className="text-[40px] sm:text-[52px] md:text-[60px] font-extrabold leading-[1.04] tracking-[-0.035em] max-w-[16ch]">
                You don&rsquo;t have to figure out Airbnb{" "}
                <span style={{ color: ACCENT_DISPLAY }}>on your own</span>
              </h1>

              <p className="text-[color:var(--fg-muted)] text-lg md:text-xl leading-relaxed max-w-[36rem]">
                A private, hosts-only community run by someone who spent three
                years inside Airbnb&rsquo;s Resolutions team. Bring the guest
                situation you&rsquo;re stuck on and get a straight reply, not
                fifty opinions.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-col items-center gap-3.5">
              <CleanCTA className="px-10 py-[18px] text-[17px]">
                Join Host Insider Pro
                <span aria-hidden>→</span>
              </CleanCTA>
              <p className="text-[color:var(--fg-muted)] text-[13px] flex flex-wrap justify-center items-center gap-x-2.5 gap-y-1">
                {MICRO.map((m, i) => (
                  <span key={m} className="flex items-center gap-2.5">
                    {i > 0 && <span aria-hidden>·</span>}
                    {m}
                  </span>
                ))}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div
              className="mt-6 w-full grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-7 pt-9 border-t"
              style={{ borderColor: "var(--divider)" }}
            >
              {PROOF.map((p) => (
                <div key={p.n} className="flex flex-col items-center">
                  <span
                    className="text-[26px] md:text-[30px] font-extrabold leading-none tracking-[-0.02em]"
                    style={{ color: ACCENT_DISPLAY }}
                  >
                    {p.n}
                  </span>
                  <span className="mt-2 text-[color:var(--fg-muted)] text-[11px] font-bold uppercase tracking-[0.1em] leading-snug text-center">
                    {p.d}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <footer className="px-6 pb-10">
        <p className="max-w-[720px] mx-auto text-center text-[color:var(--fg-muted)] text-[12px] leading-relaxed">
          Host Insider Pro is an independent community and is not affiliated
          with, endorsed by, or operated by Airbnb. No outcome on any individual
          case is promised or implied.
        </p>
      </footer>
    </main>
  );
}
