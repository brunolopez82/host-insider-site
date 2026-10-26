import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/ui";
import { SKOOL_URL_PT } from "@/lib/links";

export const metadata: Metadata = {
  title: "Anfitriões Sérios — Comunidade premium para anfitriões",
  description:
    "Uma comunidade premium, privada e só de anfitriões. Saiba o que fazer quando um hóspede ameaça a avaliação, com orientação de quem tem mais de 3 anos a ajudar anfitriões a lidar com problemas.",
};

const PROOF = [
  {
    n: "3+ anos",
    d: "A ajudar anfitriões.",
  },
  {
    n: "Dezenas",
    d: "De anfitriões ajudados individualmente.",
  },
  {
    n: "Dezenas",
    d: "De anfitriões ajudados diretamente a otimizar anúncios e ganhar mais visibilidade.",
  },
  {
    n: "Do zero",
    d: "Ajudei individualmente anfitriões que estavam a começar, para iniciarem com clareza e sem sustos.",
  },
];

const REMOVES = [
  "Só anfitriões. Sem hóspedes, sem discussões.",
  "O Bruno participa nas conversas.",
  "7 dias grátis. Cancele quando quiser.",
];

const PAIN = [
  {
    t: "O hóspede nega o dano e ameaça a avaliação",
    d: "Sem registos feitos a tempo, fica a palavra de um contra a do outro.",
  },
  {
    t: "A queixa não é verdade, mas a avaliação fica",
    d: "O que escreve primeiro pesa mais do que o que explica depois.",
  },
  {
    t: "O suporte manda para outro lado",
    d: "Cada contacto dá uma resposta diferente e o problema continua.",
  },
];

function Cta({ children }: { children: React.ReactNode }) {
  const href = SKOOL_URL_PT || "#";
  return (
    <a
      href={href}
      {...(SKOOL_URL_PT
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 font-semibold text-white text-[15px] transition-transform hover:scale-[1.03]"
      style={{ background: "var(--color-orange-deep)" }}
    >
      {children}
    </a>
  );
}

export default function PaginaInicial() {
  return (
    <main className="tone-pt min-h-screen flex flex-col text-[color:var(--fg)]">
      <header className="px-6 pt-7">
        <div className="max-w-[1000px] mx-auto flex items-center gap-2.5">
          <Image
            src="/images/logo-anfitrioes-serios.png"
            alt=""
            width={36}
            height={36}
            priority
          />
          <span className="font-bold text-[15px] tracking-tight">
            Anfitriões <span className="accent-ink">Sérios</span>
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-14 pb-16 md:pt-20 md:pb-20 text-center">
        <div className="max-w-[820px] mx-auto">
          <FadeIn>
            <p className="accent-ink text-xs md:text-[13px] font-bold tracking-[0.18em] uppercase">
              Comunidade premium para anfitriões
            </p>

            <h1 className="mt-6 text-[36px] sm:text-[50px] md:text-[58px] font-extrabold leading-[1.05] tracking-[-0.035em]">
              Um hóspede ameaça a avaliação.
              <br className="hidden sm:block" />{" "}
              <span className="brand-gradient-text">Saiba o que fazer.</span>
            </h1>

            <p className="mt-7 text-white/60 text-lg md:text-xl leading-relaxed max-w-[640px] mx-auto">
              Uma comunidade premium, privada e só de anfitriões. Traga a situação
              em que está preso e receba uma resposta direta, de quem tem
              mais de 3 anos a ajudar anfitriões.
            </p>

            <div className="mt-10 flex flex-col items-center">
              <Cta>Quero saber mais →</Cta>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-14 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-9 gap-y-3.5">
              {REMOVES.map((r) => (
                <span
                  key={r}
                  className="flex items-center gap-2.5 text-white/70 text-[15px]"
                >
                  <span className="accent-ink font-bold">✓</span>
                  {r}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* A dor */}
      <section className="px-6 py-16 md:py-20 border-t border-white/[0.07]">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn>
            <h2 className="text-center text-2xl md:text-[32px] font-extrabold tracking-[-0.03em] max-w-[640px] mx-auto leading-[1.15]">
              A avaliação chega antes de saber o que fazer
            </h2>
            <div className="mt-10 grid md:grid-cols-3 gap-5">
              {PAIN.map((p) => (
                <div
                  key={p.t}
                  className="rounded-2xl p-6"
                  style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                  }}
                >
                  <p className="font-bold text-[17px] leading-snug">{p.t}</p>
                  <p className="mt-3 text-white/55 text-[15px] leading-relaxed">
                    {p.d}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-white/70 text-lg max-w-[620px] mx-auto leading-relaxed">
              Na Anfitriões Sérios aprende o que registar, o que escrever e o
              que evitar, antes de o problema crescer.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Autoridade */}
      <section className="px-6 py-14 md:py-16 border-t border-white/[0.07]">
        <FadeIn>
          <div className="max-w-[880px] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="relative w-[220px] h-[220px] md:w-[260px] md:h-[260px] shrink-0 rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/images/avatar.webp"
                alt="Bruno, fundador da comunidade Anfitriões Sérios"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-[30px] font-extrabold tracking-[-0.03em]">
                Porque ouvir o Bruno?
              </h2>
              <p className="mt-4 text-white/70 text-lg leading-relaxed">
                Mais de 3 anos a ajudar anfitriões a lidar com problemas e a
                preparar-se para os evitar. Ajudei dezenas de anfitriões
                individualmente, e agora esse apoio está acessível na
                comunidade.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[880px] mx-auto text-center md:text-left">
            {PROOF.map((p) => (
              <div key={p.n}>
                <p className="brand-gradient-text text-[26px] md:text-[28px] font-extrabold tracking-[-0.02em]">
                  {p.n}
                </p>
                <p className="mt-2 text-white/45 text-sm leading-relaxed">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Porque criei */}
      <section className="px-6 py-14 md:py-16 border-t border-white/[0.07]">
        <FadeIn>
          <div className="max-w-[680px] mx-auto text-center">
            <h2 className="text-2xl md:text-[30px] font-extrabold tracking-[-0.03em]">
              Porque criei esta comunidade
            </h2>
            <p className="mt-5 text-white/70 text-lg leading-relaxed">
              Quero ajudar o máximo de anfitriões possível, e ajudar um a um
              não chega. Por isso criei um espaço onde as respostas ficam ao
              alcance de todos.
            </p>
            <p className="mt-4 text-white/70 text-lg leading-relaxed">
              Aqui é sem drama: foco no problema e na solução, e não em
              discussões intermináveis sem solução prática.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* CTA final */}
      <section className="px-6 py-16 md:py-20 border-t border-white/[0.07] text-center">
        <FadeIn>
          <h2 className="text-2xl md:text-[34px] font-extrabold tracking-[-0.03em] max-w-[620px] mx-auto leading-[1.15]">
            Pronto para deixar de adivinhar?
          </h2>
          <div className="mt-9 flex flex-col items-center">
            <Cta>Quero saber mais →</Cta>
          </div>
        </FadeIn>
      </section>

      <footer className="px-6 py-9 border-t border-white/[0.07]">
        <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-white/25 text-xs max-w-xl leading-relaxed">
            A Anfitriões Sérios é uma comunidade independente, sem afiliação,
            aprovação ou operação do Airbnb. Conteúdo educativo, sem garantia
            de resultados.
          </p>
          <a
            href="mailto:hello@hostinsider.app"
            className="text-white/35 hover-accent-ink text-xs shrink-0"
          >
            hello@hostinsider.app
          </a>
        </div>
      </footer>
    </main>
  );
}
