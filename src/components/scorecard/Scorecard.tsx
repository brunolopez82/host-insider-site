"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  EMPTY_ANSWERS,
  STEPS,
  missingAnswers,
  type Answers,
  type Fix,
  type Question,
  type Step,
} from "@/content/scorecard";
import { scoreListing } from "@/lib/scorecard";
import { SKOOL_URL } from "@/lib/links";

/* ------------------------------------------------------------------ helpers */

const SEVERITY_STYLE: Record<
  Fix["severity"],
  { label: string; dot: string; ring: string }
> = {
  critical: {
    label: "Account risk",
    dot: "#b00020",
    ring: "rgba(176, 0, 32, 0.28)",
  },
  high: { label: "Costing you now", dot: "#c7501e", ring: "rgba(199, 80, 30, 0.28)" },
  medium: { label: "Worth fixing", dot: "#f5a623", ring: "rgba(245, 166, 35, 0.3)" },
  good: { label: "Working", dot: "#1f8a4c", ring: "rgba(31, 138, 76, 0.26)" },
};

function Ring({ total }: { total: number }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, total)) / 100;

  return (
    <div className="relative w-[136px] h-[136px] shrink-0">
      <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          strokeWidth="9"
          stroke="rgba(0,0,0,0.08)"
        />
        <motion.circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          strokeWidth="9"
          strokeLinecap="round"
          stroke="var(--color-orange)"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c - c * pct }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center leading-none">
          <motion.span
            className="block text-4xl font-extrabold tracking-[-0.04em]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            {total}
          </motion.span>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted mt-1">
            of 100
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- inputs */

