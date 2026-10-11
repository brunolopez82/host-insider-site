import Image from "next/image";
import Link from "next/link";
import {
  Card,
  Eyebrow,
  FadeIn,
  Heading,
  Lead,
  PrimaryCTA,
  Section,
} from "@/components/ui";
import * as C from "@/content/home";
import {
  InsideOverview,
  LessonOnPhone,
  StatBand,
  TwoViewsDiagram,
} from "@/components/home/Visuals";

/* Paragraphs carry inline <strong>, same convention as the resource pages. */
function Prose({ paras, className = "" }: { paras: string[]; className?: string }) {
  return (
    <div className={`space-y-5 ${className}`}>
      {paras.map((p, i) => (
        <p
          key={i}
          className="text-[color:var(--fg-muted)] text-base md:text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: p }}
        />
      ))}
    </div>
  );
}

/* ───────────────────────────────── Hero */
export function HomeHero() {
  return (
    <Section tone="light" className="!pt-16 md:!pt-24 !pb-16 md:!pb-20">
      <div className="max-w-[860px]">
        <FadeIn>
          <Eyebrow>{C.hero.eyebrow}</Eyebrow>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.04] tracking-[-0.035em] text-[color:var(--fg)]">
            {C.hero.h1}
            <br />
            <span className="accent-ink">{C.hero.h1Accent}</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Lead className="mt-7 max-w-[680px] md:!text-xl">{C.hero.lede}</Lead>
        </FadeIn>

        <FadeIn delay={0.16}>
          <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4">
            <PrimaryCTA>{C.hero.cta}</PrimaryCTA>
            <span className="text-sm font-semibold accent-ink">
              {C.hero.subCta}
            </span>
          </div>

          {/* 14px floor: this is the independence statement, so it must not be
              the hardest text on the page to read. */}
          <p className="mt-8 max-w-[620px] text-sm leading-relaxed text-[color:var(--fg-muted)]">
            {C.hero.disclaimer}
          </p>
        </FadeIn>
      </div>

      {/* Numbers directly under the hero: the only hard facts on the page,
          placed where a skimmer meets them before any argument. */}
      <FadeIn delay={0.24}>
        <div className="mt-16">
          <StatBand />
        </div>
      </FadeIn>
    </Section>
  );
}

/* ───────────────────────────────── Problem */
export function HomeProblem() {
  return (
    <Section tone="off">
      <div className="max-w-[760px]">
        <FadeIn>
          <Eyebrow>{C.problem.eyebrow}</Eyebrow>
          <Heading>{C.problem.heading}</Heading>
        </FadeIn>
        <FadeIn delay={0.08}>
          <Prose paras={C.problem.paras} className="mt-7" />
        </FadeIn>
      </div>
    </Section>
  );
}

