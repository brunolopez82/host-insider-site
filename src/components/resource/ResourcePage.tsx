"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PrimaryCTA, SKOOL_URL } from "@/components/ui";
import { RenderBlock } from "./ResourceBlocks";
import type { Resource } from "@/content/resources/types";

export default function ResourcePage({ resource }: { resource: Resource }) {
  const [activeId, setActiveId] = useState(resource.sections[0]?.id ?? "");
  const [progress, setProgress] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    resource.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [resource.sections]);

  useEffect(() => {
    document.body.style.overflow = tocOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [tocOpen]);

  const toc = (
    <ul className="list-none p-0 m-0 flex flex-col">
      {resource.sections.map((s, i) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            onClick={() => setTocOpen(false)}
            className={`grid grid-cols-[1.9rem_1fr] gap-2 items-baseline py-2.5 pl-3 border-l-2 text-[15px] md:text-sm font-medium transition-colors ${
              activeId === s.id
                ? "accent-ink border-orange"
                : "text-[color:var(--fg-muted)] border-transparent hover:text-[color:var(--fg)]"
            }`}
          >
            <span className="text-[11px] font-bold tabular-nums tracking-wider">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{s.tocLabel}</span>
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <main className="tone-light min-h-screen text-[color:var(--fg)]">
      {/* reading progress */}
      <div className="fixed top-0 inset-x-0 h-0.5 z-50 pointer-events-none">
        <div
          className="h-full brand-gradient"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* header */}
      <header
        className="sticky top-0 z-40 h-16 flex items-center gap-4 px-6 backdrop-blur border-b"
        style={{
          background: "color-mix(in srgb, var(--card-bg) 88%, transparent)",
          borderColor: "var(--divider)",
        }}
      >
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/images/icon.webp"
            alt=""
            width={28}
            height={28}
            className="rounded-full"
          />
          <span className="font-bold text-[15px] tracking-tight">
            Host Insider <span className="accent-ink">Pro</span>
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTocOpen((v) => !v)}
            aria-expanded={tocOpen}
            aria-label="On this page"
            className="lg:hidden w-11 h-11 rounded-xl border flex items-center justify-center text-[color:var(--fg-muted)]"
            style={{ borderColor: "var(--card-border)" }}
          >
            ☰
          </button>
          <PrimaryCTA className="text-[13px] px-5 py-2.5">
            <span className="hidden sm:inline">Join the community</span>
            <span className="sm:hidden">Join</span>
          </PrimaryCTA>
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto px-6">
        {/* hero */}
        <div className="pt-14 md:pt-20 pb-10 md:pb-14 flex flex-col gap-6 max-w-[52rem]">
          <p className="accent-ink text-xs md:text-[13px] font-bold tracking-[0.18em] uppercase">
            {resource.eyebrow}
          </p>
          <h1 className="text-[40px] sm:text-[52px] md:text-[60px] font-extrabold leading-[1.04] tracking-[-0.035em]">
            {resource.title}
          </h1>
          <p
            className="text-[color:var(--fg-muted)] text-lg md:text-xl leading-relaxed max-w-[40rem]"
            dangerouslySetInnerHTML={{ __html: resource.lede }}
          />

          <div className="flex items-center gap-3.5 flex-wrap">
            <Image
              src="/images/avatar.webp"
              alt="Bruno Lopes"
              width={44}
              height={44}
              className="rounded-full object-cover"
            />
            <span className="text-[15px] leading-tight">
              <strong className="block font-bold">Bruno Lopes</strong>
              <span className="text-[color:var(--fg-muted)]">
                3 years inside Airbnb&rsquo;s Resolutions team · 3,000+ disputes
                mediated
              </span>
            </span>
          </div>

          <div
            className="flex flex-wrap gap-x-10 gap-y-5 pt-5 border-t"
            style={{ borderColor: "var(--divider)" }}
          >
            {resource.stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="brand-gradient-text text-[28px] font-extrabold tabular-nums leading-none">
                  {s.n}
                </span>
                <span className="mt-1.5 text-[11px] font-bold tracking-[0.14em] uppercase text-[color:var(--fg-muted)]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* body */}
        <div className="lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-14 items-start">
          <nav
            aria-label="On this page"
            className="hidden lg:block sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto pb-10"
          >
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[color:var(--fg-muted)] pb-3">
              On this page
            </p>
            {toc}
          </nav>

          <div className="min-w-0 flex flex-col gap-16 md:gap-24">
            {resource.sections.map((s) => (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-24 flex flex-col gap-6"
              >
                <div className="flex flex-col gap-2">
                  <span className="accent-ink text-[13px] font-bold tabular-nums tracking-wider">
                    {s.n}
                  </span>
                  <h2 className="text-3xl md:text-[40px] font-extrabold leading-[1.08] tracking-[-0.03em]">
                    {s.title}
                  </h2>
                </div>
                {s.blocks.map((b, i) => (
                  <RenderBlock key={i} block={b} storeKey={resource.slug} />
                ))}
              </section>
            ))}

            {/* closing CTA */}
            <div
              className="rounded-2xl border p-8 md:p-12 flex flex-col gap-6 items-start"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--card-border)",
              }}
            >
              <p className="accent-ink text-xs font-bold tracking-[0.18em] uppercase">
                {resource.closing.eyebrow}
              </p>
              <h2 className="text-2xl md:text-[34px] font-extrabold leading-[1.15] tracking-[-0.03em] max-w-[28rem]">
                {resource.closing.heading}
              </h2>
              <div className="flex flex-col gap-4 max-w-[38rem]">
                {resource.closing.paras.map((p, i) => (
                  <p
                    key={i}
                    className="text-[color:var(--fg-muted)] text-base leading-[1.75]"
                  >
                    {p}
                  </p>
                ))}
              </div>
              <div className="flex flex-col gap-2.5">
                <PrimaryCTA className="text-[15px] px-9 py-4">
                  Join Host Insider Pro →
                </PrimaryCTA>
                <span className="text-[color:var(--fg-muted)] text-[13px]">
                  7-day free trial. First 10 members join free, for life.
                </span>
              </div>
            </div>

            <footer
              className="pb-20 pt-10 border-t flex flex-col gap-4"
              style={{ borderColor: "var(--divider)" }}
            >
              <p className="accent-ink text-xs font-bold tracking-[0.18em] uppercase">
                Sources and limits
              </p>
              <p className="text-[color:var(--fg-muted)] text-sm leading-[1.75] max-w-[46rem]">
                {resource.sources}
              </p>
              <p
                className="text-[color:var(--fg-muted)] text-sm leading-[1.75] max-w-[46rem]"
                dangerouslySetInnerHTML={{ __html: resource.disclaimer }}
              />
              <p className="text-[color:var(--fg-muted)] text-xs mt-2">
                Host Insider Pro is an independent community and is not
                affiliated with, endorsed by, or operated by Airbnb. ·{" "}
                <a href={SKOOL_URL} className="hover-accent-ink">
                  Join
                </a>
              </p>
            </footer>
          </div>
        </div>
      </div>

      {/* mobile TOC sheet */}
      {tocOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 overflow-y-auto tone-light"
          style={{ background: "var(--card-bg)" }}
        >
          <div className="max-w-[34rem] mx-auto px-6 py-8">
            <div className="flex items-center justify-between gap-4 mb-6">
              <p className="accent-ink text-xs font-bold tracking-[0.18em] uppercase">
                On this page
              </p>
              <button
                type="button"
                onClick={() => setTocOpen(false)}
                aria-label="Close"
                className="w-11 h-11 rounded-xl border flex items-center justify-center"
                style={{ borderColor: "var(--card-border)" }}
              >
                ✕
              </button>
            </div>
            {toc}
          </div>
        </div>
      )}
    </main>
  );
}
