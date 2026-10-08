import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/ui";
import { SKOOL_URL } from "@/lib/links";
import { allAdSlugs, resolveAdSlug, type AdVariant } from "@/content/ads/variants";

const INK = "#0c0c0c";
const CREAM = "var(--color-peach)";

const CHIPS = [
  "Cancellations", "Refunds", "Reviews", "Payouts", "Superhost", "Cleaning fee",
  "Instant Book", "Damage claims", "Check-in", "Calendar", "Pricing", "House rules",
  "Amenities", "Photos", "Minimum stay", "Search ranking", "Guest messages",
  "Co-hosts", "Security deposit", "Occupancy", "Direct booking", "Smart locks",
  "Late check-out", "Noise complaints", "Double bookings", "Chargebacks",
  "Listing description", "Response rate", "Cancellation policy", "Insurance",
];

export function generateStaticParams() {
  return allAdSlugs().map((variant) => ({ variant }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ variant: string }>;
}): Promise<Metadata> {
  const { variant } = await params;
  const resolved = resolveAdSlug(variant);
  if (!resolved) return {};
  return {
    title: "Host Insider Pro — A Private Community for Airbnb Hosts",
    description: resolved.variant.sub,
    // Ad landers must never compete with the canonical pages in search.
    robots: { index: false, follow: false },
  };
}

/* ══════════════════════════════════════════════════
   SKIN A — saturated field
   Cream on orange is 3.1:1, so every cream element
   here has to stay above the large-text threshold.
   ══════════════════════════════════════════════════ */
function FieldSkin({ v }: { v: AdVariant }) {
  return (
    <main
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: "var(--color-orange)", color: CREAM }}
    >
      <div
        aria-hidden
        className="absolute inset-x-[-8%] inset-y-0 flex flex-wrap gap-2.5 content-center justify-center overflow-hidden pointer-events-none select-none"
      >
        {CHIPS.map((t) => (
          <span
            key={t}
            className="rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] whitespace-nowrap"
            style={{ background: "rgba(12,12,12,0.06)", color: "rgba(12,12,12,0.32)" }}
          >
            {t}
          </span>
        ))}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 64% 56% at 50% 44%, var(--color-orange) 40%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative flex-1 flex flex-col items-center justify-center px-6 py-14 md:py-20">
        <div className="w-full max-w-[880px] flex flex-col items-center text-center gap-7">
          <FadeIn>
            <div className="flex flex-col items-center gap-7">
              <Image
                src="/images/icon.webp"
                alt="Host Insider Pro"
                width={56}
                height={56}
                className="rounded-full"
                priority
                style={{ border: `2px solid ${INK}` }}
              />
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] md:text-xs font-bold uppercase tracking-[0.14em]"
                style={{
                  background: CREAM,
                  color: INK,
                  border: `2px solid ${INK}`,
                  boxShadow: `4px 4px 0 ${INK}`,
                }}
              >
                {v.badge}
              </span>

              <h1
                className="text-[40px] sm:text-[54px] md:text-[64px] font-extrabold leading-[1.02] tracking-[-0.04em] max-w-[16ch]"
                style={{ color: CREAM }}
              >
                {v.headline}{" "}
                <span
                  className="inline-block px-3 pb-1 rounded-lg"
                  style={{ background: "var(--color-amber)", color: INK }}
                >
                  {v.highlight}
                </span>
                {v.headlineTail ? ` ${v.headlineTail}` : ""}
              </h1>

              <p
                className="text-2xl md:text-[27px] leading-[1.42] max-w-[36rem] font-medium"
                style={{ color: CREAM }}
              >
                {v.sub}
              </p>

              <p
                className="text-xs md:text-[13px] font-bold uppercase tracking-[0.15em] flex flex-wrap justify-center items-center gap-x-2.5 gap-y-1.5"
                style={{ color: INK }}
              >
                {v.micro.map((m, i) => (
                  <span key={m} className="flex items-center gap-2.5">
                    {i > 0 && <span aria-hidden>·</span>}
                    {m}
                  </span>
                ))}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-col items-center gap-3.5 mt-1">
              <a
                href={SKOOL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full px-10 py-5 text-base md:text-lg font-extrabold tracking-wide transition-transform hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px]"
                style={{
                  background: "var(--color-amber)",
                  color: INK,
                  border: `2px solid ${INK}`,
                  boxShadow: `5px 6px 0 ${INK}`,
                }}
              >
                {v.cta}
                <span aria-hidden>→</span>
              </a>
              <span
                className="text-[13px] font-extrabold uppercase tracking-[0.12em]"
                style={{ color: INK }}
              >
                {v.offer}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3.5 w-full">
              {v.proof.map((p) => (
                <div
                  key={p.n}
                  className="rounded-xl px-4 py-5 flex flex-col gap-1 items-center"
                  style={{
                    background: CREAM,
                    border: `2px solid ${INK}`,
                    boxShadow: `4px 5px 0 ${INK}`,
                  }}
                >
                  <span
                    className="text-[24px] md:text-[28px] font-extrabold leading-none tracking-[-0.02em]"
                    style={{ color: "var(--color-orange-deep)" }}
                  >
                    {p.n}
                  </span>
                  <span
                    className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.09em] leading-snug text-center"
                    style={{ color: "rgba(12,12,12,0.78)" }}
                  >
                    {p.d}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <footer className="relative px-6 pb-8">
        <p
          className="max-w-[880px] mx-auto text-center text-[11px] leading-relaxed"
          style={{ color: "rgba(12,12,12,0.85)" }}
        >
          Host Insider Pro is an independent community and is not affiliated
          with, endorsed by, or operated by Airbnb. No outcome on any individual
          case is promised or implied.
        </p>
      </footer>
    </main>
  );
}

