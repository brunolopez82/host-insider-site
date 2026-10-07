import { FadeIn, Section, Heading, Eyebrow, Lead, Card, PrimaryCTA } from "./ui";

const COURSES = [
  { n: "01", title: "New Host Checklist", sub: "From setup to go-live." },
  { n: "02", title: "The Airbnb Algorithm", sub: "Myths vs reality." },
  { n: "03", title: "Reviews Removal", sub: "When it's possible & what to do." },
  { n: "04", title: "Host Casebook", sub: "Real situations & what to do." },
  { n: "05", title: "Build Your Own Website", sub: "Without hiring an agency." },
  { n: "06", title: "Pricing Strategy", sub: "Charge smarter, get more bookings." },
  { n: "07", title: "Calendar Management", sub: "Availability, bookings & avoiding problems." },
  { n: "08", title: "Host Hangout", sub: "Recorded call library." },
];

export function Academy() {
  return (
    <Section tone="light">
      <FadeIn>
        <Eyebrow>Host Insider Pro Academy</Eyebrow>
        <Heading>Practical lessons. Real cases. Built for hosts.</Heading>
        <Lead className="mt-6 max-w-2xl">
          The Academy is intentionally being built with the founding members.
          We&apos;re not creating hundreds of generic videos before knowing
          what hosts actually need. Courses, workshops, checklists and
          playbooks will be built around real questions, real problems and
          real host experiences.
        </Lead>
      </FadeIn>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {COURSES.map((c, i) => (
          <FadeIn key={c.n} delay={i * 0.05}>
            <Card className="h-full relative">
              <span className="absolute top-6 right-6 rounded-full brand-gradient-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-orange-deep">
                Soon
              </span>
              <p className="brand-gradient-text text-2xl font-extrabold">{c.n}</p>
              <h3 className="text-base font-bold mt-2 mb-1 pr-14 tracking-[-0.02em]">
                {c.title}
              </h3>
              <p className="text-text-muted text-sm">{c.sub}</p>
            </Card>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3} className="mt-10">
        <p className="font-accent text-2xl text-orange mb-5">
          Founding members help shape what gets built next.
        </p>
        <PrimaryCTA>Join Host Insider Pro</PrimaryCTA>
      </FadeIn>
    </Section>
  );
}
