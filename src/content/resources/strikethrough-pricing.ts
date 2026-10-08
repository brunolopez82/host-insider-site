import type { Resource } from "./types";

const STEPS_PLAIN = `AIRBNB STRIKETHROUGH PRICING — THE TACTIC AS TAUGHT
Documented for reference. Read the two notes at the bottom before using any of it.

1. Increase your base pricing in the listing settings
   Open the listing, go to Pricing, then Pricing and policies, then Pricing.
   Scroll to Markup, markdown and set the accommodation fare to increase
   everything by 40%. Save.

2. Wait for the pricing change to sync
   After saving, wait a few minutes for the update to populate.

3. Open the calendar and discount settings
   Go to your Calendar, click the listing, then open Discounts.

4. Set up the two discounts that trigger the strikethrough
   Add a last-minute discount and an early-bird discount, both set to 30%.

5. Configure the discount timing rules
   Last-minute within 28 days at 30%. Early bird at one month, 30%.

6. Save and confirm the strikethrough display
   The claim is that a strikethrough then appears on almost every day of the year.

WHY IT MOSTLY FAILS: Airbnb calculates discounts from your 60-day median price,
capped at your highest booked price in the last year — not from the price you just set.

WHAT TO DO INSTEAD: offer the non-refundable rate (a real 10% reduction the guest
chooses at checkout), and set a narrow last-minute window for dates you were about to lose.`;

