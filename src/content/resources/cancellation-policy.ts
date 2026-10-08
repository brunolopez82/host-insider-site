import type { Resource } from "./types";

const POLICIES_PLAIN = `AIRBNB CANCELLATION POLICIES — COMPARISON
Checked October 2026. Verify against your own listing settings.

FLEXIBLE
  Guest refund: full refund until 24 hours before check-in
  Suits: city listings with constant demand and short stays

MODERATE
  Guest refund: full refund until 5 days before check-in, 50% after
  Suits: most properties, most of the year — start here

LIMITED
  Guest refund: full refund until 14 days before, 50% between 7 and 14 days
  Suits: properties that take longer to refill, shoulder-season dates

FIRM
  Guest refund: full refund until 30 days before, 50% between 7 and 30 days
  Suits: peak weeks, festivals, anything booked months ahead

UNIVERSAL: every standard policy carries a 24-hour free cancellation window
for bookings made at least 7 days before check-in. You cannot opt out.

IF YOU CANCEL AS THE HOST: a fee scaled to how late you are, the dates get
blocked so you cannot rebook them, and your Superhost status is exposed.
Your chosen policy does not soften any of that.`;

export const cancellationPolicy: Resource = {
  slug: "cancellation-policy",
  title: "Choosing Your Cancellation Policy",
  eyebrow: "Free resource · Cancellations",
  metaDescription:
    "Airbnb's four cancellation policies after the October 2025 rebuild — Flexible, Moderate, Limited and Firm compared, plus what it costs when you are the one who cancels.",
  lede: "Most hosts pick one in about four seconds when they create the listing, and never look at it again. <strong>It is one of the few settings that decides what happens on the worst day of your hosting year.</strong>",
  stats: [
    { n: "4", label: "Policies to choose from" },
    { n: "50%", label: "Fee if you cancel late" },
    { n: "1%", label: "Superhost limit" },
  ],
  sections: [
    {
      id: "short-version",
      n: "01",
      title: "The short version",
      tocLabel: "The short version",
      blocks: [
        {
          kind: "tldr",
          items: [
            "<strong>The system changed on 1 October 2025.</strong> Strict was retired and migrated to Firm. There is now a tier called Limited. Most advice you will find online still describes the old set.",
            "Every standard policy now carries a <strong>24-hour free cancellation window</strong> for bookings made at least 7 days before check-in. You cannot opt out of it.",
            "The policy you choose decides what a guest gets back. <strong>It does not protect you if you are the one who cancels.</strong>",
            "When a host cancels, there is a fee, the dates get blocked so you cannot rebook them, and your Superhost status is exposed.",
            "Moderate suits most listings. Firm suits dates that are genuinely hard to refill.",
          ],
          pills: [
            "<b>24h</b> universal grace window",
            "<b>10–50%</b> host cancellation fee",
            "<b>&lt;1%</b> Superhost threshold",
          ],
        },
      ],
    },
    {
      id: "four-policies",
      n: "02",
      title: "The four policies, side by side",
      tocLabel: "The four policies",
      blocks: [
        {
          kind: "prose",
          paras: [
            "What the guest gets back, and how far ahead they have to decide. Tap <strong>Detail</strong> on any policy for what it means and who it suits.",
          ],
        },
        {
          kind: "copy",
          blurb: "A plain-text comparison you can keep, or send to a co-host.",
          label: "Copy comparison",
          text: POLICIES_PLAIN,
        },
        {
          kind: "rows",
          numbered: true,
          rows: [
            {
              title: "Flexible",
              body: "Full refund until 24 hours before check-in",
              detail:
                "The most generous standard option. A guest can change their mind the day before and still get everything back, which leaves you one night to refill.\n\nSuits: city listings with constant demand and short stays, where a cancelled night reliably rebooks.",
            },
            {
              title: "Moderate",
              body: "Full refund until 5 days before check-in, 50% after",
              detail:
                "The middle ground, and the one that suits most listings. Five days is usually enough notice to get a night sold again without asking guests to commit far ahead.\n\nSuits: most properties, most of the year. Start here unless you have a reason not to.",
            },
            {
              title: "Limited",
              body: "Full refund until 14 days before check-in, 50% between 7 and 14 days",
              detail:
                "Introduced in the October 2025 rebuild. Two weeks of notice, with a partial refund band after it, for listings that need more runway than Moderate gives.\n\nSuits: properties that take a little longer to refill, or shoulder-season dates.",
            },
            {
              title: "Firm",
              body: "Full refund until 30 days before check-in, 50% between 7 and 30 days",
              detail:
                "The strictest policy generally available. This is where the retired Strict policy was migrated. A month of notice, which is what hard-to-refill dates actually need.\n\nSuits: peak weeks, festivals, New Year, and anything booked months ahead for a specific reason.",
            },
          ],
        },
        {
          kind: "note",
          eyebrow: "Checked October 2026",
          body: "Airbnb changes these terms, and it changed them substantially in October 2025. <strong>Treat the numbers above as a map, not a contract</strong> — open your own listing settings and read what yours actually says before you rely on it.",
        },
      ],
    },
    {
      id: "marketing-view",
      n: "03",
      title: "The marketing view",
      tocLabel: "The marketing view",
      blocks: [
        {
          kind: "spine",
          label: "How this is normally taught",
          paras: [
            "Choose Flexible. A guest comparing two similar listings will pick the one they can get out of, so a generous policy wins bookings — especially when you are new and have no reviews to reassure anyone.",
            "The reasoning is sound as far as it goes. Uncertainty is friction, friction costs conversions, and removing it earns you more reservations than the host next door who makes people commit a month out.",
            "<strong>And it is genuinely right for some listings.</strong> A city flat in a market with constant demand can refill a cancelled night easily. If you can rebook within a day, a flexible policy costs you very little and buys you real volume.",
            "What the advice leaves out is that the policy is doing two jobs, and it is only ever judged on the first one.",
          ],
        },
      ],
    },
    {
      id: "guest-cancels",
      n: "04",
      title: "What it costs when the guest cancels",
      tocLabel: "When the guest cancels",
      blocks: [
        {
          kind: "lead",
          text: "The question is not how often guests cancel. It is how fast you can refill the night when they do.",
        },
        {
          kind: "prose",
          paras: [
            "A cancelled night is the same problem as an empty one: it has no salvage value, and it expires. So the real cost of a generous policy is not the refund — it is the window of notice you get before the night arrives.",
            "Flexible gives you 24 hours. Firm gives you 30 days. The money is identical in both cases; what differs is how much runway you have to sell the night again.",
          ],
        },
        {
          kind: "cards",
          cards: [
            {
              eyebrow: "Easy to refill",
              title: "Flexible costs you little",
              paras: [
                "City listings, strong year-round demand, short average stay. If a cancelled Tuesday reliably rebooks by Wednesday, the notice period barely matters and you should take the extra bookings.",
              ],
            },
            {
              eyebrow: "Hard to refill",
              title: "Flexible is expensive",
              paras: [
                "Seasonal, rural, or a property people book months ahead for a specific reason. A cancellation 24 hours out is simply a lost night, and no amount of extra volume earlier makes that back.",
              ],
            },
            {
              eyebrow: "Peak dates",
              title: "Where Firm earns its keep",
              paras: [
                "New Year, a festival weekend, the one week everyone wants. These are booked far ahead and cannot be refilled late. Thirty days of notice is the difference between selling it twice and selling it once.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "you-cancel",
      n: "05",
      title: "What it costs when you cancel",
      tocLabel: "When you cancel",
      blocks: [
        {
          kind: "lead",
          text: "This is the part almost nobody reads, and it is the part that actually hurts.",
        },
        {
          kind: "prose",
          paras: [
            "Your cancellation policy governs what the <strong>guest</strong> gets back. It does nothing for you. When the host is the one cancelling, a separate set of consequences applies, and choosing Firm does not soften any of them.",
          ],
        },
        {
          kind: "rows",
          rows: [
            {
              title: "A cancellation fee, scaled to how late you are",
              body: "Roughly 10% of the reservation if you cancel more than 30 days out, 25% between 48 hours and 30 days, and 50% inside 48 hours or after check-in, with a minimum fee. The closer to arrival, the more it costs.",
            },
            {
              title: "The dates get blocked",
              body: "You cannot accept a new reservation for the nights you just freed up. This stops hosts cancelling a cheap booking to take a better one — and it catches honest cancellations the same way.",
            },
            {
              title: "Your Superhost status is exposed",
              body: "Superhost requires a host-initiated cancellation rate under 1% across the trailing twelve months. On a small number of bookings, a single cancellation can put that out of reach for a year.",
            },
            {
              title: "Repeated cancellations escalate",
              body: "Cancelling without a valid reason, more than once, moves beyond fees. Account suspension is on the table in serious cases.",
            },
            {
              title: "Waivers exist, but are not automatic",
              body: "Fees and consequences may be waived where the cause was genuinely outside your control — emergency repairs, serious illness, evidence a guest intends to break your house rules. It is a real route, not a plan.",
            },
          ],
        },
        {
          kind: "prose",
          paras: [
            "<strong>The calendar block is the one that surprises people.</strong> Cancel a booking and those nights are frozen — you cannot accept a new reservation for them. The logic is obvious once you see it: it stops a host cancelling a cheap booking to take a more expensive one. But hosts who cancel for honest reasons meet the same wall, and they rarely expect it.",
          ],
        },
      ],
    },
    {
      id: "support-view",
      n: "06",
      title: "The support view",
      tocLabel: "The support view",
      blocks: [
        {
          kind: "spine",
          live: true,
          awaiting: true,
          label: "The same point, from the other side",
          paras: [
            "Everything above is researchable, so I wrote it. This is the half that is not, and on this topic it is worth more than on any lesson so far — cancellations are the thing a Resolutions team actually handles.",
            "What I need from you:",
          ],
          questions: [
            "When a host cancelled and came to support, what were they usually trying to achieve — the fee waived, the calendar unblocked, or just to be heard?",
            "What actually counted as a reason outside the host's control, in practice rather than in the wording? And what did hosts wrongly assume would count?",
            "Did the host's chosen policy change how a situation went at all, or is it genuinely irrelevant once a case is open?",
            "What did hosts most often misunderstand about their own policy when they got in touch?",
            "Was there a pattern in when cancellations went badly — a time of year, a type of booking, a type of guest request that preceded it?",
            "If a host is sitting there right now deciding between Moderate and Firm, what would you tell them that nobody else would?",
          ],
        },
      ],
    },
    {
      id: "how-to-choose",
      n: "07",
      title: "How to choose",
      tocLabel: "How to choose",
      blocks: [
        {
          kind: "prose",
          paras: [
            "Six questions. Answer them honestly and the policy picks itself — your answers save on this device.",
          ],
        },
        {
          kind: "rows",
          trackKey: "choose",
          trackLabel: "Worked through",
          rows: [
            {
              title: "How fast can you actually refill a cancelled night?",
              body: "Not how fast you would like to. Look at your own calendar from last year. If the honest answer is under a day, Flexible is affordable. If it is a week, it is not.",
            },
            {
              title: "Is your demand steady or seasonal?",
              body: "Steady demand forgives a generous policy because there is always another guest. Seasonal demand does not — a cancelled peak night is gone and the next enquiry is in March.",
            },
            {
              title: "How far ahead do your guests book?",
              body: "If people book you six months out for a specific date, a 24-hour cancellation window is wildly mismatched to how your listing actually sells.",
            },
            {
              title: "Are you new, with no reviews yet?",
              body: "A generous policy genuinely helps when a guest has nothing else to go on. Treat it as a launch setting you will revisit, not a permanent decision.",
            },
            {
              title: "Do you have a handful of dates that matter far more than the rest?",
              body: "Most properties do. Those dates deserve their own treatment rather than being governed by whatever suits an ordinary Tuesday.",
            },
            {
              title: "Would you rather have more bookings, or more notice?",
              body: "That is the whole trade, stated plainly. There is no policy that gives you both, and pretending otherwise is how people end up unhappy with their choice.",
            },
          ],
        },
        {
          kind: "note",
          eyebrow: "The short answer",
          body: "<strong>Moderate suits most listings.</strong> It gives you five days of notice, which is usually enough to refill, without asking guests to commit a month ahead. Move to Firm for dates you genuinely cannot refill late, and to Flexible only if you can rebook a cancelled night inside a day.",
        },
      ],
    },
    {
      id: "questions",
      n: "08",
      title: "Common questions",
      tocLabel: "Common questions",
      blocks: [
        {
          kind: "accordion",
          items: [
            {
              q: "My policy changed and I did not change it. What happened?",
              a: [
                "Airbnb rebuilt the cancellation system on 1 October 2025. The Strict policy was retired, and listings on it were migrated to Firm unless the host opted out before the deadline.",
                "If you have not looked at your settings since before that date, what you think you are on and what you are actually on may be different.",
              ],
            },
            {
              q: "What is the 24-hour window everyone mentions?",
              a: [
                "Every standard policy now carries a universal 24-hour free cancellation window for bookings made at least seven days before check-in. A guest who books and changes their mind within a day gets a full refund regardless of which policy you chose.",
                "You cannot opt out of it, so there is no point building a strategy around preventing it.",
              ],
            },
            {
              q: "Does a stricter policy protect me if I have to cancel?",
              a: [
                "No, and this is the single most common misunderstanding. Your cancellation policy governs what the guest gets back. It has nothing to say about what happens when you are the one cancelling.",
                "Host cancellations carry their own fees, the calendar block and the Superhost consequences, and Firm does not soften any of them.",
              ],
            },
            {
              q: "Can I just cancel and rebook the dates at a higher price?",
              a: [
                "No. When a host cancels, the freed-up nights are blocked and you cannot accept a new reservation for them.",
                "That restriction exists precisely to stop this, and it applies regardless of why you cancelled.",
              ],
            },
            {
              q: "Will one cancellation cost me Superhost?",
              a: [
                "It can, depending on your volume. The threshold is a host-initiated cancellation rate below 1% over the trailing twelve months.",
                "If you take 50 bookings a year, one cancellation is 2% and you are already over. On 400 bookings it is a rounding error. Work out your own number.",
              ],
            },
            {
              q: "Does this affect my non-refundable rate?",
              a: [
                "Yes, and it is easy to miss. The non-refundable option stops being bookable once your cancellation policy window opens.",
                "So changing your policy changes how long that cheaper rate stays available to guests. If you have it switched on, re-check it after any policy change.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "your-path",
      n: "09",
      title: "Your path from here",
      tocLabel: "Your path from here",
      blocks: [
        {
          kind: "path",
          steps: [
            { title: "Go and look", body: "Open your listing settings and read which policy you are actually on. If you set it in 2024 or earlier, it may have been migrated without you noticing." },
            { title: "Answer the refill question", body: "How long does it genuinely take you to rebook a cancelled night in your market, in your season? That number chooses your policy." },
            { title: "Set peak dates separately", body: "If your platform lets you, treat the few dates you cannot refill differently from the rest of the year." },
            { title: "Read the host-cancellation consequences once", body: "Not because you plan to cancel, but because the day you need to know, you will not have time to research it." },
            { title: "Check your non-refundable rate still fits", body: "That option closes when your cancellation window opens, so changing policy changes when guests can book it." },
            { title: "Write down why you chose it", body: "One line. In a year you will not remember, and you will be tempted to change it after one bad weekend." },
          ],
        },
      ],
    },
  ],
  closing: {
    eyebrow: "The other half of this lesson",
    heading: "Cancellations are exactly what a Resolutions team does",
    paras: [
      "Everything above is researchable, which is why it is free. What you cannot research is what a cancellation looks like from the desk that handles it — what gets waived, what does not, and what hosts consistently get wrong about their own policy.",
      "That is what Host Insider Pro is: three years of patterns from inside Airbnb's Resolutions team, applied to the decisions you are making right now.",
    ],
  },
  sources:
    "Policy tiers, refund windows and the universal 24-hour cancellation window reflect the cancellation system Airbnb introduced on 1 October 2025, under which the former Strict policy was retired and migrated to Firm. Host cancellation fees, the calendar block on cancelled dates and the Superhost cancellation-rate threshold are described in Airbnb's host cancellation terms and in host guidance published by property-management platforms.",
  disclaimer:
    "<strong>Figures checked October 2026, and they change.</strong> Airbnb rebuilt this system once already — always confirm against your own listing settings. <strong>Not legal or tax advice.</strong> I do not speak for Airbnb, I share no one's case details, and I have no influence over any decision on any account.",
};
