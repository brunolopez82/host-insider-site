/**
 * Scoring for the Listing Scorecard.
 *
 * Plain module, no "use client" — so a server component can render a result
 * and the client form can compute one without shipping two copies of the
 * rules. See content/scorecard.ts for the questions.
 *
 * Rule of the file: never score something the published lessons do not
 * support. Two categories are deliberately conditional rather than absolute,
 * because the lessons they come from are:
 *
 *   Cancellation — no policy is "best". Flexible is correct for a listing
 *   that refills inside a day and expensive for one that does not, so the
 *   score is the match between the policy and the host's real refill speed.
 *
 *   Pricing — the 40% markup strikethrough is not rewarded. That lesson
 *   concludes it mostly does not work, because discounts calculate from the
 *   60-day median capped at the highest actually-booked price. The two plays
 *   it does endorse are scored instead.
 */

import type {
  Answers,
  CategoryResult,
  Fix,
  Result,
  Severity,
} from "@/content/scorecard";

const SEVERITY_RANK: Record<Severity, number> = {
  critical: 0,
  high: 1,
  medium: 2,
  good: 3,
};

/* ------------------------------------------------------------------- title */

/** Words that make a title sound like every other listing in the market. */
const FILLER =
  /\b(cozy|cosy|nice|lovely|beautiful|charming|great|amazing|perfect|wonderful|stunning|comfy|quaint|delightful)\b/i;

/** A concrete thing a guest filters or searches for. */
const DIFFERENTIATOR =
  /\b(view|sea|ocean|beach|river|lake|mountain|pool|hot tub|jacuzzi|sauna|terrace|balcony|rooftop|garden|patio|fireplace|parking|metro|subway|station|airport|centre|center|downtown|old town|historic|castle|cathedral|loft|studio|penthouse|villa|cabin|workspace|wifi|min(?:ute)?s? (?:to|from|walk))\b/i;

function scoreTitle(a: Answers): CategoryResult {
  const raw = a.title.trim();
  const fixes: Fix[] = [];
  let score = 0;

  // Does it name something specific? Worth the most, because it is the only
  // part of the title doing work the other listings are not already doing.
  if (DIFFERENTIATOR.test(raw)) {
    score += 5;
    fixes.push({
      severity: "good",
      title: "Your title names something concrete",
      detail:
        "It points at a real feature rather than describing the property in general terms. That is the half most titles are missing.",
      points: 0,
    });
  } else {
    fixes.push({
      severity: "high",
      title: "Your title does not name the one thing you have that others do not",
      detail:
        "Hero shot two exists for the same reason: the feature that separates you from every similar listing nearby. Put it in the title as well — a view, a pool, a terrace, two minutes from the metro. If you cannot name the feature, that is worth solving before you touch the words.",
      resource: "photo-shot-list",
      points: 5,
    });
  }

  // Filler adjectives.
  if (raw && !FILLER.test(raw)) {
    score += 4;
  } else if (raw) {
    const hit = raw.match(FILLER);
    fixes.push({
      severity: "medium",
      title: `"${hit?.[0]}" is doing nothing for you`,
      detail:
        "Every second listing opens on an adjective like this one, which means it carries no information and no contrast. Those characters are better spent on a feature a guest can picture or filter for.",
      resource: "photo-shot-list",
      points: 4,
    });
  }

  // Length. Airbnb allows 50 characters and phones show fewer.
  const len = raw.length;
  if (len >= 25 && len <= 50) {
    score += 3;
  } else if (len === 0) {
    fixes.push({
      severity: "high",
      title: "No title entered",
      detail: "Paste your live title to score this category.",
      points: 3,
    });
  } else if (len < 25) {
    fixes.push({
      severity: "medium",
      title: `Only ${len} characters used of the 50 you get`,
      detail:
        "This is free space in the most-read line of your listing. A short title is not cleaner, it is just smaller — add the feature or the distance that makes a guest stop.",
      points: 3,
    });
  } else {
    fixes.push({
      severity: "medium",
      title: `${len} characters will get cut off`,
      detail:
        "Airbnb's limit is 50 and a phone shows less than that. Whatever sits past the cut may as well not be written, so move the important words to the front.",
      points: 3,
    });
  }

  // Shouting.
  const shouty = /\b[A-Z]{4,}\b/.test(raw) || /[!*★✦♥]{1,}/.test(raw);
  if (raw && !shouty) {
    score += 3;
  } else if (raw) {
    fixes.push({
      severity: "medium",
      title: "Capitals or symbols in the title",
      detail:
        "All-caps words and decorative symbols read as a cheap listing before a guest has processed a single word of meaning, and on a premium property that is the one impression you cannot afford.",
      points: 3,
    });
  }

  return { id: "title", label: "Title", score, max: 15, fixes };
}