/* ───────────────────────────────── Live today */
export function HomeLiveToday() {
  return (
    <Section tone="light">
      <FadeIn>
        <Eyebrow>Available today</Eyebrow>
        <Heading className="max-w-[760px]">
          What {C.PRICE} a month buys you right now
        </Heading>
        <Lead className="mt-5 max-w-[640px]">
          Not a list of plans. This is what exists the day you join.
        </Lead>
      </FadeIn>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {C.liveToday.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.06}>
            <Card className="h-full">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "var(--color-orange)" }}
                />
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-[color:var(--fg)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[color:var(--fg-muted)] leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>

      {/* The strongest proof on the page: a real published lesson, shown as it
          reads on a phone, with a link to the live page so nothing has to be
          taken on trust. */}
      <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-14 lg:items-center">
        <FadeIn>
          <LessonOnPhone />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div>
            <Eyebrow>Judge it before you pay</Eyebrow>
            <Heading className="!text-2xl md:!text-4xl">
              Five lessons are already live. Read one.
            </Heading>
            <Lead className="mt-5">
              Not a preview, not a lead magnet behind an email form. They are
              finished pages on this domain, free, and they are the most honest
              sample of what the material is like. If the writing is not useful
              to you, you have lost nothing.
            </Lead>
            <Link
              href="/free/strikethrough-pricing/"
              className="mt-7 inline-flex items-center gap-2 font-semibold accent-ink hover-accent-ink underline underline-offset-4"
            >
              Read the pricing lesson — no signup
              <span aria-hidden>→</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

/* ───────────────────────────────── Method: the actual differentiator */
export function HomeMethod() {
  return (
    <Section tone="peach">
      <div className="max-w-[760px]">
        <FadeIn>
          <Eyebrow>How every lesson is built</Eyebrow>
          <Heading>Taught one way. Lived another.</Heading>
          <Lead className="mt-5">
            Each lesson states the version you can find anywhere, then the
            version that comes from having read thousands of these cases. The
            two are kept separate on purpose, so you can see exactly which part
            is common knowledge and which part is not.
          </Lead>
        </FadeIn>
      </div>

      <FadeIn delay={0.12}>
        <div className="mt-12 max-w-[860px]">
          <TwoViewsDiagram />
        </div>
      </FadeIn>
    </Section>
  );
}

/* ───────────────────────────────── Everything in one frame */
export function HomeOverview() {
  return (
    <Section tone="peach">
      <div className="max-w-[760px]">
        <FadeIn>
          <Eyebrow>At a glance</Eyebrow>
          <Heading>What the membership covers</Heading>
          <Lead className="mt-5">
            Six things, stated without inflation. Some are live now, some are
            being written — the sections above say which is which.
          </Lead>
        </FadeIn>
      </div>

      <FadeIn delay={0.12}>
        <div className="mt-12 max-w-[980px]">
          <InsideOverview />
        </div>
      </FadeIn>
    </Section>
  );
}

/* ───────────────────────────────── The community image */
export function HomeRoom() {
  return (
    <Section tone="off">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
        <FadeIn>
          <Eyebrow>The room itself</Eyebrow>
          <Heading>No guests in the room</Heading>
          <Lead className="mt-5">
            Hosts and co-hosts only. The standards exist so threads stay useful:
            no spam, no promotion, no guest-bashing, and no turning a question
            into an argument. Disagreement is fine. Drama is not the point.
          </Lead>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            className="overflow-hidden rounded-xl border"
            style={{ borderColor: "var(--card-border)" }}
          >
            <Image
              src="/images/home/ab-3-community.webp"
              alt="A hosts-only community: replies from the founder, a monthly live Host Hangout, and real cases rather than fifty opinions."
              width={1200}
              height={675}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="w-full h-auto"
            />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

/* ───────────────────────────────── Being built */
export function HomeBeingBuilt() {
  return (
    <Section tone="light">
      <FadeIn>
        <Eyebrow>Coming, and labelled as such</Eyebrow>
        <Heading className="max-w-[820px]">{C.beingBuilt.heading}</Heading>
        <Lead className="mt-5 max-w-[720px]">{C.beingBuilt.lede}</Lead>
      </FadeIn>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {C.beingBuilt.modules.map((m, i) => (
          <FadeIn key={m.n} delay={i * 0.05}>
            <div className="h-full">
              <div
                className="overflow-hidden rounded-xl border"
                style={{ borderColor: "var(--card-border)" }}
              >
                <Image
                  src={`/images/home/${m.img}.webp`}
                  alt={`Module ${m.n}: ${m.title}`}
                  width={900}
                  height={506}
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="mt-4 text-base md:text-lg font-bold text-[color:var(--fg)]">
                {m.title}
              </h3>
              <p className="mt-1.5 text-sm md:text-base text-[color:var(--fg-muted)] leading-relaxed">
                {m.body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <p className="mt-12 max-w-[720px] text-sm md:text-base leading-relaxed text-[color:var(--fg-muted)]">
          {C.beingBuilt.planned}
        </p>
      </FadeIn>
    </Section>
  );
}

/* ───────────────────────────────── Credibility */
export function HomeCredibility() {
  return (
    <Section tone="off">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14 lg:items-center">
        <FadeIn>
          <Eyebrow>{C.credibility.eyebrow}</Eyebrow>
          <Heading>{C.credibility.heading}</Heading>
          <Prose paras={C.credibility.paras} className="mt-7" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            className="overflow-hidden rounded-xl border"
            style={{ borderColor: "var(--card-border)" }}
          >
            <Image
              src="/images/home/presentation.webp"
              alt="Former Airbnb Resolutions team: over three years on the other side of Airbnb, and more than 3,000 disputes mediated."
              width={1400}
              height={788}
              sizes="(min-width: 1024px) 520px, 100vw"
              className="w-full h-auto"
            />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

/* ───────────────────────────────── No proof yet */
export function HomeNoProof() {
  return (
    <Section tone="light">
      <div className="max-w-[720px]">
        <FadeIn>
          <Eyebrow>{C.noProof.eyebrow}</Eyebrow>
          <Heading>{C.noProof.heading}</Heading>
          <Prose paras={C.noProof.paras} className="mt-7" />
        </FadeIn>
      </div>
    </Section>
  );
}

/* ───────────────────────────────── Objection */
export function HomeObjection() {
  return (
    <Section tone="peach">
      <div className="max-w-[760px]">
        <FadeIn>
          <Eyebrow>{C.objection.eyebrow}</Eyebrow>
          <Heading>{C.objection.heading}</Heading>
          <Prose paras={C.objection.paras} className="mt-7" />
        </FadeIn>
        <FadeIn delay={0.12}>
          <div className="mt-9">
            <PrimaryCTA>{C.hero.cta}</PrimaryCTA>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

/* ───────────────────────────────── Fit */
export function HomeForWhom() {
  return (
    <Section tone="light">
      <FadeIn>
        <Heading className="max-w-[700px]">{C.forWhom.heading}</Heading>
      </FadeIn>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <FadeIn>
          <Card className="h-full">
            <p className="text-sm font-bold tracking-[0.14em] uppercase accent-ink">
              This is for
            </p>
            <ul className="mt-5 space-y-3">
              {C.forWhom.yes.map((t) => (
                <li key={t} className="flex gap-3 text-[color:var(--fg)]">
                  <span aria-hidden className="accent-ink font-bold">
                    +
                  </span>
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Card className="h-full">
            <p className="text-sm font-bold tracking-[0.14em] uppercase text-[color:var(--fg-muted)]">
              This is not for
            </p>
            <ul className="mt-5 space-y-3">
              {C.forWhom.no.map((t) => (
                <li
                  key={t}
                  className="flex gap-3 text-[color:var(--fg-muted)]"
                >
                  <span aria-hidden className="font-bold">
                    −
                  </span>
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>
      </div>
    </Section>
  );
}

/* ───────────────────────────────── FAQ
   Native <details> so it works with no JavaScript and costs no hydration. */
export function HomeFAQ() {
  return (
    <Section tone="off">
      <div className="max-w-[820px]">
        <FadeIn>
          <Eyebrow>Before you join</Eyebrow>
          <Heading>Questions hosts ask</Heading>
        </FadeIn>

        <div className="mt-10 space-y-3">
          {C.faq.map((item, i) => (
            <FadeIn key={item.q} delay={Math.min(i * 0.04, 0.2)}>
              <details
                className="group rounded-xl border px-5 py-4"
                style={{
                  background: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                }}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-[color:var(--fg)] list-none [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden
                    className="accent-ink text-xl leading-none transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[color:var(--fg-muted)] leading-relaxed">
                  {item.a}
                </p>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────────────── Pricing */
export function HomePricing() {
  return (
    <Section tone="light" id="pricing">
      <div className="max-w-[760px]">
        <FadeIn>
          <Eyebrow>{C.pricing.eyebrow}</Eyebrow>
          <Heading>{C.pricing.heading}</Heading>
          <Lead className="mt-5">{C.pricing.lede}</Lead>
        </FadeIn>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 max-w-[900px]">
        <FadeIn>
          <div
            className="h-full rounded-xl border-2 p-7"
            style={{
              borderColor: "var(--color-orange)",
              background: "var(--card-bg)",
            }}
          >
            <p className="text-sm font-bold tracking-[0.14em] uppercase accent-ink">
              {C.pricing.foundingTitle}
            </p>
            <p className="mt-4 text-3xl md:text-4xl font-extrabold text-[color:var(--fg)]">
              {C.pricing.foundingPrice}
            </p>
            <p className="mt-4 text-[color:var(--fg-muted)] leading-relaxed">
              {C.pricing.foundingBody}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Card className="h-full">
            <p className="text-sm font-bold tracking-[0.14em] uppercase text-[color:var(--fg-muted)]">
              {C.pricing.paidTitle}
            </p>
            <p className="mt-4 text-3xl md:text-4xl font-extrabold text-[color:var(--fg)]">
              {C.PRICE}
              <span className="text-lg font-bold text-[color:var(--fg-muted)]">
                {" "}
                / month
              </span>
            </p>
            <p className="mt-1 text-sm text-[color:var(--fg-muted)]">
              About {C.PRICE_PER_DAY} a day.
            </p>
            <p className="mt-4 text-[color:var(--fg-muted)] leading-relaxed">
              {C.pricing.paidBody}
            </p>
          </Card>
        </FadeIn>
      </div>

      <FadeIn delay={0.16}>
        <div className="mt-10">
          <PrimaryCTA>{C.hero.cta}</PrimaryCTA>
          <p className="mt-4 text-sm text-[color:var(--fg-muted)]">
            {C.PRICE_NOTE}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.24}>
        <ul className="mt-12 max-w-[760px] space-y-2.5 border-t pt-8"
          style={{ borderColor: "var(--divider)" }}
        >
          {C.pricing.terms.map((t) => (
            <li
              key={t}
              className="text-sm leading-relaxed text-[color:var(--fg-muted)]"
            >
              {t}
            </li>
          ))}
        </ul>
      </FadeIn>
    </Section>
  );
}

/* ───────────────────────────────── Close */
export function HomeClose() {
  return (
    <Section tone="peach">
      <div className="max-w-[760px]">
        <FadeIn>
          <Eyebrow>{C.close.eyebrow}</Eyebrow>
          <Heading>{C.close.heading}</Heading>
          <Prose paras={C.close.paras} className="mt-7" />
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="mt-10">
            <PrimaryCTA>{C.close.cta}</PrimaryCTA>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-[color:var(--fg-muted)]">
            {C.close.foot}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--fg-muted)]">
            {C.hero.disclaimer}
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
