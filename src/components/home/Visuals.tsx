import Image from "next/image";
import { ReactNode } from "react";

/**
 * Visual furniture for /home.
 *
 * Device frames are drawn in CSS and SVG rather than generated as imagery, for
 * three reasons. The frame stays crisp at any resolution and costs no bytes;
 * the thing inside it is the real asset rather than an invented screen; and the
 * sales-page production notes asked for real course thumbnails over stock
 * pictures. A generated mockup would have looked like a product that does not
 * exist yet.
 */

/* ───────────────────────── Browser chrome
   A neutral window, deliberately not imitating any real product's UI. */
export function BrowserFrame({
  children,
  label,
  className = "",
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border shadow-[0_24px_60px_-28px_rgba(12,12,12,0.35)] ${className}`}
      style={{ borderColor: "var(--card-border)", background: "var(--card-bg)" }}
    >
      <div
        className="flex items-center gap-2 border-b px-4 py-3"
        style={{ borderColor: "var(--card-border)" }}
      >
        <span aria-hidden className="flex gap-1.5">
          {["#e8622a", "#f5a623", "#d8d8d8"].map((c) => (
            <span
              key={c}
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: c }}
            />
          ))}
        </span>
        {label ? (
          <span
            className="ml-2 truncate rounded-md px-2.5 py-1 text-[11px] font-medium tracking-tight"
            style={{
              background: "var(--card-border)",
              color: "var(--fg-muted)",
            }}
          >
            {label}
          </span>
        ) : null}
      </div>
      <div className="leading-[0]">{children}</div>
    </div>
  );
}

/* ───────────────────────── Phone shell
   Holds real lesson text, so nothing on screen is invented. */
export function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[300px] rounded-[2.2rem] border-[10px] p-0 shadow-[0_30px_70px_-30px_rgba(12,12,12,0.45)] ${className}`}
      style={{ borderColor: "var(--color-ink)", background: "var(--color-ink)" }}
    >
      <div
        className="relative overflow-hidden rounded-[1.5rem]"
        style={{ background: "#ffffff" }}
      >
        <div className="flex justify-center pt-2.5 pb-1">
          <span
            aria-hidden
            className="h-1.5 w-16 rounded-full"
            style={{ background: "rgba(12,12,12,0.18)" }}
          />
        </div>
        {children}
      </div>
    </div>
  );
}

/* ───────────────────────── Stat band
   Only numbers that are verifiable: time served, cases handled, lessons
   actually published, and modules that exist as a written plan. */
const STATS = [
  { n: "3+", label: "Years helping hosts" },
  { n: "Dozens", label: "Of hosts helped one-on-one" },
  { n: "5", label: "Lessons published and free to read" },
  { n: "8", label: "Modules planned, none hidden" },
];

export function StatBand() {
  return (
    <div
      className="grid grid-cols-2 gap-x-6 gap-y-8 border-y py-10 md:grid-cols-4"
      style={{ borderColor: "var(--divider)" }}
    >
      {STATS.map((s) => (
        <div key={s.label}>
          <p className="brand-gradient-text text-3xl md:text-4xl font-extrabold tracking-[-0.03em]">
            {s.n}
          </p>
          <p className="mt-1.5 text-xs md:text-sm leading-snug text-[color:var(--fg-muted)]">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ───────────────────────── Two views diagram
   The actual differentiator, drawn rather than described.

   Built from HTML rather than one fixed-viewBox SVG on purpose. A 720-unit
   SVG scaled into a 327px phone renders its 13-unit labels at about 6px,
   which is unreadable — measured, not assumed. HTML reflows instead, keeps
   the text selectable, and stays legible at every width. Only the connector
   is drawn, since nothing about it needs to be read. */
export function TwoViewsDiagram() {
  const panel =
    "flex-1 rounded-xl border p-6 md:p-7";

  return (
    <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center md:gap-0">
      {/* The common version */}
      <div
        className={panel}
        style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
      >
        <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--fg-muted)]">
          The marketing view
        </p>
        <p className="mt-3 text-xl md:text-2xl font-extrabold leading-tight text-[color:var(--fg)]">
          How it is normally taught.
        </p>
        <p className="mt-3 text-sm md:text-base leading-relaxed text-[color:var(--fg-muted)]">
          Researchable, and written straight, with nothing dressed up.
        </p>
      </div>

      {/* Connector: rotates to point down when the panels stack */}
      <div
        aria-hidden
        className="flex shrink-0 items-center justify-center md:px-4"
      >
        <svg
          viewBox="0 0 48 16"
          className="h-4 w-10 rotate-90 md:rotate-0"
          style={{ overflow: "visible" }}
        >
          <defs>
            <linearGradient id="tv-accent" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#c7501e" />
              <stop offset="100%" stopColor="#f5a623" />
            </linearGradient>
          </defs>
          <line x1="0" y1="8" x2="34" y2="8" stroke="url(#tv-accent)" strokeWidth="3" />
          <polygon points="34,2 48,8 34,14" fill="#f5a623" />
        </svg>
      </div>

      {/* The inside version */}
      <div
        className={panel}
        style={{
          background: "var(--card-bg)",
          borderColor: "var(--color-orange)",
          borderWidth: 2,
        }}
      >
        <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.16em] accent-ink">
          The view from inside
        </p>
        <p className="mt-3 text-xl md:text-2xl font-extrabold leading-tight text-[color:var(--fg)]">
          How it actually looks.
        </p>
        <p className="mt-3 text-sm md:text-base leading-relaxed text-[color:var(--fg-muted)]">
          What tends to matter in a case, and what was never yours to control.
        </p>
      </div>
    </div>
  );
}

/* ───────────────────────── A real lesson, inside a phone */
export function LessonOnPhone() {
  return (
    <PhoneFrame>
      <div className="px-5 pb-7 pt-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] accent-ink">
          Free lesson · 07
        </p>
        <h3
          className="mt-2 text-[17px] font-extrabold leading-tight"
          style={{ color: "#111111" }}
        >
          Strikethrough pricing
        </h3>
        <p className="mt-3 text-[12px] leading-relaxed" style={{ color: "#555555" }}>
          Wherever you host, advertising a crossed-out price that nobody
          actually paid is treated as misleading. The wording differs by
          market; the principle does not.
        </p>
        <p
          className="mt-3 text-[12px] font-semibold leading-relaxed"
          style={{ color: "#111111" }}
        >
          A former price has to be a price you genuinely charged, recently.
        </p>
        <div
          className="mt-4 rounded-lg px-3 py-2.5"
          style={{ background: "#fff4ef" }}
        >
          <p className="text-[11px] leading-snug" style={{ color: "#b0461a" }}>
            Published and free to read. No signup.
          </p>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* ───────────────────────── The what's-inside overview, framed */
export function InsideOverview() {
  return (
    <BrowserFrame label="hostinsider.app">
      <Image
        src="/images/home/benefits.webp"
        alt="What's inside Host Insider Pro: protective checklists, the Host Casebook, the monthly Hangout, templates and wording, straight answers, and two views on every lesson."
        width={1400}
        height={788}
        sizes="(min-width: 1024px) 900px, 100vw"
        className="w-full h-auto"
      />
    </BrowserFrame>
  );
}