export const strikethroughPricing: Resource = {
  slug: "strikethrough-pricing",
  title: "The Strikethrough Pricing Trick",
  eyebrow: "Free resource · Pricing",
  metaDescription:
    "The 40% markup strikethrough pricing trick on Airbnb — why it mostly does not work, why it is not the danger people claim, and the two places that same psychology genuinely pays.",
  lede: "Inflate your base price 40%, add 30% discounts, and a strikethrough shows on nearly every date all year. It is taught everywhere. <strong>It mostly does not work — but it is also not the danger people make it out to be.</strong>",
  stats: [
    { n: "60", label: "Day median reference" },
    { n: "10%", label: "Non-refundable rate" },
    { n: "2", label: "Places it actually pays" },
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
            "The trick: raise your base price 40%, set last-minute and early-bird discounts to 30%, and a strikethrough shows on nearly every date.",
            "<strong>Airbnb already limits it.</strong> Discounts calculate from your 60-day median price, capped at your highest actually-booked price in the last year — not from whatever you set today.",
            "<strong>From the support side it is a non-issue.</strong> The system absorbs it. It is not something hosts get into trouble over, and it is not why people contact support.",
            "So the real cost is not risk. It is wasted effort, and a listing priced above its neighbours for nothing.",
            "<strong>The psychology is sound.</strong> It is just pointed at the wrong mechanism. Two places it genuinely pays are in section 06.",
          ],
          pills: [
            "<b>60-day</b> median reference",
            "<b>12-month</b> booked-price cap",
            "<b>10%</b> non-refundable rate",
          ],
        },
      ],
    },
    {
      id: "the-tactic",
      n: "02",
      title: "The tactic, exactly as it is taught",
      tocLabel: "The tactic as taught",
      blocks: [
        {
          kind: "prose",
          paras: [
            "Documented faithfully so you recognise it when you see it. Whether it is worth doing is sections 03 and 04.",
          ],
        },
        {
          kind: "copy",
          blurb: "The six steps as they circulate, for reference.",
          label: "Copy the steps",
          text: STEPS_PLAIN,
        },
        {
          kind: "rows",
          numbered: true,
          rows: [
            {
              title: "Increase your base pricing in the listing settings",
              body: "Open the listing, go to Pricing, then Pricing and policies, then Pricing. Scroll to Markup, markdown and set the accommodation fare to increase everything by 40%. Save.",
            },
            {
              title: "Wait for the pricing change to sync",
              body: "After saving, wait a few minutes for the update to populate. Around ten minutes is given as enough.",
            },
            {
              title: "Open the calendar and discount settings",
              body: "Go to your Calendar, click the listing you want to edit, then find and open Discounts.",
            },
            {
              title: "Set up the two discounts that trigger the strikethrough",
              body: "Add a last-minute discount and an early-bird discount, both set to 30%. The claim is that these work alongside the 40% increase to create the perceived discount.",
            },
            {
              title: "Configure the discount timing rules",
              body: "Last-minute set to apply within 28 days at 30%. Early bird set to one month at 30%. The stated aim is coverage across most dates in the year.",
            },
            {
              title: "Save and confirm the strikethrough display",
              body: "Save. The claim is that a strikethrough then appears on almost every day of the year, increasing urgency and helping the listing get promoted.",
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
          label: "Why this is taught everywhere",
          paras: [
            "Because the psychology underneath it is real. A price shown beside a higher crossed-out price reads as a better deal than the same price shown alone. That is anchoring, and it works on everyone, including people who know it works on them.",
            "Airbnb leans on it too. Discounted listings get visual treatment in search — a strikethrough, and at larger reductions, tags calling the price out. More attention means more clicks, and more clicks can mean more bookings.",
            "<strong>So the goal is not wrong.</strong> Wanting your listing to carry a discount badge is reasonable. The question is how you get one, and that is where this particular method falls apart.",
          ],
        },
      ],
    },
    {
      id: "does-it-work",
      n: "04",
      title: "Does it actually work?",
      tocLabel: "Does it actually work?",
      blocks: [
        {
          kind: "lead",
          text: "Mostly no — because you do not control the number the discount is calculated from.",
        },
        {
          kind: "prose",
          paras: [
            "The method assumes your discount comes off the price you set today. It does not. Airbnb works out a reference price from your pricing history, and that reference is deliberately hard to move.",
          ],
        },
        {
          kind: "cards",
          cards: [
            {
              eyebrow: "Constraint 01",
              title: "Your 60-day median",
              paras: [
                "Airbnb lines up every nightly price you have set for a date over the past 60 days and takes the middle one. Raising your price today shifts a 60-day median very slowly, and only if you leave it raised.",
              ],
            },
            {
              eyebrow: "Constraint 02",
              title: "Your highest booked price",
              paras: [
                "The discount is also capped by the most you have actually been booked at in the past year. Set 500 when your highest booking was 300, and the discount calculates from 300.",
              ],
            },
            {
              eyebrow: "Constraint 03",
              title: "Eligibility windows",
              paras: [
                "A date needs a real 60-day median to qualify at all. Where one does not exist, the night is not eligible for a custom promotion or a last-minute discount.",
              ],
            },
          ],
        },
        {
          kind: "prose",
          paras: [
            "<strong>What this means in practice.</strong> You can raise what guests pay. What you cannot easily raise is the number Airbnb discounts <em>from</em>, because that number is historical rather than current. Airbnb’s own guidance is explicit that this exists so hosts cannot simply charge more and add a discount on top.",
          ],
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
          label: "The same point, from the other side",
          paras: [
            "Let me take the pressure out of this first, because I think people get it the wrong way round.",
            "<strong>From where I sat, this was not a problem.</strong> The system adapts and it limits itself. That is really the whole story. I am not going to tell you a frightening case about a host who tried this, because I do not have one. It is not a reason people contacted us. The platform absorbs it quietly, which is exactly why you never hear about it going wrong — it mostly just does not do very much.",
            "So if you have already set this up, you are not in trouble. You are mostly just priced above the listing next door for no return.",
            "The hosts who did reach out were usually somewhere else entirely. They had worked out something much simpler: that they could set the price they actually wanted. Once that lands, the tricks stop being interesting.",
            "<strong>But I would not throw away the thinking behind it.</strong> The psychology is sound. It is pointed at the wrong mechanism, that is all. There are two places where the same idea genuinely pays, and both of them are honest.",
          ],
        },
      ],
    },
    {
      id: "where-it-pays",
      n: "06",
      title: "Two places this psychology actually pays",
      tocLabel: "Where it actually pays",
      blocks: [
        {
          kind: "lead",
          text: "Same idea — a guest sees a lower number and acts on it. The difference is that here, both numbers are real.",
        },
        {
          kind: "cards",
          cards: [
            {
              eyebrow: "Play one",
              title: "The non-refundable rate",
              paras: [
                "Airbnb lets you offer a second, cheaper price alongside your standard one. The guest chooses at checkout: pay your normal rate and keep your cancellation policy, or pay <strong>10% less</strong> and give up the right to cancel.",
                "This is the honest version of the whole trick. Two prices sit side by side, the lower one is genuinely lower, and nothing had to be inflated to make it look that way. The discounted rate shows in search, which is the visibility the markup method was chasing.",
              ],
            },
            {
              eyebrow: "Play two",
              title: "Last-minute, on dates you are about to lose",
              paras: [
                "An empty night has no salvage value. It does not roll over, it cannot be sold later, and at midnight it is worth exactly nothing.",
                "As a date approaches unbooked, holding out for your full rate stops being discipline and starts being a choice to earn zero. A last-minute discount turns a night you were going to lose into one that pays something.",
              ],
            },
          ],
        },
        {
          kind: "prose",
          paras: [
            "<strong>The mechanics of the non-refundable rate</strong>, since the details decide whether it suits you:",
          ],
        },
        {
          kind: "rows",
          rows: [
            {
              title: "The guest chooses, not you",
              body: "At checkout they see both options: your standard rate with your cancellation policy, or 10% less with no refund if they cancel.",
            },
            {
              title: "The 10% is fixed",
              body: "Airbnb sets it. You cannot raise or lower the reduction, which is part of why it stays credible.",
            },
            {
              title: "You keep the payout if they cancel",
              body: "You keep the payout for all nights booked, minus the cleaning fee if the cancellation happens before check-in.",
            },
            {
              title: "It shows in search",
              body: "The discounted rate appears in search results, which is the visibility the markup method was reaching for.",
            },
            {
              title: "It applies within 60 days",
              body: "Only available for reservations with checkout dates inside 60 days, and it does not apply to pre-approvals or special offers.",
            },
            {
              title: "It closes when your policy kicks in",
              body: "Guests can book the non-refundable rate until your cancellation policy window starts, which depends on whether your policy is Flexible, Moderate, Limited or Firm. Airbnb retired the old Strict tier in October 2025.",
            },
          ],
        },
        {
          kind: "note",
          eyebrow: "How to think about last-minute",
          body: "Set the window narrow enough that it only bites when a date is genuinely at risk. A discount that applies four weeks out is not yield management, it is just a lower price — and your 60-day median will quietly follow it down.",
        },
      ],
    },
    {
      id: "still-worth-knowing",
      n: "07",
      title: "One thing that is still worth knowing",
      tocLabel: "Still worth knowing",
      blocks: [
        {
          kind: "prose",
          paras: [
            "Not a support issue is not the same as not a rule. These are two different questions and it is worth keeping them apart.",
            "In the European Union, announcing a price reduction carries a specific requirement. Under the Omnibus Directive, when you advertise a discount you must show the prior price — and that prior price has to be <strong>the lowest price you actually charged in the 30 days before the reduction.</strong>",
            "That rule exists independently of anything Airbnb does. It is consumer law, it applies to you as a trader, and it is why the 30-day reference period exists at all.",
            "In practice this mostly resolves itself, because the tactic does not work well enough to produce a meaningfully fake discount in the first place. But it is the reason I would not build a pricing strategy on manufacturing reductions, even if the platform lets you try.",
          ],
        },
        {
          kind: "note",
          eyebrow: "The simple test",
          body: "Before you display any discount, ask: <strong>did a real guest pay the crossed-out price recently?</strong> If the honest answer is yes, show it proudly. If it is no, you are not looking at a discount.",
        },
      ],
    },
    {
      id: "what-to-do",
      n: "08",
      title: "What to do instead",
      tocLabel: "What to do instead",
      blocks: [
        {
          kind: "prose",
          paras: [
            "Six things that work, in rough order of what to do first. Tick them off as you set them up — your progress saves on this device.",
          ],
        },
        {
          kind: "rows",
          trackKey: "alts",
          trackLabel: "Set up",
          rows: [
            {
              title: "Put your base price back to what you would actually charge",
              body: "The first and most valuable move. An inflated base makes you the expensive listing on the page, and the discount it buys you is smaller than promised.",
            },
            {
              title: "Turn on the non-refundable rate",
              body: "Two prices side by side, both real, and the lower one shows in search. This is the honest version of the whole trick and it takes two minutes to enable.",
            },
            {
              title: "Set a narrow last-minute window",
              body: "Close enough in that it only triggers on dates you were genuinely about to lose. Wide windows just lower your price and drag your median down with them.",
            },
            {
              title: "Build a real price history",
              body: "Hold a consistent price long enough for your 60-day median to reflect what you actually charge. Everything else calculates from this number.",
            },
            {
              title: "Discount for length of stay",
              body: "Weekly and monthly reductions are real discounts tied to a real reason, and they attract the longer bookings that cost you less per night to service.",
            },
            {
              title: "Run a genuine custom promotion",
              body: "Once your reference price is honest, a real reduction of 10% or more earns the search treatment properly.",
            },
          ],
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
              q: "So is this tactic dangerous or not?",
              a: [
                "No. From the support side it is a non-issue — the platform limits it and it is not something hosts get into trouble over.",
                "The cost is not risk, it is waste. You end up priced above your neighbours for a discount badge that is smaller than you were promised, or missing.",
              ],
            },
            {
              q: "I already did this. Do I need to undo it urgently?",
              a: [
                "Not urgently, no. Nothing bad is accumulating.",
                "Put your base price back to what you would genuinely charge whenever you get to it, then let your 60-day median settle.",
              ],
            },
            {
              q: "Why does the non-refundable rate work when the markup does not?",
              a: [
                "Because both numbers are true. Nothing was inflated to make the lower one look better, so there is nothing for the system to correct and nothing for a guest to feel misled by.",
                "The guest is making a genuine trade: a lower price in exchange for giving up flexibility. That is a real offer, and real offers hold up.",
              ],
            },
            {
              q: "Does the non-refundable rate cost me bookings from cautious guests?",
              a: [
                "It should not, because it is added alongside your standard rate rather than replacing it. A guest who wants flexibility simply picks the standard option.",
                "What it does is open you up to guests who are certain of their dates and want the cheaper price.",
              ],
            },
            {
              q: "How close is too close for a last-minute discount?",
              a: [
                "There is no single right answer, but the principle is clear: the window should only cover dates you were realistically about to lose.",
                "A discount applying four weeks out is not yield management, it is just a lower price — and your median will follow it down, which quietly shrinks every future promotion.",
              ],
            },
            {
              q: "What about the EU rule on discounts?",
              a: [
                "It is real and it applies to you as a trader if you host in the EU. An advertised reduction has to reference the lowest price you actually charged in the previous 30 days.",
                "In practice it rarely bites here, because the tactic does not produce a large enough fake reduction to matter.",
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
            {
              title: "Stop worrying about it",
              body: "If you already set this up, you are not in trouble. Nothing needs undoing urgently.",
            },
            {
              title: "Put your base price back",
              body: "Set the price you would actually charge, and leave it there. Right now the markup is costing you bookings against your neighbours.",
            },
            {
              title: "Turn on the non-refundable rate",
              body: "It is the honest version of what you were trying to do, and it takes two minutes.",
            },
            {
              title: "Set a narrow last-minute window",
              body: "Close enough in that it only triggers on dates you were about to lose.",
            },
            {
              title: "Let your history settle",
              body: "Hold a consistent price for 60 days so your median reflects what you genuinely charge.",
            },
            {
              title: "Then run a real promotion",
              body: "Once your reference price is honest, a genuine 10% reduction earns the badge properly.",
            },
          ],
        },
      ],
    },
  ],
  closing: {
    eyebrow: "The other half of every lesson",
    heading: "The support view is why this one reads differently",
    paras: [
      "Most pricing advice would have told you this tactic was dangerous. It is not. Knowing the difference between a real risk and a loud warning is the kind of thing you only get from having sat on the other side of it.",
      "That is what Host Insider Pro is: three years of patterns from inside Airbnb’s Resolutions team, applied to the decisions you are making right now.",
    ],
  },
  sources:
    "Airbnb’s discount mechanics — the 60-day median reference, the highest-booked-price cap and the eligibility windows — are described in Airbnb’s own resources on combining discounts and rule sets. The non-refundable option, its fixed 10% reduction and its cancellation terms are documented in Airbnb’s help article on offering a non-refundable option. The EU requirement comes from the Omnibus Directive, which amends the Price Indication Directive.",
  disclaimer:
    "<strong>Not legal or tax advice.</strong> I do not speak for Airbnb, I share no one’s case details, and I have no influence over any decision on any account. What I have is pattern recognition from working the support side.",
};
