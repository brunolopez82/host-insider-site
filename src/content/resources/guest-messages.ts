import type { Resource, Row } from "./types";

const MSGS: { when: string; title: string; body: string }[] = [
  {
    when: "On booking",
    title: "Confirmation",
    body: `Hi {guest_first},

Thanks for booking — we're glad to have you.

So you know what to expect: we'll send directions and arrival timing two days before you come, and your door code on the morning of check-in.

The reservation shows {guests_count} guest(s). If that isn't right, let us know before check-in so we can prepare properly.

We handle everything here in Airbnb messages, including during your stay. It keeps all the details in one place for both of us.

Anything you need before then, just message.

— {host_name}`,
  },
  {
    when: "Two days before check-in",
    title: "What to expect",
    body: `Hi {guest_first},

Your trip is nearly here.

Check-in is any time after {checkin_time} on {checkin_date}. The address is {listing_address}.

We'll send your door code and full arrival instructions on the morning of check-in, so they're easy to find on the day.

{guidebook_link}

If anything about your plans has changed, tell us now rather than on the day — it's much easier to help with notice.

— {host_name}`,
  },
  {
    when: "Morning of check-in",
    title: "Access details",
    body: `Hi {guest_first},

We're getting the place ready for you today.

Your door code is {door_code}. It works from {checkin_time} and stops working at checkout.

{access_instructions}

{parking_instructions}

If anything goes wrong when you arrive, message here and we'll sort it out.

— {host_name}`,
  },
  {
    when: "A few hours after check-in",
    title: "Settled in",
    body: `Hi {guest_first},

Hope you got in without any trouble.

Two quick reminders: {house_rule_1}, and {house_rule_2}. The full house rules are in the guidebook and posted inside.

If anything isn't as you expected, tell us now while we can still do something about it. That's much better for you than discovering it at the end of the stay.

— {host_name}`,
  },
  {
    when: "First morning",
    title: "Quick check",
    body: `Good morning {guest_first},

Hope you slept well. Is everything working as it should?

If something needs attention, just message and we'll deal with it.

— {host_name}`,
  },
  {
    when: "Day before checkout",
    title: "Checkout instructions",
    body: `Hi {guest_first},

Checkout is {checkout_time} tomorrow. A few things before you go:

• Leave used towels on the bathroom floor
• Close the windows and lock the exterior doors
• {key_return_instruction}

You don't need to strip the beds or run the dishwasher — our cleaners take care of that.

If anything got damaged or broken during your stay, tell us before you leave. Things happen, and it is always easier to sort out when we know in advance.

We've enjoyed having you.

— {host_name}`,
  },
  {
    when: "After checkout",
    title: "Review request",
    body: `Hi {guest_first},

Thanks for staying with us — we hope you enjoyed {listing_city}.

When you have a moment, we'd really appreciate a review. It genuinely helps a small business like ours, and we'll be leaving you one too.

Safe travels,

— {host_name}`,
  },
];

const msgRows: Row[] = MSGS.map((m, i) => ({
  title: m.title,
  tag: m.when,
  tagTone: "neutral" as const,
  detail: m.body,
  body: undefined,
  group: i === 0 ? "The sequence" : undefined,
}));

const MSGS_PLAIN = [
  "GUEST MESSAGE SEQUENCE — 7 MESSAGES",
  "On-platform throughout. No star ratings requested.",
  "Swap {merge_fields} for the names your messaging tool uses.",
  "",
  ...MSGS.flatMap((m, i) => [
    "────────────────────────────────────",
    `${i + 1}. ${m.title.toUpperCase()}  —  send: ${m.when}`,
    "",
    m.body,
    "",
  ]),
  "────────────────────────────────────",
  "NOTE: keep anything that could matter later — damage, house rules,",
  "refunds, complaints, anything you agreed — in Airbnb messages.",
  "Off-platform conversations are not available as evidence if a case opens.",
].join("\n");

