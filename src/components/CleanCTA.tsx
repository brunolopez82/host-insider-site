import Link from "next/link";
import { ReactNode } from "react";
import { SKOOL_URL } from "@/lib/links";

/**
 * Accessible primary action for the light pages.
 *
 * The shared `PrimaryCTA` puts white on `brand-gradient`, which measures
 * 3.38:1 at the orange end and ~2:1 at the amber end — under AA for button
 * text. A solid `--color-orange-deep` fill with white text measures 4.57:1
 * and keeps the brand colour.
 */
export function CleanCTA({
  children,
  className = "",
  href = SKOOL_URL,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  const external = href.startsWith("http");
  const cls = `inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-4 font-bold text-base text-white transition-transform hover:scale-[1.03] ${className}`;
  const style = { background: "var(--color-orange-deep)" };

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} style={style}>
      {children}
    </Link>
  );
}

/** Orange that is legible as text on a light ground. */
/** Accent for large display text (>=24px) on light grounds. */
export const ACCENT_DISPLAY = "var(--color-orange-deep)";
/** Accent for small text; clears AA on white, tone-off and tone-peach. */
export const ACCENT_INK = "var(--color-orange-ink)";
