// Content model for free resource pages (/free/[slug]).
// Pages are data; the rendering lives in components/resource.

export type Row = {
  title: string;
  body?: string;
  /** Collapsed detail, revealed by a disclosure toggle. */
  detail?: string;
  /** Small label shown above the title, e.g. a timing or a tier. */
  tag?: string;
  /** Visual weight of the tag. */
  tagTone?: "accent" | "neutral" | "quiet";
  /** Consecutive rows sharing a group render under one heading. */
  group?: string;
};

export type Block =
  | { kind: "lead"; text: string }
  | { kind: "prose"; paras: string[] }
  | { kind: "tldr"; items: string[]; pills?: string[] }
  | {
      kind: "spine";
      label: string;
      paras: string[];
      /** Renders in accent colour — used for the support view. */
      live?: boolean;
      /** Shows the "Awaiting Bruno" pill. */
      awaiting?: boolean;
      questions?: string[];
    }
  | { kind: "cards"; cards: { eyebrow?: string; title?: string; paras: string[] }[] }
  | {
      kind: "rows";
      rows: Row[];
      numbered?: boolean;
      /** When set, rows get checkboxes persisted under this key. */
      trackKey?: string;
      trackLabel?: string;
    }
  | { kind: "copy"; blurb: string; label: string; text: string }
  | { kind: "accordion"; items: { q: string; a: string[] }[] }
  | { kind: "path"; steps: { title: string; body: string }[] }
  | { kind: "note"; eyebrow: string; body: string };

export type ResourceSection = {
  id: string;
  /** Two-digit display number, e.g. "01". */
  n: string;
  title: string;
  /** Short label for the side rail. */
  tocLabel: string;
  blocks: Block[];
};

export type Resource = {
  slug: string;
  /** Browser title and <h1>. */
  title: string;
  eyebrow: string;
  lede: string;
  metaDescription: string;
  stats: { n: string; label: string }[];
  sections: ResourceSection[];
  /** Closing block above the footer. */
  closing: { eyebrow: string; heading: string; paras: string[] };
  sources: string;
  disclaimer: string;
};
