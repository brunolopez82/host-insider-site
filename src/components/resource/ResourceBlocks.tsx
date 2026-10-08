"use client";

import { useCallback, useEffect, useState } from "react";
import type { Block, Row } from "@/content/resources/types";

/* ────────────────────────────────────────────────
   Small helpers
   ──────────────────────────────────────────────── */

function useStore(key: string) {
  const [state, setState] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw) setState(JSON.parse(raw));
    } catch {
      /* storage can be blocked; the page still works without it */
    }
    setReady(true);
  }, [key]);

  const toggle = useCallback(
    (id: string) => {
      setState((prev) => {
        const next = { ...prev, [id]: !prev[id] };
        try {
          localStorage.setItem(key, JSON.stringify(next));
        } catch {
          /* no-op */
        }
        return next;
      });
    },
    [key],
  );

  const reset = useCallback(() => {
    setState({});
    try {
      localStorage.removeItem(key);
    } catch {
      /* no-op */
    }
  }, [key]);

  return { state, toggle, reset, ready };
}

const tagClass = (tone: Row["tagTone"]) =>
  tone === "accent"
    ? "accent-ink border-orange/30"
    : tone === "quiet"
      ? "text-[color:var(--fg-muted)] border-[color:var(--card-border)]"
      : "text-[color:var(--fg)] border-[color:var(--card-border)]";

/* ────────────────────────────────────────────────
   Blocks
   ──────────────────────────────────────────────── */

function Prose({ paras }: { paras: string[] }) {
  return (
    <div className="flex flex-col gap-4 max-w-[38rem]">
      {paras.map((p, i) => (
        <p
          key={i}
          className="text-[color:var(--fg-muted)] text-base md:text-[17px] leading-[1.75]"
          dangerouslySetInnerHTML={{ __html: p }}
        />
      ))}
    </div>
  );
}

