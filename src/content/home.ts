/**
 * Copy for /home — the long-form sales page.
 *
 * Optimized from Host_Insider_Pro_Full_Sales_Page.docx, which scored 25/40 on
 * the conversion rubric. The source was strongest exactly where most sales
 * pages are weakest (objection handling, honest claims) and weakest where
 * money is actually lost: problem depth, offer clarity, and proof.
 *
 * Four rules carried over from the source and deliberately kept:
 *   1. No invented testimonials. None exist yet, and saying so builds trust.
 *   2. No guaranteed outcomes — not bookings, rankings, disputes, or reviews.
 *   3. No fake urgency, countdowns, or inflated "total value" claims.
 *   4. The independence disclaimer stays visible, not buried in a footer.
 *
 * Worldwide audience: no jurisdiction leads, no currency but USD, no units.
 */

export const PRICE = "$7";
export const PRICE_PER_DAY = "$0.23";

/** Skool's checkout is the source of truth; this page must agree with it. */
export const PRICE_NOTE =
  "Billed monthly. Cancel any time. The price you join at is the price you keep.";

export type Panel = { title: string; body: string };

export const hero = {
  eyebrow: "For Airbnb hosts and co-hosts — worldwide",
  h1: "Something will go wrong.",
  h1Accent: "That's hosting, not bad luck.",
  lede:
    "A refund demand you did not expect. A review that lands wrong. A policy you have never read, deciding something that matters. Host Insider Pro is a private community for hosts who would rather be prepared than improvise.",
  cta: `Join Host Insider Pro — ${PRICE}/month`,
  subCta: "First 10 members join free, for life.",
  disclaimer:
    "Independent. Not affiliated with or endorsed by Airbnb. No secret access, no preferential support, no guaranteed outcomes.",
};

/**
 * Problem section. The source described the problem functionally ("advice is
 * spread across many conversations"), which scored 2/5 — true, but nobody
 * recognises themselves in it. This names the actual moment instead.
 */
export const problem = {
  eyebrow: "The part nobody prepares you for",
  heading: "It is 11pm and forty strangers disagree about your money",
  paras: [
    "A guest who checked in two days ago says the place <strong>was not as described</strong> and wants half of it back. You have photos. You have the message thread. You have no idea whether that is enough.",
    "So you do what everyone does. You post in a Facebook group. Forty replies arrive. Eleven say hold firm. Nine say refund immediately and move on. The rest are arguing with each other about something that happened to them in 2019.",
    "Not one of them has read your listing, your messages, or the policy that will actually decide this.",
    "The hard part was never finding one more opinion. It is knowing what matters, what to write down, how to say it, and what the sensible next step actually is.",
  ],
};

/** What is live now versus what is being built. The source blurred these. */
export const liveToday: Panel[] = [
  {
    title: "The room itself",
    body: "A private, hosts-only community. No guests, no agencies, no lead-generation. People running the same problems you are, with standards that keep threads useful instead of personal.",
  },
  {
    title: "Questions answered by me",
    body: "Post a situation, get a reply from someone with more than 3 years helping hosts through situations like it. Where the answer is genuinely uncertain, you are told that rather than given false confidence.",
  },
  {
    title: "Monthly Host Hangout",
    body: "A live call. Bring a listing, a message you are unsure how to send, or a situation that is still open.",
  },
  {
    title: "Five lessons already published",
    body: "Written, live, and free to read before you pay anything. They are the clearest sample of what the material is like.",
  },
];

export const beingBuilt = {
  heading: "What is being built, stated plainly",
  lede:
    "The classroom shows eight modules. They are marked Coming Soon because they are coming soon. Membership includes the full catalog as each one is released, with no separate purchase — but you should judge this page on what exists today, not on this list.",
  modules: [
    { n: "01", img: "module-01", title: "New Host Checklist", body: "The details worth checking before your first guest arrives." },
    { n: "02", img: "module-02", title: "The Airbnb Algorithm", body: "Which assumptions are myths, and which factors you can actually influence. No ranking promises." },
    { n: "03", img: "module-03", title: "Reviews: When Removal Is Possible", body: "How to assess whether a review may meet a removal policy. Removal is never guaranteed." },
    { n: "04", img: "module-04", title: "Host Casebook", body: "Real situations, and the evidence and wording choices worth considering in each." },
    { n: "05", img: "module-05", title: "Build Your Own Website", body: "The basics of an independent site for your hosting business, without pretending it guarantees direct bookings." },
    { n: "06", img: "module-06", title: "Pricing Strategy", body: "Thinking systematically about price, calendar, and demand instead of guessing." },
    { n: "08", img: "module-08", title: "Host Hangout Library", body: "Recordings of past live calls, as they become available." },
  ],
  planned:
    "A ChatGPT listing assistant is also planned — a structured aid for reviewing titles, descriptions, and amenity presentation from information you supply. It is not live, and it will not reveal how Airbnb ranks anything.",
};

export const credibility = {
  eyebrow: "Where this comes from",
  heading: "More than 3 years helping hosts through cases like yours",
  paras: [
    "Before this community, I spent more than 3 years helping hosts handle problems and prepare to avoid them, and I have helped dozens of hosts one-on-one.",
    "That shapes how this material is written: what tends to matter in a case, what is worth documenting before you need it, how to put a situation in writing clearly, and which parts of an outcome were never in your hands.",
    "It does not mean members get confidential information, access to Airbnb staff, preferential treatment, or influence over any decision. It means the teaching comes from having worked through these with dozens of hosts, not from guessing what happens after you hit Submit.",
  ],
};