/* ------------------------------------------------------------------ photos */

function scorePhotos(a: Answers): CategoryResult {
  const fixes: Fix[] = [];
  let score = 0;

  const count = Number(a.photoCount);
  const have = new Set(a.heroShots);

  // Volume, graded against the published shot list: 5 hero plus 28 essential.
  if (!a.photoCount || Number.isNaN(count)) {
    fixes.push({
      severity: "medium",
      title: "Photo count not given",
      detail: "Count the photos on your live listing to score this properly.",
      points: 10,
    });
  } else if (count >= 30) {
    score += 10;
    fixes.push({
      severity: "good",
      title: `${count} photos is a full gallery`,
      detail:
        "You are past the point where volume is the problem. What matters now is whether the five that decide everything are in there, and whether each room reads honestly.",
      points: 0,
    });
  } else if (count >= 20) {
    score += 8;
  } else if (count >= 15) {
    score += 6;
    fixes.push({
      severity: "medium",
      title: `${count} photos leaves rooms unaccounted for`,
      detail:
        "A room with no photo gets assumed to be the worst one in the property. The shot list gets you to 33 without a photographer.",
      resource: "photo-shot-list",
      points: 4,
    });
  } else if (count >= 10) {
    score += 3;
    fixes.push({
      severity: "high",
      title: `${count} photos is thin`,
      detail:
        "Guests cannot assemble a floor plan from ten photos, so they fill the gaps with doubt instead. Two angles per main room is the fix, and it costs you an afternoon.",
      resource: "photo-shot-list",
      points: 7,
    });
  } else {
    score += 1;
    fixes.push({
      severity: "high",
      title: `${count} photos is the biggest single problem on this listing`,
      detail:
        "Below ten photos a guest has no way to judge the property, and the listing loses to any neighbour with a full gallery regardless of which is the nicer place to stay. Start with the five hero shots today.",
      resource: "photo-shot-list",
      points: 9,
    });
  }

  // The five that decide everything, two points each.
  const missing = HERO_LABELS.filter(([v]) => !have.has(v));
  score += (5 - missing.length) * 2;

  if (missing.length === 0) {
    fixes.push({
      severity: "good",
      title: "All five hero shots present",
      detail:
        "Cover, the feature, the primary bed, the clear kitchen, the exterior. These are the five that decide whether anyone opens the listing at all.",
      points: 0,
    });
  } else {
    for (const [, label, why] of missing) {
      fixes.push({
        severity: missing.length >= 3 ? "high" : "medium",
        title: `Missing: ${label.toLowerCase()}`,
        detail: why,
        resource: "photo-shot-list",
        points: 2,
      });
    }
  }

  return { id: "photos", label: "Photos", score, max: 20, fixes };
}