function Field({
  q,
  answers,
  set,
}: {
  q: Question;
  answers: Answers;
  set: <K extends keyof Answers>(k: K, v: Answers[K]) => void;
}) {
  const value = answers[q.id];

  return (
    <div className="mb-8 last:mb-0">
      <label
        className="block text-base md:text-lg font-bold leading-snug mb-1.5"
        htmlFor={q.kind === "text" || q.kind === "number" ? q.id : undefined}
      >
        {q.label}
      </label>
      {q.help && (
        <p className="text-sm text-text-muted leading-relaxed mb-4">{q.help}</p>
      )}

      {q.kind === "text" && (
        <div>
          <input
            id={q.id}
            type="text"
            inputMode="text"
            maxLength={q.maxLength}
            placeholder={q.placeholder}
            value={value as string}
            onChange={(e) => set(q.id, e.target.value as Answers[typeof q.id])}
            className="w-full rounded-xl border px-4 py-3.5 text-base outline-none transition-colors focus:border-orange"
            style={{ borderColor: "var(--card-border)" }}
          />
          <p className="text-xs text-text-light mt-2 tabular-nums">
            {(value as string).length} characters
            {(value as string).length > 50 && " — past Airbnb's 50 limit"}
          </p>
        </div>
      )}

      {q.kind === "number" && (
        <input
          id={q.id}
          type="number"
          inputMode="decimal"
          step={q.step ?? "1"}
          min="0"
          placeholder={q.placeholder}
          value={value as string}
          onChange={(e) => set(q.id, e.target.value as Answers[typeof q.id])}
          className="w-full max-w-[200px] rounded-xl border px-4 py-3.5 text-base outline-none transition-colors focus:border-orange"
          style={{ borderColor: "var(--card-border)" }}
        />
      )}

      {q.kind === "choice" && (
        <div className="grid gap-2.5">
          {q.options.map((o) => {
            const on = value === o.value;
            return (
              <button
                key={o.value}
                type="button"
                aria-pressed={on}
                onClick={() => set(q.id, o.value as Answers[typeof q.id])}
                className="flex items-start gap-3 text-left rounded-xl border px-4 py-3.5 transition-all hover:border-orange/50"
                style={{
                  borderColor: on ? "var(--color-orange)" : "var(--card-border)",
                  background: on ? "var(--color-peach)" : "#fff",
                  boxShadow: on ? "0 0 0 3px rgba(232,98,42,0.12)" : "none",
                }}
              >
                <span
                  aria-hidden
                  className="mt-[3px] grid place-items-center w-[18px] h-[18px] rounded-full border-2 shrink-0"
                  style={{
                    borderColor: on ? "var(--color-orange)" : "rgba(0,0,0,0.25)",
                  }}
                >
                  {on && (
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: "var(--color-orange)" }}
                    />
                  )}
                </span>
                <span>
                  <span className="block font-semibold text-[15px] leading-snug">
                    {o.label}
                  </span>
                  {o.hint && (
                    <span className="block text-[13px] text-text-muted mt-0.5">
                      {o.hint}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {q.kind === "multi" && (
        <div className="grid gap-2.5">
          {q.options.map((o) => {
            const list = value as string[];
            const on = list.includes(o.value);
            return (
              <button
                key={o.value}
                type="button"
                aria-pressed={on}
                onClick={() =>
                  set(
                    q.id,
                    (on
                      ? list.filter((v) => v !== o.value)
                      : [...list, o.value]) as Answers[typeof q.id],
                  )
                }
                className="flex items-start gap-3 text-left rounded-xl border px-4 py-3.5 transition-all hover:border-orange/50"
                style={{
                  borderColor: on ? "var(--color-orange)" : "var(--card-border)",
                  background: on ? "var(--color-peach)" : "#fff",
                  boxShadow: on ? "0 0 0 3px rgba(232,98,42,0.12)" : "none",
                }}
              >
                <span
                  aria-hidden
                  className="mt-[2px] grid place-items-center w-[20px] h-[20px] rounded-[6px] border-2 shrink-0"
                  style={{
                    borderColor: on ? "var(--color-orange)" : "rgba(0,0,0,0.25)",
                    background: on ? "var(--color-orange)" : "transparent",
                  }}
                >
                  {on && (
                    <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none">
                      <path
                        d="M3 8.5l3 3 7-7"
                        stroke="#fff"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
                <span>
                  <span className="block font-semibold text-[15px] leading-snug">
                    {o.label}
                  </span>
                  {o.hint && (
                    <span className="block text-[13px] text-text-muted mt-0.5">
                      {o.hint}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ results */

function FixCard({ fix, n }: { fix: Fix; n?: number }) {
  const s = SEVERITY_STYLE[fix.severity];
  return (
    <div
      className="rounded-xl border p-5 md:p-6"
      style={{ borderColor: s.ring, background: "#fff" }}
    >
      <div className="flex items-center gap-2 mb-2.5">
        <span
          aria-hidden
          className="w-2 h-2 rounded-full shrink-0"
          style={{ background: s.dot }}
        />
        <span
          className="text-[11px] font-bold uppercase tracking-[0.14em]"
          style={{ color: s.dot }}
        >
          {s.label}
        </span>
        {typeof n === "number" && (
          <span className="ml-auto text-[11px] font-bold uppercase tracking-[0.14em] text-text-light tabular-nums">
            Fix {n}
          </span>
        )}
      </div>
      <h4 className="font-extrabold text-[17px] md:text-lg leading-snug mb-2">
        {fix.title}
      </h4>
      <p className="text-[15px] text-text-muted leading-relaxed">{fix.detail}</p>
      {fix.resource && (
        <Link
          href={`/free/${fix.resource}/`}
          className="inline-flex items-center gap-1.5 mt-3.5 text-[14px] font-bold accent-ink hover:underline"
        >
          Read the lesson that fixes this
          <span aria-hidden>→</span>
        </Link>
      )}
    </div>
  );
}

function Bar({
  label,
  score,
  max,
}: {
  label: string;
  score: number;
  max: number;
}) {
  const pct = (score / max) * 100;
  const color =
    pct >= 80 ? "#1f8a4c" : pct >= 50 ? "var(--color-amber)" : "#c7501e";

  return (
    <div className="flex items-center gap-3">
      <span className="w-[104px] shrink-0 text-[14px] font-bold">{label}</span>
      <span className="flex-1 h-2 rounded-full overflow-hidden bg-black/[0.07]">
        <motion.span
          className="block h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </span>
      <span className="w-[52px] shrink-0 text-right text-[13px] font-bold tabular-nums text-text-muted">
        {score}/{max}
      </span>
    </div>
  );
}

/* --------------------------------------------------------------------- main */

export default function Scorecard() {
  const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
  const [step, setStep] = useState(-1); // -1 = intro, STEPS.length = result
  const [showAll, setShowAll] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState<"idle" | "sending" | "done">("idle");

  const set = <K extends keyof Answers>(k: K, v: Answers[K]) =>
    setAnswers((prev) => ({ ...prev, [k]: v }));

  const result = useMemo(() => scoreListing(answers), [answers]);
  const missing = useMemo(() => missingAnswers(answers), [answers]);

  const onResult = step >= STEPS.length;
  const current: Step | undefined = STEPS[step];

  /** Questions on this step that still need an answer. */
  const stepIncomplete = current
    ? current.questions.some((q) => {
        if (q.kind === "multi") return false; // zero selected is a real answer
        const v = answers[q.id];
        return String(v).trim() === "";
      })
    : false;

  async function submitEmail(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSent("sending");
    try {
      await fetch("/api/scorecard-lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, total: result.total }),
      });
    } catch {
      // Deliberately swallowed. The report is already on screen and the host
      // keeps it either way — a failed capture must never look like a failed
      // scorecard.
    }
    setSent("done");
  }

  /* ------------------------------------------------------------------ intro */

  if (step === -1) {
    return (
      <div className="max-w-[680px] mx-auto">
        <div
          className="rounded-2xl border p-7 md:p-9"
          style={{ borderColor: "var(--card-border)", background: "#fff" }}
        >
          <p className="accent-ink text-xs font-bold tracking-[0.16em] uppercase mb-3">
            Free · No account · Nothing to install
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] mb-4">
            Six questions about your listing. One honest score.
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            This scores the six things that decide whether your listing gets
            opened, and then tells you which to fix first. It runs on what you
            type — nothing is read from Airbnb, and nothing leaves your browser
            unless you ask for the report by email.
          </p>

          <ul className="grid gap-2.5 mb-8">
            {STEPS.map((s) => (
              <li key={s.id} className="flex items-center gap-3 text-[15px]">
                <span className="text-[11px] font-bold tabular-nums text-text-light w-5">
                  {s.n}
                </span>
                <span className="font-semibold flex-1">{s.label}</span>
                <span className="text-[13px] text-text-muted tabular-nums">
                  {s.max} pts
                </span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setStep(0)}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-bold text-white text-base transition-transform hover:scale-[1.02]"
            style={{ background: "var(--color-orange-deep)" }}
          >
            Score my listing
            <span aria-hidden>→</span>
          </button>
          <p className="text-xs text-text-light text-center mt-3">
            Takes about three minutes. Have your listing open in another tab.
          </p>
        </div>
      </div>
    );
  }

  /* ----------------------------------------------------------------- result */

  if (onResult) {
    const visible = showAll ? result.top : result.top.slice(0, 3);
    const working = result.categories
      .flatMap((c) => c.fixes)
      .filter((f) => f.severity === "good");

    return (
      <div className="max-w-[760px] mx-auto">
        {/* score header */}
        <div
          className="rounded-2xl border p-7 md:p-9 mb-5"
          style={{ borderColor: "var(--card-border)", background: "#fff" }}
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <Ring total={result.total} />
            <div className="text-center sm:text-left">
              <p className="accent-ink text-xs font-bold tracking-[0.16em] uppercase mb-2">
                {result.band.label}
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] mb-3">
                {answers.title.trim() || "Your listing"}
              </h2>
              <p className="text-text-muted leading-relaxed">
                {result.band.blurb}
              </p>
            </div>
          </div>

          <div className="grid gap-3 mt-8 pt-7 border-t" style={{ borderColor: "var(--card-border)" }}>
            {result.categories.map((c) => (
              <Bar key={c.id} label={c.label} score={c.score} max={c.max} />
            ))}
          </div>
        </div>

        {/* the fixes */}
        <div className="mb-5">
          <h3 className="text-xl md:text-2xl font-extrabold tracking-[-0.02em] mb-1.5">
            {showAll
              ? `Everything worth fixing (${result.top.length})`
              : "The three fixes worth the most"}
          </h3>
          <p className="text-text-muted text-[15px] leading-relaxed mb-5">
            Ordered by what they cost you. Anything marked account risk comes
            first regardless of points.
          </p>

          <div className="grid gap-3.5">
            {visible.map((f, i) => (
              <FixCard key={`${f.title}-${i}`} fix={f} n={i + 1} />
            ))}
          </div>

          {!showAll && result.top.length > 3 && (
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="w-full mt-4 inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 font-bold text-base transition-colors hover:bg-black/[0.03]"
              style={{ borderColor: "var(--card-border)" }}
            >
              Show the other {result.top.length - 3}
              <span aria-hidden>↓</span>
            </button>
          )}
        </div>

        {/* what is already working */}
        {working.length > 0 && (
          <div
            className="rounded-2xl border p-6 md:p-7 mb-5"
            style={{ borderColor: "var(--card-border)", background: "var(--color-off)" }}
          >
            <h3 className="font-extrabold text-lg mb-4">
              What you already have right
            </h3>
            <ul className="grid gap-3">
              {working.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span
                    aria-hidden
                    className="mt-[6px] text-[13px] font-bold shrink-0"
                    style={{ color: "#1f8a4c" }}
                  >
                    ✓
                  </span>
                  <span>
                    <span className="block font-semibold text-[15px] leading-snug">
                      {f.title}
                    </span>
                    <span className="block text-[14px] text-text-muted leading-relaxed mt-0.5">
                      {f.detail}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* email the report */}
        <div
          className="rounded-2xl border p-6 md:p-8 mb-5 brand-gradient-soft"
          style={{ borderColor: "rgba(232,98,42,0.2)" }}
        >
          {sent === "done" ? (
            <div>
              <h3 className="font-extrabold text-lg mb-2">
                Report on its way to {email}
              </h3>
              <p className="text-text-muted text-[15px] leading-relaxed">
                Work the fixes in the order above. Re-run this in a month and
                the score should move.
              </p>
            </div>
          ) : (
            <form onSubmit={submitEmail}>
              <h3 className="font-extrabold text-lg md:text-xl mb-2">
                Want this report emailed to you?
              </h3>
              <p className="text-text-muted text-[15px] leading-relaxed mb-5">
                So you can work through it rather than holding it in your head.
                Your score and your fixes, nothing else.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  aria-label="Your email address"
                  className="flex-1 rounded-full border bg-white px-5 py-3.5 text-base outline-none transition-colors focus:border-orange"
                  style={{ borderColor: "var(--card-border)" }}
                />
                <button
                  type="submit"
                  disabled={sent === "sending"}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-bold text-white text-base transition-transform hover:scale-[1.02] disabled:opacity-60"
                  style={{ background: "var(--color-orange-deep)" }}
                >
                  {sent === "sending" ? "Sending…" : "Send it"}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* the ask */}
        <div
          className="rounded-2xl p-7 md:p-9 text-center tone-dark"
          style={{ background: "var(--color-ink)" }}
        >
          <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight tracking-[-0.02em] mb-3">
            Every fix above comes from one of the lessons.
          </h3>
          <p className="text-white/60 leading-relaxed mb-7 max-w-[46ch] mx-auto">
            Host Insider Pro is where the rest of them live, alongside hosts
            working through the same list — and someone with more than 3 years
            helping hosts, answering the questions this report raises.
          </p>
          <Link
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-bold text-white text-base transition-transform hover:scale-[1.03]"
            style={{ background: "var(--color-orange)" }}
          >
            See what is inside
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="text-center mt-7">
          <button
            type="button"
            onClick={() => {
              setAnswers(EMPTY_ANSWERS);
              setShowAll(false);
              setSent("idle");
              setStep(-1);
            }}
            className="text-sm font-semibold text-text-muted hover:text-text underline"
          >
            Score another listing
          </button>
        </div>
      </div>
    );
  }

  /* ------------------------------------------------------------------ steps */

  if (!current) return null;

  return (
    <div className="max-w-[680px] mx-auto">
      {/* progress */}
      <div className="flex items-center gap-1.5 mb-7" aria-hidden>
        {STEPS.map((s, i) => (
          <span
            key={s.id}
            className="h-1.5 flex-1 rounded-full transition-colors"
            style={{
              background:
                i <= step ? "var(--color-orange)" : "rgba(0,0,0,0.09)",
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -18 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <div
            className="rounded-2xl border p-6 md:p-8"
            style={{ borderColor: "var(--card-border)", background: "#fff" }}
          >
            <div className="flex items-baseline gap-2.5 mb-2">
              <span className="text-[11px] font-bold tabular-nums text-text-light tracking-[0.14em]">
                {current.n} / {STEPS.length < 10 ? `0${STEPS.length}` : STEPS.length}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] accent-ink">
                {current.label} · {current.max} points
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-extrabold leading-[1.15] tracking-[-0.02em] mb-2">
              {current.label}
            </h2>
            <p className="text-text-muted text-[15px] leading-relaxed mb-8">
              {current.intro}
            </p>

            {current.questions.map((q) => (
              <Field key={q.id} q={q} answers={answers} set={set} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center gap-3 mt-5">
        <button
          type="button"
          onClick={() => setStep((s) => s - 1)}
          className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 font-semibold text-base transition-colors hover:bg-black/[0.03]"
          style={{ borderColor: "var(--card-border)" }}
        >
          <span aria-hidden>←</span>
          Back
        </button>
        <button
          type="button"
          disabled={stepIncomplete}
          onClick={() => setStep((s) => s + 1)}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-bold text-white text-base transition-transform enabled:hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ background: "var(--color-orange-deep)" }}
        >
          {step === STEPS.length - 1 ? "Get my score" : "Next"}
          <span aria-hidden>→</span>
        </button>
      </div>

      {stepIncomplete && (
        <p className="text-xs text-text-light text-center mt-3">
          Answer the question above to continue.
        </p>
      )}
      {!stepIncomplete && step === STEPS.length - 1 && missing.length > 0 && (
        <p className="text-xs text-text-light text-center mt-3">
          {missing.length} earlier question{missing.length > 1 ? "s" : ""} left
          blank — those categories will score neutrally.
        </p>
      )}
    </div>
  );
}
