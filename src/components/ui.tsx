"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

export const SKOOL_URL = "https://www.skool.com/host-insider-pro-3263/about";

export type Tone = "light" | "off" | "peach" | "dark";

export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  children,
  className = "",
  id,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: Tone;
}) {
  return (
    <section
      id={id}
      className={`tone-${tone} py-20 md:py-28 px-6 text-[color:var(--fg)] ${className}`}
    >
      <div className="max-w-[1200px] mx-auto">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-orange text-xs md:text-sm font-bold tracking-[0.16em] uppercase mb-4">
      {children}
    </p>
  );
}

export function Heading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-3xl md:text-5xl font-extrabold leading-[1.08] tracking-[-0.03em] text-[color:var(--fg)] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lead({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[color:var(--fg-muted)] text-base md:text-lg leading-relaxed ${className}`}
    >
      {children}
    </p>
  );
}

export function PrimaryCTA({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={SKOOL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`brand-gradient inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white text-base transition-transform hover:scale-[1.03] ${className}`}
    >
      {children}
    </Link>
  );
}

export function SecondaryCTA({
  children,
  href,
  className = "",
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--card-border)] px-7 py-3.5 font-semibold text-[color:var(--fg)] text-base transition-colors hover:bg-[color:var(--card-border)] ${className}`}
    >
      {children}
    </a>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border p-6 md:p-7 transition-transform hover:-translate-y-1 ${className}`}
      style={{
        background: "var(--card-bg)",
        borderColor: "var(--card-border)",
      }}
    >
      {children}
    </div>
  );
}

export function FoundingOfferBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex flex-col gap-1 rounded-xl brand-gradient-soft border border-orange/20 px-5 py-4 text-sm md:text-base ${className}`}
    >
      <span className="font-bold text-orange-deep">
        First 10 members join FREE for life.
      </span>
      <span className="text-[color:var(--fg-muted)]">
        After that: $5/month. Your price is locked in forever.
      </span>
    </div>
  );
}
