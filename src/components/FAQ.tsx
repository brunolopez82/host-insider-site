"use client";

import { useState } from "react";
import { FadeIn, Section, Heading, Eyebrow } from "./ui";

const FAQS = [
  {
    q: "Is this an official Airbnb community?",
    a: "No. Host Insider Pro is an independent community created for Airbnb hosts. It is not operated, sponsored or endorsed by Airbnb.",
  },
  {
    q: "Who is the community for?",
    a: "Airbnb hosts at different stages, from new hosts to experienced operators.",
  },
  {
    q: "Do I need multiple properties?",
    a: "No. The community is also designed for hosts with one property.",
  },
  {
    q: "Are the courses finished?",
    a: "Not yet. The Academy is intentionally being built with the founding members around real host needs.",
  },
  {
    q: "What does \"inside Airbnb\" mean?",
    a: "Bruno has more than 3 years of professional experience working in Airbnb's Resolutions team. The community does not share confidential information, internal-only procedures or privileged access.",
  },
  {
    q: "Will you help me contact Airbnb Support?",
    a: "The community can help you prepare, understand situations and communicate clearly, but it does not replace official Airbnb Support or guarantee outcomes.",
  },
  {
    q: "Is legal or tax advice included?",
    a: "No. Local laws, regulations and tax obligations vary by location. Members should consult qualified local professionals where appropriate.",
  },
  {
    q: "Can I cancel?",
    a: "PLACEHOLDER — insert the real Skool billing and cancellation terms here before publishing. Do not launch with this placeholder live.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section className="bg-deep-blue/20">
      <FadeIn>
        <Eyebrow>Questions</Eyebrow>
        <Heading>FAQ</Heading>
      </FadeIn>

      <div className="mt-10 max-w-2xl divide-y divide-border">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="py-5">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left"
              >
                <span className="font-medium text-white text-base md:text-lg">
                  {item.q}
                </span>
                <span
                  className={`text-gold-soft text-xl shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <p className="mt-3 text-slate leading-relaxed">{item.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