/** value, label, and why its absence costs a booking. */
const HERO_LABELS: [string, string, string][] = [
  [
    "living",
    "Wide of the main living space",
    "This is your cover photo, and the cover photo decides whether the listing gets opened. Shoot from a corner at chest height with every light on.",
  ],
  [
    "feature",
    "The one feature others do not have",
    "Photo two is where you separate yourself from every similar listing in the area. Pool, view, hot tub, fireplace, the architecture itself.",
  ],
  [
    "bed",
    "Primary bedroom, straight on",
    "Guests are booking somewhere to sleep, and the bed drives more review comments than anything else in the property. Camera centred, a nightstand in frame on each side.",
  ],
  [
    "kitchen",
    "Kitchen, wide, counters clear",
    "A clear counter reads as equipped and clean before anyone has read a word of your description.",
  ],
  [
    "exterior",
    "Exterior in good light",
    "This sets the expectation your guest arrives with, which is where a lot of arrival-day friction starts. Golden hour, cars out of frame.",
  ],
];

/* ------------------------------------------------------- cancellation policy */

/**
 * Policy fit by refill speed. Not a ranking of policies — a ranking of
 * matches. Flexible scores top for a listing that refills inside a day and
 * near zero for one that takes a week, which is exactly what the lesson says.
 */
const FIT: Record<string, Record<string, number>> = {
  day: { flexible: 15, moderate: 12, limited: 8, firm: 6 },
  few: { moderate: 15, limited: 12, flexible: 8, firm: 9 },
  week: { limited: 15, firm: 13, moderate: 9, flexible: 3 },
  longer: { firm: 15, limited: 11, moderate: 6, flexible: 2 },
};

const POLICY_NAME: Record<string, string> = {
  flexible: "Flexible",
  moderate: "Moderate",
  limited: "Limited",
  firm: "Firm",
};

const REFILL_NAME: Record<string, string> = {
  day: "inside a day",
  few: "in a few days",
  week: "in about a week",
  longer: "in more than a week",
};

function scoreCancellation(a: Answers): CategoryResult {
  const fixes: Fix[] = [];
  const { policy, refill } = a;

  if (policy === "unsure" || refill === "unsure" || !policy || !refill) {
    const which =
      policy === "unsure" || !policy
        ? "which policy you are on"
        : "how fast you refill";
    fixes.push({
      severity: "high",
      title: `You cannot set this well without knowing ${which}`,
      detail:
        "This is one of the few settings that decides what happens on the worst day of your hosting year, and most hosts pick it in four seconds and never look again. Open your calendar from last year, find a cancelled night, and count the days it took to sell again. That number chooses the policy.",
      resource: "cancellation-policy",
      points: 8,
    });
    return {
      id: "cancellation",
      label: "Cancellation",
      score: 7,
      max: 15,
      fixes,
    };
  }

  const score = FIT[refill]?.[policy] ?? 7;
  const pName = POLICY_NAME[policy] ?? policy;
  const rName = REFILL_NAME[refill] ?? refill;

  if (score >= 13) {
    fixes.push({
      severity: "good",
      title: `${pName} fits a listing that refills ${rName}`,
      detail:
        "This is the match the lesson would put you on. Worth revisiting only for the handful of dates that matter far more than the rest — peak weeks can justify a stricter policy than the rest of your year.",
      points: 0,
    });
  } else if (score >= 9) {
    fixes.push({
      severity: "medium",
      title: `${pName} is defensible, but not the best fit`,
      detail: `You refill ${rName}, and there is a policy that matches that more precisely. The money a guest gets back is identical across policies — what changes is how much runway you have to sell the night again.`,
      resource: "cancellation-policy",
      points: 15 - score,
    });
  } else {
    const better =
      refill === "longer" ? "Firm" : refill === "week" ? "Limited" : "Moderate";
    fixes.push({
      severity: "high",
      title: `${pName} is costing you on a listing that refills ${rName}`,
      detail: `A cancellation under ${pName} leaves you less notice than you need to resell the night, so the loss lands on you rather than the guest. ${better} is the closer match. Note that this governs what the guest gets back — it does nothing for you if you are the one who cancels.`,
      resource: "cancellation-policy",
      points: 15 - score,
    });
  }

  return { id: "cancellation", label: "Cancellation", score, max: 15, fixes };
}

/* ----------------------------------------------------------------- reviews */

