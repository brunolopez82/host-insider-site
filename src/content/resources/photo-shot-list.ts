import type { Resource, Row } from "./types";

type Shot = {
  n: number;
  p: "Hero" | "Essential" | "Nice";
  area: string;
  t: string;
  w: string;
  s: string;
};

const SHOTS: Shot[] = [
  { n: 1, p: "Hero", area: "Cover", t: "Wide of the main living space, every light on", w: "This becomes your cover photo, and the cover photo decides whether anyone opens the listing at all.", s: "From a corner, camera at chest height. Every lamp on, overheads on, blinds open. No clutter and no visible cables." },
  { n: 2, p: "Hero", area: "Cover", t: "The one feature the others nearby do not have", w: "Photo two is where you separate yourself from every similar listing in your area.", s: "Pool, view, hot tub, fireplace, the architecture itself. If you cannot name the feature, that is worth solving before the shoot." },
  { n: 3, p: "Hero", area: "Cover", t: "Primary bedroom, straight on, a nightstand on each side", w: "Guests are booking somewhere to sleep. The bed drives more review comments than anything else in the property.", s: "Camera centered on the bed, waist to counter height. Pressed linens, four or more pillows, a throw folded at the foot." },
  { n: 4, p: "Hero", area: "Cover", t: "Kitchen, wide, counters completely clear", w: "A clear counter reads as equipped and clean before anyone has read a word of your description.", s: "Nothing on the counters except one small styled group. Nothing on the fridge door." },
  { n: 5, p: "Hero", area: "Cover", t: "Exterior, shot in good light", w: "This sets the expectation your guest arrives with, which is where a lot of arrival-day friction starts.", s: "Golden hour. Cars out of frame, trash cans out of sight, lawn cut." },

  { n: 6, p: "Essential", area: "Living", t: "Second angle from the opposite corner", w: "Two angles let a guest assemble a floor plan in their head. One angle leaves them guessing.", s: "Shoot the reverse of your cover photo." },
  { n: 7, p: "Essential", area: "Living", t: "Seating area straight on, sofa styled", w: "Shows the real capacity for a group rather than asking them to take your word for it.", s: "Cushions plumped, throw pillows angled, blanket folded over one arm." },
  { n: 8, p: "Essential", area: "Living", t: "Television and media wall", w: "Filtered for more often than most hosts expect.", s: "Screen off and wiped. A black screen photographs better than a paused menu." },
  { n: 9, p: "Essential", area: "Living", t: "The window, or the view from inside", w: "Natural light is one of the most frequently praised things in reviews.", s: "Expose for the window, then light the room with lamps so both read." },
  { n: 10, p: "Nice", area: "Living", t: "Decor detail, close", w: "Texture shots make a property read as designed rather than furnished.", s: "Books, a plant, a tray, a lamp. Shallow depth of field." },

  { n: 11, p: "Essential", area: "Kitchen", t: "Kitchen, second angle", w: "Shows the layout and how the room actually flows.", s: "Get the sink and the range in one frame if the room allows it." },
  { n: 12, p: "Essential", area: "Kitchen", t: "Island or main counter, one styled group", w: "A single warm focal point stops a clean kitchen reading as a sterile one.", s: "A cutting board, a bowl of fruit, a folded dish towel. Nothing more than that." },
  { n: 13, p: "Essential", area: "Kitchen", t: "Coffee station", w: "The most searched-for single item in any kitchen.", s: "Machine, mugs, and beans or pods, all visible in frame." },
  { n: 14, p: "Essential", area: "Kitchen", t: "An open cabinet or drawer, dishware stocked", w: "Proves fully equipped instead of claiming it. One of the strongest trust signals you can photograph.", s: "Matching plates, stacked straight, facing front." },
  { n: 15, p: "Essential", area: "Kitchen", t: "The major appliances, in frame", w: "Closes off the listing never showed a dishwasher conversation before it can start.", s: "Wipe every stainless surface. Fingerprints are obvious in photographs." },

  { n: 16, p: "Essential", area: "Dining", t: "Dining table set for your maximum guest count", w: "Shows that the number in your listing is real.", s: "Full place settings. Keep the centerpiece low enough to see across." },

  { n: 17, p: "Essential", area: "Bedroom 1", t: "Wide, from the doorway", w: "Establishes the size of the room honestly.", s: "Stand in the door frame, slightly off center." },
  { n: 18, p: "Essential", area: "Bedroom 1", t: "Bed straight on, nightstand on each side", w: "Symmetry reads calm, and it shows both sleepers get their own surface and their own lamp.", s: "Camera centered, waist height, both nightstands in frame." },
  { n: 19, p: "Essential", area: "Bedroom 1", t: "Nightstand detail, lamp on", w: "A small signal that somebody thought about the stay.", s: "Lamp on, a book, water, and a visible charging point." },
  { n: 20, p: "Nice", area: "Bedroom 1", t: "Closet staged with hangers and a luggage rack", w: "Shows guests they can unpack properly, which matters more the longer the stay.", s: "Matching wooden hangers, evenly spaced. Rack open and ready." },

  { n: 21, p: "Essential", area: "Bedroom 2+", t: "Wide from the doorway, once per bedroom", w: "A bedroom with no photo gets assumed to be the worst one.", s: "Repeat this shot for every additional bedroom." },
  { n: 22, p: "Essential", area: "Bedroom 2+", t: "Bed straight on, once per bedroom", w: "Consistent framing across rooms reads as a property that is run properly.", s: "Same framing as the primary. Vary the styling slightly so the rooms stay distinguishable." },

  { n: 23, p: "Essential", area: "Bathroom 1", t: "Wide, showing the full layout", w: "The first thing guests look for is whether there is anywhere to put anything.", s: "Toilet lid down. In every bathroom shot, without exception." },
  { n: 24, p: "Essential", area: "Bathroom 1", t: "Vanity, towels and toiletries staged", w: "This is the shot that separates hotel-grade from rental-grade.", s: "White towels, rolled or folded. Nothing personal and nothing half-used." },
  { n: 25, p: "Essential", area: "Bathroom 1", t: "Shower or tub", w: "Walk-in versus tub is a real booking filter, particularly for families.", s: "Glass squeegeed clean. Curtain hanging straight rather than clinging." },
  { n: 26, p: "Nice", area: "Bathroom 1", t: "Toiletry detail", w: "A small luxury cue that lifts what the room appears to be worth.", s: "Matching dispensers. No branded half-empty bottles." },

  { n: 27, p: "Essential", area: "Bathroom 2+", t: "Wide, once per bathroom", w: "Bathroom count is one of the top search filters. Show each one you claim.", s: "Repeat for every additional bathroom." },

  { n: 28, p: "Essential", area: "Outdoor", t: "Patio, deck or balcony, wide", w: "Outdoor space is one of the strongest justifications for a higher rate.", s: "Cushions out, furniture squared up, umbrella open." },
  { n: 29, p: "Essential", area: "Outdoor", t: "Outdoor dining or lounge set", w: "Shows the space is usable, not simply present.", s: "Set the table. Add a tray with drinks." },
  { n: 30, p: "Essential", area: "Outdoor", t: "Pool or hot tub", w: "The highest-converting single photo most properties are able to take.", s: "Skim it first. Shoot at dusk with the light on." },
  { n: 31, p: "Essential", area: "Outdoor", t: "Fire pit or outdoor heater", w: "Extends your season in the guest's mind.", s: "Dusk, and lit." },
  { n: 32, p: "Essential", area: "Outdoor", t: "Grill", w: "Filtered for often, photographed well rarely.", s: "Clean the grates. A dirty grill loses bookings." },
  { n: 33, p: "Nice", area: "Outdoor", t: "Yard or grounds, wide", w: "Gives a sense of privacy and of how much space there is.", s: "Include a boundary line so the size is readable." },
  { n: 34, p: "Nice", area: "Outdoor", t: "The view, at golden hour", w: "A genuine view justifies a premium rate on its own.", s: "Twenty minutes before sunset. Bracket your exposures." },

  { n: 35, p: "Essential", area: "Amenities", t: "Workspace, chair and outlet visible", w: "Remote work is one of the largest demand segments there is.", s: "A real desk and a real chair. A nightstand will not pass." },
  { n: 36, p: "Essential", area: "Amenities", t: "Washer and dryer", w: "Filtered heavily for any stay over three nights.", s: "Doors open, drums empty and clean." },
  { n: 37, p: "Essential", area: "Amenities", t: "Parking, whether driveway, garage or space", w: "Parking is the most common arrival-day complaint there is.", s: "Shoot from the street so the approach is clear." },
  { n: 38, p: "Nice", area: "Amenities", t: "Family gear, crib, high chair, safety gates", w: "Opens up families, who book longer and further off-peak.", s: "Set up and ready, not folded in a corner." },
  { n: 39, p: "Nice", area: "Amenities", t: "Game room, gym or bonus space", w: "Often the deciding photo for a group trip.", s: "Lights on, equipment staged as though in use." },
  { n: 40, p: "Nice", area: "Amenities", t: "EV charger", w: "A small filter with very little competition on it yet.", s: "Plug and parking spot in the same frame." },

  { n: 41, p: "Essential", area: "Arrival", t: "Front exterior and entry door", w: "Guests use this photo to find the property, which cuts your arrival messages down.", s: "Include the house number if you are comfortable showing it." },
  { n: 42, p: "Nice", area: "Arrival", t: "Entryway, from inside", w: "The first impression on walking in, and it sets the tone for the rest.", s: "Bench, hooks, mirror. Nothing on the floor." },

  { n: 43, p: "Nice", area: "Context", t: "The street, or the approach to the building", w: "Being straight about the setting prevents a particular kind of review.", s: "Daylight, clean framing." },
  { n: 44, p: "Nice", area: "Context", t: "A nearby landmark, beach or main street", w: "Sells the trip rather than only the property.", s: "Only shoot what is genuinely walkable or a very short drive." },

  { n: 45, p: "Nice", area: "Extras", t: "Twilight exterior, every interior light on", w: "The most shared listing photo there is, and a strong alternate cover.", s: "Fifteen to twenty-five minutes after sunset. Every light in the house on." },
  { n: 46, p: "Nice", area: "Extras", t: "Welcome setup, local snacks, a note, the guidebook", w: "Reads as hospitality, which is what five-star reviews are usually about.", s: "Keep it simple and keep it genuinely local." },
  { n: 47, p: "Nice", area: "Extras", t: "Lifestyle shot with people in frame", w: "Helps a guest picture themselves there. Use one or two at most.", s: "Backs to camera or cropped. Written permission if anyone is identifiable." },
];

