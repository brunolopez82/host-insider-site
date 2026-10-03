"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

export const SKOOL_URL = "https://www.skool.com/host-insider-pro-3263/about";

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
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 px-6 ${className}`}>
      <div className="max-w-[1200px] mx-auto">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-gold-soft text-sm md:text-base font-semibold tracking-[0.15em] uppercase mb-3">
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
      className={`font-headline text-3xl md:text-5xl leading-[1.1] uppercase text-white ${className}`}
    >
      {children}
    </h2>
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
      className={`inline-flex items-center justify-center gap-2 rounded-[14px] bg-gold px-8 py-4 font-headline text-midnight text-base md:text-lg uppercase tracking-wide shadow-[0_0_30px_rgba(212,166,58,0.25)] transition-transform hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(212,166,58,0.4)] ${className}`}
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
      className={`inline-flex items-center justify-center gap-2 rounded-[14px] border border-border bg-white/[0.06] px-8 py-4 font-headline text-white text-base md:text-lg uppercase tracking-wide transition-colors hover:bg-white/[0.1] ${className}`}
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
      className={`card-glass rounded-[18px] p-6 md:p-8 transition-transform hover:-translate-y-1 hover:border-gold/40 ${className}`}
    >
      {children}
    </div>
  );
}

export function FoundingOfferBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex flex-col gap-1 rounded-[14px] border border-gold/30 bg-gold/5 px-5 py-4 text-sm md:text-base ${className}`}
    >
      <span className="text-gold-soft font-semibold">
        First 10 members join FREE for life.
      </span>
      <span className="text-slate">
        After that: $9/month. Your price is locked in forever.
      </span>
    </div>
  );
}