function scoreReviews(a: Answers): CategoryResult {
  const fixes: Fix[] = [];
  let score = 0;

  const rating = Number(a.rating);
  const count = Number(a.reviewCount);
  const hasRating = a.rating.trim() !== "" && !Number.isNaN(rating);

  // Rating, 12.
  if (!hasRating) {
    score += 6;
    fixes.push({
      severity: "medium",
      title: "No rating yet",
      detail:
        "Scored neutrally. A new listing has no rating to defend, which is the easiest time to get the review process right before it costs you anything.",
      resource: "five-star-reviews",
      points: 0,
    });
  } else if (rating >= 4.8) {
    score += 12;
    fixes.push({
      severity: "good",
      title: `${rating.toFixed(2)} clears the Superhost threshold`,
      detail:
        "Hold it. Remember the overall score is its own rating rather than an average of the six categories, which is why straight fives in the categories can still sit beside a four overall.",
      points: 0,
    });
  } else if (rating >= 4.6) {
    score += 9;
    fixes.push({
      severity: "medium",
      title: `${rating.toFixed(2)} is below the 4.8 Superhost line`,
      detail:
        "The during-stay message is the one that moves this, because it is the only moment you can still change the outcome. By the time the review request goes out, the stay is already what it was.",
      resource: "five-star-reviews",
      points: 3,
    });
  } else if (rating >= 4.4) {
    score += 6;
    fixes.push({
      severity: "high",
      title: `${rating.toFixed(2)} is far enough down to affect your placement`,
      detail:
        "Guests score the overall separately from the six categories, so chasing category scores often changes nothing. Find what the written reviews keep mentioning and fix that instead.",
      resource: "five-star-reviews",
      points: 6,
    });
  } else {
    score += 3;
    fixes.push({
      severity: "high",
      title: `${rating.toFixed(2)} needs the written reviews read properly`,
      detail:
        "At this level there is usually one recurring complaint doing most of the damage. Read the last twenty reviews and count what repeats — and check whether any of them qualify for removal, because some do.",
      resource: "five-star-reviews",
      points: 9,
    });
  }

  // Volume, 5.
  if (a.reviewCount.trim() === "" || Number.isNaN(count)) {
    score += 2;
  } else if (count >= 20) {
    score += 5;
  } else if (count >= 10) {
    score += 4;
  } else if (count >= 3) {
    score += 2;
    fixes.push({
      severity: "medium",
      title: `${count} reviews is not yet enough to reassure anyone`,
      detail:
        "Early on, volume matters more than the average. A generous cancellation policy also helps here, because a guest comparing two listings with few reviews picks the one they can get out of.",
      resource: "five-star-reviews",
      points: 3,
    });
  } else {
    score += 1;
    fixes.push({
      severity: "medium",
      title: "Almost no reviews yet",
      detail:
        "Your only job right now is getting reviews written at all. Ask for a review after checkout — ask for a review, never for a score.",
      resource: "five-star-reviews",
      points: 4,
    });
  }

  // How they ask, 8 — and the one real account risk in the whole scorecard.
  switch (a.askPractice) {
    case "asks-review":
      score += 8;
      fixes.push({
        severity: "good",
        title: "You ask for a review without naming a rating",
        detail:
          "This is the compliant version, and most hosts are not running it. You can ask for a review; you cannot ask for a score.",
        points: 0,
      });
      break;
    case "names-stars":
      fixes.push({
        severity: "critical",
        title: "Your message asks for a star rating — delete that line today",
        detail:
          "Asking for a specific star rating breaches Airbnb's review policy, and enforcement is automated as well as manual, so it acts on your account rather than just the message. It is the single most copied line in short-term rental messaging and it is the one thing in this report with account risk attached.",
        resource: "five-star-reviews",
        points: 8,
      });
      break;
    case "offers-incentive":
      fixes.push({
        severity: "critical",
        title: "Offering something in exchange for a review breaches the policy",
        detail:
          "A discount, a bottle of wine, a future upgrade — all three are prohibited, as is hinting that the guest's own review depends on what they write. Remove the offer from the message today and keep the request itself.",
        resource: "five-star-reviews",
        points: 8,
      });
      break;
    case "none":
      score += 3;
      fixes.push({
        severity: "high",
        title: "You are not asking for reviews at all",
        detail:
          "Reviews are the heaviest thing on this scorecard and you are leaving them to chance. There are two messages worth sending: the during-stay one that protects the rating, and the post-checkout one whose only job is getting a review written.",
        resource: "five-star-reviews",
        points: 5,
      });
      break;
    default:
      score += 3;
      fixes.push({
        severity: "high",
        title: "Go and read your post-checkout message now",
        detail:
          "If it contains any form of \"a 5-star rating is very important to us\", that line carries account risk and should come out today. You cannot answer this one from memory — open the template and look.",
        resource: "five-star-reviews",
        points: 5,
      });
  }

  return { id: "reviews", label: "Reviews", score, max: 25, fixes };
}

