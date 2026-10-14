/**
 * The Host Insider Listing Scorecard — questions and scoring, as data.
 *
 * Deliberately a plain module (no "use client", no JSX) so both the page and
 * the client form can import it, matching how content/resources works.
 *
 * Every score and every fix here traces back to a published lesson. That is
 * the point of the tool: a generic optimizer tells a host to "add more
 * amenities", this one names the specific thing their listing gets wrong and
 * which lesson fixes it. Where a lesson says "it depends" — the cancellation
 * policy, the strikethrough trick — the scoring depends too, rather than
 * inventing a rule the course itself would contradict.
 */

export type Severity = "critical" | "high" | "medium" | "good";

export type CategoryId =
  | "title"
  | "photos"
  | "cancellation"
  | "reviews"
  | "response"
  | "pricing";

/** A single finding. `points` is what it cost them; 0 for a confirmation. */
export type Fix = {
  severity: Severity;
  title: string;
  detail: string;
  /** Slug under /free/ that teaches the fix. */
  resource?: string;
  points: number;
};

export type CategoryResult = {
  id: CategoryId;
  label: string;
  score: number;
  max: number;
  fixes: Fix[];
};

export type Result = {
  total: number;
  band: { label: string; blurb: string };
  categories: CategoryResult[];
  /** Highest-value fixes, worst first. */
  top: Fix[];
};

/* ------------------------------------------------------------------ answers */

export type Answers = {
  title: string;
  photoCount: string;
  heroShots: string[];
  policy: string;
  refill: string;
  rating: string;
  reviewCount: string;
  askPractice: string;
  responseTime: string;
  channel: string;
  nonRefundable: string;
  lastMinute: string;
  markupTrick: string;
};

export const EMPTY_ANSWERS: Answers = {
  title: "",
  photoCount: "",
  heroShots: [],
  policy: "",
  refill: "",
  rating: "",
  reviewCount: "",
  askPractice: "",
  responseTime: "",
  channel: "",
  nonRefundable: "",
  lastMinute: "",
  markupTrick: "",
};

/* ---------------------------------------------------------------- questions */

export type Option = { value: string; label: string; hint?: string };

export type Question =
  | {
      id: keyof Answers;
      kind: "text";
      label: string;
      help?: string;
      placeholder?: string;
      maxLength?: number;
    }
  | {
      id: keyof Answers;
      kind: "number";
      label: string;
      help?: string;
      placeholder?: string;
      step?: string;
    }
  | {
      id: keyof Answers;
      kind: "choice";
      label: string;
      help?: string;
      options: Option[];
    }
  | {
      id: keyof Answers;
      kind: "multi";
      label: string;
      help?: string;
      options: Option[];
    };

export type Step = {
  id: CategoryId;
  n: string;
  label: string;
  max: number;
  intro: string;
  questions: Question[];
};

/** The five hero shots, lifted from the shot list so the two never drift. */
export const HERO_SHOTS: Option[] = [
  {
    value: "living",
    label: "Wide of the main living space, every light on",
    hint: "This becomes your cover photo",
  },
  {
    value: "feature",
    label: "The one feature nearby listings do not have",
    hint: "Pool, view, terrace, the architecture itself",
  },
  {
    value: "bed",
    label: "Primary bedroom straight on, a nightstand each side",
  },
  {
    value: "kitchen",
    label: "Kitchen, wide, counters completely clear",
  },
  {
    value: "exterior",
    label: "Exterior, shot in good light",
    hint: "Golden hour, cars out of frame",
  },
];

const UNSURE: Option = { value: "unsure", label: "I am not sure" };