/* ══════════════════════════════════════════════════
   SKIN B — clean
   The treatment used on the lesson pages: white ground,
   ink type, orange reserved for accents. Every pairing
   clears AA at body size, so nothing is size-constrained.
   ══════════════════════════════════════════════════ */
function CleanSkin({ v }: { v: AdVariant }) {
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

              <p className="text-xs md:text-[13px] font-bold tracking-[0.18em] uppercase" style={{ color: "var(--color-orange-deep)" }}>
                {v.badge.replace("★ ", "")}
              </p>

              <h1 className="text-[40px] sm:text-[52px] md:text-[60px] font-extrabold leading-[1.04] tracking-[-0.035em] max-w-[16ch]">
                {v.headline}{" "}
                <span style={{ color: "var(--color-orange-deep)" }}>{v.highlight}</span>
                {v.headlineTail ? ` ${v.headlineTail}` : ""}
              </h1>

              <p className="text-[color:var(--fg-muted)] text-lg md:text-xl leading-relaxed max-w-[36rem]">
                {v.sub}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-col items-center gap-3.5">
              {/* Ink fill rather than the gradient: white on the gradient's
                  orange end measures 3.4:1, which fails AA at button size. */}
              <a
                href={SKOOL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full px-9 py-4 text-base font-bold transition-transform hover:scale-[1.03]"
                style={{ background: "var(--color-ink)", color: "#ffffff" }}
              >
                {v.cta}
                <span aria-hidden>→</span>
              </a>
              <span className="text-[color:var(--fg-muted)] text-sm font-medium">
                {v.offer}
              </span>
              <p className="text-[color:var(--fg-muted)] text-[13px] flex flex-wrap justify-center items-center gap-x-2.5 gap-y-1">
                {v.micro.map((m, i) => (
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
              {v.proof.map((p) => (
                <div key={p.n} className="flex flex-col items-center">
                  <span className="text-[26px] md:text-[30px] font-extrabold leading-none tracking-[-0.02em]" style={{ color: "var(--color-orange-deep)" }}>
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

export default async function AdLander({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant } = await params;
  const resolved = resolveAdSlug(variant);
  if (!resolved) notFound();

  return resolved.skin === "clean" ? (
    <CleanSkin v={resolved.variant} />
  ) : (
    <FieldSkin v={resolved.variant} />
  );
}