/* ---------------------------------------------------------------- response */

function scoreResponse(a: Answers): CategoryResult {
  const fixes: Fix[] = [];
  let score = 0;

  switch (a.responseTime) {
    case "under1h":
      score += 10;
      fixes.push({
        severity: "good",
        title: "Replying inside an hour",
        detail:
          "Keep it. This is the cheapest category score on the whole listing and you already have it.",
        points: 0,
      });
      break;
    case "hours":
      score += 7;
      fixes.push({
        severity: "medium",
        title: "A few hours is losing you enquiries you never see",
        detail:
          "A guest messaging three listings books the one that answers first, and you never find out you were second. Saved replies for the three questions you always get will close most of this gap.",
        resource: "guest-messages",
        points: 3,
      });
      break;
    case "day":
      score += 4;
      fixes.push({
        severity: "high",
        title: "Within a day is too slow to win a comparison",
        detail:
          "By the time you reply, the guest has usually booked elsewhere. This also feeds the communication category score, so it costs you twice.",
        resource: "guest-messages",
        points: 6,
      });
      break;
    case "longer":
      score += 1;
      fixes.push({
        severity: "high",
        title: "Slower than a day is the easiest thing here to fix",
        detail:
          "Turn on notifications and write three saved replies. No photography, no pricing strategy, no spend — this one is available to you this afternoon.",
        resource: "guest-messages",
        points: 9,
      });
      break;
    default:
      score += 4;
      fixes.push({
        severity: "medium",
        title: "Response time not given",
        detail: "Your hosting dashboard shows it. It is worth knowing.",
        resource: "guest-messages",
        points: 6,
      });
  }

  switch (a.channel) {
    case "platform":
      score += 5;
      fixes.push({
        severity: "good",
        title: "The conversation stays on Airbnb",
        detail:
          "This is what protects you in a dispute, because everything agreed is written down where support can read it.",
        points: 0,
      });
      break;
    case "mixed":
      score += 3;
      fixes.push({
        severity: "medium",
        title: "The conversation moves off Airbnb partway through",
        detail:
          "Anything agreed on WhatsApp does not exist as far as a dispute is concerned. Answer briefly there, then move the substance back: happy to help, I will reply on Airbnb so we both have it written down.",
        resource: "guest-messages",
        points: 2,
      });
      break;
    default:
      fixes.push({
        severity: "high",
        title: "Your guest conversations are not on the platform",
        detail:
          "Every agreement about money, damage, late checkout or access is unevidenced when you need it most, and your response rate does not reflect work you actually did. Move the substance back onto Airbnb even when the guest prefers text.",
        resource: "guest-messages",
        points: 5,
      });
  }

  return { id: "response", label: "Response", score, max: 15, fixes };
}

/* ----------------------------------------------------------------- pricing */