export const STEPS: Step[] = [
  {
    id: "title",
    n: "01",
    label: "Title",
    max: 15,
    intro: "Paste it exactly as it appears. This is scored on the words themselves.",
    questions: [
      {
        id: "title",
        kind: "text",
        label: "Your listing title",
        placeholder: "Cozy apartment in central Lisbon",
        help: "Airbnb allows 50 characters, and phones cut it shorter than you think.",
        maxLength: 120,
      },
    ],
  },
  {
    id: "photos",
    n: "02",
    label: "Photos",
    max: 20,
    intro: "The gallery does more of the selling than the description does.",
    questions: [
      {
        id: "photoCount",
        kind: "number",
        label: "How many photos are on the listing?",
        placeholder: "18",
        help: "The full shot list runs to 47. Thirty is already a strong gallery.",
      },
      {
        id: "heroShots",
        kind: "multi",
        label: "Which of these five do you actually have?",
        help: "These are the five that decide whether anyone opens the listing at all.",
        options: HERO_SHOTS,
      },
    ],
  },
  {
    id: "cancellation",
    n: "03",
    label: "Cancellation",
    max: 15,
    intro:
      "There is no single best policy. This is scored against how fast you refill a lost night, because that is the only thing that makes one of them right for you.",
    questions: [
      {
        id: "policy",
        kind: "choice",
        label: "Your current policy",
        help: "Airbnb rebuilt these on 1 October 2025. Strict was retired into Firm.",
        options: [
          { value: "flexible", label: "Flexible", hint: "Full refund until 24h before" },
          { value: "moderate", label: "Moderate", hint: "Full refund until 5 days before" },
          { value: "limited", label: "Limited", hint: "Full refund until 14 days before" },
          { value: "firm", label: "Firm", hint: "Full refund until 30 days before" },
          UNSURE,
        ],
      },
      {
        id: "refill",
        kind: "choice",
        label: "Honestly, how fast do you refill a cancelled night?",
        help: "Not how fast you would like to. Look at your own calendar from last year.",
        options: [
          { value: "day", label: "Inside a day" },
          { value: "few", label: "A few days" },
          { value: "week", label: "About a week" },
          { value: "longer", label: "Longer than a week" },
          UNSURE,
        ],
      },
    ],
  },
  {
    id: "reviews",
    n: "04",
    label: "Reviews",
    max: 25,
    intro: "The heaviest category, and the only one with account risk attached.",
    questions: [
      {
        id: "rating",
        kind: "number",
        label: "Your overall rating",
        placeholder: "4.7",
        step: "0.01",
        help: "Superhost needs 4.8. Leave this blank if you have no reviews yet.",
      },
      {
        id: "reviewCount",
        kind: "number",
        label: "How many reviews?",
        placeholder: "24",
      },
      {
        id: "askPractice",
        kind: "choice",
        label: "Open your post-checkout message. Which of these does it do?",
        help: "Read the actual message rather than answering from memory. This is the question that matters most.",
        options: [
          { value: "asks-review", label: "Asks for a review, no rating named" },
          {
            value: "names-stars",
            label: "Mentions 5 stars, or says a 5-star rating matters to us",
          },
          {
            value: "offers-incentive",
            label: "Offers something in return",
            hint: "A discount, wine, a future upgrade",
          },
          { value: "none", label: "I do not send one" },
          UNSURE,
        ],
      },
    ],
  },
  {
    id: "response",
    n: "05",
    label: "Response",
    max: 15,
    intro: "Communication is one of the six category scores, and the fastest of them to fix.",
    questions: [
      {
        id: "responseTime",
        kind: "choice",
        label: "How fast do you typically reply to a new enquiry?",
        options: [
          { value: "under1h", label: "Under an hour" },
          { value: "hours", label: "A few hours" },
          { value: "day", label: "Within a day" },
          { value: "longer", label: "Longer than a day" },
          UNSURE,
        ],
      },
      {
        id: "channel",
        kind: "choice",
        label: "Where does the conversation actually happen?",
        options: [
          { value: "platform", label: "On Airbnb, start to finish" },
          { value: "mixed", label: "Starts on Airbnb, moves to WhatsApp" },
          { value: "offplatform", label: "Mostly WhatsApp or text" },
        ],
      },
    ],
  },
  {
    id: "pricing",
    n: "06",
    label: "Pricing",
    max: 10,
    intro:
      "Scored on the two price plays that genuinely work, not on whether a strikethrough is showing.",
    questions: [
      {
        id: "nonRefundable",
        kind: "choice",
        label: "Do you offer the non-refundable rate alongside your standard one?",
        help: "The guest picks at checkout: your normal rate, or 10% less with no refund.",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
          UNSURE,
        ],
      },
      {
        id: "lastMinute",
        kind: "choice",
        label: "Do you run a last-minute discount on dates you are about to lose?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
          UNSURE,
        ],
      },
      {
        id: "markupTrick",
        kind: "choice",
        label: "Have you inflated your base price to force a strikethrough?",
        help: "The 40% markup plus 30% discounts method taught in most courses.",
        options: [
          { value: "no", label: "No" },
          { value: "yes", label: "Yes, that is set up" },
          UNSURE,
        ],
      },
    ],
  },
];

/** Every question a host must answer before the scorecard will run. */
export const REQUIRED: (keyof Answers)[] = [
  "title",
  "photoCount",
  "policy",
  "refill",
  "askPractice",
  "responseTime",
  "channel",
  "nonRefundable",
  "lastMinute",
  "markupTrick",
];

export function missingAnswers(a: Answers): (keyof Answers)[] {
  return REQUIRED.filter((k) => {
    const v = a[k];
    return Array.isArray(v) ? v.length === 0 : String(v).trim() === "";
  });
}
