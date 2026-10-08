import type { Resource } from "./types";

const REVIEW_MSGS_PLAIN = `REVIEW MESSAGES — SAFE VERSIONS
No star rating named. No conditions attached.
Swap {merge_fields} for the names your tool uses.

────────────────────────────────────
1. THE ONE THAT PROTECTS YOUR RATING
   Send: a few hours after check-in, and again the day before checkout

Hi {guest_first},

Hope you're settling in well.

If anything isn't as you expected, or something isn't working, tell us now while we can still do something about it. We would much rather fix it during your stay than hear about it afterwards.

— {host_name}

────────────────────────────────────
2. THE REVIEW REQUEST
   Send: after checkout

Hi {guest_first},

Thanks for staying with us — we hope you enjoyed {listing_city}.

When you have a moment, we'd really appreciate a review. It genuinely helps a small business like ours, and we'll be leaving you one too.

Safe travels,

— {host_name}

────────────────────────────────────
WHY: asking for a specific star rating breaches Airbnb's review policy.
And "tell us before you review" does not work — reviews are double-blind,
so you cannot see what a guest wrote, or whether they wrote anything.`;

export const fiveStarReviews: Resource = {
  slug: "five-star-reviews",
  title: "The Five-Star Review",
  eyebrow: "Free resource · Reviews",
  metaDescription:
    "Why asking for five stars breaches Airbnb policy, why review gating cannot work, what actually moves the rating, and when a review can be removed.",
  lede: "Every template tells you to ask for one. <strong>Asking for a star rating breaches Airbnb's review policy</strong> — and the thing most hosts try next, catching unhappy guests before they review, does not work the way they think it does.",
  stats: [
    { n: "14", label: "Days to review" },
    { n: "7", label: "Scores per stay" },
    { n: "2", label: "Dispute attempts" },
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
            "<strong>Never name a star rating.</strong> Asking for five stars breaches the review policy and puts your account at risk. You can ask for a review; you cannot ask for a score.",
            "<strong>Review gating does not work.</strong> The system is double-blind — you cannot see what a guest wrote before it publishes, so intercepting them achieves nothing and reads as steering.",
            "<strong>The overall score is not an average of the six categories.</strong> Guests rate it separately. Five across the board does not guarantee five overall.",
            "Reviews cannot be edited once published, and the window is 14 days from checkout morning.",
            "<strong>Removal is won on timestamps.</strong> If a guest breaks a rule, report it <em>before</em> their review exists.",
          ],
          pills: [
            "<b>14-day</b> window",
            "<b>Double-blind</b> until both submit",
            "<b>No</b> editing once posted",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      n: "02",
      title: "How the system actually works",
      tocLabel: "How the system works",
      blocks: [
        {
          kind: "prose",
          paras: [
            "Five mechanics that change what you should do. Most hosts know one or two of them.",
          ],
        },
        {
          kind: "rows",
          numbered: true,
          rows: [
            {
              title: "You have 14 days, and the clock starts at checkout",
              body: "Airbnb prompts both sides on the morning of checkout and the window runs for two weeks. A review request sent long after checkout is competing with a guest who has already moved on.",
            },
            {
              title: "It is double-blind",
              body: "Neither side sees the other's review until both have submitted, or the window expires. You cannot read a guest's review and then write yours in response, and you cannot tell whether they have already written one.",
            },
            {
              title: "Seven scores, not one",
              body: "Overall, plus cleanliness, accuracy, check-in, communication, location and value. Each is rated separately by the guest.",
            },
            {
              title: "The overall is not an average",
              body: "It is its own rating. This is why straight fives in the categories can still sit next to a four overall, and why hosts chasing category scores sometimes see nothing change.",
            },
            {
              title: "Published reviews cannot be edited",
              body: "Once both reviews publish, that is final. There is no revising it afterwards, by either side, which is why the window matters more than most hosts treat it.",
            },
          ],
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
            "Ask for the review. Send a warm message after checkout, remind the guest it only takes two minutes, mention that five stars means a lot to a small family business, and invite anyone who had a problem to come to you first rather than putting it in writing.",
            "The underlying instincts are sound. Guests who are asked do review more often than guests who are not. Reminding people you are a small operation rather than a faceless company genuinely does affect how they write. And wanting to fix a problem before it becomes permanent is exactly the right impulse.",
            "<strong>Two of those three are fine.</strong> The third — naming the rating, and catching people before they review — is where the standard template walks into a policy problem and a logic problem at the same time.",
          ],
        },
      ],
    },
    {
      id: "the-ask",
      n: "04",
      title: "The ask, and what goes wrong",
      tocLabel: "The ask, and what goes wrong",
      blocks: [
        {
          kind: "lead",
          text: "Almost every circulating template contains some version of two sentences. Both are a mistake, for different reasons.",
        },
        {
          kind: "cards",
          cards: [
            {
              eyebrow: "Mistake 01 · Policy",
              title: "Naming the rating",
              paras: [
                'Some form of <em>"a 5-star rating is very important to us."</em> It sounds harmless, and it is the single most copied line in short-term rental messaging.',
                "Asking for a specific star rating breaches Airbnb's review policy. So does offering anything in exchange — a discount, a bottle of wine, a future upgrade — and so does hinting at a poor guest review unless they write something positive. Enforcement is automated as well as manual, and it acts on your account, not just the message.",
                "<strong>What you can do instead:</strong> ask for a review, say honestly that reviews help your business, and thank people who leave one. Remove the number and the request is perfectly fine.",
              ],
            },
            {
              eyebrow: "Mistake 02 · Logic",
              title: "Trying to intercept the bad ones",
              paras: [
                'The second sentence is usually <em>"if you had any issues, please let us know before leaving your review."</em> The intention is good. The mechanism does not exist.',
                "Reviews are double-blind. Neither side sees the other's until both have submitted or the window closes. You cannot read a guest's review and respond to it, and you cannot tell whether the person you are messaging has already written one.",
                "So the sentence buys you nothing operationally, while reading like an attempt to route unhappy guests away from reviewing — which is itself against the rules. <strong>The right instinct, in the wrong place.</strong>",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "what-moves-it",
      n: "05",
      title: "What actually moves the rating",
      tocLabel: "What moves the rating",
      blocks: [
        {
          kind: "lead",
          text: "Seven scores, not one. And the one that matters most is not calculated from the others.",
        },
        {
          kind: "prose",
          paras: [
            "A guest rates the overall stay, plus six categories: cleanliness, accuracy, check-in, communication, location and value. <strong>The overall score is its own rating.</strong> It is not an average, which is why hosts sometimes see straight fives in every category and a four overall, and cannot work out what happened.",
            "The six are not equally within your control, and that is the useful part.",
          ],
        },
        {
          kind: "rows",
          rows: [
            { title: "Cleanliness", tag: "Fully yours", tagTone: "accent", body: "The most controllable category there is, and the one guests notice first. It is also the one a tired changeover costs you most reliably." },
            { title: "Accuracy", tag: "Fully yours", tagTone: "accent", body: "Scored against the expectation your listing created. This is where photos and description are paid for, in either direction." },
            { title: "Check-in", tag: "Fully yours", tagTone: "accent", body: "Clear instructions, a code that works, and somewhere to park. Almost every poor check-in score traces back to information that arrived late or not at all." },
            { title: "Communication", tag: "Fully yours", tagTone: "accent", body: "Response speed and clarity. A timed message sequence does most of the work here without you doing anything on the day." },
            { title: "Value", tag: "Partly yours", tagTone: "neutral", body: "Not about being cheap. It is the gap between what they paid and what they felt they got, which means it moves with your price and your accuracy together." },
            { title: "Location", tag: "Not yours", tagTone: "quiet", body: "You cannot move the property. What you can do is describe the setting honestly, so nobody arrives expecting somewhere else." },
          ],
        },
        {
          kind: "note",
          eyebrow: "The one that connects everything",
          body: "<strong>Accuracy is the category your photos and description decide.</strong> It is scored against the expectation you created before the guest ever arrived. A property that is exactly what it looked like scores well even when it is modest — and a flattering listing creates a gap that the guest pays for in disappointment and you pay for in stars.",
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
            "Reviews are squarely your territory. Everything above is published policy. This is the half that is not.",
            "What I need from you:",
          ],
          questions: [
            "When a host asked for a review to be removed, what actually made the difference between the ones that moved and the ones that did not?",
            "Is the retaliation route as narrow in practice as the policy wording suggests, or is there more room than hosts assume?",
            "What did hosts most often get wrong about what counts as grounds for removal?",
            "Did the timing of a host's own report genuinely matter as much as it appears to — reporting before the review exists rather than after?",
            "Was there anything in how a host wrote their request or their response that helped or hurt them later?",
            "For a host who has just received an unfair review and is angry about it: what is the first thing you would tell them to do, and the first thing you would tell them not to do?",
          ],
        },
      ],
    },
    {
      id: "removal",
      n: "07",
      title: "When a review can be removed",
      tocLabel: "When a review can be removed",
      blocks: [
        {
          kind: "lead",
          text: "Removal is narrower than hosts hope, and it is decided on sequence more than on fairness.",
        },
        {
          kind: "prose",
          paras: [
            "A review is not removed for being wrong, harsh or unfair. It is removed when it breaches the review policy. The recognised grounds are reasonably specific.",
          ],
        },
        {
          kind: "rows",
          rows: [
            { title: "Retaliation after you enforced a rule", body: "A guest who committed a violation, was notified of it, and then left a biased review because it was reported. Narrower than hosts assume, and decided on sequence." },
            { title: "Extortion", body: "A review, or the threat of one, tied to a demand for a refund, a discount or a favour." },
            { title: "Discrimination or threats", body: "Content that breaches the wider content standards rather than the review policy specifically." },
            { title: "Irrelevant content", body: "A review about something other than the actual stay — a dispute with a neighbour, a complaint about the platform, a comment about something that happened elsewhere." },
            { title: "Things the listing never controlled", body: "Events genuinely outside what the listing is responsible for. This is narrower than it sounds and is not a route for weather or traffic complaints." },
          ],
        },
        {
          kind: "note",
          eyebrow: "The part that decides it",
          body: "Retaliation claims turn on <strong>sequence</strong>. The policy contemplates a guest who committed a violation, was notified of it, and then left a biased review because it was reported. That means your report of their violation needs to be timestamped <em>before</em> their review exists. Report it the day it happens, on the platform. If you wait until the review lands and then report the violation, the timestamps tell the opposite story — and you typically get only two attempts per review.",
        },
      ],
    },
    {
      id: "safe-request",
      n: "08",
      title: "The request, written safely",
      tocLabel: "The request, written safely",
      blocks: [
        {
          kind: "prose",
          paras: [
            "Two messages. One during the stay, which does the job the gating sentence was trying to do. One after checkout, which asks for the review without naming a score.",
          ],
        },
        {
          kind: "copy",
          blurb: "Both messages, ready to paste into your messaging tool.",
          label: "Copy both",
          text: REVIEW_MSGS_PLAIN,
        },
        {
          kind: "rows",
          numbered: true,
          rows: [
            {
              title: "The one that protects your rating",
              tag: "A few hours after check-in, and again the day before checkout",
              tagTone: "neutral",
              detail: `Hi {guest_first},

Hope you're settling in well.

If anything isn't as you expected, or something isn't working, tell us now while we can still do something about it. We would much rather fix it during your stay than hear about it afterwards.

— {host_name}`,
            },
            {
              title: "The review request",
              tag: "After checkout",
              tagTone: "neutral",
              detail: `Hi {guest_first},

Thanks for staying with us — we hope you enjoyed {listing_city}.

When you have a moment, we'd really appreciate a review. It genuinely helps a small business like ours, and we'll be leaving you one too.

Safe travels,

— {host_name}`,
            },
          ],
        },
        {
          kind: "note",
          eyebrow: "Why this order works",
          body: "The during-stay message is the one that protects your rating, because it is the only moment you can actually change the outcome. By the time the review request goes out, the stay is already what it was — so that message has one job, and it is simply to get a review written at all.",
        },
      ],
    },
    {
      id: "questions",
      n: "09",
      title: "Common questions",
      tocLabel: "Common questions",
      blocks: [
        {
          kind: "accordion",
          items: [
            {
              q: "Can I ask for a review at all?",
              a: [
                "Yes. You can ask for a review, say honestly that reviews help your business, and thank guests who leave one.",
                "What you cannot do is name a rating, offer anything in exchange, or imply the guest's own review depends on what they write.",
              ],
            },
            {
              q: "What is actually wrong with 'tell me before you review'?",
              a: [
                "Two things. It reads as routing unhappy guests away from reviewing, which is against the rules. And it does not work, because the system is double-blind — you cannot see what they wrote, or whether they have written anything.",
                "The instinct behind it is right. Move it into the stay, where you can genuinely fix something.",
              ],
            },
            {
              q: "All my categories are five stars but my overall is four. Why?",
              a: [
                "Because the overall is a separate rating, not an average of the six. Guests score it on its own.",
                "When the categories are strong and the overall is not, the gap is usually expectation rather than amenities — something about the stay did not match what they came expecting.",
              ],
            },
            {
              q: "Should I leave my review first, or wait?",
              a: [
                "Leaving yours does not reveal anything to the guest, because nothing publishes until both are in or the window closes.",
                "Waiting mainly risks forgetting. Leaving yours promptly is the simpler habit, and it is the part of the exchange entirely within your control.",
              ],
            },
            {
              q: "A guest broke a rule and I think they will review me badly. What now?",
              a: [
                "Report the violation now, through the proper channel, on the platform — before any review exists. The timestamp is the argument.",
                "If you wait for the review and then report, the sequence reads as a response to the review rather than the other way round.",
              ],
            },
            {
              q: "Does responding publicly to a bad review help?",
              a: [
                "It can, but not in the way most hosts want it to. Nothing you write changes the score.",
                "A short, calm, factual response is read by future guests, not by the reviewer. Write it for them. Anything defensive does more damage than the original review did.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "your-path",
      n: "10",
      title: "Your path from here",
      tocLabel: "Your path from here",
      blocks: [
        {
          kind: "path",
          steps: [
            { title: "Find the sentence", body: "Open your current post-checkout message. If it names a star rating, delete that line today. It is the one thing here with account risk attached." },
            { title: "Move the problem-catching earlier", body: "Take the 'tell us before you review' line out of the review request and put the question into the stay instead." },
            { title: "Read your own listing for accuracy", body: "Accuracy is the category your photos and description decide, and it is scored against the expectation you set." },
            { title: "Report violations the day they happen", body: "Not when a review lands. The timestamp is the argument." },
            { title: "Leave your own reviews", body: "It keeps the window moving and it is the only part of the exchange fully in your hands." },
            { title: "Stop reading the overall as an average", body: "If your categories are strong and your overall is not, the gap is usually expectation, not amenities." },
          ],
        },
      ],
    },
  ],
  closing: {
    eyebrow: "The other half of this lesson",
    heading: "Review removal is Resolutions territory",
    paras: [
      "Everything above is published policy, which is why it is free. What you cannot research is which removal requests actually moved and which never stood a chance — and what the hosts who got there did differently.",
      "That is what Host Insider Pro is: three years of patterns from inside Airbnb's Resolutions team, applied to the decisions you are making right now.",
    ],
  },
  sources:
    "The 14-day review window, the double-blind publication model, the seven scores and the fact that the overall rating is not an average of the six categories are described in Airbnb's reviews guidance and in host documentation published by property-management platforms. Restrictions on requesting specific star ratings, offering incentives and steering guests away from honest reviews come from Airbnb's reviews policy. Grounds for removal, the definition of a retaliatory review and the limited number of dispute attempts are described in Airbnb's review dispute guidance.",
  disclaimer:
    "<strong>Checked October 2026, and these rules change.</strong> Confirm against Airbnb's current policy before relying on anything here for a specific review. <strong>Not legal advice.</strong> I do not speak for Airbnb, I share no one's case details, and I have no influence over any decision on any account.",
};