function scorePricing(a: Answers): CategoryResult {
  const fixes: Fix[] = [];
  let score = 0;

  // Play one: the non-refundable rate.
  if (a.nonRefundable === "yes") {
    score += 4;
    fixes.push({
      severity: "good",
      title: "The non-refundable rate is live",
      detail:
        "This is the honest version of the whole strikethrough idea. Two prices sit side by side, the lower one is genuinely lower, and nothing had to be inflated to make it look that way.",
      points: 0,
    });
  } else {
    fixes.push({
      severity: "medium",
      title: "You are not offering the non-refundable rate",
      detail:
        "Airbnb lets you show a second price 10% below your standard one, where the guest gives up the right to cancel to take it. The discounted rate shows in search, which is the visibility the markup trick was chasing — except here both numbers are real.",
      resource: "strikethrough-pricing",
      points: 4,
    });
  }

  // Play two: last-minute on dates about to be lost.
  if (a.lastMinute === "yes") {
    score += 3;
  } else {
    fixes.push({
      severity: "medium",
      title: "No last-minute discount on dates you are about to lose",
      detail:
        "An empty night has no salvage value. It does not roll over, it cannot be sold later, and at midnight it is worth exactly nothing — so holding out for your full rate on a date three days away stops being discipline and starts being a choice to earn zero.",
      resource: "strikethrough-pricing",
      points: 3,
    });
  }

  // The trick itself. Not rewarded, and flagged when present.
  if (a.markupTrick === "yes") {
    fixes.push({
      severity: "high",
      title: "The inflated base price is not doing what you were told",
      detail:
        "Airbnb calculates discounts from your 60-day median price, capped at the highest price you actually booked in the last year — not from whatever you set today. So the markup mostly does not produce the strikethrough, and a sustained low median quietly shrinks every future promotion you run. Undo the inflation and run the two plays above instead.",
      resource: "strikethrough-pricing",
      points: 3,
    });
  } else if (a.markupTrick === "no") {
    score += 3;
    fixes.push({
      severity: "good",
      title: "You have not inflated your base price",
      detail:
        "Good. That tactic is taught everywhere and mostly does not work, because the discount is calculated from your median rather than your sticker price.",
      points: 0,
    });
  } else {
    fixes.push({
      severity: "medium",
      title: "Check whether a previous markup is still in place",
      detail:
        "If someone set this up for you, your base price may still be inflated and your median may still be carrying it. Worth ten minutes in your calendar settings.",
      resource: "strikethrough-pricing",
      points: 3,
    });
  }

  return { id: "pricing", label: "Pricing", score, max: 10, fixes };
}

/* ------------------------------------------------------------------- bands */

function bandFor(total: number): { label: string; blurb: string } {
  if (total >= 85)
    return {
      label: "Strong",
      blurb:
        "This listing is already doing most of the work properly. What is left is the margin, and the margin is where Superhost lives.",
    };
  if (total >= 70)
    return {
      label: "Solid, with gaps",
      blurb:
        "Nothing here is broken, but there are specific points on the table that cost you nothing to collect.",
    };
  if (total >= 50)
    return {
      label: "Losing bookings quietly",
      blurb:
        "The listing works, so nothing feels urgent — which is exactly why these gaps survive. Each one turns away guests you never hear about.",
    };
  return {
    label: "Needs real work",
    blurb:
      "Several of these are costing you bookings right now. The order below is deliberate: do the first one today.",
  };
}

/* ------------------------------------------------------------------- entry */

export function scoreListing(a: Answers): Result {
  const categories: CategoryResult[] = [
    scoreTitle(a),
    scorePhotos(a),
    scoreCancellation(a),
    scoreReviews(a),
    scoreResponse(a),
    scorePricing(a),
  ];

  const total = categories.reduce((n, c) => n + c.score, 0);

  // Worst first: account risk above everything, then whatever costs the most.
  const top = categories
    .flatMap((c) => c.fixes)
    .filter((f) => f.severity !== "good")
    .sort(
      (x, y) =>
        SEVERITY_RANK[x.severity] - SEVERITY_RANK[y.severity] ||
        y.points - x.points,
    );

  return { total, band: bandFor(total), categories, top };
}
