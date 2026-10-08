/**
 * Ad landing variants. One angle each, same visual system.
 *
 * Rules for this page type:
 *  - exactly one action, no nav, no outbound links except the CTA
 *  - the headline must match the ad that sent them, or they bounce
 *  - proof is credential, never member count
 */

export type AdVariant = {
  slug: string;
  /** Internal note: what this variant is testing. Never rendered. */
  angle: string;
  badge: string;
  /** Headline text before the highlighted block. */
  headline: string;
  /** Sits inside an amber block — measured at 9.6:1, unlike yellow-on-orange. */
  highlight: string;
  /** Optional text after the highlight. */
  headlineTail?: string;
  sub: string;
  micro: string[];
  cta: string;
  offer: string;
  proof: { n: string; d: string }[];
};

const PROOF_CREDENTIAL = [
  { n: "3+ yrs", d: "Inside Airbnb Resolutions" },
  { n: "3,000+", d: "Disputes mediated" },
  { n: "Hosts only", d: "No guests in the room" },
  { n: "Monthly", d: "Live Host Hangout" },
];

export const AD_VARIANTS: AdVariant[] = [
  {
    slug: "alone",
    angle: "Relief. Broad cold traffic, no specific pain named.",
    badge: "★ Hosts only. No guests, no arguments.",
    headline: "You don’t have to figure out Airbnb",
    highlight: "on your own",
    sub: "A private, hosts-only community run by someone who spent three years inside Airbnb’s Resolutions team. Bring the situation you’re stuck on and get a straight reply, not fifty opinions.",
    micro: ["Hosts only", "7-day free trial", "Cancel anytime"],
    cta: "Join Host Insider Pro",
    offer: "$5/month · Locked for life",
    proof: PROOF_CREDENTIAL,
  },
  {
    slug: "insider",
    angle: "Credential-led. Leads with the thing nobody can copy.",
    badge: "★ Former Airbnb Resolutions team",
    headline: "I spent three years on the",
    highlight: "other side",
    headlineTail: "of Airbnb support",
    sub: "Then I built a community for hosts. Bring the guest situation you’re stuck on and get an answer from someone who watched three thousand of them resolve.",
    micro: ["Pattern recognition, not inside access", "7-day free trial"],
    cta: "Join Host Insider Pro",
    offer: "$5/month · Locked for life",
    proof: PROOF_CREDENTIAL,
  },
  {
    slug: "refund",
    angle: "Problem-led. For retargeting and high-intent pain searches.",
    badge: "★ For the moment it goes wrong",
    headline: "Guest demanding a refund?",
    highlight: "Don’t reply yet.",
    sub: "What you write in the next hour matters more than most hosts realise. A private community run by a former member of Airbnb’s Resolutions team, for exactly these moments.",
    micro: ["Hosts only", "I reply to every post", "7-day free trial"],
    cta: "Get a straight answer",
    offer: "$5/month · Locked for life",
    proof: [
      { n: "3+ yrs", d: "Inside Airbnb Resolutions" },
      { n: "3,000+", d: "Disputes mediated" },
      { n: "Monthly", d: "Live Host Hangout" },
      { n: "7 days", d: "Free to try" },
    ],
  },
  {
    slug: "review",
    angle: "Problem-led, reviews. Highest-emotion single pain in hosting.",
    badge: "★ Before you respond to that review",
    headline: "One bad review and",
    highlight: "no idea what to do",
    headlineTail: "next",
    sub: "Most of what hosts are told about reviews is wrong, and some of it puts your account at risk. Get the version from someone who sat on the side that handles them.",
    micro: ["Hosts only", "No promised outcomes", "7-day free trial"],
    cta: "Join Host Insider Pro",
    offer: "$5/month · Locked for life",
    proof: PROOF_CREDENTIAL,
  },
];

export const AD_VARIANT_MAP: Record<string, AdVariant> = Object.fromEntries(
  AD_VARIANTS.map((v) => [v.slug, v]),
);

/**
 * Each angle renders in two skins, so the loud-vs-clean question is
 * answered by traffic rather than by taste:
 *   /a/insider        → saturated orange field
 *   /a/insider-clean  → white, the same treatment as the lesson pages
 */
export type Skin = "field" | "clean";
const CLEAN_SUFFIX = "-clean";

export function allAdSlugs(): string[] {
  return AD_VARIANTS.flatMap((v) => [v.slug, v.slug + CLEAN_SUFFIX]);
}

export function resolveAdSlug(
  slug: string,
): { variant: AdVariant; skin: Skin } | undefined {
  const clean = slug.endsWith(CLEAN_SUFFIX);
  const base = clean ? slug.slice(0, -CLEAN_SUFFIX.length) : slug;
  const variant = AD_VARIANT_MAP[base];
  if (!variant) return undefined;
  return { variant, skin: clean ? "clean" : "field" };
}

export function getAdVariant(slug: string): AdVariant | undefined {
  return resolveAdSlug(slug)?.variant;
}