const PREP: { phase: string; items: string[] }[] = [
  {
    phase: "1 week out",
    items: [
      "Buy two sets of bulbs: bright white (5000K) for the shoot, soft white (2700K) for guest stays",
      "Replace every dead bulb and match the color temperature throughout — mismatched bulbs leave color casts that are expensive to correct afterward",
      "Book a sunny day if the property has a view or any outdoor space",
      "Confirm the photographer will deliver both horizontal and vertical crops",
      "Order anything missing for styling: white towels, throw pillows, a cutting board, plants",
    ],
  },
  {
    phase: "Day before",
    items: [
      "Deep clean, paying particular attention to glass, mirrors, stainless and grout",
      "Wash and press all bed linens — wrinkles are the single thing that cheapens a photo most",
      "Clear every kitchen and bathroom counter down to nothing",
      "Hide every cord, charger, router and remote",
      "Remove personal items, mail, medications, family photos and pet gear",
      "Take down anything showing a brand logo or a guest's name",
      "Mow, weed, sweep the patio and clean the outdoor furniture",
      "Skim and clean the pool or hot tub",
      "Empty every trash can and move the bins out of sight",
    ],
  },
  {
    phase: "Shoot day",
    items: [
      "Swap every bulb to bright white (5000K) before the photographer arrives",
      "Turn on every light, including lamps and under-cabinet lighting",
      "Open every blind and curtain fully, in every room",
      "Move all vehicles off the driveway and out of frame",
      "Set the thermostat so nobody is sweating — it shows in the styling",
      "Toilet lids down, shower curtains straightened, towels rolled or folded",
      "Angle furniture very slightly off-square — it reads warmer than perfectly parallel",
      "Walk the property once with fresh eyes before the photographer starts",
    ],
  },
  {
    phase: "After",
    items: [
      "Swap the bulbs back to soft white (2700K) for guest stays",
      "Get the RAW or full-resolution files, not only the web exports",
      "Write a caption for every photo — captions are indexed and most hosts leave them empty",
      "Save a master copy off-platform so you own the files",
    ],
  },
];