function Tldr({ items, pills }: { items: string[]; pills?: string[] }) {
  return (
    <div
      className="rounded-2xl border p-6 md:p-8 flex flex-col gap-5"
      style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
    >
      <ul className="flex flex-col gap-3.5 list-none p-0 m-0">
        {items.map((t, i) => (
          <li
            key={i}
            className="relative pl-6 text-[color:var(--fg-muted)] text-[15px] md:text-base leading-[1.7]"
          >
            <span className="absolute left-0 top-[0.6em] w-2.5 h-px bg-orange" />
            <span dangerouslySetInnerHTML={{ __html: t }} />
          </li>
        ))}
      </ul>
      {pills && pills.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {pills.map((p, i) => (
            <span
              key={i}
              className="rounded-full px-3 py-1.5 text-xs font-semibold text-[color:var(--fg-muted)]"
              style={{ background: "var(--card-border)" }}
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Spine({
  label,
  paras,
  live,
  awaiting,
  questions,
}: Extract<Block, { kind: "spine" }>) {
  return (
    <div
      className="border-l-2 pl-6 md:pl-7 flex flex-col gap-4"
      style={{ borderColor: live ? "#e8622a" : "var(--card-border)" }}
    >
      <p
        className={`text-xs font-bold tracking-[0.18em] uppercase ${
          live ? "accent-ink" : "text-[color:var(--fg-muted)]"
        }`}
      >
        {label}
      </p>

      {awaiting && (
        <span className="self-start inline-flex items-center gap-2 rounded-full border border-orange/30 px-3 py-1.5 text-[11px] font-bold tracking-[0.14em] uppercase accent-ink">
          <span className="w-1.5 h-1.5 rounded-full bg-orange" />
          Awaiting Bruno
        </span>
      )}

      <Prose paras={paras} />

      {questions && questions.length > 0 && (
        <ul className="flex flex-col gap-4 list-none p-0 m-0 max-w-[38rem]">
          {questions.map((q, i) => (
            <li
              key={i}
              className="relative pl-6 text-[color:var(--fg-muted)] text-[15px] leading-[1.7]"
            >
              <span className="absolute left-0 top-[0.75em] w-2.5 h-px bg-orange" />
              {q}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Cards({ cards }: Extract<Block, { kind: "cards" }>) {
  return (
    <div
      className={`grid gap-4 ${cards.length >= 3 ? "md:grid-cols-3" : cards.length === 2 ? "md:grid-cols-2" : ""}`}
    >
      {cards.map((c, i) => (
        <div
          key={i}
          className="rounded-2xl border p-6 flex flex-col gap-3"
          style={{
            background: "var(--card-bg)",
            borderColor: "var(--card-border)",
          }}
        >
          {c.eyebrow && (
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase accent-ink">
              {c.eyebrow}
            </p>
          )}
          {c.title && (
            <h3 className="font-bold text-[17px] leading-snug text-[color:var(--fg)]">
              {c.title}
            </h3>
          )}
          {c.paras.map((p, j) => (
            <p
              key={j}
              className="text-[color:var(--fg-muted)] text-[15px] leading-[1.7]"
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function Rows({
  rows,
  numbered,
  trackKey,
  trackLabel,
  storeKey,
}: Extract<Block, { kind: "rows" }> & { storeKey: string }) {
  const { state, toggle, reset, ready } = useStore(`${storeKey}:${trackKey ?? "x"}`);
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const done = trackKey ? rows.filter((_, i) => state[`r${i}`]).length : 0;

  return (
    <div className="flex flex-col gap-4">
      {trackKey && (
        <div className="flex flex-col gap-3">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="text-2xl font-extrabold tabular-nums tracking-[-0.02em]">
                <span className="accent-ink">{ready ? done : 0}</span>
                <span className="text-[color:var(--fg-muted)]"> / {rows.length}</span>
              </p>
              <p className="mt-1 text-[11px] font-bold tracking-[0.16em] uppercase text-[color:var(--fg-muted)]">
                {trackLabel ?? "Done"}
              </p>
            </div>
            <button
              type="button"
              onClick={reset}
              className="min-h-11 px-2 text-[11px] font-bold tracking-[0.14em] uppercase text-[color:var(--fg-muted)] hover-accent-ink transition-colors"
            >
              Reset
            </button>
          </div>
          <div
            className="h-[3px] rounded-full overflow-hidden"
            style={{ background: "var(--card-border)" }}
          >
            <div
              className="h-full brand-gradient rounded-full transition-[width] duration-500"
              style={{ width: `${ready ? (done / rows.length) * 100 : 0}%` }}
            />
          </div>
        </div>
      )}

      <div className="flex flex-col">
        {rows.map((r, i) => {
          const checked = !!state[`r${i}`];
          const newGroup = r.group && r.group !== rows[i - 1]?.group;
          return (
            <div key={i} className="contents">
            {newGroup && (
              <p
                className="pt-8 pb-2.5 text-[11px] font-bold tracking-[0.18em] uppercase text-[color:var(--fg-muted)]"
              >
                {r.group}
              </p>
            )}
            <div
              className="grid grid-cols-[auto_1fr] gap-4 py-4 border-t first:border-t-0 transition-opacity"
              style={{
                borderColor: "var(--divider)",
                opacity: trackKey && checked ? 0.4 : 1,
              }}
            >
              {trackKey ? (
                <label className="flex items-start justify-center w-11 h-11 -mt-2.5 -ml-2.5 pt-2.5 cursor-pointer shrink-0">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggle(`r${i}`)}
                    aria-label={r.title}
                    className="w-[22px] h-[22px] rounded-[7px] border-[1.5px] appearance-none cursor-pointer relative transition-colors checked:bg-orange checked:border-orange
                      after:content-[''] after:absolute after:left-[6.5px] after:top-[2.5px] after:w-[5px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:opacity-0 checked:after:opacity-100"
                    style={{ borderColor: "var(--card-border)" }}
                  />
                </label>
              ) : numbered ? (
                <span className="text-xl font-extrabold accent-ink tabular-nums leading-none pt-0.5 min-w-[1.4ch]">
                  {i + 1}
                </span>
              ) : (
                <span
                  aria-hidden
                  className="accent-ink leading-none pt-1.5 min-w-[1ch]"
                >
                  ·
                </span>
              )}

              <div className="min-w-0 flex flex-col gap-2">
                {r.tag && (
                  <span
                    className={`self-start rounded px-2 py-0.5 text-[10px] font-bold tracking-[0.12em] uppercase border ${tagClass(r.tagTone)}`}
                  >
                    {r.tag}
                  </span>
                )}
                <span
                  className={`font-semibold text-[16px] leading-snug text-[color:var(--fg)] ${
                    trackKey && checked ? "line-through" : ""
                  }`}
                >
                  {r.title}
                </span>
                {r.body && (
                  <p className="text-[color:var(--fg-muted)] text-[15px] leading-[1.7]">
                    {r.body}
                  </p>
                )}
                {r.detail && (
                  <>
                    <button
                      type="button"
                      onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
                      aria-expanded={!!open[i]}
                      className="self-start min-h-8 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.13em] uppercase text-[color:var(--fg-muted)] hover-accent-ink transition-colors"
                    >
                      Detail
                      <span
                        className={`transition-transform ${open[i] ? "rotate-180" : ""}`}
                        aria-hidden
                      >
                        ▾
                      </span>
                    </button>
                    <div
                      className="grid transition-[grid-template-rows] duration-300"
                      style={{ gridTemplateRows: open[i] ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p
                          className="mt-1 rounded-xl p-4 text-[color:var(--fg-muted)] text-[15px] leading-[1.7] whitespace-pre-wrap"
                          style={{ background: "var(--card-border)" }}
                        >
                          {r.detail}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CopyBar({ blurb, label, text }: Extract<Block, { kind: "copy" }>) {
  const [status, setStatus] = useState<"idle" | "ok" | "fail">("idle");

  async function onCopy() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.cssText = "position:fixed;left:-9999px;top:0";
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand("copy");
        ta.remove();
      } catch {
        ok = false;
      }
    }
    setStatus(ok ? "ok" : "fail");
    setTimeout(() => setStatus("idle"), 2200);
  }

  return (
    <div
      className="rounded-xl p-4 flex flex-wrap items-center justify-between gap-4"
      style={{ background: "var(--card-border)" }}
    >
      <p className="text-[color:var(--fg-muted)] text-[15px] leading-snug flex-1 min-w-[14rem]">
        {blurb}
      </p>
      <button
        type="button"
        onClick={onCopy}
        className="brand-gradient inline-flex items-center justify-center gap-2 rounded-full px-5 min-h-11 font-semibold text-white text-[13px] transition-transform hover:scale-[1.03]"
      >
        {status === "ok" ? "Copied" : status === "fail" ? "Press Ctrl+C" : label}
      </button>
    </div>
  );
}

function Accordion({ items }: Extract<Block, { kind: "accordion" }>) {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  return (
    <div className="flex flex-col max-w-[46rem]">
      {items.map((it, i) => (
        <div
          key={i}
          className="border-t first:border-t-0"
          style={{ borderColor: "var(--divider)" }}
        >
          <button
            type="button"
            onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
            aria-expanded={!!open[i]}
            className="w-full flex items-center justify-between gap-4 py-5 min-h-[60px] text-left font-semibold text-[17px] leading-snug text-[color:var(--fg)]"
          >
            {it.q}
            <span
              aria-hidden
              className={`shrink-0 accent-ink text-xl transition-transform ${open[i] ? "rotate-45" : ""}`}
            >
              +
            </span>
          </button>
          <div
            className="grid transition-[grid-template-rows] duration-300"
            style={{ gridTemplateRows: open[i] ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <div className="pb-6 flex flex-col gap-3">
                {it.a.map((p, j) => (
                  <p
                    key={j}
                    className="text-[color:var(--fg-muted)] text-[15px] leading-[1.75] max-w-[38rem]"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Path({ steps }: Extract<Block, { kind: "path" }>) {
  return (
    <ol className="list-none p-0 m-0 flex flex-col max-w-[38rem]">
      {steps.map((s, i) => (
        <li
          key={i}
          className="relative pl-14 py-4 border-t first:border-t-0"
          style={{ borderColor: "var(--divider)" }}
        >
          <span className="absolute left-0 top-4 w-9 h-9 rounded-full border border-orange/30 accent-ink text-[13px] font-bold tabular-nums flex items-center justify-center">
            {i + 1}
          </span>
          <strong className="block font-bold text-[color:var(--fg)] mb-0.5">
            {s.title}
          </strong>
          <span className="text-[color:var(--fg-muted)] text-[15px] leading-[1.7]">
            {s.body}
          </span>
        </li>
      ))}
    </ol>
  );
}

function Note({ eyebrow, body }: Extract<Block, { kind: "note" }>) {
  return (
    <div
      className="rounded-2xl border p-6 flex flex-col gap-2"
      style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}
    >
      <p className="text-[11px] font-bold tracking-[0.14em] uppercase accent-ink">
        {eyebrow}
      </p>
      <p
        className="text-[color:var(--fg-muted)] text-[15px] leading-[1.7]"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
}

/* ────────────────────────────────────────────────
   Dispatcher
   ──────────────────────────────────────────────── */

export function RenderBlock({
  block,
  storeKey,
}: {
  block: Block;
  storeKey: string;
}) {
  switch (block.kind) {
    case "lead":
      return (
        <p className="text-xl md:text-2xl leading-[1.45] text-[color:var(--fg)] max-w-[40rem] font-medium">
          <span dangerouslySetInnerHTML={{ __html: block.text }} />
        </p>
      );
    case "prose":
      return <Prose paras={block.paras} />;
    case "tldr":
      return <Tldr items={block.items} pills={block.pills} />;
    case "spine":
      return <Spine {...block} />;
    case "cards":
      return <Cards {...block} />;
    case "rows":
      return <Rows {...block} storeKey={storeKey} />;
    case "copy":
      return <CopyBar {...block} />;
    case "accordion":
      return <Accordion {...block} />;
    case "path":
      return <Path {...block} />;
    case "note":
      return <Note {...block} />;
  }
}