export const noProof = {
  eyebrow: "What this page will not do",
  heading: "There are no testimonials here, because there are none yet",
  paras: [
    "This community is new. Rather than invent quotes or claim member results that do not exist, this page tells you exactly what is live, what is planned, and what it costs.",
    "Judge it on the five published lessons, the stated standards, the price, and whether the person writing it sounds like he knows the subject. When real member feedback exists, it will appear here with permission — and not before.",
  ],
};

export const objection = {
  eyebrow: "The fair question",
  heading: `Why pay anything when so much hosting advice is free?`,
  paras: [
    "Plenty of hosts share what they know generously, and some of it is genuinely good. If you are comfortable searching, and you have a reliable way to tell which advice applies to your property and your situation, you may not need this.",
    "What you would be paying for is not information that exists nowhere else. It is a hosts-only room, a reply from someone who has helped dozens of hosts one-on-one, and lessons written to be used mid-problem rather than scrolled.",
    `At ${PRICE} a month — about ${PRICE_PER_DAY} a day — the question is simply whether that is worth more to you than the time you currently spend sorting opinions. Nobody is claiming it pays for itself.`,
  ],
};

export const forWhom = {
  heading: "Who this is for, and who it is not",
  yes: [
    "Hosts and co-hosts running one to ten listings, who answer the messages themselves",
    "New hosts who would rather prepare than learn by being caught out",
    "Experienced hosts who want a systematic way to handle difficult guests",
    "Anyone who has had one bad situation and does not want a second one to feel the same",
  ],
  no: [
    "Guests, or anyone looking for leverage over a host",
    "Anyone expecting confidential Airbnb information or special treatment from support",
    "Anyone wanting guaranteed bookings, rankings, refunds, or review removals",
    "Anyone looking for somewhere to post offers, or to argue",
  ],
};

export const faq: { q: string; a: string }[] = [
  {
    q: "Is Host Insider Pro affiliated with Airbnb?",
    a: "No. It is a private, independent community and is not affiliated with or endorsed by Airbnb in any way.",
  },
  {
    q: "Are all eight courses available now?",
    a: "No. The classroom shows all eight as Coming Soon, and that is accurate. Membership includes the full catalog as each is released, without separate purchases. What is live today is the community, the monthly Hangout, and the published lessons.",
  },
  {
    q: "Is the listing assistant available today?",
    a: "Not yet. It is planned, and it will be included for members once it has been built and tested. It is not a reason to join today.",
  },
  {
    q: "Will this get me more bookings or a better search position?",
    a: "No bookings, rankings, revenue, or other results are guaranteed. This is education and peer discussion to help you make better-informed decisions, not a growth promise.",
  },
  {
    q: "Can you help me win a dispute or remove a review?",
    a: "No outcome can be guaranteed. The material can help you understand the relevant policy, organise what you have, and put it in writing clearly. Airbnb still makes its own decisions.",
  },
  {
    q: "Can guests join?",
    a: "No. The room is for hosts and co-hosts only, and that is the point of it.",
  },
  {
    q: "Can I cancel?",
    a: "Yes, at any time. Cancellation takes effect according to the billing platform's terms.",
  },
  {
    q: "Are refunds available?",
    a: "Refund eligibility follows the platform's rules and the policy shown at checkout. Review those terms before joining. This does not limit any mandatory consumer rights that apply where you live.",
  },
  {
    q: "What happens to the price later?",
    a: `The ${PRICE}/month rate is for new members until the community reaches 50 paying members. After that, new members may pay more, and the price will always be shown before anyone subscribes. If you join now, you keep ${PRICE}/month for as long as your membership stays active.`,
  },
];

export const pricing = {
  eyebrow: "Founding members",
  heading: "Join at the founding price",
  lede:
    "No inflated value total, no crossed-out number that nobody ever paid, and no claim that this will pay for itself. Here is the price and what it currently buys.",
  foundingTitle: "First 10 members",
  foundingPrice: "Free for life",
  foundingBody:
    "Ten places, genuinely. They exist because early members shape what gets written first, and because a new room needs people in it.",
  paidTitle: "Initial paid membership",
  paidBody: `For new members until the community reaches 50 paying members. Existing members keep ${PRICE}/month for as long as their membership stays active.`,
  terms: [
    "Billed monthly at the price shown at checkout. Cancel any time.",
    "No bookings, rankings, revenue, dispute outcomes, or account protection are guaranteed.",
    "Independent community. No confidential information, privileged support access, or influence over Airbnb decisions.",
    "Refund eligibility follows the platform rules and the policy published at checkout.",
  ],
};

export const close = {
  eyebrow: "Two ways this goes",
  heading: "The next bad situation is coming either way",
  paras: [
    "In a few months you could have a room of serious hosts to ask, lessons written for the moment you actually need them, and a habit of documenting things before they turn into a case. You will still have to judge what fits your property and your guests — but you will not be doing it at 11pm with forty strangers shouting.",
    "Or you can keep doing what works well enough today: searching when something breaks, weighing opinions from people who cannot see your listing, and hoping the next one is straightforward.",
    "Both are reasonable. Only one of them gets easier the second time.",
  ],
  cta: `Join Host Insider Pro — ${PRICE}/month`,
  foot: "Review the recurring billing, cancellation, and refund terms before subscribing. The first 10 free-for-life places apply only while they remain available.",
};