const shotRows: Row[] = SHOTS.map((s) => ({
  title: s.t,
  body: s.w,
  detail: s.s,
  tag: s.p,
  tagTone: s.p === "Hero" ? "accent" : s.p === "Essential" ? "neutral" : "quiet",
  group: s.area,
}));

const prepRows: Row[] = PREP.flatMap((p) =>
  p.items.map((t) => ({ title: t, group: p.phase })),
);

const SHOTS_PLAIN = [
  "SHORT-TERM RENTAL PHOTO SHOT LIST",
  "47 shots. Hero = the first five gallery photos, in order.",
  "",
  ...SHOTS.reduce<string[]>((acc, s, i) => {
    if (i === 0 || s.area !== SHOTS[i - 1].area) {
      acc.push(`— ${s.area.toUpperCase()} —`);
    }
    acc.push(`${String(s.n).padStart(2, "0")}. [${s.p.toUpperCase()}] ${s.t}`);
    acc.push(`    Why: ${s.w}`);
    acc.push(`    Staging: ${s.s}`);
    if (i === SHOTS.length - 1 || s.area !== SHOTS[i + 1]?.area) acc.push("");
    return acc;
  }, []),
].join("\n");

const PREP_PLAIN = [
  "PRE-SHOOT PREP CHECKLIST",
  "Prep drives photo quality more than camera gear does.",
  "",
  ...PREP.flatMap((p) => [
    `— ${p.phase.toUpperCase()} (${p.items.length}) —`,
    ...p.items.map((t) => `[ ] ${t}`),
    "",
  ]),
].join("\n");