export const guestMessages: Resource = {
  slug: "guest-messages",
  title: "Your Guest Message Sequence",
  eyebrow: "Free resource · Guest messaging",
  metaDescription:
    "A seven-message Airbnb guest sequence from booking to review — and the three things most templates get wrong, starting with moving the conversation off-platform.",
  lede: "Seven messages, from booking to review. Most templates you will find get the timing right and <strong>one thing badly wrong — they move the whole conversation somewhere nobody can read it later.</strong>",
  stats: [
    { n: "7", label: "Messages in the sequence" },
    { n: "3", label: "Things templates break" },
    { n: "0", label: "Off-platform messages kept" },
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
            "A timed message sequence is one of the highest-return things you can set up. Seven messages covers it, and it mostly runs itself.",
            "<strong>Keep every message on the platform.</strong> Airbnb decides cases by reading your on-platform message history. A conversation that happened over text does not exist to them.",
            "Nearly every template in circulation does the opposite — it pushes guests to SMS on message one. That is the single most expensive line in the whole sequence.",
            "<strong>Do not name a star rating when you ask for a review.</strong> Asking for five stars breaches Airbnb's review policy and puts your account at risk.",
            "A corrected, copy-ready sequence is in section 04.",
          ],
          pills: ["<b>7</b> messages", "<b>On-platform</b> by default", "<b>No</b> star requests"],
        },
      ],
    },
    {
      id: "marketing-view",
      n: "02",
      title: "The marketing view",
      tocLabel: "The marketing view",
      blocks: [
        {
          kind: "spine",
          label: "Why everyone recommends this",
          paras: [
            "Because it genuinely works. A guest who knows exactly what is happening does not message you at eleven at night asking where to park. Questions drop, arrival goes smoothly, and the stay starts well instead of starting confused.",
            "It also makes you look like a professional operation rather than someone improvising. Guests notice, and it shows up in reviews — not because you asked, but because the stay actually was easier.",
            "And it scales. Set it once in whatever tool you use, and every guest from then on gets the same standard without you remembering anything.",
            "<strong>All of that is true.</strong> Set up a sequence. The argument is not about whether to do this — it is about one specific instruction buried in nearly every version of it.",
          ],
        },
      ],
    },
    {
      id: "what-goes-wrong",
      n: "03",
      title: "Three things most templates get wrong",
      tocLabel: "What templates get wrong",
      blocks: [
        {
          kind: "lead",
          text: "All three are in the popular versions. The first one is the one that costs real money.",
        },
        {
          kind: "cards",
          cards: [
            {
              eyebrow: "Problem 01 · The expensive one",
              title: "Moving the conversation to text",
              paras: [
                "Almost every template opens by asking the guest to confirm their mobile number, then says all communication will come by text from now on. It reads as attentive and modern. It is the most expensive sentence in the sequence.",
                "<strong>Airbnb decides cases by reading your on-platform message history.</strong> A conversation that happened over SMS or WhatsApp is not visible to them and will not be accepted as proof. If a guest later says you never told them something, and you told them by text, you have no record as far as the people deciding are concerned.",
                "The irony is that these templates are usually set up by hosts who are being thorough. They write everything down carefully — and then put it all somewhere it cannot be read when it matters.",
              ],
            },
            {
              eyebrow: "Problem 02",
              title: "The way the review is requested",
              paras: [
                "The usual wording does two risky things at once. It names a star rating, and it asks the guest to come to you with any problems <em>before</em> they leave a review.",
                "Asking for a specific rating breaches Airbnb's review policy, and so does anything that reads as steering a guest away from an honest review. You can thank people for reviewing and you can say reviews help your business. Naming the number is where it crosses over.",
                "Inviting problems early is a good instinct. Do it <strong>during</strong> the stay, when you can still fix something.",
              ],
            },
            {
              eyebrow: "Problem 03",
              title: "Predictable door codes",
              paras: [
                "Several templates set the door code to the last four digits of the guest's phone number. It is convenient and easy to explain, which is why it spreads.",
                "It is also a pattern. Anyone who learns your convention knows how every code at your property is generated. Use a code unique to each stay that expires at checkout.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "the-sequence",
      n: "04",
      title: "The corrected sequence",
      tocLabel: "The corrected sequence",
      blocks: [
        {
          kind: "lead",
          text: "Seven messages, written fresh. On-platform throughout, no star requests, and problems invited while they can still be fixed.",
        },
        {
          kind: "copy",
          blurb:
            "All seven messages with their timings, ready to paste into your messaging tool.",
          label: "Copy all seven",
          text: MSGS_PLAIN,
        },
        {
          kind: "rows",
          trackKey: "msgs",
          trackLabel: "Set up in your tool",
          rows: msgRows,
        },
        {
          kind: "note",
          eyebrow: "On the placeholders",
          body: "Names in curly braces are merge fields. Every messaging tool uses slightly different names for them, so check yours and swap them in — a message that sends with <strong>{guest_first}</strong> still printed in it is worse than no automation at all.",
        },
      ],
    },
    {
      id: "support-view",
      n: "05",
      title: "The support view",
      tocLabel: "The support view",
      blocks: [
        {
          kind: "spine",
          live: true,
          awaiting: true,
          label: "The same point, from the other side",
          paras: [
            "This is the lesson where your half is worth the most, because messages are the thing a Resolutions desk actually reads. Everything above I could research. This I cannot.",
            "What I need from you:",
          ],
          questions: [
            "When you opened a case, what did you actually look at first? Was the message thread the main evidence, or one input among several?",
            "How often did a host lose ground simply because the conversation had happened off-platform? Is that as decisive as it sounds from the outside?",
            "What did well-documented hosts do differently in their messages? Was there a pattern to the ones whose cases went smoothly?",
            "Is there a kind of message that actively hurt a host — something they wrote in good faith that read badly later?",
            "Did asking a guest to report damage before checkout actually help, or did it change nothing once a claim was open?",
            "If you could make hosts change one sentence in their messaging, what would it be?",
          ],
        },
      ],
    },
    {
      id: "questions",
      n: "06",
      title: "Common questions",
      tocLabel: "Common questions",
      blocks: [
        {
          kind: "accordion",
          items: [
            {
              q: "But guests reply faster to text. Am I not making things worse?",
              a: [
                "Some will, and that is a real trade. Weigh it against what you lose: if a question ever becomes a disagreement, a text conversation is not something Airbnb can read.",
                "A reasonable middle ground is to keep anything that could matter later — damage, rules, refunds, complaints, anything you agreed to — on the platform, even if small talk happens elsewhere.",
              ],
            },
            {
              q: "What if the guest messages me by text first?",
              a: [
                "Answer briefly and move the substance back. Something like: happy to help, I'll reply on Airbnb so we both have it written down.",
                "It takes one sentence and it costs you nothing in goodwill.",
              ],
            },
            {
              q: "Can I still ask for a review at all?",
              a: [
                "Yes. You can thank a guest for reviewing, and you can say that reviews help your business.",
                "What you cannot do is name a rating or attach conditions. Remove the number and the request is fine.",
              ],
            },
            {
              q: "What about asking guests to come to me before leaving a bad review?",
              a: [
                "Inviting problems early is a good instinct, but attaching it to the review request is where it starts to look like filtering.",
                "Move it into the stay — the message a few hours after check-in, and again the day before checkout. Same intent, better timing, and you actually get the chance to fix something.",
              ],
            },
            {
              q: "How many messages is too many?",
              a: [
                "Seven across a stay is not many, and each one here has a distinct job. The point at which it becomes too many is when a message has nothing to say.",
                "If you cannot name what a message is for, cut it.",
              ],
            },
            {
              q: "Do I need a PMS to run this?",
              a: [
                "No. Airbnb has scheduled messages built in, and that is enough for this sequence.",
                "A property management tool helps when you have several listings or want more conditional logic, but it is not a prerequisite.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "your-path",
      n: "07",
      title: "Your path from here",
      tocLabel: "Your path from here",
      blocks: [
        {
          kind: "path",
          steps: [
            { title: "Find your current messages", body: "Open whatever tool sends them and read them as a guest would, in order. Most hosts have not looked since they set them up." },
            { title: "Delete the line that moves people to text", body: "If your sequence asks guests to confirm a mobile number for all communication, that is the change worth making today." },
            { title: "Fix the review request", body: "Remove any mention of a star rating, and move the invitation to report problems into the stay itself." },
            { title: "Check your door codes", body: "If the code follows a pattern anyone could work out, change the convention." },
            { title: "Paste in the corrected sequence", body: "Adjust the timings to your check-in and checkout, and swap the merge fields for your tool's names." },
            { title: "Send yourself a test booking", body: "Run the whole sequence once and read it as a guest. Placeholder bugs only ever show up this way." },
          ],
        },
      ],
    },
  ],
  closing: {
    eyebrow: "The other half of this lesson",
    heading: "Your messages are the evidence, before you need them",
    paras: [
      "Everything above is researchable, which is why it is free. What you cannot research is what those messages look like to the person reading them after something has gone wrong — which ones help, and which ones a host wishes they had written differently.",
      "That is what Host Insider Pro is: three years of patterns from inside Airbnb's Resolutions team, applied to the decisions you are making right now.",
    ],
  },
  sources:
    "Airbnb's guidance on communicating through the platform, and the consequence that off-platform conversations are not available as evidence when a case is reviewed, is set out in Airbnb's help resources on paying and communicating through Airbnb. Restrictions on requesting specific star ratings and on steering guests away from honest reviews come from Airbnb's reviews policy. All message wording in section 04 is original and written for this lesson.",
  disclaimer:
    "<strong>Not legal or tax advice.</strong> I do not speak for Airbnb, I share no one's case details, and I have no influence over any decision on any account. What I have is pattern recognition from working the support side.",
};
