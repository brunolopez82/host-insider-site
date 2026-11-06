import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/ui";
import { SKOOL_URL_PT } from "@/lib/links";
import { AuthorityBadge } from "@/components/pt/AuthorityBadge";

export const metadata: Metadata = {
  title: "Anfitriões Sérios — Comunidade gratuita para anfitriões",
  description:
    "Comunidade privada e gratuita, só para anfitriões, moderada por um ex-colaborador do Airbnb. Sem drama: foco no problema e na solução.",
};

const DIFERENCIAIS = [
  {
    t: "Moderada por um ex-colaborador do Airbnb",
    d: "Respostas de quem conhece o outro lado, ditas de forma simples e prática.",
  },
  {
    t: "Longe do drama dos grupos de Facebook",
    d: "Sem discussões intermináveis e sem dez opiniões contraditórias.",
  },
  {
    t: "Foco no problema e na solução",
    d: "Cada situação termina com um próximo passo claro.",
  },
  {
    t: "Só anfitriões",
    d: "Sem hóspedes nem agências. A entrada é aprovada para manter a comunidade séria.",
  },
  {
    t: "Atualizações em dia",
    d: "Saber das mudanças do Airbnb a tempo de se preparar, sem surpresas.",
  },
];

const DUVIDAS = [
  { q: "É mesmo gratuita?", a: "Sim. Entrar na comunidade não custa nada." },
  {
    q: "Quem pode entrar?",
    a: "Anfitriões. Há 3 perguntas rápidas à entrada, para manter a comunidade séria.",
  },
  {
    q: "É preciso saber de tecnologia?",
    a: "Não. Tudo é explicado de forma simples.",
  },
  {
    q: "Tem ligação ao Airbnb?",
    a: "Não. É uma comunidade independente.",
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
      className="inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 font-semibold text-white text-[16px] transition-transform hover:scale-[1.03]"
      style={{ background: "var(--color-orange-deep)" }}
    >
      {children}
    </a>
  );
}

export default function LandingGratis() {
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
      <section className="px-6 pt-14 pb-14 md:pt-20 md:pb-16 text-center">
        <div className="max-w-[780px] mx-auto">
          <FadeIn>
            <p className="accent-ink text-xs md:text-[13px] font-bold tracking-[0.18em] uppercase">
              Comunidade gratuita para anfitriões
            </p>

            <h1 className="mt-6 text-[34px] sm:text-[48px] md:text-[56px] font-extrabold leading-[1.07] tracking-[-0.035em]">
              Para anfitriões que querem{" "}
              <span className="brand-gradient-text">resolver, não discutir.</span>
            </h1>

            <p className="mt-7 text-white/60 text-lg md:text-xl leading-relaxed max-w-[620px] mx-auto">
              Um espaço privado, só de anfitriões, onde cada problema com
              hóspedes, avaliações ou anúncios tem uma resposta prática.
            </p>

            <div className="mt-10 flex flex-col items-center gap-3">
              <Cta>Entrar na comunidade gratuita</Cta>
              <p className="text-white/45 text-sm">
                Gratuita · 3 perguntas rápidas à entrada
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="px-6 py-14 md:py-16 border-t border-white/[0.07]">
        <FadeIn>
          <h2 className="text-2xl md:text-[30px] font-extrabold tracking-[-0.03em] text-center">
            O que torna esta comunidade diferente
          </h2>
          <ul className="mt-10 max-w-[720px] mx-auto space-y-4">
            {DIFERENCIAIS.map((d) => (
              <li
                key={d.t}
                className="rounded-2xl border px-6 py-5"
                style={{
                  background: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                }}
              >
                <p className="font-bold text-[17px] leading-snug">{d.t}</p>
                <p className="mt-1.5 text-white/60 text-[15px] leading-relaxed">
                  {d.d}
                </p>
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>

      {/* Quem modera */}
      <section className="px-6 py-14 md:py-16 border-t border-white/[0.07]">
        <FadeIn>
          <div className="max-w-[760px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12">
            <div className="relative shrink-0">
              <div className="relative w-[200px] h-[200px] md:w-[220px] md:h-[220px] rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/images/avatar.webp"
                  alt="Bruno, fundador e moderador da comunidade Anfitriões Sérios"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <AuthorityBadge />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-[28px] font-extrabold tracking-[-0.03em]">
                Quem modera
              </h2>
              <p className="mt-4 text-white/70 text-lg leading-relaxed">
                O Bruno vive em Portugal e passou mais de 3 anos a ajudar
                anfitriões a lidar com problemas e a preparar-se para os
                evitar. Criou esta comunidade para haver um lugar calmo onde
                as respostas ficam ao alcance de todos.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Dúvidas */}
      <section className="px-6 py-14 md:py-16 border-t border-white/[0.07]">
        <FadeIn>
          <h2 className="text-2xl md:text-[28px] font-extrabold tracking-[-0.03em] text-center">
            Para ficar descansado
          </h2>
          <dl className="mt-9 max-w-[640px] mx-auto space-y-6">
            {DUVIDAS.map((d) => (
              <div key={d.q}>
                <dt className="font-bold text-[17px]">{d.q}</dt>
                <dd className="mt-1 text-white/65 text-[16px] leading-relaxed">
                  {d.a}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </section>

      {/* CTA final */}
      <section className="px-6 py-16 md:py-20 border-t border-white/[0.07] text-center">
        <FadeIn>
          <h2 className="text-2xl md:text-[34px] font-extrabold tracking-[-0.03em] max-w-[620px] mx-auto leading-[1.15]">
            Decidir com calma é mais fácil quando há a quem perguntar.
          </h2>
          <div className="mt-9 flex flex-col items-center">
            <Cta>Entrar na comunidade gratuita</Cta>
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