export const photoShotList: Resource = {
  slug: "photo-shot-list",
  title: "The Photo Shot List",
  eyebrow: "Free resource · Photos",
  metaDescription:
    "Every shot your Airbnb listing needs, in the order that matters, plus the staging that makes each one work. 47 shots and a 26-task prep checklist.",
  lede: "Every shot your Airbnb listing needs, in the order that matters — plus the staging that makes each one work. <strong>Written from the support side, not the marketing side.</strong>",
  stats: [
    { n: "47", label: "Shots" },
    { n: "26", label: "Prep tasks" },
    { n: "5", label: "That decide everything" },
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
            "Your first five photos decide almost everything. Shoot them first, in the order given.",
            "Prep decides photo quality more than the camera does. Clear counters, pressed linens, no visible cords.",
            "Shoot under bright white 5000K bulbs, then swap back to soft white 2700K for guests.",
            "Send the 47-shot list to your photographer <em>before</em> the shoot. There is a copy button in section 04.",
            "Write a caption on every photo. Most hosts leave them blank, and captions are indexed.",
          ],
          pills: ["<b>5</b> Hero", "<b>28</b> Essential", "<b>14</b> Nice to have"],
        },
      ],
    },
    {
      id: "two-views",
      n: "02",
      title: "Why this point gets two views",
      tocLabel: "Why two views",
      blocks: [
        {
          kind: "lead",
          text: "Photos are the loudest advice in hosting. Everybody tells you to get good ones, and everybody is right. Almost nobody tells you what a photo <em>is</em>, after the booking.",
        },
        {
          kind: "spine",
          label: "The marketing view",
          paras: [
            "Photos are the highest-leverage thing on your listing. Guests decide in a swipe, and they decide on the picture long before they read a word you wrote.",
            "So the advice runs like this, and it runs like this everywhere. Hire a professional. Shoot in daylight with every light on and every blind open. Lead with your strongest image. Show every bedroom and every bathroom. Photograph the amenities guests filter for. Stage before you shoot. Add a twilight exterior.",
            "<strong>That advice works.</strong> Follow it properly and you will get more bookings than the host next door who shot their place on a phone at dusk with the curtains closed.",
          ],
        },
      ],
    },
    {
      id: "support-view",
      n: "03",
      title: "The support view",
      tocLabel: "The support view",
      blocks: [
        {
          kind: "spine",
          live: true,
          awaiting: true,
          label: "The same point, from the other side",
          paras: [
            "This is the half nobody else can write, and I am not going to write it for you. Speak it and it goes in, in your voice.",
            "What I need from you to finish this point:",
          ],
          questions: [
            "When a guest was unhappy and the photos were part of it, what was the actual complaint? A room that looked bigger, a view that turned out to be partly blocked, something in frame that was no longer there?",
            "Which rooms or features came up most often? Your instinct beats my guess here.",
            "Does an old photo land differently from one that was merely flattering? Is that a real distinction on the support side, or the same conversation?",
            "Where does the burden actually sit when the photo and the property do not match? What is the realistic outcome for a host in that position?",
            "Is there anything hosts routinely photograph that you would tell them not to, having seen where it leads?",
            "And the one I cannot guess at all: what should a host do <em>before</em> the shoot that would have prevented the situations you kept seeing?",
          ],
        },
      ],
    },
    {
      id: "shot-list",
      n: "04",
      title: "The full shot list",
      tocLabel: "The full shot list",
      blocks: [
        {
          kind: "prose",
          paras: [
            "Work top to bottom. The first five are your gallery, in that sequence — they carry more weight than everything after them combined. Tap <strong>Detail</strong> on any shot for its staging notes.",
          ],
        },
        {
          kind: "copy",
          blurb:
            "Send all 47 shots to your photographer, grouped by area with staging notes.",
          label: "Copy the list",
          text: SHOTS_PLAIN,
        },
        {
          kind: "rows",
          trackKey: "shots",
          trackLabel: "Shots captured",
          rows: shotRows,
        },
        {
          kind: "note",
          eyebrow: "On the repeat rows",
          body: "Bedroom 2+ and Bathroom 2+ are templates, not single shots. Run them once for every additional bedroom and bathroom you have. A bedroom with no photo gets assumed to be the worst one in the property.",
        },
      ],
    },
    {
      id: "prep",
      n: "05",
      title: "Prep beats equipment",
      tocLabel: "Prep beats equipment",
      blocks: [
        {
          kind: "lead",
          text: "A clean room on a cheap camera beats a cluttered one on an expensive camera.",
        },
        {
          kind: "prose",
          paras: [
            "This is where photo quality is actually decided, and it happens before anyone turns up with a camera. Twenty-six tasks, split across four moments.",
          ],
        },
        {
          kind: "copy",
          blurb: "Take this with you, or send it to your cleaner before the shoot.",
          label: "Copy checklist",
          text: PREP_PLAIN,
        },
        {
          kind: "rows",
          trackKey: "prep",
          trackLabel: "Prep tasks complete",
          rows: prepRows,
        },
        {
          kind: "note",
          eyebrow: "The bulb rule",
          body: "Shoot at 5000K, live at 2700K. Daylight through a window is cool-toned, so warm bulbs fight it and leave rooms looking orange and dim. Then swap them back — nobody wants to relax under daylight bulbs. Two sets of bulbs and twenty minutes, and it is the cheapest quality jump available to you.",
        },
      ],
    },
    {
      id: "how-to-use",
      n: "06",
      title: "How to use this list",
      tocLabel: "How to use this list",
      blocks: [
        {
          kind: "accordion",
          items: [
            {
              q: "What do the three priorities mean?",
              a: [
                "<strong>Hero</strong> — your first five gallery photos, in the order given. These carry your click-through rate.",
                "<strong>Essential</strong> — shoot all 28. A gap here either costs you bookings or creates an arrival-day conversation.",
                "<strong>Nice</strong> — shoot if time and budget allow. These separate a good listing from a very good one.",
              ],
            },
            {
              q: "Do captions actually matter?",
              a: [
                "Write one for every photo you upload. Most hosts leave them empty, which is exactly why it is worth doing.",
                "A caption is a free chance to name a feature or an amenity, and it is indexed.",
              ],
            },
            {
              q: "When should I reshoot?",
              a: [
                "After any change to furniture, decor or amenities.",
                "Photos that match the property as it stands today are worth more than photos that flatter the property as it stood two years ago.",
              ],
            },
            {
              q: "How do I pick a photographer?",
              a: [
                "Ask specifically for short-term rental or interiors work. Real estate photographers often shoot wide and cool, which sells square footage rather than a stay. You want warm, styled and lived-in.",
                "Confirm two things before booking: that you get both horizontal and vertical crops, and that you get full-resolution files rather than web exports only.",
              ],
            },
            {
              q: "Who owns the photos afterward?",
              a: [
                "Keep a master copy off-platform. The photos are an asset you paid for, and you should hold them somewhere that does not depend on any single account staying open.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "your-path",
      n: "07",
      title: "Your path from here to a finished gallery",
      tocLabel: "Your path from here",
      blocks: [
        {
          kind: "path",
          steps: [
            { title: "Today", body: "Read sections 02 and 03, then buy two sets of bulbs. They are the one thing with a lead time." },
            { title: "This week", body: "Copy the shot list and send it to a photographer. Ask specifically for short-term rental or interiors work." },
            { title: "Name your difference", body: "Write down the one feature that makes your property different. If you cannot, solve that before spending money on photography." },
            { title: "Day before", body: "Work the nine day-before prep tasks. This is the part that actually moves quality." },
            { title: "Shoot day", body: "Swap the bulbs, open everything, then shoot the five hero photos first, in order." },
            { title: "Upload", body: "Hero five in sequence, then the rest. Write a caption on every single one." },
            { title: "Afterward", body: "Swap the bulbs back, get the full-resolution files, and keep a master copy off-platform." },
          ],
        },
      ],
    },
  ],
  closing: {
    eyebrow: "The other half of this lesson",
    heading: "The support view lives inside the community",
    paras: [
      "Everything above is the marketing view — and it is free, because you can research it. What you cannot research is what these same photos look like from the side that handles it when a guest is unhappy.",
      "That is what Host Insider Pro is for: three years of patterns from inside Airbnb's Resolutions team, applied to the decisions you are making right now.",
    ],
  },
  sources:
    "The shot priorities, staging notes and prep sequence here are written for this lesson. Caption indexing and listing-photo behaviour follow Airbnb's own hosting resources on listing quality.",
  disclaimer:
    "<strong>Not legal or tax advice.</strong> I do not speak for Airbnb, I share no one's case details, and I have no influence over any decision on any account. What I have is pattern recognition from working the support side.",
};
